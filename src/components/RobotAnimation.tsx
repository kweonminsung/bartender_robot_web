import React from 'react';

export default function RobotAnimation() {
  return (
    <div className="flex items-center justify-center py-12 px-4 bg-[#0f172a]">
      {/* 씬 컨테이너: 짙은 네이비 배경 */}
      <div className="relative w-full max-w-[600px] h-[320px] bg-[#1e293b] rounded-3xl border border-[#334155] shadow-2xl overflow-hidden group">
        
        {/* === 배경 인테리어 === */}
        {/* 도트 패턴 (미세한 질감) */}
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        
        {/* 뒷편 바 테이블 (Dark Mahogany) */}
        <div className="absolute bottom-20 w-full h-4 bg-[#2a2220] border-t border-[#453630] z-0"></div>
        
        {/* === 1. 왼쪽: 음료 디스펜서 (Matte Navy Metal) === */}
        <div className="absolute bottom-24 left-12 z-10 flex flex-col items-center">
            <div className="w-24 h-36 bg-[#0f172a] rounded-xl border border-[#334155] shadow-xl relative flex justify-center">
                {/* 패널 */}
                <div className="mt-4 w-16 h-12 bg-black rounded border border-[#1e293b] flex items-center justify-center">
                    {/* 디지털 디스플레이 느낌 */}
                    <div className="text-[8px] text-cyan-500 font-mono animate-pulse">READY</div>
                </div>
                {/* 노즐 */}
                <div className="absolute -bottom-2 w-6 h-4 bg-[#475569] rounded-sm"></div>
                {/* 음료 줄기 */}
                <div className="liquid-stream absolute -bottom-12 w-3 h-12 bg-[#b45309]/80 rounded-full z-20"></div>
            </div>
        </div>

        {/* === 2. 로봇 바텐더 (Cool Silver & Navy Tuxedo) === */}
        <div className="robot-character absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            
            {/* 머리 */}
            <div className="relative w-24 h-20 bg-[#e2e8f0] rounded-2xl border border-[#94a3b8] shadow-md z-30 overflow-hidden">
                <div className="absolute top-2 left-2 right-2 bottom-2 bg-[#020617] rounded-xl flex items-center justify-center gap-4 overflow-hidden">
                    {/* 눈 (Cyan LED) */}
                    <div className="robot-eye w-3 h-5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                    <div className="robot-eye w-3 h-5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                </div>
                {/* 안테나 */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#64748b]"></div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>

            {/* 몸통 (네이비 정장) */}
            <div className="relative w-28 h-24 bg-[#172554] rounded-b-3xl mt-[-5px] z-20 flex flex-col items-center pt-3 shadow-lg border-x border-b border-[#1e3a8a]">
                {/* 라펠 (깃) 디테일 */}
                <div className="absolute top-0 w-full h-full opacity-20 bg-gradient-to-b from-black to-transparent px-4"></div>
                
                {/* 나비 넥타이 (골드) */}
                <div className="w-10 h-5 bg-[#cca43b] rounded-full flex items-center justify-center relative z-30 shadow-sm">
                     <div className="w-2.5 h-2.5 bg-[#854d0e] rounded-full"></div>
                </div>
                {/* 단추 */}
                <div className="mt-3 w-2 h-2 bg-[#e2e8f0] rounded-full opacity-80"></div>
                <div className="mt-2 w-2 h-2 bg-[#e2e8f0] rounded-full opacity-80"></div>
            </div>

            {/* 손 */}
            <div className="robot-hands w-40 h-10 absolute top-16 flex justify-between px-1 z-40">
                <div className="w-5 h-5 bg-[#cbd5e1] rounded-full border border-[#94a3b8] shadow-sm"></div>
                <div className="w-5 h-5 bg-[#cbd5e1] rounded-full border border-[#94a3b8] shadow-sm"></div>
            </div>

            {/* 쟁반 (브러쉬드 메탈) */}
            <div className="robot-tray absolute top-14 left-1/2 -translate-x-1/2 w-40 h-3 bg-[#475569] rounded-full shadow-lg z-50 flex justify-center items-end pb-1 border-t border-[#64748b]">
                 {/* 이동 중인 컵 */}
                 <div className="moving-cup mb-2 w-10 h-14 bg-white/5 border border-white/20 rounded-lg overflow-hidden relative shadow-sm backdrop-blur-[2px]">
                     <div className="cup-liquid absolute bottom-0 w-full bg-[#b45309]/90"></div>
                     <div className="absolute -top-4 left-1/2 w-1 h-8 bg-[#94a3b8] -rotate-12 transform origin-bottom"></div>
                 </div>
            </div>
        </div>

        {/* === 3. 전면 카운터 (다크 블루 스톤) === */}
        <div className="absolute bottom-0 w-full h-24 bg-[#1e293b] border-t-4 border-[#334155] z-30 flex items-center justify-between px-8">
            <div className="flex-1"></div>

            {/* 서빙된 음료 */}
            <div className="served-drink relative w-12 h-16 bg-white/5 rounded-lg border border-white/10 shadow-2xl overflow-hidden mr-6 mb-4 backdrop-blur-sm">
                <div className="absolute bottom-0 w-full h-[85%] bg-[#b45309]/90"></div>
                {/* 얼음 */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-white/20 rounded-sm border border-white/10"></div>
                <div className="absolute bottom-5 left-2 w-3 h-3 bg-white/20 rounded-sm border border-white/10 rotate-12"></div>
                {/* 빨대 */}
                <div className="absolute -top-3 left-1/2 w-1 h-10 bg-[#cbd5e1] -rotate-12"></div>
            </div>
            
            {/* 손님 (실루엣 스타일) */}
            <div className="relative flex flex-col items-center mt-8 mr-4 opacity-70">
                <div className="w-20 h-20 bg-[#475569] rounded-full border-4 border-[#334155] shadow-md z-20 relative overflow-hidden">
                    <div className="absolute top-0 w-full h-6 bg-[#1e293b]"></div>
                </div>
                <div className="w-28 h-16 bg-[#334155] rounded-t-full -mt-4 z-10 shadow-sm border-4 border-[#1e293b]"></div>
            </div>
        </div>

      </div>
    </div>
  );
}