"use client";

import { useEffect, useRef } from "react";

const COLS = 46;
const ROWS = 26;
const W = 1300;
const H = 700;

interface Dot {
  col: number;
  row: number;
  phase: number;
  gridX: number;
  gridY: number;
  order: number;
  structured: boolean;
  amber: boolean;
}

/**
 * Animated hero mesh: a grid of dots that swarm as noise on the left and
 * resolve into an aligned, connected grid with a diagonal amber "signal"
 * band on the right — "structure emerging from the noise."
 *
 * Renders a single static frame if the user prefers reduced motion.
 */
export function HeroMesh({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gx = W / COLS;
    const gy = H / ROWS;

    const dots: Dot[] = [];
    for (let col = 0; col < COLS; col++) {
      for (let row = 0; row < ROWS; row++) {
        const order = col / COLS;
        const structured = order > 0.62;
        const amber =
          structured && Math.abs(col / COLS - row / ROWS - 0.12) < 0.05;
        dots.push({
          col,
          row,
          phase: Math.random() * Math.PI * 2,
          gridX: col * gx + gx / 2,
          gridY: row * gy + gy / 2,
          order,
          structured,
          amber,
        });
      }
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        const amp = (1 - d.order) * 26;
        const x = d.gridX + Math.sin(t * 0.7 + d.phase) * amp;
        const y = d.gridY + Math.cos(t * 0.6 + d.phase * 1.3) * amp;

        if (d.structured && d.col < COLS - 1) {
          const nx = (d.col + 1) * gx + gx / 2;
          const ny = d.row * gy + gy / 2;
          ctx.strokeStyle = `rgba(244,241,234,${d.order * 0.1})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nx, ny);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(x, y, d.structured ? 1.8 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = d.amber
          ? `rgba(240,169,60,${0.55 + d.order * 0.4})`
          : `rgba(244,241,234,${0.1 + d.order * 0.3})`;
        ctx.fill();
      }
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      draw(0);
      return;
    }

    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.016;
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      aria-hidden="true"
      className={className}
    />
  );
}
