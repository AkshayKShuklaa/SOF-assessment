import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { milestones, valueCards } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";
import aboutInfographic from "./about_infographic.jpg";

export default function About() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const milestoneItemVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 12 }
    }
  };

  const textVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  return (
    <section id="overview" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="SOF Overview"
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
              <div className="mt-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  {valueCards.slice(0, 2).map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-3xl border border-white/10 bg-surface/20 p-5">
                        <Icon className="h-5 w-5 text-accent" />
                        <h4 className="mt-4 font-heading text-xl font-bold">{card.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-white/62">{card.text}</p>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-8 gradient-border glass overflow-hidden rounded-3xl relative h-[280px] sm:h-[450px] lg:h-[520px]">
                  <img
                    src={aboutInfographic}
                    alt="SOF Refined Operating Environment - Full Startup Arc"
                    className="absolute inset-0 w-full h-full object-cover block"
                  />
                </div>
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
            <div className="glass rounded-3xl p-6 overflow-hidden">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-heading text-2xl font-bold">Growth Milestones</h3>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowUpRight className="h-5 w-5 text-accent" />
                </motion.div>
              </div>
              <div ref={timelineRef} className="relative grid gap-6">
                <motion.div
                  className="absolute left-[1.12rem] top-3 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-accent via-primary to-transparent origin-top"
                  style={{ scaleY }}
                />
                {milestones.map((item) => (
                  <motion.div
                    key={item.year}
                    className="relative grid grid-cols-[2.4rem_1fr] gap-4 group cursor-pointer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={milestoneItemVariants}
                  >
                    <motion.span
                      className="relative z-10 mt-1 grid h-9 w-9 place-items-center rounded-full border border-accent/35 bg-midnight text-xs font-bold text-accent group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(0,229,255,0.4)] transition-all duration-300"
                      variants={dotVariants}
                      whileHover={{ scale: 1.15 }}
                    >
                      {item.year.slice(2)}
                    </motion.span>
                    <motion.div variants={textVariants} className="group-hover:translate-x-1 transition-transform duration-300">
                      <p className="text-sm font-bold text-accent group-hover:text-cyan-300 transition-colors">{item.year}</p>
                      <h4 className="mt-1 font-heading text-lg font-bold group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/62 group-hover:text-white/80 transition-colors">{item.text}</p>
                    </motion.div>
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
