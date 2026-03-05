import Link from "next/link";

import { Hero } from "@/components/site/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, services } from "@/data/site";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Services</p>
            <h2 className="mt-2 text-3xl font-semibold">What We Deliver</h2>
          </div>
          <Link href="/services">
            <Button variant="ghost">View All Services</Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-zinc-100">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">About Us</p>
            <h2 className="text-3xl font-semibold">Built on Partnership, Focused on Outcomes</h2>
            <p className="leading-relaxed text-zinc-700">
              NGALANG BENANG supports civil projects through practical delivery, clear communication and long-term
              partnership outcomes for clients and communities.
            </p>
            <Link href="/about">
              <Button>Learn More</Button>
            </Link>
          </div>
          <div className="rounded-xl border border-zinc-300 bg-[linear-gradient(140deg,#fefefe_10%,#ececec_50%,#d9e2d3_100%)]" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Projects</p>
        <h2 className="mt-2 text-3xl font-semibold">Recent Work Areas</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project}>
              <CardContent className="p-5 text-zinc-700">{project}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
