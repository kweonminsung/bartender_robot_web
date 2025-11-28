export default function RobotAnimation() {
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="relative w-64 h-64">
        {/* 로봇 베이스 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-8 bg-gray-700 rounded-lg shadow-lg"></div>

        {/* 로봇 팔 (애니메이션) */}
        <div className="robot-arm absolute bottom-8 left-1/2 -translate-x-1/2 origin-bottom">
          {/* 하단 팔 */}
          <div className="w-4 h-24 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full mx-auto shadow-md"></div>

          {/* 관절 */}
          <div className="w-6 h-6 bg-gray-800 rounded-full mx-auto -mt-1 border-2 border-gray-500"></div>

          {/* 상단 팔 */}
          <div className="robot-forearm w-4 h-20 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full mx-auto origin-top">
            {/* 그립퍼 */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <div className="flex gap-1">
                <div className="w-2 h-6 bg-gray-700 rounded-sm robot-gripper-left"></div>
                <div className="w-2 h-6 bg-gray-700 rounded-sm robot-gripper-right"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 음료 컵 (애니메이션) */}
        <div className="drink-cup absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="w-12 h-16 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg shadow-xl border-2 border-orange-300">
            <div className="w-full h-3 bg-orange-200 rounded-t-lg"></div>
          </div>
        </div>

        {/* 배경 효과 */}
        <div className="absolute inset-0 -z-10">
          <div className="pulse-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-200 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
