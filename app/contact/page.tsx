import Contact from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGALANG BENANG | Contact Us",
  description:
    "Contact NGALANG BENANG for civil works and Indigenous affairs enquiries in Western Australia.",
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
