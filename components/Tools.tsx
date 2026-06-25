'use client';

import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { profile } from '@/lib/content';

export default function Tools() {
  const { tools } = profile;

  return (
    <section style={{ padding: '90px 24px 100px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel label="My Favorite Tools" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            Tools That <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>Power My Work</span>
          </h2>
        </Reveal>

        <div data-r="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 18 }}>
          {tools.map((t) => (
            <Reveal key={t.name} duration={0.7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '26px 12px', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(20,18,12,0.06)', borderRadius: 22, backdropFilter: 'blur(10px)' }}>
              <div style={{ width: 98, height: 98, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `conic-gradient(#FF5A1F ${t.pct * 3.6}deg, rgba(20,18,12,0.08) ${t.pct * 3.6}deg)` }}>
                <div style={{ width: 74, height: 74, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora', fontWeight: 800, fontSize: 19, color: '#15140F' }}>{t.pct}%</div>
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#15140F' }}>{t.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
