import PhoneFrame from './PhoneFrame'
import Avatar from '../Avatar'
import { IconCamera, IconMic, IconMore, IconSend } from '../Icons'

/** Status / stories screen  used by the "Say what you feel" section. */
export default function StatusMockup() {
  return (
    <PhoneFrame lightStatus className="float-slow">
      <div className="status-screen">
        <div className="status-screen__photo" />

        <div className="story-bars">
          <i className="is-done" />
          <i className="is-active" />
          <i />
          <i />
        </div>

        <div className="story-head">
          <Avatar name="Sana R" size={26} ring />
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700 }}>Sana</div>
            <div style={{ fontSize: 8.5, opacity: 0.75 }}>12 minutes ago</div>
          </div>
          <span style={{ marginLeft: 'auto', opacity: 0.85 }}>
            <IconMore width="14" height="14" />
          </span>
        </div>

        <div style={{ position: 'relative', padding: '0 12px', marginTop: 6 }}>
          <div className="voice-note" style={{ alignSelf: 'flex-start', maxWidth: '100%' }}>
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: 'var(--purple-700)',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                flex: 'none',
              }}
            >
              <IconMic width="11" height="11" />
            </span>
            <span className="wave" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <i key={i} style={{ animationDelay: `${i * 0.07}s` }} />
              ))}
            </span>
            <span style={{ fontSize: 8.5, color: 'var(--purple-800)', fontWeight: 700 }}>0:14</span>
          </div>
        </div>

        <div className="story-caption">Sunset on the last day of the trip ✨</div>

        <div className="story-reply">
          <span className="story-reply__field">Reply to Sana…</span>
          <span style={{ color: '#fff', opacity: 0.9 }}>
            <IconCamera width="15" height="15" />
          </span>
          <span style={{ color: '#fff', opacity: 0.9 }}>
            <IconSend width="15" height="15" />
          </span>
        </div>
      </div>
    </PhoneFrame>
  )
}
