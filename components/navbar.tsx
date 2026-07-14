"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navigation from "./navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm shadow-stone-950/5 backdrop-blur">
      <div className="brand-stripe" aria-hidden="true" />
      <div className="hidden bg-stone-950 text-stone-200 md:block">
        <div className="site-container flex h-9 items-center justify-between text-xs">
          <p>
            An Indigenous joint venture with Yakiny Moorditj Indigenous Corporation
          </p>
          <a
            href="mailto:indigenous@ngalang.benang.com.au"
            className="font-semibold text-white transition hover:text-yellow-300"
          >
            indigenous@ngalang.benang.com.au
          </a>
        </div>
      </div>
      <nav
        className="site-container flex h-20 items-center justify-between"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">NGALANG BENANG</span>
          <Image
            className="h-11 w-auto sm:h-12"
            src="/logo_img.webp"
            alt="NGALANG BENANG Logo"
            width={220}
            height={72}
            priority
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`border-b-2 py-2 text-sm font-semibold transition ${
                pathname === item.href
                  ? "border-red-700 text-red-700"
                  : "border-transparent text-stone-700 hover:border-stone-300 hover:text-stone-950"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="button-primary ml-2 min-h-10 px-5 py-2">
            Start a conversation
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-stone-950/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-stone-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">NGALANG BENANG</span>
              <Image
                className="h-8 w-auto"
                src="/logo_img.webp"
                alt="NGALANG BENANG"
                width={170}
                height={56}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-stone-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-stone-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === item.href
                        ? "bg-red-50 text-red-700"
                        : "text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-4 py-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="button-primary w-full"
                >
                  Start a conversation
                </Link>
                <p className="text-sm leading-6 text-stone-500">
                  ABN 52 695 365 667
                  <br />
                  Unit 6/20 Dellamarta Road, Wangara WA 6065
                </p>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
