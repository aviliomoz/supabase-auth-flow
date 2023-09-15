import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "@/contexts/auth.context";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supabase auth flow",
  description: "Example code for auth flow with Supabase and Next.js",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token;

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider accessToken={accessToken}>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
