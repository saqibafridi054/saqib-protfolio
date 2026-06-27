"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  delay?: number;
}

export function SectionTitle({ eyebrow, title, subtitle, align = "left", delay = 0 }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      style={{
        marginBottom: 56,
        textAlign: align,
        ...(align === "center" ? { maxWidth: 700, marginLeft: "auto", marginRight: "auto" } : {}),
      }}
    >
      {eyebrow && (
        <div className="eyebrow" style={{
          marginBottom: 16,
          ...(align === "center" ? { justifyContent: "center", display: "inline-flex" } : {}),
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#a4c9ff",
            display: "inline-block", animation: "pulse-slow 3s ease-in-out infinite",
          }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{
        fontSize: "clamp(36px, 5vw, 64px)",
        fontWeight: 700,
        lineHeight: 1.08,
        letterSpacing: "-0.03em",
        color: "#e5e2e3",
        margin: 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 17,
          lineHeight: 1.7,
          color: "#A1A1AA",
          marginTop: 16,
          maxWidth: 620,
          ...(align === "center" ? { marginLeft: "auto", marginRight: "auto" } : {}),
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export function GlassCard({ children, className = "", delay = 0, style }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`glass-card ${className}`}
      style={{ borderRadius: 16, ...style }}
    >
      {children}
    </motion.div>
  );
}

export function SkillTag({ label }: { label: string }) {
  return <span className="skill-tag">{label}</span>;
}