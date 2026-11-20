import { motion } from "framer-motion";
import { ExternalLink, Layers, Building2 } from "lucide-react";
import { projects } from "../data";
import { GithubIcon } from "./Icons";
import { Section, SectionTitle, Tag } from "./ui";

const icons = { layers: Layers, building: Building2 };

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const Icon = icons[p.icon] || Layers;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition-shadow duration-300 hover:shadow-[0_25px_50px_-20px_rgb(90_50_20/0.3)]"
            >
              <div className="relative h-36 overflow-hidden border-b border-line bg-gradient-to-br from-accent/15 via-paper-2 to-amber-200/20">
                <div className="grid-bg absolute inset-0 opacity-60" />
                <span className="absolute bottom-5 left-6 grid h-12 w-12 place-items-center rounded-xl border border-line bg-card text-accent shadow-sm">
                  <Icon size={22} />
                </span>
                <Icon
                  strokeWidth={1.2}
                  className="absolute -right-4 -bottom-6 h-36 w-36 text-accent/15 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110"
                />
                <span className="absolute top-4 right-4 rounded-full border border-accent/30 bg-card/80 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                  MERN
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-muted">{p.label}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-ink">
                  {p.title} <span className="font-normal text-muted">— {p.subtitle}</span>
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                {(p.github || p.live) && (
                  <div className="mt-5 flex gap-5 border-t border-line pt-4 text-sm font-medium">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-ink hover:text-accent">
                        <GithubIcon className="h-4 w-4" /> Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-ink hover:text-accent">
                        <ExternalLink size={15} /> Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
