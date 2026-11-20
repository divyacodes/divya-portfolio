import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { education, certifications } from "../data";
import { Section, SectionTitle } from "./ui";

const card =
  "h-full rounded-2xl border border-line bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgb(90_50_20/0.3)]";

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

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle>Education &amp; Certifications</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        <Card delay={0}>
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-accent-soft text-accent">
            <GraduationCap size={19} />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-ink">{education.degree}</h3>
          <p className="mt-1 text-accent">{education.school}</p>
          <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted">
            <MapPin size={13} /> {education.location}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">{education.note}</p>
        </Card>
        {certifications.map((c, i) => (
          <Card key={c.title} delay={0.1 * (i + 1)}>
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-accent-soft text-accent">
              <Award size={19} />
            </span>
            <p className="mt-5 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">Certification</p>
            <h3 className="mt-1 text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-1 text-accent">{c.issuer}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
