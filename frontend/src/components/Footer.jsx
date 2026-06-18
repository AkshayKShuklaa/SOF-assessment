import { Facebook, Instagram, Linkedin, Rocket, Twitter } from "lucide-react";
import { footerLinks } from "./data.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-10">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-white/[0.06]">
            <Rocket className="h-5 w-5 text-accent" />
          </span>
          <span>
            <span className="block font-heading text-xl font-bold">SOF</span>
            <span className="text-sm text-white/52">Startup of the Future</span>
          </span>
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-white/58 transition hover:text-white">
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {[Linkedin, Twitter, Instagram, Facebook].map((Icon, index) => (
            <a key={index} href="#home" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:text-accent" aria-label="SOF social link">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="container-page mt-8 text-sm text-white/44">Copyright All Right Reserved @2026-27 Future Inn-Tech Corp. An ISO 9001:2015 Certified</div>
    </footer>
  );
}
