import { Link, useLocation } from "react-router";
import { LayoutDashboard, FileText, MessageSquare, Sparkles, BarChart3, Settings, HelpCircle } from "lucide-react";

const menuItems = [
  { path: "/dashboard", label: "대시보드", icon: LayoutDashboard },
  { path: "/experience", label: "경험 관리", icon: FileText },
  { path: "/interview", label: "AI 인터뷰", icon: MessageSquare },
  { path: "/job-match", label: "직무 맞춤", icon: Sparkles },
  { path: "/analytics", label: "분석", icon: BarChart3 },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[240px] bg-white border-r border-[#E5E7EB] flex-shrink-0 fixed left-0 top-0 bottom-0 z-10 flex flex-col">
      <div className="p-6 border-b border-[#E5E7EB]">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-[16px]">B</span>
          </div>
          <span className="text-[18px] font-semibold text-[#1A1A1A]">BuildMe</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-[14px]
                ${
                  isActive
                    ? "bg-[#EEF2FF] text-[#0052FF] font-medium"
                    : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#1A1A1A]"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#E5E7EB] space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#1A1A1A] transition-colors">
          <Settings className="w-5 h-5" />
          <span>설정</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#1A1A1A] transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span>도움말</span>
        </button>
      </div>

      <div className="p-4 border-t border-[#E5E7EB]">
        <div className="bg-[#FAFAFA] rounded-lg p-4">
          <p className="text-[13px] font-medium text-[#1A1A1A] mb-1">무료 플랜</p>
          <p className="text-[12px] text-[#6B7280] mb-3">2/5 포트폴리오 사용</p>
          <button className="w-full bg-[#0052FF] hover:bg-[#0047E0] text-white text-[13px] font-medium py-2 rounded-lg transition-colors">
            업그레이드
          </button>
        </div>
      </div>
    </aside>
  );
}
