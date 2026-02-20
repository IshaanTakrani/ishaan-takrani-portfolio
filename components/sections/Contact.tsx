"use client";

import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";

const currentYear = new Date().getFullYear();

const SOCIALS = [
  {
    label: "GitHub",
    handle: "IshaanTakrani",
    href: "https://github.com/IshaanTakrani",
    ariaLabel: "Visit Ishaan's GitHub profile",
  },
  {
    label: "LinkedIn",
    handle: "ishaan-takrani",
    href: "https://linkedin.com/in/ishaan-takrani",
    ariaLabel: "Visit Ishaan's LinkedIn profile",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: "#1C1C1C" }}
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="mb-4">
          <BlurText
            as="p"
            text="05"
            animateBy="letters"
            delay={80}
            stepDuration={0.25}
            className="text-6xl font-bold font-mono text-brand leading-none mb-2"
          />
          <h2
            id="contact-heading"
            className="text-3xl font-bold"
            style={{ color: "#FAFAFA" }}
          >
            Contact
          </h2>
        </div>

        {/* Rule */}
        <div style={{ borderTop: "1px solid #2E2E2E", marginBottom: "3rem" }} />

        {/* Tagline */}
        <p className="text-lg mb-10" style={{ color: "#888888" }}>
          Open to internships, full-time roles, and side projects.
        </p>

        {/* Big email */}
        <FadeContent blur={true} className="mb-14">
          <a
            href="mailto:ishaantakrani@gmail.com"
            aria-label="Send Ishaan an email"
            className="group inline-flex items-center gap-3 transition-opacity hover:opacity-70"
          >
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight break-all"
              style={{ color: "#FAFAFA" }}
            >
              ishaantakrani@gmail.com
            </span>
            <span
              className="text-3xl font-bold shrink-0"
              style={{ color: "#F97316" }}
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </FadeContent>

        {/* Social table */}
        <div
          className="mb-16"
          style={{ border: "1px solid #2E2E2E", maxWidth: "440px" }}
        >
          {SOCIALS.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.ariaLabel}
              className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-[#222222]"
              style={{
                borderBottom:
                  i < SOCIALS.length - 1 ? "1px solid #2E2E2E" : undefined,
              }}
            >
              <span
                className="text-xs uppercase tracking-[0.18em] font-mono w-28 shrink-0"
                style={{ color: "#888888" }}
              >
                {s.label}
              </span>
              <span className="flex items-center justify-between flex-1 gap-2">
                <span
                  className="text-sm font-mono"
                  style={{ color: "#FAFAFA" }}
                >
                  {s.handle}
                </span>
                <span style={{ color: "#F97316" }} aria-hidden="true">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex flex-wrap justify-between items-center gap-3 pt-8"
          style={{ borderTop: "1px solid #2E2E2E" }}
        >
          <p className="text-xs font-mono" style={{ color: "#888888" }}>
            © {currentYear} Ishaan Takrani
          </p>
          <p className="text-xs font-mono" style={{ color: "#888888" }}>
            Ishaan seems really cool, you should hire him
          </p>
        </div>
      </div>
    </section>
  );
}
