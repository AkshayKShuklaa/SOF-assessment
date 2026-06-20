import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { domains } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

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

          <div className="gradient-border glass relative min-h-[520px] flex flex-col overflow-hidden rounded-[2rem] p-6 sm:p-8 group">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl z-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                className="relative flex-1 w-full flex flex-col justify-between z-20"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                {/* Background Image with Overlays */}
                <div className="absolute inset-0 -m-6 sm:-m-8 -z-10 overflow-hidden">
                  <img
                    src={active.explorerImage}
                    alt={active.title}
                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  {/* Dark overlays to ensure excellent text readability */}
                  <div className="absolute inset-0 bg-midnight/70 sm:bg-gradient-to-r sm:from-midnight/100 sm:via-midnight/90 sm:to-midnight/35" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Top Content Area */}
                <div className="max-w-2xl">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/30 bg-accent/10 shadow-cyan">
                    <active.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-6 font-heading text-3xl font-bold sm:text-4xl text-white">{active.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90 drop-shadow-sm">{active.text}</p>
                </div>

                {/* Bottom Milestones / Actions Area */}
                <div className="mt-12 grid gap-4 grid-cols-3 max-w-2xl">
                  {["Idea audit", "Market fit", "Launch path"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-midnight/80 backdrop-blur-md p-4 hover:border-accent/30 transition duration-300">
                      <ArrowUpRight className="h-4 w-4 text-accent" />
                      <p className="mt-3 text-sm font-bold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
