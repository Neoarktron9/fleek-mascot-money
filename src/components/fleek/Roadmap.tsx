import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    title: "Phase 1 — The Drip",
    items: [
      { text: "Launch $FLEEK & website", done: true },
      { text: "Liquidity & renounce", done: true },
      { text: "1000 holders", done: false },
    ],
  },
  {
    title: "Phase 2 — The Glow Up",
    items: [
      { text: "CEX listings", done: false },
      { text: "Meme contests & airdrops", done: false },
      { text: "Fleeky merch drop", done: false },
    ],
  },
  {
    title: "Phase 3 — On-Fleek Forever",
    items: [
      { text: "Top 10 MC meme coin", done: false },
      { text: "Massive community treasury", done: false },
      { text: "IRL events", done: false },
    ],
  },
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Roadmap</h2>
        <p className="text-muted-foreground mt-2">A relentlessly realistic plan (with extra sparkle)</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {phases.map((phase) => (
          <div key={phase.title} className="rounded-xl border p-6 shadow-elevated">
            <h3 className="font-semibold mb-4 text-xl">{phase.title}</h3>
            <ul className="space-y-3">
              {phase.items.map((i) => (
                <li key={i.text} className="flex items-center gap-3">
                  {i.done ? (
                    <CheckCircle2 className="text-primary" />
                  ) : (
                    <Circle className="text-muted-foreground" />
                  )}
                  <span className={i.done ? "line-through text-muted-foreground" : ""}>{i.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
