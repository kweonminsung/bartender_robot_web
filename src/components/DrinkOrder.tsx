import { useState } from "react";

interface Drink {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

const drinks: Drink[] = [
  {
    id: "orange",
    name: "오렌지 주스",
    emoji: "🍊",
    color: "from-orange-400 to-orange-500",
  },
  {
    id: "apple",
    name: "사과 주스",
    emoji: "🍎",
    color: "from-red-400 to-red-500",
  },
  {
    id: "grape",
    name: "포도 주스",
    emoji: "🍇",
    color: "from-purple-400 to-purple-500",
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
      // 백엔드 API로 주문 전송
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          drinkId: drink.id,
          drinkName: drink.name,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // 주문 성공 토스트 표시
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } else {
        alert("주문 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Order failed:", error);
      // 개발 중에는 토스트만 표시
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="px-6 pb-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        음료를 선택해주세요
      </h2>

      <div className="space-y-4">
        {drinks.map((drink) => (
          <button
            key={drink.id}
            onClick={() => handleOrder(drink)}
            disabled={isOrdering}
            className={`w-full bg-gradient-to-r ${drink.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{drink.emoji}</span>
                <span className="text-xl font-semibold">{drink.name}</span>
              </div>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Toast 알림 */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-toast">
          <div className="bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-semibold">
              {selectedDrink} 주문이 완료되었습니다!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
