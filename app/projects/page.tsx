import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/FadeIn";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Projects | NGALANG BENANG",
  description:
    "Explore NGALANG BENANG project experience across infrastructure, resources, utilities and commercial civil works.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-stone-950 py-24 text-white sm:py-32">
        <Image
          src="/brucerock_blask_paint1.webp"
          alt="Bruce Rock Engineering project works"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow text-yellow-300">Project experience</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Proven on projects that shape Western Australia
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">
              Experience across rail, utilities, resources, water infrastructure and commercial construction — delivered with safety, quality and collaboration.
            </p>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="bg-white py-20 sm:py-28">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow">Selected work</p>
                <h2 className="section-title mt-4">Capability you can see</h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-stone-600">
                Our portfolio reflects the range of environments, delivery partners and technical challenges our teams work across.
              </p>
            </div>
            <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.name} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
                    <Image
                      src={project.src[0]}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 border-t border-stone-300 pt-4 text-lg font-semibold text-stone-950">{project.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <Contact />
    </main>
  );
}
