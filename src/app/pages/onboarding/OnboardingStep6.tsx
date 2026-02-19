import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Check, Briefcase, TrendingUp, Users, Award } from "lucide-react";

const purposes = [
  { 
    id: "job", 
    label: "취업 지원", 
    description: "신입 또는 경력 채용을 위한 포트폴리오",
    icon: Briefcase
  },
  { 
    id: "career", 
    label: "이직 준비", 
    description: "경력 강조와 성과 중심 구성",
    icon: TrendingUp
  },
  { 
    id: "freelance", 
    label: "프리랜서 / 외주", 
    description: "프로젝트 경험과 작업물 중심",
    icon: Users
  },
  { 
    id: "branding", 
    label: "개인 브랜딩", 
    description: "전문성과 차별화 포인트 강조",
    icon: Award
  },
];

export function OnboardingStep6() {
  const navigate = useNavigate();
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedPurpose) {
      navigate("/onboarding/step7");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-[#E5E7EB]">
        <div className="max-w-[640px] mx-auto px-8 py-6">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate("/onboarding/step5")}
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
            <span className="text-[13px] font-medium text-[#0052FF]">5/6 단계</span>
          </div>
          <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
            <div className="h-full bg-[#0052FF] w-[83.33%] transition-all duration-500" />
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
              포트폴리오를<br />
              어디에 활용하실 건가요?
            </h1>
            <p className="text-[16px] text-[#6B7280] mb-8">
              목적에 따라 강조되는 내용과 구성이 달라집니다.
            </p>

            {/* Purpose Cards */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {purposes.map((purpose) => {
                const Icon = purpose.icon;
                return (
                  <button
                    key={purpose.id}
                    onClick={() => setSelectedPurpose(purpose.id)}
                    className={`
                      relative p-5 rounded-lg border-2 text-left transition-all duration-200 flex items-start gap-4
                      ${
                        selectedPurpose === purpose.id
                          ? "border-[#0052FF] bg-[#EEF2FF] shadow-md"
                          : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB] hover:shadow-sm"
                      }
                    `}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      selectedPurpose === purpose.id ? "bg-[#0052FF]" : "bg-[#F9FAFB]"
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        selectedPurpose === purpose.id ? "text-white" : "text-[#6B7280]"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[16px] font-semibold text-[#1A1A1A] mb-1">
                        {purpose.label}
                      </p>
                      <p className="text-[14px] text-[#6B7280]">
                        {purpose.description}
                      </p>
                    </div>
                    {selectedPurpose === purpose.id && (
                      <div className="absolute top-5 right-5 w-6 h-6 bg-[#0052FF] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!selectedPurpose}
              className={`
                w-full py-4 rounded-lg font-semibold text-[16px] transition-all
                ${
                  selectedPurpose
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
