import { ResetPasswordForm } from "@/components/reset-password-form";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-8">
      <h1 className="text-2xl font-black">Forgot Password</h1>
      <ResetPasswordForm />
      <Link
        href={"/auth/sign-up"}
        className="text-sm text-emerald-400 font-medium"
      >
        Remember your password? Sign In
      </Link>
    </main>
  );
}
