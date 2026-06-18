import { motion } from "framer-motion";
import { fadeUp, viewport } from "./motion.js";

export default function SectionHeader({ eyebrow, title, copy, align = "left" }) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  );
}
