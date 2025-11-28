import { useState } from "react";

interface Drink {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  color: string;      
  textColor: string;
}

const drinks: Drink[] = [
  {
    id: "pepsi-zero",
    name: "Midnight Cola",
    desc: "Zero Sugar, Deep Taste",
    emoji: "🥤",
    // 아주 짙은 블랙/네이비
    color: "bg-[#020617] border border-[#1e293b] hover:border-[#334155]",
    textColor: "text-slate-300",
  },
  {
    id: "drink2",
    name: "Emerald City",
    desc: "Melon, Lemon, Soda",
    emoji: "🍸",
    // 짙은 숲색 (Forest Green)
    color: "bg-[#022c22] border border-[#064e3b] hover:border-[#065f46]",
    textColor: "text-emerald-200",
  },
  {
    id: "drink3",
    name: "Golden Hour",
    desc: "Whiskey, Bitters, Oak",
    emoji: "🥃",
    // 짙은 브라운
    color: "bg-[#2a1b12] border border-[#451a03] hover:border-[#78350f]",
    textColor: "text-amber-200",
  },
];

export default function DrinkOrder() {
  const [showToast, setShowToast] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<string>("");
  const [isOrdering, setIsOrdering] = useState(false);

  const handleOrder = async (drink: Drink) => {
    if (isOrdering) return;
    setIsOrdering(true);
    setSelectedDrink(drink.name);

    try {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setIsOrdering(false); 
      }, 3000);
    } catch (error) {
      console.error("Order failed:", error);
      setIsOrdering(false);
    }
  };

  return (
    <div className="px-6 pb-12 max-w-[600px] mx-auto bg-[#0f172a]">
      <div className="flex items-center justify-between mb-6 mt-2 px-2">
        <h2 className="text-sm font-medium text-slate-400 tracking-widest uppercase">
          {isOrdering ? "Mixing your drink..." : "Select Menu"}
        </h2>
        <div className="h-[1px] flex-1 bg-slate-800 ml-4"></div>
      </div>

      <div className="space-y-4">
        {drinks.map((drink) => (
          <button
            key={drink.id}
            onClick={() => handleOrder(drink)}
            disabled={isOrdering}
            className={`w-full group flex items-center justify-between p-5 rounded-lg transition-all duration-300
              ${drink.color}
              ${isOrdering 
                ? "opacity-30 grayscale cursor-not-allowed" 
                : "hover:translate-x-1 shadow-lg hover:shadow-xl"
              }`}
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {drink.emoji}
              </div>
              <div className="text-left">
                <div className={`text-lg font-medium tracking-wide ${drink.textColor}`}>{drink.name}</div>
                <div className="text-xs text-slate-500 font-light mt-0.5">{drink.desc}</div>
              </div>
            </div>
            
            {/* 화살표 아이콘 */}
            <div className={`text-slate-600 transition-transform duration-300 ${isOrdering ? '' : 'group-hover:translate-x-1 group-hover:text-slate-400'}`}>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
        ))}
      </div>

      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-toast">
          <div className="bg-[#1e293b] text-slate-200 pl-4 pr-6 py-3 rounded-md shadow-2xl border-l-4 border-[#cca43b] flex items-center gap-4">
            <div className="bg-[#cca43b]/20 p-2 rounded-full">
              <svg className="w-4 h-4 text-[#cca43b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Completed</div>
              <div className="font-medium text-sm">{selectedDrink} is ready</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}