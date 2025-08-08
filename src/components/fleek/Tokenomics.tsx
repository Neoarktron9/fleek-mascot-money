import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Liquidity", value: 45 },
  { name: "Community Airdrops", value: 25 },
  { name: "Treasury", value: 15 },
  { name: "Team (Vested)", value: 10 },
  { name: "Marketing", value: 5 },
];

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--secondary))",
  "hsl(var(--muted))",
  "hsl(var(--ring))",
];

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="container mx-auto py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Card className="order-2 md:order-1">
          <CardHeader>
            <CardTitle>Tokenomics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Total Supply: 1,000,000,000 $FLEEK</li>
              <li>Chain: Ethereum (ERC-20)</li>
              <li>Liquidity Locked</li>
              <li>Contract Renounced</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="order-1 md:order-2">
          <CardHeader>
            <CardTitle>Allocation</CardTitle>
          </CardHeader>
          <CardContent style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value" nameKey="name">
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Tokenomics;
