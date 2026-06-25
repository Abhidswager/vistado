'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { services, BRAND_GRAD } from '@/lib/content';

const ORANGE = '#FF5A1F';

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" style={{ padding: '90px 24px', background: 'linear-gradient(180deg,#F4F1EC,#efe9e0)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <SectionLabel label="What I Do" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            Services I <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: ORANGE }}>Provide</span>
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {services.map((s, i) => {
            const isOpen = open === i;
            const cardStyle: CSSProperties = {
              background: isOpen ? '#0E0E10' : 'rgba(255,255,255,0.66)',
              border: isOpen ? '1px solid #211f22' : '1px solid rgba(20,18,12,0.07)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: isOpen ? '0 36px 80px -28px rgba(255,90,31,0.4)' : '0 12px 30px -20px rgba(20,18,12,0.18)',
              transition: 'background .45s ease, box-shadow .45s ease, border-color .45s ease',
              backdropFilter: 'blur(12px)',
            };
            const chip: CSSProperties = {
              fontFamily: 'Manrope',
              fontSize: 13,
              fontWeight: 500,
              padding: '9px 16px',
              borderRadius: 999,
              background: isOpen ? 'rgba(255,255,255,0.08)' : 'rgba(20,18,12,0.05)',
              color: isOpen ? '#fff' : '#15140F',
              border: isOpen ? '1px solid rgba(255,255,255,0.14)' : '1px solid rgba(20,18,12,0.08)',
            };
            return (
              <Reveal key={s.num} duration={0.7}>
                <div style={cardStyle}>
                  <div
                    data-r="svc-head"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{ display: 'flex', alignItems: 'center', gap: 22, padding: '26px 28px', cursor: 'pointer' }}
                  >
                    <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: isOpen ? ORANGE : '#B7B2A8', minWidth: 44 }}>{s.num}</span>
                    <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 'clamp(19px,2.4vw,27px)', letterSpacing: '-0.01em', color: isOpen ? '#fff' : '#15140F' }}>{s.title}</span>
                    <span style={{ flex: 1 }} />
                    <span style={{ width: 46, height: 46, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, background: isOpen ? BRAND_GRAD : 'rgba(20,18,12,0.06)', color: isOpen ? '#fff' : '#15140F', transition: 'transform .4s ease, background .4s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                  </div>
                  <div style={{ maxHeight: isOpen ? 460 : 0, opacity: isOpen ? 1 : 0, transition: 'max-height .55s cubic-bezier(.22,1,.36,1), opacity .45s ease', overflow: 'hidden' }}>
                    <div data-r="svc-panel" style={{ display: 'flex', flexWrap: 'wrap', gap: 30, padding: '4px 28px 30px', alignItems: 'stretch' }}>
                      <div style={{ flex: 1.2, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <p style={{ fontFamily: 'Manrope', fontSize: 15, lineHeight: 1.7, color: isOpen ? 'rgba(255,255,255,0.6)' : '#6B6862', margin: 0, maxWidth: 440 }}>{s.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                          {s.features.map((f) => (
                            <span key={f} style={chip}>{f}</span>
                          ))}
                        </div>
                      </div>
                      <div data-r="svc-img" style={{ flex: 1, minWidth: 240, borderRadius: 18, overflow: 'hidden', minHeight: 190, position: 'relative' }}>
                        {isOpen && (
                          <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 860px) 100vw, 360px" style={{ objectFit: 'cover' }} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
