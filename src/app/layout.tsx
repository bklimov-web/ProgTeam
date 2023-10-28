import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prog Team",
  description: "Website builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`bg-slate-100 text-slate-800 dark:text-sky-500 dark:bg-gradient-to-bl from-slate-950 to-cyan-950 ${inter.className} w-screen mx-auto`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
