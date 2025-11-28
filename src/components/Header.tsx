export default function Header() {
  return (
    // 글래스모피즘 효과 (뒤가 비치는 반투명 네이비)
    <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-[#1e293b] py-5 px-6">
      <div className="flex flex-col items-center gap-1">
        {/* 작은 심볼 */}
        <div className="w-8 h-1 bg-gradient-to-r from-transparent via-[#cca43b] to-transparent opacity-80 mb-1"></div>
        
        {/* 메인 타이틀 */}
        <h1 className="text-[#e2e8f0] text-xl font-bold tracking-[0.2em] uppercase font-serif flex items-center gap-3">
          <span className="text-[#cca43b] font-light">The</span>
          <span>Navy</span>
          <span className="text-[#cca43b] font-light">Bar</span>
        </h1>

        {/* 서브 타이틀 */}
        <p className="text-[#64748b] text-[10px] tracking-[0.3em] font-medium mt-1">
          ROBOTIC MIXOLOGY LAB
        </p>
      </div>
    </header>
  );
}