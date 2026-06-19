import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mic2 } from "lucide-react";
import { expoHighlights, expoStates, showcases, speakers } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

function useCountdown() {
  const target = useMemo(() => new Date("2026-12-05T09:00:00+05:30").getTime(), []);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const distance = Math.max(target - now, 0);
  return [
    ["Days", Math.floor(distance / 86400000)],
    ["Hours", Math.floor((distance % 86400000) / 3600000)],
    ["Minutes", Math.floor((distance % 3600000) / 60000)],
    ["Seconds", Math.floor((distance % 60000) / 1000)],
  ];
}

export default function Expo() {
  const countdown = useCountdown();

  return (
    <section id="events" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="SOF Events"
          title="A future-facing event platform for founders, investors, and technology leaders."
          copy="The SOF Events brings live demos, expert talks, partner meetings, and startup showcases into one high-signal experience."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div className="gradient-border glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}>
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">SOF Events 2026-27</p>
              <h3 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">India's Creative Potential of Generative AI</h3>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {countdown.map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-midnight/70 p-4 text-center">
                    <p className="font-heading text-3xl font-bold">{String(value).padStart(2, "0")}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/50">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {expoHighlights.map((highlight) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={highlight.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                      <Icon className="h-6 w-6 text-accent" />
                      <h4 className="mt-4 font-heading text-xl font-bold">{highlight.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/62">{highlight.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {expoStates.map((state) => (
                  <span key={state} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-white/64">
                    {state}
                  </span>
                ))}
              </div>
              <a href="#reach-us" className="btn-primary mt-8">
                Register for Events <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer} className="grid gap-6">
            <motion.div className="glass rounded-3xl p-6" variants={fadeUp}>
              <div className="mb-5 flex items-center gap-3">
                <Mic2 className="h-5 w-5 text-accent" />
                <h3 className="font-heading text-2xl font-bold">Featured Speakers</h3>
              </div>
              <div className="grid gap-3">
                {speakers.map((speaker) => (
                  <div key={speaker.name} className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="font-bold">{speaker.name}</p>
                    <p className="text-sm text-white/58">{speaker.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="glass rounded-3xl p-6" variants={fadeUp}>
              <h3 className="font-heading text-2xl font-bold">Technology Showcase</h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {showcases.map((showcase) => {
                  const Icon = showcase.icon;
                  return (
                    <div key={showcase.title} className="rounded-2xl border border-white/10 bg-surface/70 p-4">
                      <Icon className="h-5 w-5 text-accent" />
                      <p className="mt-3 text-sm font-bold">{showcase.title}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
