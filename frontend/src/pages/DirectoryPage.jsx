import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Building2, MapPin, User, Briefcase, ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Generate a large dummy list
const categories = ["AI & Automation", "EV & Automotive", "Health Innovation", "Satellite & Space", "Cyber Security", "FinTech", "EdTech"];
const generateData = () => {
  const data = [];
  for (let i = 1; i <= 150; i++) {
    const isExhibitor = i % 3 !== 0;
    if (isExhibitor) {
      data.push({
        id: `ex-${i}`,
        type: "Exhibitor",
        name: `Tech Company ${i}`,
        category: categories[i % categories.length],
        booth: `${String.fromCharCode(65 + (i % 5))}-${10 + (i % 20)}`,
        description: `Innovative solutions in the field of ${categories[i % categories.length].toLowerCase()} to scale your business.`,
      });
    } else {
      data.push({
        id: `mem-${i}`,
        type: "Member",
        name: `Member Name ${i}`,
        role: i % 2 === 0 ? "Founder & CEO" : "Managing Partner",
        company: `Enterprise ${i} Ltd.`,
        memberType: i % 2 === 0 ? "Startup" : "Investor",
      });
    }
  }
  return data;
};

const allData = generateData();
const ITEMS_PER_PAGE = 12;

export default function DirectoryPage() {
  const [activeTab, setActiveTab] = useState("Exhibitor");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
  const currentData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchQuery("");
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
              Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Directory</span>
            </h1>
            <p className="text-white/60 max-w-2xl text-lg">
              Browse our extensive network of startups, investors, and exhibitors driving the future of innovation.
            </p>
          </div>
          <Link to="/register" className="btn-primary whitespace-nowrap shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Register as Exhibitor
          </Link>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/[0.02] p-2 rounded-xl border border-white/10">
          <div className="flex gap-2 p-1 bg-white/5 rounded-lg w-full sm:w-auto">
            <button
              onClick={() => handleTabChange("Exhibitor")}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                activeTab === "Exhibitor"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "text-white/60 hover:text-white hover:bg-white/10 border border-transparent"
              }`}
            >
              Exhibitors
            </button>
            <button
              onClick={() => handleTabChange("Member")}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                activeTab === "Member"
                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                  : "text-white/60 hover:text-white hover:bg-white/10 border border-transparent"
              }`}
            >
              Directory Members
            </button>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search by name, category, or company..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-black/40 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[500px] mt-4">
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.2)] group flex flex-col"
              >
                {activeTab === "Exhibitor" ? (
                  <>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors pr-4">{item.name}</h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/5 shrink-0">
                        <MapPin className="w-3 h-3" /> {item.booth}
                      </span>
                    </div>
                    <p className="text-sm text-cyan-400 mb-3 flex items-center gap-1.5 font-medium">
                      <Building2 className="w-4 h-4" /> {item.category}
                    </p>
                    <p className="text-sm text-white/60 line-clamp-3 mt-auto">{item.description}</p>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center shrink-0 border border-white/10">
                        <User className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 uppercase tracking-wider mt-1 border border-indigo-500/20">
                          {item.memberType}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 font-medium flex items-center gap-1.5 mb-1 mt-auto">
                      {item.company}
                    </p>
                    <p className="text-xs text-white/50 flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3" /> {item.role}
                    </p>
                  </>
                )}
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
              <Search className="w-12 h-12 text-white/20 mb-4" />
              <h3 className="text-xl font-bold text-white/60 mb-2">No results found</h3>
              <p className="text-white/40">Try adjusting your search criteria</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
                      ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                      : "bg-transparent text-white/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
