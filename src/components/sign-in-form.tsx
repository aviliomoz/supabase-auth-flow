"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <Link
        href={"/auth/reset-password"}
        className="text-sm text-emerald-400 font-medium mx-auto mt-3"
      >
        Forgot your password?
      </Link>
      <button
        type="submit"
        className="bg-emerald-500 text-white text-sm font-medium w-10/12 hover:bg-emerald-400 py-1.5 mt-4 rounded-full mx-auto"
      >
        Submit
      </button>
    </form>
  );
};
