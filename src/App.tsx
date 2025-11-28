import "./App.css";
import Header from "./components/Header";
import RobotAnimation from "./components/RobotAnimation";
import DrinkOrder from "./components/DrinkOrder";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* 모바일 중앙 정렬 컨테이너 */}
      <div className="max-w-[420px] mx-auto bg-white min-h-screen shadow-2xl">
        <Header />
        <RobotAnimation />
        <DrinkOrder />
      </div>
    </div>
  );
}

export default App;
