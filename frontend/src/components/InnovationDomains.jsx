import { motion } from "framer-motion";
import { domains } from "./data.js";
import { viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function InnovationDomains() {
  const loop = [...domains, ...domains];

  return (
    <section id="innovation" className="section-pad relative overflow-hidden">
      <div className="container-page">
        <SectionHeader
          eyebrow="Innovation Domains"
          title="Frontier categories where founders need clarity, trust, and speed."
          copy="SOF helps teams understand their market, shape strong technology narratives, and build credible execution paths across high-potential domains."
          align="center"
        />
      </div>
      <motion.div
        className="mt-12 overflow-hidden flex"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
      >
        <div className="flex min-w-max animate-marquee-right gap-5 pr-5">
          {loop.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={`${domain.title}-${index}`}
                className="gradient-border glass group relative overflow-hidden rounded-3xl p-6 w-[22rem] shrink-0 hover:scale-[1.03] hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-cyan transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-accent shadow-cyan">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-7 font-heading text-2xl font-bold">{domain.title}</h3>
                <p className="mt-3 min-h-[5rem] leading-7 text-white/64">{domain.text}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
