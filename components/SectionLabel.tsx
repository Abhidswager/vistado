import type { CSSProperties } from 'react';

interface SectionLabelProps {
  label: string;
  /** show flanking dashes on both sides (centered headings) */
  center?: boolean;
}

const dash: CSSProperties = { width: 28, height: 2, background: '#FF5A1F' };
const text: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: '#FF5A1F',
};

/** The orange eyebrow label used above every section heading. */
export default function SectionLabel({ label, center = false }: SectionLabelProps) {
  if (center) {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span style={dash} />
        <span style={text}>{label}</span>
        <span style={dash} />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
      <span style={dash} />
      <span style={text}>{label}</span>
    </div>
  );
}
