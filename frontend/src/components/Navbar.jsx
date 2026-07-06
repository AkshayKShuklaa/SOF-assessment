import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data.js";
import logo from "./logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = "text-sm font-semibold text-white/70 transition hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur-2xl">
      <nav className="container-page flex h-24 items-center justify-between">
        <a href="#index" className="flex items-center" aria-label="Startup of the Future home">
          <img src={logo} alt="Startup of the Future Logo" className="h-14 lg:h-16 w-auto" />
        </a>

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
