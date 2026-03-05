import { FadeIn } from "./FadeIn";
import Graybg from "./graybg";

export default function Capability() {
  return (
    <FadeIn>
      <div className="relative isolate overflow-hidden bg-gray-400">
        <Graybg />
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Download our Capability Statement
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Click the button below to view our capability statement.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/capability.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-6 py-2.5 text-md font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View PDF
              </a>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
            fillOpacity="0.7"
          />
          {/* <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#ff7a7a" />
              <stop offset={1} stopColor="#991b1b" />
            </radialGradient>
          </defs> */}
        </svg>
      </div>
    </FadeIn>
  );
}
