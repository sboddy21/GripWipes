"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, CheckCircle, HelpCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // ✅ Stripe Checkout
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Error starting checkout.");
    } finally {
      setLoading(false);
    }
  };

  const reviews = [
    "These wipes brought my grips back to life.",
    "No more slipping, feels brand new.",
    "Perfect size for the bag, I use them every round.",
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
            feel like new again. Golf bag sized. Fast drying. Fresh scent. No
            residue.
          </p>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 disabled:opacity-50"
          >
            <ShoppingCart className="w-5 h-5" />
            {loading ? "Loading..." : "Shop now"}
          </button>
        </div>

        {/* Hero Image */}
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
      <section id="features" className="bg-neutral-900 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">30 wipes per pack</h3>
            <p className="text-neutral-400">
              Resealable pouch sized for the golf bag.
            </p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No residue finish</h3>
            <p className="text-neutral-400">
              Cleans grips without leaving slick film.
            </p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fresh scent</h3>
            <p className="text-neutral-400">
              Fast drying formula with clean smell.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 max-w-6xl mx-auto px-6 text-center">
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
      <section id="faq" className="bg-neutral-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-lg">
                <HelpCircle className="w-5 h-5" />
                How many wipes come in a pack?
              </h3>
              <p className="text-neutral-400 ml-7">
                Each pack has 30 resealable wipes.
              </p>
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

      {/* Shop Section */}
      <section id="shop" className="py-20 max-w-3xl mx-auto px-6">
        <div className="bg-neutral-900 rounded-xl p-8 shadow-lg text-center">
          <Image
            src="/mock-package.jpg"
            alt="Grip Wipes 30 Pack"
            width={300}
            height={300}
            className="mx-auto mb-6 rounded-lg"
          />
          <h3 className="text-2xl font-bold mb-2">Grip Wipes 30 Pack</h3>
          <p className="text-neutral-400 mb-4">
            Resealable pouch with 30 wipes. Cleans grips fast, dries quick, no
            residue, adds tack, fresh scent.
          </p>
          <p className="text-emerald-400 font-bold text-xl mb-6">$21.99</p>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 disabled:opacity-50"
          >
            <ShoppingCart className="w-5 h-5" />
            {loading ? "Processing..." : "Add to cart"}
          </button>
        </div>
      </section>
    </main>
  );
}
