import PhoneFrame from '../mockups/PhoneFrame'
import Portrait from '../Portrait'
import Avatar from '../Avatar'
import {
  IconArchive,
  IconCamera,
  IconCheckDouble,
  IconChat,
  IconEmoji,
  IconGif,
  IconMic,
  IconMore,
  IconPhone,
  IconPin,
  IconPlus,
  IconSearch,
  IconSend,
  IconSticker,
  IconUpdates,
  IconVideo,
} from '../Icons'

/* ==========================================================================
   1. hero  expressive chat
   ========================================================================== */
export function HeroChatPhone() {
  return (
    <PhoneFrame size="lg" lightStatus className="float-slow">
      <div className="appbar">
        <Avatar name="Maya" size={30} />
        <div>
          <div className="appbar__title">Maya</div>
          <div className="appbar__sub">online</div>
        </div>
        <div className="appbar__actions">
          <IconVideo width="15" height="15" />
          <IconPhone width="15" height="15" />
        </div>
      </div>

      <div className="chat chat--bottom">
        <div className="event-card">
          <span style={{ fontSize: 14 }}>📅</span>
          <span>
            Trevor's recital is on Sunday, 1pm
            <small>Tap to add to your calendar</small>
          </span>
        </div>

        <div className="reactbar">
          <i>❤️</i>
          <i>😂</i>
          <i>👍</i>
          <i>😮</i>
          <i>🙏</i>
          <span className="reactbar__more">
            <IconPlus width="9" height="9" />
          </span>
        </div>

        <div className="photo-msg">
          <Portrait seed={4} />
          <span className="photo-msg__time">12:24</span>
        </div>

        <div className="voice-note">
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
            {Array.from({ length: 20 }).map((_, i) => (
              <i key={i} style={{ animationDelay: `${i * 0.06}s` }} />
            ))}
          </span>
          <span style={{ fontSize: 8, color: 'var(--purple-800)', fontWeight: 700 }}>0:21</span>
        </div>

        <div className="bubble bubble--out" style={{ maxWidth: '70%' }}>
          Can't wait to see you there
          <span className="bubble__time">
            12:26 <IconCheckDouble width="10" height="10" color="#0aa2c0" />
          </span>
        </div>
      </div>

      <div className="composer">
        <div className="composer__field">
          <IconPlus width="13" height="13" />
          <span style={{ flex: 1 }}>Message</span>
          <IconSticker width="13" height="13" />
          <IconCamera width="13" height="13" />
        </div>
        <span className="composer__send">
          <IconSend width="14" height="14" />
        </span>
      </div>
    </PhoneFrame>
  )
}

/* ==========================================================================
   2. organised chat list
   ========================================================================== */
const ROWS = [
  { name: 'Maya', msg: 'Great meeting!', time: '10:41', badge: '3', pin: true },
  { name: 'Mum', msg: 'Where are you?', time: '10:12', badge: '' },
  { name: 'Moshe', msg: 'Did you get a chance to look at…', time: '09:58', badge: '1' },
  { name: 'Ayesha Khan', msg: 'Voice message · 0:14', time: 'Yesterday', badge: '' },
  { name: 'Sana', msg: 'You: shared 3 photos', time: 'Yesterday', badge: '' },
  { name: 'Bilal', msg: 'Sending the file now', time: 'Tuesday', badge: '' },
  { name: 'Hina', msg: 'Booked the rooms!', time: 'Tuesday', badge: '' },
  { name: 'Zoya', msg: 'Photo', time: 'Monday', badge: '' },
  { name: 'Rehan Ali', msg: 'Thanks! 🙏', time: 'Monday', badge: '' },
  { name: 'Yui', msg: 'See you Saturday', time: '12/07', badge: '' },
]

