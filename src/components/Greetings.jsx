import Reveal from './Reveal'
import Avatar from './Avatar'

/** Floating "hello" bubbles from around the world. */
const BUBBLES = [
  { text: 'Bonjour', meta: '13:42', name: 'Camille', left: '4%', top: '6%', d: '0s' },
  { text: 'Hallo Freunde', meta: '09:10', name: 'Lukas', right: '6%', top: '0%', d: '1.4s' },
  { text: 'Привет', meta: '18:20', name: 'Nadia', left: '17%', top: '38%', d: '0.7s' },
  { text: 'Hola!', meta: '11:05', name: 'Mateo', right: '22%', top: '34%', d: '2.1s' },
  { text: 'السلام علیکم', meta: '20:15', name: 'Rehan', left: '2%', top: '68%', d: '1.1s' },
  { text: 'こんにちは', meta: '07:48', name: 'Yui', right: '4%', top: '64%', d: '2.6s' },
  { text: 'Olá', meta: '15:33', name: 'Ines', left: '44%', top: '82%', d: '1.8s' },
  { text: 'Merhaba', meta: '12:02', name: 'Deniz', left: '38%', top: '14%', d: '0.4s' },
]

export default function Greetings() {
  return (
    <section className="section-tight greet">
      <div className="container">
        <Reveal>
          <h2 className="greet__title">
            With private messaging and calling, you can be yourself, speak freely and feel
            close to the most important people in your life no matter where they are.
          </h2>
        </Reveal>

        <div className="greet__field" aria-hidden="true">
          {BUBBLES.map((b, i) => (
            <Reveal
              key={b.name}
              className="greet__bubble"
              delay={i * 90}
              style={{
                left: b.left,
                right: b.right,
                top: b.top,
                animationDelay: b.d,
              }}
            >
              <Avatar name={b.name} size={26} />
              <span>
                {b.text} <small>{b.meta}</small>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
