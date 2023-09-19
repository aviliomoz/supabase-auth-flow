"use client";

import { useState, FormEvent } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { signUpSchema } from "@/schemas/auth";
import toast from "react-hot-toast";

export const SignUpForm = () => {
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = signUpSchema.safeParse({ email, password });

    if (!validation.success) {
      return toast.error(validation.error.errors[0].message);
    } else {
      const { error } = await supabase.auth.signUp(validation.data);

      if (error) {
        return toast.error(error.message);
      } else {
        toast.success("Usuario creado exitosamente");
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
      <button
        type="submit"
        className="bg-black text-white text-sm font-medium hover:bg-opacity-95 hover:shadow-md py-1.5 mt-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
