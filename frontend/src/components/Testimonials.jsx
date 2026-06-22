import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Founder Proof" title="Built for founders who want sharper strategy and faster traction." align="center" />
        <motion.div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          {testimonials.map((item) => (
            <motion.article key={item.name} className="glass rounded-3xl p-6" variants={fadeUp} whileHover={{ y: -8 }}>
              <Quote className="h-7 w-7 text-accent" />
              <p className="mt-6 min-h-[14rem] text-base leading-7 text-white/76">"{item.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-5 flex items-center gap-4">
                {item.image && (
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover grayscale brightness-110 contrast-125 border-2 border-white/10" />
                )}
                <div>
                  <p className="font-heading text-lg font-bold">{item.name}</p>
                  <p className="mt-0.5 text-xs text-white/54">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
