import Link from "next/link";
import { HeroMesh } from "@/components/HeroMesh";

const heroCss = `
.lx-hero{position:relative;overflow:hidden;padding:96px 0 104px;min-height:560px;background:#0E0F0D;color:#F4F1EA;border-bottom:1px solid rgba(244,241,234,.08);}
.lx-hero__canvas{position:absolute;top:0;right:0;height:100%;width:62%;opacity:.9;pointer-events:none;display:block;z-index:0;}
.lx-hero__mask{position:absolute;top:0;right:0;height:100%;width:62%;background:linear-gradient(90deg,#0E0F0D 8%,rgba(14,15,13,0) 60%);pointer-events:none;z-index:1;}
.lx-hero__container{position:relative;z-index:2;max-width:1280px;margin:0 auto;padding:0 56px;}
.lx-hero__content{max-width:760px;}
.lx-hero__eyebrow{display:flex;align-items:center;gap:12px;margin:0 0 30px;font-family:var(--font-plex-mono),monospace;font-weight:400;font-size:12.5px;letter-spacing:.14em;color:#F0A93B;}
.lx-hero__rule{display:inline-block;width:22px;height:1px;background:#F0A93B;}
.lx-hero__title{margin:0 0 26px;font-family:var(--font-space-grotesk),sans-serif;font-weight:600;font-size:78px;line-height:1.02;letter-spacing:-.025em;text-wrap:balance;}
.lx-hero__subhead{margin:0 0 40px;max-width:560px;font-family:var(--font-plex-sans),sans-serif;font-weight:400;font-size:20px;line-height:1.55;color:rgba(244,241,234,.68);}
.lx-hero__actions{display:flex;gap:18px;flex-wrap:wrap;}
.lx-hero__btn{display:inline-flex;align-items:center;font-family:var(--font-plex-mono),monospace;font-size:14px;text-decoration:none;transition:background-color .2s ease,border-color .2s ease,color .2s ease;}
.lx-hero__btn--primary{font-weight:500;background:#F0A93B;color:#0E0F0D;padding:15px 26px;}
.lx-hero__btn--primary:hover{background:#F4F1EA;}
.lx-hero__btn--secondary{font-weight:400;color:rgba(244,241,234,.8);padding:15px 22px;border:1px solid rgba(244,241,234,.2);}
.lx-hero__btn--secondary:hover{border-color:rgba(244,241,234,.5);}
.lx-hero a:focus-visible{outline:2px solid #F0A93B;outline-offset:3px;}
@media (max-width:768px){
.lx-hero{padding:128px 0 72px;min-height:auto;}
.lx-hero__canvas,.lx-hero__mask{display:none;}
.lx-hero__container{padding:0 24px;}
.lx-hero__title{font-size:clamp(38px,11vw,60px);}
.lx-hero__subhead{font-size:18px;}
}
`;

export function Hero() {
  return (
    <section className="lx-hero">
      <style>{heroCss}</style>

      <HeroMesh className="lx-hero__canvas" />
      <div className="lx-hero__mask" aria-hidden="true" />

      <div className="lx-hero__container">
        <div className="lx-hero__content">
          <p className="lx-hero__eyebrow">
            <span className="lx-hero__rule" aria-hidden="true" />
            AI AUTOMATION · IT CONSULTING
          </p>

          <h1 className="lx-hero__title">
            We find the structure hiding in the noise.
          </h1>

          <p className="lx-hero__subhead">
            We rebuild the messy, manual processes that run your business into
            automated systems that keep running — pairing applied AI with
            senior IT consulting for teams that have outgrown duct tape.
          </p>

          <div className="lx-hero__actions">
            <Link href="/contact" className="lx-hero__btn lx-hero__btn--primary">
              Book a call →
            </Link>
            <Link href="/#process" className="lx-hero__btn lx-hero__btn--secondary">
              See how we work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
