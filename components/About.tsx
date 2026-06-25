'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { profile, BRAND_GRAD } from '@/lib/content';

export default function About() {
  const { about, aboutStats, aboutImage } = profile;

  return (
    <section id="about" style={{ padding: '80px 24px 100px' }}>
      <div data-r="about-grid" style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
        <Reveal style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -22, left: -22, width: 120, height: 120, borderRadius: '50%', background: BRAND_GRAD, opacity: 0.14, filter: 'blur(6px)' }} />
          <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4 / 5', boxShadow: '0 40px 80px -40px rgba(20,18,12,0.4)' }}>
            <Image src={aboutImage} alt={`${profile.name} at work`} fill sizes="(max-width: 860px) 100vw, 470px" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 22, left: 22, display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(14px)', borderRadius: 16, boxShadow: '0 16px 30px -16px rgba(20,18,12,0.4)' }}>
            <span style={{ width: 42, height: 42, borderRadius: 12, background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Sora', fontWeight: 800, fontSize: 16 }}>V</span>
            <div>
              <div style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 15 }}>Founder, Vistado</div>
              <div style={{ fontSize: 12, color: '#6B6862' }}>GST Registered Business</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionLabel label="About Me" />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.4vw,50px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: '0 0 24px' }}>
            {about.headingPre}
            <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>{about.headingEm}</span>
            {about.headingPost}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: '#56534c', margin: i === about.paragraphs.length - 1 ? '0 0 32px' : '0 0 18px' }}>{p}</p>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
            {aboutStats.map((st) => (
              <div key={st.label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', background: '#fff', border: '1px solid rgba(20,18,12,0.06)', borderRadius: 16 }}>
                <span style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 26, letterSpacing: '-0.03em', color: '#FF5A1F' }}>{st.num}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: '#56534c', lineHeight: 1.3 }}>{st.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
