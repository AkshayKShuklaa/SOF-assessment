import { motion } from "framer-motion";
import { services } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Services() {
  return (
    <section id="offerings" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Offerings"
          title="A founder support stack that feels strategic, not scattered."
          copy="From registration to funding readiness, SOF packages the work founders usually chase across multiple advisors into one premium operating system."
        />
        <motion.div className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} className={`glass group relative overflow-hidden rounded-3xl p-6 ${service.size}`} variants={fadeUp} whileHover={{ y: -10, scale: 1.018 }}>
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <motion.div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="mt-8">
                    <h3 className="font-heading text-2xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-white/64">{service.text}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
