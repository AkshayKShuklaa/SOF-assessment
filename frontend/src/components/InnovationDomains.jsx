import { motion } from "framer-motion";
import { domains } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function InnovationDomains() {
  return (
    <section id="innovation" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="Innovation Domains"
          title="Frontier categories where founders need clarity, trust, and speed."
          copy="SOF helps teams understand their market, shape strong technology narratives, and build credible execution paths across high-potential domains."
          align="center"
        />
        <motion.div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <motion.article
                key={domain.title}
                className="gradient-border glass group relative overflow-hidden rounded-3xl p-6"
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-accent shadow-cyan">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-7 font-heading text-2xl font-bold">{domain.title}</h3>
                <p className="mt-3 min-h-[5rem] leading-7 text-white/64">{domain.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
