import { TabBar } from "@/src";
import { cookies } from 'next/headers'



export const metadata = {
  title: "Cookies",
  description: "Cookies page",
};

export default async  function CookiesPage() {

   const cookieStore = await  cookies()
   const cookieTab = Number(cookieStore.get("selectedTab")?.value) || 1

  return (
    <div className="max-w-2xl mx-auto space-y-4 py-2">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium text-text">Filtros</h2>
        <p className="text-sm text-text-muted">
          Navegá entre las vistas de tus tareas.
        </p>
      </div>
      <TabBar currentTab={cookieTab} />
    </div>
  );
}
