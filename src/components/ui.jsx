import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ children }) {
  return (
    <div className="mb-14 flex items-center gap-5">
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="h-7 w-1 origin-bottom rounded-full bg-accent"
      />
      <motion.h2
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {children}
      </motion.h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="h-px flex-1 origin-left bg-line"
      />
    </div>
  );
}

export function Section({ id, alt = false, children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-28 ${alt ? "bg-paper-2" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-line bg-paper-2 px-2.5 py-1 text-xs text-body">{children}</span>
  );
}
