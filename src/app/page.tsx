import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-16">
      <div className="flex items-center gap-4">
        <Image
          alt="Supabase logo"
          src={"/supabase-logo.svg"}
          width={30}
          height={30}
        />
        <h1 className="text-lg font-bold">Supabase Auth Flow</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={"/auth/sign-in"}
          className="border px-8 py-2 rounded-md shadow-sm hover:shadow-md transition-all"
        >
          Sign in
        </Link>
        <Link
          href={"/auth/sign-up"}
          className="border px-8 py-2 rounded-md shadow-sm hover:shadow-md transition-all bg-emerald-500 text-white"
        >
          Sign up
        </Link>
      </div>
    </main>
  );
}
