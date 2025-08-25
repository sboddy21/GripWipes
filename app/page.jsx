'use client'
import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  TimerReset,
  ShieldCheck,
  ShoppingCart,
  Package,
  Hand,
  Leaf,
  Instagram,
  Youtube,
  Share2,
} from "lucide-react";
import "./globals.css";

const features = [
  { icon: <Sparkles className="w-6 h-6" />, title: "No residue", text: "Cleans without the slick feel so every swing is confident." },
  { icon: <TimerReset className="w-6 h-6" />, title: "Fast dry", text: "Formulated to flash off quick so you get back to the shot." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Safe on grips", text: "Rubber. Cord. Poly blends. Designed for daily use." },
  { icon: <Droplets className="w-6 h-6" />, title: "Adds tack", text: "Removes sweat and grime so fresh tack comes alive." },
  { icon: <Leaf className="w-6 h-6" />, title: "Fresh scent", text: "Clean finish that smells crisp and never heavy." },
  { icon: <Package className="w-6 h-6" />, title: "Bag sized", text: "30 wipes per pack. Slim. Resealable. Built for the bag." },
];

const steps = [
  { num: "01", title: "Rip", text: "Open the seal and pull one wipe. Reseal to lock freshness." },
  { num: "02", title: "Clean", text: "Wipe the full grip from butt to tip. Rotate while you go." },
  { num: "03", title: "Tack", text: "Let it flash for a few seconds. Feel the dry bite come back." },
  { num: "04", title: "Repeat", text: "Use after sweaty rounds or any time grips feel tired." },
];

const reviews = [
  { name: "Kyle P", title: "Single digit cap", text: "Felt like fresh grips on nine. No film. Keeping a pack in the side pocket forever." },
  { name: "Mia R", title: "League night", text: "Dries fast and smells clean. Way better than the old spray." },
  { name: "Coach D", title: "HS golf coach", text: "Gave these to the team before regionals. Everyone loved the tack and routine." },
];

const IconBadge = ({ children }) => (
  <div className="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur p-3 ring-1 ring-white/20 shadow-sm">
    {children}
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/80 ring-1 ring-white/20">
        <span className="h-1 w-1 rounded-full bg-emerald-400" />
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">{title}</h2>
    {subtitle && <p className="mt-3 text-white/80 leading-relaxed">{subtitle}</p>}
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-10 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -bottom-20 right-10 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="w-full bg-white/5 text-center text-sm py-2 ring-1 ring-white/10">
        Free US shipping on launch orders over $35
      </div>

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                Grip Wipes
              </span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#shop" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-neutral-950 hover:bg-emerald-400 active:scale-[.98]">
            <ShoppingCart className="w-4 h-4" />
            Shop now
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/80 ring-1 ring-white/20">
              <Hand className="w-3.5 h-3.5" />
              Built for real grip
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">RIP. CLEAN. TACK. REPEAT.</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              On course wipes that strip sweat, dirt, and grime fast so your grips feel like new again. Golf bag sized. Fast drying. Fresh scent.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 active:scale-[.98]">
                <ShoppingCart className="w-5 h-5" />
                Get Grip Wipes
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15 ring-1 ring-white/15">
                <Share2 className="w-5 h-5" />
                See the routine
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <IconBadge><Package className="w-4 h-4" /></IconBadge>
                30 wipes per pack
              </div>
              <div className="flex items-center gap-2">
                <IconBadge><ShieldCheck className="w-4 h-4" /></IconBadge>
                No residue finish
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-2 ring-1 ring-white/10 shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(80%_60%_at_30%_20%,rgba(16,185,129,0.08),transparent)]" />
              <div className="relative h-full w-full grid place-items-center rounded-2xl bg-neutral-950">
                <img
                  src="/pack-mock.jpg"
                  alt="Grip Wipes packaging mock"
                  className="h-full w-full object-cover rounded-2xl opacity-90"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-neutral-900/70 backdrop-blur px-4 py-3 ring-1 ring-white/10">
                  <p className="text-sm text-white/80">Replace with your real packaging photo at public/pack-mock.jpg</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-14 md:py-20">
        <SectionTitle eyebrow="What makes it different" title="Clean grips. Real tack. Zero fuss." subtitle="Every part of Grip Wipes was built for performance on the course." />
        <div className="mx-auto max-w-6xl px-4 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10">
              <IconBadge>{f.icon}</IconBadge>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-white/75 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="how" className="py-14 md:py-20">
        <SectionTitle eyebrow="Simple routine" title="How to use Grip Wipes" subtitle="A fast routine you can run before the first tee or right on the box." />
        <div className="mx-auto max-w-6xl px-4 mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.06 }} className="relative rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-6xl font-black tracking-tighter text-white/10 absolute top-4 right-6">{s.num}</div>
              <h4 className="text-xl font-extrabold">{s.title}</h4>
              <p className="mt-2 text-white/75 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="shop" className="py-14 md:py-20">
        <SectionTitle eyebrow="The pack" title="Grip Wipes 30 pack" subtitle="Resealable pouch. Built for your golf bag." />
        <div className="mx-auto max-w-5xl px-4 mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl bg-white/5 p-3 ring-1 ring-white/10">
            <img src="/pouch.jpg" alt="Grip Wipes pouch" className="rounded-2xl w-full h-[440px] object-cover" />
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">Feel new grip on demand</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex gap-3 items-start"><IconBadge><Sparkles className="w-4 h-4" /></IconBadge>No residue. Just clean tack</li>
              <li className="flex gap-3 items-start"><IconBadge><TimerReset className="w-4 h-4" /></IconBadge>Dry in seconds</li>
              <li className="flex gap-3 items-start"><IconBadge><Package className="w-4 h-4" /></IconBadge>30 wipes per pack. Golf bag friendly</li>
            </ul>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-3xl font-black">$21.99</span>
              <span className="text-white/60">Launch price</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://getgripwipes.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 active:scale-[.98]">
                <ShoppingCart className="w-5 h-5" />
                Add to cart
              </a>
              <a href="#faq" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15 ring-1 ring-white/15">
                Details and FAQ
              </a>
            </div>
            <p className="text-sm text-white/60">Free US shipping over $35</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <SectionTitle eyebrow="Real results" title="What golfers say" subtitle="Early testers and league players share quick takes." />
        <div id="reviews" className="mx-auto max-w-6xl px-4 mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: i * 0.06 }} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-white/70">{r.title}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-14 md:py-20">
        <SectionTitle eyebrow="You asked" title="FAQ" subtitle="Everything you want to know before you tee up." />
        <div className="mx-auto max-w-3xl px-4 mt-10 space-y-4">
          <details className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 open:bg-white/10">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">What do they work on</span>
              <span className="transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-white/80">Rubber. Cord. Poly blends. Also fine for training bars and other tack tools.</p>
          </details>
          <details className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 open:bg-white/10">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">Do they leave a film</span>
              <span className="transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-white/80">No. The finish is clean with a dry bite so your hands feel locked without the slip.</p>
          </details>
          <details className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 open:bg-white/10">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">How long does one pack last</span>
              <span className="transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-white/80">Depends on rounds and practice time. Most players get weeks from a single pack.</p>
          </details>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400" />
              <span className="font-extrabold">Grip Wipes</span>
            </div>
            <p className="text-white/70 max-w-md">No residue. No slip. All grip. Built for the bag and ready for every shot.</p>
            <div className="flex items-center gap-4 text-white/70">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <p className="font-semibold">Shop</p>
              <a href="#shop" className="block text-white/80 hover:text-white">30 pack</a>
              <a href="#features" className="block text-white/80 hover:text-white">Features</a>
              <a href="#how" className="block text-white/80 hover:text-white">How it works</a>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">Company</p>
              <a href="#" className="block text-white/80 hover:text-white">Shipping policy</a>
              <a href="#" className="block text-white/80 hover:text-white">Returns</a>
              <a href="#" className="block text-white/80 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 text-xs text-white/60">© {new Date().getFullYear()} Grip Wipes. All rights reserved.</div>
      </footer>
    </div>
  );
}
