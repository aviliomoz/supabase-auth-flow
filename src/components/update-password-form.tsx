"use client";

import { useState, FormEvent } from "react";

export const UpdatePasswordForm = () => {
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
      <label className="flex items-center justify-between gap-4">
        <span className="min-w-max">New password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md px-3 py-1 outline-none w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-black text-white text-sm font-medium hover:bg-opacity-95 hover:shadow-md py-1.5 mt-4 rounded-md"
      >
        Update password
      </button>
    </form>
  );
};
