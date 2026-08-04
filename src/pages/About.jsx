import Reveal from '../components/Reveal'
import Stats from '../components/Stats'
import SmartLink from '../components/SmartLink'
import MoreFeatures from '../components/sections/MoreFeatures'
import ChatMockup from '../components/mockups/ChatMockup'
import EncryptedMockup from '../components/mockups/EncryptedMockup'
import { LINKS } from '../config/links'
import {
  IconDownload,
  IconGlobe,
  IconLock,
  IconSparkle,
  IconUsers,
} from '../components/Icons'

const VALUES = [
  {
    Icon: IconLock,
    title: 'Private by default',
    body: 'End-to-end encryption is not a setting you have to find  every message, call and status update is locked from the moment you send it.',
  },
  {
    Icon: IconSparkle,
    title: 'Simple by design',
    body: 'No accounts to manage, no feeds to scroll. You open M2M to talk to someone, and that is all it asks of you.',
  },
  {
    Icon: IconGlobe,
    title: 'Built for every connection',
    body: 'M2M is designed to stay usable on a slow network and an older phone, not just on the newest device with fast internet.',
  },
  {
    Icon: IconUsers,
    title: 'For everyone',
    body: 'Free to use, with no ads and no subscription. The people you want to reach should never be behind a paywall.',
  },
]

const DISCOVER = [
  {
    title: 'Privacy',
    text: 'How your messages, calls and updates stay between you and your people.',
    href: LINKS.privacy,
    seed: 1,
  },
  {
    title: 'Messaging',
    text: 'Fast, simple and secure messaging with the people who matter most.',
    href: LINKS.messaging,
    seed: 3,
  },
  {
    title: 'Calling',
    text: 'Free voice and video calls with no time limits, on any of your devices.',
    href: LINKS.calling,
    seed: 6,
  },
]

export default function About() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="page-hero">
        <div className="container split">
          <Reveal className="split__copy">
            <div className="eyebrow">About us</div>
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)' }}>
              Private
              <br />
              conversations,
              <br />
              for everyone
            </h1>
            <p className="page-lead">
              M2M is a messaging app built on one idea: talking to the people you care about
              should be simple, reliable and nobody else's business.
            </p>
            <p style={{ marginTop: 28 }}>
              <SmartLink className="btn btn--lg" href={LINKS.download}>
                Download <IconDownload width="16" height="16" className="btn__icon" />
              </SmartLink>
            </p>
          </Reveal>

          <Reveal className="split__media media-frame" delay={140}>
            <ChatMockup />
          </Reveal>
        </div>
      </section>

      {/* ---------- our story ---------- */}
      <section className="section-tight">
        <div className="container split">
          <Reveal className="split__copy">
            <h2 className="h2">Why we built M2M</h2>
          </Reveal>
          <Reveal className="split__copy prose" delay={120}>
            <p>
              Most of the apps we use to talk to each other were built to hold our attention,
              not to carry our conversations. Feeds, ads and suggestions crowd out the reason
              people opened the app in the first place.
            </p>
            <p>
              We wanted the opposite: an app that gets out of the way. M2M does a small number
              of things  messages, voice and video calls, and status updates that disappear
              after a day  and tries to do each one properly, on any phone, on any network.
            </p>
            <p>
              Everything you send is end-to-end encrypted, which means it is scrambled on your
              device and can only be unscrambled on the device of the person you sent it to.
              Not by anyone in between, and not by us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="section tint">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">What we stand for</h2>
            <p>Four things we hold on to, even when they make the product harder to build.</p>
          </Reveal>

          <div className="vgrid">
            {VALUES.map(({ Icon, title, body }, i) => (
              <Reveal key={title} className="vcard" delay={i * 100}>
                <span className="vcard__icon">
                  <Icon width="21" height="21" />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <Stats />

      {/* ---------- encryption ---------- */}
      <section className="section on-dark">
        <div className="container split split--reverse">
          <Reveal className="split__copy">
            <h2 className="h2 feature__title">
              Privacy is not a <span>feature</span>
            </h2>
            <p className="lead">
              It is the starting point. We designed M2M so that the safest option is the
              default one  no settings to hunt for, no upgrade to buy, no exceptions for us.
            </p>
            <p style={{ marginTop: 26 }}>
              <SmartLink className="btn btn--light btn--lg" href={LINKS.privacy}>
                How privacy works on M2M
              </SmartLink>
            </p>
          </Reveal>

          <Reveal className="split__media media-frame" delay={140}>
            <EncryptedMockup />
          </Reveal>
        </div>
      </section>

      <MoreFeatures
        title={
          <>
            Explore
            <br />
            what M2M does
          </>
        }
        body="Take a closer look at the things you can do with the people in your chats."
        items={DISCOVER}
      />
    </main>
  )
}
