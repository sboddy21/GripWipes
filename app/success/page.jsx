export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">🎉 Order Successful!</h1>
      <p className="text-lg mb-6">Thanks for purchasing Grip Wipes. Your order is confirmed and on its way!</p>
      <a
        href="/"
        className="px-6 py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-700 transition"
      >
        Back to Home
      </a>
    </main>
  );
}
