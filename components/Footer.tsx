import { profile, BRAND_GRAD } from '@/lib/content';

const QUICK_LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const { social, contact, footerNote } = profile;
  const socials = [
    { label: 'in', href: social.linkedin },
    { label: 'Ig', href: social.instagram },
    { label: 'Be', href: social.behance },
    { label: 'f', href: social.facebook },
  ];

  return (
    <footer style={{ background: '#0E0E10', padding: '70px 24px 30px', color: '#fff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div data-r="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ width: 38, height: 38, borderRadius: '50%', background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Sora', fontWeight: 800, fontSize: 18 }}>V</span>
              <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 22 }}>Vistado<span style={{ color: '#FF5A1F' }}>.</span></span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 340, margin: '0 0 22px' }}>{footerNote}</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>{s.label}</a>
              ))}
              <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" style={{ width: 42, height: 42, borderRadius: 12, background: BRAND_GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: 16 }}>💬</a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 15, marginBottom: 18, color: '#FF8A4D' }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              {QUICK_LINKS.map((l) => (
                <a key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{l.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 15, marginBottom: 18, color: '#FF8A4D' }}>Get in Touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
              <div>{contact.email}</div>
              <div>{contact.whatsappDisplay}</div>
              <div>{contact.location} · GST Registered</div>
              <a href="#contact" style={{ marginTop: 6, display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 8, color: '#FF8A4D', textDecoration: 'none', fontWeight: 600 }}>Start a project ↗</a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
          <div>© {new Date().getFullYear()} Vistado · {profile.name}. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Terms &amp; Conditions</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
