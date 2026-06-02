/**
 * GlowLayer — dezente Sterne die leicht pulsieren.
 * Kleine Lichtpunkte verteilt über die gesamte Seite.
 */

// 42 Sterne: Position (%), Farbe, Größe, Dauer, Verzögerung
const stars = [
  // Weiße / neutrale Sterne
  { x:  4,  y:  8, c: '#FFFFFF', s: 2, d: '4.2s', dl: '0.0s' },
  { x: 12,  y: 22, c: '#FFFFFF', s: 1, d: '5.8s', dl: '1.3s' },
  { x: 23,  y:  5, c: '#FFFFFF', s: 2, d: '3.9s', dl: '2.7s' },
  { x: 35,  y: 18, c: '#F5F3FF', s: 1, d: '6.1s', dl: '0.5s' },
  { x: 48,  y:  3, c: '#FFFFFF', s: 2, d: '4.7s', dl: '3.2s' },
  { x: 57,  y: 14, c: '#FFFFFF', s: 1, d: '5.3s', dl: '1.9s' },
  { x: 67,  y:  7, c: '#F5F3FF', s: 2, d: '3.6s', dl: '0.8s' },
  { x: 78,  y: 20, c: '#FFFFFF', s: 1, d: '6.4s', dl: '4.1s' },
  { x: 89,  y:  9, c: '#FFFFFF', s: 2, d: '4.0s', dl: '2.2s' },
  { x: 94,  y: 24, c: '#F5F3FF', s: 1, d: '5.6s', dl: '0.3s' },
  { x:  8,  y: 38, c: '#FFFFFF', s: 2, d: '4.5s', dl: '3.7s' },
  { x: 19,  y: 52, c: '#FFFFFF', s: 1, d: '5.9s', dl: '1.1s' },
  { x: 31,  y: 44, c: '#F5F3FF', s: 2, d: '3.8s', dl: '2.5s' },
  { x: 44,  y: 60, c: '#FFFFFF', s: 1, d: '6.2s', dl: '0.6s' },
  { x: 55,  y: 36, c: '#FFFFFF', s: 2, d: '4.3s', dl: '4.4s' },
  { x: 63,  y: 55, c: '#F5F3FF', s: 1, d: '5.1s', dl: '1.8s' },
  { x: 74,  y: 42, c: '#FFFFFF', s: 2, d: '3.7s', dl: '3.0s' },
  { x: 85,  y: 58, c: '#FFFFFF', s: 1, d: '6.0s', dl: '0.9s' },
  { x: 92,  y: 48, c: '#F5F3FF', s: 2, d: '4.6s', dl: '2.1s' },
  { x:  3,  y: 72, c: '#FFFFFF', s: 1, d: '5.4s', dl: '3.5s' },
  { x: 16,  y: 85, c: '#FFFFFF', s: 2, d: '4.1s', dl: '1.4s' },
  { x: 28,  y: 78, c: '#F5F3FF', s: 1, d: '6.3s', dl: '0.2s' },
  { x: 41,  y: 92, c: '#FFFFFF', s: 2, d: '3.5s', dl: '4.8s' },
  { x: 52,  y: 75, c: '#FFFFFF', s: 1, d: '5.7s', dl: '2.4s' },
  { x: 61,  y: 88, c: '#F5F3FF', s: 2, d: '4.4s', dl: '1.0s' },
  { x: 73,  y: 70, c: '#FFFFFF', s: 1, d: '5.0s', dl: '3.6s' },
  { x: 83,  y: 82, c: '#FFFFFF', s: 2, d: '3.9s', dl: '0.7s' },
  { x: 91,  y: 93, c: '#F5F3FF', s: 1, d: '6.5s', dl: '2.9s' },
  // Leicht rötliche Sterne
  { x: 18,  y: 11, c: '#FFB8B8', s: 2, d: '5.2s', dl: '1.6s' },
  { x: 42,  y: 29, c: '#FFD0D0', s: 1, d: '4.8s', dl: '3.3s' },
  { x: 71,  y: 47, c: '#FFB8B8', s: 2, d: '5.5s', dl: '0.4s' },
  { x: 88,  y: 65, c: '#FFD0D0', s: 1, d: '4.0s', dl: '2.0s' },
  { x:  6,  y: 62, c: '#FFB8B8', s: 2, d: '6.0s', dl: '4.5s' },
  // Leicht violette Sterne
  { x: 30,  y: 33, c: '#C4B5FD', s: 2, d: '5.0s', dl: '0.1s' },
  { x: 58,  y: 68, c: '#DDD6FE', s: 1, d: '4.6s', dl: '2.8s' },
  { x: 80,  y: 30, c: '#C4B5FD', s: 2, d: '5.3s', dl: '1.5s' },
  { x: 15,  y: 95, c: '#DDD6FE', s: 1, d: '3.8s', dl: '3.9s' },
  { x: 96,  y: 76, c: '#C4B5FD', s: 2, d: '5.9s', dl: '0.6s' },
  // Leicht goldene Sterne
  { x: 50,  y: 82, c: '#FDE68A', s: 1, d: '4.9s', dl: '2.3s' },
  { x: 25,  y: 65, c: '#FEF3C7', s: 2, d: '5.6s', dl: '1.2s' },
  { x: 76,  y: 12, c: '#FDE68A', s: 1, d: '4.2s', dl: '4.0s' },
  { x: 39,  y: 48, c: '#FEF3C7', s: 2, d: '5.8s', dl: '0.9s' },
]

export default function GlowLayer() {
  return (
    <div
      aria-hidden="true"
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        0,
        pointerEvents: 'none',
        overflow:      'hidden',
      }}
    >
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position:        'absolute',
            left:            `${s.x}%`,
            top:             `${s.y}%`,
            width:           s.s,
            height:          s.s,
            borderRadius:    '50%',
            background:      s.c,
            boxShadow:       `0 0 ${s.s * 3}px ${s.s}px ${s.c}80`,
            animation:       `star-pulse ${s.d} ease-in-out infinite`,
            animationDelay:  s.dl,
            willChange:      'opacity, transform',
          }}
        />
      ))}
    </div>
  )
}
