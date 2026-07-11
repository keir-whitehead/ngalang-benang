import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0 lg:left-1/2">
        <Image
          className="h-full w-full object-cover opacity-35 lg:opacity-75"
          src="/tonkin_underpass.webp"
          alt="Civil construction works at the Tonkin underpass"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/65 to-stone-950/10 lg:from-stone-950/80" />
      </div>
      <div className="site-container relative grid min-h-[720px] items-center py-20 lg:grid-cols-2 lg:py-28">
        <div className="max-w-2xl lg:pr-16">
          <p className="eyebrow text-yellow-300">Indigenous joint venture · Western Australia</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building capability. Creating lasting opportunity.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-200">
            NGALANG BENANG brings Sanning Pty Ltd and Yakiny Moorditj Indigenous
            Corporation together to deliver civil works while building Indigenous
            skills, employment pathways and economic participation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="button-primary"
              >
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
      </div>
    </section>
  );
}
