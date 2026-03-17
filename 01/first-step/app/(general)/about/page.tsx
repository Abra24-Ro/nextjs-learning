import { metadata } from "../../layout";

metadata.title = "About Page";
metadata.description = "About Page";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">About Page</h1>
      </div>
    </main>
  );
}
