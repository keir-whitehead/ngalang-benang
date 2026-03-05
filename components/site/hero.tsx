import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <p className="text-xs font-semibold tracking-[0.3em] text-zinc-300">INDIGENOUS PARTNERSHIP</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Building Strong Outcomes Across Civil Construction
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-200">{siteConfig.tagline}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/services">
              <Button size="lg">Our Services</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-zinc-500 bg-zinc-900 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-72 rounded-xl border border-zinc-700 bg-[linear-gradient(130deg,#2d2d2d_10%,#4a4a4a_40%,#6f7f74_100%)] lg:h-auto" />
      </div>
    </section>
  );
}
