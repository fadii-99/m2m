import PhoneFrame from './PhoneFrame'
import Avatar from '../Avatar'
import {
  IconCamera,
  IconCheckDouble,
  IconMic,
  IconPhone,
  IconPlus,
  IconSend,
  IconVideo,
} from '../Icons'

/** Group chat screen  used by the "Keep in touch with your groups" section. */
export default function ChatMockup() {
  return (
    <PhoneFrame size="lg" lightStatus className="float-slow">
      <div className="appbar">
        <Avatar name="Weekend Trip" size={30} />
        <div>
          <div className="appbar__title">Weekend Trip 🏔️</div>
          <div className="appbar__sub">Ayesha, Bilal, Hina, +5</div>
        </div>
        <div className="appbar__actions">
          <IconVideo width="15" height="15" />
          <IconPhone width="15" height="15" />
        </div>
      </div>

      <div className="chat">
        <span className="daydivider">TODAY</span>

        <div className="bubble" style={{ animationDelay: '.1s' }}>
          <span className="bubble__name">Ayesha</span>
          Guys, are we still leaving at 6am? 😅
          <span className="bubble__time">09:12</span>
        </div>

        <div className="bubble bubble--out" style={{ animationDelay: '.3s' }}>
          <div className="bubble__img" />
          Booked it! Rooms with the mountain view.
          <span className="bubble__time">
            09:14 <IconCheckDouble width="10" height="10" color="#0aa2c0" />
          </span>
        </div>

        <div className="reactions">
          <span>🔥</span>
          <span>😍</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>6</span>
        </div>

        <div className="bubble" style={{ animationDelay: '.5s' }}>
          <span className="bubble__name">Bilal</span>
          Perfect. I'll bring the speaker 🔊
          <span className="bubble__time">09:16</span>
        </div>

        <div className="bubble" style={{ animationDelay: '.7s', paddingBottom: 7 }}>
          <span className="bubble__name">Hina</span>
          <span className="typing" aria-label="typing">
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>

      <div className="composer">
        <div className="composer__field">
          <IconPlus width="13" height="13" />
          <span style={{ flex: 1 }}>Message</span>
          <IconCamera width="13" height="13" />
          <IconMic width="13" height="13" />
        </div>
        <span className="composer__send">
          <IconSend width="14" height="14" />
        </span>
      </div>
    </PhoneFrame>
  )
}
