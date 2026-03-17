import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Cont  act Page",
  keywords: ["Contact", "Page", "Next.js"],
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">Contact Page</h1>
      </div>
    </main>
  );
}
