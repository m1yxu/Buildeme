import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, X } from "lucide-react";

const popularJobs = [
  "프로덕트 매니저",
  "콘텐츠 마케터",
  "프론트엔드 개발자",
  "데이터 분석가",
  "UX 디자이너",
  "백엔드 개발자",
  "영업/세일즈",
  "고객 성공 매니저",
];

export function OnboardingStep3() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState("");

  const handleSelectJob = (job: string) => {
    setSelectedJob(job);
    setSearchTerm("");
  };

  const handleNext = () => {
    if (selectedJob || searchTerm) {
      navigate("/onboarding/step4");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-[#E5E7EB]">
        <div className="max-w-[640px] mx-auto px-8 py-6">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate("/onboarding/step2")}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#6B7280]" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">B</span>
              </div>
              <span className="text-[20px] font-semibold text-[#1A1A1A]">BuildMe</span>
            </div>
          </div>
          
          {/* Progress */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[13px] font-medium text-[#0052FF]">2/6 단계</span>
          </div>
          <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
            <div className="h-full bg-[#0052FF] w-[33.33%] transition-all duration-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="max-w-[640px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-[36px] font-semibold text-[#1A1A1A] mb-3">
              어떤 분야에서<br />
              일하고 계신가요?
            </h1>
            <p className="text-[16px] text-[#6B7280] mb-8">
              현재 또는 희망하는 직무를 선택해주세요.<br />
              이 정보를 바탕으로 포트폴리오 구성과 강조할 내용이 결정됩니다.
            </p>

            {/* Search Input */}
            <div className="mb-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="직무명을 입력하거나 아래에서 선택해주세요"
                className="w-full bg-white border border-[#D1D5DB] rounded-lg px-4 py-3.5 text-[15px] text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent transition-all"
              />
            </div>

            {/* Selected Job */}
            {selectedJob && (
              <div className="mb-6">
                <p className="text-[13px] text-[#6B7280] mb-2">선택한 직무</p>
                <div className="inline-flex items-center gap-2 bg-[#EEF2FF] border border-[#0052FF] text-[#0052FF] px-4 py-2 rounded-lg">
                  <span className="text-[14px] font-medium">{selectedJob}</span>
                  <button
                    onClick={() => setSelectedJob("")}
                    className="hover:bg-[#0052FF] hover:text-white rounded transition-colors p-0.5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Popular Jobs */}
            <div className="mb-8">
              <p className="text-[14px] text-[#6B7280] mb-3">자주 선택되는 직무</p>
              <div className="flex flex-wrap gap-2">
                {popularJobs.map((job) => (
                  <button
                    key={job}
                    onClick={() => handleSelectJob(job)}
                    disabled={selectedJob === job}
                    className={`
                      px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all
                      ${
                        selectedJob === job
                          ? "bg-[#EEF2FF] border-2 border-[#0052FF] text-[#0052FF]"
                          : "bg-white border border-[#E5E7EB] text-[#1A1A1A] hover:border-[#D1D5DB]"
                      }
                    `}
                  >
                    {job}
                  </button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!selectedJob && !searchTerm}
              className={`
                w-full py-4 rounded-lg font-semibold text-[16px] transition-all
                ${
                  selectedJob || searchTerm
                    ? "bg-[#0052FF] hover:bg-[#0047E0] text-white"
                    : "bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed"
                }
              `}
            >
              다음 단계로
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
