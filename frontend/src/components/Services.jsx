import { motion } from "framer-motion";
import { services } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Services() {
  return (
    <section id="offerings" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="SOF Offerings"
          title="Our SOF Services"
          copy="From registration to funding readiness, SOF packages the work founders usually chase across multiple advisors into one premium operating system."
        />
        <motion.div className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          {services.map((service) => {
            const Icon = service.icon;
            const isWide = service.size.includes("lg:col-span-2") || service.size.includes("lg:col-span-4");

            return (
              <motion.article
                key={service.title}
                className={`glass group relative overflow-hidden rounded-3xl p-6 ${service.size} flex flex-col justify-between`}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.012 }}
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <motion.div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                />

                {isWide ? (
                  // Wide Card (Desktop: split side-by-side, Mobile: vertical stack)
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] h-full items-center w-full">
                    <div className="flex flex-col justify-center h-full py-2">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent self-start">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="mt-6">
                        <h3 className="font-heading text-2xl font-bold">{service.title}</h3>
                        <p className="mt-3 leading-relaxed text-sm text-white/64">{service.text}</p>
                      </div>
                    </div>
                    <div className={`relative h-44 lg:h-full min-h-[160px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-accent/20 transition-all duration-300 ${service.imageBg || ""}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`absolute inset-0 w-full h-full ${service.imageFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-700`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  // Standard 1x1 Card
                  <div className="flex flex-col justify-between h-full w-full">
                    <div>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="mt-6">
                        <h3 className="font-heading text-2xl font-bold">{service.title}</h3>
                        <p className="mt-3 leading-relaxed text-sm text-white/64">{service.text}</p>
                      </div>
                    </div>
                    <div className={`relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mt-6 group-hover:border-accent/20 transition-all duration-300 ${service.imageBg || ""}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full ${service.imageFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-700`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
