import { motion } from "framer-motion";
import { associations } from "./data.js";
import { viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Associations() {
  const loopAssociations = [...associations, ...associations];

  return (
    <section className="section-pad overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-page relative z-10">
        <SectionHeader
          eyebrow="Ecosystem & Partners"
          title="Trusted across business, payments, hospitality, and digital discovery networks."
          copy="The SOF ecosystem reflects the partner-led model shown on the official platform, bringing founders closer to practical market access."
          align="center"
        />
      </div>

      <motion.div
        className="mt-12 overflow-hidden flex"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
      >
        <div className="flex min-w-max animate-marquee gap-6 pr-6">
          {loopAssociations.map((item, index) => (
            <div
              key={`assoc-${item.name}-${index}`}
              className="group flex items-center justify-center h-24 w-44 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-accent/40 hover:bg-white/[0.08] hover:scale-105 hover:-translate-y-1.5 hover:shadow-cyan transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.logo}
                alt={`${item.name} Logo`}
                className="h-10 max-w-[85%] object-contain opacity-85 group-hover:opacity-100 transition-all duration-300 partner-logo-img"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
