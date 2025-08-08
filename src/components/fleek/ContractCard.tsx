import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, ShieldCheck, Lock, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CONTRACT = "0xF1eEKF1eEKF1eEKF1eEKF1eEKF1eEKF1eEKF1eE"; // placeholder

const copy = async () => {
  try {
    await navigator.clipboard.writeText(CONTRACT);
    toast({ title: "Copied", description: "Contract address copied to clipboard." });
  } catch (e) {
    toast({ title: "Failed", description: "Could not copy. Please try manually." });
  }
};

const ContractCard: React.FC = () => {
  return (
    <section className="container mx-auto pt-6 md:pt-10">
      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        <div className="rounded-xl border p-6 shadow-elevated">
          <p className="text-sm text-muted-foreground mb-2">Official Contract (Ethereum)</p>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <code className="px-3 py-2 rounded-md bg-accent/40 text-sm break-all flex-1">
              {CONTRACT}
            </code>
            <div className="flex gap-2">
              <Button variant="subtle" onClick={copy} aria-label="Copy contract">
                <Copy /> Copy
              </Button>
              <Button asChild variant="nav">
                <a href={`https://etherscan.io/address/${CONTRACT}`} target="_blank" rel="noreferrer">
                  <ExternalLink /> View
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border p-6 shadow-elevated">
          <p className="text-sm text-muted-foreground mb-3">Security</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck className="text-primary" /> Contract Renounced</li>
            <li className="flex items-center gap-2"><Lock className="text-primary" /> Liquidity Locked</li>
            <li className="flex items-center gap-2"><Sparkles className="text-primary" /> Community-Owned</li>
          </ul>
          <Button className="mt-4 w-full" variant="hero">Buy on DEX</Button>
        </div>
      </div>
    </section>
  );
};

export default ContractCard;
