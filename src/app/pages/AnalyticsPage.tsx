import { DashboardLayout } from "../components/DashboardLayout";
import { TrendingUp, Target, Award } from "lucide-react";

export function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[24px] font-semibold text-[#1A1A1A] mb-1">분석 리포트</h1>
          <p className="text-[14px] text-[#6B7280]">포트폴리오 품질과 개선 포인트를 확인하세요</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#0052FF] text-white rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5" />
              <h3 className="text-[15px] font-medium">평균 점수</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[36px] font-bold">79</span>
              <span className="text-[16px] opacity-80">/100</span>
            </div>
            <p className="text-[13px] opacity-80 mt-1">전체 경험 기준</p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-[#10B981]" />
              <h3 className="text-[15px] font-medium text-[#1A1A1A]">완료된 경험</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[36px] font-bold text-[#1A1A1A]">2</span>
              <span className="text-[16px] text-[#6B7280]">개</span>
            </div>
            <p className="text-[13px] text-[#10B981] mt-1">+1 이번 달</p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="text-[15px] font-medium text-[#1A1A1A]">최고 점수</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[36px] font-bold text-[#1A1A1A]">82</span>
              <span className="text-[16px] text-[#6B7280]">점</span>
            </div>
            <p className="text-[13px] text-[#6B7280] mt-1">재고 관리 경험</p>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6">
          <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-5">세부 분석</h2>

          <div className="space-y-4">
            {[
              { label: "구체성", score: 85, color: "#0052FF" },
              { label: "성과 중심", score: 84, color: "#10B981" },
              { label: "직무 적합도", score: 78, color: "#F59E0B" },
              { label: "STAR 구조", score: 72, color: "#7C3AED" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[14px] text-[#1A1A1A] font-medium">{item.label}</span>
                  <span className="text-[14px] font-semibold" style={{ color: item.color }}>
                    {item.score}점
                  </span>
                </div>
                <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ backgroundColor: item.color, width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg p-6">
          <h2 className="text-[16px] font-semibold text-[#1A1A1A] mb-4">개선 제안</h2>
          <ul className="space-y-2">
            {[
              "STAR 구조를 더 명확하게 구분하여 작성하면 점수가 향상됩니다",
              "정량적 지표를 추가하면 성과가 더 명확하게 전달됩니다",
              "직무 관련 키워드를 더 포함하면 매칭도가 높아집니다",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#0052FF] mt-1">•</span>
                <p className="text-[14px] text-[#6B7280] leading-[1.5]">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
