export interface Drink {
  id: string;
  name: string;
  csvPath: string;
  desc: string;
  emoji: string;
  color: string;
  textColor: string;
  disabled?: boolean;
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
    name: "Green Plum",
    csvPath: "/home/kevin/bartender_robot/case1.csv",
    desc: "Refreshing plum beverage",
    emoji: "🍏",
    color: "bg-[#132313] border border-[#355c35] hover:border-[#4e7c4e]",
    textColor: "text-green-100",
    disabled: false,
  },
  {
    id: "2",
    name: "Zero Cola",
    csvPath: "/home/kevin/bartender_robot/case2.csv",
    desc: "Zero calorie cool cola",
    emoji: "🥤",
    color: "bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46]",
    textColor: "text-gray-200",
    disabled: false,
  },
];
