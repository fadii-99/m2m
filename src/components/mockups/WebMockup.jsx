import Avatar from '../Avatar'
import PhoneFrame from './PhoneFrame'
import { IconMicOff, IconPhoneOff, IconSearch, IconVideo } from '../Icons'

const ROWS = [
  { name: 'Weekend Trip 🏔️', msg: 'Bilal: I\'ll bring the speaker', badge: '4', active: true },
  { name: 'Ayesha', msg: 'See you at 6 ✨', badge: '' },
  { name: 'Design Standup', msg: 'You: shared 3 photos', badge: '2' },
  { name: 'Mama ❤️', msg: 'Voice message · 0:32', badge: '' },
]

const TILES = ['Ayesha', 'Bilal', 'Hina', 'Adil', 'Sana R', 'Zoya']

/** Desktop browser window with a group video call + companion phone. */
export default function WebMockup() {
  return (
    <div className="desk">
      <div className="window">
        <div className="window__bar">
          <i />
          <i />
          <i />
          <span
            style={{
              marginLeft: 10,
              fontSize: 9.5,
              color: 'var(--text-muted)',
              background: '#fff',
              borderRadius: 999,
              padding: '3px 12px',
            }}
          >
            web.m2m.com
          </span>
        </div>

        <div className="window__body">
          <div className="sidebar">
            <div className="searchbar">
              <IconSearch width="11" height="11" />
              <span>Search or start a new chat</span>
            </div>
            {ROWS.map((r) => (
              <div key={r.name} className={`chatrow${r.active ? ' is-active' : ''}`}>
                <Avatar name={r.name} size={26} />
                <span className="chatrow__t">
                  <span className="chatrow__name">{r.name}</span>
                  <span className="chatrow__msg">{r.msg}</span>
                </span>
                {r.badge && <span className="chatrow__badge">{r.badge}</span>}
              </div>
            ))}
          </div>

          <div className="callgrid">
            {TILES.map((t, i) => (
              <div key={t} className={`tile${i === 1 ? ' tile--speaking' : ''}`}>
                <span>{t}</span>
              </div>
            ))}
            <div
              style={{
                gridColumn: '1 / -1',
                display: 'flex',
                justifyContent: 'center',
                gap: 8,
                paddingTop: 2,
              }}
            >
              <span className="callbtn" style={{ width: 28, height: 28 }}>
                <IconMicOff width="13" height="13" />
              </span>
              <span className="callbtn" style={{ width: 28, height: 28 }}>
                <IconVideo width="13" height="13" />
              </span>
              <span className="callbtn callbtn--end" style={{ width: 28, height: 28 }}>
                <IconPhoneOff width="13" height="13" style={{ transform: 'rotate(135deg)' }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <PhoneFrame className="desk__phone" lightStatus time="10:36">
        <div className="callscreen">
          <div className="callscreen__photo" />
          <div className="callscreen__info" style={{ paddingBottom: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 700 }}>Design Standup</div>
            <div style={{ fontSize: 7.5, opacity: 0.8 }}>6 on the call</div>
          </div>
          <div className="callbar" style={{ padding: '6px 6px 12px', gap: 5 }}>
            <span className="callbtn" style={{ width: 20, height: 20 }}>
              <IconMicOff width="10" height="10" />
            </span>
            <span className="callbtn callbtn--end" style={{ width: 20, height: 20 }}>
              <IconPhoneOff width="10" height="10" style={{ transform: 'rotate(135deg)' }} />
            </span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}
