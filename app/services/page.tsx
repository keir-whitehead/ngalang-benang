import type { Metadata } from "next";
import Image from "next/image";
import Contact from "@/components/contact";
import Capability from "@/components/capability";
import { FadeIn } from "@/components/FadeIn";
import { services } from "@/data/services";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Civil Works Services | NGALANG BENANG",
  description:
    "Explore NGALANG BENANG civil works capability across steel reinforcement, concrete, formwork, earthworks, noise walls and labour hire.",
};

const commitments = [
  "A safety-led approach to every project",
  "Quality delivery and practical problem solving",
  "Indigenous employment, training and capability building",
  "A target 50/50 Indigenous and non-Indigenous workforce split",
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-stone-950 py-24 text-white sm:py-32">
        <Image
          src="/portnelson1.webp"
          alt="Civil construction works at Port Nelson"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/30" />
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-yellow-300">Services &amp; capabilities</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Civil works capability backed by shared purpose
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
              We deliver steel reinforcement, concrete, formwork, earthworks, noise
              walls and labour hire for infrastructure, resources and commercial projects.
            </p>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="bg-white py-20 sm:py-28">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">What we deliver</p>
              <h2 className="section-title mt-4">Practical expertise for complex environments</h2>
              <p className="section-copy mt-5">
                Our teams bring hands-on experience, careful planning and consistent execution to projects of varying scale and location.
              </p>
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.name} className="group border-t border-stone-300 pt-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={service.imageSrc}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-stone-950">{service.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="bg-[#f2eee6] py-20 sm:py-24">
          <div className="site-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 className="section-title mt-4">Reliable delivery with community impact</h2>
              <p className="section-copy mt-5">
                Our joint venture combines construction capability with a commitment to meaningful Indigenous participation and long-term opportunity.
              </p>
            </div>
            <ul className="divide-y divide-stone-300 border-y border-stone-300">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex gap-4 py-5 text-sm font-semibold leading-6 text-stone-800">
                  <CheckCircleIcon className="h-6 w-6 shrink-0 text-red-700" aria-hidden="true" />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>
      <Capability />
      <Contact />
    </main>
  );
}
