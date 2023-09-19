"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { signInSchema } from "@/schemas/auth";

export const SignInForm = () => {
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = signInSchema.safeParse({ email, password });

    if (!validation.success) {
      return toast.error(validation.error.errors[0].message);
    } else {
      const { error } = await supabase.auth.signInWithPassword(validation.data);

      if (error) {
        return toast.error(error.message);
      } else {
        return toast.success("Sessión iniciada como: " + validation.data.email);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
      <label className="flex items-center justify-between gap-4">
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md px-3 py-1 outline-none w-full"
        />
      </label>
      <label className="flex items-center justify-between gap-4">
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md px-3 py-1 outline-none w-full"
        />
      </label>
      <Link href={"/auth/reset-password"} className="text-sm mx-auto mt-3">
        Forgot your password?
      </Link>
      <button
        type="submit"
        className="bg-black text-white text-sm font-medium hover:bg-opacity-95 hover:shadow-md py-1.5 mt-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
