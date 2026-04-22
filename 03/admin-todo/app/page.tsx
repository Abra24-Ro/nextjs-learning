import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
     
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to my Next.js App!
      </h1>
      <Link href="/dashboard" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
        Go to dashboard
      </Link>
    </div>
  );
}
