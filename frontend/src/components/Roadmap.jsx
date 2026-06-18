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
          <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-7 lg:gap-4">
            {/* Vertical connector line for mobile/tablet */}
            <motion.div
              className="absolute left-[34px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-accent to-primary lg:hidden"
              initial={{ scaleY: 0, transformOrigin: "top" }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            {/* Horizontal connector line for desktop */}
            <motion.div
              className="absolute left-8 right-8 top-[38px] hidden h-0.5 bg-gradient-to-r from-primary via-accent to-primary lg:block"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            {roadmap.map((step, index) => (
              <motion.div
                key={step}
                className="relative z-10 flex flex-row items-center gap-4 rounded-3xl border border-white/10 bg-midnight/30 p-4 text-left lg:flex-col lg:text-center lg:justify-center lg:p-5 hover:border-accent/30 hover:bg-midnight/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: index * 0.08 }}
              >
                <span className="flex-shrink-0 grid h-9 w-9 place-items-center rounded-full bg-accent text-midnight lg:mx-auto group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-xs uppercase text-accent font-semibold tracking-wider lg:hidden">Step {index + 1}</span>
                  <p className="font-heading text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 lg:mt-3">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
