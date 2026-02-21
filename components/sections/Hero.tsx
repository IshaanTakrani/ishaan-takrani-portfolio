"use client";

import BlurText from "@/components/reactbits/BlurText";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "3+", label: "Years Exp" },
  { value: "6", label: "Projects" },
  { value: "2", label: "Founded" },
  { value: "3.94", label: "GPA" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100svh] flex flex-col justify-center"
      style={{ background: "#111111" }}
      aria-label="Introduction"
    >
      <div className="section-container py-24">
        {/* Section marker */}
        <p
          className="text-xs font-mono tracking-[0.25em] uppercase mb-10"
          style={{ color: "#F97316" }}
        >
          My Portfolio Website
        </p>

        {/* Name */}
        <BlurText
          as="h1"
          text="ISHAAN TAKRANI"
          animateBy="words"
          direction="top"
          delay={150}
          stepDuration={0.5}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-10"
        />

        {/* Divider */}
        <div style={{ borderTop: "1px solid #2E2E2E", marginBottom: "2rem" }} />

        {/* Role */}
        <p className="text-xl md:text-2xl mb-2" style={{ color: "#FAFAFA" }}>
          Software Developer · Founder · Educator
        </p>
        <p className="text-base font-mono mb-12" style={{ color: "#888888" }}>
          CS @ Toronto Metropolitan University · Toronto, Canada
        </p>

        {/* Stats */}
        {/* <div className="flex flex-wrap gap-10 mb-14">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <BlurText
                as="p"
                text={stat.value}
                animateBy="letters"
                delay={80}
                stepDuration={0.3}
                className="text-4xl font-bold font-mono"
              />
              <p
                className="text-xs uppercase tracking-[0.18em] font-mono mt-1"
                style={{ color: "#888888" }}
              >
                {stat.label}
              </p>
            </div>
          ))} */}
        {/* </div> */}

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            style={{
              borderColor: "#2E2E2E",
              color: "#FAFAFA",
              background: "transparent",
            }}
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
