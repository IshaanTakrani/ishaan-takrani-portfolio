"use client";

import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";

type SkillCategory = {
  label: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C++",
      "C",
      "SQL",
      "Bash",
      "HTML5",
      "CSS",
    ],
  },
  {
    label: "Frameworks / Libraries",
    skills: [
      "React",
      "LangChain",
      "Express.js",
      "Jakarta EE (J2EE)",
      "Next.js",
      "FastAPI",
      "NumPy",
    ],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "PostgreSQL", "MongoDB", "Docker", "Linux / UNIX", "Maven"],
  },
  {
    label: "Additional Skills",
    skills: [
      "Object-Oriented Design (OOD)",
      "Data Structures & Algorithms",
      "SDLC",
      "Agile Methodologies",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: "#111111" }}
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="mb-4">
          <BlurText
            as="p"
            text="04"
            animateBy="letters"
            delay={80}
            stepDuration={0.25}
            className="text-6xl font-bold font-mono text-brand leading-none mb-2"
          />
          <h2
            id="skills-heading"
            className="text-3xl font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Skills
          </h2>
        </div>

        {/* Rule */}
        <div style={{ borderTop: "1px solid #2E2E2E", marginBottom: "3rem" }} />

        {/* 3-col grid with explicit borders */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid #2E2E2E" }}
        >
          {categories.map((cat, i) => (
            <FadeContent key={cat.label}>
              <div
                className="p-8"
                style={{
                  borderRight:
                    i < categories.length - 1 ? "1px solid #2E2E2E" : undefined,
                  borderBottom: undefined,
                }}
              >
                <p
                  className="text-xs uppercase tracking-[0.2em] font-mono mb-6 pb-4"
                  style={{
                    color: "#888888",
                    borderBottom: "1px solid #2E2E2E",
                  }}
                >
                  {cat.label}
                </p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-base"
                      style={{ color: "#FAFAFA" }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
