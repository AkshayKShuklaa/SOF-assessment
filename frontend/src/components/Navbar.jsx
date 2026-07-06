import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data.js";
import logo from "./logo.png";

const tickerWords = ["Future", "Technology", "Innovations", "AiEXPO-2070"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % tickerWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const linkClass = "text-sm font-semibold text-white/70 transition hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur-2xl">
      <nav className="container-page flex h-24 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#index" className="flex items-center" aria-label="Startup of the Future home">
            <img src={logo} alt="Startup of the Future Logo" className="h-14 lg:h-16 w-auto" />
          </a>
          <div className="hidden md:block h-8 w-1 bg-gray-400 rounded-full mx-2"></div>
          <div className="hidden md:flex items-center">
            <div className="relative h-6 w-48 overflow-hidden text-[15px] font-normal text-gray-400">
              <AnimatePresence>
                <motion.span
                  key={wordIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center"
                >
                  {tickerWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([label, id]) => (
            <a key={label} href={id ? `#${id}` : undefined} className={linkClass}>
              {label}
            </a>
          ))}
          <a href="#memberships" className="btn-primary">
            Join SOF
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="container-page pb-5 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="glass grid gap-1 rounded-2xl p-3">
              {navLinks.map(([label, id]) => (
                <a
                  key={label}
                  href={id ? `#${id}` : undefined}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white/78 hover:bg-white/[0.06]"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a href="#memberships" className="btn-primary mt-2" onClick={() => setOpen(false)}>
                Join SOF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
