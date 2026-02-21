export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600">
          For general enquiries or collaborations, reach out using the details
          below.
        </p>
      </header>

      {/* Contact Info */}
      <section className="space-y-6 text-center">
        <div>
          <p className="text-sm font-medium text-gray-500">Email</p>
          <p className="mt-1 text-lg text-black">contact@dbrandbespoke.com</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Location</p>
          <p className="mt-1 text-lg text-black">Lagos, Nigeria</p>
        </div>
      </section>
    </main>
  );
}
