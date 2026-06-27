"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, ExternalLink, Link2, Smartphone, Code2, Layers } from "lucide-react";
import { SOCIAL_LINKS } from "@/app/lib/data";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 72,
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0,
        width: 600, height: 600, left: "20%", top: "-10%",
        background: "radial-gradient(circle, rgba(2,86,155,0.35) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        width: 400, height: 400, right: "15%", bottom: "-5%",
        background: "radial-gradient(circle, rgba(0,180,225,0.2) 0%, transparent 70%)",
      }} />
      {/* Grid */}
      <div className="grid-subtle" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none", zIndex: 0 }} />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1200, margin: "0 auto",
        padding: "60px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
        width: "100%",
      }} className="hero-grid">

        {/* ── LEFT: Text ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div className="eyebrow" style={{ width: "fit-content" }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#4ade80", display: "inline-block",
                animation: "pulse-slow 3s ease-in-out infinite",
              }} />
              Available for freelance
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "#e5e2e3",
            margin: 0,
          }}>
            Senior{" "}
            <span className="text-gradient">Flutter</span>
            <br />
            Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={item} style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "#A1A1AA",
            maxWidth: 520,
            margin: 0,
          }}>
            I build high-performance, pixel-perfect mobile applications for iOS &amp; Android.
            4+ years crafting beautiful Flutter experiences that users love.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 4 }}>
            <button className="btn-primary" onClick={() => go("contact")}>
              Let&apos;s Work Together
            </button>
            <button className="btn-ghost" onClick={() => go("projects")}>
              View Projects
            </button>
          </motion.div>

          {/* Stats + socials */}
          <motion.div variants={item} style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 32,
            paddingTop: 28,
            marginTop: 4,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { value: "50+", label: "Apps Delivered" },
              { value: "4+", label: "Years Exp." },
              { value: "30+", label: "Happy Clients" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#a4c9ff", lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 13, color: "#A1A1AA", marginTop: 4 }}>{label}</div>
              </div>
            ))}

            <div style={{ display: "flex", gap: 10, marginLeft: "auto" }}>
              {[
                { href: SOCIAL_LINKS.github, icon: <ExternalLink size={16} />, label: "GitHub" },
                { href: SOCIAL_LINKS.linkedin, icon: <Link2 size={16} />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#c2c6d2",
                    background: "rgba(20,20,22,0.6)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#a4c9ff";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(164,201,255,0.35)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "#c2c6d2";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Visual ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 500,
          }}
        >
          {/* Glow behind orb */}
          <div style={{
            position: "absolute",
            width: 360, height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(2,86,155,0.25) 0%, transparent 70%)",
            filter: "blur(24px)",
          }} />

          {/* Central avatar */}
<div style={{
  position: "relative",
  width: 280, height: 280,
  borderRadius: "50%",
  border: "2px solid rgba(164,201,255,0.3)",
  zIndex: 2,
  overflow: "hidden",
  boxShadow: "0 0 40px rgba(2,86,155,0.4), 0 0 80px rgba(2,86,155,0.15)",
}}>
  <img
    src="/image/saqib.jpeg"
    alt="Saqib Afridi"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
    }}
  />
  {/* Subtle blue overlay to blend with dark theme */}
  <div style={{
    position: "absolute", inset: 0,
    background: "linear-gradient(to bottom, transparent 60%, rgba(2,86,155,0.3) 100%)",
    pointerEvents: "none",
  }} />
</div>

          {/* Floating card: Flutter Expert */}
          <div className="animate-float glass-card" style={{
            position: "absolute", top: 40, right: 20,
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 16px", borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: 3,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "rgba(164,201,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#a4c9ff", flexShrink: 0,
            }}>
              <Smartphone size={16} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3", lineHeight: 1.3 }}>Flutter Expert</div>
              <div style={{ fontSize: 11, color: "#A1A1AA" }}>Cross-platform</div>
            </div>
          </div>

          {/* Floating card: Clean Code */}
          <div className="animate-float-d1 glass-card" style={{
            position: "absolute", bottom: 100, left: 10,
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 16px", borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: 3,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "rgba(92,212,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#5cd4ff", flexShrink: 0,
            }}>
              <Code2 size={16} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3", lineHeight: 1.3 }}>Clean Code</div>
              <div style={{ fontSize: 11, color: "#A1A1AA" }}>Architecture</div>
            </div>
          </div>

          {/* Floating card: 50+ Apps */}
          <div className="animate-float-d2 glass-card" style={{
            position: "absolute", top: "38%", right: -10,
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 16px", borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: 3,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "rgba(255,182,141,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#ffb68d", flexShrink: 0,
            }}>
              <Layers size={16} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#e5e2e3", lineHeight: 1.3 }}>50+ Apps</div>
              <div style={{ fontSize: 11, color: "#A1A1AA" }}>Delivered</div>
            </div>
          </div>

          {/* Orbit rings */}
          <div style={{
            position: "absolute", inset: 40,
            borderRadius: "50%", border: "1px solid rgba(164,201,255,0.06)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            borderRadius: "50%", border: "1px solid rgba(164,201,255,0.04)",
            pointerEvents: "none",
          }} />
        </motion.div>
      </div>

      {/* Scroll indicator — pinned at bottom center */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => go("about")}
        aria-label="Scroll to About"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#A1A1AA",
          zIndex: 10,
          transition: "color 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "#a4c9ff")}
        onMouseLeave={e => (e.currentTarget.style.color = "#A1A1AA")}
      >
        <span style={{ fontSize: 13, fontWeight: 500 }}>Scroll down</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={17} />
        </motion.div>
      </motion.button>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px 80px !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-grid {
            padding: 32px 20px 80px !important;
          }
        }
      `}</style>
    </section>
  );
}