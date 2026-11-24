import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "../data";
import { Reveal, Section, SectionTitle, Tag, highlight } from "./ui";

function Timeline({ job }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <div ref={ref} className="relative mt-10">
      <div className="absolute top-2 bottom-2 left-[9px] w-px bg-line" />
      <motion.div style={{ scaleY }} className="absolute top-2 bottom-2 left-[9px] w-px origin-top bg-accent" />
      <div className="space-y-10">
        {job.groups.map((g, gi) => (
          <div key={g.title} className="relative pl-12">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="absolute top-1 left-0 grid h-5 w-5 place-items-center rounded-full border border-accent bg-paper"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </motion.span>
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-ink">{g.title}</h4>
                <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-accent">
                  {g.badge}
                </span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {g.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    <span>{highlight(p)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" alt>
      <SectionTitle>Experience</SectionTitle>
      {experience.map((job) => (
        <div key={job.company}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-ink">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="mt-1.5 text-sm text-muted">Client: {job.client}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm text-ink">{job.period}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted">
                  <MapPin size={13} /> {job.location}
                </p>
              </div>
            </div>
          </Reveal>
          <Timeline job={job} />
          <Reveal className="mt-12 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Reveal>
        </div>
      ))}
    </Section>
  );
}
