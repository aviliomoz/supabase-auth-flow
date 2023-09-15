import { AuthButtons } from "@/components/auth-buttons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-16">
      <div className="flex items-center gap-4">
        <picture className="w-8 h-8 relative">
          <Image
            alt="Supabase logo"
            src={"supabase-logo.svg"}
            fill={true}
            quality={100}
          />
        </picture>
        <h1 className="text-lg font-bold">Supabase Auth Flow</h1>
      </div>
      <AuthButtons />
    </main>
  );
}
