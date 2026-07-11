import Contact from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGALANG BENANG | Contact Us",
  description:
    "Contact NGALANG BENANG for civil works and Indigenous affairs enquiries in Western Australia.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#f2eee6] py-16 sm:py-20">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact NGALANG BENANG</p>
            <h1 className="section-title mt-4">Project, procurement or employment enquiry?</h1>
            <p className="section-copy mt-5 max-w-2xl">
              Connect with our civil works or Indigenous affairs team and we’ll direct your enquiry to the right person.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
