import Portrait from '../Portrait'
import Avatar from '../Avatar'
import {
  IconCamera,
  IconEmoji,
  IconMic,
  IconMore,
  IconPlus,
  IconSend,
  IconSticker,
  IconText,
  IconUsers,
} from '../Icons'

function Bars({ count = 4, active = 1 }) {
  return (
    <div className="scard__bars">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className={i < active ? 'is-done' : i === active ? 'is-active' : ''} />
      ))}
    </div>
  )
}

function Wave({ bars = 16 }) {
  return (
    <span className="wave" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <i key={i} style={{ animationDelay: `${i * 0.07}s` }} />
      ))}
    </span>
  )
}

/* ==========================================================================
   1. hero  a status surrounded by reactions
   ========================================================================== */
const HERO_EMOJI = [
  { e: '😍', top: '4%', right: '-14%', d: '0s' },
  { e: '🔥', top: '16%', right: '-26%', d: '0.8s' },
  { e: '😂', top: '30%', right: '-12%', d: '1.4s' },
  { e: '🥹', top: '44%', right: '-28%', d: '0.4s' },
  { e: '💯', top: '58%', right: '-14%', d: '1.9s' },
  { e: '👏', top: '72%', right: '-27%', d: '1.1s' },
]

export function HeroStatusCard() {
  return (
    <div className="scard scard--wide float-slow">
      <div className="scard__frame">
        <Portrait seed={3} size="150cqmin" />
      </div>

      <Bars count={4} active={1} />
      <div className="scard__head">
        <Avatar name="Maya" size={24} />
        <span className="scard__name">
          Maya
          <small>8 minutes ago</small>
        </span>
        <span style={{ marginLeft: 'auto', opacity: 0.9 }}>
          <IconMore width="14" height="14" />
        </span>
      </div>

      <div className="scard__voice">
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'var(--purple-500)',
            display: 'grid',
            placeItems: 'center',
            flex: 'none',
          }}
        >
          <IconMic width="10" height="10" />
        </span>
        <Wave bars={18} />
        <span style={{ fontSize: 8, fontWeight: 700 }}>0:18</span>
      </div>

      <div className="scard__reply">
        <span className="scard__field">Reply…</span>
        <span className="scard__round scard__round--accent">💜</span>
      </div>

      <span className="scard__float scard__float--chip" style={{ left: '-13%', top: '2%' }}>
        ☕
      </span>
      <span
        className="scard__float scard__float--chip"
        style={{ left: '-16%', top: '58%', animationDelay: '1.3s' }}
      >
        🎧
      </span>

      <div className="emoji-cloud">
        {HERO_EMOJI.map((x) => (
          <span
            key={x.e}
            className="scard__float"
            style={{ top: x.top, right: x.right, animationDelay: x.d }}
          >
            {x.e}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ==========================================================================
   2. share your everyday  stickers + voice note + caption
   ========================================================================== */
export function EverydayStatusCard() {
  return (
    <div className="scard float-slow">
      <div className="scard__frame">
        <Portrait seed={8} size="150cqmin" />
      </div>

      <Bars count={3} active={2} />
      <div className="scard__head">
        <Avatar name="Rehan Ali" size={24} />
        <span className="scard__name">
          Rehan
          <small>Just now</small>
        </span>
      </div>

      <div className="scard__voice" style={{ bottom: 74 }}>
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'var(--purple-500)',
            display: 'grid',
            placeItems: 'center',
            flex: 'none',
          }}
        >
          <IconMic width="10" height="10" />
        </span>
        <Wave bars={14} />
        <span style={{ fontSize: 8, fontWeight: 700 }}>0:32</span>
      </div>

      <div className="scard__caption">He's grown so much! 🥹</div>

      <div className="scard__reply">
        <span className="scard__field">Reply…</span>
        <span className="scard__round">
          <IconSend width="13" height="13" />
        </span>
      </div>

      <span className="scard__float scard__float--chip" style={{ right: '-12%', top: '10%' }}>
        😻
      </span>
      <span
        className="scard__float"
        style={{ left: '-14%', top: '46%', fontSize: 30, animationDelay: '1.2s' }}
      >
        💗
      </span>
      <span
        className="scard__float scard__float--chip"
        style={{ right: '-15%', top: '62%', animationDelay: '0.6s' }}
      >
        ✨
      </span>
    </div>
  )
}

/* ==========================================================================
   3. connect with friends and family  mentions + reactions
   ========================================================================== */
export function MentionStatusCard() {
  return (
    <div className="scard float-slow" style={{ marginTop: 22 }}>
      <div className="scard__mentions">
        {['Ayesha', 'Bilal', 'Hina'].map((n, i) => (
          <Avatar key={n} name={n} size={30} className="" />
        ))}
      </div>

      <div className="scard__frame">
        <Portrait seed={13} size="150cqmin" />
      </div>

      <Bars count={5} active={3} />
      <div className="scard__head">
        <Avatar name="Zoya" size={24} />
        <span className="scard__name">
          Zoya
          <small>Mentioned 3 friends</small>
        </span>
      </div>

      <div className="scard__reply">
        <span className="scard__field">Reply…</span>
        <span className="scard__round scard__round--accent">
          <IconSend width="13" height="13" />
        </span>
      </div>

      {[
        { e: '💚', left: '-12%', top: '30%', d: '0s' },
        { e: '💚', right: '-13%', top: '18%', d: '0.9s' },
        { e: '💚', right: '-10%', top: '66%', d: '1.7s' },
        { e: '💚', left: '-9%', top: '80%', d: '1.2s' },
      ].map((x, i) => (
        <span
          key={i}
          className="scard__float"
          style={{ left: x.left, right: x.right, top: x.top, animationDelay: x.d, fontSize: 20 }}
        >
          {x.e}
        </span>
      ))}
      <span
        className="scard__float scard__float--chip"
        style={{ left: '-14%', top: '8%', animationDelay: '0.5s' }}
      >
        🤗
      </span>
    </div>
  )
}

/* ==========================================================================
   4. stay in control  audience chooser
   ========================================================================== */
export function PrivacyStatusCard() {
  return (
    <div className="scard float-slow">
      <div className="scard__frame">
        <Portrait seed={19} size="150cqmin" />
      </div>

      <Bars count={2} active={0} />
      <div className="scard__head">
        <Avatar name="Sana R" size={24} />
        <span className="scard__name">
          Your status
          <small>Only you can see who viewed it</small>
        </span>
      </div>

      <div className="scard__caption" style={{ bottom: '48%' }}>
        It's between us 🤫
      </div>

      <div className="privacy">
        <div className="privacy__row">
          <span className="privacy__radio" />
          My contacts
        </div>
        <div className="privacy__row">
          <span className="privacy__radio" />
          My contacts except…
          <span className="privacy__tag">2 EXCLUDED</span>
        </div>
        <div className="privacy__row is-on">
          <span className="privacy__radio" />
          Only share with…
          <span className="privacy__tag">4 INCLUDED</span>
        </div>
      </div>

      <span className="scard__float scard__float--chip" style={{ right: '-13%', top: '12%' }}>
        <IconUsers width="15" height="15" style={{ color: 'var(--purple-700)' }} />
      </span>
    </div>
  )
}

/* ==========================================================================
   5. carousel art  gallery picker + status editor
   ========================================================================== */
export function GalleryArt() {
  return (
    <div className="gallery">
      <div className="gallery__bar">
        <IconPlus width="10" height="10" style={{ transform: 'rotate(45deg)' }} />
        Recents
        <span className="gallery__tabs">
          <span className="is-active">Recents</span>
          <span>Gallery</span>
        </span>
      </div>
      <div className="gallery__grid">
        {[2, 5, 8, 11, 14, 17, 20, 23, 26].map((s) => (
          <Portrait key={s} seed={s} />
        ))}
      </div>
    </div>
  )
}

export function EditorArt() {
  return (
    <div className="editor">
      <Portrait seed={7} style={{ position: 'absolute', inset: 0 }} size="130cqmin" />
      <div className="editor__tools">
        <span>
          <IconPlus width="12" height="12" style={{ transform: 'rotate(45deg)' }} />
        </span>
        <IconCamera width="12" height="12" />
        <IconSticker width="12" height="12" />
        <IconEmoji width="12" height="12" />
        <IconText width="12" height="12" />
      </div>
      <span
        className="scard__float scard__float--chip"
        style={{ right: '8%', top: '34%', zIndex: 5 }}
      >
        😍
      </span>
      <span
        className="scard__float"
        style={{ left: '10%', bottom: '16%', fontSize: 24, zIndex: 5, animationDelay: '1s' }}
      >
        💜
      </span>
    </div>
  )
}
