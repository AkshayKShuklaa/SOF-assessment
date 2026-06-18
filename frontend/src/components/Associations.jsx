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
        className="mt-12 flex gap-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
      >
        <motion.div className="flex min-w-max gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
          {loop.map((name, index) => (
            <div key={`${name}-${index}`} className="grid h-24 min-w-48 place-items-center rounded-3xl border border-white/10 bg-white/[0.05] px-8 font-heading text-xl font-bold text-white/74 backdrop-blur-xl">
              {name}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
