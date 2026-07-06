import { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Search, CircuitBoard } from "lucide-react";
import { heroStats } from "./data.js";
import { fadeUp, staggerContainer } from "./motion.js";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 3,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(Math.round(latest).toString());
        }
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="flex items-start tracking-tighter">
      <span>{display}</span>
      {suffix && <span className="text-[#FF9933] ml-1 text-3xl sm:text-4xl lg:text-5xl font-black mt-1">{suffix}</span>}
    </div>
  );
}

const searchHints = [
  "Search for startup consultation and idea analysis...",
  "Find trademark, GST, and legal compliance support...",
  "Explore Seed Funding and National Award guidance...",
  "Discover SOF Expo memberships and stall bookings...",
  "Search for Cyber Security and CRM automation...",
  "Explore innovations in AI, EV, and Green Tech..."
];

export default function Hero() {
  const [placeholderText, setPlaceholderText] = useState("");
  const [hintIndex, setHintIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentHint = searchHints[hintIndex];
    let typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && placeholderText === currentHint) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && placeholderText === "") {
      // Move to next hint
      setIsDeleting(false);
      setHintIndex((prev) => (prev + 1) % searchHints.length);
      return;
    }

    const timeout = setTimeout(() => {
      setPlaceholderText(
        isDeleting 
          ? currentHint.substring(0, placeholderText.length - 1)
          : currentHint.substring(0, placeholderText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, hintIndex]);

  return (
    <section id="index" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <motion.div
        className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-accent/20 opacity-60"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <div className="container-page relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[1.03fr_.97fr]">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col justify-center">
          {/* Hero Search Bar - Animated & Attractive */}
          <motion.div 
            className="relative mb-10 w-full max-w-2xl group cursor-pointer z-20"
            variants={fadeUp}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Animated Glow Behind the Search Bar */}
            <motion.div
              className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-30 blur-lg group-hover:opacity-60 transition duration-500"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-hover:text-[#FF9933] transition-colors duration-300" />
              </div>
              <input
                type="text"
                className="bg-white border border-white/40 text-slate-900 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF9933] block w-full pl-16 pr-24 py-5 transition-all duration-300 placeholder:text-slate-400 shadow-2xl group-hover:shadow-[0_0_25px_rgba(255,153,51,0.25)]"
                placeholder={placeholderText}
                readOnly
              />
              <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                {/* Mini Circuit Theme Edge */}
                <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col gap-1">
                    <div className="h-1 w-1 rounded-full bg-[#138808] animate-pulse" style={{ animationDuration: '1s' }} />
                    <div className="h-1 w-1 rounded-full bg-[#FF9933]" />
                  </div>
                  <div className="h-px w-4 bg-gradient-to-r from-[#138808] to-[#FF9933]" />
                  <CircuitBoard className="h-6 w-6 text-[#FF9933]" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.span className="eyebrow self-start" variants={fadeUp}>
            <Sparkles className="h-3.5 w-3.5" /> Startup of the Future
          </motion.span>
          <motion.h1
            className="max-w-5xl font-heading text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
            variants={fadeUp}
          >
            Building the Future of Innovation's
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

          <motion.div className="mt-12 space-y-12" variants={fadeUp}>
            {/* Ecosystem Signal Glass Box */}
            <div className="gradient-border glass rounded-3xl p-5 hover:scale-[1.01] transition-transform duration-300">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Ecosystem signal</p>
              <p className="mt-2 text-lg font-bold leading-normal text-white">
                Idea audit, legal compliance, AI and cyber security support, CRM automation, seed funding guidance, and nationwide expo visibility in one premium platform.
              </p>
            </div>

            {/* Gitex Style Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 pt-6 border-t border-white/10 relative">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="flex flex-col group relative">
                  <div className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-white/50 group-hover:text-white transition-colors duration-500 leading-snug max-w-[150px]">
                    {stat.label}
                  </p>
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
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full rounded-[2rem] object-cover"
            >
              <source src="/expo_banner_video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
