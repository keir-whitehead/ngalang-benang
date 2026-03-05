import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGALANG BENANG | Services",
  description:
    "NGALANG BENANG offers steel, concrete, formwork, earthworks, and labour hire services.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
