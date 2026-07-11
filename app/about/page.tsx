import Contact from "@/components/contact";
import Image from "next/image";
import { Metadata } from "next";
import { team } from "@/data/team";

import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "NGALANG BENANG | About Us",
  description:
    "NGALANG BENANG is a joint venture focused on Indigenous economic empowerment, capacity building, employment and training.",
};

const stats = [
  { label: "Indigenous workforce target", value: "50%" },
  { label: "Non-Indigenous workforce target", value: "50%" },
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
              A joint venture between Sanning Pty Ltd and Yakiny Moorditj
              Indigenous Corporation.
            </p>
          </div>
        </div>
      </div>

      {/* Content section */}
      <FadeIn>
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our purpose
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  NGALANG BENANG is a strategic joint venture and collaborative
                  business partnership focused on economic empowerment, capacity
                  building, and long-term employment and training initiatives
                  within Indigenous communities and for Indigenous people.
                </p>
                <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our commitment
                </h2>
                <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                  <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                    <p className="text-xl leading-8 text-gray-600">
                      We are committed to the objectives of the Indigenous
                      Procurement Policy and fully endorse the participation of
                      Indigenous businesses in private and government contracts
                      and procurement processes.
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
              Our joint venture facilitates the transfer of skills and knowledge
              from non-Indigenous to Indigenous people, enhancing capability,
              competitiveness and career opportunities.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We focus on cultural understanding and respect between Indigenous
              and non-Indigenous businesses to support more sustainable and
              ethical business practices.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We intend to close the gap between organisations and Indigenous
              communities by creating real, lasting pathways to employment,
              training, economic participation and cultural recognition.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our workforce target is an equal 50/50 split of Indigenous and
              non-Indigenous people.
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
