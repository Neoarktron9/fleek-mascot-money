import React from "react";
import { Twitter, MessageCircleMore, Send, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto py-10 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="text-lg font-extrabold text-gradient">$FLEEKCOIN</div>
          <p className="text-sm text-muted-foreground mt-2">A parody project. No financial advice. For entertainment only.</p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://x.com/fleekcoin" aria-label="X/Twitter" className="hover-scale" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href="https://t.me/fleekcoin" aria-label="Telegram" className="hover-scale" target="_blank" rel="noreferrer">
            <Send />
          </a>
          <a href="https://discord.gg/fleekcoin" aria-label="Discord" className="hover-scale" target="_blank" rel="noreferrer">
            <MessageCircleMore />
          </a>
          <a href="https://github.com" aria-label="GitHub" className="hover-scale" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </div>
        <div className="text-sm text-right text-muted-foreground">
          © {new Date().getFullYear()} Fleekcoin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
