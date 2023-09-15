"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { createContext, useEffect } from "react";

export const AuthContext = createContext(null);

type AuthContextProviderProps = {
  accessToken: string | undefined;
  children: React.ReactNode;
};

export const AuthContextProvider = ({
  accessToken,
  children,
}: AuthContextProviderProps) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return children;
};
