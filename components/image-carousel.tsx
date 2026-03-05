"use-client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { ProjectCarouselProps, ProjectsArrayProps } from "../data/projects";

export function ImageCarousel({ projects }: ProjectsArrayProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState<ProjectCarouselProps>(projects[0]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelection = () => {
      const currentIndex = api.selectedScrollSnap();
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelected(projects[nextIndex]);
    };

    updateSelection();
    api.on("select", updateSelection);

    return () => {
      api.off("select", updateSelection);
    };
  }, [api, projects]);

  return (
    <div className="px-6 sm:px-2 md:px-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full sm:max-w-lg max-w-[220px] lg:max-w-[860px] mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="my-8">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full w-full flex-none rounded-2xl object-cover shadow-lg lg:aspect-square lg:h-auto lg:max-w-sm"
                src={project.src[0]}
                alt={project.name}
                height={640}
                width={640}
              />
              <div className="py-4 text-center text-sm text-gray-600">
                {project.name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-gray-400">{selected.name}</div>
    </div>
  );
}
