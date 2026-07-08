import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, PlusCircle, ExternalLink, Mail, Terminal, Activity, Cpu, Fingerprint, Zap, Network, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Real companies data mapping
const industryCompanies = {
  "AI & Automation": ["OpenAI", "Anthropic", "DeepMind", "UiPath", "Automation Anywhere", "Scale AI", "Hugging Face"],
  "EV & Automotive": ["Tesla", "Rivian", "Lucid Motors", "NIO", "Ather Energy", "Polestar", "Ola Electric"],
  "Health Innovation": ["Moderna", "BioNTech", "Tempus", "Butterfly Network", "23andMe", "CureVac", "Oura"],
  "Satellite & Space": ["SpaceX", "Blue Origin", "Planet Labs", "Rocket Lab", "Spire Global", "Astroscale", "Pixxel"],
  "Cyber Security": ["CrowdStrike", "Palo Alto Networks", "Fortinet", "Zscaler", "SentinelOne", "Darktrace", "Okta"],
  "FinTech": ["Stripe", "Square", "Revolut", "Plaid", "Razorpay", "Coinbase", "Robinhood"],
  "EdTech": ["Coursera", "Duolingo", "Byju's", "Udemy", "Khan Academy", "MasterClass", "Quizlet"],
};

const techStacks = [
  ["Neural Networks", "LLMs", "Python"],
  ["Quantum Compute", "Rust", "C++"],
  ["Web3", "Solidity", "React"],
  ["Biotech", "CRISPR", "Data Science"],
  ["IoT", "Edge Computing", "5G"],
  ["Computer Vision", "TensorFlow", "CUDA"]
];

const categories = Object.keys(industryCompanies);

