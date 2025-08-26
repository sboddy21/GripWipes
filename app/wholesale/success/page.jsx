export default function Success() {
  return (
    <div className="max-w-lg mx-auto py-20 px-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">Inquiry Sent ✅</h1>
      <p className="text-lg mb-6">
        Thank you for reaching out! Our team will review your wholesale request and
        get back to you shortly.
      </p>
      <a
        href="/"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
      >
        Return Home
      </a>
    </div>
  );
}
