import Link from "next/link";
import { MeetingRings } from "@/components/ArtMotif";

export default function NotFoundPage() {
  return (
    <main className="relative grid min-h-[60vh] place-items-center overflow-hidden bg-stone-950 px-6 py-24 text-white sm:py-32">
      <MeetingRings className="absolute -right-32 -top-32 h-96 w-96 text-yellow-300/10" />
      <div className="relative text-center">
        <p className="eyebrow text-yellow-300">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-stone-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/" className="button-primary">
            Go back home
          </Link>
          <Link
            href="/contact"
            className="button-secondary border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/15"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
