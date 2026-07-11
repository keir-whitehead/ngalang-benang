import Link from "next/link";
import navigation from "./navigation";

function getCurrentYear() {
  const year = new Date().getFullYear();
  return year;
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
          <Link
            href="/terms-and-conditions"
            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
          >
            Privacy Policy
          </Link>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {getCurrentYear()} NGALANG BENANG. ABN 52 695 365 667. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
