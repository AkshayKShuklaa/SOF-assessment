import React from "react";
import { Network, Sparkles } from "lucide-react";

const statesData = [
  { name: "Delhi NCR", isHub: true, info: "Central SOF Innovation Hub & Expo HQ", top: "28%", left: "37%" },
  { name: "Punjab", info: "Regional Agri-Tech & Smart Manufacturing", top: "22%", left: "31%" },
  { name: "Haryana", info: "Industrial IoT & Automation Clusters", top: "26%", left: "34%" },
  { name: "Rajasthan", info: "Solar & Clean Energy Innovation Centre", top: "42%", left: "22%" },
  { name: "Gujarat", info: "EV & Green Tech Startup Hub", top: "54%", left: "20%" },
  { name: "Maharashtra", info: "Fintech, SaaS & Deep Tech Network", top: "66%", left: "30%" },
  { name: "Karnataka", info: "Generative AI, SpaceTech & Robotics Hub", top: "78%", left: "31%" },
  { name: "Telangana", info: "Biotech & Cyber Security Platform", top: "68%", left: "42%" },
  { name: "Tamil Nadu", info: "Automotive Tech & Hardware Showcases", top: "88%", left: "40%" },
  { name: "Odisha", info: "Digital Infrastructure & Smart City Solutions", top: "56%", left: "64%" },
  { name: "Jharkhand", info: "Industrial Digitization & Metallurgy Innovation", top: "48%", left: "60%" },
  { name: "Bihar", info: "Regional Tech Empowerment & Skill Hub", top: "42%", left: "64%" },
  { name: "Uttar Pradesh", info: "E-Commerce & Digital Scale Operations", top: "35%", left: "48%" }
];

export default function ConnectivityMap() {
  return (
    <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-6 sm:p-8 relative overflow-hidden flex flex-col">
      {/* Background Glows for White Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
      
      {/* Header Info */}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-10">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
            <Network className="h-4 w-4 animate-pulse" />
            Connectivity Hub
          </span>
          <h3 className="mt-2 font-heading text-2xl font-bold text-slate-900 sm:text-3xl">India Innovation Circuit</h3>
          <p className="text-sm text-slate-500 mt-2 max-w-xl">
            A dynamic network of state-specific expo hubs driving the future of generative AI, green tech, and industrial automation across India.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative z-10 w-full max-w-[500px] sm:max-w-[700px] mx-auto mb-4 flex justify-center">
        <div className="relative inline-block w-full">
          {/* Map inverted for white background */}
          <img src="/india_map.png" alt="Map of India" className="w-full h-auto invert opacity-60 mix-blend-multiply block" />
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <style>{`
              @keyframes dashFlow {
                to { stroke-dashoffset: -24; }
              }
              .animate-dash-flow {
                animation: dashFlow 2s linear infinite;
              }
            `}</style>
            {statesData.slice(1).map((state, idx) => (
              <line 
                key={`line-${idx}`} 
                x1={statesData[0].left} 
                y1={statesData[0].top} 
                x2={state.left} 
                y2={state.top} 
                stroke="rgba(99, 102, 241, 0.6)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
                className="animate-dash-flow"
              />
            ))}
          </svg>

          {statesData.map((state, idx) => (
            <div 
              key={`map-pin-${idx}`} 
              className="absolute z-20" 
              style={{ top: state.top, left: state.left, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative group cursor-pointer flex items-center justify-center h-6 w-6">
                {/* Ping Animation */}
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${state.isHub ? 'bg-indigo-500' : 'bg-cyan-500'}`}></span>
                <span className={`relative inline-flex rounded-full ${state.isHub ? 'h-3.5 w-3.5 bg-indigo-600 shadow-[0_0_8px_#6366f1]' : 'h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#22d3ee]'}`}></span>
                
                {/* Permanent Name Label */}
                <span className={`absolute top-1/2 left-full -translate-y-1/2 ml-2 whitespace-nowrap text-[9px] sm:text-[11px] font-bold tracking-wider ${state.isHub ? 'text-indigo-600' : 'text-slate-600'} drop-shadow-sm pointer-events-none`}>
                  {state.name}
                </span>

                {/* Tooltip on hover */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 -translate-x-1/2 mb-3 w-max bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs px-3 py-2 rounded-lg shadow-xl pointer-events-none z-50 flex flex-col items-center">
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    {state.isHub && <Sparkles className="w-3 h-3 text-indigo-500" />} 
                    {state.name}
                  </div>
                  <div className="text-slate-500 mt-1 max-w-[150px] text-center">{state.info}</div>
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[6px] border-transparent border-t-slate-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
