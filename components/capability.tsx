import { FadeIn } from "./FadeIn";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Capability() {
  return (
    <FadeIn>
      <section className="relative isolate overflow-hidden bg-[#f2eee6] py-20 sm:py-24">
        <div className="site-container">
          <div className="grid gap-8 border-y border-stone-300 py-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <p className="eyebrow">Capability statement</p>
              <h2 className="section-title mt-4">
                Take a closer look at what we deliver
            </h2>
            <p className="section-copy mt-5 max-w-xl">
              Review our civil works capability, project experience and delivery approach.
            </p>
            </div>
            <div className="md:text-right">
              <a
                href="/capability.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary gap-2"
              >
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                View capability statement
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
