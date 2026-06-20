import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";
import { roadmap } from "./data.js";
import { viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

// Sub-component for each step card to safely use React hooks and avoid timing drift
function StepCard({ step, index, progress }) {
  const intensity = useTransform(progress, (value) => {
    const P = index / 6; // Peak position fraction (0 to 1)
    const spread = 0.15; // Width of the glow effect
    let dist = Math.abs(value - P);
    if (dist > 0.5) dist = 1 - dist; // Wrap around for looping
    if (dist < spread) {
      return Math.pow(1 - (dist / spread), 1.5); // Smooth easing
    }
    return 0;
  });

  const boxShadow = useTransform(intensity, (val) => `inset 0 0 ${25 * val}px ${2 * val}px rgba(14, 165, 233, ${0.6 * val})`);
  const backgroundColor = useTransform(intensity, (val) => `rgba(14, 165, 233, ${0.2 * val})`);

  return (
    <motion.div
      className="relative z-10 flex flex-row items-center gap-4 rounded-3xl border border-white/10 bg-midnight/30 p-4 text-left lg:flex-col lg:text-center lg:justify-center lg:p-5 hover:border-accent/50 hover:bg-midnight/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300 group cursor-default"
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      viewport={viewport}
      transition={{ 
        delay: index * 0.08,
        type: "spring",
        stiffness: 300,
        damping: 24
      }}
    >
      {/* Synchronized Glow Overlay */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          boxShadow,
          backgroundColor
        }}
      />
      <motion.span 
        className="relative flex-shrink-0 grid h-9 w-9 place-items-center rounded-full bg-accent text-midnight lg:mx-auto group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.6)] transition-all duration-300 z-10"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
      >
        <CheckCircle2 className="h-5 w-5" />
      </motion.span>
      <div className="z-10">
        <span className="text-xs uppercase text-accent font-semibold tracking-wider lg:hidden">Step {index + 1}</span>
        <p className="font-heading text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 lg:mt-3">{step}</p>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const duration = 7000; // 7 seconds loop duration
    progress.set((time % duration) / duration);
  });

  const rocketLeft = useTransform(progress, [0, 1], ["0%", "100%"]);
  const rocketTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader eyebrow="Startup Journey" title="A clear path from first insight to scalable venture." copy="The SOF roadmap keeps founders focused on the next decision, the next proof point, and the next milestone." align="center" />
        <motion.div 
          className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8 relative" 
          initial={{ opacity: 0, y: 34 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={viewport}
        >
          {/* Animated background glow inside the container */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent blur-3xl"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-7 lg:gap-4">
             {/* Vertical connector line for mobile/tablet */}
            <motion.div
              className="absolute left-[34px] top-[34px] bottom-[34px] w-0.5 bg-gradient-to-b from-primary via-accent to-primary lg:hidden"
              initial={{ scaleY: 0, transformOrigin: "top" }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{ duration: 1.1, ease: "easeOut" }}
              animate={{ backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"] }}
              style={{ backgroundSize: "100% 200%" }}
            >
              {/* Moving Rocket (Mobile) */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent z-20"
                style={{ top: rocketTop }}
              >
                <Rocket className="h-6 w-6 rotate-[135deg] drop-shadow-[0_0_10px_rgba(14,165,233,0.8)] bg-midnight rounded-full" />
              </motion.div>
            </motion.div>
            {/* Horizontal connector line for desktop */}
            <motion.div
              className="absolute left-[7.14%] right-[7.14%] top-[38px] hidden h-0.5 bg-gradient-to-r from-primary via-accent to-primary lg:block"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 1.1, ease: "easeOut" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              style={{ backgroundSize: "200% 100%" }}
            >
              {/* Moving Rocket (Desktop) */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-accent z-20"
                style={{ left: rocketLeft }}
              >
                <Rocket className="h-6 w-6 rotate-45 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)] bg-midnight rounded-full" />
              </motion.div>
            </motion.div>
             {roadmap.map((step, index) => (
              <StepCard key={step} step={step} index={index} progress={progress} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
