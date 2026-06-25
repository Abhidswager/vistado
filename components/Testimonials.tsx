'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '90px 24px 100px', background: 'linear-gradient(180deg,#efe9e0,#F4F1EC)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <SectionLabel label="Client Testimonials" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            What My <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>Clients Say</span>
          </h2>
        </Reveal>

        <div data-r="testi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} duration={0.7} delay={(i % 3) * 0.05} style={{ padding: 30, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(20,18,12,0.07)', borderRadius: 24, backdropFilter: 'blur(12px)', boxShadow: '0 16px 44px -28px rgba(20,18,12,0.28)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative', boxShadow: '0 8px 18px -8px rgba(20,18,12,0.4)' }}>
                    <Image src={t.avatar} alt={t.name} fill loading="lazy" sizes="52px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontSize: 12.5, color: '#6B6862' }}>{t.role}</div>
                  </div>
                </div>
                <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontSize: 44, lineHeight: 0.6, color: '#FF5A1F', opacity: 0.5 }}>&rdquo;</span>
              </div>
              <div style={{ display: 'flex', gap: 3, marginBottom: 14, color: '#FF5A1F', fontSize: 15 }}>
                {'★'.repeat(t.rating)}
                <span style={{ color: '#15140F', fontWeight: 600, marginLeft: 4, fontSize: 13 }}>{t.rating.toFixed(1)}</span>
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: '#56534c' }}>{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
