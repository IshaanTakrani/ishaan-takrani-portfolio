"use client";

import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";
import { Badge } from "@/components/ui/badge";

type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  tech: string[];
  current?: boolean;
};

const entries: ExperienceEntry[] = [
  {
    role: "Co-founder / Web Developer",
    company: "Vista Web Development (click me!)",
    companyUrl: "https://vistawebdev.ca/",
    period: "Dec 2025 – Present",
    description:
      "Designed and developed responsive websites using Next.js, utilizing SSR and SSG to consistently achieve 95+ Lighthouse performance scores. Connected Sanity CMS with Next.js via API queries for real-time content updates.",
    tech: ["Next.js", "React", "PostHog", "Sanity CMS"],
    current: true,
  },
  {
    role: "Software Developer Intern",
    company: "Verdance Development Corporation",
    period: "Jan 2026 – Present",
    description:
      "Developed backend APIs in a 3-person team using Node.js, Express, and MongoDB for project management features like schedules and workflow visualization tools. Designed and implemented NoSQL database schemas and REST endpoints.",
    tech: ["Node.js", "Express", "MongoDB"],
    current: true,
  },
  {
    role: "Software Developer",
    company: "Machinery, Logic, Power",
    period: "Oct 2024 – Present",
    description:
      "Managed a team of three to develop and deliver 4+ interactive workshops on robotics and engineering concepts. Developed and deployed a responsive website using Next.js, TypeScript, and Tailwind CSS, scoring 99 on PageSpeed Insights.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "C++"],
    current: true,
  },
  {
    role: "Robotics / Coding Instructor",
    company: "Zebra Robotics",
    period: "May 2024 – Present",
    description:
      "Worked with 4+ coaches to organize STEM activities for 50+ students, developing specialized websites for engagement. Mentored students for the 2025 FIRST Robotics Competition, developing lessons on Java and electrical systems.",
    tech: ["Java"],
    current: true,
  },
  {
    role: "Web Developer Intern",
    company: "Thermolio AI",
    period: "Sep 2025 – Nov 2025",
    description:
      "Created custom, Figma-prototyped front-end components with tailored CSS styling and JavaScript functionality to boost user retention. Implemented a refreshed UI/UX strategy contributing to a 70%+ increase in daily site traffic post-launch.",
    tech: ["Figma", "CSS", "JavaScript"],
  },
  {
    role: "Co-Founder",
    company: "Project CAHTA",
    period: "Dec 2024 – Jan 2026",
    description:
      "Co-founded a startup to revolutionize marine capture technology and align with global climate initiatives. Secured $10,000+ in funding and mentorship by participating in 5+ pitch competitions.",
    tech: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
      style={{ background: "#111111" }}
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="mb-4">
          <BlurText
            as="p"
            text="02"
            animateBy="letters"
            delay={80}
            stepDuration={0.25}
            className="text-6xl font-bold font-mono text-brand leading-none mb-2"
          />
          <h2
            id="experience-heading"
            className="text-3xl font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Experience
          </h2>
        </div>

        {/* Rule */}
        <div style={{ borderTop: "1px solid #2E2E2E", marginBottom: "3rem" }} />

        {/* Entries */}
        <div>
          {entries.map((entry, i) => (
            <FadeContent key={i}>
              <div
                style={{
                  borderBottom:
                    i < entries.length - 1 ? "1px solid #2E2E2E" : undefined,
                  paddingTop: i === 0 ? 0 : "2rem",
                  paddingBottom: "2rem",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Period + indicator */}
                  <div className="flex items-center gap-3 md:w-40 shrink-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{
                        background: entry.current ? "#F97316" : "transparent",
                        border: entry.current ? "none" : "2px solid #F97316",
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm font-mono"
                      style={{ color: "#888888" }}
                    >
                      {entry.period}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#FAFAFA" }}
                      >
                        {entry.role}
                      </p>
                      {entry.companyUrl ? (
                        <a
                          href={entry.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-medium hover:underline"
                          style={{ color: "#F97316" }}
                        >
                          · {entry.company}
                        </a>
                      ) : (
                        <span
                          className="text-base font-medium"
                          style={{ color: "#F97316" }}
                        >
                          · {entry.company}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "#888888" }}
                    >
                      {entry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {entry.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-xs"
                          style={{
                            borderColor: "#2E2E2E",
                            color: "#FAFAFA",
                            background: "transparent",
                          }}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
