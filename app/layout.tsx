import type { Metadata } from "next";
import "@fontsource/lora/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "NGALANG BENANG",
  description:
    "NGALANG BENANG - A Joint Venture between Sanning Pty Ltd and Yakiny Moorditj Indigenous Corporation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
