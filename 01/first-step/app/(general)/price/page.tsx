import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price Page",
  description: "Price Page",
};

export default function PricePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">Price Page</h1>
      </div>
    </main>
  );
}
