import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-32 lg:pt-28 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <Image
              src="/logo.webp"
              alt="NGALANG BENANG Construction"
              width={280}
              height={42}
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Your Trusted Partner in Formwork, Reinforcing, and Concreting.{" "}
                <Link
                  href="/projects"
                  className="whitespace-nowrap font-semibold text-red-700"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  See Projects <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-16 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-5xl">
              Welcome to NGALANG BENANG,
              <br /> we believe in forming concrete relationships
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              NGALANG BENANG has over 40 years of expertise in the Western Australia
              construction industry. Specialising in formwork, reinforcing,
              concreting, and earthworks, we are committed to delivering robust
              and high-quality solutions for projects in the infrastructure,
              resources and commercial sectors.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether it’s a small-scale venture or a large-scale undertaking,
              local or remote, we have the experience, skills, and capabilities
              to exceed your expectations.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover object-left lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/tonkin_underpass.webp"
            alt="NGALANG BENANG Construction"
            width={1820}
            height={1080}
            priority
          />
        </div>
      </div>
    </div>
  );
}
