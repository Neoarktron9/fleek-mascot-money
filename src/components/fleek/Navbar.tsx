import { Button } from "@/components/ui/button";
import { Menu, Rocket } from "lucide-react";
import React from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2" aria-label="Fleekcoin home">
          <div className="text-xl font-extrabold tracking-tight text-gradient">$FLEEKCOIN</div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#mascot" className="story-link">Mascot</a>
          <a href="#about" className="story-link">About</a>
          <a href="#tokenomics" className="story-link">Tokenomics</a>
          <a href="#roadmap" className="story-link">Roadmap</a>
          <a href="#how-to-buy" className="story-link">How to Buy</a>
          <a href="#faq" className="story-link">FAQ</a>
<Button asChild variant="hero" size="sm" className="ml-2">
  <a href="#how-to-buy">
    <Rocket className="mr-2" /> Get $FLEEK
  </a>
</Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t animate-fade-in">
          <div className="container mx-auto py-3 flex flex-col gap-3">
            <a href="#mascot" onClick={() => setOpen(false)}>Mascot</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#tokenomics" onClick={() => setOpen(false)}>Tokenomics</a>
            <a href="#roadmap" onClick={() => setOpen(false)}>Roadmap</a>
            <a href="#how-to-buy" onClick={() => setOpen(false)}>How to Buy</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
<Button asChild variant="hero" size="sm" onClick={() => setOpen(false)}>
  <a href="#how-to-buy">
    <Rocket className="mr-2" /> Get $FLEEK
  </a>
</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
