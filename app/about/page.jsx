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
          width={90}
          height={90}
          className="mx-auto mb-10"
        />

        {/* Headline */}
        <h1 className="text-5xl font-extrabold mb-8">Our Story</h1>

        {/* Brand Story */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Golf is a game of precision. Every detail matters — your stance, your swing, and most
          importantly, your connection to the club. But sweat, dirt, and grime ruin that connection,
          turning confidence into doubt in a single swing. 
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          At <span className="text-emerald-400 font-semibold">Grip Wipes</span>, we set out to fix that.
          Born on the course, designed by golfers, and tested in real rounds, our wipes deliver
          instant tack and freshness — no residue, no gimmicks. Just pure performance in every pouch.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          What started as a simple solution is now becoming a golf essential. From weekend players
          to competitive golfers, Grip Wipes are trusted by those who demand consistency, confidence,
          and control. Because when your hands feel locked in, nothing can shake your game.
        </p>

        {/* Mission Statement */}
        <div className="bg-neutral-900 p-8 rounded-2xl mb-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To keep golfers confident, round after round, with the cleanest and tackiest grips on the course.  
            <br />Rip. Clean. Tack. Repeat.
          </p>
        </div>

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
