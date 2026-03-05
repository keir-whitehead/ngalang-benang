"use client";

import Contact from "@/components/contact";
import Image from "next/image";
import Capability from "@/components/capability";
import { FadeIn } from "@/components/FadeIn";
import { services } from "@/data/services";
import { ServicesCarousel } from "@/components/services-carousel";

const commitments = [
  {
    name: "Safety Mindset",
    description:
      "Our employees' safety is paramount. We ensure this through rigorous safety measures, comprehensive training, and a culture of continuous safety improvement.",
  },
  {
    name: "Consistency",
    description:
      "We uphold consistency in our work, processes, and outcomes for reliability and quality. This consistent standard builds trust with our clients and stakeholders, fostering long-term partnerships and success.",
  },
  {
    name: "Customer Satisfaction",
    description:
      "We are resolute in our pursuit of quality, striving to exceed industry standards and client expectations. We continually improve our processes, embrace innovation, and maintain a meticulous attention to detail.",
  },
];

export default function AboutPage() {
  return (
    <main className="isolate">
      {/* Hero section */}

      <div className="relative isolate -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#a1887f] to-[#4e342e] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Our Services & Capabilities
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  NGALANG BENANG offers comprehensive construction services, including
                  steel fixing, concrete placement, formwork, and earthworks.
                  With a skilled team, we deliver robust solutions tailored to
                  the size and complexity of any project. Additionally, we offer
                  labor hire services, boasting a pool of over 100 qualified
                  tradespeople. Our expertise extends to diverse areas,
                  including resources, process plants, water treatment plants,
                  tilt panel, and infrastructure construction.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="/portnelson1.webp"
                      alt="Port Nelson"
                      height={450}
                      width={450}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="/northstar_jagcor2.webp"
                      alt="Northstar Jagcor"
                      height={450}
                      width={450}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/baldiviswastewater.webp"
                      alt="Baldivis Wastewater Treament Plant"
                      height={450}
                      width={450}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="/yre6.webp"
                      alt="Metronet Yanchep Rail Extension"
                      height={450}
                      width={450}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/yre2.webp"
                      alt="Metronet Yanchep Rail Extension"
                      height={450}
                      width={450}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <FadeIn>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our teams have the proficiency, skills, and capabilities to exceed
              your expectations for varying project sizes and locations,
              offering the services below.
            </p>
          </div>
          <ServicesCarousel services={services} />
          {/* <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl> */}
        </div>
      </FadeIn>

      {/* Image section */}
      <FadeIn>
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src="/yre8.webp"
            alt="Cloudbreak FMG"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            height={895}
            width={1494}
          />
        </div>
      </FadeIn>

      {/* commitments section */}
      <FadeIn>
        <div className="mx-auto my-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Commitment
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At NGALANG BENANG, our top priorities encompass safety, quality,
              sustainability, and mental health. We’ve implemented an employee
              assistance program, and established various support services.
              Through our extensive policies, we safeguard our workforce and the
              environment while ensuring the delivery of high-quality projects.
              This holistic approach creates a positive work environment,
              enhancing the well-being of our team and positively impacting the
              communities we serve.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {commitments.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
      <Capability />
      <Contact />
    </main>
  );
}
