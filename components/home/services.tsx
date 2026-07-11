import Image from "next/image";
import { FadeIn } from "../FadeIn";
import { services } from "@/data/services";
import Link from "next/link";

export default function Services() {
  return (
    <FadeIn>
      <section id="services" className="bg-white py-20 sm:py-28">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Civil works capability</p>
              <h2 className="section-title mt-4">Built for complex work across Western Australia</h2>
              <p className="section-copy mt-5">
                Practical, safety-led delivery across infrastructure, resources and commercial projects.
              </p>
            </div>
            <Link href="/services" className="button-secondary shrink-0 self-start lg:self-auto">
              Explore all services
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.name} href="/services" className="group relative min-h-[320px] overflow-hidden rounded-3xl">
                <Image
                  src={service.imageSrc}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-200">{service.description}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-yellow-300">View capability →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
