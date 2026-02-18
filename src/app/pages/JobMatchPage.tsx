import { useState } from "react";
import { useNavigate } from "react-router";
import { DashboardLayout } from "../components/DashboardLayout";
import { Sparkles, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";

const jobOptions = [
  { id: "marketing", label: "콘텐츠 마케팅", score: 78 },
  { id: "pm", label: "프로덕트 매니저", score: 72 },
  { id: "operations", label: "운영 관리", score: 85 },
  { id: "cs", label: "고객 성공 매니저", score: 80 },
];

export function JobMatchPage() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedJobData = jobOptions.find((job) => job.id === selectedJob);

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate("/result")}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#6B7280]" />
            </button>
            <div>
              <h1 className="text-[24px] font-semibold text-[#1A1A1A]">직무 맞춤 분석</h1>
              <p className="text-[14px] text-[#6B7280]">원하는 직무를 선택하면 경험을 맞춤 최적화합니다</p>
            </div>
          </div>
        </div>

        {/* Job Selection */}
        <div className="mb-6">
          <label className="block text-[14px] font-medium text-[#1A1A1A] mb-2">직무 선택</label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white border border-[#D1D5DB] hover:border-[#0052FF] rounded-lg px-4 py-3 flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
            >
              <span className={`text-[15px] ${selectedJob ? "text-[#1A1A1A]" : "text-[#9CA3AF]"}`}>
                {selectedJobData?.label || "직무를 선택하세요"}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#6B7280] transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border border-[#E5E7EB] rounded-lg shadow-lg overflow-hidden z-20">
                {jobOptions.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => {
                      setSelectedJob(job.id);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-[#F9FAFB] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[14px] text-[#1A1A1A]">{job.label}</span>
                    <span className="text-[13px] text-[#6B7280]">매칭도 {job.score}%</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Analysis Result */}
        {selectedJob ? (
          <div className="space-y-4">
            {/* Matching Score */}
            <div className="bg-[#0052FF] rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-[18px] font-semibold">매칭 분석 결과</h2>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[48px] font-bold">{selectedJobData?.score}%</span>
                <span className="text-[16px] opacity-80">매칭도</span>
              </div>
              <p className="text-[14px] opacity-90">
                {selectedJobData?.label} 직무에 적합한 경험입니다
              </p>
            </div>

            {/* Optimized Experience */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6">
              <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-4">직무 맞춤 경험 강조</h3>
              <div className="space-y-3">
                {selectedJob === "marketing" ? (
                  <>
                    <div className="bg-[#FAFAFA] rounded-lg p-4">
                      <p className="text-[14px] text-[#1A1A1A] font-medium mb-1">
                        데이터 기반 의사결정
                      </p>
                      <p className="text-[13px] text-[#6B7280] leading-[1.5]">
                        폐기율 데이터를 분석하여 재고 관리 프로세스를 개선한 경험은 콘텐츠 성과 분석 역량으로 연결됩니다.
                      </p>
                    </div>
                    <div className="bg-[#FAFAFA] rounded-lg p-4">
                      <p className="text-[14px] text-[#1A1A1A] font-medium mb-1">
                        프로세스 최적화
                      </p>
                      <p className="text-[13px] text-[#6B7280] leading-[1.5]">
                        선입선출 시스템 도입은 콘텐츠 발행 워크플로우 개선에 적용 가능한 경험입니다.
                      </p>
                    </div>
                    <div className="bg-[#FAFAFA] rounded-lg p-4">
                      <p className="text-[14px] text-[#1A1A1A] font-medium mb-1">
                        팀 교육 및 협업
                      </p>
                      <p className="text-[13px] text-[#6B7280] leading-[1.5]">
                        직원 교육을 통한 프로세스 정착 경험은 마케팅 팀 내 협업 능력을 보여줍니다.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="bg-[#FAFAFA] rounded-lg p-4">
                    <p className="text-[13px] text-[#6B7280]">
                      선택한 직무에 맞는 경험 강조가 생성됩니다...
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end">
              <button
                onClick={() => navigate("/portfolio")}
                className="flex items-center gap-2 bg-[#0052FF] hover:bg-[#0047E0] text-white px-6 py-3 rounded-lg font-medium text-[15px] transition-colors"
              >
                최종 포트폴리오 생성
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white border-2 border-dashed border-[#E5E7EB] rounded-lg p-12 text-center">
            <div className="w-12 h-12 bg-[#F9FAFB] rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-[#9CA3AF]" />
            </div>
            <p className="text-[15px] text-[#6B7280]">직무를 선택하면 맞춤 분석이 시작됩니다</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
