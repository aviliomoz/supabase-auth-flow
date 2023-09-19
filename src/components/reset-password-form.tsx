"use client";

import { resetPasswordSchema } from "@/schemas/auth";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

export const ResetPasswordForm = () => {
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = resetPasswordSchema.safeParse({ email });

    if (!validation.success) {
      return toast.error(validation.error.errors[0].message);
    } else {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/api/auth/reset`,
      });

      if (error) return toast.error(error.message);

      return toast.success(
        "Te hemos enviado un correo con las instrucciones para restablecer tu contraseña"
      );
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
      <button
        type="submit"
        className="bg-black text-white text-sm font-medium hover:bg-opacity-95 hover:shadow-md py-1.5 mt-4 rounded-md"
      >
        Send instructions
      </button>
    </form>
  );
};
