"use client";

import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";
import { Badge } from "@/components/ui/badge";

type Project = {
  name: string;
  description: string;
  tech: string[];
  award?: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    name: "Discord AI Agent",
    description:
      "Developed a Discord-based AI agent using LangChain and LangGraph with RAG for natural language querying of Google Drive content. Features MongoDB for vector storage and conversation persistence.",
    tech: ["TypeScript", "LangChain", "LangGraph", "MongoDB"],
    githubUrl: "https://github.com/IshaanTakrani/gdrive-discord-bot-interface",
  },
  {
    name: "Raisearch",
    description:
      "Built and shipped a web app combining web data collection, LLM-driven summarization, and a rich text editor into a single research workflow. Architected a RAG pipeline backed by a pgvector-powered vector database for semantic search across user-imported sources.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Gemini API"],
    githubUrl: "https://github.com/IshaanTakrani/raisearch",
  },
  {
    name: "Semantic Caching System",
    description:
      "Engineered a high-performance semantic caching system for LLM-powered applications, reducing API costs and improving end-to-end query latency. Implemented a hybrid retrieval pipeline combining pgvector HNSW indexing with a FlashRank cross-encoder for high-precision reranking.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "pgvector"],
    githubUrl: "https://github.com/IshaanTakrani/semantic-cache",
  },
  {
    name: "TASCLink",
    description:
      "Engineered TASCLink, a 1st-place hackathon-winning ROS2-powered teleoperation dashboard. Built a ROS2 node architecture for bidirectional communication between physical controllers and remote robotic systems.",
    tech: ["PyQT", "ROS2"],
    award: "1st Place · Quickathon 2025",
    githubUrl: "https://github.com/IshaanTakrani/tasc_dashboard_gui",
  },
  {
    name: "NurSchedule",
    description:
      "Built in 48 hours at TerraHacks Hackathon; an AI-powered staffing platform using NLP to automate schedule updates. Engineered a RESTful API connecting the Gemini NLP engine to a Supabase (PostgreSQL) backend to translate user commands into database actions.",
    tech: ["Next.js", "TypeScript", "Gemini API", "Supabase"],
    githubUrl: "https://github.com/IshaanTakrani/NurSchedule",
  },

  {
    name: "Wearable Mouse Peripheral",
    description:
      "Developed a velocity filter from scratch to convert raw 9-axis IMU readings into usable positional and rotational outputs. Utilized the Madgwick orientation filter for sensor fusion to refine device usability and enable orientation tracking.",
    tech: ["Arduino", "C++", "Sensor Fusion"],
    githubUrl: "https://github.com/IshaanTakrani/IMU_leonardo",
  },
  {
    name: "Web Chat Server",
    description:
      "Designed and implemented the backend for a real-time web chat application using a WebSocket-based protocol for low-latency bidirectional messaging. Served as project lead, coordinating a team of 4 developers across backend, frontend, and version control workflows.",
    tech: ["Java", "Jakarta EE", "WebSockets", "Maven"],
  },
];

const COLS = 3;

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: "#1C1C1C" }}
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="mb-4">
          <BlurText
            as="p"
            text="03"
            animateBy="letters"
            delay={80}
            stepDuration={0.25}
            className="text-6xl font-bold font-mono text-brand leading-none mb-2"
          />
          <h2
            id="projects-heading"
            className="text-3xl font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Projects
          </h2>
        </div>

        {/* Rule */}
        <div style={{ borderTop: "1px solid #2E2E2E", marginBottom: "3rem" }} />

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ border: "1px solid #2E2E2E" }}
        >
          {projects.map((project, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const isLastRow = row === Math.floor((projects.length - 1) / COLS);
            const isLastCol = col === COLS - 1;

            return (
              <FadeContent key={project.name}>
                <article
                  className="p-6 flex flex-col h-full"
                  style={{
                    borderRight: !isLastCol ? "1px solid #2E2E2E" : undefined,
                    borderBottom: !isLastRow ? "1px solid #2E2E2E" : undefined,
                  }}
                >
                  {/* Number */}
                  <p className="text-xs font-mono text-brand mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* Award */}
                  {project.award && (
                    <p
                      className="text-xs uppercase tracking-[0.12em] font-mono mb-3"
                      style={{ color: "#F97316" }}
                    >
                      ★ {project.award}
                    </p>
                  )}

                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ color: "#FAFAFA" }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: "#888888" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs"
                        style={{
                          borderColor: "#2E2E2E",
                          color: "#888888",
                          background: "transparent",
                        }}
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 text-sm font-mono">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                        className="transition-opacity hover:opacity-70"
                        style={{ color: "#F97316" }}
                      >
                        GitHub →
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live`}
                        className="transition-opacity hover:opacity-70"
                        style={{ color: "#F97316" }}
                      >
                        Live →
                      </a>
                    )}
                  </div>
                </article>
              </FadeContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
