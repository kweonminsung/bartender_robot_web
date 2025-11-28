import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RobotAnimation from "./components/RobotAnimation";
import DrinkOrder from "./components/DrinkOrder";
import AdminPage from "./components/AdminPage";
import type { Order, Drink } from "./types";
import { API } from "./api";

function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  // 주문 목록 서버에서 가져오기
  useEffect(() => {
    fetch(`${API}/orders`)
      .then((res) => res.json())
      .then((data) => {
        // timestamp를 Date 객체로 변환
        setOrders(
          data.map((order: any) => ({
            ...order,
            timestamp: new Date(order.timestamp),
          }))
        );
      })
      .catch((err) => {
        console.error("주문 목록 불러오기 실패", err);
      });
  }, []);

  // 주문 생성 (서버에 POST)
  const handleOrder = async (drink: Drink) => {
    try {
      const res = await fetch(`${API}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drink }),
      });
      if (!res.ok) throw new Error("주문 생성 실패");
      const order = await res.json();
      order.timestamp = new Date(order.timestamp);
      setOrders((prev) => [order, ...prev]);
    } catch (err) {
      alert("주문 생성 실패");
    }
  };

  // 주문 상태 변경 (로컬 상태만 변경, 서버 반영은 AdminPage에서)
  const handleUpdateOrderStatus = (
    orderId: string,
    status: Order["status"]
  ) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === orderId ? { ...order, status } : order))
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-[#020617] flex justify-center">
            <div className="w-full max-w-[420px] bg-[#0f172a] min-h-screen shadow-2xl border-x border-[#1e293b] relative">
              <Header />
              <RobotAnimation />
              <DrinkOrder onOrder={handleOrder} />
            </div>
          </div>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminPage
            orders={orders}
            onUpdateOrderStatus={handleUpdateOrderStatus}
          />
        }
      />
    </Routes>
  );
}

export default App;
