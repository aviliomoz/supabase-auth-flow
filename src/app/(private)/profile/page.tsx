import { SignOutButton } from "@/components/sign-out-button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-6">
      <h1 className="text-2xl font-black">Profile</h1>
      <span className="rounded-md bg-slate-200 px-4 py-1">{user?.email}</span>
      <SignOutButton />
    </main>
  );
}
