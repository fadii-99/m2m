import Reveal from './Reveal'

const STATS = [
  { value: '180+', label: 'Countries where M2M works' },
  { value: '1024', label: 'People in a single group' },
  { value: '32', label: 'Participants on one video call' },
  { value: '100%', label: 'Messages end-to-end encrypted' },
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
