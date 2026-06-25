'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { profile, BRAND_GRAD } from '@/lib/content';

const badgeBase = {
  position: 'absolute' as const,
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 16px',
  background: 'rgba(255,255,255,0.72)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(255,255,255,0.8)',
  borderRadius: 999,
  boxShadow: '0 16px 34px -18px rgba(20,18,12,0.4)',
  fontSize: 13,
  fontWeight: 600,
  whiteSpace: 'nowrap' as const,
};

const BADGES = [
  { label: 'Shopify Expert', dot: '#FF5A1F', pos: { top: '6%', left: '-14%' }, anim: 'vfloat 5s ease-in-out infinite' },
  { label: 'Graphic Designer', dot: '#15140F', pos: { top: '30%', right: '-18%' }, anim: 'vfloat 6s ease-in-out infinite .6s' },
  { label: 'WordPress Designer', dot: '#FF5A1F', pos: { bottom: '20%', left: '-20%' }, anim: 'vfloat 5.4s ease-in-out infinite .3s' },
  { label: 'Brand Identity', dot: '#15140F', pos: { bottom: '4%', right: '-12%' }, anim: 'vfloat 6.2s ease-in-out infinite .9s' },
];

export default function Hero() {
  const { heroStats, heroDescription, heroImage, availability } = profile;

  return (
    <header data-r="hero" style={{ position: 'relative', padding: '150px 24px 60px', textAlign: 'center' }}>
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 680,
          height: 680,
          maxWidth: '90vw',
          background: 'radial-gradient(circle,rgba(255,90,31,0.16),rgba(255,90,31,0) 62%)',
          filter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />

      <div data-r="hero-text" style={{ position: 'relative', maxWidth: 1060, margin: '0 auto' }}>
        <Reveal style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px 8px 10px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(20,18,12,0.07)', borderRadius: 999, marginBottom: 30 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22b07d', boxShadow: '0 0 0 4px rgba(34,176,125,0.18)' }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#3a382f' }}>{availability}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(36px,9vw,118px)', lineHeight: 0.96, letterSpacing: '-0.035em', margin: '0 0 8px' }}>
            {profile.firstName}{' '}
            <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, background: 'linear-gradient(120deg,#FF7A2E,#FF5A1F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              {profile.lastName}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 'clamp(16px,2.4vw,24px)', letterSpacing: '-0.01em', color: '#15140F', margin: '0 0 18px' }}>
            Creative Designer &amp; <span style={{ color: '#FF5A1F' }}>E-commerce Website Specialist</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ maxWidth: 620, margin: '0 auto 34px', fontSize: 'clamp(15px,3.6vw,16px)', lineHeight: 1.7, color: '#6B6862' }}>
            {heroDescription}
          </p>
        </Reveal>

        <Reveal dataR="hero-cta" delay={0.2} style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 64 }}>
          <a href="#portfolio" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 12, background: BRAND_GRAD, color: '#fff', fontWeight: 600, fontSize: 15, padding: '16px 26px', borderRadius: 999, boxShadow: '0 18px 38px -14px rgba(255,90,31,0.65)' }}>
            View Portfolio <span style={{ fontSize: 17 }}>↗</span>
          </a>
          <a href="#contact" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fff', color: '#15140F', fontWeight: 600, fontSize: 15, padding: '16px 26px', borderRadius: 999, border: '1px solid rgba(20,18,12,0.1)' }}>
            Hire Me
          </a>
        </Reveal>
      </div>

      {/* Portrait stage with floating badges */}
      <Reveal dataR="hero-portrait" delay={0.1} y={30} duration={0.9} style={{ position: 'relative', width: 'min(420px,86vw)', margin: '0 auto' }}>
        <div style={{ position: 'absolute', inset: 'auto 0 0 0', top: '14%', borderRadius: '230px 230px 36px 36px', background: 'linear-gradient(160deg,#FF7A2E,#FF5A1F)', zIndex: 0, boxShadow: '0 50px 90px -40px rgba(255,90,31,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', aspectRatio: '1 / 1.16', borderRadius: '230px 230px 36px 36px', overflow: 'hidden' }}>
          <Image src={heroImage} alt={`${profile.name} — ${profile.role}`} fill priority sizes="(max-width: 860px) 72vw, 420px" style={{ objectFit: 'cover' }} />
        </div>

        {BADGES.map((b) => (
          <div key={b.label} data-badge style={{ ...badgeBase, ...b.pos, animation: b.anim }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: b.dot }} />
            {b.label}
          </div>
        ))}

        {/* Rotating hire-me seal */}
        <div style={{ position: 'absolute', zIndex: 3, bottom: '-6%', left: '50%', transform: 'translateX(-50%)', width: 96, height: 96 }}>
          <div style={{ position: 'absolute', inset: 0, animation: 'vspin 14s linear infinite' }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <defs>
                <path id="vcircle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text style={{ fontFamily: 'Manrope', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', fill: '#15140F' }}>
                <textPath href="#vcircle">HIRE ME • LET&apos;S BUILD • HIRE ME • </textPath>
              </text>
            </svg>
          </div>
          <div style={{ position: 'absolute', inset: 26, borderRadius: '50%', background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, boxShadow: '0 12px 24px -8px rgba(255,90,31,0.7)' }}>↗</div>
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal dataR="hero-stats" style={{ maxWidth: 980, margin: '84px auto 0', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {heroStats.map((st) => (
          <div key={st.label} style={{ padding: '24px 16px', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(20,18,12,0.07)', borderRadius: 20, backdropFilter: 'blur(10px)' }}>
            <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', lineHeight: 1, letterSpacing: '-0.03em', background: 'linear-gradient(120deg,#FF7A2E,#FF5A1F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{st.num}</div>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 500, color: '#6B6862', lineHeight: 1.4 }}>{st.label}</div>
          </div>
        ))}
      </Reveal>
    </header>
  );
}
