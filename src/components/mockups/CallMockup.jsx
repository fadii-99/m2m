import { useEffect, useState } from 'react'
import PhoneFrame from './PhoneFrame'
import { IconCamera, IconMicOff, IconPhoneOff, IconVideo } from '../Icons'

function useTicker(start = 128) {
  const [s, setS] = useState(start)
  useEffect(() => {
    const id = setInterval(() => setS((v) => v + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const mm = String(Math.floor(s / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

/** Video call screen  used by the "voice and video calls" section. */
export default function CallMockup() {
  const timer = useTicker()

  return (
    <PhoneFrame lightStatus className="float-slow">
      <div className="callscreen">
        <div className="callscreen__photo" />
        <div className="callscreen__pip" />

        <div className="callscreen__info">
          <div className="callscreen__name">Family ❤️</div>
          <div className="callscreen__timer">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#22c55e',
                display: 'inline-block',
              }}
            />
            End-to-end encrypted · {timer}
          </div>
        </div>

        <div className="callbar">
          <button className="callbtn" aria-label="Mute">
            <IconMicOff width="16" height="16" />
          </button>
          <button className="callbtn" aria-label="Switch camera">
            <IconCamera width="16" height="16" />
          </button>
          <button className="callbtn" aria-label="Video">
            <IconVideo width="16" height="16" />
            <span className="ring" />
          </button>
          <button className="callbtn callbtn--end" aria-label="End call">
            <IconPhoneOff width="16" height="16" style={{ transform: 'rotate(135deg)' }} />
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}
