import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grip Wipes",
  description: "Rip. Clean. Tack. Repeat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur-lg border-b border-neutral-800">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Grip Wipes Logo"
                width={42}
                height={42}
                priority
                className="transition-transform group-hover:scale-110"
              />
              <span className="font-extrabold text-xl tracking-tight group-hover:text-emerald-400 transition">
                Grip Wipes
              </span>
            </a>

            {/* Nav Links */}
            <ul className="flex gap-8 text-sm font-medium items-center">
              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-emerald-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="bg-emerald-500 text-black px-4 py-2 rounded-lg hover:bg-emerald-400 transition font-semibold shadow-md"
                >
                  Shop
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="mt-20 border-t border-neutral-800 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Grip Wipes. All rights reserved.
            </p>
            <div className="flex gap-6 text-neutral-400 text-sm">
              <a href="#features" className="hover:text-emerald-400 transition">
                Features
              </a>
              <a href="#reviews" className="hover:text-emerald-400 transition">
                Reviews
              </a>
              <a href="#faq" className="hover:text-emerald-400 transition">
                FAQ
              </a>
              <a href="/about" className="hover:text-emerald-400 transition">
                About Us
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
