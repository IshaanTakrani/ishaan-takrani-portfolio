"use client";

import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: "#1C1C1C" }}
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="mb-4">
          <BlurText
            as="p"
            text="01"
            animateBy="letters"
            delay={80}
            stepDuration={0.25}
            className="text-6xl font-bold font-mono text-brand leading-none mb-2"
          />
          <h2
            id="about-heading"
            className="text-3xl font-bold"
            style={{ color: "#FAFAFA" }}
          >
            About
          </h2>
        </div>

        {/* Rule */}
        <div style={{ borderTop: "1px solid #2E2E2E", marginBottom: "3rem" }} />

        {/* 2-col layout */}
        <div className="flex flex-col md:flex-row gap-0">
          {/* Bio */}
          <FadeContent className="flex-1 md:pr-12 pb-12 md:pb-0">
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#FAFAFA" }}
            >
              I'm a software developer, a CS student, a founder, and an
              educator. I've built many software systems that span web, AI, and
              robotics domains.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#888888" }}
            ></p>
            <div className="flex flex-wrap gap-6">
              {/* {[
                ["Location", "Toronto, Canada"],
                ["Status", "Open to opportunities"],
                ["Availability", "2025 internships"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p
                    className="text-xs uppercase tracking-[0.18em] font-mono mb-1"
                    style={{ color: "#888888" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#FAFAFA" }}
                  >
                    {value}
                  </p>
                </div>
              ))} */}
            </div>
          </FadeContent>

          {/* Vertical divider */}
          <div
            className="hidden md:block w-px shrink-0 self-stretch"
            style={{ background: "#2E2E2E" }}
            aria-hidden="true"
          />
          {/* Horizontal divider on mobile */}
          <div
            className="block md:hidden"
            style={{ borderTop: "1px solid #2E2E2E", marginBottom: "3rem" }}
          />

          {/* Education */}
          <FadeContent className="flex-1 md:pl-12">
            <p
              className="text-xs uppercase tracking-[0.18em] font-mono mb-6"
              style={{ color: "#888888" }}
            >
              Education
            </p>

            {/* TMU */}
            <div
              style={{
                borderBottom: "1px solid #2E2E2E",
                paddingBottom: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div className="flex justify-between items-start gap-4 mb-1">
                <p
                  className="font-semibold text-base"
                  style={{ color: "#FAFAFA" }}
                >
                  Toronto Metropolitan University
                </p>
                <span
                  className="text-xs font-mono shrink-0"
                  style={{ color: "#888888" }}
                >
                  2022–2027
                </span>
              </div>
              <p className="text-sm mb-2" style={{ color: "#888888" }}>
                B.Sc. Computer Science
              </p>
              <p className="text-sm font-mono" style={{ color: "#F97316" }}>
                GPA: 3.94 / 4.33
              </p>
            </div>

            {/* Ontario Tech */}
            {/* <div>
              <div className="flex justify-between items-start gap-4 mb-1">
                <p className="font-semibold text-base" style={{ color: '#FAFAFA' }}>
                  Ontario Tech University
                </p>
                <span className="text-xs font-mono shrink-0" style={{ color: '#888888' }}>
                  2024
                </span>
              </div>
              <p className="text-sm" style={{ color: '#888888' }}>
                Exchange Program · Computer Science
              </p>
            </div> */}
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
