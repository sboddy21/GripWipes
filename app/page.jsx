"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, CheckCircle, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const goCheckout = async () => {
    const r = await fetch("/api/checkout", { method: "POST" });
    const { url } = await r.json();
    window.location.href = url;
  };

  const reviews = [
    "These wipes brought my grips back to life.",
    "No more slipping, feels brand new.",
    "Perfect size for the bag, I use them every round."
  ];

  return (
    <main className="bg-neutral-950 text-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left">
          <motion.h1
            className="text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            RIP. CLEAN. TACK. REPEAT.
          </motion.h1>
          <p className="text-lg text-neutral-400 max-w-xl mb-10">
            On course wipes that strip sweat, dirt, and grime fast so your grips
            feel like new again. Golf bag sized. Fast drying. Fresh scent. No residue.
          </p>
          <button
            onClick={goCheckout}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 active:scale-[.98]"
          >
            <ShoppingCart className="w-5 h-5" />
            Shop now
          </button>
        </div>

        {/* ✅ Hero Image */}
        <div className="flex justify-center">
          <Image
            src="/mock-package.jpg"
            alt="Grip Wipes Package"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-neutral-900 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">30 wipes per pack</h3>
            <p className="text-neutral-400">Resealable pouch sized for the golf bag.</p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No residue finish</h3>
            <p className="text-neutral-400">Cleans grips without leaving slick film.</p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fresh scent</h3>
            <p className="text-neutral-400">Fast drying formula with clean smell.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">What golfers are saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((quote, i) => (
            <div key={i} className="bg-neutral-900 rounded-xl p-6 shadow-lg">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className="text-yellow-400 w-5 h-5 inline-block mr-1"
                />
              ))}
              <p className="text-neutral-300 mt-4">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-lg">
                <HelpCircle className="w-5 h-5" />
                How many wipes come in a pack?
              </h3>
              <p className="text-neutral-400 ml-7">Each pack has 30 resealable wipes.</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-lg">
                <HelpCircle className="w-5 h-5" />
                Will this leave my grips sticky?
              </h3>
              <p className="text-neutral-400 ml-7">
                No residue or slick film — just tacky, playable grips.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-lg">
                <HelpCircle className="w-5 h-5" />
                Can I use them on any grip?
              </h3>
              <p className="text-neutral-400 ml-7">
                Yes, safe for rubber, cord, and poly blend grips.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
