// ✏️ Edit this file to update the portfolio content.

export const profile = {
  name: "Divya P",
  role: "Associate Software Developer",
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
  { value: "2", label: "Full-stack side projects (PERN & MERN)" },
];

export const about = {
  // Wrap text in **double asterisks** to highlight it in the accent colour.
  paragraphs: [
    "I am an **Associate Software Developer** with **1.8+ years of experience** building and maintaining scalable **multi-tenant SaaS applications**. At Appilite, working with PropertyAutomate, I develop end-to-end application features using **ReactJS, NodeJS, Fastify and PostgreSQL**, focusing on secure, efficient and maintainable solutions.",
    "My experience includes developing **RESTful APIs**, building responsive user interfaces with **ReactJS and Material UI**, implementing secure authentication using **JWT and Role-Based Access Control (RBAC)**, and managing relational databases. I have also worked on **Python FastAPI services**, automated report generation and real-time messaging functionality.",
    "I have hands-on experience with **RabbitMQ, WebSockets, Git Flow, Jenkins CI/CD and Docker**, contributing to application releases and production deployments on **Oracle Cloud**. I enjoy solving technical challenges, improving application performance and collaborating with cross-functional teams to deliver reliable software solutions.",
  ],
  highlightsTitle: "Professional Highlights",
  highlights: [
    "Based in Chennai, India — working as an Associate Software Developer since February 2025.",
    "Full-stack development experience across **ReactJS, NodeJS, ExpressJS, Fastify and PostgreSQL**.",
    "Developed secure authentication services using **JWT, bcrypt and Role-Based Access Control (RBAC)**.",
    "Built **Python FastAPI services** for Excel/PDF report generation and RabbitMQ-based background processing.",
    "Developed **real-time messaging** with instant message delivery, conversation management and chat history.",
    "Hands-on experience with **Git, GitHub, Docker, Jenkins CI/CD and Oracle Cloud deployments**.",
    "Experienced in Agile development, team collaboration and delivering production-ready features.",
  ],
};

export const experience = [
  {
    role: "Associate Software Developer",
    company: "Appilite Inc. Pvt Ltd",
    client: "PropertyAutomate Pvt Ltd",
    period: "Feb 2025 — Present",
    location: "Chennai, India",
    // Wrap text in **double asterisks** to highlight it in the accent colour.
    groups: [
      {
        title: "Full Stack SaaS Development",
        badge: "React · Node · PostgreSQL",
        points: [
          "Developed and maintained scalable **multi-tenant SaaS applications** using ReactJS, NodeJS and PostgreSQL, delivering end-to-end features across multiple application modules with a focus on performance and maintainability.",
        ],
      },
      {
        title: "Frontend Development & UI Engineering",
        badge: "React · Material UI",
        points: [
          "Converted **Figma designs** into responsive user interfaces using ReactJS and Material UI. Built reusable components and integrated backend APIs to deliver consistent and user-friendly application experiences.",
        ],
      },
      {
        title: "Backend Development & API Integration",
        badge: "Node · Fastify",
        points: [
          "Designed and developed **RESTful APIs** using NodeJS and Fastify, implementing backend business logic, data validation and database operations to support application workflows.",
        ],
      },
      {
        title: "Authentication & Access Control",
        badge: "JWT · bcrypt · RBAC",
        points: [
          "Enhanced centralized authentication services using **JWT and bcrypt**, implementing secure login and **Role-Based Access Control (RBAC)** across multiple client applications.",
        ],
      },
      {
        title: "Python & Report Automation",
        badge: "Python · FastAPI",
        points: [
          "Developed **Python FastAPI services** for automated Excel and PDF revenue reports, incorporating company-level filtering and multi-currency support.",
        ],
      },
      {
        title: "Background Job Processing",
        badge: "RabbitMQ",
        points: [
          "Integrated **RabbitMQ** for asynchronous report generation and background job processing, enabling efficient execution of resource-intensive tasks.",
        ],
      },
      {
        title: "Real-Time Messaging",
        badge: "WebSockets",
        points: [
          "Developed real-time messaging functionality using **WebSockets**, supporting instant message delivery, conversation management and chat history.",
        ],
      },
      {
        title: "Database Management",
        badge: "PostgreSQL · MySQL",
        points: [
          "Worked with **PostgreSQL and MySQL** for database operations, query handling, data retrieval and application-level data management.",
        ],
      },
      {
        title: "CI/CD & Cloud Deployment",
        badge: "Jenkins · Docker",
        points: [
          "Managed development workflows using **Git and Git Flow**, and supported automated builds and deployments using **Jenkins CI/CD and Docker** on Oracle Cloud.",
        ],
      },
      {
        title: "Agile Collaboration",
        badge: "Agile",
        points: [
          "Collaborated with **QA, product and development teams** in an Agile environment, contributing to feature development, debugging, testing and timely production releases.",
        ],
      },
    ],
    tags: ["React", "Material UI", "Node.js", "Fastify", "PostgreSQL", "MySQL", "FastAPI", "RabbitMQ", "WebSockets", "JWT", "Git", "Docker", "Jenkins", "Oracle Cloud"],
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
    badge: "PERN",
    stack: ["React", "Material UI", "Node.js", "Express", "PostgreSQL", "JWT", "Zod", "Swagger", "Vitest", "Docker"],
    github: "", // add repo URL
    live: "", // add live demo URL
  },
  {
    title: "Stayzy",
    subtitle: "Verified rental & PG finder",
    label: "Personal project",
    icon: "building",
    description:
      "A rental platform that helps users find verified PGs, houses and apartments by location and budget, while allowing owners to list their vacancies and get them approved.",
    badge: "MERN · TS",
    stack: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Node.js", "Express", "MongoDB", "Redis", "Leaflet / Mapbox", "Cloudinary", "Docker"],
    github: "",
    live: "",
  },
];

// First entry is also shown on the profile card in the hero.
export const education = [
  {
    level: "Undergraduate",
    degree: "B.Tech, Information Technology",
    school: "KCG College of Technology",
    location: "Chennai, India",
    note: "Built multiple academic projects; participated in Code Relays and technical workshops.",
  },
  {
    level: "Higher Secondary",
    degree: "Computer Science with Mathematics",
    school: "Hilton Matriculation and Higher Secondary School",
    location: "Old Courtallam, Tenkasi",
  },
];

export const certifications = [
  {
    title: "Full Stack Java Programming",
    issuer: "Credo Systemz",
    date: "Aug 2024",
    // Drop the certificate image into /public/certificates with this name
    image: "/certificates/credo-java.jpg",
    credential: "", // add certificate URL to show a "Show credential" link
  },
  {
    title: "Full Stack with Python Programming",
    issuer: "HCL GUVI",
    date: "Oct 2023",
    image: "/certificates/guvi-python.jpg",
    credential: "https://www.guvi.in/certificate?id=89792v626HUfJ1m329",
  },
];
