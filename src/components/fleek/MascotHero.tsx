import React, { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import mascotImg from "@/assets/fleek-mascot.jpg";

const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");

  const onMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * 8;
    const ry = (px - 0.5) * -8;
    setTransform(`perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`);
  };

  const reset = () => setTransform("");

  return { ref, transform, onMouseMove, reset };
};

const MascotHero: React.FC = () => {
  const { ref, transform, onMouseMove, reset } = useTilt();

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fleekcoin",
    alternateName: "$FLEEKCOIN",
    url: typeof window !== "undefined" ? window.location.origin : "",
    sameAs: [
      "https://x.com/fleekcoin",
      "https://t.me/fleekcoin",
      "https://discord.gg/fleekcoin"
    ]
  }), []);

  return (
    <section id="mascot" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-20 h-80 w-80 rounded-full blur-3xl" style={{ backgroundImage: "var(--gradient-primary)" }} />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full blur-3xl" style={{ backgroundImage: "var(--gradient-primary)" }} />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-14 md:py-24">
        <div className="space-y-6 animate-enter">
          <p className="uppercase tracking-widest text-sm text-muted-foreground">Meet the mascot</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Meet <span className="text-gradient">Fleeky</span> — the face of <span className="text-gradient">$FLEEKCOIN</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            Fleeky is a hyper-stylish, laser-focused meme beast powering the most on-fleek community in crypto. No utility, only vibes — and impeccable drip.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg">Buy on DEX</Button>
            <Button variant="subtle" size="lg">Read Litepaper</Button>
          </div>
        </div>

        <div
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={reset}
          className="relative rounded-xl border p-3 md:p-5 shadow-elevated hover:shadow-glow transition-shadow"
          style={{ transform }}
          aria-label="Fleeky mascot image"
        >
          <img
            src={mascotImg}
            alt="Fleeky the mascot of $FLEEKCOIN with neon vibes"
            loading="lazy"
            className="rounded-lg w-full h-auto select-none"
          />
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
};

export default MascotHero;
