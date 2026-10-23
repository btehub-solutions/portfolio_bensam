"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Article,
  CaretLeft,
  CaretRight,
  Check,
  Copy,
  DownloadSimple,
  EnvelopeSimple,
  FilePdf,
  GithubLogo,
  Globe,
  Lightning,
  LinkedinLogo,
  MapPin,
  Phone,
  Sparkle,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Home",       href: "#home",       color: "bg-orange-500 text-white",   shape: "rounded-xl" },
  { label: "About",      href: "#about",      color: "bg-emerald-400 text-black",  shape: "rounded-full" },
  { label: "Skills",     href: "#skills",     color: "bg-slate-300 text-black",    shape: "rounded-lg" },
  { label: "Projects",   href: "#projects",   color: "bg-violet-400 text-black",   shape: "rounded-full" },
  { label: "Blog",       href: "#blog",       color: "bg-[#FACC15] text-black",    shape: "rounded-2xl" },
  { label: "Experience", href: "#experience", color: "bg-yellow-300 text-black",   shape: "rounded-xl" },
  { label: "Contact",    href: "#contact",    color: "bg-[#C084FC] text-black",    shape: "rounded-tr-2xl rounded-bl-2xl" },
];

interface ProjectItem {
  title: string;
  category: string;
  tags: string;
  date?: string;
  desc: string;
  img?: string;
  live?: string;
  github?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Trax (trax.ng)",
    category: "Media & Tech Platform",
    tags: "Next.js · Tailwind CSS · TypeScript · SEO · Ecosystem",
    date: "November 2025",
    desc: "Ogun State's tech news and startup media platform tracking the local technology movement, funding rounds, and builder ecosystem.",
    live: "https://www.trax.ng/",
    github: "https://github.com/btehub-solutions/Trax",
  },
  {
    title: "Trax Jobs (jobs.trax.ng)",
    category: "Talent & Careers Platform",
    tags: "Next.js · Tailwind CSS · TypeScript · Talent Network",
    date: "October 2026",
    desc: "Curated African tech talent marketplace and jobs network connecting vetted software engineers, designers, and marketers with top startups.",
    live: "https://jobs.trax.ng/",
    github: "https://github.com/btehub-solutions/Trax",
  },
  {
    title: "Trax Ecosystem (echo.trax.ng)",
    category: "Ecosystem & Media Portal",
    tags: "Next.js · TypeScript · Brand Identity · Ecosystem Hub",
    date: "September 2026",
    desc: "The unified Trax portal connecting Trax Events, TraxMedia publication, and Trax Jobs into a cohesive African technology movement.",
    live: "https://echo.trax.ng/",
    github: "https://github.com/btehub-solutions/Trax",
  },
  {
    title: "BTEHub Solutions",
    category: "AI & Automation Platform",
    tags: "Next.js · TypeScript · FastAPI · AI/ML Pipelines",
    date: "January 2026",
    desc: "A premium AI engineering and automation platform featuring active pipelines, 94.7% optimized model accuracy, and autonomous workflows.",
    live: "https://btehub.vercel.app/",
    github: "https://github.com/btehub-solutions",
  },
  {
    title: "BTEHub Academy",
    category: "EdTech & AI Education",
    tags: "Next.js · TypeScript · Tailwind · Course Platform",
    date: "February 2026",
    desc: "Premier hands-on AI academy offering cohort courses in Python for AI, Generative AI & LLMs, and Workflow Automation.",
    live: "https://btehubacademy.vercel.app/",
    github: "https://github.com/btehub-solutions",
  },
  {
    title: "AlertDrive AI",
    category: "Computer Vision",
    tags: "TensorFlow · OpenCV · MediaPipe · MobileNetV2",
    date: "August 2025",
    desc: "Real-time driver monitoring system for drowsiness and distraction detection using computer vision and deep learning.",
    github: "https://github.com/btehub-solutions/AlertDrive_AI.git",
  },
  {
    title: "CoreAI Monorepo",
    category: "AI Application",
    tags: "FastAPI · Gemini API · Claude · PostgreSQL",
    date: "October 2025",
    desc: "A production-ready AI automation monorepo combining Next.js with FastAPI, integrating Gemini and Claude for scalable workflows.",
    github: "https://github.com/btehub-solutions/CoreAI",
  },
  {
    title: "TaxNaija",
    category: "AI Application",
    tags: "Python · Flask · Scikit-learn · Pandas · React",
    date: "May 2025",
    desc: "AI-powered tax classification and liability prediction platform for Nigerian employees and businesses.",
    github: "https://github.com/btehub-solutions/TaxNaija.git",
  },
  {
    title: "VibeAI Hub",
    category: "Generative AI",
    tags: "Next.js · TypeScript · Tailwind · OpenAI API",
    date: "March 2025",
    desc: "A next-gen AI learning platform designed for future-ready professionals with active AI-fluent prompt and agent pipelines.",
    live: "http://vibeaihub.vercel.app/",
    github: "https://github.com/btehub-solutions/vibeai-frontend",
  },
  {
    title: "AI-Driven Ethical Hacking Agent Suite",
    category: "AI Security & Ethical Hacking",
    tags: "Gemini API · Python · Kali Linux · Nmap · Metasploit · Exploit-DB",
    date: "April 2026",
    desc: "Built an 8-module program of autonomous AI agents that perform real penetration-testing work end to end, reasoning over live tool output and making their own decisions, rather than a human operating tools manually with AI bolted on. Architecture follows the “agentic pentesting” pattern, an LLM orchestration layer (Gemini API) with tool-calling access to real security tooling on Kali Linux. Capabilities include: a reconnaissance agent that autonomously chains OSINT tools (whois, subdomain enumeration, email harvesting) and decides its own investigation path; a scanning agent that runs live Nmap service-detection scans and triages findings by real risk rather than listing everything; a vulnerability analysis agent that cross-references detected services against Exploit-DB to separate “looks outdated” from “has a confirmed public exploit”; an exploitation agent that identifies and runs Metasploit modules against known vulnerabilities, reasoning through success or failure; an AI red-teaming agent that tests other AI systems for prompt injection and jailbreak vulnerabilities; a built-in guardrails layer enforcing scope limits and authorization checks across every agent; and a full autonomous engagement capstone chaining recon through final reporting against a dedicated vulnerable target end to end. Tested against authorized practice infrastructure and my own live domain, trax.ng, where the recon and scan agents identified a real production security gap, HTTPS traffic bypassing the CDN security layer and hitting the origin server directly.",
    live: "https://www.trax.ng/",
    github: "https://github.com/btehub-solutions",
  },
];

// Exactly 4 flagship featured projects displayed on the Home page (2x2 grid matching reference)
const HOME_PROJECTS = PROJECTS.slice(0, 4);

const CERTS = [
  {
    id: "aws",
    title: "AWS Machine Learning Specialty",
    issuer: "Udemy",
    year: "2024",
    category: "Cloud & MLOps",
    color: "bg-orange-500 text-white",
    shape: "rounded-xl",
  },
  {
    id: "aiml",
    title: "AI/ML Bootcamp: Zero to Production",
    issuer: "Udemy",
    year: "2023",
    category: "Machine Learning",
    color: "bg-emerald-400 text-black",
    shape: "rounded-full",
  },
  {
    id: "py",
    title: "100 Days of Code: Python Pro",
    issuer: "Udemy",
    year: "2022",
    category: "Programming",
    color: "bg-violet-400 text-black",
    shape: "rounded-full",
  },
  {
    id: "fs",
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2022",
    category: "Web Development",
    color: "bg-sky-300 text-black",
    shape: "rounded-md",
  },
];

const COMMUNITY_ITEMS = [
  {
    id: "newsletter",
    type: "Newsletter",
    title: "BTEHub Daily Updates",
    desc: "Independent AI & tech newsletter reaching builders across Africa.",
    color: "bg-orange-500 text-white",
    shape: "rounded-xl",
  },
  {
    id: "workshop",
    type: "Workshop Series",
    title: "BTEHub Practical Tutorials",
    desc: "Hands-on sessions covering ML deployment, APIs, and real-world AI workflows.",
    color: "bg-emerald-400 text-black",
    shape: "rounded-full",
  },
  {
    id: "training",
    type: "Corporate Training",
    title: "AI Training: GText Holdings, NBI, OTC",
    desc: "Upskilling enterprise teams on applied machine learning and the 4Ds Framework.",
    color: "bg-slate-300 text-black",
    shape: "rounded-lg",
  },
  {
    id: "keynote",
    type: "Keynote",
    title: "World Radio Day 2026: NUJ Ogun State",
    desc: "Delivered keynote on AI adoption for media professionals; also featured on OGTV and Splash FM 106.7.",
    color: "bg-violet-400 text-black",
    shape: "rounded-full",
  },
  {
    id: "mentorship",
    type: "Mentorship",
    title: "Global Mentorship Programme",
    desc: "Mentoring 100+ students worldwide on AI/ML careers, projects, and open-source contributions.",
    color: "bg-yellow-300 text-black",
    shape: "rounded-xl",
  },
];

const SKILL_CATEGORIES = [
  {
    id: "sec",
    label: "AI Security & Ethical Hacking",
    color: "bg-red-500 text-white",
    shape: "rounded-xl",
    skills: [
      "Gemini API",
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Agentic AI",
      "OSINT",
      "Exploit-DB",
      "Tool-Calling / Function-Calling",
      "Python Automation",
      "CVE Analysis",
      "Prompt Injection & LLM Red Teaming",
      "Adversarial AI",
      "AI Guardrails & Safety",
    ],
  },
  {
    id: "ml",
    label: "Machine Learning & AI",
    color: "bg-orange-500 text-white",
    shape: "rounded-xl",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LangChain", "Hugging Face", "OpenCV", "MediaPipe", "Generative AI & LLMs"],
  },
  {
    id: "cloud",
    label: "Cloud, MLOps & Data Engineering",
    color: "bg-emerald-400 text-black",
    shape: "rounded-full",
    skills: ["AWS SageMaker", "Google Cloud AI", "Docker", "Kubernetes", "MLflow", "Apache Kafka", "Airflow", "DVC", "CI/CD Pipelines"],
  },
  {
    id: "data",
    label: "Data Science & Environments",
    color: "bg-slate-300 text-black",
    shape: "rounded-lg",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter", "Google Colab", "Tableau", "Power BI"],
  },
  {
    id: "lang",
    label: "Programming Languages",
    color: "bg-violet-400 text-black",
    shape: "rounded-full",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Bash / Shell", "R"],
  },
  {
    id: "web",
    label: "Web & API Development",
    color: "bg-yellow-300 text-black",
    shape: "rounded-xl",
    skills: ["FastAPI", "Flask", "Next.js", "React", "Tailwind CSS", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    id: "db",
    label: "Databases & Vector Search",
    color: "bg-sky-300 text-black",
    shape: "rounded-md",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Weaviate", "ChromaDB", "Firebase"],
  },
];

const ALL_TECH = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Hugging Face",
  "FastAPI", "Next.js", "Docker", "Kubernetes", "AWS SageMaker", "MLflow",
  "OpenCV", "MediaPipe", "PostgreSQL", "Pinecone", "Kafka", "Redis",
  "Pandas", "NumPy", "React", "TypeScript", "GraphQL", "ChromaDB",
  "Kali Linux", "Nmap", "Metasploit", "Gemini API", "Exploit-DB", "Agentic AI", "OSINT",
];

