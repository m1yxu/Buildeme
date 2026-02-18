import { useNavigate } from "react-router";
import { DashboardLayout } from "../components/DashboardLayout";
import { CheckCircle2, ArrowRight, Edit3, ArrowLeft } from "lucide-react";

export function ResultPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate("/interview")}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#6B7280]" />
            </button>
            <div className="flex-1">
              <h1 className="text-[24px] font-semibold text-[#1A1A1A]">경험 구조화 완료</h1>
            </div>
            <div className="flex items-center gap-2 bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span className="text-[14px] text-[#10B981] font-medium">점수 82</span>
            </div>
          </div>
        </div>

        {/* STAR Structure Card */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-8 mb-6">
          <div className="space-y-6">
            {/* Situation */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#0052FF] text-[12px] font-medium px-3 py-1 rounded-full mb-3">
                Situation
              </div>
              <p className="text-[15px] text-[#374151] leading-[1.6]">
                카페 아르바이트 중 재고 관리 업무를 담당하며, 기존 수기 관리 방식으로 인해 재고 파악이 어렵고 폐기율이 높은 문제를 발견했습니다.
              </p>
            </div>

            {/* Task */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] text-[12px] font-medium px-3 py-1 rounded-full mb-3">
                Task
              </div>
              <p className="text-[15px] text-[#374151] leading-[1.6]">
                재고 관리 프로세스를 체계화하여 폐기율을 낮추고 효율적인 재고 회전율을 달성하는 것이 목표였습니다.
              </p>
            </div>

            {/* Action */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#3B82F6] text-[12px] font-medium px-3 py-1 rounded-full mb-3">
                Action
              </div>
              <p className="text-[15px] text-[#374151] leading-[1.6]">
                선입선출(FIFO) 원칙을 도입하고, 유통기한 관리 시스템을 구축했습니다. 매일 재고 현황을 체크하고, 유통기한이 임박한 제품을 우선적으로 사용하도록 직원들에게 교육했습니다.
              </p>
            </div>

            {/* Result */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#F59E0B] text-[12px] font-medium px-3 py-1 rounded-full mb-3">
                Result
              </div>
              <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-lg p-4">
                <p className="text-[15px] text-[#374151] leading-[1.6] mb-2">
                  <span className="font-semibold text-[#1A1A1A]">한 달 기준 폐기율 15% 감소</span>를 달성했으며, 재고 회전율이 개선되어 신선한 재료 제공이 가능해졌습니다.
                </p>
                <p className="text-[13px] text-[#F59E0B]">💡 구체적인 기간과 수치 데이터 보강 권장</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#FAFAFA] rounded-lg p-4">
            <p className="text-[13px] text-[#6B7280] mb-1">구체성</p>
            <p className="text-[24px] font-semibold text-[#1A1A1A]">85점</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-4">
            <p className="text-[13px] text-[#6B7280] mb-1">성과 중심</p>
            <p className="text-[24px] font-semibold text-[#1A1A1A]">84점</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-4">
            <p className="text-[13px] text-[#6B7280] mb-1">직무 적합도</p>
            <p className="text-[24px] font-semibold text-[#1A1A1A]">78점</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/interview")}
            className="flex items-center gap-2 bg-white border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#1A1A1A] px-5 py-2.5 rounded-lg font-medium text-[15px] transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            수정하기
          </button>
          <button
            onClick={() => navigate("/job-match")}
            className="flex-1 flex items-center justify-center gap-2 bg-[#0052FF] hover:bg-[#0047E0] text-white px-5 py-2.5 rounded-lg font-medium text-[15px] transition-colors"
          >
            직무 맞춤 분석하기
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
