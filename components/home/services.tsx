import Image from "next/image";
import { FadeIn } from "../FadeIn";
import { services } from "@/data/services";

export default function Services() {
  return (
    <FadeIn>
      <div id="services" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl grid grid-cols-1 gap-x-8 gap-y-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="relative ">
                <Image
                  src={service.imageSrc}
                  alt={service.name}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover aspect-square rounded-2xl"
                />

                <div className="absolute inset-0 flex items-center rounded-2xl justify-center bg-black bg-opacity-50">
                  <div className="font-semibold text-white text-xl">
                    {service.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
