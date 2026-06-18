import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { roadmap } from "./data.js";
import { viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Roadmap() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Startup Journey" title="A clear path from first insight to scalable venture." copy="The SOF roadmap keeps founders focused on the next decision, the next proof point, and the next milestone." align="center" />
        <motion.div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}>
          <div className="relative grid gap-5 md:grid-cols-7">
            <motion.div className="absolute left-8 right-8 top-7 hidden h-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary md:block" initial={{ scaleX: 0, transformOrigin: "left" }} whileInView={{ scaleX: 1 }} viewport={viewport} transition={{ duration: 1.1, ease: "easeOut" }} />
            {roadmap.map((step, index) => (
              <motion.div key={step} className="relative z-10 rounded-3xl border border-white/10 bg-midnight/80 p-4 text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ delay: index * 0.08 }}>
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-accent text-midnight">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <p className="mt-4 font-heading text-lg font-bold">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
