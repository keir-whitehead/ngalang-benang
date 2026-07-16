import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://ngalangbenang.com.au"),
  title: "NGALANG BENANG | Indigenous Joint Venture",
  description:
    "NGALANG BENANG is a joint venture focused on Indigenous economic empowerment, capacity building, employment and training.",
  openGraph: {
    title: "NGALANG BENANG | Indigenous Joint Venture",
    description:
      "Civil works capability with a shared commitment to Indigenous economic participation across Western Australia.",
    url: "https://ngalangbenang.com.au",
    siteName: "NGALANG BENANG",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-red-700 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
