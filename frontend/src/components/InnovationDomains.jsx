import { motion } from "framer-motion";
import { domains } from "./data.js";
import { viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function InnovationDomains() {
  const loop = [...domains, ...domains];

  return (
    <section id="innovation" className="section-pad relative overflow-hidden">
      <div className="container-page">
        <SectionHeader
          eyebrow="Innovation Domains"
          title="Frontier categories where founders need clarity, trust, and speed."
          copy="SOF helps teams understand their market, shape strong technology narratives, and build credible execution paths across high-potential domains."
          align="center"
        />
      </div>
      <motion.div
        className="mt-12 overflow-hidden flex"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
      >
        <div className="flex min-w-max animate-marquee-right gap-5 pr-5">
          {loop.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={`${domain.title}-${index}`}
                className="gradient-border glass group relative overflow-hidden rounded-3xl p-0 flex flex-col w-[22rem] shrink-0 hover:scale-[1.03] hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-cyan transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition group-hover:opacity-100 z-10" />
                
                {/* Header Image */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Icon Badges */}
                  <span className="absolute bottom-0 left-6 translate-y-1/2 z-20 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-md text-accent shadow-cyan">
                    <Icon className="h-7 w-7" />
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-8 flex-1 flex flex-col justify-start">
                  <h3 className="font-heading text-xl font-bold">{domain.title}</h3>
                  <p className="mt-3 min-h-[5rem] leading-relaxed text-sm text-white/64">{domain.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