export function ChatListPhone() {
  return (
    <PhoneFrame size="lg" className="float-slow">
      <div className="list-screen">
        <div className="list-screen__top">
          <span className="list-screen__brand">M2M</span>
          <span className="list-screen__top-icons">
            <IconCamera width="14" height="14" />
            <IconMore width="14" height="14" />
          </span>
        </div>

        <div style={{ padding: '0 12px' }}>
          <div className="searchbar">
            <IconSearch width="11" height="11" />
            <span>Search messages, names and more</span>
          </div>
        </div>

        <div className="filters">
          <span className="filter is-active">All</span>
          <span className="filter">Unread 12</span>
          <span className="filter">Archived 3</span>
        </div>

        <div className="list">
          {ROWS.map((r) => (
            <div key={r.name} className="list__row">
              <Avatar name={r.name} size={30} />
              <span className="list__t">
                <span className="list__name">
                  {r.name}
                  {r.pin && <IconPin width="9" height="9" className="pin" />}
                </span>
                <span className="list__msg">{r.msg}</span>
              </span>
              <span className="list__meta">
                <span className="list__time">{r.time}</span>
                {r.badge && <span className="list__badge">{r.badge}</span>}
              </span>
            </div>
          ))}
        </div>

        <span className="fab">
          <IconChat width="15" height="15" />
        </span>

        <div className="tabbar">
          {[
            { label: 'Chats', Icon: IconChat, active: true },
            { label: 'Updates', Icon: IconUpdates },
            { label: 'Archived', Icon: IconArchive },
            { label: 'Calls', Icon: IconPhone },
          ].map(({ label, Icon, active }) => (
            <span key={label} className={`tabbar__item${active ? ' is-active' : ''}`}>
              <span>
                <Icon width="13" height="13" />
              </span>
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ==========================================================================
   3. stickers & expression
   ========================================================================== */
const STICKERS = [
  { emoji: '🤩', left: '7%', top: '6%', d: '0s' },
  { emoji: '🎉', right: '9%', top: '3%', d: '1.2s' },
  { emoji: '😹', left: '38%', top: '30%', d: '0.6s' },
  { emoji: '💜', right: '14%', top: '54%', d: '1.8s' },
  { emoji: '🙌', left: '10%', top: '70%', d: '2.4s' },
  { emoji: '✨', right: '34%', top: '78%', d: '0.9s' },
]

export function StickerPhone() {
  return (
    <PhoneFrame size="lg" className="float-slow">
      <div className="appbar">
        <Avatar name="Sana R" size={30} />
        <div>
          <div className="appbar__title">Sana</div>
          <div className="appbar__sub">online</div>
        </div>
        <div className="appbar__actions">
          <IconVideo width="15" height="15" />
          <IconPhone width="15" height="15" />
        </div>
      </div>

      <div className="sticker-stage">
        <div
          className="sticker sticker--photo"
          style={{ left: '9%', top: '20%', animationDelay: '0.4s' }}
        >
          <Portrait seed={6} style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div
          className="sticker sticker--photo"
          style={{ right: '10%', top: '40%', animationDelay: '1.5s' }}
        >
          <Portrait seed={15} style={{ position: 'absolute', inset: 0 }} />
        </div>
        {STICKERS.map((s) => (
          <span
            key={s.emoji}
            className="sticker"
            style={{ left: s.left, right: s.right, top: s.top, animationDelay: s.d }}
          >
            {s.emoji}
          </span>
        ))}
      </div>

      <div className="tray">
        <div className="tray__tabs">
          <IconSearch width="12" height="12" />
          <IconSticker width="13" height="13" className="is-active" />
          <IconEmoji width="13" height="13" />
          <IconGif width="13" height="13" />
          <span style={{ marginLeft: 'auto' }}>
            <IconSend width="12" height="12" />
          </span>
        </div>
        <div className="tray__grid">
          <span className="tray__cell tray__cell--action">
            <IconPlus width="13" height="13" />
            Create
          </span>
          <span className="tray__cell">😻</span>
          <span className="tray__cell">🥳</span>
          <span className="tray__cell">🫶</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

/* ==========================================================================
   4. small phones for the "Share more than words" cards
   ========================================================================== */
function MiniChat({ children }) {
  return (
    <PhoneFrame lightStatus time="10:36">
      <div className="appbar" style={{ padding: '4px 9px 7px' }}>
        <Avatar name="Family" size={20} />
        <div>
          <div className="appbar__title" style={{ fontSize: 9 }}>
            Family ❤️
          </div>
        </div>
        <div className="appbar__actions">
          <IconVideo width="11" height="11" />
        </div>
      </div>
      <div className="chat" style={{ padding: '9px 8px', gap: 5 }}>
        {children}
      </div>
    </PhoneFrame>
  )
}

export function AlbumPhone() {
  return (
    <MiniChat>
      <div className="album">
        <Portrait seed={2} />
        <Portrait seed={9} />
        <Portrait seed={14} />
        <div className="album__more">
          <Portrait seed={20} style={{ aspectRatio: '1' }} />
          <span>+7</span>
        </div>
      </div>
      <span className="bubble" style={{ fontSize: 9, maxWidth: '78%' }}>
        Such a beautiful wedding 😍
        <span className="bubble__time">11:02</span>
      </span>
    </MiniChat>
  )
}

export function HdPhotoPhone() {
  return (
    <MiniChat>
      <div className="photo-msg" style={{ width: '86%', alignSelf: 'flex-end' }}>
        <span className="hd-badge">HD</span>
        <Portrait seed={11} style={{ aspectRatio: '4 / 5' }} />
        <span className="photo-msg__time">11:14</span>
      </div>
      <span className="bubble bubble--out" style={{ fontSize: 9, maxWidth: '74%' }}>
        Sent in HD quality
        <span className="bubble__time">
          11:14 <IconCheckDouble width="9" height="9" color="#0aa2c0" />
        </span>
      </span>
    </MiniChat>
  )
}

export function FilePhone() {
  return (
    <MiniChat>
      <div className="doc-msg">
        <span className="doc-msg__icon">📄</span>
        <span>
          <b>Q3-review-final.pdf</b>
          <small>1.4 GB · 62 pages</small>
        </span>
      </div>
      <span className="bubble bubble--out" style={{ fontSize: 9, maxWidth: '60%' }}>
        Up to 2 GB per file
        <span className="bubble__time">
          09:33 <IconCheckDouble width="9" height="9" color="#0aa2c0" />
        </span>
      </span>
    </MiniChat>
  )
}
