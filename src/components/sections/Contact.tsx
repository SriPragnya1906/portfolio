"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Terminal, Briefcase, Send, CheckCircle2, Loader2 } from "lucide-react";
import { COMMON_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import { BorderBeam } from "@/components/lightswind/border-beam";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";

const TARGET_EMAIL = "sripragnya1906@gmail.com";

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d } },
});

const LINKS = [
  { icon: <Mail size={18} />, label: "Email", sub: TARGET_EMAIL, href: `mailto:${TARGET_EMAIL}` },
  { icon: <Briefcase size={18} />, label: "LinkedIn", sub: "Professional", href: COMMON_LINKS.linkedin, blank: true },
  { icon: <Terminal size={18} />, label: "GitHub", sub: "Open source", href: COMMON_LINKS.github, blank: true },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSending(true);

    // Build mailto with pre-filled template
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Sri Pragnya,\n\nMy name is ${name} and I'd love to connect with you.\n\nYou can reach me at: ${email}\n\nLooking forward to hearing from you!\n\nBest regards,\n${name}`
    );

    // Short delay for visual feedback then open mail client
    setTimeout(() => {
      window.open(`mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`, "_self");
      setSending(false);
      setSent(true);

      // Reset after 4s
      setTimeout(() => {
        setSent(false);
        setName("");
        setEmail("");
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="mesh-orb w-[500px] h-[500px] bg-[rgba(99,102,241,0.04)] top-[-100px] left-1/2 -translate-x-1/2" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div className="mb-6" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="font-mono text-xs text-[#6366f1] tracking-[0.3em] uppercase block mb-4">04 — Contact</span>
        </motion.div>

        <div className="mb-20">
          <ScrollReveal
            size="2xl"
            enableBlur
            blurStrength={6}
            baseOpacity={0.15}
            textClassName="font-heading font-bold text-[#fafafa] leading-[0.95]"
          >
            Let's build something extraordinary.
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl">
          {/* ─── CONTACT FORM ─── */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-8">
              Drop your details and I'll get back to you. Or use the links on the right to connect directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative group">
                <label htmlFor="contact-name" className="block font-mono text-[10px] text-[#71717a] tracking-widest uppercase mb-2">
                  Your Name
                </label>
                <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(99,102,241,0.12)" }}>
                  <BorderBeam colorFrom="#6366f1" colorTo="#818cf8" size={30} duration={5} />
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0c0c12] text-[#fafafa] px-5 py-4 text-sm font-body rounded-xl outline-none placeholder:text-[#3f3f46] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <label htmlFor="contact-email" className="block font-mono text-[10px] text-[#71717a] tracking-widest uppercase mb-2">
                  Your Email
                </label>
                <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(99,102,241,0.12)" }}>
                  <BorderBeam colorFrom="#6366f1" colorTo="#818cf8" size={30} duration={6} delay={1} />
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[#0c0c12] text-[#fafafa] px-5 py-4 text-sm font-body rounded-xl outline-none placeholder:text-[#3f3f46] focus:ring-1 focus:ring-[#6366f1] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Preview of the template */}
              {name && email && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="rounded-xl p-4 overflow-hidden"
                  style={{
                    background: "rgba(99,102,241,0.04)",
                    border: "1px solid rgba(99,102,241,0.08)",
                  }}
                >
                  <div className="font-mono text-[9px] text-[#71717a] tracking-widest uppercase mb-2">Message Preview</div>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed font-mono">
                    Hi Sri Pragnya,<br />
                    My name is <span className="text-[#fafafa]">{name}</span> and I'd love to connect.<br />
                    Reach me at: <span className="text-[#6366f1]">{email}</span>
                  </p>
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending || sent}
                className={`relative w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium text-base overflow-hidden transition-all duration-300 ${
                  sent
                    ? "bg-[rgba(34,197,94,0.15)] border border-[rgba(34,197,94,0.3)] text-[#22c55e]"
                    : "bg-[#6366f1] text-[#fafafa] hover:bg-[#818cf8] hover:shadow-[0_0_50px_rgba(99,102,241,0.4)]"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer sweep */}
                {!sent && (
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                )}

                {sending ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : sent ? (
                  <><CheckCircle2 size={18} /> Mail Client Opened!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>

              <p className="text-[10px] text-[#3f3f46] font-mono text-center">
                Opens your default mail client with a pre-filled message
              </p>
            </form>
          </motion.div>

          {/* ─── SOCIAL CARDS ─── */}
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-sm text-[#71717a] mb-2 font-mono"
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Or connect directly:
            </motion.p>

            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.blank ? "_blank" : undefined}
                rel={link.blank ? "noopener noreferrer" : undefined}
                variants={fadeUp(0.3 + i * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-2xl p-6 flex items-center gap-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                style={{
                  background: "linear-gradient(145deg, rgba(99,102,241,0.05), rgba(5,5,7,0.9))",
                  border: "1px solid rgba(99,102,241,0.08)",
                }}
              >
                <BorderBeam colorFrom="#6366f1" colorTo="#818cf8" size={40} duration={4 + i} delay={i * 0.5} />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-[#6366f1] shrink-0">
                  {link.icon}
                </div>
                <div>
                  <div className="font-medium text-[#fafafa] text-base">{link.label}</div>
                  <div className="text-xs text-[#71717a]">{link.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
