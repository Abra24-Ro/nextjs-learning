"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === path;

  return (
    <Link
      href={path}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 12px",
        borderRadius: "4px",
        marginBottom: "2px",
        backgroundColor: isActive ? "#2e4a33" : "transparent",
        borderLeft: isActive ? "2px solid #7aaa8a" : "2px solid transparent",
        transition: "all 0.15s ease",
      }}
      className="group hover:bg-white/5"
    >
      <span style={{ color: isActive ? "#7aaa8a" : "#4a6350" }}>
        {icon}
      </span>
      <div>
        <p style={{
          color: isActive ? "#d4c9a8" : "#8a9e8d",
          fontSize: "13px",
          fontWeight: isActive ? 600 : 400,
          letterSpacing: "0.04em",
          lineHeight: 1.2,
        }}>
          {title}
        </p>
        <p style={{ color: "#4a6350", fontSize: "10px", letterSpacing: "0.04em" }}>
          {subTitle}
        </p>
      </div>
    </Link>
  );
};