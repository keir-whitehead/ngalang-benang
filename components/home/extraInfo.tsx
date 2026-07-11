import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "../FadeIn";
import Link from "next/link";

const features = [
  {
    name: "Create opportunity with us",
    description:
      "We are building long-term pathways into civil construction through employment, training and capability development for Indigenous people and communities.",
    href: "/contact",
    icon: ArrowRightIcon,
  },
  // {
  //   name: "Recent News",
  //   description:
  //     "NGALANG BENANG are a proud partner with the Newest Alliance on the Yanchep Railway. Together we are looking forward to upcoming Aboriginal Cultural Awareness Training 13th Feb 2024. January Newsletter coming out soon with last months community news!",
  //   href: "/about",
  //   icon: NewspaperIcon,
  // },
];

export default function ExtraInfo() {
  return (
    <FadeIn>
      <section className="bg-red-700 py-16 text-white sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            <dl>
              {features.map((feature) => (
                <div key={feature.name} className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-center">
                  <dt className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    {feature.name}
                  </dt>
                  <dd className="text-base leading-7 text-red-50">
                    <p>{feature.description}</p>
                    <p className="mt-7">
                      <Link
                        href={feature.href}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-yellow-300 hover:text-stone-950"
                      >
                        Talk to our team
                        <feature.icon className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
