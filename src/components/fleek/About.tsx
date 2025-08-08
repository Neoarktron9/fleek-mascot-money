import React from "react";

const About: React.FC = () => (
  <section id="about" className="container mx-auto py-16 md:py-24">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What is $FLEEKCOIN?</h2>
        <p className="text-muted-foreground text-lg">
          $FLEEKCOIN is a hyper-polished meme coin that exists to entertain. It’s about community, creativity, and keeping your bags looking on-fleek. No promises, no road-to-utility hype — just good design, good memes, and a lot of fun.
        </p>
      </div>
      <ul className="space-y-3">
        <li>• Community-first distribution</li>
        <li>• Clean, transparent tokenomics</li>
        <li>• Open-source vibes</li>
        <li>• Mascot-led brand presence</li>
      </ul>
    </div>
  </section>
);

export default About;
