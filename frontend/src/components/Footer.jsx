import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { footerLinks } from "./data.js";
import logo from "./logo.png";
import { fadeUp, staggerContainer, viewport } from "./motion.js";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-midnight pt-20 pb-8 border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div 
          className="grid gap-12 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {/* Left Side: Brand and CTA */}
          <div className="flex flex-col gap-8">
            <motion.a href="/#index" className="inline-block w-fit" variants={fadeUp}>
              <img src={logo} alt="Startup of the Future Logo" className="h-24 w-auto" />
            </motion.a>
            <motion.div variants={fadeUp}>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
                Ready to build the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Future?</span>
              </h2>
              <p className="mt-4 max-w-md text-lg text-white/60">
                Join the ultimate ecosystem for innovators, founders, and disruptors. Let's make your vision a reality.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex gap-4 items-center">
              <a href="/#reach-us" className="btn-primary group">
                Start Your Journey <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="mailto:hello@startupofthefuture.com" className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Links and Info */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:justify-items-end">
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h4 className="font-bold text-white">Platform</h4>
              {footerLinks.slice(0, 4).map(([label, id]) => (
                <a key={id} href={`/#${id}`} className="text-sm font-medium text-white/50 hover:text-cyan-400 hover:translate-x-1 transition-all">
                  {label}
                </a>
              ))}
              <Link to="/directory" className="text-left text-sm font-medium text-white/50 hover:text-cyan-400 hover:translate-x-1 transition-all">
                Directory & Exhibitors
              </Link>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h4 className="font-bold text-white">Company</h4>
              {footerLinks.slice(4).map(([label, id]) => (
                <a key={id} href={`/#${id}`} className="text-sm font-medium text-white/50 hover:text-cyan-400 hover:translate-x-1 transition-all">
                  {label}
                </a>
              ))}
              <a href="/#privacy" className="text-sm font-medium text-white/50 hover:text-cyan-400 hover:translate-x-1 transition-all">Privacy Policy</a>
              <a href="/#terms" className="text-sm font-medium text-white/50 hover:text-cyan-400 hover:translate-x-1 transition-all">Terms of Service</a>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <h4 className="font-bold text-white">Connect</h4>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Instagram, Facebook].map((Icon, index) => (
                  <a key={index} href="/#index" className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white/60 overflow-hidden transition-all hover:text-white hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]" aria-label="SOF social link">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    <Icon className="relative z-10 h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-3 text-sm text-white/50">
                <MapPin className="h-5 w-5 shrink-0 text-cyan-400" />
                <p>New Delhi, India<br/>SOF Innovation Hub</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Copyright */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-medium text-white/50">
          <p>Copyright © 2026-27 Future Inn-Tech Corp. All Rights Reserved.</p>
          <p className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            An ISO 9001:2015 Certified Company
          </p>
        </div>
      </div>
    </footer>
  );
}
