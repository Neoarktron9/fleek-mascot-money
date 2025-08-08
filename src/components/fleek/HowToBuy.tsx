import React from "react";
import { Button } from "@/components/ui/button";
import { Wallet, ShoppingCart, Rocket } from "lucide-react";

const Step: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="rounded-xl border p-6 h-full hover-scale">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground">{text}</p>
  </div>
);

const HowToBuy: React.FC = () => {
  return (
    <section id="how-to-buy" className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">How to Buy</h2>
        <p className="text-muted-foreground mt-2">Three steps to maximum fleekness</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Step icon={<Wallet />} title="1. Get a wallet" text="Install a Web3 wallet like MetaMask." />
        <Step icon={<ShoppingCart />} title="2. Fund it" text="Buy ETH on an exchange and send it to your wallet." />
        <Step icon={<Rocket />} title="3. Swap for $FLEEK" text="Use your favorite DEX to swap ETH → $FLEEK." />
      </div>

      <div className="text-center mt-8">
        <Button variant="hero" size="lg">Buy on DEX</Button>
      </div>
    </section>
  );
};

export default HowToBuy;