const EXPERIENCE = [
  {
    role: "Founder & Publisher",
    company: "Trax · trax.ng",
    focus: "Publishing & Media",
    impact: "Building Nigeria's independent music media brand",
  },
  {
    role: "Founder & Lead Engineer",
    company: "BTEHub Solutions",
    focus: "AI/ML Engineering",
    impact: "End-to-end AI products from research to production",
  },
  {
    role: "AI/ML Engineer & Head of Digital Strategy",
    company: "NBI Institute",
    focus: "AI Strategy",
    impact: "Transforming institutional learning with AI",
  },
  {
    role: "Cluster Team Lead",
    company: "Ogun Tech Community",
    focus: "Community Leadership",
    impact: "Mentoring 100+ students across Africa",
  },
  {
    role: "Keynote Speaker",
    company: "NUJ Ogun State · World Radio Day",
    focus: "Public Speaking",
    impact: "The 4Ds Framework for AI adoption",
  },
  {
    role: "Corporate AI Trainer",
    company: "GText Holdings · NBI · OTC",
    focus: "Enterprise AI Education",
    impact: "Upskilling teams on applied machine learning",
  },
];

const STATS = [
  { value: "50+", label: "Clients\nServed",       id: "clients" },
  { value: "100+", label: "Projects\nCompleted",   id: "projects" },
  { value: "5+",  label: "Years\nExperience",     id: "years" },
  { value: "10+", label: "ML Models\nDeployed",   id: "models" },
];

const SPECIALTIES = [
  { label: "Deep Learning",    color: "bg-orange-500 text-white",   shape: "rounded-xl" },
  { label: "Computer Vision",  color: "bg-emerald-400 text-black",  shape: "rounded-full" },
  { label: "NLP",              color: "bg-slate-300 text-black",    shape: "rounded-lg" },
  { label: "MLOps",            color: "bg-violet-400 text-black",   shape: "rounded-full" },
  { label: "Generative AI",    color: "bg-yellow-300 text-black",   shape: "rounded-xl" },
  { label: "Edge AI",          color: "bg-sky-300 text-black",      shape: "rounded-md" },
];

const TESTIMONIALS = [
  {
    id: "mofoluwaso",
    name: "Mofoluwaso Olateju",
    role: "Founder, DifferentHide",
    tag: "AI Strategy & Deployment",
    color: "bg-orange-500 text-white",
    shape: "rounded-xl",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=200",
    quote: "Ben Sam turned complex AI architectures into production workflows that our engineers could deploy seamlessly. From data pipeline optimization to real-time inference, the delivery was world-class.",
  },
  {
    id: "adetola",
    name: "Adetola Salami",
    role: "Lead Product Designer",
    tag: "Full-Stack AI Systems",
    color: "bg-emerald-400 text-black",
    shape: "rounded-full",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=200",
    quote: "Working with Ben Sam was a game-changer. He doesn't just build ML models in isolation, he engineers complete products that bridge deep learning with intuitive, high-performance interfaces.",
  },
  {
    id: "folarin",
    name: "Folarin Oyewole Victor",
    role: "Backend Engineer, Trova",
    tag: "Computer Vision & MLOps",
    color: "bg-violet-400 text-black",
    shape: "rounded-full",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=200",
    quote: "He translates complex algorithmic requirements into clean, scalable microservices and APIs. Low latency, robust CI/CD pipelines, and zero downtime in production.",
  },
  {
    id: "jesutimileyin",
    name: "Jesutimileyin Olafare",
    role: "Co-Founder, Trova",
    tag: "Generative AI & LLMs",
    color: "bg-sky-300 text-black",
    shape: "rounded-md",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=200",
    quote: "He delivers real, working intelligence. His ability to evaluate LLM benchmarks, fine-tune models, and deploy reliable pipelines helped us ship months ahead of schedule.",
  },
];

function Testimonials() {
  return (
    <div className="w-full px-2 sm:px-2.5 pb-2.5">
      <section
        id="testimonials"
        className="film-grain relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between px-5 sm:px-6 md:px-12 pt-10 sm:pt-14 pb-6 sm:pb-10 border-b border-white/10 relative z-10 gap-3 sm:gap-4">
          <div>
            <h2
              className="text-white font-extrabold leading-none tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 8vw, 7.5rem)",
                lineHeight: 0.9,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Proof,
              </span>{" "}
              not promises.
            </h2>
          </div>
          <p
            className="text-white/50 text-xs sm:text-sm max-w-sm md:text-right"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What founders, engineers, and teams I've shipped with say.
          </p>
        </div>

        {/* 2-Column Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`p-6 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors ${
                i % 2 === 0 ? "md:border-r border-white/10" : ""
              } ${i < TESTIMONIALS.length - 2 || (i < TESTIMONIALS.length - 1 && i % 2 === 0) ? "border-b border-white/10" : "border-b md:border-b-0 border-white/10"}`}
            >
              {/* Person Info Row */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/20 shrink-0 shadow-md">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-base sm:text-lg leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t.name}
                    </h3>
                    <p
                      className="text-white/50 text-xs sm:text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>

                <span
                  className={`${t.color} ${t.shape} px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold shrink-0 shadow-sm`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Quote text */}
              <p
                className="text-white/80 text-sm sm:text-base leading-relaxed relative pl-4 border-l-2 border-white/20 mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactCTA({ onOpenContact }: { onOpenContact?: () => void }) {
  const handleScrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="film-grain w-full relative flex items-center justify-center py-14 sm:py-20 md:py-32 bg-black select-none overflow-hidden my-0"
      style={{ minHeight: "520px" }}
    >
      {/* Sculptural Black Obsidian / Basalt Monolith Background: Full bleed & high contrast */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 contrast-125 grayscale pointer-events-none"
        style={{
          backgroundImage: `url('/obsidian-monolith-bg.jpg')`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Centered Vibrant Orange Ticket Card: Proportional to mobile screen width (approx ~88-90% width) */}
      <div className="relative z-10 w-full max-w-[365px] sm:max-w-[420px] md:max-w-4xl lg:max-w-5xl px-4 sm:px-6 mx-auto">
        <div
          className="relative w-full rounded-sm overflow-hidden shadow-2xl aspect-[1/1.16] sm:aspect-[1/1.12] md:aspect-auto min-h-[385px] sm:min-h-[415px] md:min-h-[300px] flex flex-col justify-between items-center text-center py-4 sm:py-5 md:py-14 px-4 sm:px-6 md:px-20 transition-all duration-300"
          style={{ backgroundColor: "#FF5500" }}
        >
          {/* MOBILE ONLY (< md): Top Rivets/Holes & Top Perforated Dashed Line */}
          <div className="md:hidden w-full flex flex-col items-center">
            <div className="w-full flex justify-between items-center px-4 pt-1">
              <div className="w-3.5 h-3.5 rounded-full bg-black shadow-inner" />
              <div className="w-3.5 h-3.5 rounded-full bg-black shadow-inner" />
              <div className="w-3.5 h-3.5 rounded-full bg-black shadow-inner" />
            </div>
            <div className="w-full border-b border-dashed border-black/40 mt-3" />
          </div>

          {/* DESKTOP ONLY (md+): Left & Right Punch Holes + Vertical Dashed Tear Lines */}
          <div className="hidden md:flex absolute left-4 lg:left-6 top-0 bottom-0 flex-col justify-between py-6 lg:py-8 pointer-events-none">
            <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-black shadow-inner" />
            <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-black shadow-inner" />
            <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-black shadow-inner" />
          </div>
          <div className="hidden md:block absolute left-12 lg:left-16 top-0 bottom-0 border-r border-dashed border-black/40 pointer-events-none" />

          <div className="hidden md:block absolute right-12 lg:right-16 top-0 bottom-0 border-l border-dashed border-black/40 pointer-events-none" />
          <div className="hidden md:flex absolute right-4 lg:right-6 top-0 bottom-0 flex-col justify-between py-6 lg:py-8 pointer-events-none">
            <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-black shadow-inner" />
            <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-black shadow-inner" />
            <div className="w-4 lg:w-5 h-4 lg:h-5 rounded-full bg-black shadow-inner" />
          </div>

          {/* Core Content: Typography & Call to Action (Centered comfortably with balanced padding) */}
          <div className="my-auto py-2 sm:py-3 md:py-0 flex flex-col items-center justify-center">
            <h2
              className="text-black leading-[1.1] tracking-tight mb-2 sm:mb-3"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(2rem, 5.8vw, 4.8rem)",
                fontWeight: 400,
              }}
            >
              Let's build something<br className="hidden sm:inline" /> extraordinary
            </h2>

            <p
              className="text-black/85 font-medium text-xs sm:text-sm md:text-base max-w-[260px] sm:max-w-sm md:max-w-xl mb-5 sm:mb-7 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No noise, just production-grade AI, LLMs, and real engineering.
            </p>

            {/* Solid 90-degree Square Black Button */}
            <button
              onClick={handleScrollToFooter}
              className="bg-black hover:bg-neutral-900 text-white font-bold text-xs sm:text-sm md:text-base px-7 sm:px-9 py-2.5 sm:py-3 rounded-none shadow-2xl hover:scale-105 active:scale-95 transition-all inline-block cursor-pointer tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get started ↓
            </button>
          </div>

          {/* MOBILE ONLY (< md): Bottom Perforated Dashed Line & Bottom Rivets/Holes */}
          <div className="md:hidden w-full flex flex-col items-center">
            <div className="w-full border-t border-dashed border-black/40 mb-3" />
            <div className="w-full flex justify-between items-center px-4 pb-1">
              <div className="w-3.5 h-3.5 rounded-full bg-black shadow-inner" />
              <div className="w-3.5 h-3.5 rounded-full bg-black shadow-inner" />
              <div className="w-3.5 h-3.5 rounded-full bg-black shadow-inner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <div id="footer" className="w-full px-2 sm:px-2.5 pb-2.5">
      <footer
        className="film-grain relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
        style={{ paddingTop: "48px", paddingBottom: "40px" }}
      >
        <div className="relative px-5 md:px-10" style={{ lineHeight: 0.88 }}>
          {/* Decorative dots: desktop only */}
          <div className="hidden md:block absolute w-4 h-4 rounded-full bg-white z-10" style={{ top: "18%", left: "29%" }} />
          <div className="hidden md:block absolute w-4 h-4 rounded-full bg-white z-10" style={{ top: "62%", left: "22%" }} />

          <h2
            className="text-white font-extrabold select-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem, 13vw, 15rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              paddingLeft: "0.02em",
            }}
          >
            Ben Sam
            <br />
            Oladoyin
          </h2>
        </div>

        <div
          className="flex flex-col md:flex-row md:items-end justify-between px-5 md:px-10 pt-8 md:pt-10 gap-6 md:gap-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <div className="flex flex-wrap gap-4 md:gap-10">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/70 text-sm font-medium hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {[
              { label: "GitHub", href: "https://github.com/btehub-solutions" },
              { label: "LinkedIn", href: "https://linkedin.com/in/ben-sam-oladoyin-527966233" },
              { label: "WhatsApp", href: "https://wa.me/2347045422815" },
              { label: "Email", href: "mailto:bensamoladoyin1@gmail.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm font-medium hover:text-white transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 md:mt-8 mx-5 md:mx-10 pt-5 md:pt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-white/40 gap-2">
          <p>©2026 Ben Sam Oladoyin. All rights reserved.</p>
          <p>AI &amp; ML Engineer · Building with purpose</p>
        </div>
      </footer>
    </div>
  );
}

