"use client";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/logo.png"
          alt="Grip Wipes Logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-6">About Grip Wipes</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Grip Wipes was built for golfers who know the difference that a clean, tacky grip can make.
          Sweat, dirt, sunscreen, and grime destroy performance — and we got tired of slipping shots
          just because our grips weren’t fresh. So we created a simple solution: on-course wipes that
          restore tack, dry fast, and leave no residue.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          We’re not a big box brand. We’re golfers ourselves — obsessed with every detail that gives
          us confidence standing over the ball. Grip Wipes are designed to live in your golf bag,
          ready whenever you need to bring your grips back to life.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          This is just the beginning. We’re building Grip Wipes into a trusted golf essential,
          round after round. Rip. Clean. Tack. Repeat.
        </p>

        <Link
          href="/"
          className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400"
        >
          Back to Shop
        </Link>
      </div>
    </main>
  );
}
