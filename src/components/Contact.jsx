import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Phone } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Reveal, Section, SectionTitle, ease } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {}
  };
  const iconBtn =
    "grid h-11 w-11 place-items-center rounded-xl border border-line bg-card text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent";

  return (
    <Section id="contact" alt>
      <SectionTitle>Get in touch</SectionTitle>
      <div className="max-w-2xl">
        <h3 className="font-serif text-4xl leading-tight font-semibold text-ink sm:text-5xl">
          {["Happy to connect.", "Let's build something great."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-7 h-0.5 w-20 origin-left bg-accent"
        />
        <Reveal delay={0.2}>
          <p className="mt-7 text-[17px] leading-[1.8]">
            I am open to new career opportunities and excited to take on new challenges where I can apply my technical
            skills, contribute to team success and continue growing professionally.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5"
            >
              <Mail size={16} /> Email me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconBtn}>
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconBtn}>
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} aria-label="Phone" className={iconBtn}>
              <Phone size={17} />
            </a>
          </div>
          <button
            onClick={copy}
            className="mt-5 inline-flex items-center gap-2 text-sm text-body transition hover:text-accent"
          >
            {profile.email}
            {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
            {copied && <span className="text-xs text-green-600">Copied</span>}
          </button>
        </Reveal>
      </div>
    </Section>
  );
}
