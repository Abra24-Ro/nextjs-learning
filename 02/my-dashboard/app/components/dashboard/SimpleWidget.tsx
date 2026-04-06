import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5";

interface Props {
  title: string;
  subtitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  subtitle,
  label,
  icon,
  href = "#",
}: Props) => {
  return (
    <Link
      href={href}
      className="group block w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition"
    >
      {/* Header */}
      <div className="bg-[#1f3a2f] text-white py-6 sm:py-8 flex flex-col items-center justify-center">
        
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 flex items-center justify-center mb-3 sm:mb-4">
          {icon || <IoCafeOutline size={24} className="text-[#d4c9a8]" />}
        </div>

        <p className="text-[9px] sm:text-[10px] tracking-[0.3em] text-white/60">
          {label || "WIDGET"}
        </p>

        <h3 className="text-base sm:text-lg font-serif mt-1">
          {title}
        </h3>

        {subtitle && (
          <p className="text-[11px] text-white/70 mt-1">
            {subtitle}
          </p>
        )}

        <span className="mt-3 sm:mt-4 text-[10px] sm:text-xs border border-white/30 px-3 py-1 tracking-widest group-hover:bg-white group-hover:text-[#1f3a2f] transition">
          VER DETALLE
        </span>
      </div>

      {/* Body */}
      <div className="bg-[#f8f7f4] px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-gray-600 space-y-2 sm:space-y-3">
        <div className="flex justify-between">
          <span>Valor</span>
          <span className="font-semibold text-gray-800">123</span>
        </div>

        <div className="flex justify-between">
          <span>Estado</span>
          <span className="text-green-600">Activo</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-5 py-2 sm:py-3 border-t text-[10px] sm:text-xs text-gray-500 flex justify-between">
        <span>DASHBOARD</span>
        <span className="group-hover:translate-x-1 transition">
          →
        </span>
      </div>
    </Link>
  );
};