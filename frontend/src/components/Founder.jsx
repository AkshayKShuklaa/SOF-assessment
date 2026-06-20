import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";
import { founderAchievements, founderTimeline } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";
import founderImg from "./amardeep.jpg";

export default function Founder() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Founder Spotlight" title="Amardeep Singh leads SOF with 25+ years of expertise." copy="From the founder's desk: SOF exists to spark courage for new inventions, rapid development, and practical startup execution." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="gradient-border glass overflow-hidden rounded-[2rem] p-5 h-full flex flex-col" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={{ duration: 0.6 }}>
            <div className="relative flex flex-col h-full flex-grow overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-primary/25 via-surface to-accent/10 border border-white/10">
              <div className="relative flex-grow min-h-[360px] lg:min-h-[460px] w-full overflow-hidden">
                <img src={founderImg} alt="Amardeep Singh" className="absolute inset-0 h-full w-full object-cover object-center grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-700 hover:scale-105" />
              </div>
              <div className="relative w-full bg-midnight/70 p-6 backdrop-blur-xl border-t border-white/10 flex flex-col justify-center shrink-0">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Founder & CEO</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-white-force">Amardeep Singh</h3>
                <p className="mt-2.5 leading-6 text-white-force-80 text-sm">Founder & CEO, Startup Of The Future (SOF). Over two decades of startup strategy, scheme alignment, and business execution experience.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer} className="flex flex-col justify-between">
            <motion.div className="glass rounded-3xl p-6 sm:p-8" variants={fadeUp} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="mt-5 font-heading text-2xl font-bold leading-snug sm:text-3xl">"Becoming an unstoppable force with a vision to create a greater tomorrow."</blockquote>
            </motion.div>
            <motion.div className="mt-6 grid gap-4" variants={staggerContainer}>
              {founderAchievements.map((achievement) => (
                <motion.div key={achievement} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5" variants={fadeUp} whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.06)" }} transition={{ duration: 0.2 }}>
                  <Award className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="leading-7 text-white/72">{achievement}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="mt-6 rounded-3xl border border-white/10 bg-surface/60 p-6" variants={fadeUp}>
              <h3 className="font-heading text-2xl font-bold">Experience Timeline</h3>
              <motion.div className="mt-5 grid gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
                {founderTimeline.map(([title, text]) => (
                  <motion.div key={title} className="rounded-2xl bg-white/[0.04] p-4 cursor-pointer" variants={fadeUp} whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.06)" }} transition={{ duration: 0.2 }}>
                    <p className="font-bold text-accent">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/62">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
