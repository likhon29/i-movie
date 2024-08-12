import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import ContextProviders from "@/context/context-provider";

import { Toaster } from "sonner";
import { siteConfig } from "@/config";
import { cn } from "@/utils";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
};
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-vh-100 bg-light text-dark", poppins.className)}>
        <ContextProviders>
          <main className="position-relative d-flex min-vh-100 flex-column">
            {children}
          </main>
          <Toaster />
        </ContextProviders>
      </body>
    </html>
  );
}