const generateData = () => {
  const data = [];
  let idCounter = 1;
  
  categories.forEach((category) => {
    const companies = industryCompanies[category];
    companies.forEach((companyName, idx) => {
      const matchScore = Math.floor(Math.random() * (99 - 85 + 1)) + 85;
      const stack = techStacks[Math.floor(Math.random() * techStacks.length)];
      
      // Exhibitor
      data.push({
        id: `ex-${idCounter++}`,
        type: "Exhibitor",
        name: companyName,
        category: category,
        booth: `${String.fromCharCode(65 + (idx % 5))}-${10 + (idCounter % 20)}`,
        description: `Pioneering innovative solutions in ${category} to empower the future.`,
        website: `https://${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        email: `contact@${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        phone: `+91 98765 ${10000 + idCounter}`,
        aiMatchScore: matchScore,
        techStack: stack,
        aiSummary: `System scan complete. ${companyName} exhibits a highly optimized trajectory in ${category} utilizing advanced ${stack[0]} paradigms. Strong probability of exponential ecosystem integration.`,
      });
      
      // Member (Startup or Investor)
      data.push({
        id: `mem-${idCounter++}`,
        type: "Member",
        name: `Representative ${idCounter}`,
        role: idx % 2 === 0 ? "Founder & CEO" : "Managing Partner",
        company: companyName,
        memberType: idx % 2 === 0 ? "Startup" : "Investor",
        website: `https://${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        email: `hello@${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
        phone: `+91 99999 ${20000 + idCounter}`,
        aiMatchScore: matchScore - 2,
        techStack: stack,
        aiSummary: `Individual profile mapped. Key driver at ${companyName}. Expertise detected in leveraging ${stack[1]} to scale ${category} operations. High synergy with current user matrices.`,
      });
    });
  });

  return data;
};

const allData = generateData();
const ITEMS_PER_PAGE = 10;

// Reusable Circular Progress for AI Match
const MatchScoreRing = ({ score, colorClass, borderClass }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r={radius} className="fill-none stroke-white/20" strokeWidth="3" />
        <motion.circle
          cx="20" cy="20" r={radius}
          className={`fill-none ${borderClass}`}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className={`text-[10px] font-bold ${colorClass}`}>{score}%</span>
      </div>
    </div>
  );
};

export default function DirectoryPage() {
  const [activeTab, setActiveTab] = useState("Exhibitor");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);
  
  // Cybernetic Search State
  const [isDecoding, setIsDecoding] = useState(false);
  const [displayedResults, setDisplayedResults] = useState([]);

  const filteredData = useMemo(() => {
    let filtered = allData.filter((item) => item.type === activeTab);
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    return filtered;
  }, [activeTab, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentData = useMemo(() => {
    return filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  // Decoding effect
  useEffect(() => {
    setIsDecoding(true);
    setExpandedId(null);
    const timer = setTimeout(() => {
      setDisplayedResults(currentData);
      setIsDecoding(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, [currentData, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchQuery("");
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10 container-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Directory</span>
            </h1>
            <p className="text-white/80 max-w-2xl text-lg flex items-center justify-center md:justify-start gap-2">
              <Network className="w-5 h-5 text-cyan-400" />
              Accessing global network of verified ecosystem nodes...
            </p>
          </div>
          <Link to="/register" className="btn-primary whitespace-nowrap shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Initialize Node
          </Link>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-black/60 backdrop-blur-xl p-3 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <div className="flex gap-2 p-1 bg-white/10 rounded-xl w-full sm:w-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 opacity-50" />
            <button
              onClick={() => handleTabChange("Exhibitor")}
              className={`relative z-10 flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "Exhibitor"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  : "text-white/80 hover:text-white hover:bg-white/20 border border-transparent"
              }`}
            >
              Exhibitor
            </button>
            <button
              onClick={() => handleTabChange("Member")}
              className={`relative z-10 flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "Member"
                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  : "text-white/80 hover:text-white hover:bg-white/20 border border-transparent"
              }`}
            >
              Directory
            </button>
          </div>

          <div className="relative w-full sm:w-96 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-xl opacity-30 group-hover:opacity-60 transition duration-500 blur"></div>
            <div className="relative flex items-center bg-black/80 rounded-xl border border-white/20">
              <Terminal className="absolute left-4 w-5 h-5 text-cyan-400" />
              <input
                type="text"
                placeholder="Query database..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm text-white font-mono placeholder-white/50 focus:outline-none focus:ring-0 transition-all"
              />
              <div className="absolute right-4 flex items-center gap-2">
                 <span className="text-[10px] uppercase text-cyan-500/80 font-bold tracking-widest animate-pulse">
                   {isDecoding ? "Processing" : "Ready"}
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Nodes List */}
        <div className="mt-4 flex flex-col gap-4 min-h-[600px]">
          <AnimatePresence mode="wait">
            {isDecoding ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-64 gap-4"
              >
                <Activity className="w-10 h-10 text-cyan-400 animate-pulse" />
                <p className="text-cyan-400 font-bold font-mono text-sm tracking-widest uppercase">Analyzing Neural Pathways...</p>
                <div className="w-48 h-1 bg-white/20 overflow-hidden rounded-full mt-2">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 w-1/2 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                </div>
              </motion.div>
            ) : displayedResults.length > 0 ? (
              displayedResults.map((item, index) => {
                const isExhibitor = activeTab === "Exhibitor";
                const isExpanded = expandedId === item.id;
                
                // Colors matched to core theme (Cyan / Indigo)
                const primaryColorClass = isExhibitor ? "text-cyan-400" : "text-indigo-400";
                const primaryBorderClass = isExhibitor ? "border-cyan-500/50" : "border-indigo-500/50";
                const primaryStrokeClass = isExhibitor ? "stroke-cyan-400" : "stroke-indigo-400";
                const primaryBgClass = isExhibitor ? "bg-cyan-500/20" : "bg-indigo-500/20";

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative group rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  >
                    {/* Background & Borders */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl" />
                    
                    {/* Laser Hover Line */}
                    <div className={`absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b ${isExhibitor ? 'from-cyan-400/0 via-cyan-400 to-cyan-400/0' : 'from-indigo-400/0 via-indigo-400 to-indigo-400/0'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${isExhibitor ? 'from-cyan-500/10 to-transparent' : 'from-indigo-500/10 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                    {/* Main Row Content */}
                    <div 
                      className="relative z-10 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                      onClick={() => toggleExpand(item.id)}
                    >
                      {/* Left: Score & Identity */}
                      <div className="flex items-center gap-4 w-full sm:w-1/3">
                        <MatchScoreRing score={item.aiMatchScore} colorClass={primaryColorClass} borderClass={primaryStrokeClass} />
                        <div>
                          <h3 className={`font-bold text-white text-lg group-hover:${primaryColorClass} transition-colors flex items-center gap-2`}>
                            {item.name}
                          </h3>
                          <p className="text-xs text-white/80 font-mono mt-0.5 flex items-center gap-1.5">
                            <Fingerprint className="w-3 h-3 text-white/60" /> ID: {item.id.toUpperCase()}
                          </p>
                        </div>
                      </div>

                      {/* Middle: Tech Stack / Details */}
                      <div className="w-full sm:w-1/3 flex flex-wrap gap-2">
                        {item.techStack.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-white/10 border border-white/20 rounded text-[10px] uppercase font-bold text-white tracking-wider flex items-center gap-1">
                            <Cpu className="w-3 h-3 text-white/60" /> {tech}
                          </span>
                        ))}
                      </div>

                      {/* Right: Category & Expand */}
                      <div className="w-full sm:w-1/3 flex justify-between sm:justify-end items-center gap-6">
                         <div className="text-right">
                           <p className={`text-sm font-bold ${primaryColorClass}`}>
                             {isExhibitor ? item.category : item.memberType}
                           </p>
                           <p className="text-xs text-white/80">
                             {isExhibitor ? `Sector / Booth ${item.booth}` : item.role}
                           </p>
                         </div>
                         <div className={`p-2 rounded-full bg-white/10 border border-white/20 transition-transform ${isExpanded ? 'rotate-180 bg-white/20' : 'group-hover:bg-white/20'}`}>
                           <ChevronDown className="w-5 h-5 text-white" />
                         </div>
                      </div>
                    </div>

                    {/* Expanded Deep Dive Panel */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden relative z-0 border-t border-white/20 bg-black/40"
                        >
                           {/* Grid Background */}
                           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
                           
                           <div className="relative z-10 p-6 sm:p-8 flex flex-col md:flex-row gap-8">
                             {/* AI Summary */}
                             <div className="flex-1 space-y-4">
                               <h4 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-mono ${primaryColorClass}`}>
                                 <Zap className="w-4 h-4" /> System Diagnostics
                               </h4>
                               <p className="text-sm text-white leading-relaxed bg-black/60 p-4 rounded-xl border border-white/10 font-mono">
                                 &gt; {item.aiSummary}
                               </p>
                             </div>

                             {/* Contact & Actions */}
                             <div className="w-full md:w-64 space-y-4">
                                <h4 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-mono ${primaryColorClass}`}>
                                 <Network className="w-4 h-4" /> Establish Link
                               </h4>
                               <div className="flex flex-col gap-3">
                                 <a href={item.website} target="_blank" rel="noreferrer" className={`flex items-center justify-between w-full p-3 rounded-lg ${primaryBgClass} hover:bg-opacity-40 border ${primaryBorderClass} transition-colors group/btn`}>
                                   <span className={`text-sm font-bold ${primaryColorClass}`}>Commence Uplink</span>
                                   <ExternalLink className={`w-4 h-4 ${primaryColorClass} group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform`} />
                                 </a>
                                 <a href={`mailto:${item.email}`} className="flex items-center justify-between w-full p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors group/btn">
                                   <span className="text-sm font-bold text-white">Transmit Protocol</span>
                                   <Mail className="w-4 h-4 text-white/80 group-hover/btn:text-white transition-colors" />
                                 </a>
                               </div>
                             </div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-64 bg-black/60 backdrop-blur-md rounded-xl border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              >
                <Terminal className="w-12 h-12 text-white/40 mb-4" />
                <h3 className="text-xl font-bold text-white/80 mb-2 font-mono">0 NODES FOUND</h3>
                <p className="text-white/60 font-mono text-sm">Adjust search parameters and retry.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && !isDecoding && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-white/20 bg-black/60 text-white hover:bg-white/20 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                    currentPage === i + 1
                      ? activeTab === "Exhibitor"
                        ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                        : "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                      : "bg-black/60 text-white/70 border border-white/10 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-white/20 bg-black/60 text-white hover:bg-white/20 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
