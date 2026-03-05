import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-200">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-10 md:grid-cols-2 lg:px-8">
        <div className="space-y-2 text-sm">
          <p className="font-semibold tracking-wide text-white">{siteConfig.name}</p>
          <p>{siteConfig.tagline}</p>
          <p>ABN: {siteConfig.abn}</p>
        </div>
        <div className="space-y-2 text-sm md:text-right">
          <p>Email: {siteConfig.email}</p>
          <p>Civil Works: {siteConfig.phoneCivil}</p>
          <p>Indigenous Affairs: {siteConfig.phoneIndigenous}</p>
          <p>
            {siteConfig.addressLine1}, {siteConfig.addressLine2}
          </p>
          <div className="pt-2">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="px-2">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
