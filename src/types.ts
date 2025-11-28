export interface Drink {
  id: string;
  name: string;
  csvPath: string;
  desc: string;
  emoji: string;
  color: string;
  textColor: string;
}

export interface Order {
  id: string;
  drink: Drink;
  timestamp: Date;
  status: "pending" | "processing" | "completed";
}

export const DRINKS: Drink[] = [
  {
    id: "1",
    name: "Midnight Cola",
    csvPath: "/home/kevin/bartender_robot/case1.csv",
    desc: "Zero Sugar, Deep Taste",
    emoji: "🥤",
    color: "bg-[#020617] border border-[#1e293b] hover:border-[#334155]",
    textColor: "text-slate-300",
  },
  {
    id: "2",
    name: "Emerald City",
    csvPath: "/home/kevin/bartender_robot/case2.csv",
    desc: "Melon, Lemon, Soda",
    emoji: "🍸",
    color: "bg-[#022c22] border border-[#064e3b] hover:border-[#065f46]",
    textColor: "text-emerald-200",
  },
  {
    id: "3",
    name: "Golden Hour",
    csvPath: "/home/kevin/bartender_robot/case3.csv",
    desc: "Whiskey, Bitters, Oak",
    emoji: "🥃",
    color: "bg-[#2a1b12] border border-[#451a03] hover:border-[#78350f]",
    textColor: "text-amber-200",
  },
];
