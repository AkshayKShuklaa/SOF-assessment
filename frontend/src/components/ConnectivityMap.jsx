
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Network } from "lucide-react";
import ForceGraph2D from 'react-force-graph-2d';

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
  // Central hub node
  const hubNode = statesData.find(s => s.isHub);
  const [selectedState, setSelectedState] = useState(statesData[0]);
  const [hoveredState, setHoveredState] = useState(null);
  const computeDistance = (node) => {
    if (!node || !hubNode) return 0;
    const dx = node.x - hubNode.x;
    const dy = node.y - hubNode.y;
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  };
  const fgRef = useRef();
  // Configure forces after graph mounts
  useEffect(() => {
    if (fgRef.current) {
      // Increase link distance to separate close nodes
      fgRef.current.d3Force('link').distance(link => {
        // If link involves hub, use larger distance
        return link.source.id === hubNode.name || link.target.id === hubNode.name ? 200 : 120;
      });
      // Apply repulsive charge to spread nodes
      fgRef.current.d3Force('charge').strength(-250);
    }
  }, []);

  return (
    <div className="gradient-border glass rounded-[2rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[500px]">
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      
      {/* Self-contained style block for light/dark mode map adaptation and custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Default Dark Mode Map styles */
        .map-outline {
          fill: rgba(14, 165, 233, 0.03);
          stroke: rgba(14, 165, 233, 0.3);
          transition: all 0.3s ease;
        }
        .map-line {
          stroke: rgba(255, 255, 255, 0.05);
          transition: stroke 0.3s ease, stroke-width 0.3s ease;
        }
        .map-line.active {
          stroke: rgba(14, 165, 233, 0.6);
        }
        .map-node {
          fill: #0f172a;
          stroke: rgba(14, 165, 233, 0.4);
          transition: all 0.3s ease;
        }
        .map-node.hub {
          fill: #4F46E5;
          stroke: #ffffff;
        }
        .map-node.active {
          fill: #0ea5e9;
          stroke: #ffffff;
        }
        .map-label {
          fill: rgba(255, 255, 255, 0.4);
          transition: fill 0.3s ease, font-weight 0.3s ease;
        }
        .map-label.active {
          fill: #ffffff;
          font-weight: bold;
        }
      `}} />

      {/* Header Info */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
            <Network className="h-4 w-4 animate-pulse" />
            Connectivity Hub
          </span>
          <h3 className="mt-2 font-heading text-2xl font-bold text-white">India Innovation Circuit</h3>
          <p className="text-xs text-white/50 mt-1">Click a node to view state-specific expo focus</p>
        </div>
      </div>

      {/* SVG Canvas Map Container */}
      <div className="relative flex-grow flex items-center justify-center my-4 min-h-[350px]">
        
        
        <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center">
          <ForceGraph2D
              graphData={{
                nodes: statesData.map(s => ({ id: s.name, ...s })),
                links: statesData
                  .filter(s => !s.isHub)
                  .map(s => ({ source: hubNode.name, target: s.name })),
              }}
              width={340}
              height={340}
              nodeCanvasObject={(node, ctx, globalScale) => {
                 const radius = node.isHub ? 8 : 5;
                 const fillColor = node.isHub ? '#4F46E5' : '#0ea5e9';
                 ctx.beginPath();
                 ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
                 ctx.fillStyle = fillColor;
                 ctx.fill();
                 ctx.shadowBlur = 8;
                 ctx.shadowColor = fillColor;
                 // draw city name label
                 ctx.font = `${12 / globalScale}px Sans-Serif`;
                 ctx.fillStyle = '#fff';
                 ctx.textAlign = 'center';
                 ctx.fillText(node.id, node.x, node.y - radius - 4);
               }}
              linkWidth={2}
              linkColor={() => 'rgba(14, 165, 233, 0.15)'}
              linkDirectionalParticles={4}
              linkDirectionalParticleWidth={3}
              linkDirectionalParticleColor={() => '#0ea5e9'}
              linkDirectionalParticleSpeed={0.008}
              onNodeClick={node => setSelectedState(node)}
              onNodeHover={node => setHoveredState(node)}
            />
        </div>
      </div>

      {/* Selected State Info Panel */}
      <div className="relative z-10 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedState.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <MapPin className={`h-4 w-4 ${selectedState.isHub ? "text-indigo-400" : "text-cyan-400"}`} />
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                {selectedState.name} {selectedState.isHub && "(HQ)"}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-light">{selectedState.info}</p>
            <p className="text-sm text-white/60 leading-relaxed font-light">Distance from hub: {computeDistance(selectedState)} km</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
