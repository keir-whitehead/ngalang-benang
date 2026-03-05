"use client";

import { FadeIn } from "../FadeIn";
import { ImageCarousel } from "@/components/image-carousel";
import { projects } from "@/data/projects";
import Graybg from "../graybg";

export default function RecentProjects() {
  //   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <FadeIn>
      <div
        id="projects"
        className="py-16 sm:py-20 relative isolate overflow-hidden bg-gray-400"
      >
        <Graybg />
        <div className="flex flex-col items-center justify-center px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Recent Projects
            </h2>
          </div>

          <ImageCarousel projects={projects} />

          <div className="mt-12">
            <a
              href="/projects"
              className="text-base font-semibold leading-6 text-gray-600"
            >
              See our projects <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
