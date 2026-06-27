"use client";

import { motion } from "framer-motion";
import { Smartphone, Database, GitBranch, Wrench } from "lucide-react";
import { SectionTitle, SkillTag } from "@/app/components/ui";
import { SKILLS } from "@/app/lib/data";

const meta: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  "Mobile Development": { icon: <Smartphone size={20} />, color: "#a4c9ff", bg: "rgba(164,201,255,0.1)" },
  "Backend & Storage": { icon: <Database size={20} />, color: "#5cd4ff", bg: "rgba(92,212,255,0.1)" },
  "State Management": { icon: <GitBranch size={20} />, color: "#ffb68d", bg: "rgba(255,182,141,0.1)" },
  "Dev Tools": { icon: <Wrench size={20} />, color: "#c2c6d2", bg: "rgba(194,198,210,0.08)" },
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        width: 500, height: 500, left: 0, top: "30%", opacity: 0.2,
        background: "radial-gradient(circle, rgba(2,86,155,0.35) 0%, transparent 70%)",
      }} />
      <div className="grid-subtle" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <SectionTitle
          eyebrow="Tech Stack"
          title={<>Technologies I Use to Build <span className="text-gradient">Modern Mobile</span> Applications</>}
          subtitle="I leverage the full power of the Flutter ecosystem to deliver high-performance, beautiful, and scalable cross-platform solutions."
        />

        {/* Grid */}
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {Object.entries(SKILLS).map(([cat, { tags }], i) => {
            const { icon, color, bg } = meta[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="glass-card"
                style={{ padding: 28, borderRadius: 20, display: "flex", flexDirection: "column", gap: 0 }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: bg, color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, border: `1px solid ${color}22`,
                }}>{icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#e5e2e3", margin: "0 0 20px" }}>{cat}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {tags.map(t => <SkillTag key={t} label={t} />)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card"
          style={{ marginTop: 48, padding: "36px 40px", borderRadius: 20 }}
        >
          <h3 style={{ fontSize: 22, fontWeight: 600, color: "#e5e2e3", margin: "0 0 28px" }}>Core Proficiency</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 48px" }}>
            {[
              { skill: "Flutter & Dart", level: 95 },
              { skill: "Firebase", level: 88 },
              { skill: "Bloc / Riverpod", level: 85 },
              { skill: "REST API Integration", level: 90 },
              { skill: "UI/UX Implementation", level: 92 },
              { skill: "Clean Architecture", level: 82 },
            ].map(({ skill, level }, i) => (
              <div key={skill}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#e5e2e3" }}>{skill}</span>
                  <span style={{ fontSize: 13, color: "#a4c9ff", fontFamily: "monospace" }}>{level}%</span>
                </div>
                <div style={{ height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 4, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #02569b, #5cd4ff)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}