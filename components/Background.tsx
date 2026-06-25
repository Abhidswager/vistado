'use client';

import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { profile, BRAND_GRAD } from '@/lib/content';

export default function Background() {
  const { education, experience } = profile;

  return (
    <section id="experience" style={{ padding: '80px 24px 100px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 54 }}>
          <SectionLabel label="Background" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            Education &amp; <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>Experience</span>
          </h2>
        </Reveal>

        <div data-r="two-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {/* Education */}
          <Reveal dataR="card" style={{ padding: 34, background: 'rgba(255,255,255,0.66)', border: '1px solid rgba(20,18,12,0.07)', borderRadius: 26, backdropFilter: 'blur(12px)', boxShadow: '0 20px 50px -30px rgba(20,18,12,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
              <span style={{ width: 48, height: 48, borderRadius: 14, background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, boxShadow: '0 12px 24px -10px rgba(255,90,31,0.6)' }}>🎓</span>
              <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 22, margin: 0 }}>Education</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {education.map((ed) => (
                <div key={ed.school} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '18px 0', borderTop: '1px solid rgba(20,18,12,0.08)' }}>
                  <div>
                    <div style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 16, marginBottom: 3 }}>{ed.school}</div>
                    <div style={{ fontSize: 13.5, color: '#6B6862' }}>{ed.degree}</div>
                  </div>
                  <span style={{ flexShrink: 0, fontSize: 12, fontWeight: 600, color: '#fff', background: '#15140F', padding: '7px 13px', borderRadius: 999, whiteSpace: 'nowrap' }}>{ed.years}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal dataR="card" delay={0.1} style={{ padding: 34, background: '#0E0E10', border: '1px solid #211f22', borderRadius: 26, boxShadow: '0 30px 70px -34px rgba(255,90,31,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
              <span style={{ width: 48, height: 48, borderRadius: 14, background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22 }}>💼</span>
              <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 22, margin: 0, color: '#fff' }}>Professional Experience</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {experience.map((ex) => (
                <div key={ex.company} style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 12 }}>
                    <div>
                      <div style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 17, color: '#fff', marginBottom: 3 }}>{ex.company}</div>
                      <div style={{ fontSize: 13.5, color: '#FF8A4D' }}>{ex.role}</div>
                    </div>
                    <span style={{ flexShrink: 0, fontSize: 12, fontWeight: 600, background: BRAND_GRAD, padding: '7px 13px', borderRadius: 999, whiteSpace: 'nowrap', color: '#fff' }}>{ex.years}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {ex.tasks.map((t) => (
                      <span key={t} style={{ fontSize: 12.5, fontWeight: 500, color: 'rgba(255,255,255,0.78)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '7px 13px', borderRadius: 999 }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
