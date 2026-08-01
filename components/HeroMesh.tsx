"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient network mesh behind the hero headline — ported from the LynxLogic
 * Home design. A jittered grid of nodes joined by hair-thin lines cycles
 * slowly between noise and structure, drifts left, fades out toward the
 * headline, reacts to the cursor, and runs an amber "signal" sweep. ~9% of
 * nodes are amber accents that gently twinkle.
 *
 * Renders a single static frame if the user prefers reduced motion.
 */
export function HeroMesh({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const SP = 46; // approx node spacing in px
    interface Node {
      cx: number;
      cy: number;
      jx: number;
      jy: number;
      amp: number;
      sp: number;
      ph: number;
      amber: boolean;
      tws: number;
      i: number;
      j: number;
      x: number;
      y: number;
      near?: number;
      sweep?: number;
    }

    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    let gw = 0;
    let gh = 0;

    const rand = (a: number, b: number, s: number) => {
      const x = Math.sin(s * 127.1 + 311.7) * 43758.5453;
      return a + (x - Math.floor(x)) * (b - a);
    };

    const build = (W: number, H: number) => {
      gw = W;
      gh = H;
      const cols = Math.max(4, Math.round(W / SP)) + 2;
      const rows = Math.max(4, Math.round(H / SP)) + 2;
      nodes = [];
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const s = i * 73.9 + j * 191.3;
          const bx = (i - 1) * (W / (cols - 3));
          const by = (j - 1) * (H / (rows - 3));
          nodes.push({
            cx: bx,
            cy: by,
            jx: rand(-16, 16, s),
            jy: rand(-16, 16, s + 5),
            amp: rand(4, 11, s + 9),
            sp: rand(0.15, 0.45, s + 3),
            ph: rand(0, 6.28, s + 7),
            amber: rand(0, 1, s + 11) < 0.09,
            tws: rand(0.4, 1.1, s + 13),
            i,
            j,
            x: bx,
            y: by,
          });
        }
      }
      const at = (i: number, j: number) =>
        i >= 0 && i < cols && j >= 0 && j < rows ? j * cols + i : -1;
      edges = [];
      for (const n of nodes) {
        const r = at(n.i + 1, n.j);
        const d = at(n.i, n.j + 1);
        const dr = at(n.i + 1, n.j + 1);
        if (r >= 0) edges.push([nodes.indexOf(n), r]);
        if (d >= 0) edges.push([nodes.indexOf(n), d]);
        if (dr >= 0 && rand(0, 1, n.i * 3.1 + n.j * 7.7) < 0.35)
          edges.push([nodes.indexOf(n), dr]);
      }
    };

    const fade = (x: number, W: number) =>
      Math.max(0, Math.min(1, (x / W - 0.06) / 0.34)); // 0 at left -> 1

    const m = { x: -9999, y: -9999 };
    const onMove = (ev: MouseEvent) => {
      const r = cv.getBoundingClientRect();
      m.x = ev.clientX - r.left;
      m.y = ev.clientY - r.top;
    };

    const drawFrame = (t: number) => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const W = cv.clientWidth || 600;
      const H = cv.clientHeight || 600;
      if (cv.width !== Math.round(W * dpr)) {
        cv.width = Math.round(W * dpr);
        cv.height = Math.round(H * dpr);
      }
      if (W !== gw || H !== gh) build(W, H);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // slow cycle 0 (noise) -> 1 (structure), eased with smoothstep.
      const cyc = (Math.sin(t * 0.18) + 1) / 2;
      const order = cyc * cyc * (3 - 2 * cyc);
      const drift = t * 4 * (1 - order * 0.85); // drift nearly stops when structured
      const RAD = 150;
      const sweepX = ((t * 0.14) % 1.35) * W;

      for (const n of nodes) {
        const noiseX = n.cx + n.jx + Math.sin(t * n.sp + n.ph) * n.amp;
        const noiseY =
          n.cy + n.jy + Math.cos(t * n.sp * 0.9 + n.ph) * n.amp * 0.7;
        n.x = noiseX * (1 - order) + n.cx * order - (drift % (W + 80));
        if (n.x < -40) n.x += W + 80;
        n.y = noiseY * (1 - order) + n.cy * order;
        const dx = m.x - n.x;
        const dy = m.y - n.y;
        const d2 = dx * dx + dy * dy;
        n.near = 0;
        if (d2 < RAD * RAD) {
          const d = Math.sqrt(d2) || 1;
          const pull = 1 - d / RAD;
          n.x += (dx / d) * pull * pull * 10;
          n.y += (dy / d) * pull * pull * 10;
          n.near = pull;
        }
        n.sweep = Math.max(0, 1 - Math.abs(n.x - sweepX) / 90);
      }

      ctx.lineWidth = 0.7;
      for (const [a, b] of edges) {
        const na = nodes[a];
        const nb = nodes[b];
        const f = Math.min(fade(na.x, W), fade(nb.x, W));
        if (f <= 0.01) continue;
        const boost = Math.max(
          na.near || 0,
          nb.near || 0,
          (na.sweep || 0) * 0.7,
          (nb.sweep || 0) * 0.7
        );
        const lit = 0.13 + order * 0.3 + boost * 0.5;
        const warm = Math.min(1, order + boost);
        const r = Math.round(150 + warm * 76);
        const g2 = Math.round(146 + warm * 22);
        const bl = Math.round(136 - warm * 73);
        ctx.strokeStyle =
          "rgba(" + r + "," + g2 + "," + bl + "," + (lit * f).toFixed(3) + ")";
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.stroke();
      }

      for (const n of nodes) {
        const f = fade(n.x, W);
        if (f <= 0.01) continue;
        const hot = Math.max(n.near || 0, n.sweep || 0);
        if (n.amber || hot > 0.35) {
          const tw = 0.55 + 0.45 * Math.sin(t * n.tws + n.ph);
          const a = Math.max(n.amber ? 0.9 * tw : 0, hot);
          ctx.beginPath();
          ctx.arc(n.x, n.y, 2.1 + hot * 1.4, 0, 6.2832);
          ctx.fillStyle = "rgba(226,168,63," + (a * f).toFixed(3) + ")";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(n.x, n.y, 5.5 + hot * 6, 0, 6.2832);
          ctx.fillStyle =
            "rgba(226,168,63," +
            (0.1 * f * Math.max(n.amber ? tw : 0, hot)).toFixed(3) +
            ")";
          ctx.fill();
        } else {
          const b = 0.38 + (n.near || 0) * 0.4 + (n.sweep || 0) * 0.3;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.4, 0, 6.2832);
          ctx.fillStyle = "rgba(200,196,186," + (b * f).toFixed(3) + ")";
          ctx.fill();
        }
      }
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Single resolved (structured) frame, no motion, no listeners.
      drawFrame(Math.PI / 0.36);
      return;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    let raf = 0;
    const loop = (now: number) => {
      drawFrame(now / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
