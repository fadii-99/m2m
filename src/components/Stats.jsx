import Reveal from './Reveal'

const STATS = [
  { value: '180+', label: 'Countries where M2M works' },
  { value: '50 MB', label: 'Largest file you can send' },
  { value: '0', label: 'Time limits on your calls' },
  { value: '24h', label: 'Before a status disappears' },
]

export default function Stats() {
  return (
    <section className="section-tight">
      <div className="container stats">
        {STATS.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 110}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
