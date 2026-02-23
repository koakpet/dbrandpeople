"use client";

import {useEffect, useState} from "react";
import Link from "next/link";

const images = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-18 h-[77vh] flex justify-center items-end">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="DBrand People"
          className={`absolute insert-0 h-full w-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/70" />

      <div className="z-10 text-white text-center mb-9 px-6">
        <p className="mx-auto mt-2 max-w-2xl text-base text-gray-200">
          Made-to-measure garments designed with precision, intention, and
          uncompromising craftsmanship.
        </p>

        <div className="mt-6 flex flex-row items-center justify-center gap-4">
          <Link
            href="/bespoke"
            className="rounded-md bg-white px-6 py-3 text-xs font-medium text-black transition hover:bg-gray-200"
          >
            Request Quote
          </Link>

          <Link
            href="/gallery"
            className="rounded-md border border-white px-6 py-3 text-sm font-medium text-white bg-black transition hover:bg-white hover:text-black"
          >
            View Work
          </Link>
        </div>
      </div>
    </div>
  );
}
