export default function CancelPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">❌ Payment Canceled</h1>
      <p className="text-lg mb-6">Your order wasn’t completed. No worries — you can try again anytime!</p>
      <a
        href="/"
        className="px-6 py-3 bg-gray-700 rounded-lg text-white font-semibold hover:bg-gray-800 transition"
      >
        Back to Home
      </a>
    </main>
  );
}
