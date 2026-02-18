import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { DashboardLayout } from "../components/DashboardLayout";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Sparkles, Send, ArrowLeft } from "lucide-react";

const chatMessages = [
  { role: "ai", text: "안녕하세요! 당신의 경험을 함께 구조화해볼게요. 어떤 경험에 대해 이야기하고 싶으신가요?" },
  { role: "user", text: "카페에서 아르바이트했던 경험이요." },
  { role: "ai", text: "좋습니다. 카페에서 일하면서 어떤 일을 주로 담당하셨나요?" },
  { role: "user", text: "음료 제조랑 재고 관리를 했어요." },
  { role: "ai", text: "재고 관리를 하셨군요. 그 경험에서 가장 기억에 남는 성과나 개선 사항이 있나요?" },
  { role: "user", text: "재고 관리를 체계화해서 음식물 폐기가 많이 줄었어요." },
  { role: "ai", text: "훌륭하네요! 대략 어느 정도 비율로 폐기율이 감소했나요?" },
  { role: "user", text: "한 달 기준으로 15% 정도요." },
];

export function InterviewPage() {
  const navigate = useNavigate();
  const [displayedMessages, setDisplayedMessages] = useState<typeof chatMessages>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const currentProgress = 65;

  useEffect(() => {
    chatMessages.forEach((msg, index) => {
      setTimeout(() => {
        if (msg.role === "ai") {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setDisplayedMessages((prev) => [...prev, msg]);
          }, 600);
        } else {
          setDisplayedMessages((prev) => [...prev, msg]);
        }
      }, index * 1200);
    });
  }, []);

  const handleFinish = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate("/result");
    }, 2000);
  };

  if (isProcessing) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <LoadingSpinner />
            <p className="text-[15px] text-[#6B7280] mt-4">경험을 구조화하고 있습니다...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#6B7280]" />
            </button>
            <div className="flex-1">
              <h1 className="text-[24px] font-semibold text-[#1A1A1A]">AI 인터뷰</h1>
            </div>
            <span className="text-[14px] text-[#6B7280]">{currentProgress}% 완료</span>
          </div>
          <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0052FF] transition-all duration-500"
              style={{ width: `${currentProgress}%` }}
            />
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
          <div className="p-6 space-y-4 min-h-[500px] max-h-[600px] overflow-y-auto">
            {displayedMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
              >
                {msg.role === "ai" && (
                  <div className="w-8 h-8 bg-[#EEF2FF] rounded-full flex-shrink-0 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#0052FF]" />
                  </div>
                )}
                <div
                  className={`rounded-lg px-4 py-2.5 max-w-[520px] ${
                    msg.role === "ai"
                      ? "bg-[#F9FAFB] text-[#1A1A1A]"
                      : "bg-[#0052FF] text-white"
                  }`}
                >
                  <p className="text-[14px] leading-[1.5]">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-[#EEF2FF] rounded-full flex-shrink-0 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#0052FF]" />
                </div>
                <div className="bg-[#F9FAFB] rounded-lg px-4 py-2.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#9CA3AF] animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#9CA3AF] animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#9CA3AF] animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-[#E5E7EB] p-4 bg-[#FAFAFA]">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-white border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
              />
              <button className="w-10 h-10 bg-[#0052FF] hover:bg-[#0047E0] rounded-lg flex items-center justify-center transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleFinish}
            className="bg-[#0052FF] hover:bg-[#0047E0] text-white px-6 py-3 rounded-lg font-medium text-[15px] transition-colors"
          >
            인터뷰 종료 후 구조화하기
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
