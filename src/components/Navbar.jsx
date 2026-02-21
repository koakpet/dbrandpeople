import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-black"
        >
          DBrand
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <li>
            <Link
              href="/gallery"
              className="hover:text-black transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/bespoke"
              className="hover:text-black transition-colors"
            >
              Bespoke
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
