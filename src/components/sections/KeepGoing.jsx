import Reveal from '../Reveal'
import Carousel from '../Carousel'
import SmartLink from '../SmartLink'
import { LINKS } from '../../config/links'
import { IconDownload } from '../Icons'
import { DesktopCardArt, TabletCardArt } from '../calling/CallingMockups'

const CARDS = [
  {
    title: 'M2M on tablet is here',
    text: 'Chat and make calls, share your status, and get more done on a bigger screen.',
    art: <TabletCardArt />,
  },
  {
    title: 'Connect on desktop',
    text: 'Use M2M Web or our desktop apps to chat on your computer, even when your phone is off.',
    art: <DesktopCardArt />,
  },
  {
    title: 'Pick up where you left off',
    text: 'Your chats and calls stay in sync across every device linked to your account.',
    art: <TabletCardArt />,
  },
]

/** Shared "Keep the conversation going" block used by the feature pages. */
export default function KeepGoing({ body }) {
  return (
    <section className="section">
      <div className="container split split--rail">
        <Reveal className="split__copy">
          <h2 className="h2">
            Keep the
            <br />
            conversation going
          </h2>
          <p className="lead">
            {body ||
              'Stay connected anytime, anywhere on your preferred device by downloading our apps. Messaging and calling are available on iOS, Android, Mac, tablet and Windows devices.'}
          </p>
          <p style={{ marginTop: 26 }}>
            <SmartLink className="btn btn--lg" href={LINKS.download}>
              Download <IconDownload width="16" height="16" className="btn__icon" />
            </SmartLink>
          </p>
        </Reveal>

        <Reveal className="split__media" delay={140} style={{ minWidth: 0 }}>
          <Carousel ariaLabel="M2M on other devices">
            {CARDS.map((c) => (
              <article className="pcard" data-card key={c.title}>
                <div className="pcard__art">{c.art}</div>
                <div className="pcard__body">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}
