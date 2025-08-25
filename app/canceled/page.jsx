"use client";
import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">❌ Checkout Canceled</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Looks like you canceled your checkout. No worries — your card wasn’t charged.
        You can return to the store at any time to complete your purchase.
      </p>
      <Link
        href="/"
        className="bg-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-600"
      >
        Back to Shop
      </Link>
    </main>
  );
}
