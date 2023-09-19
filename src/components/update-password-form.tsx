"use client";

import { useState, FormEvent } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { updatePasswordSchema } from "@/schemas/auth";
import toast from "react-hot-toast";

export const UpdatePasswordForm = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = updatePasswordSchema.safeParse({ password });

    if (!validation.success) {
      return toast.error(validation.error.errors[0].message);
    } else {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        return toast.error(error.message);
      } else {
        toast.success("Contraseña actualizada exitosamente");
        router.replace("/profile");
      }
    }
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
