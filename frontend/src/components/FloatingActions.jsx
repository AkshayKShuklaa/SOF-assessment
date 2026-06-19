import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Phone, Rocket } from "lucide-react";

const actions = [
  { href: "#memberships", label: "Join", icon: Rocket },
  { href: "#events", label: "Events", icon: CalendarDays },
  { href: "#reach-us", label: "Reach Us", icon: MessageCircle },
  { href: "tel:+919599208798", label: "Call", icon: Phone },
];

export default function FloatingActions() {
  return (
    <motion.div
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 p-2 shadow-[0_22px_70px_rgba(15,23,42,0.16)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 180, damping: 18 }}
    >
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <motion.a
            key={action.label}
            href={action.href}
            className="group relative grid h-11 w-11 place-items-center rounded-full text-slate-700 transition hover:bg-primary hover:text-white sm:w-auto sm:grid-flow-col sm:gap-2 sm:px-4"
            whileHover={{ y: -4, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.08 }}
            aria-label={action.label}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden text-xs font-bold sm:inline">{action.label}</span>
            <span className="pointer-events-none absolute -top-9 rounded-full bg-primary px-2 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:hidden">
              {action.label}
            </span>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