function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedMobile = showAll ? EXPERIENCE : EXPERIENCE.slice(0, 3);

  return (
    <div className="w-full px-2 sm:px-2.5 pb-2.5">
      <section id="experience" className="paper-noise film-grain w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-[#f2f0eb] border border-black/10 relative">
        {/* Header */}
        <div className="px-5 sm:px-6 md:px-10 pt-10 sm:pt-14 pb-6 sm:pb-10 relative z-10">
          <div className="w-3 h-3 rounded-full bg-black mb-2 ml-1" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h2
              className="text-black font-extrabold leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 9vw, 8rem)",
                lineHeight: 0.88,
              }}
            >
              Work<br />History
            </h2>
            <span className="text-black/50 text-xs sm:text-sm font-mono self-start sm:self-auto">
              2021 – Present · 6 Key Roles
            </span>
          </div>
        </div>

        <div className="px-5 sm:px-6 md:px-10 pb-8 md:pb-14 relative z-10">
          {/* Desktop Table Header: hidden on mobile */}
          <div
            className="hidden md:grid pb-3 border-b border-black/20"
            style={{ gridTemplateColumns: "2fr 1.4fr 1.4fr 2fr" }}
          >
            {["Role", "Company", "Focus", "Impact"].map((h, i) => (
              <span
                key={h}
                className={`text-black/40 text-sm font-medium ${i === 3 ? "text-right" : ""}`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden divide-y divide-dashed divide-black/20">
            {displayedMobile.map((row) => (
              <div key={row.role} className="py-4 flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="text-black font-bold text-base leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {row.role}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="text-black/80 font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                    {row.company}
                  </span>
                  <span className="text-black/30">·</span>
                  <span className="bg-black/10 text-black/70 text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ fontFamily: "var(--font-body)" }}>
                    {row.focus}
                  </span>
                </div>
                <p
                  className="text-black/60 text-xs leading-relaxed mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.impact}
                </p>
              </div>
            ))}

            {/* Mobile Expand / Collapse Toggle Button */}
            <div className="pt-4 pb-1">
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full py-2.5 rounded-full bg-black/5 hover:bg-black/10 active:bg-black/15 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-black/10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>{showAll ? "Show Less" : `View All 6 Roles (${EXPERIENCE.length - 3} More)`}</span>
                <span className="text-xs">{showAll ? "↑" : "↓"}</span>
              </button>
            </div>
          </div>

          {/* Desktop Table Rows */}
          <div className="hidden md:block">
            {EXPERIENCE.map((row) => (
              <div
                key={row.role}
                className="grid py-5 border-b border-dashed border-black/20 group hover:bg-black/[0.03] transition-colors -mx-10 px-10"
                style={{ gridTemplateColumns: "2fr 1.4fr 1.4fr 2fr" }}
              >
                <span
                  className="text-black font-semibold text-base md:text-lg leading-snug pr-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {row.role}
                </span>
                <span
                  className="text-black/80 text-base md:text-lg self-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.company}
                </span>
                <span
                  className="text-black/80 text-base md:text-lg self-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.focus}
                </span>
                <span
                  className="text-black/60 text-base md:text-lg text-right self-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


function Certifications() {
  return (
    <div className="w-full px-2 sm:px-2.5 pb-2.5">
      <section className="paper-noise film-grain w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-[#f2f0eb] border border-black/10 relative">
        {/* Header */}
        <div className="px-5 sm:px-6 md:px-12 pt-10 sm:pt-14 pb-6 sm:pb-10 border-b border-black/15 relative z-10">
          <div className="w-3 h-3 rounded-full bg-black mb-2 ml-1" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <h2
                className="text-black font-extrabold leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.8rem, 8vw, 7.5rem)",
                  lineHeight: 0.9,
                }}
              >
                Certifi-<br />cations.
              </h2>
            </div>
            <a
              href="https://drive.google.com/drive/folders/16W-Gx5xHapQaPfgfOLFDlNvE8oFrfzke?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-black text-black text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-black hover:text-white transition-all self-start sm:self-auto shadow-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              22+ More Credentials ↗
            </a>
          </div>
        </div>

        {/* 1-Column Grid on Mobile, 2-Column on Tablets/Desktop (Prevents cramped mobile cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 relative z-10 divide-y sm:divide-y-0 divide-black/15">
          {CERTS.map((cert, i) => (
            <div
              key={cert.id}
              className={`flex flex-col justify-between p-5 sm:p-6 md:p-10 ${
                i % 2 === 0 ? "sm:border-r border-black/15" : ""
              } ${
                i < 2 ? "sm:border-b border-black/15" : ""
              } hover:bg-black/[0.02] transition-colors`}
            >
              {/* Category & Year */}
              <div className="flex items-start justify-between gap-1 mb-2.5 sm:mb-4 md:mb-6">
                <span
                  className={`${cert.color} ${cert.shape} px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold shrink-0 shadow-sm`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cert.category}
                </span>
                <span
                  className="text-black/40 text-[10px] sm:text-xs md:text-sm font-mono shrink-0"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cert.year}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-black font-bold leading-tight mb-3 text-xs sm:text-sm md:text-xl line-clamp-3 md:line-clamp-none"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="flex items-center justify-between mt-auto pt-2.5 sm:pt-4 border-t border-black/10 text-[11px] sm:text-xs md:text-sm">
                <span
                  className="text-black/50 truncate pr-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cert.issuer}
                </span>
                <span className="text-black/40 text-xs sm:text-sm shrink-0">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Community() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCommunity =
    activeTab === "all"
      ? COMMUNITY_ITEMS
      : COMMUNITY_ITEMS.filter((item) => item.id === activeTab || item.type.toLowerCase().includes(activeTab));

  return (
    <div className="w-full px-2 sm:px-2.5 pb-2.5">
      <section className="film-grain w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between px-5 sm:px-6 md:px-12 pt-10 sm:pt-14 pb-6 sm:pb-10 border-b border-white/10 relative z-10 gap-3 sm:gap-4">
          <h2
            className="text-white font-extrabold leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 8vw, 7.5rem)",
              lineHeight: 0.9,
            }}
          >
            Community<br />&amp; Impact.
          </h2>
          <p
            className="text-white/50 text-xs sm:text-sm max-w-xs md:text-right"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Teaching, speaking, and building in public across Africa and beyond.
          </p>
        </div>

        {/* Filter Tabs matching Tech Stack styling */}
        <div className="relative z-10 px-4 sm:px-6 md:px-12 py-3 sm:py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-white text-black shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              All Impact ({COMMUNITY_ITEMS.length})
            </button>

            {COMMUNITY_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`shrink-0 px-3.5 py-1.5 ${item.shape} text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? `${item.color} shadow-lg scale-105 ring-2 ring-white/30`
                      : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Items List */}
        <div className="divide-y divide-white/10 relative z-10">
          {filteredCommunity.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center gap-2.5 sm:gap-4 px-5 sm:px-6 md:px-12 py-4 sm:py-6 hover:bg-white/[0.03] transition-colors"
            >
              <div className="shrink-0 md:w-56">
                <span
                  className={`${item.color} ${item.shape} px-3 py-1 text-xs font-semibold inline-block shadow-sm`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.type}
                </span>
              </div>

              <div className="flex-1">
                <p
                  className="text-white font-semibold text-sm sm:text-base md:text-lg leading-snug mb-0.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-white/60 text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <div className="w-full px-2 sm:px-2.5 pb-2.5">
      <section
        id="skills"
        className="film-grain relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between px-5 sm:px-6 md:px-12 pt-10 sm:pt-14 pb-6 sm:pb-10 border-b border-white/10 relative z-10 gap-3 sm:gap-4">
          <div>
            <h2
              className="text-white font-extrabold leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 8vw, 7.5rem)",
                lineHeight: 0.9,
              }}
            >
              Tech<br />Stack.
            </h2>
          </div>
          <p
            className="text-white/50 text-xs sm:text-sm max-w-sm md:text-right"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tools &amp; infrastructure I use to design, train, and deploy production AI systems.
          </p>
        </div>

        {/* Category Filter Tabs (Horizontal scroll on mobile for seamless navigation) */}
        <div className="relative z-10 px-4 sm:px-6 md:px-12 py-3 sm:py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-white text-black shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              All Skills ({ALL_TECH.length}+)
            </button>

            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`shrink-0 px-3.5 py-1.5 ${cat.shape} text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? `${cat.color} shadow-lg scale-105 ring-2 ring-white/30`
                      : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Categorized Skills Grid */}
        <div className="divide-y divide-white/10 relative z-10">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col md:flex-row md:items-start lg:items-center gap-3 md:gap-6 px-5 sm:px-6 md:px-12 py-5 sm:py-6 group hover:bg-white/[0.02] transition-colors"
            >
              {/* Category Pill + Count */}
              <div className="shrink-0 w-full md:w-64 flex items-center justify-between md:justify-start gap-2">
                <span
                  className={`${cat.color} ${cat.shape} px-3 py-1 text-xs font-bold inline-block shadow-sm`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cat.label}
                </span>
                <span className="text-[11px] font-mono text-white/40 md:hidden">
                  {cat.skills.length} tools
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/15 bg-white/[0.04] text-white/85 text-xs sm:text-sm px-2.5 sm:px-3.5 py-1 rounded-full hover:border-white/40 hover:bg-white/10 hover:text-white transition-all shadow-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Bottom Ticker */}
        <div className="border-t border-white/10 py-4 sm:py-5 overflow-hidden relative z-10 bg-black/40">
          <div className="flex gap-8 sm:gap-10 animate-marquee whitespace-nowrap">
            {[...ALL_TECH, ...ALL_TECH].map((tech, i) => (
              <span
                key={i}
                className="text-white/30 text-xs sm:text-sm font-semibold tracking-widest uppercase shrink-0"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tech}
                <span className="ml-8 sm:ml-10 text-white/15">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function About({ onOpenCV }: { onOpenCV?: () => void }) {
  return (
    <div className="w-full px-2 sm:px-2.5 pb-2.5">
      <section
        id="about"
        className="film-grain relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between px-5 sm:px-6 md:px-12 pt-10 sm:pt-14 pb-6 sm:pb-10 border-b border-white/10 relative z-10 gap-3 sm:gap-4">
          <h2
            className="text-white font-extrabold leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 8vw, 7.5rem)",
              lineHeight: 0.9,
            }}
          >
            About<br />Me.
          </h2>
        </div>

        {/* 2-Column Responsive Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
          {/* Bio Text & Specialties */}
          <div className="px-5 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
            <p
              className="text-white/80 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I'm an AI &amp; ML Engineer with 5+ years of hands-on experience building
              production-grade machine learning systems, autonomous agents, and data-driven
              applications. I founded <span className="text-white font-semibold underline underline-offset-2">BTEHub Solutions</span> and{" "}
              <span className="text-white font-semibold underline underline-offset-2">Trax (trax.ng)</span>, where I lead
              engineering and digital strategy. My work sits at the intersection of deep
              learning, generative AI, and real-world deployment, from edge devices to
              enterprise cloud infrastructure.
            </p>

            <div>
              <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
                Core Domains
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {SPECIALTIES.map((s) => (
                  <span
                    key={s.label}
                    className={`${s.color} ${s.shape} px-2.5 sm:px-3.5 py-1 text-xs font-semibold shadow-sm`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Compact 2x2 Stats Grid */}
          <div className="grid grid-cols-2 bg-white/[0.01]">
            {STATS.map((stat, i) => (
              <div
                key={stat.id}
                className={`flex flex-col justify-center px-4 sm:px-6 md:px-8 py-5 sm:py-7 md:py-8 hover:bg-white/[0.02] transition-colors ${
                  i % 2 === 0 ? "border-r border-white/10" : ""
                } ${i < 2 ? "border-b border-white/10" : ""}`}
              >
                <span
                  className="text-white font-extrabold leading-none mb-1.5 sm:mb-2 tracking-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-white/60 text-xs sm:text-sm leading-tight whitespace-pre-line font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Location & Action Bar */}
        <div className="border-t border-white/10 px-5 sm:px-6 md:px-12 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <p
            className="text-white/50 text-[11px] sm:text-xs md:text-sm tracking-widest uppercase font-mono"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Abeokuta / Lagos, Nigeria · Remote-ready
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <a
              href="#contact"
              className="text-white font-semibold text-xs sm:text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get in touch ↗
            </a>
            <button
              onClick={onOpenCV}
              className="bg-white text-black text-xs sm:text-sm font-bold px-5 sm:px-6 py-2 rounded-full hover:bg-white/90 active:scale-95 transition-all cursor-pointer shadow-md"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Download CV ↓
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const FEATURED_SLIDES = [
  {
    id: "btehub",
    titleLeft: "BTEHUB",
    titleRight: "SOLUTIONS",
    category: "AI APPLICATION",
    code: "BS-01",
    subtitle: "BTEHub Solutions by Ben Sam Oladoyin",
    actionText: "Explore Platform",
    url: "https://btehub.vercel.app",
    bgClass: "bg-[#1d4ed8]",
    accentColor: "#1d4ed8",
    graphic: (
      <svg
        viewBox="0 0 1000 600"
        className="absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="bte-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
        </defs>
        <rect width="1000" height="600" fill="#1d4ed8" />
        <polygon
          points="0,600 0,420 180,240 380,480 620,220 820,450 1000,280 1000,600"
          fill="#ffffff"
          filter="url(#bte-grain)"
          opacity="0.96"
        />
        <polygon
          points="0,600 0,480 200,340 400,520 640,300 840,500 1000,360 1000,600"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    id: "trax",
    titleLeft: "TRAX",
    titleRight: "MEDIA",
    category: "TECH JOURNALISM",
    code: "BS-02",
    subtitle: "Trax (trax.ng) by Ben Sam Oladoyin",
    actionText: "Read Trax Media",
    url: "https://trax.ng",
    bgClass: "bg-[#D90429]",
    accentColor: "#D90429",
    graphic: (
      <svg
        viewBox="0 0 1000 600"
        className="absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="trax-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
        </defs>
        <rect width="1000" height="600" fill="#D90429" />
        {/* Dynamic Soundwave & Diagonal Energy Blades matching Trax Media aesthetic */}
        <polygon
          points="0,600 0,380 220,180 340,360 520,140 700,380 860,200 1000,340 1000,600"
          fill="#ffffff"
          filter="url(#trax-grain)"
          opacity="0.96"
        />
        <polygon
          points="0,600 0,460 220,280 340,440 520,240 700,450 860,300 1000,430 1000,600"
          fill="#ffffff"
        />
      </svg>
    ),
  },
];

function FeaturedSpotlight() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = FEATURED_SLIDES[currentSlide];

  // Auto-flip every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === FEATURED_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? FEATURED_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === FEATURED_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full px-2 sm:px-2.5 pb-2.5">
      <section
        className="film-grain relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex flex-col p-5 sm:p-8 md:p-12 select-none"
      >
        {/* Founder Portrait Background - Ben Sam Oladoyin */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/bensam-founder-portrait.png"
            alt="Ben Sam Oladoyin - Founder"
            className="w-full h-full object-cover object-top sm:object-[center_18%] opacity-35 contrast-125 grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/85 pointer-events-none" />

        {/* Headline Header */}
        <div className="relative z-10 select-none pt-2 sm:pt-4 md:pt-6 mb-4 sm:mb-8" style={{ lineHeight: 0.86 }}>
          <div className="flex items-center justify-between">
            <h2
              className="text-white font-black leading-none tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 9.5vw, 10rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Startups
            </h2>

            {/* Slide Index Badge */}
            <span className="text-white/40 font-mono text-xs sm:text-sm self-end mb-1">
              0{currentSlide + 1} / 0{FEATURED_SLIDES.length}
            </span>
          </div>
        </div>

        {/* Centered Artwork Showcase Poster */}
        <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center">
          {/* Poster Frame */}
          <a
            href={slide.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-md overflow-hidden shadow-2xl border border-white/20 group cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
            style={{
              backgroundColor: slide.accentColor,
            }}
          >
            {/* Gritty Risograph Textured Graphic Artwork */}
            <div className="absolute inset-0 overflow-hidden transition-opacity duration-500">
              {slide.graphic}
            </div>

            {/* Poster Top Typography */}
            <div className="absolute top-3.5 sm:top-6 left-4 right-4 sm:left-7 sm:right-7 flex justify-between items-center z-10">
              <span
                className="text-white font-extrabold text-xl sm:text-4xl md:text-5xl tracking-tight leading-none uppercase drop-shadow-md transition-all duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {slide.titleLeft}
              </span>
              <span
                className="text-white font-extrabold text-xl sm:text-4xl md:text-5xl tracking-tight leading-none uppercase drop-shadow-md transition-all duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {slide.titleRight}
              </span>
            </div>

            {/* Poster Bottom Badges */}
            <div className="absolute bottom-3.5 sm:bottom-6 left-4 right-4 sm:left-7 sm:right-7 flex justify-between items-end z-10">
              <div className="border border-white/80 sm:border-2 px-2.5 sm:px-4 py-0.5 sm:py-1 text-white font-black text-[10px] sm:text-sm tracking-widest uppercase bg-black/40 backdrop-blur-sm">
                {slide.category}
              </div>

              <div className="border border-white/80 sm:border-2 px-3 sm:px-5 py-0.5 sm:py-1 rounded-full text-white font-black text-[10px] sm:text-sm tracking-widest uppercase bg-black/40 backdrop-blur-sm">
                {slide.code}
              </div>
            </div>
          </a>

          {/* Bottom Controls: Subtitle, Action Link, and Prev/Next Navigation */}
          <div className="w-full text-center mt-4 sm:mt-6 z-20 relative flex flex-col items-center gap-3" style={{ fontFamily: "var(--font-body)" }}>
            <div>
              <p className="text-white font-bold text-sm sm:text-lg tracking-tight">
                {slide.subtitle}
              </p>
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-semibold text-xs sm:text-sm transition-colors mt-1 group"
              >
                <span className="text-[10px]">▶</span>
                <span className="group-hover:underline underline-offset-4">{slide.actionText} ↗</span>
              </a>
            </div>

            {/* Interactive Prev/Next Navigation & Indicator Dots */}
            <div className="flex items-center gap-3.5 mt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous startup"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 shadow-md"
              >
                <CaretLeft size={18} weight="bold" />
              </button>

              <div className="flex items-center gap-2">
                {FEATURED_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? "w-6 sm:w-7 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next startup"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 shadow-md"
              >
                <CaretRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, isFirst }: { project: ProjectItem; isFirst?: boolean }) {
  const targetUrl = project.live || project.github;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-[14px] sm:rounded-[16px] group cursor-pointer w-full h-[520px] sm:h-[620px] md:h-[680px] lg:h-[720px] bg-[#141416] block select-none border border-white/[0.06] hover:border-white/15 transition-all duration-500"
    >
      {/* Card Image Area - Blank until user adds real mockup */}
      {project.img ? (
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      ) : (
        /* Blank Canvas - 100% clean and pristine, ready for mockup */
        <div className="w-full h-full bg-[#141416] group-hover:bg-[#18181b] transition-colors duration-500" />
      )}

      {/* 100% Floating Frosted Text Box - Exact match to reference screenshot */}
      <div
        className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-3.5 md:left-3.5 md:right-3.5 rounded-[8px] sm:rounded-[10px] bg-black/35 backdrop-blur-[24px] border border-white/10 flex flex-col justify-end px-4 py-3 sm:px-5 sm:py-3.5 md:px-5 md:py-4 z-10 transition-all duration-300 group-hover:bg-black/50 group-hover:border-white/15 shadow-lg select-none"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <h3
          className="text-[#FFFFFF] font-semibold text-[15px] sm:text-[16px] md:text-[17px] tracking-[-0.015em] leading-[1.3] truncate"
          style={{ fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
          {project.title}
        </h3>
        <p
          className="text-white/75 font-normal text-[13px] sm:text-[14px] tracking-[-0.01em] leading-normal mt-0.5 truncate"
          style={{ fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
          {project.category} · {project.date || project.tags}
        </p>
      </div>
    </a>
  );
}

function Projects({ onNavigateToProjects }: { onNavigateToProjects?: () => void }) {
  return (
    <section id="projects" className="w-full">
      {/* 2-Column Framed Project Grid matching the reference layout */}
      <div className="w-full px-2 sm:px-2.5 pb-2 sm:pb-2.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
          {HOME_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} isFirst={idx === 0} />
          ))}
        </div>
      </div>

      {/* Framed White 'View all' Section with film grain texture */}
      <div className="w-full px-2 sm:px-2.5 pb-2.5">
        <button
          onClick={onNavigateToProjects}
          className="paper-noise film-grain w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-[#f0ede8] hover:bg-[#e4dfd6] active:scale-[0.99] transition-all border border-black/10 flex items-center justify-center relative select-none cursor-pointer group"
          style={{ height: "130px" }}
        >
          <span
            className="text-black relative z-10 group-hover:scale-105 transition-transform"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
              fontWeight: 500,
            }}
          >
            View all ↗
          </span>
        </button>
      </div>
    </section>
  );
}

function QuickConnectModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("bensamoladoyin1@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("+2347045422815");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0c0d12] border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden p-5 sm:p-8 text-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-white/10 mb-5 sm:mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <BrandLogo size="sm" showText={false} />
            </div>
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get in touch
              </h3>
              <p
                className="text-emerald-400 text-xs flex items-center gap-1.5 mt-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for AI &amp; Engineering Projects
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        {/* Contact Channels */}
        <div className="space-y-3">
          {/* Email Channel */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/25 transition-all">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#FF4800]/20 text-[#FF4800] flex items-center justify-center text-xl shrink-0 font-bold">
                <EnvelopeSimple size={22} weight="fill" />
              </div>
              <div>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Email
                </p>
                <p className="text-white/60 text-xs font-mono">
                  bensamoladoyin1@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-md bg-white/10 hover:bg-white/20 text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {copiedEmail ? (
                  <>
                    <Check size={15} weight="bold" className="text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} weight="bold" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href="mailto:bensamoladoyin1@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Ben%20Sam%20Oladoyin&body=Hi%20Ben%20Sam%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project..."
                className="px-4 py-2 rounded-md bg-[#FF4800] hover:brightness-110 text-black font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Compose</span>
                <ArrowUpRight size={15} weight="bold" />
              </a>
            </div>
          </div>

          {/* WhatsApp Channel */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/25 transition-all">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center text-xl shrink-0 font-bold">
                <WhatsappLogo size={24} weight="fill" />
              </div>
              <div>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  WhatsApp Direct
                </p>
                <p className="text-white/60 text-xs font-mono">
                  +234 704 542 2815
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyPhone}
                className="px-3.5 py-2 rounded-md bg-white/10 hover:bg-white/20 text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {copiedPhone ? (
                  <>
                    <Check size={15} weight="bold" className="text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} weight="bold" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href="https://wa.me/2347045422815?text=Hi%20Ben%20Sam%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-[#22C55E] hover:brightness-110 text-black font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Chat</span>
                <ArrowUpRight size={15} weight="bold" />
              </a>
            </div>
          </div>

          {/* LinkedIn Channel */}
          <a
            href="https://linkedin.com/in/ben-sam-oladoyin-527966233"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-white/25 hover:bg-white/[0.06] transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#8BB4F7]/20 text-[#8BB4F7] flex items-center justify-center font-bold text-sm shrink-0">
                <LinkedinLogo size={20} weight="fill" />
              </div>
              <div>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  LinkedIn Message
                </p>
                <p className="text-white/60 text-xs font-mono">
                  ben-sam-oladoyin-527966233
                </p>
              </div>
            </div>
            <ArrowUpRight size={16} weight="bold" className="text-white/40 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Footer Note */}
        <div
          className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span className="flex items-center gap-1.5">
            <Lightning size={14} weight="fill" className="text-amber-400" />
            <span>Fast responses within 2–4 hours</span>
          </span>
          <span>Abeokuta, Nigeria (GMT+1)</span>
        </div>
      </div>
    </div>
  );
}

function CVModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#141414] border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5 border-b border-white/10 bg-[#1a1a1a]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <BrandLogo size="sm" showText={false} />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Curriculum Vitae
              </h3>
              <p className="text-white/60 text-[11px] sm:text-xs" style={{ fontFamily: "var(--font-body)" }}>
                Ben Sam Oladoyin · AI &amp; ML Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="mailto:bensamoladoyin1@gmail.com"
              className="bg-[#22C55E] text-black font-bold text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:brightness-110 transition-all"
            >
              Contact Me ✉
            </a>
            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer text-sm sm:text-base"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 text-xs sm:text-sm" style={{ fontFamily: "var(--font-body)" }}>
          {/* Summary */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <h4 className="text-xs uppercase tracking-widest text-[#93C5FD] font-bold mb-2">
              Professional Summary
            </h4>
            <p className="text-white/80 leading-relaxed">
              AI &amp; Machine Learning Engineer with 5+ years of experience building and deploying production-grade ML models, LLM architectures, and scalable intelligent systems. Founder of BTEHub Solutions and Trax (trax.ng). Proven track record leading digital strategy, technical workshops, and enterprise corporate training across Africa.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#FF5500] font-bold mb-3">
              Core Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning & Deep Learning",
                "Computer Vision & NLP",
                "LLMs & Generative AI",
                "MLOps & CI/CD Pipelines",
                "FastAPI, Next.js & React",
                "AWS SageMaker & GCP AI",
                "Docker & Kubernetes",
                "Vector Databases & Pinecone",
                "Python, TypeScript & SQL"
              ].map((skill) => (
                <span key={skill} className="bg-white/10 text-white/90 text-xs px-3 py-1.5 rounded-lg border border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#22C55E] font-bold mb-3">
              Experience Highlights
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-[#22C55E] pl-4">
                <div className="flex justify-between items-start">
                  <h5 className="font-bold text-white text-base">Founder &amp; Publisher · Trax (trax.ng)</h5>
                  <span className="text-white/50 text-xs">2023 – Present</span>
                </div>
                <p className="text-white/70 text-xs mt-1">
                  Building Nigeria's independent music and culture media platform, integrating modern web engineering with digital strategy.
                </p>
              </div>

              <div className="border-l-2 border-[#FF5500] pl-4">
                <div className="flex justify-between items-start">
                  <h5 className="font-bold text-white text-base">Founder &amp; Lead AI Engineer · BTEHub Solutions</h5>
                  <span className="text-white/50 text-xs">2021 – Present</span>
                </div>
                <p className="text-white/70 text-xs mt-1">
                  Designing end-to-end computer vision and LLM applications from research prototypes to cloud production.
                </p>
              </div>

              <div className="border-l-2 border-[#93C5FD] pl-4">
                <div className="flex justify-between items-start">
                  <h5 className="font-bold text-white text-base">AI/ML Engineer &amp; Head of Strategy · NBI Institute</h5>
                  <span className="text-white/50 text-xs">2022 – Present</span>
                </div>
                <p className="text-white/70 text-xs mt-1">
                  Spearheading AI adoption and enterprise curriculum development across corporate ecosystems.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-2">
              Key Certifications &amp; Recognition
            </h4>
            <ul className="list-disc list-inside text-white/70 space-y-1 text-xs">
              <li>AWS Machine Learning Specialty &amp; Cloud Practitioner</li>
              <li>AI/ML Bootcamp: Zero to Production &amp; Deep Learning Masterclass</li>
              <li>Keynote Speaker: World Radio Day 2026 (NUJ Ogun State)</li>
              <li>Cluster Team Lead · Ogun Tech Community (Mentoring 100+ Engineers)</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#171717]">
          <span className="text-white/40 text-xs">Abeokuta / Lagos, Nigeria · Open for Global Roles</span>
          <a
            href="mailto:bensamoladoyin1@gmail.com?subject=Job%20Opportunity%20-%20Ben%20Sam%20Oladoyin"
            className="bg-white text-black font-bold text-xs px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Hire Ben Sam ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsArchivePage({
  onNavigateHome,
  onNavigateBlog,
  onOpenCV,
  onNavigateContact,
}: {
  onNavigateHome: () => void;
  onNavigateBlog?: () => void;
  onOpenCV: () => void;
  onNavigateContact?: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white film-grain">
      {/* Unframed Full-Bleed Projects Hero */}
      <section
        className="film-grain relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] bg-black flex flex-col justify-between pt-16 sm:pt-20 px-5 sm:px-7 md:px-10 select-none pb-8"
      >
        {/* Top Shared Navbar with Project Active Highlight */}
        <Navbar
          activeView="projects"
          onNavigateHome={onNavigateHome}
          onNavigateProjects={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onNavigateBlog={onNavigateBlog}
          onOpenCV={onOpenCV}
          onNavigateContact={onNavigateContact}
        />

        {/* Centered Massive Display Title: "Projects" */}
        <div className="relative z-10 text-center my-auto py-12 md:py-16 select-none" style={{ lineHeight: 0.82 }}>
          <h1
            className="text-white font-extrabold tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.4rem, 15vw, 17rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Projects
          </h1>
        </div>

        <div className="relative z-10 pb-1" />
      </section>

      {/* 2-Column Framed Project Grid */}
      <div className="w-full px-2 sm:px-2.5 pb-2 sm:pb-2.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} isFirst={false} />
          ))}
        </div>
      </div>

      {/* Elegant Marquee Ticker with Ben Sam Context */}
      <div className="w-full overflow-hidden py-10 sm:py-14 bg-black relative select-none">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array(8).fill("Selected Works  ·  Ben Sam Oladoyin  ·  AI Architecture  ·  Building with Purpose  ·  ").map((text, i) => (
            <span
              key={i}
              className="text-white font-normal text-3xl sm:text-5xl md:text-6xl tracking-wide opacity-90"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Proof & Testimonials Section */}
      <Testimonials />

      {/* CTA Ticket Banner */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function BlogPage({
  onNavigateHome,
  onNavigateProjects,
  onOpenCV,
  onOpenContact,
  onNavigateContact,
}: {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onOpenCV: () => void;
  onOpenContact?: () => void;
  onNavigateContact?: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white film-grain selection:bg-[#FACC15] selection:text-black">
      {/* Unframed Full-Bleed Blog Hero */}
      <section
        className="film-grain relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] bg-black flex flex-col justify-between pt-16 sm:pt-20 px-5 sm:px-7 md:px-10 select-none pb-8"
      >
        {/* Top Shared Navbar with Blog Active Highlight */}
        <Navbar
          activeView="blog"
          onNavigateHome={onNavigateHome}
          onNavigateProjects={onNavigateProjects}
          onNavigateBlog={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onOpenCV={onOpenCV}
          onNavigateContact={onNavigateContact}
        />

        {/* Centered Massive Display Title: "Blog" */}
        <div className="relative z-10 text-center my-auto py-12 md:py-16 select-none" style={{ lineHeight: 0.82 }}>
          <h1
            className="text-white font-extrabold tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.4rem, 15vw, 17rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Blog
          </h1>
        </div>

        <div className="relative z-10 pb-1" />
      </section>

      {/* Blank Pure Black Staging Canvas (Ready for user to curate content) */}
      <section className="w-full min-h-[300px] sm:min-h-[420px] bg-black film-grain" />

      {/* CTA Ticket Banner */}
      <ContactCTA onOpenContact={onOpenContact} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function ContactPage({
  onNavigateHome,
  onNavigateProjects,
  onNavigateBlog,
  onOpenCV,
  onOpenContact,
}: {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateBlog?: () => void;
  onOpenCV: () => void;
  onOpenContact?: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white film-grain selection:bg-[#C084FC] selection:text-black">
      {/* Unframed Full-Bleed Contact Hero */}
      <section
        className="film-grain relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] bg-black flex flex-col justify-between pt-16 sm:pt-20 px-5 sm:px-7 md:px-10 select-none pb-8"
      >
        {/* Top Shared Navbar with Contact Active Highlight */}
        <Navbar
          activeView="contact"
          onNavigateHome={onNavigateHome}
          onNavigateProjects={onNavigateProjects}
          onNavigateBlog={onNavigateBlog}
          onOpenCV={onOpenCV}
          onNavigateContact={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Centered Massive Display Title: "Contact" */}
        <div className="relative z-10 text-center my-auto py-12 md:py-16 select-none" style={{ lineHeight: 0.82 }}>
          <h1
            className="text-white font-extrabold tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.4rem, 15vw, 17rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Contact
          </h1>
        </div>

        <div className="relative z-10 pb-1" />
      </section>

      {/* 100% Clone Contact Section: Left Portrait Image Card + Right Contact Details Card */}
      <section className="w-full px-2 sm:px-2.5 pb-2 sm:pb-2.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
          {/* Left Column: Pure Portrait Image Card (No badges, No text overlays) */}
          <div className="relative overflow-hidden rounded-[14px] sm:rounded-[16px] w-full h-[520px] sm:h-[620px] md:h-[680px] lg:h-[720px] bg-[#141416] select-none">
            <img
              src="/bensam-contact-portrait.jpg"
              alt="Ben Sam Oladoyin"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right Column: Sits directly on original black background (no separate card background) */}
          <div className="w-full flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 py-8 select-none">
            {/* Title */}
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-[28px] tracking-tight mb-8">
              Contact
            </h2>

            {/* Prompt */}
            <p className="text-white/95 text-[15px] sm:text-base md:text-[17px] leading-[1.6] mb-8 max-w-md">
              Got a question, an ambitious AI project, or want to discuss engineering collaboration?
            </p>

            {/* Email CTA */}
            <p className="text-white/95 text-[15px] sm:text-base md:text-[17px] leading-[1.6] max-w-md">
              Send briefs, project inquiries, or questions to{" "}
              <a
                href="mailto:bensamoladoyin1@gmail.com"
                className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                bensamoladoyin1@gmail.com
              </a>
              .
            </p>

            {/* WhatsApp CTA */}
            <p className="text-white/95 text-[15px] sm:text-base md:text-[17px] leading-[1.6] mt-4 max-w-md">
              Or reach out directly on WhatsApp at{" "}
              <a
                href="https://wa.me/2347045422815"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                +234 704 542 2815
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Ticket Banner */}
      <ContactCTA onOpenContact={onOpenContact} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function BrandLogo({
  className = "",
  size = "default",
  showText = true,
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
  showText?: boolean;
}) {
  const iconSizes = {
    sm: "w-5 h-5",
    default: "w-7 h-7 sm:w-8 sm:h-8",
    lg: "w-9 h-9 sm:w-10 sm:h-10",
  };
  const textSizes = {
    sm: "text-sm tracking-tight",
    default: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Custom Geometric B Monogram Mark (Architectural lockup with 45° angled stem slash) */}
      <svg
        viewBox="0 0 62 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} text-white shrink-0`}
        aria-hidden="true"
      >
        <g fill="currentColor">
          {/* Stem with top-left block & 45-deg angled base slash */}
          <path d="M6 0 H26 V10 H18 V34 L8 44 H0 L8 36 V0 Z" />
          {/* Upper Bowl */}
          <path d="M24 0 H44 C53.5 0, 58 4.5, 58 12.5 C58 20.5, 53.5 25, 44 25 H24 V0 Z M34 8.5 V16.5 H42.5 C46 16.5, 48 15, 48 12.5 C48 10, 46 8.5, 42.5 8.5 H34 Z" />
          {/* Lower Bowl with angled transition */}
          <path d="M24 22 H46 C55.5 22, 61 27, 61 35 C61 43.5, 54.5 48.5, 44 48.5 H16 L24 40.5 H42 C47 40.5, 50 38, 50 35 C50 32, 47 30, 42 30 H24 V22 Z" />
        </g>
      </svg>

      {/* Wordmark in Clash Display / Display typography */}
      {showText && (
        <span
          className={`text-white font-extrabold leading-none ${textSizes[size]}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          BenSam
        </span>
      )}
    </div>
  );
}

function Navbar({
  activeView = "home",
  onNavigateHome,
  onNavigateProjects,
  onNavigateBlog,
  onOpenCV,
  onNavigateContact,
  embedded = false,
  rightAction,
}: {
  activeView?: "home" | "projects" | "blog" | "cv" | "contact";
  onNavigateHome?: () => void;
  onNavigateProjects?: () => void;
  onNavigateBlog?: () => void;
  onOpenCV?: () => void;
  onNavigateContact?: () => void;
  embedded?: boolean;
  rightAction?: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (embedded) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={
        embedded
          ? "relative w-full flex items-center justify-between pointer-events-auto"
          : `fixed left-0 right-0 z-50 px-1.5 min-[360px]:px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-center sm:justify-between pointer-events-none transition-all duration-300 ${
              scrolled ? "top-1.5 min-[360px]:top-2 sm:top-3.5" : "top-2 min-[360px]:top-2.5 sm:top-4"
            }`
      }
    >
      {/* Left empty spacer keeping navigation pills centered */}
      <div className="hidden sm:block sm:w-28 md:w-36 shrink-0 pointer-events-none" />

      {/* Mobile row: signature geometric design (Square Home, Pill Project, Rounded-2xl Blog, Rounded-lg CV, Angled Contact) */}
      <div className="flex sm:hidden items-center justify-center gap-1 min-[360px]:gap-1.5 pointer-events-auto max-w-full overflow-x-auto no-scrollbar py-1 px-1">
        <button
          onClick={onNavigateHome}
          className={`h-9 min-[360px]:h-10 px-2 min-[360px]:px-2.5 bg-[#FF4800] text-black font-bold text-[11px] min-[360px]:text-xs rounded-none shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none shrink-0 ${
            activeView === "home" ? "ring-2 ring-white/50" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Home
        </button>
        <button
          onClick={onNavigateProjects}
          className={`h-9 min-[360px]:h-10 px-2 min-[360px]:px-2.5 bg-[#22C55E] text-black font-bold text-[11px] min-[360px]:text-xs rounded-full shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none shrink-0 ${
            activeView === "projects" ? "ring-2 ring-white/50" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Project
        </button>
        <button
          onClick={onNavigateBlog}
          className={`h-9 min-[360px]:h-10 px-2 min-[360px]:px-2.5 bg-[#FACC15] text-black font-bold text-[11px] min-[360px]:text-xs rounded-2xl shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none shrink-0 ${
            activeView === "blog" ? "ring-2 ring-white/50" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Blog
        </button>
        <button
          onClick={onOpenCV}
          className={`h-9 min-[360px]:h-10 px-2 min-[360px]:px-2.5 bg-[#8BB4F7] text-black font-bold text-[11px] min-[360px]:text-xs rounded-lg shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none shrink-0 ${
            activeView === "cv" ? "ring-2 ring-white/50" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          CV
        </button>
        <button
          onClick={onNavigateContact}
          className={`h-9 min-[360px]:h-10 px-2 min-[360px]:px-2.5 bg-[#C084FC] text-black font-bold text-[11px] min-[360px]:text-xs rounded-tr-xl rounded-bl-xl shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none shrink-0 ${
            activeView === "contact" ? "ring-2 ring-white/50" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Contact
        </button>
      </div>

      {/* Desktop/tablet row: mathematically centered on exact same vertical axis as B·S badge */}
      <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 md:gap-2.5 pointer-events-auto">
        <button
          onClick={onNavigateHome}
          className={`h-11 md:h-12 px-4 md:px-6 bg-[#FF4800] text-black font-bold text-sm md:text-base rounded-none shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none ${
            activeView === "home" ? "ring-2 ring-white/60" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Home
        </button>
        <button
          onClick={onNavigateProjects}
          className={`h-11 md:h-12 px-4 md:px-6 bg-[#22C55E] text-black font-bold text-sm md:text-base rounded-full shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none ${
            activeView === "projects" ? "ring-2 ring-white/60" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Project
        </button>
        <button
          onClick={onNavigateBlog}
          className={`h-11 md:h-12 px-4 md:px-6 bg-[#FACC15] text-black font-bold text-sm md:text-base rounded-2xl shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none ${
            activeView === "blog" ? "ring-2 ring-white/60" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Blog
        </button>
        <button
          onClick={onOpenCV}
          className={`h-11 md:h-12 px-4 md:px-6 bg-[#8BB4F7] text-black font-bold text-sm md:text-base rounded-lg shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none ${
            activeView === "cv" ? "ring-2 ring-white/60" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          CV
        </button>
        <button
          onClick={onNavigateContact}
          className={`h-11 md:h-12 px-4 md:px-6 bg-[#C084FC] text-black font-bold text-sm md:text-base rounded-tr-2xl rounded-bl-2xl shadow-md flex items-center justify-center hover:brightness-110 active:scale-95 outline-none focus:outline-none transition-all cursor-pointer select-none ${
            activeView === "contact" ? "ring-2 ring-white/60" : ""
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Contact
        </button>
      </div>

      {/* Right side action or spacer balanced to brand lockup */}
      {rightAction ? (
        <div className="hidden sm:flex items-center shrink-0 pointer-events-auto">{rightAction}</div>
      ) : (
        <div className="hidden sm:block sm:w-28 md:w-36 shrink-0 pointer-events-none" />
      )}
    </nav>
  );
}

function Hero({
  onOpenCV,
  onNavigateToProjects,
}: {
  onOpenCV: () => void;
  onNavigateToProjects?: () => void;
}) {
  return (
    <div className="w-full px-2 sm:px-2.5 pt-2 pb-2">
      {/*
       * Mobile: framed card with outer padding, ~82vh height so next section
       * peeks below as scroll teaser. Rounded corners + border visible on mobile.
       * sm+: restores near-full-viewport height via injected media query.
       */}
      <section
        id="home"
        className="film-grain relative w-full rounded-xl md:rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl bg-black border border-white/10"
        style={{
          /* Mobile: ~82vh so the next section peeks, showing there's more to scroll */
          height: "clamp(440px, 75svh, 75svh)",
        }}
      >
        {/* Override height to full on sm+ (tablets and desktops) */}
        <style>{`
          @media (min-width: 640px) {
            #home {
              height: calc(100svh - 20px) !important;
              min-height: 580px !important;
            }
          }
        `}</style>

        {/* Ambient Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-85"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette & Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/60 pointer-events-none" />
      </section>
    </div>
  );
}


function CVPage({
  onNavigateHome,
  onNavigateProjects,
  onNavigateBlog,
  onOpenContact,
  onNavigateContact,
}: {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateBlog?: () => void;
  onOpenContact?: () => void;
  onNavigateContact?: () => void;
}) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-white film-grain pt-16 sm:pt-20">
      {/* Global Floating Navbar - 100% consistent with Home, Projects, Blog & Contact */}
      <div className="no-print">
        <Navbar
          activeView="cv"
          onNavigateHome={onNavigateHome}
          onNavigateProjects={onNavigateProjects}
          onNavigateBlog={onNavigateBlog}
          onOpenCV={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onNavigateContact={onNavigateContact}
          rightAction={
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-white text-black font-bold text-xs md:text-sm px-4 md:px-5 h-11 md:h-12 rounded-full shadow-md hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
            >
              <DownloadSimple size={18} weight="bold" />
              <span>Download PDF</span>
            </button>
          }
        />
      </div>

      {/* Main CV Content Frame */}
      <div className="w-full px-2 sm:px-2.5 pb-2.5">
        <div className="cv-printable film-grain w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-[#09090b] border border-white/10 p-4 min-[380px]:p-6 sm:p-10 md:p-14 relative">
          
          {/* Top Back Navigation Bar */}
          <div className="no-print flex items-center justify-between pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-white/10">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} weight="bold" />
              <span>Back to Portfolio</span>
            </button>

            <button
              onClick={handlePrint}
              className="sm:hidden inline-flex items-center gap-1.5 bg-white text-black font-bold text-xs px-3.5 py-2 rounded-full cursor-pointer shadow-md active:scale-95 transition-transform"
            >
              <DownloadSimple size={14} weight="bold" />
              <span>PDF</span>
            </button>
          </div>

          {/* Profile Hero Header Card */}
          <div className="relative overflow-hidden bg-[#0f172a]/60 border border-white/10 rounded-xl md:rounded-2xl p-4 min-[380px]:p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6 md:gap-8">
            {/* Professional Blueprint / Architectural Square Box Grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />
            {/* Subtle radial depth gradient for mature contrast */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(255, 255, 255, 0.04), transparent 70%)",
              }}
            />

            <div className="relative z-10 w-24 h-24 min-[380px]:w-28 min-[380px]:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 bg-black/60">
              <img
                src="/bensam-portrait.jpg"
                alt="Ben Sam Oladoyin"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
              <h1
                className="text-white font-extrabold text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl tracking-tight mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ben Sam Oladoyin
              </h1>
              <p
                className="text-white/80 text-sm min-[380px]:text-base sm:text-lg md:text-xl font-medium mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Founder of Trax &amp; BTEHub Solutions <span className="text-white/40">|</span> AI/ML Engineer
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/70 font-mono">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <EnvelopeSimple size={16} weight="bold" className="text-white/40" />
                  <a href="mailto:bensamoladoyin1@gmail.com" className="hover:text-white transition-colors break-all">
                    bensamoladoyin1@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={16} weight="bold" className="text-white/40" />
                  <a href="tel:+2347045422815" className="hover:text-white transition-colors">
                    +234 704 542 2815
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={16} weight="bold" className="text-white/40" />
                  <span>Abeokuta, Nigeria</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Globe size={16} weight="bold" className="text-white/40" />
                  <a href="https://bensamoladoyin.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    bensamoladoyin.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Main CV Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
            
            {/* Left Column (Primary Details) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Professional Summary */}
              <div>
                <h2
                  className="text-white/60 text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10 mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Professional Summary
                </h2>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Results-driven AI &amp; ML Engineer and Founder of <strong className="text-white font-semibold">Trax</strong> and <strong className="text-white font-semibold">BTEHub Solutions</strong>, specializing in architecting intelligent systems, automation workflows, and scalable AI solutions. Demonstrated expertise in building autonomous agents and integrating advanced LLMs into production environments. Committed to transforming complex AI research into high-impact digital products that solve real-world problems.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h2
                  className="text-white/60 text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10 mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Work Experience
                </h2>

                <div className="space-y-10">
                  {/* Trax */}
                  <div className="relative pl-6 border-l-2 border-[#D90429]/70">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                        Founder &amp; Publisher
                      </h3>
                      <span className="text-white/40 text-xs font-mono">2026 – Present</span>
                    </div>
                    <p className="text-[#D90429] text-xs font-bold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>
                      TRAX • ABEOKUTA, NIGERIA
                    </p>
                    <ul className="space-y-2 text-white/75 text-sm sm:text-base leading-relaxed list-disc list-outside pl-4" style={{ fontFamily: "var(--font-body)" }}>
                      <li>Founded and launched Trax (<a href="https://www.trax.ng" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2 hover:text-red-400">trax.ng</a>), Ogun State's tech news and startup media platform tracking the local technology movement, funding updates, and developer ecosystem.</li>
                      <li>Architected and developed the media platform using Next.js and Tailwind CSS with highly optimized SEO and content publishing workflows.</li>
                      <li>Authoring key editorial features, covering local startup stories, tech events (like Founders Friday Abeokuta), funding announcements, and technology trends across the state.</li>
                    </ul>
                  </div>

                  {/* BTEHub Solutions */}
                  <div className="relative pl-6 border-l-2 border-[#1d4ed8]/70">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                        Founder &amp; Lead Engineer
                      </h3>
                      <span className="text-white/40 text-xs font-mono">2023 – Present</span>
                    </div>
                    <p className="text-[#60a5fa] text-xs font-bold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>
                      BTEHUB SOLUTIONS • ABEOKUTA, NIGERIA
                    </p>
                    <ul className="space-y-2 text-white/75 text-sm sm:text-base leading-relaxed list-disc list-outside pl-4" style={{ fontFamily: "var(--font-body)" }}>
                      <li>Driving a tech-forward AI brand that builds intelligent systems, automation workflows, and modern web applications to help businesses scale and solve complex problems using applied AI.</li>
                      <li>Designing end-to-end AI/ML systems focused on real-world implementation rather than just prototypes.</li>
                      <li>Building autonomous AI agents and intelligent workflows that significantly improve business productivity.</li>
                      <li>Developing scalable digital products by integrating advanced AI models into modern web architectures.</li>
                      <li>Leading 'BTEHub Daily' thought leadership, delivering simplified AI insights and tutorials to the community.</li>
                    </ul>
                  </div>

                  {/* NBI Institute */}
                  <div className="relative pl-6 border-l-2 border-emerald-500/70">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                        AI/ML Engineer &amp; Head of Digital Strategy
                      </h3>
                      <span className="text-white/40 text-xs font-mono">2025 – Present</span>
                    </div>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>
                      NBI INSTITUTE • ABEOKUTA, OGUN STATE, NIGERIA
                    </p>
                    <ul className="space-y-2 text-white/75 text-sm sm:text-base leading-relaxed list-disc list-outside pl-4" style={{ fontFamily: "var(--font-body)" }}>
                      <li>Leading AI and digital strategy at NBI Institute, the No. 1 vocational institution in Ogun State, with over 2,500 students enrolled across tech and skill acquisition programmes.</li>
                      <li>Driving the integration of Artificial Intelligence, Data Analytics, and emerging technologies into the institute's curriculum and digital operations.</li>
                      <li>Overseeing digital strategy across the institute's platforms including the student portal, affiliate system, and alumni network.</li>
                      <li>Facilitating hands-on AI and tech training for students preparing for paid internships and global career opportunities.</li>
                    </ul>
                  </div>

                  {/* Ogun Tech Community */}
                  <div className="relative pl-6 border-l-2 border-purple-500/70">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                        Cluster Team Lead
                      </h3>
                      <span className="text-white/40 text-xs font-mono">2025 – Present</span>
                    </div>
                    <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>
                      OGUN TECH COMMUNITY • ABEOKUTA, OGUN STATE, NIGERIA
                    </p>
                    <ul className="space-y-2 text-white/75 text-sm sm:text-base leading-relaxed list-disc list-outside pl-4" style={{ fontFamily: "var(--font-body)" }}>
                      <li>Leading a cluster team within the Ogun Tech Community, a network of 50 plus innovation hubs, co-working spaces, startups, and tech organizations across Ogun State.</li>
                      <li>Connecting tech talent, startups, and organizations to local and international funding, support, and growth opportunities.</li>
                      <li>Contributing to policy advocacy efforts that create a stable and supportive environment for entrepreneurs and investors in the region.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              <div>
                <h2
                  className="text-white/60 text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10 mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Recent Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                        AlertDrive AI
                      </h4>
                      <span className="text-white/40 text-xs font-mono">Driver Safety System</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      An AI-powered computer vision system for real-time driver fatigue and distraction detection using OpenCV and PyTorch.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                        TaxNaija
                      </h4>
                      <span className="text-white/40 text-xs font-mono">AI Tax Assistant</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      Intelligent tax assessment and classification platform for Nigerian businesses and employees using NLP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-10">
              
              {/* Links */}
              <div>
                <h2
                  className="text-white/60 text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Links
                </h2>
                <div className="space-y-2 text-xs">
                  <a
                    href="https://linkedin.com/in/ben-sam-oladoyin-527966233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white transition-all border border-white/10 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <LinkedinLogo size={18} weight="fill" className="text-[#8BB4F7]" />
                        <span className="font-semibold text-white text-sm" style={{ fontFamily: "var(--font-display)" }}>LinkedIn</span>
                      </div>
                      <ArrowUpRight size={14} weight="bold" className="text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-mono text-white/60 group-hover:text-white/90 break-all">
                      linkedin.com/in/ben-sam-oladoyin-527966233
                    </span>
                  </a>

                  <a
                    href="https://github.com/btehub-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white transition-all border border-white/10 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GithubLogo size={18} weight="fill" className="text-white/80" />
                        <span className="font-semibold text-white text-sm" style={{ fontFamily: "var(--font-display)" }}>GitHub</span>
                      </div>
                      <ArrowUpRight size={14} weight="bold" className="text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-mono text-white/60 group-hover:text-white/90 break-all">
                      github.com/btehub-solutions
                    </span>
                  </a>
                </div>
              </div>

              {/* Expertise & Skills */}
              <div>
                <h2
                  className="text-white/60 text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10 mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Expertise
                </h2>

                <div className="space-y-5 text-xs">
                  <div>
                    <p className="text-white/50 text-[11px] mb-2 font-bold uppercase" style={{ fontFamily: "var(--font-body)" }}>
                      Machine Learning &amp; AI
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["TensorFlow & Keras", "PyTorch", "Scikit-learn", "Computer Vision (OpenCV & MediaPipe)", "Generative AI & LLMs", "LangChain & AI Agents", "Hugging Face"].map((s) => (
                        <span key={s} className="bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-md" style={{ fontFamily: "var(--font-body)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-[11px] mb-2 font-bold uppercase" style={{ fontFamily: "var(--font-body)" }}>
                      Cloud, MLOps &amp; Data Engineering
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["AWS & SageMaker", "Docker & Kubernetes", "MLflow", "Apache Kafka", "Git & CI/CD"].map((s) => (
                        <span key={s} className="bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-md" style={{ fontFamily: "var(--font-body)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-[11px] mb-2 font-bold uppercase" style={{ fontFamily: "var(--font-body)" }}>
                      Data Science &amp; Environments
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Jupyter", "Anaconda", "Google Colab", "Pandas & NumPy"].map((s) => (
                        <span key={s} className="bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-md" style={{ fontFamily: "var(--font-body)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-[11px] mb-2 font-bold uppercase" style={{ fontFamily: "var(--font-body)" }}>
                      Programming Languages
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "TypeScript", "JavaScript", "SQL"].map((s) => (
                        <span key={s} className="bg-white/10 border border-white/20 text-white font-semibold px-2.5 py-1 rounded-md font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2
                  className="text-white/60 text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Certifications
                </h2>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <h5 className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                      AWS Certified Machine Learning Engineer Associate
                    </h5>
                    <p className="text-white/50" style={{ fontFamily: "var(--font-body)" }}>Udemy (Sundog Education) · June 2026</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <h5 className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                      Complete A.I. &amp; Machine Learning, Data Science
                    </h5>
                    <p className="text-white/50" style={{ fontFamily: "var(--font-body)" }}>Udemy (Andrei Neagoie) · March 2026</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <h5 className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                      100 Days of Code: Python Pro Bootcamp
                    </h5>
                    <p className="text-white/50" style={{ fontFamily: "var(--font-body)" }}>Udemy (Dr. Angela Yu) · Feb 2026</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <h5 className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                      Full-Stack Web Development Bootcamp
                    </h5>
                    <p className="text-white/50" style={{ fontFamily: "var(--font-body)" }}>Udemy · April 2026</p>
                  </div>

                  <a
                    href="https://drive.google.com/drive/folders/16W-Gx5xHapQaPfgfOLFDlNvE8oFrfzke?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 text-white/50 hover:text-white text-xs underline font-mono"
                  >
                    + Plus 22+ other professional credentials ↗
                  </a>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2
                  className="text-white/60 text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Languages
                </h2>
                <div className="space-y-2 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-white font-semibold">English</span>
                    <span className="text-white/50">Fluent</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-white font-semibold">Hausa</span>
                    <span className="text-white/50">Fluent</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-white font-semibold">Yoruba</span>
                    <span className="text-white/50">Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* References Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs tracking-widest uppercase font-mono">
              References Available Upon Request
            </p>
          </div>
        </div>
      </div>

      {/* CTA & Footer (Hidden when downloading / printing PDF) */}
      <div className="no-print">
        <ContactCTA onOpenContact={onOpenContact} />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [view, setView] = useState<"home" | "projects" | "blog" | "cv" | "contact">("home");

  const navigateToProjects = () => {
    setView("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToBlog = () => {
    setView("blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToCV = () => {
    setView("cv");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToContact = () => {
    setView("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openContact = () => {
    setContactModalOpen(true);
  };

  return (
    <>
      {view === "projects" && (
        <ProjectsArchivePage
          onNavigateHome={navigateToHome}
          onNavigateBlog={navigateToBlog}
          onOpenCV={navigateToCV}
          onNavigateContact={navigateToContact}
        />
      )}

      {view === "blog" && (
        <BlogPage
          onNavigateHome={navigateToHome}
          onNavigateProjects={navigateToProjects}
          onOpenCV={navigateToCV}
          onOpenContact={openContact}
          onNavigateContact={navigateToContact}
        />
      )}

      {view === "cv" && (
        <CVPage
          onNavigateHome={navigateToHome}
          onNavigateProjects={navigateToProjects}
          onNavigateBlog={navigateToBlog}
          onOpenContact={openContact}
          onNavigateContact={navigateToContact}
        />
      )}

      {view === "contact" && (
        <ContactPage
          onNavigateHome={navigateToHome}
          onNavigateProjects={navigateToProjects}
          onNavigateBlog={navigateToBlog}
          onOpenCV={navigateToCV}
          onOpenContact={openContact}
        />
      )}

      {view === "home" && (
        <div className="film-grain min-h-screen bg-black text-white relative">
          {/* Global Floating Navbar that follows scroll */}
          <Navbar
            activeView="home"
            onNavigateHome={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onNavigateProjects={navigateToProjects}
            onNavigateBlog={navigateToBlog}
            onOpenCV={navigateToCV}
            onNavigateContact={navigateToContact}
          />

          {/* Top Ticker Marquee - Positioned cleanly below the floating navbar */}
          <div className="w-full overflow-hidden pt-18 sm:pt-20 pb-3 bg-transparent relative z-30">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {Array(4).fill(
                "Ben Sam Oladoyin · AI & ML Engineer · Founder of BTEHub Solutions & Trax (trax.ng) · Building Production Intelligent Systems · Open for Global Roles · "
              ).map((text, i) => (
                <span
                  key={i}
                  className="text-white/60 text-xs font-medium tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Hero with framed side margins, rounded corners, and existing background */}
          <Hero
            onOpenCV={navigateToCV}
            onNavigateToProjects={navigateToProjects}
          />

          {/* Main Sections */}
          <Projects onNavigateToProjects={navigateToProjects} />
          <About onOpenCV={navigateToCV} />
          <Skills />
          <Experience />
          <Certifications />
          <Community />
          <FeaturedSpotlight />
          <Testimonials />
          <ContactCTA onOpenContact={openContact} />
          <Footer />
        </div>
      )}

      {/* CV Interactive Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Quick Connect Interactive Modal */}
      <QuickConnectModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
