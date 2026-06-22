import React from "react";
import { motion } from "framer-motion";
import { MapPin, Network, Sparkles, ArrowRight } from "lucide-react";

const statesData = [
  { name: "Delhi NCR", isHub: true, info: "Central SOF Innovation Hub & Expo HQ" },
  { name: "Punjab", info: "Regional Agri-Tech & Smart Manufacturing" },
  { name: "Haryana", info: "Industrial IoT & Automation Clusters" },
  { name: "Rajasthan", info: "Solar & Clean Energy Innovation Centre" },
  { name: "Gujarat", info: "EV & Green Tech Startup Hub" },
  { name: "Maharashtra", info: "Fintech, SaaS & Deep Tech Network" },
  { name: "Karnataka", info: "Generative AI, SpaceTech & Robotics Hub" },
  { name: "Telangana", info: "Biotech & Cyber Security Platform" },
  { name: "Tamil Nadu", info: "Automotive Tech & Hardware Showcases" },
  { name: "Odisha", info: "Digital Infrastructure & Smart City Solutions" },
  { name: "Jharkhand", info: "Industrial Digitization & Metallurgy Innovation" },
  { name: "Bihar", info: "Regional Tech Empowerment & Skill Hub" },
  { name: "Uttar Pradesh", info: "E-Commerce & Digital Scale Operations" }
];

export default function ConnectivityMap() {
  // Split data into two rows for the marquee
  const row1 = statesData.slice(0, 7);
  const row2 = statesData.slice(7, 13);

  // Duplicate arrays to create a seamless loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <div className="gradient-border glass rounded-[2rem] p-6 sm:p-8 relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      
      {/* Header Info */}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-10">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
            <Network className="h-4 w-4 animate-pulse" />
            Connectivity Hub
          </span>
          <h3 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">India Innovation Circuit</h3>
          <p className="text-sm text-white/50 mt-2 max-w-xl">
            A dynamic network of state-specific expo hubs driving the future of generative AI, green tech, and industrial automation across India.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 flex flex-col gap-6 overflow-hidden -mx-6 sm:-mx-8 px-6 sm:px-8 py-4">
        {/* Row 1 - Moving Left */}
        <div className="flex w-[200%] sm:w-max">
          <motion.div 
            className="flex gap-6 min-w-max"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {marqueeRow1.map((state, idx) => (
              <StateCard key={`${state.name}-${idx}`} state={state} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-[200%] sm:w-max justify-end">
          <motion.div 
            className="flex gap-6 min-w-max"
            animate={{ x: ["-33.333333%", "0%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {marqueeRow2.map((state, idx) => (
              <StateCard key={`${state.name}-${idx}`} state={state} />
            ))}
          </motion.div>
        </div>
        
        {/* Gradient fades for the edges of the marquee container */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#050B14] to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#050B14] to-transparent pointer-events-none z-20" />
      </div>
    </div>
  );
}

function StateCard({ state }) {
  const isHub = state.isHub;
  
  return (
    <motion.div 
      className={`relative w-[280px] sm:w-[320px] h-[160px] sm:h-[180px] p-5 sm:p-6 rounded-[1.5rem] border backdrop-blur-md flex flex-col justify-between group overflow-hidden transition-all duration-300 ${
        isHub 
          ? 'bg-indigo-500/10 border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]' 
          : 'bg-white/[0.02] border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04]'
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Decorative background icon */}
      <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
        <MapPin size={120} />
      </div>

      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <h4 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            {state.name}
          </h4>
          {isHub ? (
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold bg-indigo-500 text-white px-2 py-1 rounded-md shadow-[0_0_10px_rgba(99,102,241,0.5)]">
              <Sparkles className="w-3 h-3" /> HQ
            </span>
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors">
              <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
          )}
        </div>
        <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
          {state.info}
        </p>
      </div>

      {isHub && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 opacity-50" />
      )}
    </motion.div>
  );
}
