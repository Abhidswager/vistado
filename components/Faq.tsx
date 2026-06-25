'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { faqs, BRAND_GRAD } from '@/lib/content';

export default function Faq() {
  const [open, setOpen] = useState(-1);

  return (
    <section style={{ padding: '90px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <SectionLabel label="FAQs" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            Questions? <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>Look here</span>
          </h2>
        </Reveal>

        <div data-r="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} duration={0.6} y={18}>
                  <div style={{ background: isOpen ? BRAND_GRAD : 'rgba(255,255,255,0.7)', border: isOpen ? '1px solid transparent' : '1px solid rgba(20,18,12,0.07)', borderRadius: 18, overflow: 'hidden', transition: 'background .4s ease', boxShadow: isOpen ? '0 24px 50px -22px rgba(255,90,31,0.5)' : '0 8px 22px -16px rgba(20,18,12,0.16)' }}>
                    <div onClick={() => setOpen(isOpen ? -1 : i)} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 22px', cursor: 'pointer' }}>
                      <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 16, color: isOpen ? '#fff' : '#15140F' }}>{f.q}</span>
                      <span style={{ flex: 1 }} />
                      <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, background: isOpen ? 'rgba(255,255,255,0.2)' : 'rgba(20,18,12,0.06)', color: isOpen ? '#fff' : '#15140F', transition: 'transform .4s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                    </div>
                    <div style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0, transition: 'max-height .5s cubic-bezier(.22,1,.36,1), opacity .4s ease', overflow: 'hidden' }}>
                      <p style={{ margin: 0, padding: '0 22px 22px', fontSize: 14.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal dataR="faq-side" delay={0.1} style={{ position: 'sticky', top: 100, padding: 34, borderRadius: 24, background: '#0E0E10', border: '1px solid #232325', textAlign: 'center', boxShadow: '0 30px 70px -34px rgba(255,90,31,0.4)' }}>
            <div style={{ width: 60, height: 60, margin: '0 auto 18px', borderRadius: 18, background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, boxShadow: '0 16px 32px -12px rgba(255,90,31,0.7)' }}>💬</div>
            <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 10 }}>Still have questions?</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 24 }}>Ask anything about your project. Quick replies, clear quotes — guaranteed.</div>
            <a href="#contact" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND_GRAD, color: '#fff', fontWeight: 600, fontSize: 15, padding: '14px 26px', borderRadius: 999, boxShadow: '0 16px 34px -14px rgba(255,90,31,0.7)' }}>Contact Me ↗</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
