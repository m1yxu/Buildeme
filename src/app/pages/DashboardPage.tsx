import { useNavigate } from "react-router";
import { DashboardLayout } from "../components/DashboardLayout";
import { ArrowRight, TrendingUp, FileText, Clock, Plus } from "lucide-react";

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-semibold text-[#1A1A1A] mb-1">
            대시보드
          </h1>
          <p className="text-[15px] text-[#6B7280]">현재 진행 상황을 확인하고 다음 단계를 시작하세요</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => navigate("/interview")}
            className="bg-[#0052FF] hover:bg-[#0047E0] text-white p-6 rounded-lg text-left transition-colors group"
          >
            <Plus className="w-6 h-6 mb-3" />
            <p className="text-[16px] font-semibold mb-1">새 인터뷰 시작</p>
            <p className="text-[14px] text-white/80">경험을 입력하고 AI 인터뷰를 시작하세요</p>
          </button>

          <div className="border border-[#E5E7EB] rounded-lg p-6 hover:border-[#D1D5DB] transition-colors">
            <div className="flex items-center justify-between mb-3">
              <Clock className="w-6 h-6 text-[#6B7280]" />
              <span className="text-[13px] text-[#0052FF] font-medium">65%</span>
            </div>
            <p className="text-[16px] font-semibold text-[#1A1A1A] mb-1">진행 중인 인터뷰</p>
            <p className="text-[14px] text-[#6B7280]">카페 근무 경험</p>
          </div>

          <div className="border border-[#E5E7EB] rounded-lg p-6 hover:border-[#D1D5DB] transition-colors">
            <div className="flex items-center justify-between mb-3">
              <FileText className="w-6 h-6 text-[#6B7280]" />
              <span className="text-[13px] text-[#6B7280]">2개</span>
            </div>
            <p className="text-[16px] font-semibold text-[#1A1A1A] mb-1">완성된 포트폴리오</p>
            <p className="text-[14px] text-[#6B7280]">마케팅, 운영 관리</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-[#FAFAFA] rounded-lg p-5">
            <p className="text-[13px] text-[#6B7280] mb-1">평균 점수</p>
            <p className="text-[28px] font-semibold text-[#1A1A1A]">82</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-5">
            <p className="text-[13px] text-[#6B7280] mb-1">생성한 버전</p>
            <p className="text-[28px] font-semibold text-[#1A1A1A]">7</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-5">
            <p className="text-[13px] text-[#6B7280] mb-1">매칭도</p>
            <p className="text-[28px] font-semibold text-[#1A1A1A]">78%</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-5">
            <p className="text-[13px] text-[#6B7280] mb-1">이번 달</p>
            <p className="text-[28px] font-semibold text-[#1A1A1A]">+2</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-4">최근 활동</h2>
          <div className="bg-white border border-[#E5E7EB] rounded-lg divide-y divide-[#E5E7EB]">
            {[
              { title: "카페 근무 경험 인터뷰 완료", time: "2시간 전", status: "completed" },
              { title: "콘텐츠 마케팅 직무 맞춤 분석", time: "1일 전", status: "analyzed" },
              { title: "포트폴리오 PDF 내보내기", time: "3일 전", status: "exported" },
              { title: "운영 관리 경험 추가", time: "5일 전", status: "added" },
            ].map((activity, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                <div>
                  <p className="text-[14px] text-[#1A1A1A] font-medium mb-0.5">{activity.title}</p>
                  <p className="text-[13px] text-[#6B7280]">{activity.time}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#9CA3AF]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
