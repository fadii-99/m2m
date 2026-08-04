import Reveal from '../Reveal'
import Carousel from '../Carousel'
import SmartLink from '../SmartLink'
import { LINKS } from '../../config/links'
import { IconDownload } from '../Icons'
import { DesktopCardArt, TabletCardArt } from '../calling/CallingMockups'
import { AlbumPhone } from '../messaging/MessagingMockups'

const CARDS = [
  {
    title: 'Android and iPhone',
    text: 'Download the app on the phone you carry and pick up every chat and call wherever you are.',
    art: <AlbumPhone />,
    artClass: 'pcard__art--phone',
  },
  {
    title: 'M2M Web in your browser',
    text: 'Open M2M Web, scan the code with your phone, and your chats are on the big screen. Nothing to install.',
    art: <DesktopCardArt />,
  },
  {
    title: 'Everything stays in sync',
    text: 'A message you send from the browser shows up on your phone straight away, and the other way round.',
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
              'Stay connected anytime, anywhere. M2M runs on Android, iPhone and in your browser with M2M Web.'}
          </p>
          <p style={{ marginTop: 26 }}>
            <SmartLink className="btn btn--lg" href={LINKS.download}>
              Download <IconDownload width="16" height="16" className="btn__icon" />
            </SmartLink>
          </p>
        </Reveal>

        <Reveal className="split__media" delay={140} style={{ minWidth: 0 }}>
          <Carousel ariaLabel="Where M2M runs">
            {CARDS.map((c) => (
              <article className="pcard" data-card key={c.title}>
                <div className={`pcard__art${c.artClass ? ` ${c.artClass}` : ''}`}>{c.art}</div>
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
