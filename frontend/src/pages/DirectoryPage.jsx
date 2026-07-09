import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, PlusCircle, ExternalLink, Mail, Building2, User, ChevronDown } from "lucide-react";
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

const categories = Object.keys(industryCompanies);

const generateData = () => {
  const data = [];
  let idCounter = 1;
  
  categories.forEach((category) => {
    const companies = industryCompanies[category];
    companies.forEach((companyName, idx) => {
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
        description: `Key driver at ${companyName}. Leading efforts to scale ${category} operations.`,
      });
    });
  });

  return data;
};

const allData = generateData();
const ITEMS_PER_PAGE = 10;

export default function DirectoryPage() {
  const [activeTab, setActiveTab] = useState("Exhibitor");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchQuery("");
    setExpandedId(null);
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
              Directory
            </h1>
            <p className="text-white/80 max-w-2xl text-lg">
              Browse our verified ecosystem of companies and members.
            </p>
          </div>
          <Link to="/register" className="btn-primary whitespace-nowrap flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Add Entry
          </Link>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/10 backdrop-blur-lg p-3 rounded-2xl border border-white/20 shadow-lg">
          <div className="flex gap-2 p-1 bg-white/10 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => handleTabChange("Exhibitor")}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "Exhibitor"
                  ? "bg-white/20 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              Exhibitor
            </button>
            <button
              onClick={() => handleTabChange("Member")}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "Member"
                  ? "bg-white/20 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              Directory
            </button>
          </div>

          <div className="relative w-full sm:w-96">
            <div className="relative flex items-center bg-black/40 rounded-xl border border-white/10">
              <Search className="absolute left-4 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Search by name or category..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-0 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Data List */}
        <div className="mt-4 flex flex-col gap-4 min-h-[600px]">
          <AnimatePresence mode="wait">
            {currentData.length > 0 ? (
              currentData.map((item, index) => {
                const isExhibitor = activeTab === "Exhibitor";
                const isExpanded = expandedId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all shadow-lg backdrop-blur-sm"
                  >
                    {/* Main Row Content */}
                    <div 
                      className="relative z-10 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div className="flex items-center gap-4 w-full sm:w-1/3">
                        <img 
                          src={`https://logo.clearbit.com/${item.website.replace('https://', '').replace('http://', '').split('/')[0]}`} 
                          alt={item.name} 
                          className="w-12 h-12 rounded-lg shrink-0 object-contain border border-white/20 bg-white"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`;
                          }}
                        />
                        <div className="min-w-0">
                          <h3 className="font-bold text-white text-lg truncate">
                            {item.name}
                          </h3>
                          <p className="text-sm text-white/60 truncate mt-0.5">
                            {isExhibitor ? item.category : item.company}
                          </p>
                        </div>
                      </div>

                      {/* Middle: Description */}
                      <div className="hidden sm:block w-full sm:w-1/3 px-4">
                        <p className="text-sm text-white/70 line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="w-full sm:w-1/3 flex justify-between sm:justify-end items-center gap-6">
                         <div className="text-left sm:text-right">
                           <p className="text-sm font-medium text-white">
                             {isExhibitor ? `Booth ${item.booth}` : item.memberType}
                           </p>
                           <p className="text-xs text-white/60 mt-0.5">
                             {isExhibitor ? "Exhibitor" : item.role}
                           </p>
                         </div>
                         <div className={`p-2 rounded-full bg-white/5 transition-transform ${isExpanded ? 'rotate-180 bg-white/10' : ''}`}>
                           <ChevronDown className="w-5 h-5 text-white/70" />
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
                          className="overflow-hidden border-t border-white/10 bg-black/20"
                        >
                           <div className="p-6 flex flex-col md:flex-row gap-8">
                             {/* Description */}
                             <div className="flex-1 space-y-3">
                               <h4 className="text-sm font-semibold text-white/80">About</h4>
                               <p className="text-sm text-white/70 leading-relaxed">
                                 {item.description}
                               </p>
                             </div>

                             {/* Contact */}
                             <div className="w-full md:w-64 space-y-3">
                               <h4 className="text-sm font-semibold text-white/80">Contact Information</h4>
                               <div className="flex flex-col gap-2">
                                 <a href={item.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                                   <ExternalLink className="w-4 h-4" /> Website
                                 </a>
                                 <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                                   <Mail className="w-4 h-4" /> {item.email}
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
                className="flex flex-col items-center justify-center h-64 bg-white/5 rounded-xl border border-white/10"
              >
                <Search className="w-12 h-12 text-white/20 mb-4" />
                <h3 className="text-lg font-bold text-white/80 mb-1">No results found</h3>
                <p className="text-white/50 text-sm">Try adjusting your search query.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    currentPage === i + 1
                      ? "bg-white/20 text-white"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
