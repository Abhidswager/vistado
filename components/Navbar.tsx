'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile, BRAND_GRAD } from '@/lib/content';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Reviews' },
];

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Vistado"
      width={180}
      height={50}
      priority
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const social = profile.social;

  return (
    <>
      <nav
        data-r="nav"
        style={{
          position: 'fixed',
          top: 18,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: 'calc(100% - 36px)',
          maxWidth: 1240,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px 12px 22px',
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.7)',
          borderRadius: 999,
          boxShadow: '0 16px 40px -22px rgba(20,18,12,0.28)',
        }}
      >
        <a href="#top" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo />
        </a>

        <div data-r="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ textDecoration: 'none', color: '#3a382f', fontSize: 14, fontWeight: 600, padding: '9px 15px', borderRadius: 999 }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          data-r="navcta"
          href="#contact"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            background: '#15140F',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            padding: '11px 20px',
            borderRadius: 999,
          }}
        >
          Contact Me <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#FF5A1F' }} />
        </a>

        <button
          data-r="burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            width: 46,
            height: 46,
            border: 'none',
            borderRadius: '50%',
            background: '#15140F',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span style={{ width: 18, height: 2, background: '#fff', borderRadius: 2, display: 'block' }} />
          <span style={{ width: 18, height: 2, background: '#fff', borderRadius: 2, display: 'block' }} />
          <span style={{ width: 18, height: 2, background: '#fff', borderRadius: 2, display: 'block' }} />
        </button>
      </nav>

      {/* ===== Mobile full-screen menu ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 24px calc(28px + env(safe-area-inset-bottom))',
              background: 'linear-gradient(165deg,#161618,#0E0E10)',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
              <Logo size={36} fontSize={20} light />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.16)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  fontSize: 20,
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', margin: 'auto 0' }}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: 30,
                    letterSpacing: '-0.02em',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.09)',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: BRAND_GRAD,
                color: '#fff',
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: 16,
                padding: 17,
                borderRadius: 999,
                textDecoration: 'none',
                boxShadow: '0 16px 34px -14px rgba(255,90,31,0.7)',
              }}
            >
              Get in Touch <span>↗</span>
            </a>

            <div style={{ display: 'flex', gap: 10, marginTop: 22, justifyContent: 'center' }}>
              {[
                { label: 'in', href: social.linkedin },
                { label: 'Ig', href: social.instagram },
                { label: 'Be', href: social.behance },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {s.label}
                </a>
              ))}
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: BRAND_GRAD,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 16,
                  textDecoration: 'none',
                }}
              >
                💬
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
