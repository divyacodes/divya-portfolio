// ✏️ Edit this file to update the portfolio content.

export const profile = {
  name: "Divya P",
  role: "Software Developer",
  tagline: "building multi-tenant SaaS products.",
  location: "Chennai, Tamil Nadu, India",
  email: "divya.p4202@gmail.com",
  phone: "+91 8072511527",
  // TODO: replace with your real profile URLs
  linkedin: "https://www.linkedin.com/in/your-linkedin-id",
  github: "https://github.com/divyacodes",
  resume: "/resume.pdf", // drop your resume PDF into /public as resume.pdf
  photo: "/profile.jpg",
  startDate: "2025-02-01", // used to show "x yrs y mos" on the profile card
};

export const stats = [
  { value: "1.8+", label: "Years building SaaS in production" },
  { value: "35+", label: "Tools & technologies used" },
  { value: "3", label: "Backend stacks: Node, Fastify, FastAPI" },
  { value: "2", label: "Full-stack MERN side projects" },
];

export const about = {
  paragraphs: [
    "I build web applications end to end — from PostgreSQL schemas and REST APIs to the React screens people use every day. At Appilite, working for PropertyAutomate, I ship features for a multi-tenant SaaS platform and see them through to production.",
    "I enjoy turning Figma designs into clean, reusable components, and I'm just as comfortable on the backend — securing apps with JWT, processing report jobs from a RabbitMQ queue, or wiring up real-time messaging.",
    "I also lean on AI-assisted tools like Claude and Cursor to move faster while keeping code readable and well-tested.",
  ],
  highlights: [
    "Based in Chennai, India — working as a Software Developer since Feb 2025.",
    "Full-stack focus: ReactJS on the frontend, NodeJS, Fastify and Python services with PostgreSQL on the backend.",
    "Hands-on with releases: Git Flow, Jenkins CI/CD and Docker deployments on Oracle Cloud.",
    "Comfortable in Agile teams, collaborating closely with QA and product to ship on time.",
  ],
};

export const experience = [
  {
    role: "Software Developer",
    company: "Appilite Inc. Pvt Ltd",
    client: "PropertyAutomate Pvt Ltd",
    period: "Feb 2025 — Present",
    location: "Chennai, India",
    groups: [
      {
        title: "Product features",
        badge: "React · Node",
        points: [
          "Developed and maintained scalable features for a multi-tenant SaaS application using ReactJS, NodeJS, and PostgreSQL.",
          "Converted Figma designs into responsive React screens and reusable UI components, and built RESTful APIs in NodeJS to connect them with the backend.",
        ],
      },
      {
        title: "Authentication & access",
        badge: "Fastify · JWT",
        points: [
          "Enhanced a central Fastify authentication service using JWT to provide secure login and access control across all client apps.",
        ],
      },
      {
        title: "Reporting & queues",
        badge: "FastAPI · RabbitMQ",
        points: [
          "Developed Excel and PDF revenue summary reports in a Python (FastAPI) service processing jobs from a RabbitMQ queue, with company-level filtering and multi-currency support.",
        ],
      },
      {
        title: "Real-time messaging",
        badge: "WebSocket",
        points: [
          "Developed real-time messaging functionality with instant message delivery, conversation management, and chat history.",
        ],
      },
      {
        title: "Delivery & releases",
        badge: "Jenkins · Docker",
        points: [
          "Managed releases and deployments using Git Flow, Jenkins CI/CD, and Docker on Oracle Cloud, working with QA and product teams in an Agile setup to deliver releases on time.",
        ],
      },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Fastify", "FastAPI", "RabbitMQ", "JWT", "Docker", "Jenkins", "Oracle Cloud"],
  },
];

export const projects = [
  {
    title: "TaskNest",
    subtitle: "Multi-Tenant SaaS Application",
    label: "Personal project",
    icon: "layers",
    description:
      "A multi-tenant SaaS application that lets multiple organizations securely manage their own users, data, and workflows within a single shared platform.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    github: "", // add repo URL
    live: "", // add live demo URL
  },
  {
    title: "Verified PG Vacancy Platform",
    subtitle: "Accommodation finder",
    label: "Personal project",
    icon: "building",
    description:
      "A platform that helps users find verified PG accommodations by location and budget, while allowing owners to list vacancies and get them approved.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    github: "",
    live: "",
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "KCG College of Technology",
  location: "Chennai, India",
  note: "Built multiple academic projects; participated in Code Relays and technical workshops.",
};

export const certifications = [
  {
    title: "Full Stack Java Programming",
    issuer: "Credo Systemz",
  },
];
