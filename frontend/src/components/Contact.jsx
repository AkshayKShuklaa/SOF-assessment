import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Contact"
          title="Bring SOF into your next founder milestone."
          copy="Share what you are building, what stage you are in, and where you need momentum. The SOF team will help map the next practical step."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form className="glass rounded-[2rem] p-6 sm:p-8" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer} onSubmit={(event) => event.preventDefault()}>
            <motion.div className="grid gap-5 sm:grid-cols-2" variants={fadeUp}>
              <label className="grid gap-2 text-sm font-semibold text-white/72">
                Name
                <input className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none transition focus:border-accent" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/72">
                Email
                <input type="email" className="rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none transition focus:border-accent" placeholder="you@company.com" />
              </label>
            </motion.div>
            <motion.label className="mt-5 grid gap-2 text-sm font-semibold text-white/72" variants={fadeUp}>
              Message
              <textarea className="min-h-44 resize-none rounded-2xl border border-white/10 bg-midnight/70 px-4 py-4 text-white outline-none transition focus:border-accent" placeholder="Tell us about your startup, idea, or innovation program." />
            </motion.label>
            <motion.button className="btn-primary mt-6 w-full sm:w-auto" variants={fadeUp}>
              Submit Message <Send className="h-4 w-4" />
            </motion.button>
          </motion.form>
          <motion.div className="grid gap-5" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
            {[
              [MapPin, "Address", "SOF Innovation Network, Delhi NCR, India"],
              [Mail, "Email", "Connect through SOF enquiry or membership desk"],
              [Phone, "Phone", "+91 9599208798"],
            ].map(([Icon, title, text]) => (
              <motion.div key={title} className="glass rounded-3xl p-6" variants={fadeUp}>
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-heading text-2xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-white/66">{text}</p>
              </motion.div>
            ))}
            <motion.div className="glass rounded-3xl p-6" variants={fadeUp}>
              <h3 className="font-heading text-2xl font-bold">Social</h3>
              <div className="mt-5 flex gap-3">
                {[Linkedin, Twitter, Instagram, Facebook].map((Icon, index) => (
                  <a key={index} href="#home" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition hover:border-accent/60 hover:text-accent" aria-label="SOF social channel">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
