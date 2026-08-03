import { useEffect, useMemo, useState } from 'react'
import PhoneFrame from './PhoneFrame'
import Avatar from '../Avatar'
import { IconCheckDouble, IconLock, IconMic, IconPhone, IconSend, IconVideo } from '../Icons'

const GLYPHS = '&%^(*$#@!?/\\|<>{}[]~+='
const TARGET = 'ncrypted message'

function scramble(revealed) {
  return TARGET.split('')
    .map((ch, i) => (i < revealed || ch === ' ' ? ch : GLYPHS[(i * 7 + revealed) % GLYPHS.length]))
    .join('')
}

/** Dark, "Speak freely" end-to-end encryption screen. */
export default function EncryptedMockup() {
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRevealed((v) => (v > TARGET.length + 6 ? 0 : v + 1))
    }, 220)
    return () => clearInterval(id)
  }, [])

  const columns = useMemo(
    () =>
      Array.from({ length: 11 }, (_, c) =>
        Array.from(
          { length: 26 },
          (_, r) => GLYPHS[(c * 5 + r * 3) % GLYPHS.length]
        ).join('\n')
      ),
    []
  )

  return (
    <PhoneFrame size="lg" dark lightStatus className="float-slow">
      <div className="appbar" style={{ background: '#241b2a' }}>
        <Avatar name="Adil" size={30} />
        <div>
          <div className="appbar__title">Adil</div>
          <div className="appbar__sub">online</div>
        </div>
        <div className="appbar__actions">
          <IconVideo width="15" height="15" />
          <IconPhone width="15" height="15" />
        </div>
      </div>

      <div className="chat chat--dark">
        <span className="lockbar">
          <IconLock width="9" height="9" /> Messages are end-to-end encrypted
        </span>

        <div className="bubble">
          Did you get the documents?
          <span className="bubble__time">21:04</span>
        </div>
        <div className="bubble bubble--out">
          Yes  nobody else can read them.
          <span className="bubble__time">
            21:05 <IconCheckDouble width="10" height="10" color="#7fd8ff" />
          </span>
        </div>
        <div className="bubble">
          That's the whole point 🔒
          <span className="bubble__time">21:05</span>
        </div>

        <div className="cipher" aria-hidden="true">
          <div className="cipher__rain">
            {columns.map((col, i) => (
              <span
                key={i}
                className="cipher__col"
                style={{
                  animationDuration: `${5 + (i % 5) * 1.6}s`,
                  animationDelay: `${-i * 0.7}s`,
                  opacity: 0.35 + (i % 3) * 0.2,
                }}
              >
                {col}
              </span>
            ))}
          </div>
          <span className="cipher__word">{scramble(revealed)}</span>
        </div>
      </div>

      <div className="composer">
        <div className="composer__field">
          <span style={{ flex: 1 }}>Type a message</span>
          <IconMic width="13" height="13" />
        </div>
        <span className="composer__send">
          <IconSend width="14" height="14" />
        </span>
      </div>
    </PhoneFrame>
  )
}
