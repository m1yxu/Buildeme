import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { motion } from "motion/react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Sidebar />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="ml-[280px] min-h-screen"
      >
        {children}
      </motion.main>
    </div>
  );
}
