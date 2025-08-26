"use client";
import { useState } from "react";

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
      {/* Navbar */}
      <nav className="flex items-center gap-6">
  <a href="#features" className="hover:text-green-400">Features</a>
  <a href="#reviews" className="hover:text-green-400">Reviews</a>
  <a href="#faq" className="hover:text-green-400">FAQ</a>
  <a href="/about" className="hover:text-green-400">About Us</a>
  <a href="#shop" className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400">Shop</a>
</nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div>
          <h1 className="text-5xl font-extrabold mb-6">RIP. CLEAN. TACK. REPEAT.</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-lg">
            On course wipes that strip sweat, dirt, and grime fast so your grips feel like new again.
            Golf bag sized. Fast drying. Fresh scent. No residue.
          </p>
          <a href="#shop" className="bg-green-500 text-black px-6 py-3 rounded font-semibold hover:bg-green-400">
            Shop Now
          </a>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="/mock-package.jpg" alt="Grip Wipes Pack" className="w-80 rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Product Section */}
      <section id="shop" className="flex justify-center py-20 bg-neutral-900">
        <div className="bg-neutral-800 p-8 rounded-xl shadow-lg text-center w-full max-w-md">
          <img src="/mock-package.jpg" alt="Grip Wipes Pack" className="w-48 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Grip Wipes 30 Pack</h2>
          <p className="text-gray-400 mb-4">
            Resealable pouch with 30 wipes. Cleans grips fast, dries quick, no residue, adds tack, fresh scent.
          </p>
          <p className="text-xl font-semibold mb-4">$21.99</p>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <button
              className="bg-neutral-700 px-3 py-1 rounded hover:bg-neutral-600"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >-</button>
            <span className="text-lg">{quantity}</span>
            <button
              className="bg-neutral-700 px-3 py-1 rounded hover:bg-neutral-600"
              onClick={() => setQuantity(quantity + 1)}
            >+</button>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="bg-green-500 text-black px-6 py-3 rounded font-semibold hover:bg-green-400 w-full"
          >
            {loading ? "Processing..." : "Add to cart"}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-10 py-20 bg-black text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Grip Wipes?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-neutral-900 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-2">No Residue</h3>
            <p className="text-gray-400">Dries clean with zero film or slickness.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-2">Golf Bag Ready</h3>
            <p className="text-gray-400">Perfect size to fit in your golf bag pocket.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-2">Adds Tack</h3>
            <p className="text-gray-400">Brings back real grip tack in seconds.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="px-10 py-20 bg-neutral-900 text-center">
        <h2 className="text-3xl font-bold mb-10">What Golfers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "These wipes brought my grips back to life.",
            "No more slipping, feels brand new.",
            "Perfect size for my golf bag!"
          ].map((quote, i) => (
            <div key={i} className="p-6 bg-neutral-800 rounded-xl shadow-md">
              <p className="text-gray-300 italic mb-4">"{quote}"</p>
              <p className="text-yellow-400">★★★★★</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-10 py-20 bg-black">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <details className="bg-neutral-900 p-6 rounded-xl">
            <summary className="font-semibold cursor-pointer">Do Grip Wipes leave residue?</summary>
            <p className="text-gray-400 mt-2">No, they dry completely clean with zero film.</p>
          </details>
          <details className="bg-neutral-900 p-6 rounded-xl">
            <summary className="font-semibold cursor-pointer">How many wipes come in a pack?</summary>
            <p className="text-gray-400 mt-2">Each resealable pouch includes 30 wipes.</p>
          </details>
          <details className="bg-neutral-900 p-6 rounded-xl">
            <summary className="font-semibold cursor-pointer">Can I use them on other sports grips?</summary>
            <p className="text-gray-400 mt-2">Yes, they work great on tennis, baseball, and gym grips.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-neutral-900 border-t border-neutral-800">
        <p className="text-gray-500">© {new Date().getFullYear()} Grip Wipes. All rights reserved.</p>
      </footer>
    </main>
  );
}
