import { motion } from "framer-motion";
import { GraduationCap, School, Award, MapPin, ExternalLink } from "lucide-react";
import { education, certifications } from "../data";
import { Section, SectionTitle } from "./ui";

const card =
  "flex-1 rounded-2xl border border-line bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgb(90_50_20/0.3)]";

function Card({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={card}
    >
      {children}
    </motion.div>
  );
}

function ColumnTitle({ children }) {
  return <h3 className="mb-5 font-mono text-sm font-semibold tracking-[0.2em] text-ink uppercase sm:text-base">{children}</h3>;
}

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle>Education &amp; Certifications</SectionTitle>
      <div className="grid gap-10 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col">
          <ColumnTitle>Education</ColumnTitle>
          <div className="flex flex-1 flex-col gap-6">
            {education.map((e, i) => (
              <Card key={e.school} delay={0.1 * i}>
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-accent-soft text-accent">
                    {i === 0 ? <GraduationCap size={19} /> : <School size={19} />}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">{e.level}</p>
                    <h4 className="mt-1 text-lg font-semibold text-ink">{e.degree}</h4>
                    <p className="mt-1 text-accent">{e.school}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted">
                      <MapPin size={13} /> {e.location}
                    </p>
                    {e.note && <p className="mt-3 text-[15px] leading-relaxed">{e.note}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <ColumnTitle>Certifications</ColumnTitle>
          <div className="flex flex-1 flex-col gap-6">
            {certifications.map((c, i) => (
              <Card key={c.title} delay={0.1 * (i + 1)}>
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-accent-soft text-accent">
                    <Award size={19} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Certification</p>
                    <h4 className="mt-1 text-lg font-semibold text-ink">{c.title}</h4>
                    <p className="mt-1 text-accent">{c.issuer}</p>
                    <p className="mt-1 text-sm text-muted">Issued {c.date}</p>
                    {(c.credential || c.image) && (
                      <a
                        href={c.credential || c.image}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-accent/40 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent-soft"
                      >
                        Show credential <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
