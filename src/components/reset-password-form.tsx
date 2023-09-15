"use client";

import { useState, FormEvent } from "react";

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState<string>("");

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
      <button
        type="submit"
        className="bg-black text-white text-sm font-medium hover:bg-opacity-95 hover:shadow-md py-1.5 mt-4 rounded-md"
      >
        Send instructions
      </button>
    </form>
  );
};
