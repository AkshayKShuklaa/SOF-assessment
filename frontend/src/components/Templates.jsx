import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { templatesData } from "./data.js";
import { FADE_UP_ANIMATION_VARIANTS } from "./motion.js";

export default function Templates() {
  return (
    <section id="templates" className="relative py-24 sm:py-32 flex flex-col items-center">
      <div className="container relative z-10 px-4 md:px-6">
        <SectionHeader
          icon={LayoutTemplate}
          eyebrow="Templates"
          title="Explore Our Premium Templates"
          description="A curated collection of modern, responsive templates to kickstart your next project. Click to preview live demos."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        >
          {templatesData.map((template, idx) => (
            <motion.a
              key={idx}
              href={template.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-2 transition-all hover:bg-white/10 hover:border-indigo-500/30"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                <img
                  src={template.image}
                  alt={template.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback for missing images until user uploads them
                    e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&h=480&q=80";
                  }}
                />
                
                {/* Tag */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-md border border-indigo-500/30">
                    {template.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center justify-between p-4 pt-5">
                <h3 className="font-heading text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {template.title}
                </h3>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                  <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
