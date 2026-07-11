import Link from "next/link";
import Image from "next/image";
import navigation from "./navigation";

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div className="max-w-md">
            <Image
              src="/logo_img.webp"
              alt="NGALANG BENANG"
              width={220}
              height={72}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-sm leading-7 text-stone-400">
              A strategic joint venture focused on Indigenous economic empowerment,
              capability building and long-term employment and training.
            </p>
            <p className="mt-4 text-xs leading-6 text-stone-500">
              Sanning Pty Ltd &amp; Yakiny Moorditj Indigenous Corporation
            </p>
          </div>
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-white">Navigate</h2>
            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1" aria-label="Footer">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm leading-6 transition hover:text-yellow-300">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-white">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic leading-6">
              <p>Unit 6/20 Dellamarta Road<br />Wangara WA 6065</p>
              <p>
                <a className="hover:text-yellow-300" href="tel:+61451674249">Civil Works: 0451 674 249</a><br />
                <a className="hover:text-yellow-300" href="tel:+61406452401">Indigenous Affairs: 0406 452 401</a>
              </p>
              <a className="break-all hover:text-yellow-300" href="mailto:indigenous@ngalang.benang.com.au">
                indigenous@ngalang.benang.com.au
              </a>
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {getCurrentYear()} NGALANG BENANG · ABN 52 695 365 667</p>
          <div className="flex gap-5">
            <Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
