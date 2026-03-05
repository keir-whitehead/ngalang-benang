import Image from "next/image";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/FadeIn";
import Contact from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGALANG BENANG | Projects",
  description:
    "NGALANG BENANG’s robust portfolio showcases our expertise in a variety of sectors, including resources, process plants, water treatment plants, and infrastructure construction.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="relative isolate -z-10 overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/brucerock_blask_paint1.jpg"
          alt="Bluerock Engineering Construction Site Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="-z-10 opacity-20"
          priority
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#a1887f] to-[#4e342e] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#a1887f] to-[#4e342e] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              NGALANG BENANG’s robust portfolio showcases our expertise in a variety of
              sectors, including resources, process plants, water treatment
              plants, and infrastructure construction. Each project is a
              testament to our commitment to quality and innovation. From
              small-scale ventures to large-scale undertakings, our portfolio
              reflects our ability to deliver exceptional results across a broad
              range of construction contexts.
            </p>
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="bg-gray-50">
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl py-6 sm:py-8 lg:max-w-none lg:py-12">
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="group relative mt-12 lg:mt-4"
                  >
                    <div className="relative grayscale group-hover:grayscale-0 transition duration-300 h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <Image
                        src={project.src[0]}
                        alt={project.name}
                        className="h-full w-full object-cover object-center"
                        width={640}
                        height={640}
                      />
                    </div>
                    {/* <p className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {project.name}
                  </a>
                </p> */}
                    <h3 className="mt-4 text-base font-semibold text-gray-900">
                      {project.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <Contact />
    </>
  );
}
