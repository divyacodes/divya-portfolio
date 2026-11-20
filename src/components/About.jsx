import { motion } from "framer-motion";
import { about } from "../data";
import { Reveal, Section, SectionTitle } from "./ui";

const accentWords = ["multi-tenant SaaS platform", "production", "JWT", "RabbitMQ queue", "real-time messaging"];

function highlight(text) {
  const re = new RegExp(`(${[...accentWords, "Appilite", "PropertyAutomate"].join("|")})`, "g");
  return text.split(re).map((part, i) =>
    accentWords.includes(part) ? (
      <span key={i} className="text-accent">{part}</span>
    ) : part === "Appilite" || part === "PropertyAutomate" ? (
      <span key={i} className="text-ink">{part}</span>
    ) : (
      part
    )
  );
}

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-[17px] leading-[1.8]">{highlight(p)}</p>
            </Reveal>
          ))}
        </div>
        <ul className="space-y-5">
          {about.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-3 text-[15px] leading-relaxed"
            >
              <span className="mt-0.5 text-accent">▹</span>
              {h}
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
