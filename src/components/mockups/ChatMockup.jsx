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

/** One-to-one chat screen  used by the About page hero. */
export default function ChatMockup() {
  return (
    <PhoneFrame size="lg" lightStatus className="float-slow">
      <div className="appbar">
        <Avatar name="Ayesha Khan" size={30} />
        <div>
          <div className="appbar__title">Ayesha Khan</div>
          <div className="appbar__sub">online</div>
        </div>
        <div className="appbar__actions">
          <IconVideo width="15" height="15" />
          <IconPhone width="15" height="15" />
        </div>
      </div>

      <div className="chat">
        <span className="daydivider">TODAY</span>

        <div className="bubble" style={{ animationDelay: '.1s' }}>
          Are we still leaving at 6am? 😅
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
        </div>

        <div className="bubble" style={{ animationDelay: '.5s' }}>
          Perfect. I'll bring the speaker 🔊
          <span className="bubble__time">09:16</span>
        </div>

        <div className="bubble" style={{ animationDelay: '.7s', paddingBottom: 7 }}>
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
