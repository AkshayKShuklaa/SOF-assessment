import { motion } from "framer-motion";
import { associations } from "./data.js";
import { viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Associations() {
  const loop = [...associations, ...associations];

  return (
    <section className="section-pad overflow-hidden">
      <div className="container-page">
        <SectionHeader
          eyebrow="Associations"
          title="Trusted across business, payments, hospitality, and digital discovery networks."
          copy="The SOF ecosystem reflects the partner-led model shown on the official platform, bringing founders closer to practical market access."
          align="center"
        />
      </div>
      <motion.div
        className="mt-12 overflow-hidden flex gap-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
      >
        <div className="flex min-w-max animate-marquee">
          {loop.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="grid h-20 min-w-44 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] px-6 font-heading text-lg font-bold text-white/74 backdrop-blur-xl hover:border-accent/40 hover:bg-white/[0.08] hover:scale-105 hover:-translate-y-1 hover:shadow-cyan transition-all duration-300 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
