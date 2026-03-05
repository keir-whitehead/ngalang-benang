import type { Metadata } from "next";
import "@fontsource/lora/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "NGALANG BENANG",
  description: "NGALANG BENANG civil and Indigenous affairs delivery partner in Western Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
