/**
 * GlowLayer — globaler Ambient-Glow für alle Seiten.
 * 12 Orbs mit je eigener Farbe, Position, Größe, Geschwindigkeit
 * und Animations-Phase → natürliches „Aufglühen & Verblassen".
 */

const orbs = [
  // Rote Orbs
  { color: '#FF3B3B', w: 720, h: 720, top: '-8%',  left: '-6%',   anim: 'glow-c', dur: '26s', delay: '0s'   },
  { color: '#FF6B6B', w: 420, h: 420, top: '55%',  left: '-4%',   anim: 'glow-b', dur: '19s', delay: '5s'   },
  { color: '#FF3B3B', w: 340, h: 340, top: '80%',  left: '55%',   anim: 'glow-d', dur: '14s', delay: '2s'   },
  // Lila / Violett Orbs
  { color: '#7C3AED', w: 680, h: 680, top: '-4%',  right: '-8%',  anim: 'glow-a', dur: '30s', delay: '4s'   },
  { color: '#A78BFA', w: 500, h: 500, top: '35%',  right: '-5%',  anim: 'glow-e', dur: '22s', delay: '9s'   },
  { color: '#7C3AED', w: 780, h: 780, top: '70%',  left: '20%',   anim: 'glow-c', dur: '34s', delay: '1s'   },
  // Amber / Gold Orbs
  { color: '#F59E0B', w: 560, h: 560, top: '25%',  left: '30%',   anim: 'glow-b', dur: '28s', delay: '7s'   },
  { color: '#FCD34D', w: 300, h: 300, top: '10%',  left: '50%',   anim: 'glow-d', dur: '16s', delay: '11s'  },
  // Blau / Cyan Orbs (Akzent)
  { color: '#60A5FA', w: 380, h: 380, top: '45%',  left: '60%',   anim: 'glow-e', dur: '21s', delay: '3s'   },
  { color: '#38BDF8', w: 260, h: 260, top: '88%',  right: '10%',  anim: 'glow-d', dur: '17s', delay: '13s'  },
  // Große Basis-Orbs (sehr diffus, sehr dezent)
  { color: '#7C3AED', w: 900, h: 600, top: '40%',  left: '-15%',  anim: 'glow-a', dur: '40s', delay: '6s'   },
  { color: '#FF3B3B', w: 850, h: 550, top: '60%',  right: '-20%', anim: 'glow-c', dur: '38s', delay: '15s'  },
]

export default function GlowLayer() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {orbs.map((o, i) => (
        <div
          key={i}
          style={{
            position:     'absolute',
            top:          o.top,
            left:         'left' in o ? (o as { left?: string }).left : undefined,
            right:        'right' in o ? (o as { right?: string }).right : undefined,
            width:        o.w,
            height:       o.h,
            borderRadius: '50%',
            background:   `radial-gradient(ellipse, ${o.color} 0%, transparent 70%)`,
            filter:       'blur(80px)',
            animation:    `${o.anim} ${o.dur} ease-in-out infinite`,
            animationDelay: o.delay,
            willChange:   'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
