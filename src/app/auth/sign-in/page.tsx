import { SignInForm } from "@/components/sign-in-form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-8">
      <h1 className="text-2xl font-black">Sign In</h1>
      <SignInForm />
      <Link href={"/auth/sign-up"} className="text-sm font-medium">
        Do not have an account? Sign Up
      </Link>
    </main>
  );
}
