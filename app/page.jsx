"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed. Try again.");
        setLoading(false);
      }
    } catch (err) {
      alert("Error: " + err.message);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4 text-center">RIP. CLEAN. TACK. REPEAT.</h1>
      <p className="text-lg text-neutral-400 mb-8 text-center max-w-2xl">
        On course wipes that strip sweat, dirt, and grime fast so your grips feel like new again.
        Golf bag sized. Fast drying. Fresh scent. No residue.
      </p>

      <div className="bg-neutral-900 rounded-xl p-6 shadow-lg text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-2">Grip Wipes 30 Pack</h2>
        <p className="text-neutral-400 mb-4">
          Resealable pouch with 30 wipes. Cleans grips fast, dries quick, no residue, adds tack, fresh scent.
        </p>
        <p className="text-xl font-semibold mb-4">$21.99</p>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 bg-neutral-800 rounded text-lg"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 bg-neutral-800 rounded text-lg"
          >
            +
          </button>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center w-full"
        >
          {loading ? "Processing..." : "🛒 Add to cart"}
        </button>
      </div>
    </main>
  );
}
