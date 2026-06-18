import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroStats } from "./data.js";
import { fadeUp, staggerContainer } from "./motion.js";

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
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <motion.div
        className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-accent/20 opacity-60"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <div className="container-page relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[1.03fr_.97fr]">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.span className="eyebrow" variants={fadeUp}>
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
            <motion.a href="#membership" className="btn-secondary" whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.96 }}>
              Join Community
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="gradient-border glass relative rounded-[2rem] p-4 sm:p-6"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          whileHover={{ rotateX: 2, rotateY: -3 }}
        >
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
          <div className="grid gap-4 sm:grid-cols-2">
            {heroStats.map((stat, index) => (
              <motion.article
                key={stat.label}
                className="group rounded-3xl border border-white/10 bg-surface/20 p-5"
                whileHover={{ y: -10, scale: 1.04, rotate: index % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
              >
                <div className="font-heading text-4xl font-bold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-semibold text-white/62">{stat.label}</p>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${72 + index * 6}%` }}
                    transition={{ duration: 1.4, delay: 0.5 + index * 0.12 }}
                  />
                </div>
                <motion.div
                  className="mt-4 h-2 w-2 rounded-full bg-accent"
                  animate={{ x: [0, 44, 0], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 2.4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.article>
            ))}
          </div>
          <motion.div
            className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-sm uppercase text-accent">Ecosystem signal</p>
            <p className="mt-2 text-2xl font-bold">Idea audit, legal compliance, AI and cyber security support, CRM automation, seed funding guidance, and nationwide expo visibility in one premium platform.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
