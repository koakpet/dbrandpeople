"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 w-full bg-white font-serif">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 md:px-6 md:py-3">
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpg"
            width={120}
            height={15}
            alt="DBrand People"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 text-base font-medium tracking-widest text-black md:flex">
          <NavItem href="/gallery">GALLERY</NavItem>
          <NavItem href="/bespoke">BESPOKE</NavItem>
          <NavItem href="/contact">CONTACT</NavItem>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col items-center gap-6 py-6 text-base font-medium tracking-widest text-black">
            <NavItem href="/gallery" onClick={() => setOpen(false)}>
              GALLERY
            </NavItem>
            <NavItem href="/bespoke" onClick={() => setOpen(false)}>
              BESPOKE
            </NavItem>
            <NavItem href="/contact" onClick={() => setOpen(false)}>
              CONTACT
            </NavItem>
          </ul>
        </div>
      )}
    </header>
  );
}

function NavItem({href, children, onClick}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="transition-colors hover:text-gray-500"
      >
        {children}
      </Link>
    </li>
  );
}

// "use client";

// import {useState} from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full bg-white font-serif">
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//         <Link href="/">
//           <div>
//             <Image
//               src="/logo.jpg"
//               width="120"
//               height="15"
//               alt="DBrand People"
//             />
//           </div>
//         </Link>

//         <ul className="flex items-center gap-6 text-base tracking-[3] font-medium text-black">
//           <li>
//             <Link
//               href="/gallery"
//               className="hover:text-gray-500 transition-colors"
//             >
//               GALLERY
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/bespoke"
//               className="hover:text-gray-500 transition-colors"
//             >
//               BESPOKE
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="hover:text-gray-500 transition-colors"
//             >
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
