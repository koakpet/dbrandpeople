import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <img className="w-42" src="logo.png" alt="DBraand People Logo" />
        </Link>

        <ul className="flex items-center gap-6 text-lg font-medium text-black">
          <li>
            <Link
              href="/gallery"
              className="hover:text-gray-700 hover:underline transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/bespoke"
              className="hover:text-gray-700  hover:underline transition-colors"
            >
              Bespoke
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-700  hover:underline transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
