import Contact from "@/components/contact";
import Image from "next/image";
import { Metadata } from "next";
import { team } from "@/data/team";

import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "NGALANG BENANG | About Us",
  description:
    "NGALANG BENANG has over 40 years of expertise in the Western Australia construction industry. Specialising in formwork, reinforcing, concreting, and earthworks, we are committed to delivering robust and high-quality solutions for projects in the infrastructure, resources and commercial sectors.",
};

const stats = [
  { label: "Projects completed", value: "180+" },
  { label: "Combined experience", value: "40 Years" },
  { label: "Qualified tradespeople", value: "100+" },
];

export default function AboutPage() {
  return (
    <main className="isolate">
      {/* New Hero */}

      <div className="relative isolate -z-10 overflow-hidden bg-gray-900 py-24 sm:py-32 mb-32">
        <Image
          src="/mlc2.webp"
          alt="MLC Swimming Pool Construction Site Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="-z-10 opacity-20"
          priority
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#a1887f] to-[#4e342e] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#a1887f] to-[#4e342e] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About NGALANG BENANG
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              NGALANG BENANG has over 40 years of expertise in the Western Australia
              construction industry. Specialising in formwork, reinforcing,
              concreting, and earthworks, we are committed to delivering robust
              and high-quality solutions for projects in the infrastructure,
              resources and commercial sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Content section */}
      <FadeIn>
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  Our mission is to consistency deliver innovative,
                  cost-efficient, and high-quality construction solutions,
                  exceeding client expectations. Though our expertise,
                  experience, and collaborative approach, we aim to build
                  long-term partnerships and contribute to the growth and
                  development of the communities we serve.
                </p>
                <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our vision
                </h2>
                <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                  <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                    <p className="text-xl leading-8 text-gray-600">
                      To be the leading provider of formwork, steel, concreting,
                      earthworks and labour hire solutions in Western Australia.
                      Recognized for our unwavering commitment to quality,
                      safety and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Image section */}
      <FadeIn>
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src="/yre10.webp"
            alt="Metronet Yanchep Rail Extension"
            width={1220}
            height={486}
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>
      </FadeIn>

      {/* Values section */}
      <FadeIn>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At NGALANG BENANG, we value integrity and adherence to strong moral and
              ethical principles in our business relationships and interactions.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We consistently aim to instil a safe and positive workplace
              culture in which everyone feels valued and have a real impact on
              projects.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are committed to delivering quality products, services and
              experiences for our clients.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Team section */}
      <FadeIn>
        <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our team
            </h2>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 mt-10 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {team.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  {person.imageUrl && (
                    <Image
                      className="h-16 w-16 rounded-full self-start"
                      src={person.imageUrl}
                      alt={person.name}
                      width={120}
                      height={120}
                    />
                  )}
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-red-700">
                      {person.role}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {person.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      <Contact />
    </main>
  );
}
