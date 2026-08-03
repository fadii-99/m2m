import PhoneFrame from '../mockups/PhoneFrame'
import Portrait from '../Portrait'
import Avatar from '../Avatar'
import {
  IconExpand,
  IconMicOff,
  IconMore,
  IconPhoneOff,
  IconScreenShare,
  IconSearch,
  IconSpeaker,
  IconSwitchCamera,
  IconUserPlus,
  IconVideo,
} from '../Icons'

const End = (p) => <IconPhoneOff style={{ transform: 'rotate(135deg)' }} {...p} />

function CallBar({ compact = false }) {
  const s = compact ? 13 : 15
  return (
    <div className="vcall__bar">
      <button className="vcall__btn" aria-label="More">
        <IconMore width={s} height={s} />
      </button>
      <button className="vcall__btn" aria-label="Share screen">
        <IconScreenShare width={s} height={s} />
      </button>
      <button className="vcall__btn vcall__btn--on" aria-label="Speaker">
        <IconSpeaker width={s} height={s} />
      </button>
      <button className="vcall__btn" aria-label="Mute">
        <IconMicOff width={s} height={s} />
      </button>
      <button className="vcall__btn vcall__btn--end" aria-label="End call">
        <End width={s} height={s} />
      </button>
    </div>
  )
}

/* ---------- 1. hero: 3-up group video call ---------- */
export function HeroCallPhone() {
  return (
    <PhoneFrame size="lg" lightStatus className="float-slow">
      <div className="vcall">
        <div className="vcall__top">
          <span className="vcall__chip">
            <IconExpand width="13" height="13" />
          </span>
          <span className="vcall__chip">
            <IconUserPlus width="13" height="13" />
          </span>
        </div>

        <div className="vcall__stage vcall__stage--hero">
          <Portrait seed={2}>
            <span className="portrait__tag">Ayesha · Bilal</span>
          </Portrait>
          <Portrait seed={5}>
            <span className="portrait__tag">Hina</span>
          </Portrait>
          <Portrait seed={9}>
            <span className="portrait__tag">Zoya</span>
          </Portrait>
        </div>

        <div className="vcall__self">
          <Portrait seed={13} dark style={{ position: 'absolute', inset: 0 }} />
        </div>

        <CallBar />
      </div>
    </PhoneFrame>
  )
}

/* ---------- 2. two overlapping phones, 1:1 calls ---------- */
function OneToOne({ seed, self, name }) {
  return (
    <PhoneFrame dark lightStatus>
      <div className="vcall">
        <Portrait seed={seed} size="178cqmin" style={{ position: 'absolute', inset: 0 }} />
        <div className="vcall__self" style={{ bottom: 66, width: 54 }}>
          <Portrait seed={self} dark style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 62,
            zIndex: 6,
            textAlign: 'center',
            color: '#fff',
            fontSize: 10,
            fontWeight: 700,
            textShadow: '0 2px 8px rgba(0,0,0,.7)',
          }}
        >
          {name}
        </div>
        <div className="vcall__bar" style={{ gap: 5, padding: '6px 7px' }}>
          <button className="vcall__btn" style={{ width: 24, height: 24 }} aria-label="Flip camera">
            <IconSwitchCamera width="12" height="12" />
          </button>
          <button className="vcall__btn" style={{ width: 24, height: 24 }} aria-label="Video">
            <IconVideo width="12" height="12" />
          </button>
          <button className="vcall__btn" style={{ width: 24, height: 24 }} aria-label="Mute">
            <IconMicOff width="12" height="12" />
          </button>
          <button
            className="vcall__btn vcall__btn--end"
            style={{ width: 34, height: 24 }}
            aria-label="End call"
          >
            <End width="12" height="12" />
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}

export function DuoPhones() {
  return (
    <div className="duo float-slow">
      <OneToOne seed={4} self={17} name="Sana" />
      <OneToOne seed={11} self={6} name="Adil" />
    </div>
  )
}

/* ---------- 3. laptop + phone ---------- */
export function DevicesTrio() {
  return (
    <div className="devices">
      <div className="laptop">
        <div className="laptop__lid">
          <div className="laptop__screen">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 4,
                padding: 6,
                flex: 1,
              }}
            >
              {[1, 3, 6, 8, 12, 15].map((s, i) => (
                <Portrait key={s} seed={s} style={{ borderRadius: 5 }}>
                  {i === 0 && <span className="portrait__tag">You</span>}
                </Portrait>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 5,
                padding: '0 0 7px',
              }}
            >
              <span className="vcall__btn" style={{ width: 20, height: 20 }}>
                <IconMicOff width="10" height="10" />
              </span>
              <span className="vcall__btn" style={{ width: 20, height: 20 }}>
                <IconVideo width="10" height="10" />
              </span>
              <span className="vcall__btn vcall__btn--end" style={{ width: 28, height: 20 }}>
                <End width="10" height="10" />
              </span>
            </div>
          </div>
        </div>
        <div className="laptop__base" />
      </div>

      <PhoneFrame className="devices__phone" lightStatus>
        <div className="vcall">
          <div className="vcall__stage" style={{ gridTemplateColumns: '1fr' }}>
            <Portrait seed={7} />
            <Portrait seed={19} />
          </div>
          <div className="vcall__bar" style={{ gap: 4, padding: '5px 6px', bottom: 8 }}>
            <span className="vcall__btn" style={{ width: 18, height: 18 }}>
              <IconMicOff width="9" height="9" />
            </span>
            <span className="vcall__btn vcall__btn--end" style={{ width: 26, height: 18 }}>
              <End width="9" height="9" />
            </span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}

