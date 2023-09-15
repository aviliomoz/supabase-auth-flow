"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";

export const AuthButtons = () => {
  const supabase = createClientComponentClient();
  const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) =>
        !session ? setIsAuth(false) : setIsAuth(true)
      );
  }, [supabase]);

  if (isAuth === undefined) return <></>;

  if (isAuth)
    return (
      <Link
        href={"/profile"}
        className="border px-8 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all bg-emerald-500 text-white "
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
        className="border px-8 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all bg-black text-white "
      >
        Sign up
      </Link>
    </div>
  );
};
