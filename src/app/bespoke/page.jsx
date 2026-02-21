import BespokeForm from "@/components/forms/BespokeForm";

export default function BespokePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          Request a Bespoke Quote
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Submit your preferences and inspiration. Our tailoring team will
          review your request and get back to you with a personalized quote.
        </p>
      </header>

      {/* Expectations */}
      <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
        <ul className="space-y-2">
          <li>• Quotes are reviewed manually by our tailoring team</li>
          <li>• Prices vary based on fabric, design, and complexity</li>
          <li>• Final measurements are confirmed during the fitting process</li>
        </ul>
      </section>

      {/* Form */}
      <section>
        <BespokeForm />
      </section>
    </main>
  );
}
