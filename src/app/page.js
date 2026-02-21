import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Jumbotron / Hero */}
      <section className="relative flex h-[90vh] items-center justify-center bg-black">
        {/* Background image */}
        <img
          src="/images/hero-1.jpg"
          alt="DBrand bespoke fashion"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Bespoke Clothing,
            <br className="hidden sm:block" />
            Crafted for You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
            Made-to-measure garments designed with precision, intention, and
            uncompromising craftsmanship.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/bespoke"
              className="rounded-md bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Request a Bespoke Quote
            </Link>

            <Link
              href="/gallery"
              className="rounded-md border border-white px-8 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-lg font-semibold text-black">
              Made to Measure
            </h3>
            <p className="mt-3 text-gray-600">
              Each garment is tailored specifically to your measurements and
              preferences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black">
              Premium Fabrics
            </h3>
            <p className="mt-3 text-gray-600">
              We source high-quality materials to ensure comfort, durability,
              and elegance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black">
              Handcrafted Finish
            </h3>
            <p className="mt-3 text-gray-600">
              Every detail is finished by skilled hands, not mass production.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Start Your Bespoke Journey
          </h2>
          <p className="mt-4 text-gray-600">
            Submit a request and receive a personalized quote from our tailoring
            team.
          </p>

          <div className="mt-8">
            <Link
              href="/bespoke"
              className="inline-block rounded-md bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// import Carousel from "@/components/Carousel";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main>
//       {/* Hero Carousel */}
//       <section>
//         <Carousel />
//       </section>

//       {/* Brand Intro */}
//       <section style={{padding: "4rem 1.5rem", textAlign: "center"}}>
//         <h1 style={{fontSize: "2.5rem", marginBottom: "1rem"}}>
//           DBrand Bespoke
//         </h1>

//         <p style={{maxWidth: "600px", margin: "0 auto 2rem"}}>
//           Crafted, made-to-measure clothing designed exclusively for you. Every
//           piece is tailored by hand, with precision and purpose.
//         </p>

//         <Link href="/bespoke">
//           <button
//             style={{
//               padding: "0.75rem 1.5rem",
//               fontSize: "1rem",
//               cursor: "pointer",
//               border: "none",
//               backgroundColor: "#000",
//               color: "#fff",
//             }}
//           >
//             Request a Bespoke Quote
//           </button>
//         </Link>
//       </section>
//     </main>
//   );
// }
