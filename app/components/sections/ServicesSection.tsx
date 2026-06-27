"use client";

import { motion } from "framer-motion";
import { Smartphone, Layers, Flame, Plug, Zap, Wrench, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/app/components/ui";
import { SERVICES } from "@/app/lib/data";

const icons: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={22} />, Layers: <Layers size={22} />, Flame: <Flame size={22} />,
  Plug: <Plug size={22} />, Zap: <Zap size={22} />, Wrench: <Wrench size={22} />,
};
const colors = [
  { color: "#a4c9ff", bg: "rgba(164,201,255,0.1)" },
  { color: "#5cd4ff", bg: "rgba(92,212,255,0.1)" },
  { color: "#ffb68d", bg: "rgba(255,182,141,0.1)" },
  { color: "#a4c9ff", bg: "rgba(164,201,255,0.1)" },
  { color: "#5cd4ff", bg: "rgba(92,212,255,0.1)" },
  { color: "#ffb68d", bg: "rgba(255,182,141,0.1)" },
];

export default function ServicesSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        width: 600, height: 600, right: 0, top: 0, opacity: 0.18,
        background: "radial-gradient(circle, rgba(0,180,225,0.25) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center" }}>
          <SectionTitle
            eyebrow="What I Offer"
            title={<>Services Built for <span className="text-gradient">Real Results</span></>}
            subtitle="From concept to App Store—every service you need to ship a world-class mobile application."
            align="center"
          />
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="glass-card"
              style={{ padding: 28, borderRadius: 20, display: "flex", flexDirection: "column" }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: colors[i].bg, color: colors[i].color,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18, border: `1px solid ${colors[i].color}25`,
                transition: "transform 0.3s",
              }}>{icons[svc.icon]}</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#e5e2e3", margin: "0 0 10px" }}>{svc.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#A1A1AA", margin: "0", flex: 1 }}>{svc.description}</p>
              <button
                onClick={() => go("contact")}
                style={{
                  marginTop: 20, display: "flex", alignItems: "center", gap: 6,
                  color: "#a4c9ff", fontSize: 14, fontWeight: 500, background: "none",
                  border: "none", cursor: "pointer", padding: 0, transition: "gap 0.3s",
                }}
              >
                Get started <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card"
          style={{
            marginTop: 48, padding: "56px 48px", borderRadius: 24,
            textAlign: "center", position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none",
            background: "radial-gradient(ellipse at center top, rgba(2,86,155,0.4) 0%, transparent 70%)",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#e5e2e3", margin: "0 0 14px", letterSpacing: "-0.02em" }}>
              Have an App Idea?
            </h2>
            <p style={{ fontSize: 17, color: "#A1A1AA", maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.65 }}>
              Let&apos;s turn your vision into a production-ready Flutter app. I handle everything from architecture to deployment.
            </p>
            <button onClick={() => go("contact")} className="btn-primary">
              Start a Conversation <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}