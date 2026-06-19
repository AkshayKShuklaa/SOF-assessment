import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroStats } from "./data.js";
import { fadeUp, staggerContainer } from "./motion.js";
import heroIllustration from "./hero_illustration.png";

function Counter({ value, suffix }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", setDisplay);
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, value]);

  return <span>{display}</span>;
}

export default function Hero() {
  return (
    <section id="index" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <motion.div
        className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-accent/20 opacity-60"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <div className="container-page relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[1.03fr_.97fr]">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col justify-center">
          <motion.span className="eyebrow self-start" variants={fadeUp}>
            <Sparkles className="h-3.5 w-3.5" /> Startup of the Future
          </motion.span>
          <motion.h1
            className="max-w-5xl font-heading text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
            variants={fadeUp}
          >
            Building the Future of Innovation
          </motion.h1>
          <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl" variants={fadeUp}>
            Empowering startups, MSMEs, innovators, entrepreneurs, and emerging businesses through end-to-end consultancy, compliance support, branding, technology, and SOF Expo access.
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-4 sm:flex-row" variants={fadeUp}>
            <motion.a href="#innovation" className="btn-primary" whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.96 }}>
              Explore Ecosystem <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a href="#memberships" className="btn-secondary" whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.96 }}>
              Join Community
            </motion.a>
          </motion.div>

          <motion.div className="mt-12 space-y-8" variants={fadeUp}>
            {/* Ecosystem Signal Glass Box */}
            <div className="gradient-border glass rounded-3xl p-5 hover:scale-[1.01] transition-transform duration-300">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Ecosystem signal</p>
              <p className="mt-2 text-lg font-bold leading-normal text-white">
                Idea audit, legal compliance, AI and cyber security support, CRM automation, seed funding guidance, and nationwide expo visibility in one premium platform.
              </p>
            </div>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 pt-2">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="border-l-2 border-accent/35 pl-4">
                  <div className="font-heading text-3xl font-bold text-white leading-none">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-white/62">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <motion.div
            className="gradient-border glass overflow-hidden rounded-[2.5rem] p-3 shadow-2xl relative z-10 w-full max-w-[500px]"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src={heroIllustration}
              alt="Startup of the Future Innovation Ecosystem"
              className="h-full w-full rounded-[2rem] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
