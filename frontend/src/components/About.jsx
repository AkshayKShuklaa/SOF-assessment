import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { milestones, valueCards } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="About SOF"
          title="A premium ecosystem for founders building serious technology companies."
          copy="Startup of the Future combines practical venture guidance, technology advisory, brand strategy, and curated networks so ambitious builders can move from idea to institution."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="gradient-border glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative flex min-h-[420px] flex-col justify-between">
              <div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/25 bg-accent/10">
                  <Layers3 className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-8 font-heading text-3xl font-bold">Designed for the full startup arc.</h3>
                <p className="mt-4 text-lg leading-8 text-white/70">
                  SOF gives founders a refined operating environment: structured mentorship, clear milestones, domain expertise, and visibility through the SOF Expo.
                </p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {valueCards.slice(0, 2).map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="rounded-3xl border border-white/10 bg-surface/70 p-5">
                      <Icon className="h-5 w-5 text-accent" />
                      <h4 className="mt-4 font-heading text-xl font-bold">{card.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/62">{card.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div className="grid gap-6" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
            {valueCards.slice(2).map((card) => {
              const Icon = card.icon;
              return (
                <motion.article key={card.title} className="glass rounded-3xl p-6" variants={fadeUp}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-bold">{card.title}</h3>
                      <p className="mt-2 leading-7 text-white/66">{card.text}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
            <div className="glass rounded-3xl p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-heading text-2xl font-bold">Growth Milestones</h3>
                <ArrowUpRight className="h-5 w-5 text-accent" />
              </div>
              <div className="relative grid gap-5">
                <div className="absolute left-[1.12rem] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-accent via-primary to-transparent" />
                {milestones.map((item) => (
                  <motion.div key={item.year} className="relative grid grid-cols-[2.4rem_1fr] gap-4" variants={fadeUp}>
                    <span className="relative z-10 mt-1 grid h-9 w-9 place-items-center rounded-full border border-accent/35 bg-midnight text-xs font-bold text-accent">
                      {item.year.slice(2)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-accent">{item.year}</p>
                      <h4 className="mt-1 font-heading text-lg font-bold">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/62">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
