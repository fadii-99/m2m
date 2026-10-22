import Reveal from './Reveal'
import StoreBadges from './StoreBadges'
import { LINKS } from '../config/links'
import { IconGlobe, IconLock, IconSparkle } from './Icons'

const PLATFORMS = [
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
                Download M2M on your phone and open M2M Web in any browser. Your
                chats sync instantly over encrypted connections.
              </p>

              <StoreBadges className="band__stores" />

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
                  title: 'Private by design',
                  text: 'Encrypted connections, no ads, and you choose who sees your status.',
                },
                {
                  Icon: IconGlobe,
                  title: 'Works anywhere',
                  text: 'Reliable on slow connections, on Android, iPhone and the web.',
                },
                {
                  Icon: IconSparkle,
                  title: 'Free to use',
                  text: 'No subscriptions, no ads  just your data plan.',
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
