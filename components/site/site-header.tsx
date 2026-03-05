import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="bg-zinc-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="NGALANG BENANG logo"
            width={44}
            height={44}
            className="rounded bg-white object-cover"
            priority
          />
          <div>
            <p className="text-sm font-semibold tracking-[0.15em]">{siteConfig.name}</p>
            <p className="text-xs text-zinc-300">ABN: {siteConfig.abn}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-200 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
