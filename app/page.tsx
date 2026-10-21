"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  Github,
  Linkedin,
  Menu,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";

const github = "https://github.com/momin078";
const linkedin =
  "https://www.linkedin.com/in/md-mokhlesur-rahman-momin-90394a291/";

const projects = [
  {
    number: "01",
    title: "MERN Stack Application",
    type: "FULL-STACK DEVELOPMENT",
    description:
      "A full-stack application currently in development using MongoDB, Express.js, React, and Node.js. Project details and repository link will be added when the work is ready to share.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    status: "In progress",
    icon: Braces,
    link: null
  },
  {
    number: "02",
    title: "Metro Rail Management System",
    type: "WEB APPLICATION · ASP.NET MVC",
    description:
      "An academic web application for metro rail operations and ticket management, built with ASP.NET MVC and C#.",
    tags: ["ASP.NET MVC", "C#", "Database"],
    status: "Project repository",
    icon: Code2,
    link: "https://github.com/momin078/MetroRailManagementSystem"
  },
  {
    number: "03",
    title: "Pharmacy Management System",
    type: "DATABASE-DRIVEN WEB APPLICATION",
    description:
      "A web-based pharmacy management project built with PHP, HTML, CSS, and MySQL.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    status: "Project repository",
    icon: ShieldCheck,
    link: "https://github.com/momin078/Pharmmacy-Management-System-DBMS-"
  }
];

