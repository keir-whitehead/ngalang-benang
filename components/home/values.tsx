import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { MeetingRings } from "../ArtMotif";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const commitments = [
  {
    title: "Indigenous participation",
    copy: "We endorse the participation of Indigenous businesses in private and government contracts and procurement processes.",
  },
  {
    title: "Skills transfer",
    copy: "We facilitate the transfer of skills and knowledge to strengthen capability, competitiveness and career opportunities.",
  },
  {
    title: "Cultural understanding",
    copy: "We build respect between Indigenous and non-Indigenous businesses to support sustainable and ethical practices.",
  },
  {
    title: "Lasting pathways",
    copy: "We create practical pathways to employment, training, economic participation and cultural recognition.",
  },
];

export default function Values() {
  return (
    <FadeIn>
      <section id="about" className="relative overflow-hidden bg-[#f2eee6] py-20 sm:py-28">
        <MeetingRings className="absolute -left-40 -top-40 h-[28rem] w-[28rem] text-red-700/[0.07]" />
        <div className="site-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative">
              <Image
                src="/yre7.webp"
                alt="Civil construction works on the Yanchep Rail Extension"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
                width={640}
                height={800}
              />
              <div className="absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl bg-red-700 p-5 text-white shadow-xl sm:right-8">
                <p className="font-serif text-3xl font-semibold">50/50</p>
                <p className="mt-1 text-sm leading-6 text-red-50">
                  Our target split of Indigenous and non-Indigenous people across our workforce.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow">Our purpose in practice</p>
              <h2 className="section-title mt-4">Stronger business through shared capability</h2>
              <p className="section-copy mt-6 max-w-2xl">
                We are intent on closing the gap between organisations and Indigenous
                communities through practical opportunity, respect and long-term collaboration.
              </p>
              <div className="mt-10 divide-y divide-stone-300 border-y border-stone-300">
                {commitments.map((commitment) => (
                  <div key={commitment.title} className="grid gap-3 py-5 sm:grid-cols-[1fr_1.5fr]">
                    <h3 className="flex items-start gap-3 text-base font-semibold text-stone-950">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
                      {commitment.title}
                    </h3>
                    <p className="text-sm leading-6 text-stone-600">{commitment.copy}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="button-primary mt-9">
                Learn about the joint venture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
