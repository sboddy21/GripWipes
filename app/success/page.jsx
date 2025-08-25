"use client";
import Link from "next/link";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/mock-package.jpg"
        alt="Grip Wipes"
        width={150}
        height={150}
        className="mb-6 rounded-lg shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">✅ Order Confirmed!</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Thank you for purchasing Grip Wipes! Your payment has been processed and your order
        is on its way. You’ll also receive an email receipt with your order details.
      </p>
      <Link
        href="/"
        className="bg-green-500 text-black px-6 py-3 rounded font-semibold hover:bg-green-400"
      >
        Back to Home
      </Link>
    </main>
  );
}
