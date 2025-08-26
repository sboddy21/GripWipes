"use client";
import { useState } from "react";

export default function Wholesale() {
  const [form, setForm] = useState({ name: "", business: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", business: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Wholesale Inquiry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border rounded p-2" required />
        <input type="text" placeholder="Business" value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
          className="w-full border rounded p-2" required />
        <input type="email" placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border rounded p-2" required />
        <textarea placeholder="Message" value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border rounded p-2" required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Send Inquiry
        </button>
      </form>
      <p className="mt-4">{status}</p>
    </div>
  );
}
