import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Grip Wipes",
  description: "RIP. CLEAN. TACK. REPEAT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        {/* Free Shipping Banner */}
        <div className="bg-green-600 text-white text-center py-2 text-sm">
          🚚 Free shipping on orders over $50 (USA only)
        </div>

        {/* Header / Nav */}
        <header className="border-b border-gray-800">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" className="text-xl font-bold">
              Grip Wipes
            </Link>
            <nav className="space-x-6">
              <Link href="/#features" className="hover:text-green-400">Features</Link>
              <Link href="/#reviews" className="hover:text-green-400">Reviews</Link>
              <Link href="/faq" className="hover:text-green-400">FAQ</Link>
              <Link href="/about" className="hover:text-green-400">About Us</Link>
              <Link href="/wholesale" className="hover:text-green-400">Wholesale</Link>
              <Link href="/shop" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500">
                Shop
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer (only once, no duplicates) */}
        <footer className="bg-black text-gray-400 text-center py-6 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Grip Wipes. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
