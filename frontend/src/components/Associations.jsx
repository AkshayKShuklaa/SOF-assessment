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
        className="mt-12 overflow-hidden flex"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
      >
        <div className="flex min-w-max animate-marquee gap-6 pr-6">
          {loop.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group flex flex-col justify-between items-center h-36 w-56 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-accent/40 hover:bg-white/[0.08] hover:scale-105 hover:-translate-y-1.5 hover:shadow-cyan transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  className="h-12 max-w-[85%] object-contain opacity-64 group-hover:opacity-100 transition-all duration-300 partner-logo-img"
                />
              </div>
              <p className="mt-3 text-xs font-bold tracking-wider uppercase text-white/52 group-hover:text-accent transition-colors duration-300 text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
