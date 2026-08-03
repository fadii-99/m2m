const PALETTES = [
  ['#D500F9', '#7B1FA2'],
  ['#FF8A65', '#C2185B'],
  ['#4FC3F7', '#1565C0'],
  ['#81C784', '#2E7D32'],
  ['#FFD54F', '#EF6C00'],
  ['#B39DDB', '#512DA8'],
  ['#F06292', '#AD1457'],
  ['#4DD0E1', '#00838F'],
]

function pick(seed) {
  let n = 0
  for (let i = 0; i < seed.length; i += 1) n += seed.charCodeAt(i)
  return PALETTES[n % PALETTES.length]
}

/**
 * Gradient placeholder avatar with initials — stands in for a real photo.
 */
export default function Avatar({ name = 'M', size = 28, className = '', ring = false }) {
  const [from, to] = pick(name)
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <span
      className={`avatar${className ? ` ${className}` : ''}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(9, size * 0.38),
        background: `linear-gradient(140deg, ${from}, ${to})`,
        boxShadow: ring ? '0 0 0 2px #fff, 0 0 0 4px var(--purple-500)' : undefined,
      }}
      aria-hidden="true"
    >
      {initials}
    </span>
  )
}
