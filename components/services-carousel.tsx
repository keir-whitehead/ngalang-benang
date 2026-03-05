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

import { ServicesMapProps, ServicesArrayProps } from "../data/services";

export function ServicesCarousel({ services }: ServicesArrayProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState<ServicesMapProps>(services[0]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelection = () => {
      const currentIndex = api.selectedScrollSnap();
      const nextIndex = (currentIndex + 1) % services.length;
      setSelected(services[nextIndex]);
    };

    updateSelection();
    api.on("select", updateSelection);

    return () => {
      api.off("select", updateSelection);
    };
  }, [api, services]);

  return (
    <div className="px-6 sm:px-2 md:px-6 ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full max-w-lg lg:max-w-[860px] mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="my-8">
          {services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full w-full flex-none rounded-2xl object-cover shadow-lg lg:aspect-square lg:h-auto lg:max-w-sm"
                src={service.imageSrc}
                alt={service.name}
                height={640}
                width={640}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-gray-500 max-w-[600px] mx-auto">
        <p className="text-lg font-semibold text-gray-800">{selected.name}</p>
        <p>{selected.description}</p>
      </div>
    </div>
  );
}
