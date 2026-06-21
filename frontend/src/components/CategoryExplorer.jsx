import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { domains } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";
import logo from "./logo.png";

export default function CategoryExplorer() {
  const [active, setActive] = useState(domains[0]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return domains;
    return domains.filter((domain) => `${domain.title} ${domain.text}`.toLowerCase().includes(value));
  }, [query]);

  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Business Categories"
          title="Explore SOF's innovation map like a live command center."
          copy="Search, select, and scan the official SOF business categories across AI, cyber security, energy, healthcare, EV, space, IoT, blockchain, and more."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="glass rounded-[2rem] p-5" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
            <motion.label className="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-midnight/70 px-4 py-3" variants={fadeUp}>
              <Search className="h-5 w-5 text-accent" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/38"
                placeholder="Search innovation categories"
              />
            </motion.label>
            <motion.div className="grid max-h-[520px] gap-3 overflow-y-auto pr-1" variants={staggerContainer}>
              {filtered.map((domain) => {
                const Icon = domain.icon;
                const selected = active.title === domain.title;
                return (
                  <motion.button
                    key={domain.title}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      selected ? "border-accent/50 bg-accent/10" : "border-white/10 bg-white/[0.04] hover:border-white/20"
                    }`}
                    onClick={() => setActive(domain)}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-bold">{domain.title}</span>
                      <span className="mt-1 line-clamp-1 block text-sm text-white/52">{domain.text}</span>
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="gradient-border glass relative min-h-[520px] flex flex-col overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                className="relative flex-1 w-full flex flex-col justify-between gap-5"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                {/* Top Section: Text Details with Active Icon and Company Logo */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-accent/10 shadow-cyan">
                      <active.icon className="h-7 w-7 text-accent" />
                    </div>
                    <img src={logo} alt="Startup of the Future Logo" className="h-6 w-auto opacity-60" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold sm:text-3xl text-white">{active.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{active.text}</p>
                </div>

                {/* Middle Section: Milestone / Action Cards */}
                <div className="grid gap-3 grid-cols-3">
                  {["Idea audit", "Market fit", "Launch path"].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-accent/30 transition duration-300">
                      <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                      <p className="mt-2 text-xs font-bold text-white">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom Section: Separated Full-Width Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                  <img
                    src={active.explorerImage}
                    alt={active.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Company logo watermark */}
                  <div className="absolute bottom-3 right-3 z-10 bg-midnight/70 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5">
                    <img src={logo} alt="SOF Logo" className="h-5 w-auto opacity-90" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
