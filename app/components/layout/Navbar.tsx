"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/app/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(19,19,20,0.92)" : "rgba(19,19,20,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            height: 72,
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); go("#home"); }}
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "#02569b",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, fontFamily: "monospace" }}>SA</span>
            </div>
            <span style={{ color: "#e5e2e3", fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>
              Saqib Afridi
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); go(link.href); }}
                  style={{
                    color: isActive ? "#a4c9ff" : "#c2c6d2",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 14,
                    letterSpacing: "0.01em",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    position: "relative",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 2,
                        borderRadius: 2,
                        background: "#a4c9ff",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="mailto:saqibafridiy009@gmail.com"
              className="btn-primary desktop-cta"
              style={{ padding: "8px 22px", fontSize: 14 }}
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="mobile-toggle"
              style={{
                display: "none",
                width: 40, height: 40,
                alignItems: "center", justifyContent: "center",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                color: "#c2c6d2",
                cursor: "pointer",
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              zIndex: 49,
              background: "rgba(19,19,20,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "12px 20px 20px",
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); go(link.href); }}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    borderRadius: 10,
                    marginBottom: 4,
                    color: isActive ? "#a4c9ff" : "#c2c6d2",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 16,
                    textDecoration: "none",
                    background: isActive ? "rgba(164,201,255,0.08)" : "transparent",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="mailto:saqibafridiy009@gmail.com"
              className="btn-primary"
              style={{ display: "block", textAlign: "center", marginTop: 12, textDecoration: "none" }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}