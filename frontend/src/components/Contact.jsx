import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, CheckCircle2, Rocket } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "./motion.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="reach-us" className="section-pad relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-page relative z-10">
        <SectionHeader
          eyebrow="Reach Us"
          title="Bring SOF into your next founder milestone."
          copy="Share what you are building, what stage you are in, and where you need momentum. The SOF team will help map the next practical step."
        />
        
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Form Side */}
          <motion.form 
            className="relative gradient-border glass rounded-[2.5rem] p-8 sm:p-10 overflow-hidden" 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewport} 
            variants={staggerContainer} 
            onSubmit={handleSubmit}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <motion.div className="relative z-10 grid gap-6 sm:gap-8 sm:grid-cols-2" variants={fadeUp}>
              <div className="relative group">
                <input required id="name" className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors" placeholder=" " />
                <label htmlFor="name" className="absolute left-0 top-4 text-white/50 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-cyan-400 font-medium cursor-text">Your Name</label>
              </div>
              
              <div className="relative group">
                <input required type="email" id="email" className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors" placeholder=" " />
                <label htmlFor="email" className="absolute left-0 top-4 text-white/50 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-cyan-400 font-medium cursor-text">Email Address</label>
              </div>
            </motion.div>

            <motion.div className="relative group mt-8 z-10" variants={fadeUp}>
              <textarea required id="message" className="peer w-full min-h-[160px] resize-none bg-transparent border-b-2 border-white/10 px-0 py-4 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors" placeholder=" " />
              <label htmlFor="message" className="absolute left-0 top-4 text-white/50 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-cyan-400 font-medium cursor-text">Tell us about your startup or idea...</label>
            </motion.div>

            <motion.div className="mt-10" variants={fadeUp}>
              <button 
                disabled={formState !== "idle"}
                className={`relative w-full sm:w-auto overflow-hidden rounded-full px-8 py-4 font-bold text-white transition-all duration-300 ${formState === 'sent' ? 'bg-green-500' : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105'}`}
              >
                <AnimatePresence mode="wait">
                  {formState === "idle" && (
                    <motion.div key="idle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center justify-center gap-2">
                      Initialize Journey <Rocket className="h-5 w-5" />
                    </motion.div>
                  )}
                  {formState === "sending" && (
                    <motion.div key="sending" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center justify-center gap-2">
                      Transmitting <Send className="h-5 w-5 animate-pulse" />
                    </motion.div>
                  )}
                  {formState === "sent" && (
                    <motion.div key="sent" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center justify-center gap-2">
                      Message Received <CheckCircle2 className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </motion.form>

          {/* Contact Info Side - Bento Grid */}
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}>
            
            {/* Map/Address Bento */}
            <motion.div className="group relative overflow-hidden rounded-3xl p-6 border border-white/5 bg-white/[0.02] sm:col-span-2 lg:col-span-1 min-h-[160px] flex flex-col justify-end transition-all hover:border-cyan-500/30 hover:bg-white/[0.04]" variants={fadeUp}>
              <img src="/india_map.png" alt="India Map" className="absolute -right-6 -top-6 w-48 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110" />
              <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <MapPin className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="mt-12 font-heading text-xl font-bold text-white relative z-10">HQ & Innovation Network</h3>
              <p className="mt-1 text-sm text-white/60 relative z-10">Delhi NCR, India</p>
            </motion.div>

            {/* Email Bento */}
            <motion.a href="mailto:contact@sof.com" className="group relative overflow-hidden rounded-3xl p-6 border border-white/5 bg-white/[0.02] transition-all hover:border-indigo-500/30 hover:bg-white/[0.04]" variants={fadeUp}>
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">Email Us</h3>
              <p className="mt-1 text-xs text-white/50 line-clamp-2">Connect through SOF enquiry desk</p>
            </motion.a>

            {/* Phone Bento */}
            <motion.a href="tel:+919599208798" className="group relative overflow-hidden rounded-3xl p-6 border border-white/5 bg-white/[0.02] transition-all hover:border-accent/30 hover:bg-white/[0.04]" variants={fadeUp}>
              <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
                 <Phone className="h-24 w-24 text-accent" />
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform group-hover:animate-pulse">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">Call Desk</h3>
              <p className="mt-1 text-xs text-white/50">+91 9599208798</p>
            </motion.a>

            {/* Social Bento */}
            <motion.div className="sm:col-span-2 lg:col-span-1 rounded-3xl p-6 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-between" variants={fadeUp}>
              <h3 className="font-heading text-lg font-bold text-white">Social</h3>
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, color: "hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/10" },
                  { icon: Twitter, color: "hover:text-sky-400 hover:border-sky-400 hover:bg-sky-400/10" },
                  { icon: Instagram, color: "hover:text-pink-400 hover:border-pink-400 hover:bg-pink-400/10" },
                  { icon: Facebook, color: "hover:text-blue-600 hover:border-blue-600 hover:bg-blue-600/10" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a 
                      key={index} 
                      href="#index" 
                      className={`grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 ${social.color}`} 
                      aria-label="SOF social channel"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
