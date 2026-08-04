import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import Portrait from '../components/Portrait'
import SmartLink from '../components/SmartLink'
import DownloadArt from '../components/apps/DownloadArt'
import { AppStoreBadge, PlayBadge } from '../components/StoreBadges'
import { LINKS } from '../config/links'
import { IconArrowRight, IconChevronRight, IconGlobe } from '../components/Icons'

function WebBadge() {
  return (
    <a className="btn btn--lg" href={LINKS.web} target="_blank" rel="noreferrer">
      Log in <IconChevronRight width="15" height="15" className="btn__icon" />
    </a>
  )
}

/* ---------- one entry per platform ---------- */
const DEVICES = {
  android: {
    kind: 'Mobile',
    name: 'Android',
    body: 'Chats, calls, status and everything else, on the phone you carry. Works on Android 5.0 and newer.',
    req: 'Minimum requirements: Android 5.0 or newer',
    badge: <PlayBadge />,
  },
  ios: {
    kind: 'Mobile',
    name: 'iPhone',
    body: 'Message and call privately from your iPhone or iPad, with your chats backed up and end-to-end encrypted.',
    req: 'Minimum requirements: iOS 15.1 or newer',
    badge: <AppStoreBadge />,
  },
  web: {
    kind: 'Browser',
    name: 'M2M Web',
    body: "Don't see your device supported? Use M2M on your browser.",
    badge: <WebBadge />,
  },
}

const ORDER = ['android', 'ios', 'web']

/** Best guess at what the visitor is holding, so the hero shows their store. */
function detectDevice() {
  if (typeof navigator === 'undefined') return 'web'
  const ua = navigator.userAgent || ''

  if (/android/i.test(ua)) return 'android'
  if (/iPhone|iPad|iPod/.test(ua)) return 'ios'
  // Anything else (desktop, tablet, unknown) gets M2M Web, which is the only
  // other place M2M runs.
  return 'web'
}

const ALREADY = [
  {
    title: 'Privacy',
    text: 'How your messages, calls and updates stay between you and your people.',
    href: LINKS.privacy,
    seed: 1,
  },
  {
    title: 'Calling',
    text: 'Free voice and video calls with no time limits, on any of your devices.',
    href: LINKS.calling,
    seed: 3,
  },
  {
    title: 'Messaging',
    text: 'Fast, simple and secure messaging with the people who matter most.',
    href: LINKS.messaging,
    seed: 6,
  },
  {
    title: 'Status',
    text: 'Share photos, videos and voice updates that disappear after 24 hours.',
    href: LINKS.status,
    seed: 9,
  },
]

export default function Download() {
  // Render the neutral web card first so the server-less first paint is stable,
  // then swap in the visitor's actual platform.
  const [device, setDevice] = useState('web')
  useEffect(() => setDevice(detectDevice()), [])

  const primary = DEVICES[device]
  const others = ORDER.filter((k) => k !== device)

  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="dl-hero">
        <div className="container split">
          <Reveal className="split__copy">
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.6vw, 4.1rem)' }}>
              Download
              <br />
              M2M
            </h1>
            <p className="page-lead" style={{ marginTop: 16 }}>
              Start chatting and calling privately with M2M across your devices.
            </p>
            <p className="dl-hero__terms">
              By installing M2M, you agree to our{' '}
              <SmartLink href={LINKS.privacy}>Terms &amp; Privacy Policy</SmartLink>.
            </p>

            <div className="devcard">
              <div className="devcard__kind">{primary.kind}</div>
              <h2 className="devcard__name">{primary.name}</h2>
              <p className="devcard__body">{primary.body}</p>
              {primary.req && <p className="devcard__req">{primary.req}</p>}
              <div className="devcard__cta">{primary.badge}</div>
            </div>
          </Reveal>

          <Reveal className="split__media" delay={140}>
            <DownloadArt />
          </Reveal>
        </div>
      </section>

      {/* ---------- other download options ---------- */}
      <section className="section">
        <div className="container split split--rail">
          <Reveal className="split__copy">
            <h2 className="h2">
              Other download
              <br />
              options
            </h2>
            <p className="lead">Stay connected with friends and family across your devices.</p>
          </Reveal>

          <Reveal className="split__media" delay={140} style={{ minWidth: 0 }}>
            <Carousel ariaLabel="Other ways to get M2M">
              {others.map((key) => {
                const d = DEVICES[key]
                return (
                  <article className="dcard--device" data-card key={key}>
                    {d.isNew && <span className="badge-new">NEW</span>}
                    <div className="devcard__kind">{d.kind}</div>
                    <h3 className="devcard__name" style={{ fontSize: '1.4rem' }}>
                      {d.name}
                    </h3>
                    <p className="devcard__body">{d.body}</p>
                    {d.req && <p className="devcard__req">{d.req}</p>}
                    <div className="devcard__cta">{d.badge}</div>
                  </article>
                )
              })}
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* ---------- already downloaded? ---------- */}
      <section className="section plain">
        <div className="container split split--rail">
          <Reveal className="split__copy">
            <h2 className="h2">
              Already
              <br />
              downloaded?
            </h2>
            <p className="lead">Learn more about what you can do on M2M.</p>
            <p style={{ marginTop: 24 }}>
              <a className="link" href={LINKS.helpCenter} target="_blank" rel="noreferrer">
                Visit the Help Center <IconGlobe width="14" height="14" />
              </a>
            </p>
          </Reveal>

          <Reveal className="split__media" delay={140} style={{ minWidth: 0 }}>
            <Carousel ariaLabel="What you can do on M2M">
              {ALREADY.map((d) => (
                <SmartLink className="dcard" data-card key={d.title} href={d.href}>
                  <Portrait seed={d.seed} className="dcard__photo" />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <span className="link" style={{ marginTop: 12, display: 'inline-flex' }}>
                    Learn more <IconArrowRight width="14" height="14" />
                  </span>
                </SmartLink>
              ))}
            </Carousel>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
