import { WidgetsGrid } from "@/app/components/dashboard/WidgetsGrid";


export const metadata = {
  title: "Dashboard",
  description: "Panel de control con widgets y métricas",
};
export default function MainPage() {
  return (
    <div className="flex-1 px-4 sm:px-6 md:px-10 py-10 bg-[#f8f7f4] min-h-screen">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 uppercase">
          Dashboard
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800">
          Panel de Control
        </h1>

        <p className="text-gray-500 text-xs sm:text-sm">
          Gestiona tus widgets y métricas principales
        </p>
      </div>

      <WidgetsGrid />
    </div>
  );
}
