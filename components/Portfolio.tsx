'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { projects, BRAND_GRAD } from '@/lib/content';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const visible = projects.items.filter((p) => filter === 'All' || p.category === filter);

  return (
    <section id="portfolio" style={{ padding: '90px 24px', background: '#0E0E10', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, right: -80, width: 420, height: 420, background: 'radial-gradient(circle,rgba(255,90,31,0.22),transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1180, margin: '0 auto', position: 'relative' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 38 }}>
          <SectionLabel label="Selected Work" center />
          <h2 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0, color: '#fff' }}>
            A Look at My <span style={{ fontFamily: "'Instrument Serif'", fontStyle: 'italic', fontWeight: 400, color: '#FF5A1F' }}>Portfolio</span>
          </h2>
        </Reveal>

        <Reveal dataR="pf-filter" duration={0.7} y={20} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
          {projects.categories.map((c) => {
            const active = c === filter;
            return (
              <span
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  padding: '11px 20px',
                  borderRadius: 999,
                  whiteSpace: 'nowrap',
                  transition: 'all .3s ease',
                  background: active ? BRAND_GRAD : 'rgba(255,255,255,0.7)',
                  color: active ? '#fff' : '#56534c',
                  border: active ? '1px solid transparent' : '1px solid rgba(20,18,12,0.08)',
                  boxShadow: active ? '0 14px 28px -14px rgba(255,90,31,0.6)' : 'none',
                }}
              >
                {c}
              </span>
            );
          })}
        </Reveal>

        <div data-r="pf-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                style={{ textDecoration: 'none', borderRadius: 22, overflow: 'hidden', background: '#161618', border: '1px solid #232325', display: 'block' }}
              >
                <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                  <Image src={p.image} alt={`${p.name} — ${p.category}`} fill loading="lazy" sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 380px" style={{ objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: 14, left: 14, fontSize: 11.5, fontWeight: 600, color: '#fff', background: 'rgba(14,14,16,0.7)', backdropFilter: 'blur(8px)', padding: '7px 13px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)' }}>{p.category}</span>
                </div>
                <div style={{ padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 17, color: '#fff' }}>{p.name}</div>
                    <div style={{ fontSize: 12.5, color: '#8a8a8e', marginTop: 2 }}>View Project</div>
                  </div>
                  <span style={{ width: 42, height: 42, borderRadius: '50%', background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 17, flexShrink: 0 }}>↗</span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
