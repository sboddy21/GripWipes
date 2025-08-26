"use client";
import Link from "next/link";

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">Wholesale & Retail Inquiries</h1>
        <p className="text-lg text-gray-300 mb-8">
          Grip Wipes is expanding into pro shops, training facilities, and retail stores across the country.
          If you’d like to carry Grip Wipes for your customers, we’d love to connect.
        </p>

        <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
          <p className="text-gray-400 mb-6">
            Please email our wholesale team with your business details and order interest.
            We’ll get back to you within 24–48 hours.
          </p>
          <a
            href="mailto:sales@getgripwipes.com"
            className="bg-emerald-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition"
          >
            Email sales@getgripwipes.com
          </a>
        </div>

        <Link
          href="/"
          className="text-emerald-400 hover:underline"
        >
          ← Back to Shop
        </Link>
      </div>
    </main>
  );
}
