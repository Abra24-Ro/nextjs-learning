import { Sidebar, TopMenu } from "@/src";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Sidebar />

      <div
        className="
        lg:w-[75%] xl:w-[80%] 2xl:w-[85%]
        ml-auto min-h-screen
        flex flex-col
      "
      >
        <TopMenu />

        <main
          className="
          flex-1
          px-4 py-6
          sm:px-6 sm:py-8
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
