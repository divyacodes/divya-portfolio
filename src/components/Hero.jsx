import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Download, ChevronDown, Briefcase, GraduationCap } from "lucide-react";
import { profile, stats, education } from "../data";
import { GithubIcon } from "./Icons";
import { ease } from "./ui";

function tenure(start) {
  const s = new Date(start);
  const n = new Date();
  let m = (n.getFullYear() - s.getFullYear()) * 12 + n.getMonth() - s.getMonth() + 1;
  const y = Math.floor(m / 12);
  m = m % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseFloat(value);
  const suffix = value.replace(/[\d.]/g, "");
  const decimals = value.includes(".") ? 1 : 0;
  const [display, setDisplay] = useState((0).toFixed(decimals));
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, num, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setDisplay(v.toFixed(decimals)) });
    return () => c.stop();
  }, [inView, num, decimals]);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

const tech = ["ReactJS", "NodeJS", "Python", "PostgreSQL"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-10 -right-40 h-[26rem] w-[26rem] rounded-full bg-amber-300/15 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_300px]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/60 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.2em] text-body uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.role} · Chennai
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-5xl font-bold tracking-tight text-ink sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-xl font-semibold text-body sm:text-2xl">
            {profile.role} <span className="text-accent">{profile.tagline}</span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-[1.8] sm:text-lg">
            1.8+ years of experience building multi-tenant SaaS applications using{" "}
            {tech.map((t, i) => (
              <span key={t}>
                <span className="font-medium text-ink">{t}</span>
                {i < tech.length - 2 ? ", " : i === tech.length - 2 ? " and " : ""}
              </span>
            ))}
            . Experienced in REST API development and responsive UI development — hands-on with performance
            tuning, CI/CD and production deployments.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Resume <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-accent/40 px-5 py-3 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              Get in touch <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-card/60 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink/30"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-card/60 backdrop-blur-sm sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-5 ${i > 0 ? "sm:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""} ${
                  i > 1 ? "border-t sm:border-t-0" : ""
                } border-line`}
              >
                <p className="text-3xl font-semibold text-accent">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* profile card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="mx-auto w-full max-w-[300px]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl border border-line bg-card p-2 shadow-[0_30px_60px_-25px_rgb(90_50_20/0.35)]"
          >
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                src={profile.photo}
                alt={profile.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="aspect-square w-full object-cover object-[50%_25%]"
              />
            </div>
            <div className="divide-y divide-line px-3">
              {[
                {
                  Icon: Briefcase,
                  eyebrow: "Currently",
                  title: profile.role,
                  sub: "Appilite Inc. · PropertyAutomate",
                  meta: `${tenure(profile.startDate)} · Chennai`,
                },
                {
                  Icon: GraduationCap,
                  eyebrow: "Education",
                  title: education.degree,
                  sub: education.school,
                },
              ].map(({ Icon, eyebrow, title, sub, meta }) => (
                <div key={eyebrow} className="flex gap-3 py-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-accent-soft text-accent">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">{eyebrow}</p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">{title}</p>
                    <p className="text-sm font-medium text-accent">{sub}</p>
                    {meta && <p className="mt-0.5 text-xs text-muted">{meta}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="relative mx-auto mt-16 hidden w-fit text-body lg:block"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
