import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 dark:bg-[#0a0a0a]">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent blob */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-100 via-transparent to-rose-100 opacity-40 blur-3xl dark:from-indigo-950 dark:to-rose-950" />

      <main className="relative z-10 flex flex-col items-center gap-10 text-center">
        {/* Eyebrow label */}
        <span
          className="animate-fade-in font-mono text-xs uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500"
          style={{ animationDelay: "0ms" }}
        >
          Welcome
        </span>

        {/* Heading */}
        <h1
          className="animate-fade-in-up text-[clamp(3rem,12vw,9rem)] font-black leading-none tracking-tighter text-zinc-900 dark:text-zinc-50"
          style={{
            fontFamily: "'Georgia', serif",
            animationDelay: "80ms",
          }}
        >
          Hello,{" "}
          <em className="italic text-indigo-500 dark:text-indigo-400">
            World
          </em>
          .
        </h1>

        {/* Divider */}
        <div
          className="animate-scale-x h-px w-24 bg-zinc-300 dark:bg-zinc-700"
          style={{ animationDelay: "200ms" }}
        />

        {/* CTA link */}
        <Link
          href="/about"
          className="animate-fade-in group relative inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-100 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-700 dark:hover:shadow-indigo-950"
          style={{ animationDelay: "320ms" }}
        >
          About Page
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </main>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-x {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 1; transform: scaleX(1); }
        }
        .animate-fade-in          { animation: fade-in    0.6s ease both; }
        .animate-fade-in-up       { animation: fade-in-up 0.7s ease both; }
        .animate-scale-x          { animation: scale-x   0.6s ease both; }
      `}</style>
    </div>
  );
}