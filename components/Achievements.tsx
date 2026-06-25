'use client';

import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { profile, BRAND_GRAD } from '@/lib/content';

export default function Achievements() {
  const { achievements } = profile;

  return (
    <section style={{ padding: '90px 24px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <SectionLabel label="Recognition" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            Achievements &amp; <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>Certifications</span>
          </h2>
        </Reveal>

        <div data-r="two-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {achievements.map((ac, i) => (
            <Reveal key={ac.org} dataR="card" delay={i * 0.05} style={{ position: 'relative', padding: 34, borderRadius: 24, background: 'rgba(255,255,255,0.66)', border: '1px solid rgba(20,18,12,0.07)', backdropFilter: 'blur(12px)', boxShadow: '0 20px 50px -30px rgba(20,18,12,0.3)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -30, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,90,31,0.16),transparent 70%)' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <span style={{ width: 54, height: 54, borderRadius: 16, background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24, boxShadow: '0 14px 28px -12px rgba(255,90,31,0.6)' }}>🏆</span>
                  <div>
                    <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 18 }}>{ac.org}</div>
                    <div style={{ fontSize: 13, color: '#FF5A1F', fontWeight: 600 }}>{ac.date}</div>
                  </div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#15140F', marginBottom: 10, lineHeight: 1.4 }}>{ac.title}</div>
                <div style={{ fontSize: 13, color: '#6B6862', fontFamily: 'Manrope' }}>{ac.cred}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
