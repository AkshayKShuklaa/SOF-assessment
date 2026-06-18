import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "./data.js";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="FAQ"
          title="Things founders should know before starting with SOF."
          copy="A distilled version of the official SOF startup support FAQ, designed as an interactive decision panel."
          align="center"
        />
        <motion.div className="mx-auto mt-12 grid max-w-4xl gap-4" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
          {faqItems.map((item, index) => (
            <motion.div key={item.question} className="glass overflow-hidden rounded-3xl" variants={fadeUp} whileHover={{ x: 4 }}>
              <button className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6" onClick={() => setOpen(open === index ? -1 : index)}>
                <span className="font-heading text-lg font-bold sm:text-xl">{item.question}</span>
                <motion.span animate={{ rotate: open === index ? 180 : 0 }} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.06] text-accent">
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <p className="border-t border-white/10 px-5 py-5 leading-8 text-white/68 sm:px-6">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
