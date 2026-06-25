'use client';

import { useState, type FormEvent } from 'react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { profile, BRAND_GRAD } from '@/lib/content';

/* ════════════════════════════════════════════════════════════════
   🔧 FORMSPREE SETUP
   1. Create a form at https://formspree.io
   2. Replace the value below with your endpoint, e.g.
      https://formspree.io/f/abcdwxyz
   (Or set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local — it wins.)
   ════════════════════════════════════════════════════════════════ */
const FORMSPREE_ENDPOINT =
process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mdareadq';

const labelStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 8,
  fontSize: 12.5,
  fontWeight: 600,
  color: 'rgba(255,255,255,0.6)',
};
const fieldStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 12,
  padding: '13px 15px',
  color: '#fff',
  fontFamily: 'Manrope',
  fontSize: 14,
  outline: 'none',
};

const SERVICE_OPTIONS = ['Logo Design', 'Social Media Design', 'Shopify Website', 'WordPress Website', 'Advertising Design', 'Packaging Design'];
const BUDGET_OPTIONS = ['₹5,000 – ₹15,000', '₹15,000 – ₹40,000', '₹40,000 – ₹1,00,000', '₹1,00,000+'];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { contact } = profile;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;

    // If the endpoint hasn't been configured yet, just show the success state
    // so the UI still behaves (no network call to a placeholder URL).
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      setSent(true);
      form.reset();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError('Something went wrong. Please email me directly.');
      }
    } catch {
      setError('Network error. Please email me directly.');
    } finally {
      setSubmitting(false);
    }
  }

  const infoRows = [
    { icon: '👤', label: 'Founder', value: contact.founder },
    { icon: '✉', label: 'Email', value: contact.email },
    { icon: '💬', label: 'WhatsApp', value: contact.whatsappDisplay },
    { icon: '📍', label: 'Location', value: contact.location },
  ];

  return (
    <section id="contact" style={{ padding: '90px 24px 110px', background: '#0E0E10', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: -140, left: -100, width: 460, height: 460, background: 'radial-gradient(circle,rgba(255,90,31,0.2),transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <SectionLabel label="Contact Me" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0, color: '#fff' }}>
            Let&apos;s Build <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>Something Great</span>
          </h2>
        </Reveal>

        <div data-r="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 26, alignItems: 'stretch' }}>
          {/* form */}
          <Reveal dataR="card">
            <form onSubmit={handleSubmit} style={{ padding: 36, background: '#161618', border: '1px solid #232325', borderRadius: 26 }}>
              <div data-r="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <label style={labelStyle}>Name
                  <input type="text" name="name" placeholder="Your full name" required style={fieldStyle} />
                </label>
                <label style={labelStyle}>Email
                  <input type="email" name="email" placeholder="you@email.com" required style={fieldStyle} />
                </label>
                <label style={labelStyle}>Phone Number
                  <input type="tel" name="phone" placeholder="+91 00000 00000" style={fieldStyle} />
                </label>
                <label style={labelStyle}>Service Interested In
                  <select name="service" style={fieldStyle} defaultValue={SERVICE_OPTIONS[0]}>
                    {SERVICE_OPTIONS.map((o) => <option key={o} style={{ color: '#000' }}>{o}</option>)}
                  </select>
                </label>
                <label style={labelStyle}>Budget Range
                  <select name="budget" style={fieldStyle} defaultValue={BUDGET_OPTIONS[0]}>
                    {BUDGET_OPTIONS.map((o) => <option key={o} style={{ color: '#000' }}>{o}</option>)}
                  </select>
                </label>
                <label style={labelStyle}>Location
                  <input type="text" name="location" placeholder="City, Country" style={fieldStyle} />
                </label>
              </div>
              <label style={{ ...labelStyle, marginTop: 16 }}>Message
                <textarea name="message" rows={4} placeholder="Tell me about your project…" required style={{ ...fieldStyle, resize: 'vertical' }} />
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 22, alignItems: 'center' }}>
                <button type="submit" disabled={submitting} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND_GRAD, color: '#fff', fontFamily: 'Manrope', fontWeight: 600, fontSize: 15, padding: '15px 26px', border: 'none', borderRadius: 999, cursor: submitting ? 'wait' : 'pointer', boxShadow: '0 16px 34px -14px rgba(255,90,31,0.7)', opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? 'Sending…' : 'Send Message'} <span>↗</span>
                </button>
                <a href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.07)', color: '#fff', fontWeight: 600, fontSize: 15, padding: '15px 26px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.14)' }}>Hire Me</a>
                {sent && <span style={{ fontSize: 13, color: '#22b07d', fontWeight: 600 }}>✓ Thanks! I&apos;ll get back to you shortly.</span>}
                {error && <span style={{ fontSize: 13, color: '#ff6b6b', fontWeight: 600 }}>{error}</span>}
              </div>
            </form>
          </Reveal>

          {/* info card */}
          <Reveal dataR="card" delay={0.1} style={{ padding: 36, borderRadius: 26, background: 'linear-gradient(155deg,#FF7A2E,#FF5A1F)', display: 'flex', flexDirection: 'column', gap: 22, boxShadow: '0 30px 70px -30px rgba(255,90,31,0.6)' }}>
            <div>
              <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 6 }}>Vistado</div>
              <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{contact.brandTagline}</div>
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.25)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 14, color: '#fff' }}>
              {infoRows.map((r) => (
                <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>{r.icon}</span>
                  <div>
                    <div style={{ fontSize: 11.5, opacity: 0.8 }}>{r.label}</div>
                    <div style={{ fontWeight: 600 }}>{r.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'auto', display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.18)', padding: '9px 16px', borderRadius: 999, fontSize: 12.5, fontWeight: 600, color: '#fff' }}>✓ {contact.gstNote}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
