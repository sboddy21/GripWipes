"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, CheckCircle, HelpCircle } from "lucide-react";

export default function Home() {
  const goCheckout = async () => {
    const r = await fetch("/api/checkout", { method: "POST" });
    const { url } = await r.json();
    window.location.href = url;
  };

  return (
    <main className="bg-neutral-950 text-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.h1
          className="text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          RIP. CLEAN. TACK. REPEAT.
        </motion.h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-10">
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
      </section>

      {/* Features */}
      <section className="bg-neutral-900 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">30 wipes per pack</h3>
            <p className="text-neutral-400">Resealable pouch sized fo
