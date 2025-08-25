"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  const goCheckout = async () => {
    const r = await fetch("/api/checkout", { method: "POST" });
    const { url } = await r.json();
    window.location.href = url;
  };

  return (
    <main className="bg-neutral-950 text-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20">
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          RIP. CLEAN. TACK. REPEAT.
        </motion.h1>
        <p className="text-lg text-neutral-400 max-w-xl text-center mb-8">
          On course wipes that strip sweat, dirt, and grime fast so your grips
          feel like new again. Fast drying. Fresh scent. No residue.
        </p>
        <div className="flex gap-4">
          <button
            onClick={goCheckout}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 active:scale-[.98]"
          >
            <ShoppingCart className="w-5 h-5" />
            Shop now
          </button>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Grip Wipes 30 Pack</h2>
          <p className="text-neutral-400 mb-6">
            Resealable pouch with 30 wipes. Cleans grips fast, dries quick, no
            residue, adds tack, fresh scent.
          </p>
          <button
            onClick={goCheckout}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 active:scale-[.98]"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}

