"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight, ExternalLink, Link2, AtSign, CheckCircle, AlertCircle } from "lucide-react";
import { SectionTitle } from "@/app/components/ui";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/app/lib/data";

function sanitize(s: string) { return s.replace(/[<>]/g, "").trim(); }
function validEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

const inputStyle: React.CSSProperties = {
  width: "100%", background: "rgba(14,14,15,0.8)", border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12, padding: "13px 16px", fontSize: 15, color: "#e5e2e3",
  outline: "none", transition: "border-color 0.2s", fontFamily: "inherit",
};

export default function ContactSection() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (d: FormData) => {
    const e: Record<string, string> = {};
    if (!sanitize(d.get("name") as string) || (d.get("name") as string).length < 2) e.name = "Name must be at least 2 characters.";
    if (!validEmail(d.get("email") as string)) e.email = "Please enter a valid email address.";
    if (!sanitize(d.get("subject") as string) || (d.get("subject") as string).length < 3) e.subject = "Subject must be at least 3 characters.";
    if (!sanitize(d.get("message") as string) || (d.get("message") as string).length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("success");
    formRef.current?.reset();
  };

  const infos = [
    { icon: <Phone size={17} />, color: "#a4c9ff", bg: "rgba(164,201,255,0.1)", label: "Direct Line", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g,"")}`, cta: "Call now" },
    { icon: <Mail size={17} />, color: "#5cd4ff", bg: "rgba(92,212,255,0.1)", label: "Email Node", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, cta: "Send email" },
    { icon: <MapPin size={17} />, color: "#ffb68d", bg: "rgba(255,182,141,0.1)", label: "Base Location", value: CONTACT_INFO.location, href: null, cta: "Remote-friendly" },
  ];

  return (
    <section id="contact" style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none", zIndex: 0, width: 600, height: 600, left: "20%", top: "-10%", opacity: 0.2, background: "radial-gradient(circle, rgba(2,86,155,0.35) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", zIndex: 0, width: 400, height: 400, right: "15%", bottom: "-5%", opacity: 0.15, background: "radial-gradient(circle, rgba(0,180,225,0.2) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <SectionTitle
          eyebrow="Get In Touch"
          title={<>Let&apos;s Build Something <span className="text-gradient">Together</span></>}
          subtitle="Have a project in mind? I'd love to hear from you. I typically respond within 24 hours."
        />

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 24, alignItems: "start" }}>
          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {infos.map(({ icon, color, bg, label, value, href, cta }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card" style={{ padding: 22, borderRadius: 18 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#e5e2e3", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: "#A1A1AA", fontFamily: "monospace", wordBreak: "break-all" }}>{value}</div>
                {href
                  ? <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 12, fontSize: 13, color: "#a4c9ff", textDecoration: "none" }}>{cta} <ArrowRight size={12} /></a>
                  : <span style={{ display: "block", marginTop: 12, fontSize: 13, color: "#a4c9ff" }}>{cta}</span>
                }
              </motion.div>
            ))}

            {/* Availability + socials */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card" style={{ padding: 22, borderRadius: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse-slow 3s ease-in-out infinite" }} />
                <span style={{ fontSize: 13, color: "#4ade80", fontWeight: 500 }}>Available Now</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#e5e2e3", marginBottom: 4 }}>Availability</div>
              <div style={{ fontSize: 13, color: "#A1A1AA", marginBottom: 16 }}>{CONTACT_INFO.availability}</div>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { href: SOCIAL_LINKS.github, icon: <ExternalLink size={14} />, label: "GitHub" },
                  { href: SOCIAL_LINKS.linkedin, icon: <Link2 size={14} />, label: "LinkedIn" },
                  { href: SOCIAL_LINKS.twitter, icon: <AtSign size={14} />, label: "Twitter" },
                ].map(({ href, icon, label }) => (
                  <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                    style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", color: "#c2c6d2", background: "rgba(20,20,22,0.6)", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#a4c9ff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(164,201,255,0.3)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#c2c6d2"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >{icon}</a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-card" style={{ padding: 36, borderRadius: 24 }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: "#e5e2e3", margin: "0 0 24px" }}>Send a Message</h3>

            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "48px 0", gap: 16 }}>
                <CheckCircle size={48} style={{ color: "#4ade80" }} />
                <h4 style={{ fontSize: 22, fontWeight: 600, color: "#e5e2e3", margin: 0 }}>Message Sent!</h4>
                <p style={{ fontSize: 15, color: "#A1A1AA", maxWidth: 320, margin: 0 }}>Thank you! I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="btn-ghost" style={{ marginTop: 16, padding: "10px 24px" }}>Send another</button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { id: "name", label: "Full Name", type: "text", ph: "Saqib Afridi", ac: "name" },
                    { id: "email", label: "Email Address", type: "email", ph: "you@example.com", ac: "email" },
                  ].map(({ id, label, type, ph, ac }) => (
                    <div key={id}>
                      <label htmlFor={id} style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#e5e2e3", marginBottom: 8 }}>
                        {label} <span style={{ color: "#f87171" }}>*</span>
                      </label>
                      <input id={id} name={id} type={type} autoComplete={ac} placeholder={ph}
                        style={{ ...inputStyle, borderColor: errors[id] ? "rgba(248,113,113,0.5)" : undefined }}
                        onFocus={e => (e.target.style.borderColor = "#a4c9ff")}
                        onBlur={e => (e.target.style.borderColor = errors[id] ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)")}
                      />
                      {errors[id] && <p style={{ fontSize: 12, color: "#f87171", margin: "6px 0 0" }}>{errors[id]}</p>}
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="subject" style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#e5e2e3", marginBottom: 8 }}>
                    Subject <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input id="subject" name="subject" type="text" placeholder="Flutter app development project"
                    style={{ ...inputStyle, borderColor: errors.subject ? "rgba(248,113,113,0.5)" : undefined }}
                    onFocus={e => (e.target.style.borderColor = "#a4c9ff")}
                    onBlur={e => (e.target.style.borderColor = errors.subject ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)")}
                  />
                  {errors.subject && <p style={{ fontSize: 12, color: "#f87171", margin: "6px 0 0" }}>{errors.subject}</p>}
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="message" style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#e5e2e3", marginBottom: 8 }}>
                    Message <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project, goals, and timeline..."
                    style={{ ...inputStyle, resize: "none", borderColor: errors.message ? "rgba(248,113,113,0.5)" : undefined }}
                    onFocus={e => (e.target.style.borderColor = "#a4c9ff")}
                    onBlur={e => (e.target.style.borderColor = errors.message ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)")}
                  />
                  {errors.message && <p style={{ fontSize: 12, color: "#f87171", margin: "6px 0 0" }}>{errors.message}</p>}
                </div>

                {status === "error" && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f87171", fontSize: 14, padding: 12, borderRadius: 10, border: "1px solid rgba(248,113,113,0.2)", marginBottom: 16 }}>
                    <AlertCircle size={15} /> Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" disabled={status === "sending"} className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.65 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}>
                  {status === "sending" ? (
                    <><svg className="spin" style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24"><circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending...</>
                  ) : (<>Send Message <Send size={16} /></>)}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.8s linear infinite; }
      `}</style>
    </section>
  );
}