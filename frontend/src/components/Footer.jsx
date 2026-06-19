import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { footerLinks } from "./data.js";
import logo from "./logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-10">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <a href="#index" className="flex items-center">
          <img src={logo} alt="Startup of the Future Logo" className="h-11 w-auto" />
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-semibold text-white/58 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {[Linkedin, Twitter, Instagram, Facebook].map((Icon, index) => (
            <a key={index} href="#index" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:text-accent" aria-label="SOF social link">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="container-page mt-8 text-sm text-white/44">Copyright All Right Reserved @2026-27 Future Inn-Tech Corp. An ISO 9001:2015 Certified</div>
    </footer>
  );
}
