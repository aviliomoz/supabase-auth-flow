import { SignUpForm } from "@/components/sign-up-form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-8">
      <h1 className="text-2xl font-black">Create account</h1>
      <SignUpForm />
      <Link
        href={"/auth/sign-in"}
        className="text-sm text-emerald-400 font-medium"
      >
        Already have an account? Sign In
      </Link>
    </main>
  );
}
