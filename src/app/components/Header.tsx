import { useNavigate, useLocation } from "react-router";
import { ArrowRight } from "lucide-react";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (!isHomePage) return null;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-[16px]">B</span>
          </div>
          <span className="text-[20px] font-semibold text-[#1A1A1A]">BuildMe</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#features" className="text-[15px] text-[#6B7280] hover:text-[#1A1A1A] transition-colors">
            기능
          </a>
          <a href="#pricing" className="text-[15px] text-[#6B7280] hover:text-[#1A1A1A] transition-colors">
            요금제
          </a>
          <a href="#faq" className="text-[15px] text-[#6B7280] hover:text-[#1A1A1A] transition-colors">
            FAQ
          </a>
          <button 
            onClick={() => navigate("/login")}
            className="text-[15px] text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
          >
            로그인
          </button>
          <button
            onClick={() => navigate("/onboarding/step1")}
            className="bg-[#0052FF] hover:bg-[#0047E0] text-white px-5 py-2 rounded-lg text-[15px] font-medium transition-colors"
          >
            시작하기
          </button>
        </nav>
      </div>
    </header>
  );
}