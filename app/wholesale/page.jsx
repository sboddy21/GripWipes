"use client";
import { useState } from "react";

export default function WholesalePage() {
  const [form, setForm] = useState({ name: "", business: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", business: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">Wholesale & Retail Inquiries</h1>
        <p className="text-lg text-gray-300 mb-10">
          Interested in carrying Grip Wipes in your pro shop or retail store?  
          Fill out the form below and our team will get back to you within 24–48 hours.
        </p>

        <form onSubmit={handleSubmit} className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-left space-y-6">
          <div>
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Business / Pro Shop Name</label>
            <input
              type="text"
              name="business"
              value={form.business}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-emerald-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition"
          >
            {status === "sending" ? "Sending..." : "Submit Inquiry"}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 mt-4">✅ Thank you! We’ll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4">❌ Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </main>
  );
}
