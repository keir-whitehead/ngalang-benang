"use client";

import { FadeIn } from "../FadeIn";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function RecentProjects() {
  //   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <FadeIn>
      <div
        id="projects"
        className="relative isolate overflow-hidden bg-stone-950 py-20 text-white sm:py-28"
      >
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-yellow-300">Proven delivery</p>
              <h2 className="section-title mt-4 text-white">Work that stands up in the real world</h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                Experience across rail, utilities, resources and major civil infrastructure.
              </p>
            </div>
            <Link href="/projects" className="button-secondary border-white/30 bg-transparent text-white hover:bg-white/10">
              View all projects
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <article key={project.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-800">
                  <Image
                    src={project.src[0]}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 border-t border-white/20 pt-4 text-lg font-semibold text-white">
                  {project.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
