"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Award } from "lucide-react";
import { SectionTitle, GlassCard } from "@/app/components/ui";
import Image from "next/image";

const highlights = [
  { icon: <Smartphone size={18} />, color: "#a4c9ff", bg: "rgba(164,201,255,0.1)", title: "Cross-Platform Expert", desc: "Single codebase delivering native-quality apps on iOS & Android." },
  { icon: <Code2 size={18} />, color: "#5cd4ff", bg: "rgba(92,212,255,0.1)", title: "Clean Architecture", desc: "Scalable, maintainable code following SOLID principles and BLoC pattern." },
  { icon: <Zap size={18} />, color: "#ffb68d", bg: "rgba(255,182,141,0.1)", title: "Performance First", desc: "Apps that hit 60fps and load in milliseconds—every time." },
  { icon: <Award size={18} />, color: "#a4c9ff", bg: "rgba(164,201,255,0.1)", title: "4+ Years Experience", desc: "Delivered 50+ production apps across healthcare, fintech, and commerce." },
];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        width: 500, height: 500, right: 0, top: "20%", opacity: 0.2,
        background: "radial-gradient(circle, rgba(164,201,255,0.2) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 420 }}
          >
           <div
  className="glass-card"
  style={{
    width: 320,
    height: 400,
    borderRadius: 30,
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(100,180,255,.2)",
    background: "#111827",
  }}
>
  <Image
    src="/image/saqib.jpeg"
    alt="Saqib Afridi"
    fill
    priority
    style={{
      objectFit: "cover",
      objectPosition: "center top",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(0,0,0,.45), transparent 35%)",
    }}
  />
</div>

            {/* Floating badges */}
            <div className="animate-float glass-card" style={{
              position: "absolute", top: 20, left: 10,
              display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 14,
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)", zIndex: 3,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse-slow 3s ease-in-out infinite" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3" }}>Open to work</span>
            </div>

            <div className="animate-float-d1 glass-card" style={{
              position: "absolute", top: "30%", right: 0,
              display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 14,
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)", zIndex: 3,
            }}>
              <Smartphone size={13} style={{ color: "#a4c9ff" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3" }}>Flutter</span>
            </div>

            <div className="animate-float-d2 glass-card" style={{
              position: "absolute", bottom: 60, left: 0,
              padding: "8px 14px", borderRadius: 14,
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)", zIndex: 3,
            }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3", fontFamily: "monospace" }}>50+ Apps</span>
            </div>

            <div className="animate-float glass-card" style={{
              position: "absolute", bottom: 20, right: 20,
              padding: "8px 14px", borderRadius: 14,
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)", zIndex: 3,
            }}>
              <span style={{ fontSize: 13, color: "#e5e2e3" }}>⭐ 4.9/5 Rating</span>
            </div>
          </motion.div>

          {/* Right — content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <SectionTitle
              eyebrow="About Me"
              title={<>Crafting Mobile <span className="text-gradient">Experiences</span> That Matter</>}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#c2c6d2", margin: "0 0 14px" }}>
                I&apos;m <strong style={{ color: "#e5e2e3" }}>Saqib Afridi</strong>, a Senior Flutter Developer from Peshawar, Pakistan with 4+ years of experience building production-grade mobile applications.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#A1A1AA", margin: 0 }}>
                My expertise spans the full mobile development lifecycle—from architecture and UI implementation to Firebase backend integration, REST API consumption, and App Store deployment.
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {highlights.map(({ icon, color, bg, title, desc }, i) => (
                <GlassCard key={title} delay={0.1 + i * 0.08} style={{ padding: 20 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: bg, color, display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 12, border: `1px solid ${color}22`,
                  }}>{icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#e5e2e3", marginBottom: 4 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.5 }}>{desc}</div>
                </GlassCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}
            >
              <a href="mailto:saqibafridiy009@gmail.com" className="btn-primary" style={{ textDecoration: "none", padding: "12px 24px", fontSize: 15 }}>
                Get in Touch
              </a>
              <a href="#" className="btn-ghost" style={{ textDecoration: "none", padding: "12px 24px", fontSize: 15 }}>
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}