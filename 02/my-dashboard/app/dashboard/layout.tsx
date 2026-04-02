import { Suspense } from "react";
import { Sidebar } from "../components";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-stone-50 overflow-y-scroll w-screen h-screen antialiased selection:bg-emerald-800 selection:text-stone-100"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-8 w-full min-h-screen text-stone-800 bg-stone-50">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                <p className="text-lg text-stone-500">Cargando...</p>
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
