"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionTitle, SkillTag } from "@/app/components/ui";
import { EXPERIENCE, EDUCATION } from "@/app/lib/data";

function TimelineItem({ title, subtitle, period, description, tags, index }: {
  title: string; subtitle: string; period: string; description: string; tags: string[]; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{ position: "relative", paddingLeft: 36, marginBottom: 24 }}
    >
      <div className="timeline-dot" style={{ position: "absolute", left: -5, top: 22 }} />
      <div className="glass-card" style={{ padding: 22, borderRadius: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "#e5e2e3", margin: 0 }}>{title}</h3>
          <span style={{ fontSize: 12, color: "#A1A1AA", fontFamily: "monospace", whiteSpace: "nowrap" }}>{period}</span>
        </div>
        <p style={{ fontSize: 13, color: "#a4c9ff", fontWeight: 500, margin: "0 0 8px" }}>{subtitle}</p>
        <p style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.65, margin: "0 0 14px" }}>{description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {tags.map(t => <SkillTag key={t} label={t} />)}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        width: 500, height: 500, right: 0, top: "30%", opacity: 0.18,
        background: "radial-gradient(circle, rgba(164,201,255,0.15) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center" }}>
          <SectionTitle
            eyebrow="Background"
            title={<>Experience &amp; <span className="text-gradient">Education</span></>}
            subtitle="The journey behind my skills—real-world projects, academic foundations, and continuous learning."
            align="center"
          />
        </div>

        <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(164,201,255,0.1)", border: "1px solid rgba(164,201,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#a4c9ff" }}>
                <Briefcase size={18} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#e5e2e3", margin: 0 }}>Experience</h3>
            </motion.div>
            <div style={{ position: "relative", paddingLeft: 20 }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #a4c9ff, rgba(164,201,255,0.1))" }} />
              {EXPERIENCE.map((e, i) => <TimelineItem key={e.role} title={e.role} subtitle={e.company} period={e.period} description={e.description} tags={e.tags} index={i} />)}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(92,212,255,0.1)", border: "1px solid rgba(92,212,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5cd4ff" }}>
                <GraduationCap size={18} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#e5e2e3", margin: 0 }}>Education</h3>
            </motion.div>
            <div style={{ position: "relative", paddingLeft: 20 }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #5cd4ff, rgba(92,212,255,0.1))" }} />
              {EDUCATION.map((e, i) => <TimelineItem key={e.degree} title={e.degree} subtitle={e.institution} period={e.period} description={e.description} tags={e.tags} index={i} />)}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card" style={{ padding: 22, borderRadius: 16, marginTop: 24 }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "#e5e2e3", margin: "0 0 14px" }}>Key Strengths</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Cross-platform mastery for iOS & Android", "Auth, Firestore, Cloud Functions & Storage", "Clean code and efficient architecture patterns", "Committed to daily learning and adaptation"].map(s => (
                  <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#A1A1AA", lineHeight: 1.5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a4c9ff", flexShrink: 0, marginTop: 5 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .exp-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}