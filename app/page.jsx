"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // ✅ Stripe Checkout
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error starting checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6">RIP. CLEAN. TACK. REPEAT.</h1>
        <p className="text-lg mb-6">
          On course wipes that strip sweat, dirt, and grime fast so your grips feel like new again. Fast drying. Fresh scent. No residue.
        </p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="px-6 py-3 bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Shop now"}
        </button>
      </section>

      {/* Product Section */}
      <section className="max-w-xl mx-auto bg-neutral-900 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Grip Wipes 30 Pack</h2>
        <p className="mb-4">
          Resealable pouch with 30 wipes. Cleans grips fast, dries quick, no residue, adds tack, fresh scent.
        </p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="px-6 py-3 bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Add to cart"}
        </button>
      </section>
    </main>
  );
}
