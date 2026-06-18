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

          <div className="gradient-border glass relative min-h-[520px] overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                className="relative flex h-full flex-col justify-between"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div>
                  <div className="grid h-20 w-20 place-items-center rounded-3xl border border-accent/30 bg-accent/10 shadow-cyan">
                    <active.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="mt-8 font-heading text-4xl font-bold sm:text-5xl">{active.title}</h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{active.text}</p>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {["Idea audit", "Market fit", "Launch path"].map((item) => (
                    <div key={item} className="rounded-3xl border border-white/10 bg-midnight/60 p-5">
                      <ArrowUpRight className="h-5 w-5 text-accent" />
                      <p className="mt-4 font-bold">{item}</p>
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
