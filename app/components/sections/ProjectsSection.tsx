"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { SectionTitle, SkillTag } from "@/app/components/ui";
import { PROJECTS } from "@/app/lib/data";
import Image from "next/image";

const gradients = [
  "linear-gradient(135deg, rgba(2,86,155,0.4) 0%, rgba(0,180,225,0.2) 100%)",
  "linear-gradient(135deg, rgba(0,180,225,0.35) 0%, rgba(2,86,155,0.2) 100%)",
  "linear-gradient(135deg, rgba(139,63,3,0.35) 0%, rgba(0,180,225,0.15) 100%)",
  "linear-gradient(135deg, rgba(2,86,155,0.3) 0%, rgba(139,63,3,0.2) 100%)",
  "linear-gradient(135deg, rgba(0,180,225,0.25) 0%, rgba(2,86,155,0.15) 100%)",
  "linear-gradient(135deg, rgba(139,63,3,0.25) 0%, rgba(0,180,225,0.15) 100%)",
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
      <div className="grid-subtle" style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none", zIndex: 0 }} />
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        width: 500, height: 500, left: "20%", bottom: 0, opacity: 0.18,
        background: "radial-gradient(circle, rgba(2,86,155,0.3) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 56 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a4c9ff", display: "inline-block", animation: "pulse-slow 3s ease-in-out infinite" }} />
              Featured Work
            </div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e5e2e3", margin: 0 }}>
              Projects That <span className="text-gradient">Ship</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: "#A1A1AA", maxWidth: 360, lineHeight: 1.65, margin: 0 }}>
            Mobile applications showcasing Flutter, Firebase, REST APIs, and clean architecture.
          </p>
        </div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          <AnimatePresence>
            {displayed.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="glass-card"
                style={{ borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", height: "100%" }}
              >
               {/* Visual */}
<div
  style={{
    borderRadius: 14,
    marginBottom: 20,
    aspectRatio: "16/9",
    position: "relative",
    overflow: "hidden",
    background: "#111827",
  }}
>
  <Image
    src={p.image}
    alt={p.imageAlt}
    fill
    style={{
      objectFit: "cover",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
    }}
  />

  <div
    className="glass-card"
    style={{
      position: "absolute",
      top: 12,
      left: 12,
      zIndex: 2,
      padding: "8px 16px",
      borderRadius: 10,
      fontSize: 12,
      fontFamily: "monospace",
      color: "#a4c9ff",
    }}
  >
    {p.tags[0]}
  </div>
</div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#e5e2e3", margin: "0 0 8px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#A1A1AA", margin: "0 0 16px" }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                    {p.tags.map(t => <SkillTag key={t} label={t} />)}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "auto" }}>
                  {[
                    { href: p.github, label: "Source Code" },
                    { href: p.demo, label: "Live Demo" },
                  ].map(({ href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#c2c6d2", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#a4c9ff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#c2c6d2")}
                    >
                      <ExternalLink size={13} /> {label}
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {PROJECTS.length > 3 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-ghost"
              style={{ padding: "12px 32px" }}
            >
              {showAll ? "Show Less" : `View All ${PROJECTS.length} Projects`}
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}