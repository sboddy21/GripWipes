"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to checkout.");
    }
    setLoading(false);
  };

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* HERO */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-28 max-w-7xl mx-auto">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            RIP. CLEAN. <span className="text-emerald-500">TACK.</span> REPEAT.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Never lose a shot to slippery grips again. Grip Wipes strip away sweat, dirt, and grime
            in seconds — fast drying, fresh scent, no residue. Confidence restored, every round.
          </p>
          <a
            href="#shop"
            className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition"
          >
            Shop Now
          </a>
        </motion.div>

        {/* Right: Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 md:mt-0"
        >
          <Image
            src="/mock-package.jpg"
            alt="Grip Wipes Pack"
            width={400}
            height={500}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </section>

      {/* PRODUCT */}
      <section id="shop" className="py-28 bg-neutral-950 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-neutral-900 p-10 rounded-2xl shadow-lg max-w-md mx-auto"
        >
          <Image
            src="/mock-package.jpg"
            alt="Grip Wipes 30 Pack"
            width={200}
            height={200}
            className="mx-auto mb-6 rounded-lg"
          />
          <h2 className="text-3xl font-bold mb-4">Grip Wipes 30 Pack</h2>
          <p className="text-gray-400 mb-4">
            Resealable pouch with 30 wipes. Cleans grips fast, dries quick, no residue, adds tack, fresh scent.
          </p>
          <p className="text-2xl font-semibold mb-6">$21.99</p>

          {/* Quantity */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-neutral-700 px-4 py-2 rounded hover:bg-neutral-600 text-xl"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-neutral-700 px-4 py-2 rounded hover:bg-neutral-600 text-xl"
            >
              +
            </button>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="bg-emerald-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 w-full transition"
          >
            {loading ? "Processing..." : "🛒 Add to cart"}
          </button>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-10 py-28 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Why Choose Grip Wipes?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "No Residue", desc: "Dries clean with zero film or slickness." },
            { title: "Golf Bag Ready", desc: "Perfect size to stash in your golf bag pocket." },
            { title: "Adds Tack", desc: "Restores grip tack instantly for confident swings." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 bg-neutral-900 rounded-2xl shadow-md"
            >
              <h3 className="font-semibold text-2xl mb-3">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="px-10 py-28 bg-neutral-950 text-center">
        <h2 className="text-4xl font-bold mb-16">What Golfers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "These wipes brought my grips back to life.",
            "No more slipping, feels brand new.",
            "Perfect size for my golf bag!",
          ].map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 bg-neutral-900 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition"
            >
              <p className="text-gray-300 italic mb-4">"{quote}"</p>
              <p className="text-yellow-400 text-lg">★★★★★</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-10 py-28 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do Grip Wipes leave residue?",
              a: "No, they dry completely clean with zero film.",
            },
            {
              q: "How many wipes come in a pack?",
              a: "Each resealable pouch includes 30 wipes.",
            },
            {
              q: "Can I use them on other sports grips?",
              a: "Yes, they also work on tennis, baseball, and gym grips.",
            },
          ].map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-900 p-6 rounded-xl"
            >
              <summary className="font-semibold cursor-pointer text-lg">
                {item.q}
              </summary>
              <p className="text-gray-400 mt-2">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 bg-black border-t border-neutral-800">
        <p className="text-gray-500">© {new Date().getFullYear()} Grip Wipes. All rights reserved.</p>
      </footer>
    </main>
  );
}
