import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Network } from "lucide-react";

const statesData = [
  { name: "Delhi NCR", x: 42, y: 28, isHub: true, info: "Central SOF Innovation Hub & Expo HQ" },
  { name: "Punjab", x: 33, y: 20, info: "Regional Agri-Tech & Smart Manufacturing" },
  { name: "Haryana", x: 38, y: 25, info: "Industrial IoT & Automation Clusters" },
  { name: "Rajasthan", x: 26, y: 38, info: "Solar & Clean Energy Innovation Centre" },
  { name: "Gujarat", x: 16, y: 52, info: "EV & Green Tech Startup Hub" },
  { name: "Maharashtra", x: 28, y: 65, info: "Fintech, SaaS & Deep Tech Network" },
  { name: "Karnataka", x: 31, y: 82, info: "Generative AI, SpaceTech & Robotics Hub" },
  { name: "Telangana", x: 44, y: 70, info: "Biotech & Cyber Security Platform" },
  { name: "Tamil Nadu", x: 38, y: 92, info: "Automotive Tech & Hardware Showcases" },
  { name: "Odisha", x: 62, y: 58, info: "Digital Infrastructure & Smart City Solutions" },
  { name: "Bihar", x: 65, y: 35, info: "Regional Tech Empowerment & Skill Hub" },
  { name: "Jharkhand", x: 62, y: 44, info: "Industrial Digitization & Metallurgy Innovation" },
  { name: "Uttar Pradesh", x: 52, y: 35, info: "E-Commerce & Digital Scale Operations" }
];

