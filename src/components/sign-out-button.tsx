"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const SignOutButton = () => {
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="border px-8 py-2 text-sm rounded-md shadow-sm hover:shadow-md transition-all bg-black text-white"
    >
      Sign Out
    </button>
  );
};
