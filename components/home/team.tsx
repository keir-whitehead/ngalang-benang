import Image from "next/image";
import { FadeIn } from "../FadeIn";
import { team } from "@/data/team";

export default function Team() {
  return (
    <FadeIn>
      <div className="bg-white py-12 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Our team
        </h2>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl"></div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {team.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  {person.imageUrl && (
                    <Image
                      className="h-16 w-16 rounded-full self-start"
                      src={person.imageUrl}
                      alt={person.name}
                      width={120}
                      height={120}
                    />
                  )}
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-red-700">
                      {person.role}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {person.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}
