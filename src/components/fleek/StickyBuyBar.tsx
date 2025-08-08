import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, BarChart3, Send } from "lucide-react";

const StickyBuyBar: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 z-50">
      <div className="container mx-auto">
        <div className="rounded-xl border bg-background/80 backdrop-blur shadow-elevated p-3 flex items-center justify-center gap-3 animate-enter">
          <Button variant="hero" size="lg"><Rocket className="mr-2" /> Buy $FLEEK</Button>
          <Button variant="subtle" size="lg"><BarChart3 className="mr-2" /> Chart</Button>
          <Button asChild variant="nav" size="lg">
            <a href="https://t.me/fleekcoin" target="_blank" rel="noreferrer"><Send className="mr-2" /> Telegram</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
