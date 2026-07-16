import type { Metadata } from "next";
import Image from "next/image";
import Contact from "@/components/contact";
import { FadeIn } from "@/components/FadeIn";
import { team } from "@/data/team";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About the Joint Venture | NGALANG BENANG",
  description:
    "Learn about the NGALANG BENANG joint venture, our Indigenous Procurement Policy commitment and our focus on capability, employment and training.",
};

const purposeItems = [
  {
    title: "Economic empowerment",
    copy: "A collaborative business partnership supporting capacity building and long-term employment and training initiatives within Indigenous communities and for Indigenous people.",
  },
  {
    title: "Indigenous procurement",
    copy: "A commitment to the objectives of the Indigenous Procurement Policy and the participation of Indigenous businesses in private and government contracts.",
  },
  {
    title: "Skills and knowledge transfer",
    copy: "A practical pathway for transferring skills and knowledge from non-Indigenous to Indigenous people to strengthen capability, competitiveness and career opportunities.",
  },
  {
    title: "Cultural understanding",
    copy: "Greater understanding and respect between Indigenous and non-Indigenous businesses, supporting more sustainable and ethical business practices.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-stone-950 py-24 text-white sm:py-32">
        <Image
          src="/yre10.webp"
          alt="NGALANG BENANG works on the Yanchep Rail Extension"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/25" />
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-yellow-300">About NGALANG BENANG</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              A joint venture built to create lasting pathways
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
              NGALANG BENANG combines civil works capability with a shared
              commitment to Indigenous economic participation, in partnership
              with Yakiny Moorditj Indigenous Corporation.
            </p>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="bg-white py-20 sm:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Our purpose</p>
              <h2 className="section-title mt-4">Closing the gap through real participation</h2>
              <p className="section-copy mt-6">
                We are intent on creating real, lasting pathways to employment,
                training, economic participation and cultural recognition.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="border-t-2 border-red-700 pt-4">
                  <p className="font-serif text-4xl font-semibold text-stone-950">50%</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">Indigenous workforce target</p>
                </div>
                <div className="border-t-2 border-yellow-400 pt-4">
                  <p className="font-serif text-4xl font-semibold text-stone-950">50%</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">Non-Indigenous workforce target</p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-stone-300 border-y border-stone-300">
              {purposeItems.map((item) => (
                <article key={item.title} className="grid gap-3 py-6 sm:grid-cols-[0.8fr_1.2fr]">
                  <h3 className="flex items-start gap-3 text-base font-semibold text-stone-950">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-stone-600">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-[#f2eee6] py-20 sm:py-28">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image src="/tonkin_footbridge.webp" alt="Civil works on the Tonkin footbridge" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              </div>
              <div>
                <p className="eyebrow">What partnership means</p>
                <h2 className="section-title mt-4">Capability shared. Opportunity multiplied.</h2>
                <p className="section-copy mt-6">
                  The joint venture model creates a direct bridge between commercial
                  delivery and Indigenous capability building. It allows project work
                  to generate enduring skills, experience and opportunity beyond the
                  life of an individual contract.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-white py-20 sm:py-28">
          <div className="site-container">
            <div className="max-w-2xl">
              <p className="eyebrow">Leadership</p>
              <h2 className="section-title mt-4">The people guiding the partnership</h2>
            </div>
            <ul className="mt-12 grid gap-8 lg:grid-cols-2" role="list">
              {team.map((person) => (
                <li key={person.name} className="group flex flex-col gap-6 border-t border-stone-300 pt-7 sm:flex-row">
                  {person.imageUrl && (
                    <Image className="h-28 w-28 shrink-0 rounded-2xl object-cover grayscale transition duration-500 group-hover:grayscale-0" src={person.imageUrl} alt={person.name} width={140} height={140} />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-stone-950">{person.name}</h3>
                    <p className="mt-1 text-sm font-bold text-red-700">{person.role}</p>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{person.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>
      <Contact />
    </main>
  );
}
