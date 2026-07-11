import Image from "next/image";
import { FadeIn } from "../FadeIn";
import { team } from "@/data/team";

export default function Team() {
  return (
    <FadeIn>
      <section className="bg-white py-20 sm:py-28">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title mt-4">Experience with a shared purpose</h2>
          </div>
          <ul
            role="list"
            className="mt-12 grid gap-8 lg:grid-cols-2"
          >
            {team.map((person) => (
              <li key={person.name}>
                <div className="flex h-full flex-col gap-6 border-t border-stone-300 pt-7 sm:flex-row">
                  {person.imageUrl && (
                    <Image
                      className="h-24 w-24 shrink-0 self-start rounded-2xl object-cover grayscale"
                      src={person.imageUrl}
                      alt={person.name}
                      width={120}
                      height={120}
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-stone-950">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold leading-6 text-red-700">
                      {person.role}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-600">
                      {person.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </FadeIn>
  );
}
