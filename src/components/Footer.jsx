export default function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DBrand. All rights reserved.
      </div>
    </footer>
  );
}
