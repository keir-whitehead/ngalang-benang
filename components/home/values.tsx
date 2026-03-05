import Image from "next/image";
import { FadeIn } from "../FadeIn";

export default function Values() {
  return (
    <FadeIn>
      <div id="about" className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-red-700">
                  Our Values
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At NGALANG BENANG, we value integrity and adherence to strong moral
                  and ethical principles in our business relationships and
                  interactions.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We consistently aim to instil a safe and positive workplace
                  culture in which everyone feels valued and have a real impact
                  on projects.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We are committed to delivering quality products, services and
                  experiences for our clients.
                </p>
                <p className="mt-6">
                  <a
                    href={"/about"}
                    className="text-sm font-semibold leading-6 text-red-700"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end lg:order-first">
              <Image
                src="/values.webp"
                alt="Product screenshot"
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10 p-4"
                width={640}
                height={640}
              />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
