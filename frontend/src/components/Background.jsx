import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-midnight">
      <motion.div
        className="absolute h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-3xl"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="absolute left-[-10%] top-24 h-32 w-[120%] -rotate-6 bg-gradient-to-r from-transparent via-primary/15 to-transparent blur-2xl"
        animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-[-10%] h-24 w-[120%] rotate-6 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-2xl"
        animate={{ x: ["10%", "-10%", "10%"], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 80, 20, 0], y: [0, 40, 120, 0], scale: [1, 1.2, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] top-1/3 h-96 w-96 rounded-full bg-accent/16 blur-3xl"
        animate={{ x: [0, -80, -20, 0], y: [0, -40, 90, 0], scale: [1, 0.9, 1.18, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-radial-grid" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,22,.1),#050816_92%)]" />
    </div>
  );
}
