import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export const AuthButtons = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session)
    return (
      <Link
        href={"/profile"}
        className="border px-8 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all bg-black text-white"
      >
        Go to profile page
      </Link>
    );

  return (
    <div className="flex items-center gap-4">
      <Link
        href={"/auth/sign-in"}
        className="border px-8 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all"
      >
        Sign in
      </Link>
      <Link
        href={"/auth/sign-up"}
        className="border px-8 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all bg-black text-white"
      >
        Sign up
      </Link>
    </div>
  );
};
