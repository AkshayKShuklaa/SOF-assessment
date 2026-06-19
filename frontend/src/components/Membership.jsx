import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { plans } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Membership() {
  return (
    <section id="memberships" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Memberships"
          title="Choose the level of support your next milestone requires."
          copy="Each plan is designed to give founders practical momentum, credible guidance, and access to the SOF community."
          align="center"
        />
        <motion.div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              className={`relative flex min-h-[460px] flex-col rounded-3xl border p-6 ${
                plan.popular ? "border-accent/45 bg-accent/[0.08] shadow-cyan" : "border-white/10 bg-white/[0.05]"
              } backdrop-blur-xl`}
              variants={fadeUp}
              whileHover={{ y: -14, scale: 1.025, rotate: plan.popular ? 0 : -0.7 }}
              whileTap={{ scale: 0.985 }}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-midnight">
                  <Star className="h-3.5 w-3.5" /> Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-white/58">{plan.note}</p>
              <p className="mt-7 font-heading text-4xl font-bold">{plan.price}</p>
              <div className="mt-8 grid gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm leading-6 text-white/72">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#reach-us" className={plan.popular ? "btn-primary mt-auto" : "btn-secondary mt-auto"}>
                Choose Plan
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
