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
          <motion.div className="gradient-border glass overflow-hidden rounded-[2rem] p-5" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}>
            <div className="relative flex flex-col min-h-[480px] overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-primary/25 via-surface to-accent/10 border border-white/10">
              <div className="relative h-[480px] w-full shrink-0 overflow-hidden">
                <img src={founderImg} alt="Amardeep Singh" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="relative flex-grow w-full bg-midnight/70 p-6 backdrop-blur-xl border-t border-white/10 flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Founder & CEO</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-white-force">Amardeep Singh</h3>
                <p className="mt-2.5 leading-6 text-white-force-80 text-sm">Founder & CEO, Startup Of The Future (SOF). Over two decades of startup strategy, scheme alignment, and business execution experience.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
            <motion.div className="glass rounded-3xl p-6 sm:p-8" variants={fadeUp}>
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="mt-5 font-heading text-2xl font-bold leading-snug sm:text-3xl">"Becoming an unstoppable force with a vision to create a greater tomorrow."</blockquote>
            </motion.div>
            <motion.div className="mt-6 grid gap-4" variants={staggerContainer}>
              {founderAchievements.map((achievement) => (
                <motion.div key={achievement} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5" variants={fadeUp}>
                  <Award className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="leading-7 text-white/72">{achievement}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="mt-6 rounded-3xl border border-white/10 bg-surface/60 p-6" variants={fadeUp}>
              <h3 className="font-heading text-2xl font-bold">Experience Timeline</h3>
              <div className="mt-5 grid gap-4">
                {founderTimeline.map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="font-bold text-accent">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/62">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
