import "@/assets/styles/globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import type React from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html
      lang="pt-BR"
      className={cn("min-h-screen h-full", spaceGrotesk.className)}
    >
      <body className="h-full bg-background">
        <div className="flex flex-col h-full">
          <Navbar />
          <main className="flex-1 bg-red-500">{children}</main>
          <div>Footer</div>
        </div>
      </body>
    </html>
  );
}
