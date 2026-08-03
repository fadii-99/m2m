/* Muted, brand-friendly palettes so a wall of tiles never turns into a rainbow. */
const BACKDROPS = [
  ['#8f6f9e', '#3a2745'],
  ['#a1806a', '#463122'],
  ['#7f8ba1', '#2e3745'],
  ['#9d7f8e', '#432c3a'],
  ['#8a9a80', '#313b2c'],
  ['#a98d72', '#4a3626'],
  ['#7d6f9e', '#302748'],
]

const SKIN = ['#efc49f', '#dda87c', '#c08857', '#9a6740', '#f3d2b4', '#7d5231']
const CLOTH = ['#2f2836', '#4a3a52', '#5f4b5c', '#39434f', '#4f3843', '#2a333d']
const HAIR = ['#241a20', '#3b2a21', '#15121a', '#4a3326', '#2a2030']

/**
 * Stand-in for a participant's camera feed  a person on a softly lit
 * background. Deterministic per `seed` so tiles stay stable between renders.
 */
export default function Portrait({
  seed = 0,
  className = '',
  style,
  children,
  dark = false,
  /** Figure scale relative to the tile's smaller side  bump it for close-ups. */
  size,
}) {
  const i = Math.abs(Math.round(seed))
  const [bgA, bgB] = BACKDROPS[i % BACKDROPS.length]

  return (
    <div
      className={`portrait${dark ? ' portrait--dark' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--p-bg-a': bgA,
        '--p-bg-b': bgB,
        '--p-face': SKIN[(i * 3) % SKIN.length],
        '--p-cloth': CLOTH[(i * 5) % CLOTH.length],
        '--p-hair': HAIR[(i * 7) % HAIR.length],
        '--p-shift': `${((i * 13) % 14) - 7}%`,
        ...(size ? { '--p-size': size } : null),
        ...style,
      }}
    >
      <span className="portrait__person">
        <span className="portrait__body" />
        <span className="portrait__head" />
      </span>
      <span className="portrait__veil" />
      {children}
    </div>
  )
}
