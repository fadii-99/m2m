import Reveal from './Reveal'
import { LINKS } from '../config/links'
import {
  IconAndroid,
  IconApple,
  IconGlobe,
  IconLock,
  IconSparkle,
  IconWindows,
} from './Icons'

const PLATFORMS = [
  { label: 'Mac', href: LINKS.mac, Icon: IconApple },
  { label: 'Windows', href: LINKS.windows, Icon: IconWindows },
  { label: 'M2M Web', href: LINKS.web, Icon: IconGlobe },
]

export default function DownloadBand() {
  return (
    <section className="section" id="download">
      <div className="container">
        <Reveal className="band">
          <div className="band__grid">
            <div>
              <div className="eyebrow">Get M2M</div>
              <h2 className="h2">
                Your conversations,
                <br />
                on every device.
              </h2>
              <p className="lead">
                Download M2M on your phone and stay signed in on desktop and the web. Your
                chats sync instantly — and stay end-to-end encrypted everywhere.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <a className="store" href={LINKS.android} target="_blank" rel="noreferrer">
                  <IconAndroid />
                  <span>
                    <small>Get it on</small>
                    <strong>Google Play</strong>
                  </span>
                </a>
                <a className="store" href={LINKS.ios} target="_blank" rel="noreferrer">
                  <IconApple />
                  <span>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </span>
                </a>
              </div>

              <div className="platforms">
                {PLATFORMS.map(({ label, href, Icon }) => (
                  <a key={label} className="platform" href={href} target="_blank" rel="noreferrer">
                    <Icon width="16" height="16" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              {[
                {
                  Icon: IconLock,
                  title: 'End-to-end encrypted',
                  text: 'Messages, calls and status updates are locked by default.',
                },
                {
                  Icon: IconGlobe,
                  title: 'Works anywhere',
                  text: 'Reliable on slow connections, across Android, iOS, desktop and web.',
                },
                {
                  Icon: IconSparkle,
                  title: 'Free to use',
                  text: 'No subscriptions, no ads — just your data plan.',
                },
              ].map(({ Icon, title, text }, i) => (
                <Reveal
                  key={title}
                  delay={120 + i * 110}
                  style={{
                    display: 'flex',
                    gap: 14,
                    background: 'rgba(255,255,255,.72)',
                    borderRadius: 'var(--radius)',
                    padding: '18px 20px',
                  }}
                >
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      flex: 'none',
                      borderRadius: 12,
                      background: 'var(--purple-700)',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <Icon width="19" height="19" />
                  </span>
                  <span>
                    <strong style={{ display: 'block', fontSize: 15.5 }}>{title}</strong>
                    <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{text}</span>
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
