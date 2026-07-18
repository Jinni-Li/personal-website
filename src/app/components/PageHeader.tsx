import type { ReactNode } from "react";
import { Link } from "react-router";

type PageHeaderProps = {
  actionLabel: string;
  actionTo: string;
  icon?: ReactNode;
};

export function PageHeader({ actionLabel, actionTo, icon }: PageHeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F6F0]/90 paper-bg backdrop-blur-md border-b border-[#2C2621]/10 px-6 lg:px-12 py-6 flex justify-between items-center">
      <Link to="/" className="font-serif text-xl font-bold tracking-widest uppercase hover:text-[#0F766E] transition-colors">
        Jinni Li
      </Link>
      <Link to={actionTo} className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2C2621] hover:text-[#0F766E] transition-colors">
        {icon}
        {actionLabel}
      </Link>
    </nav>
  );
}
