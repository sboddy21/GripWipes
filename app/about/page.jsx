"use client";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Grip Wipes Logo"
          width={80}
          height={80}
          className="mx-auto mb-8"
        />

        {/* Headline */}
        <h1 className="text-5xl font-extrabold mb-6">About Grip Wipes</h1>

        {/* Brand Story */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Grip Wipes was born on the course — when we realized how much sweat, dirt, sunscreen,
          and grime destroy grips faster than anything. Nothing ruins confidence in a swing like
          slipping hands. And nothing available solved the problem quickly and cleanly.  
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          So we created Grip Wipes: a golf bag–sized solution that restores tack, dries fast,
          and leaves no residue. From the very first prototype, our mission was simple — help
          golfers feel fresh, confident, and locked in over every shot. 
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          Today, Grip Wipes is trusted by golfers everywhere. Whether you’re grinding in a
          tournament or just enjoying a round with friends, you deserve grips that feel brand new.
          Rip. Clean. Tack. Repeat.
        </p>

        {/* CTA */}
        <Link
          href="/#shop"
          className="bg-emerald-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 transition"
        >
          Shop Grip Wipes
        </Link>
      </div>
    </main>
  );
}
