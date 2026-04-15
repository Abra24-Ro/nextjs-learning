"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SidebarItem = ({ href, icon, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`
          flex items-center gap-3
          px-4 py-2.5 rounded-xl
          text-sm font-medium
          transition-all duration-200
          ${
            isActive
              ? "bg-[#16A34A] text-white"
              : "text-[#78716C] hover:bg-[#DCFCE7] hover:text-[#15803D]"
          }
        `}
      >
        <span
          className={`
          flex-shrink-0
          ${isActive ? "text-white" : "text-[#A8A29E]"}
          transition-colors duration-200
        `}
        >
          {icon}
        </span>
        <span className="hidden lg:block">{label}</span>
      </Link>
    </li>
  );
};
