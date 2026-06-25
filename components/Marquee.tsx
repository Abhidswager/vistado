import { profile } from '@/lib/content';

interface MarqueeProps {
  words: string[];
  rotate: number;
  duration: number;
  reverse?: boolean;
  dim?: boolean;
  marginTop?: number;
  marginBottom?: number;
}

/** Diagonal infinite marquee band (reused twice on the page). */
export default function Marquee({
  words,
  rotate,
  duration,
  reverse = false,
  dim = false,
  marginTop = 60,
  marginBottom = 60,
}: MarqueeProps) {
  const color = dim ? 'rgba(255,255,255,0.35)' : '#fff';
  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 42, paddingRight: 42 }}
      aria-hidden={hidden || undefined}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: 'contents' }}>
          <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 24, color, whiteSpace: 'nowrap' }}>{w}</span>
          <span style={{ color: '#FF5A1F', fontSize: 18 }}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      style={{
        background: '#15140F',
        padding: `${dim ? 20 : 22}px 0`,
        overflow: 'hidden',
        transform: `rotate(${rotate}deg)`,
        marginTop,
        marginBottom,
        width: '108%',
        marginLeft: '-4%',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `vmarquee ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
        }}
      >
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

/** Convenience: default page marquee word list. */
export const marqueeWords = profile.marqueeWords;