const skills = [
  { name: "MongoDB", group: "DATABASE", level: "MERN stack" },
  { name: "Express.js", group: "BACKEND", level: "MERN stack" },
  { name: "React", group: "FRONTEND", level: "MERN stack" },
  { name: "Node.js", group: "RUNTIME", level: "MERN stack" },
  { name: "JavaScript", group: "LANGUAGE", level: "Development" },
  { name: "HTML & CSS", group: "WEB", level: "Development" },
  { name: "Manual testing", group: "SQA", level: "Learning & practice" },
  { name: "Test case design", group: "SQA", level: "Learning & practice" },
  { name: "Bug reporting", group: "SQA", level: "Learning & practice" },
  { name: "API testing", group: "SQA", level: "Currently practicing" }
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Momin home" onClick={closeMenu}>
          <span className="brand-mark">M.</span>
          <span className="brand-name">MOMIN<span className="brand-dot">.</span></span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#quality" onClick={closeMenu}>SQA</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <div className="eyebrow"><span className="status-dot" /> DEVELOPER PORTFOLIO · 2026</div>
          <h1>
            Building for the web.
            <span className="gradient-text"> Learning to make it reliable.</span>
          </h1>
          <p className="hero-description">
            I&apos;m <strong>Md Mokhlesur Rahman Momin</strong>, focused on MERN
            stack development and growing my practical skills in Software
            Quality Assurance.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a className="button button-secondary" href={linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-line" /> Full-stack development</span>
            <span><span className="meta-line meta-line-violet" /> Software quality</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="profile-card">
            <div className="profile-card-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span className="card-label">DEV_PROFILE.tsx</span>
            </div>
            <div className="avatar-monogram">MM<span>.</span></div>
            <p className="profile-kicker">HELLO, WORLD</p>
            <h2>Curious mind.<br />Careful builder.</h2>
            <div className="profile-divider" />
            <div className="profile-card-bottom">
              <span><span className="status-dot" /> Open to learning</span>
              <span className="profile-year">2026</span>
            </div>
          </div>
          <div className="floating-chip chip-code"><Code2 size={16} /> MERN STACK</div>
          <div className="floating-chip chip-quality"><ShieldCheck size={16} /> QUALITY FIRST</div>
          <div className="hero-spark spark-one"><Sparkles size={22} /></div>
          <div className="hero-spark spark-two"><span>+</span></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip">
        <div className="section-wrap intro-inner">
          <span>MY FOCUS</span>
          <p>Build <b>useful products</b> · Test <b>real user flows</b> · Improve <b>software quality</b></p>
          <Sparkles size={18} />
        </div>
      </section>

      <section className="content-section section-wrap" id="about">
        <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className="eyebrow">01 / ABOUT</div>
          <h2>Development is the build.<br /><span className="muted-heading">Quality is the habit.</span></h2>
        </motion.div>
        <motion.div className="about-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className="about-lead">
            <span className="large-quote">“</span>
            <p>
              I&apos;m working toward becoming a well-rounded software professional
              by combining application development with a testing mindset.
            </p>
          </div>
          <div className="about-details">
            <p>
              My current focus is building with MongoDB, Express.js, React, and
              Node.js while learning how to check application behavior through
              structured testing.
            </p>
            <p>
              I value clear documentation, practical problem-solving, and being
              honest about what has been built and what is still in progress.
            </p>
            <a className="text-link" href={github} target="_blank" rel="noreferrer">
              Explore my GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-wrap">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="eyebrow">02 / TOOLKIT</div>
            <h2>Skills in progress.<br /><span className="muted-heading">Built through practice.</span></h2>
            <p className="section-intro">A snapshot of the technologies and QA areas I&apos;m working with.</p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.article
                className="skill-card"
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.045, duration: 0.4 }}
              >
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span className="skill-group">{skill.group}</span>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
                <ArrowUpRight className="skill-arrow" size={17} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="projects">
        <motion.div className="section-heading project-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div>
            <div className="eyebrow">03 / SELECTED WORK</div>
            <h2>Projects with a purpose<span className="gradient-text">.</span></h2>
          </div>
          <a className="text-link" href={github} target="_blank" rel="noreferrer">
            All repositories <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-symbol"><ProjectIcon size={24} strokeWidth={1.6} /></div>
                <div className="project-main">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-end">
                  <span className={`project-status ${project.link ? "status-live" : "status-progress"}`}>
                    <span /> {project.status}
                  </span>
                  {project.link ? (
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
                      <ArrowUpRight size={20} />
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled" title="Repository link not added yet">
                      <ArrowRight size={20} />
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="quality-section" id="quality">
        <div className="section-wrap quality-grid">
          <motion.div className="quality-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="eyebrow"><span className="quality-eyebrow-mark">✳</span> 04 / QUALITY MINDSET</div>
            <h2>It should work.<br /><span>And keep working.</span></h2>
            <p>
              I&apos;m developing a practical QA workflow alongside my development
              work, with a focus on understanding expected behavior and documenting
              issues clearly.
            </p>
            <a className="button button-light" href={github} target="_blank" rel="noreferrer">
              Follow my progress <ArrowUpRight size={16} />
            </a>
          </motion.div>
          <motion.div className="qa-panel" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="qa-panel-header">
              <span>QA_WORKFLOW.md</span><span className="qa-panel-state">LEARNING</span>
            </div>
            {[
              ["01", "Understand requirements", "Clarify expected behavior"],
              ["02", "Design test cases", "Cover normal and edge cases"],
              ["03", "Run checks", "Compare actual vs expected"],
              ["04", "Document findings", "Write clear, reproducible reports"]
            ].map(([num, title, detail]) => (
              <div className="qa-step" key={num}>
                <span className="qa-step-num">{num}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                <CheckCircle2 size={17} className="qa-check" />
              </div>
            ))}
            <div className="qa-panel-footer"><span className="status-dot" /> A process I&apos;m building through practice</div>
          </motion.div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <motion.div className="contact-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className="contact-orb" />
          <div className="eyebrow">05 / CONTACT</div>
          <h2>Let&apos;s connect<br />and build <span className="gradient-text">what&apos;s next.</span></h2>
          <p>Interested in my projects or learning journey? Find me on GitHub or LinkedIn.</p>
          <div className="hero-actions contact-actions">
            <a className="button button-primary" href={github} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a className="button button-secondary" href={linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">M.</span><span className="brand-name">MOMIN<span className="brand-dot">.</span></span></a>
        <p>Designed to show the work, the process, and the progress.</p>
        <span className="footer-year">© 2026 MOMIN</span>
      </footer>
    </main>
  );
}
