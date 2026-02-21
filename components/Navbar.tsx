"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-10% 0px -85% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(17,17,17,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #2E2E2E",
        height: "3.5rem",
      }}
    >
      <div className="section-container h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Ishaan Takrani – home"
          className="font-bold text-lg tracking-tight"
          style={{ color: "#F97316" }}
        >
          <img
            src="wordmark_light.png"
            alt="Ishaan Takrani's workmark logo"
            className="h-6"
          />
        </a>

        {/* Nav links */}
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                    className="text-sm transition-colors duration-150"
                    style={
                      isActive
                        ? {
                            color: "#F97316",
                            borderBottom: "1px solid #F97316",
                            paddingBottom: "2px",
                          }
                        : { color: "#888888" }
                    }
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
