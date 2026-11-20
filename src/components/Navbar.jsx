import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowUp } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["home", ...links.map((l) => l.toLowerCase())].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const setTheme = (next) => {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent" />

      <header className="fixed inset-x-0 top-4 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden items-center rounded-full border border-line bg-card/80 p-1.5 shadow-[0_8px_30px_-12px_rgb(90_60_30/0.25)] backdrop-blur-md md:flex"
          >
            {links.map((l) => {
              const id = l.toLowerCase();
              const isActive = active === id;
              return (
                <a
                  key={l}
                  href={`#${id}`}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-ink" : "text-body hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-accent/20 bg-accent-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l}</span>
                </a>
              );
            })}
          </motion.nav>

          <a href="#home" className="font-serif text-xl font-semibold text-ink md:hidden">
            Divya<span className="text-accent">.</span>
          </a>

          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-0.5 rounded-full border border-line bg-card/80 p-1 backdrop-blur-md">
              {[
                { val: true, Icon: Moon, label: "Dark theme" },
                { val: false, Icon: Sun, label: "Light theme" },
              ].map(({ val, Icon, label }) => (
                <button
                  key={label}
                  onClick={() => setTheme(val)}
                  aria-label={label}
                  className="relative grid h-7 w-7 place-items-center rounded-full"
                >
                  {dark === val && (
                    <motion.span
                      layoutId="theme-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={14} className={`relative ${dark === val ? "text-paper" : "text-body"}`} />
                </button>
              ))}
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card/80 text-ink backdrop-blur-md md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="mx-4 mt-3 rounded-2xl border border-line bg-card p-2 shadow-xl md:hidden"
            >
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                    active === l.toLowerCase() ? "bg-accent-soft text-ink" : "text-body"
                  }`}
                >
                  {l}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {scrolled && (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ y: -3 }}
            className="fixed right-5 bottom-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-accent shadow-lg"
          >
            <ArrowUp size={18} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
