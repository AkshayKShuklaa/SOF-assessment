import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mic2, Cpu } from "lucide-react";
import { expoHighlights, expoStates, showcases, speakers } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";
import ConnectivityMap from "./ConnectivityMap.jsx";


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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);


  return (
    <section id="events" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="SOF Events"
          title="A future-facing event platform for founders, investors, and technology leaders."
          copy="The SOF Events brings live demos, expert talks, partner meetings, and startup showcases into one high-signal experience."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left Column: Event details and features */}
          <div className="flex flex-col gap-6">
            <motion.div 
              className="gradient-border glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8" 
              initial={{ opacity: 0, y: 34 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={viewport}
            >
              {/* Event Banner Image */}
              <div className="h-48 sm:h-56 overflow-hidden -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 relative">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                >
                  <source src="/expo_banner_video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
              </div>

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">SOF Events 2026-27</p>
                <h3 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">India's Creative Potential of Generative AI</h3>
                
                {/* Countdown */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {countdown.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/5 bg-midnight/70 p-3 text-center">
                      <p className="font-heading text-2xl font-bold">{String(value).padStart(2, "0")}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {expoHighlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={highlight.title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                        <Icon className="h-5 w-5 text-accent" />
                        <h4 className="mt-3 font-heading text-base font-bold">{highlight.title}</h4>
                        <p className="mt-1.5 text-xs leading-5 text-white/60">{highlight.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {expoStates.map((state) => (
                    <span key={state} className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold text-white/50">
                      {state}
                    </span>
                  ))}
                </div>

                <a href="#reach-us" className="btn-primary mt-6 w-fit">
                  Register for Events <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Speaker & Showcase Sub-Grid */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewport} 
              variants={staggerContainer} 
              className="grid gap-6 sm:grid-cols-2"
            >
              <motion.div className="glass rounded-3xl p-6" variants={fadeUp}>
                <div className="mb-4 flex items-center gap-3">
                  <Mic2 className="h-5 w-5 text-accent" />
                  <h3 className="font-heading text-xl font-bold">Featured Speakers</h3>
                </div>
                <div className="grid gap-3.5">
                  {speakers.map((speaker) => (
                    <div key={speaker.name} className="rounded-xl bg-white/[0.03] p-3">
                      <p className="font-bold text-sm text-white">{speaker.name}</p>
                      <p className="text-xs text-white/50 mt-0.5">{speaker.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="glass rounded-3xl p-6" variants={fadeUp}>
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-accent" />
                  <h3 className="font-heading text-xl font-bold">Showcase</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {showcases.map((showcase) => {
                    const Icon = showcase.icon;
                    return (
                      <div key={showcase.title} className="rounded-xl border border-white/5 bg-surface/70 p-3 flex flex-col justify-between min-h-[80px]">
                        <Icon className="h-4 w-4 text-accent" />
                        <p className="text-xs font-bold text-white/80 leading-snug">{showcase.title}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: India Interactive Connectivity Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <ConnectivityMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
