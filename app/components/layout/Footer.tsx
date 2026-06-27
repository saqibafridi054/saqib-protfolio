"use client";

import { ExternalLink, Link2, AtSign, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/app/lib/data";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (href: string) => document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer aria-labelledby="footer-heading" style={{ background: "#0e0e0f", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 80, paddingBottom: 32 }}>
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* CTA banner */}
        <div className="footer-cta-grid" style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: 20, marginBottom: 80 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass-card" style={{ padding: "48px 48px", borderRadius: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(2,86,155,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 700, color: "#e5e2e3", margin: "0 0 14px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Building the future of mobile with <span className="text-gradient">Flutter.</span>
              </h2>
              <p style={{ fontSize: 16, color: "#A1A1AA", maxWidth: 480, margin: "0 0 28px", lineHeight: 1.65 }}>
                Saqib Afridi crafts high-performance, visually stunning applications that push the boundaries of cross-platform technology.
              </p>
              <a href="mailto:saqibafridiy009@gmail.com" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex" }}>
                Start a Project <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card" style={{ padding: 28, borderRadius: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#5cd4ff", lineHeight: 1, marginBottom: 4 }}>50+</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#e5e2e3", margin: "0 0 8px" }}>Apps Delivered</h3>
              <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.55, margin: 0 }}>Across global markets with 99.9% crash-free sessions.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 20, marginTop: 20, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse-slow 3s ease-in-out infinite" }} />
              <span style={{ fontSize: 13, color: "#A1A1AA" }}>Available for new projects</span>
            </div>
          </motion.div>
        </div>

        {/* Links grid */}
        <div className="footer-links" style={{ display: "grid", gridTemplateColumns: "4fr 3fr 2fr 3fr", gap: 40, marginBottom: 64 }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    go("#home");
  }}
  style={{
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
  }}
>
  <div
    style={{
      width: 36,
      height: 36,
      borderRadius: "50%",
      overflow: "hidden",
      border: "2px solid #02569b",
      flexShrink: 0,
    }}
  >
    <Image
      src="/image/saqib.jpeg" // apni image ka path
      alt="Saqib Afridi"
      width={36}
      height={36}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>

  <span
    style={{
      color: "#e5e2e3",
      fontWeight: 700,
      fontSize: 16,
    }}
  >
    Saqib Afridi
  </span>
</a>
            <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.7, margin: 0 }}>
              Senior Flutter Developer passionate about crafting beautiful, high-performance mobile experiences for iOS and Android.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: SOCIAL_LINKS.github, icon: <ExternalLink size={15} />, label: "GitHub" },
                { href: SOCIAL_LINKS.linkedin, icon: <Link2 size={15} />, label: "LinkedIn" },
                { href: SOCIAL_LINKS.twitter, icon: <AtSign size={15} />, label: "Twitter" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", color: "#c2c6d2", background: "rgba(20,20,22,0.6)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#a4c9ff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(164,201,255,0.3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#c2c6d2"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontSize: 12, fontWeight: 600, color: "#e5e2e3", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 20px" }}>Navigation</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={e => { e.preventDefault(); go(link.href); }}
                    style={{ fontSize: 14, color: "#A1A1AA", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a4c9ff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#A1A1AA")}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: 12, fontWeight: 600, color: "#e5e2e3", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 20px" }}>Services</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {["Flutter Dev", "UI/UX", "Firebase", "API Integration", "Performance", "Maintenance"].map(s => (
                <li key={s}>
                  <a href="#services" onClick={e => { e.preventDefault(); go("#services"); }}
                    style={{ fontSize: 14, color: "#A1A1AA", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a4c9ff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#A1A1AA")}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: 12, fontWeight: 600, color: "#e5e2e3", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 20px" }}>Contact</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: <Mail size={14} />, val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: <Phone size={14} />, val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g,"")}` },
                { icon: <MapPin size={14} />, val: CONTACT_INFO.location, href: null },
              ].map(({ icon, val, href }) => (
                <li key={val}>
                  {href
                    ? <a href={href} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#A1A1AA", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#a4c9ff")} onMouseLeave={e => (e.currentTarget.style.color = "#A1A1AA")}><span style={{ marginTop: 2, flexShrink: 0, color: "#c2c6d2" }}>{icon}</span> <span style={{ wordBreak: "break-all" }}>{val}</span></a>
                    : <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#A1A1AA" }}><span style={{ marginTop: 2, flexShrink: 0, color: "#c2c6d2" }}>{icon}</span> {val}</div>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#A1A1AA", margin: 0 }}>© {year} Saqib Afridi. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: "#A1A1AA", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#e5e2e3")} onMouseLeave={e => (e.currentTarget.style.color = "#A1A1AA")}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-links { grid-template-columns: 1fr 1fr !important; } .footer-cta-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .footer-links { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}