import { UpdatePasswordForm } from "@/components/update-password-form";

export default function UpdatePasswordPage() {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-8">
      <h1 className="text-2xl font-black">Update Password</h1>
      <UpdatePasswordForm />
    </main>
  );
}
