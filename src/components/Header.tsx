export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#18181b]/90 backdrop-blur-md border-b border-[#27272a] py-5 px-6">
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-1 bg-gradient-to-r from-transparent via-[#cca43b] to-transparent opacity-80 mb-1"></div>
        <h1 className="text-[#e2e8f0] text-2xl font-bold tracking-[0.2em] uppercase font-serif flex items-center gap-3">
          SIOR <span className="text-[#cca43b]">bar</span>
        </h1>
        <p className="text-[#64748b] text-[10px] tracking-[0.3em] font-medium mt-1">
          ROBOTIC MIXOLOGY LAB
        </p>
      </div>
    </header>
  );
}