/* ---------- 4. group call grid (3 × 3) ---------- */
export function GroupGridPhone() {
  return (
    <PhoneFrame size="lg" lightStatus className="float-slow">
      <div className="vcall">
        <div className="vcall__top">
          <span className="vcall__chip">
            <IconExpand width="13" height="13" />
          </span>
          <span className="vcall__chip">
            <IconUserPlus width="13" height="13" />
          </span>
        </div>

        <div className="vcall__stage vcall__stage--grid">
          {['Ayesha', 'Bilal', 'Hina', 'Adil', 'Sana', 'Zoya', 'Rehan', 'Yui', 'Mateo'].map(
            (n, i) => (
              <Portrait key={n} seed={i * 3 + 2} size="145cqmin" style={{ borderRadius: 9 }}>
                <span className="portrait__tag">{n}</span>
              </Portrait>
            )
          )}
        </div>

        <CallBar compact />
      </div>
    </PhoneFrame>
  )
}

/* ---------- 5. screen sharing ---------- */
export function ScreenShareMock() {
  return (
    <div className="share float-slow">
      <div className="share__inner">
        <div className="share__strip">
          {[2, 5, 8, 11, 14, 17, 20].map((s) => (
            <Portrait key={s} seed={s} />
          ))}
        </div>

        <div className="share__stage">
          <div className="room">
            <span className="room__wall" />
            <span className="room__art" />
            <span className="room__floor" />
            <span className="room__lamp" />
            <span className="room__sofa" />
          </div>
          <span
            style={{
              position: 'absolute',
              left: 8,
              top: 8,
              background: 'rgba(20,14,24,.7)',
              color: '#fff',
              fontSize: 8,
              fontWeight: 600,
              padding: '3px 8px',
              borderRadius: 999,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <IconScreenShare width="9" height="9" /> Ayesha is sharing
          </span>
        </div>

        <div className="share__bar">
          <span className="vcall__btn" style={{ width: 24, height: 24 }}>
            <IconMicOff width="12" height="12" />
          </span>
          <span className="vcall__btn" style={{ width: 24, height: 24 }}>
            <IconVideo width="12" height="12" />
          </span>
          <span className="vcall__btn vcall__btn--on" style={{ width: 24, height: 24 }}>
            <IconScreenShare width="12" height="12" />
          </span>
          <span className="vcall__btn vcall__btn--end" style={{ width: 34, height: 24 }}>
            <End width="12" height="12" />
          </span>
        </div>
      </div>
    </div>
  )
}

/* ---------- 6. small device art for the carousel cards ---------- */
export function TabletCardArt() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '14px 14px 0 0',
        background: '#fff',
        boxShadow: '0 -6px 22px -12px rgba(0,0,0,.5)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '38% 1fr',
      }}
    >
      <div style={{ borderRight: '1px solid rgba(44,4,48,.08)', padding: 7 }}>
        <div className="searchbar" style={{ fontSize: 7 }}>
          <IconSearch width="8" height="8" />
          <span>Search</span>
        </div>
        {['Ayesha', 'Weekend Trip', 'Mama'].map((n) => (
          <div key={n} className="chatrow" style={{ padding: 4, gap: 5 }}>
            <Avatar name={n} size={16} />
            <span className="chatrow__t">
              <span className="chatrow__name" style={{ fontSize: 7.5 }}>
                {n}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div style={{ background: '#170f1c', padding: 5, display: 'grid', gap: 4 }}>
        {[3, 9].map((s) => (
          <Portrait key={s} seed={s} style={{ borderRadius: 6 }} />
        ))}
      </div>
    </div>
  )
}

export function DesktopCardArt() {
  return (
    <div
      style={{
        width: '100%',
        alignSelf: 'end',
        borderRadius: '10px 10px 0 0',
        background: 'linear-gradient(160deg,#3a3340,#16121a)',
        padding: '6px 6px 0',
        boxShadow: '0 -6px 22px -12px rgba(0,0,0,.5)',
      }}
    >
      <div
        style={{
          borderRadius: '5px 5px 0 0',
          overflow: 'hidden',
          background: '#fff',
          height: 132,
          display: 'grid',
          gridTemplateColumns: '34% 1fr',
        }}
      >
        <div style={{ borderRight: '1px solid rgba(44,4,48,.08)', padding: 6 }}>
          {['Adil', 'Design Standup', 'Hina', 'Zoya'].map((n) => (
            <div key={n} className="chatrow" style={{ padding: 3, gap: 5 }}>
              <Avatar name={n} size={14} />
              <span className="chatrow__t">
                <span className="chatrow__name" style={{ fontSize: 7 }}>
                  {n}
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="chat" style={{ padding: 6, gap: 4 }}>
          <span className="bubble" style={{ fontSize: 7, padding: '5px 7px 10px', maxWidth: '84%' }}>
            Joining in 2 minutes
            <span className="bubble__time" style={{ fontSize: 6 }}>
              10:02
            </span>
          </span>
          <span
            className="bubble bubble--out"
            style={{ fontSize: 7, padding: '5px 7px 10px', maxWidth: '84%' }}
          >
            Starting the call now 📞
            <span className="bubble__time" style={{ fontSize: 6 }}>
              10:03
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
