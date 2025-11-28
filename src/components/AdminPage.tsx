import React, { useState } from "react";
import type { Order } from "../types";
import { OUT_API, API } from "../api";

interface AdminPageProps {
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({
  orders,
  onUpdateOrderStatus,
}) => {
  const [processingId, setProcessingId] = useState<string | null>(null);

  const handleAcceptOrder = async (order: Order) => {
    if (processingId) return; // 이미 처리 중인 주문이 있으면 무시

    setProcessingId(order.id);
    onUpdateOrderStatus(order.id, "processing");

    try {
      // play_plan 서버 호출
      const response = await fetch(`${OUT_API}/play_plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ csv_path: order.drink.csvPath }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.text();

      // 주문 상태 서버에 반영
      await fetch(`${API}/orders/${order.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });

      onUpdateOrderStatus(order.id, "completed");
      alert(`주문 처리 완료: ${order.drink.name}`);
    } catch (error) {
      console.error("Error processing order:", error);
      alert("주문 처리 중 오류가 발생했습니다.");
      onUpdateOrderStatus(order.id, "pending");
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="p-4 max-w-[420px] mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">관리자 페이지</h1>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            들어온 주문이 없습니다.
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-gray-800">{order.drink.name}</h3>
                <p className="text-sm text-gray-500">
                  {order.timestamp.toLocaleTimeString()}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
                    order.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : order.status === "processing"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {order.status === "pending"
                    ? "대기중"
                    : order.status === "processing"
                    ? "처리중..."
                    : "완료됨"}
                </span>
              </div>

              {order.status === "pending" && (
                <button
                  onClick={() => handleAcceptOrder(order)}
                  disabled={!!processingId}
                  className={`px-4 py-2 rounded-md text-white font-medium transition-colors ${
                    processingId
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {processingId === order.id ? "전송중..." : "수락"}
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPage;
