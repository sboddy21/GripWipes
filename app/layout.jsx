import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Grip Wipes",
  description: "RIP. CLEAN. TACK. REPEAT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Header / Navbar */}
        <header className="border-b border-gray-800">
          <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo / Home */}
            <Link href="/" className="text-2xl font-bold">
              Grip Wipes
            </Link>

            {/* Nav Links */}
            <nav className="flex space-x-6">
              <Link href="/#features" className="hover:text-green-500">
                Features
              </Link>
              <Link href="/#reviews" className="hover:text-green-500">
                Reviews
              </Link>
              <Link href="/#faq" className="hover:text-green-500">
                FAQ
              </Link>
              <Link href="/about" className="hover:text-green-500">
                About Us
              </Link>
              <Link href="/wholesale" className="hover:text-green-500">
                Wholesale
              </Link>
              <a
                href="https://buy.stripe.com/dRmdR2c0NdUS7oR3iIc3m00"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
              >
                Shop
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Grip Wipes. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
