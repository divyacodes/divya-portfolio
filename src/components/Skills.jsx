import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiMui, SiTailwindcss, SiHtml5, SiCss, SiNodedotjs,
  SiExpress, SiFastify, SiGraphql, SiJsonwebtokens, SiPostgresql, SiMysql, SiKnexdotjs, SiGit, SiGithub,
  SiDocker, SiKubernetes, SiJenkins, SiClaude, SiFastapi, SiRabbitmq,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  TbApi, TbPlugConnected, TbHierarchy, TbLock, TbBrandWindows, TbShieldLock, TbClock, TbStack2, TbInfinity,
  TbSparkles, TbCursorText,
} from "react-icons/tb";
import { Section, SectionTitle } from "./ui";

// [label, Icon, brand color | null (uses text color)]
const groups = [
  ["Languages", [["JavaScript", SiJavascript, "#e8c518"], ["TypeScript", SiTypescript, "#3178c6"], ["Python", SiPython, "#3776ab"], ["Java", FaJava, "#e76f00"]]],
  ["Frontend", [["ReactJS", SiReact, "#18a6c9"], ["Material UI", SiMui, "#007fff"], ["Tailwind CSS", SiTailwindcss, "#06b6d4"], ["HTML", SiHtml5, "#e34f26"], ["CSS", SiCss, "#663399"]]],
  ["Backend", [["NodeJS", SiNodedotjs, "#5fa04e"], ["ExpressJS", SiExpress, null], ["Fastify", SiFastify, null], ["FastAPI", SiFastapi, "#009688"], ["REST APIs", TbApi, "#e2795a"], ["GraphQL", SiGraphql, "#e10098"], ["WebSocket", TbPlugConnected, "#8b5cf6"], ["Microservices", TbHierarchy, "#0ea5e9"]]],
  ["Auth", [["JWT", SiJsonwebtokens, "#d63aff"], ["bcrypt", TbLock, "#b45309"], ["Microsoft SSO", TbBrandWindows, "#0078d4"], ["RBAC", TbShieldLock, "#16a34a"]]],
  ["Databases", [["PostgreSQL", SiPostgresql, "#4169e1"], ["MySQL", SiMysql, "#4479a1"], ["KnexJS", SiKnexdotjs, "#d26b38"]]],
  ["Queues & Jobs", [["RabbitMQ", SiRabbitmq, "#ff6600"], ["Cron Jobs", TbClock, "#64748b"], ["Queues", TbStack2, "#a16207"]]],
  ["Cloud / DevOps", [["Git", SiGit, "#f05032"], ["GitHub", SiGithub, null], ["Docker", SiDocker, "#2496ed"], ["Kubernetes", SiKubernetes, "#326ce5"], ["Jenkins", SiJenkins, "#d24939"], ["CI/CD", TbInfinity, "#16a34a"]]],
  ["AI-Assisted", [["Claude", SiClaude, "#d97757"], ["Cursor", TbCursorText, null], ["Antigravity", TbSparkles, "#8b5cf6"]]],
];

export default function Skills() {
  return (
    <Section id="skills" alt>
      <SectionTitle>Skills</SectionTitle>
      <div className="overflow-hidden rounded-2xl border border-line bg-card/50">
        {groups.map(([title, items], gi) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.04 * gi }}
            className={`grid gap-4 p-5 sm:grid-cols-[180px_1fr] sm:items-center sm:px-6 ${gi ? "border-t border-line" : ""}`}
          >
            <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase">{title}</p>
            <div className="flex flex-wrap gap-2.5">
              {items.map(([name, Icon, color], i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * gi + 0.04 * i, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ y: -3 }}
                  className="inline-flex cursor-default items-center gap-2 rounded-xl border border-line bg-card px-3.5 py-2 text-sm font-medium text-ink shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-colors hover:border-accent/40"
                >
                  <Icon size={17} style={color ? { color } : undefined} />
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
