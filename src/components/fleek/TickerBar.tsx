import React, { useEffect, useMemo, useState } from "react";
import { DollarSign, TrendingUp, Users, Activity } from "lucide-react";

const format = (n: number) =>
  n >= 1_000_000_000
    ? `$${(n / 1_000_000_000).toFixed(2)}B`
    : n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${n.toLocaleString()}`;

const TickerBar: React.FC = () => {
  const [price, setPrice] = useState(0.000042);
  const [mc, setMc] = useState(4_200_000);
  const [vol, setVol] = useState(320_000);
  const [holders, setHolders] = useState(4200);

  useEffect(() => {
    const id = setInterval(() => {
      // playful pseudo-volatility
      setPrice((p) => +(p * (1 + (Math.random() - 0.5) * 0.01)).toFixed(6));
      setMc((m) => Math.max(1, Math.round(m * (1 + (Math.random() - 0.5) * 0.02))));
      setVol((v) => Math.max(1, Math.round(v * (1 + (Math.random() - 0.5) * 0.04))));
      setHolders((h) => h + (Math.random() > 0.7 ? 1 : 0));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const items = useMemo(
    () => [
      { label: "Price", value: `$${price.toFixed(6)}`, Icon: DollarSign },
      { label: "Market Cap", value: format(mc), Icon: TrendingUp },
      { label: "24h Vol", value: format(vol), Icon: Activity },
      { label: "Holders", value: holders.toLocaleString(), Icon: Users },
    ],
    [price, mc, vol, holders]
  );

  return (
    <aside aria-label="$FLEEK market ticker" className="border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto py-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        {items.map(({ label, value, Icon }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="text-primary" />
            <div className="flex-1 flex justify-between">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TickerBar;
