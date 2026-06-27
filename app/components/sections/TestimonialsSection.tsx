"use client";

import { motion } from "framer-motion";
import { Quote, Award, Star } from "lucide-react";
import { SectionTitle } from "@/app/components/ui";
import { TESTIMONIALS, ACHIEVEMENTS, CERTIFICATIONS } from "@/app/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        width: 500, height: 500, left: 0, top: 0, opacity: 0.18,
        background: "radial-gradient(circle, rgba(0,180,225,0.2) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 56 }}>
          <SectionTitle eyebrow="Social Proof" title={<>What Clients <span className="text-gradient">Say</span></>} />
          <p style={{ fontSize: 16, color: "#A1A1AA", maxWidth: 320, lineHeight: 1.65, margin: 0, textAlign: "right" }}>
            I deliver clean code, modern UX, and reliable mobile apps that grow businesses.
          </p>
        </div>

        {/* Stats row */}
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 56 }}>
          {ACHIEVEMENTS.map(({ value, label }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card" style={{ padding: "28px 20px", borderRadius: 18, textAlign: "center" }}>
              <div className="text-gradient" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, color: "#A1A1AA", marginTop: 8 }}>{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: 24 }}>
          {/* Testimonials */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Star size={18} style={{ color: "#a4c9ff" }} />
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#e5e2e3", margin: 0 }}>Client Feedback</h3>
            </div>
            <p style={{ fontSize: 15, color: "#A1A1AA", marginBottom: 28, lineHeight: 1.5 }}>Testimonials from clients and collaborators.</p>

            <div className="testi-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card" style={{ padding: 22, borderRadius: 18, display: "flex", flexDirection: "column", gap: 14 }}>
                  <Quote size={18} style={{ color: "rgba(164,201,255,0.35)" }} />
                  <p style={{ fontSize: 14, color: "#c2c6d2", lineHeight: 1.7, fontStyle: "italic", flex: 1, margin: 0 }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", gap: 3 }}>
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={12} style={{ color: "#facc15", fill: "#facc15" }} />)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, rgba(2,86,155,0.5), rgba(0,180,225,0.3))", display: "flex", alignItems: "center", justifyContent: "center", color: "#a4c9ff", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#e5e2e3" }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: "#A1A1AA" }}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Wide extra card */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card" style={{ padding: 22, borderRadius: 18, gridColumn: "1 / -1", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(164,201,255,0.1)", border: "1px solid rgba(164,201,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Quote size={20} style={{ color: "#a4c9ff" }} />
                </div>
                <div>
                  <p style={{ fontSize: 15, color: "#c2c6d2", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 12px" }}>&ldquo;Working with Saqib was a game-changer for our startup. He didn&apos;t just code—he contributed ideas, caught edge cases we missed, and delivered a polished product in half the expected timeline.&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, rgba(255,182,141,0.4), rgba(2,86,155,0.3))", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffb68d", fontWeight: 700, fontSize: 13 }}>A</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#e5e2e3" }}>Ahmad Raza</div>
                      <div style={{ fontSize: 12, color: "#A1A1AA" }}>CTO @ TechVentures PK</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <Award size={18} style={{ color: "#5cd4ff" }} />
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#e5e2e3", margin: 0 }}>Certifications</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div key={cert.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="glass-card" style={{ padding: 18, borderRadius: 14, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(164,201,255,0.1)", border: "1px solid rgba(164,201,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Award size={15} style={{ color: "#a4c9ff" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3", lineHeight: 1.4 }}>{cert.title}</div>
                    <div style={{ fontSize: 12, color: "#A1A1AA", marginTop: 4 }}>{cert.issuer} · {cert.year}</div>
                  </div>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card" style={{ padding: 20, borderRadius: 14, marginTop: 8 }}>
                <h4 style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 14px" }}>Key Achievements</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Published 10+ apps on Play Store & App Store", "99.9% crash-free sessions across all apps", "Reduced app load time by 60% via optimization", "Top-rated freelancer on Upwork (4.9★)"].map(a => (
                    <li key={a} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 12, color: "#A1A1AA", lineHeight: 1.5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#a4c9ff", flexShrink: 0, marginTop: 5 }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testi-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .testi-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}