export default function ConnectivityMap() {
  const [selectedState, setSelectedState] = useState(statesData[0]);
  const [hoveredState, setHoveredState] = useState(null);

  const hubNode = statesData.find(s => s.isHub);

  return (
    <div className="gradient-border glass rounded-[2rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[500px]">
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      
      {/* Self-contained style block for light/dark mode map adaptation and custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Default Dark Mode Map styles */
        .map-outline {
          fill: rgba(14, 165, 233, 0.03);
          stroke: rgba(14, 165, 233, 0.3);
          transition: all 0.3s ease;
        }
        .map-line {
          stroke: rgba(255, 255, 255, 0.08);
          transition: stroke 0.3s ease, stroke-width 0.3s ease;
        }
        .map-line.active {
          stroke: rgba(14, 165, 233, 0.5);
        }
        .map-node {
          fill: #10182B;
          stroke: rgba(14, 165, 233, 0.5);
          transition: all 0.3s ease;
        }
        .map-node.hub {
          fill: #4F46E5;
          stroke: #0ea5e9;
        }
        .map-node.active {
          fill: #0ea5e9;
          stroke: #ffffff;
        }
        .map-label {
          fill: rgba(255, 255, 255, 0.45);
          transition: fill 0.3s ease, font-weight 0.3s ease, font-size 0.3s ease;
        }
        .map-label.active {
          fill: #ffffff;
          font-weight: bold;
        }

        /* Adaptive Light Mode Map styles */
        .light-site .map-outline {
          fill: rgba(79, 70, 229, 0.02);
          stroke: rgba(79, 70, 229, 0.25);
        }
        .light-site .map-line {
          stroke: rgba(79, 70, 229, 0.08);
        }
        .light-site .map-line.active {
          stroke: rgba(79, 70, 229, 0.4);
        }
        .light-site .map-node {
          fill: #ffffff;
          stroke: rgba(79, 70, 229, 0.4);
        }
        .light-site .map-node.hub {
          fill: #4F46E5;
          stroke: #0ea5e9;
        }
        .light-site .map-node.active {
          fill: #0ea5e9;
          stroke: #4F46E5;
        }
        .light-site .map-label {
          fill: rgba(15, 23, 42, 0.55);
        }
        .light-site .map-label.active {
          fill: #0f172a;
        }
      `}} />

      {/* Header Info */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <Network className="h-4 w-4 animate-pulse" />
            Connectivity Hub
          </span>
          <h3 className="mt-2 font-heading text-2xl font-bold text-white">India Innovation Circuit</h3>
          <p className="text-xs text-white/50 mt-1">Click a node to view state-specific expo focus</p>
        </div>
      </div>

      {/* SVG Canvas Map Container */}
      <div className="relative flex-grow flex items-center justify-center my-4 min-h-[350px]">
        {/* Decorative Grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60 rounded-2xl pointer-events-none" />
        
        {/* Aspect-square wrapper to prevent any viewport resizing bugs in Flexbox */}
        <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full overflow-visible select-none"
          >
            {/* Gradients Defined at Top */}
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Styled India Coastline Outline */}
            <path
              d="M 40 10 L 46 15 L 53 22 L 65 24 L 75 32 L 68 40 L 73 50 L 68 57 L 64 68 L 50 78 L 41 96 L 36 90 L 32 82 L 25 72 L 28 66 L 22 58 L 13 54 L 14 47 L 22 42 L 24 33 L 31 22 Z"
              className="map-outline"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />

            {/* Connection Lines from Delhi Hub */}
            {statesData.map((state) => {
              if (state.isHub) return null;
              const isSelected = selectedState.name === state.name;
              const isHovered = hoveredState?.name === state.name;
              const active = isSelected || isHovered;
              
              return (
                <g key={`line-${state.name}`}>
                  {/* Background line */}
                  <line
                    x1={hubNode.x}
                    y1={hubNode.y}
                    x2={state.x}
                    y2={state.y}
                    className={`map-line ${active ? "active" : ""}`}
                    strokeWidth={active ? "1" : "0.5"}
                  />
                  
                  {/* Pulsing beam line (animated flow from hub to node) */}
                  <motion.line
                    x1={hubNode.x}
                    y1={hubNode.y}
                    x2={state.x}
                    y2={state.y}
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="4 20"
                    animate={{ strokeDashoffset: [-50, 50] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </g>
              );
            })}

            {/* Map Pins / Nodes */}
            {statesData.map((state) => {
              const isSelected = selectedState.name === state.name;
              const isHovered = hoveredState?.name === state.name;
              const active = state.isHub || isSelected || isHovered;
              
              return (
                <g
                  key={`node-${state.name}`}
                  className="cursor-pointer"
                  onClick={() => setSelectedState(state)}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  {/* Outer pulsing ring */}
                  {active && (
                    <circle
                      cx={state.x}
                      cy={state.y}
                      r={state.isHub ? 5 : 4}
                      fill="transparent"
                      stroke={state.isHub ? "#4F46E5" : "#0ea5e9"}
                      strokeWidth="0.5"
                      className="animate-ping origin-center"
                      style={{ transformOrigin: `${state.x}px ${state.y}px` }}
                    />
                  )}

                  {/* Node circle */}
                  <circle
                    cx={state.x}
                    cy={state.y}
                    r={state.isHub ? 3 : isSelected ? 2.5 : 2}
                    className={`map-node ${state.isHub ? "hub" : isSelected ? "active" : ""}`}
                    strokeWidth={isSelected ? "0.8" : "0.5"}
                  />

                  {/* State Name Labels */}
                  <text
                    x={state.x}
                    y={state.y - 4}
                    textAnchor="middle"
                    className={`map-label ${active ? "active" : ""}`}
                    fontSize={state.isHub || isSelected ? "2.6" : "2.2"}
                    className="pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  >
                    {state.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected State Info Panel */}
      <div className="relative z-10 bg-midnight/60 border border-white/5 rounded-2xl p-4 transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedState.name}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex items-center gap-2">
              <MapPin className={`h-4 w-4 ${selectedState.isHub ? "text-primary" : "text-accent"}`} />
              <span className="font-heading text-lg font-bold text-white">
                {selectedState.name} {selectedState.isHub && "(HQ)"}
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {selectedState.info}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
