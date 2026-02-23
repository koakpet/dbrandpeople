import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const images = [
    "/gallery/look-1.jpg",
    "/gallery/look-2.jpg",
    "/gallery/look-3.jpg",
    "/gallery/look-4.jpg",
    "/gallery/look-5.jpg",
    "/gallery/look-6.jpg",
  ];

  return (
    <main className="mx-auto max-w-6xl px-2 pt-18 md:px-6 md:py-16">
      {/* Page Header */}
      <header className="mb-6 md:mb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          Our Work
        </h1>
        <p className="mt-2 md:mt-4 text-gray-600">
          A selection of bespoke pieces crafted for our clients.
        </p>
      </header>

      {/* Image Grid */}
      <section className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={src}
              alt="DBrand bespoke garment"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
