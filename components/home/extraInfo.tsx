import { UserGroupIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "../FadeIn";

const features = [
  {
    name: "Collaborate & Work With Us!",
    description:
      "Are you seeking an exciting opportunity to be part of a company that values its employees and fosters a positive work culture? Look no further than NGALANG BENANG! We are actively seeking motivated individuals like you to join our team and contribute to continued success in the construction industry.",
    href: "/contact",
    icon: UserGroupIcon,
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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-red-700">
              Opportunities at NGALANG BENANG
            </h2> */}
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-md">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-nonelg:grid-cols-1">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-red-700"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-red-700"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
