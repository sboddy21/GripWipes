import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grip Wipes",
  description: "Rip. Clean. Tack. Repeat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-neutral-50`}>
        {/* ✅ Navbar */}
        <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-extrabold text-xl tracking-tight">Grip Wipes</span>
            <ul className="flex gap-8 text-sm font-medium">
              <li><a href="#features" className="hover:text-emerald-400">Features</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400">Reviews</a></li>
              <li><a href="#faq" className="hover:text-emerald-400">FAQ</a></li>
              <li>
                <a
                  href="#shop"
                  className="bg-emerald-500 text-neutral-950 px-4 py-2 rounded-lg hover:bg-emerald-400"
                >
                  Shop
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        {children}

        {/* ✅ Footer */}
        <footer className="mt-20 border-t border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Grip Wipes. All rights reserved.
            </p>
            <div className="flex gap-6 text-neutral-400 text-sm">
              <a href="#features" className="hover:text-emerald-400">Features</a>
              <a href="#reviews" className="hover:text-emerald-400">Reviews</a>
              <a href="#faq" className="hover:text-emerald-400">FAQ</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
