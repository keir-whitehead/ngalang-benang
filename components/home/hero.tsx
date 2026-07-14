import Image from "next/image";
import Link from "next/link";
import { JourneyDots, MeetingRings } from "../ArtMotif";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover opacity-25"
          src="/tonkin_underpass.webp"
          alt="Civil construction works at the Tonkin underpass"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/60" />
      </div>
      <div className="site-container relative grid min-h-[720px] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        <div className="order-2 max-w-2xl lg:order-1">
          <p className="eyebrow text-yellow-300">
            Indigenous joint venture · Western Australia
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building capability. Creating lasting opportunity.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-200">
            NGALANG BENANG is an Indigenous joint venture delivering civil works
            across Western Australia while building Indigenous skills, employment
            pathways and economic participation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Work with us
            </Link>
            <Link
              href="/about"
              className="button-secondary border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/15"
            >
              Our joint venture <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-white/20 pt-7 sm:grid-cols-3">
            <div>
              <p className="font-serif text-3xl font-semibold text-yellow-300">50/50</p>
              <p className="mt-1 text-xs leading-5 text-stone-300">Workforce target</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-yellow-300">IPP</p>
              <p className="mt-1 text-xs leading-5 text-stone-300">Indigenous Procurement Policy</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-serif text-3xl font-semibold text-yellow-300">WA</p>
              <p className="mt-1 text-xs leading-5 text-stone-300">Civil works capability</p>
            </div>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative flex w-full max-w-lg flex-col items-center">
            <MeetingRings className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 text-yellow-300/15" />
            <div
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/20 blur-3xl"
              aria-hidden="true"
            />
            <Image
              src="/logo_dark.webp"
              alt="NGALANG BENANG"
              width={409}
              height={409}
              priority
              className="relative h-auto w-full max-w-xs drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:max-w-sm lg:max-w-md"
            />
            <p className="relative -mt-2 font-serif text-2xl font-semibold tracking-wide text-white sm:text-3xl">
              NGALANG BENANG
            </p>
            <JourneyDots className="relative mt-4 h-2 w-32 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
