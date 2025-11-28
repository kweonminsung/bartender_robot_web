import "./App.css";
import Header from "./components/Header";
import RobotAnimation from "./components/RobotAnimation";
import DrinkOrder from "./components/DrinkOrder";

function App() {
  return (
    // 배경: Deep Midnight Blue
    <div className="min-h-screen bg-[#020617] flex justify-center">
      {/* 모바일 컨테이너: 약간 더 밝은 네이비 + 테두리 */}
      <div className="w-full max-w-[420px] bg-[#0f172a] min-h-screen shadow-2xl border-x border-[#1e293b] relative">
        <Header />
        <RobotAnimation />
        <DrinkOrder />
      </div>
    </div>
  );
}

export default App;