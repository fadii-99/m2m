import { useMemo } from 'react'
import Reveal from './Reveal'
import Avatar from './Avatar'
import SmartLink from './SmartLink'
import { LINKS } from '../config/links'
import { IconCheckDouble, IconDownload, IconVideo } from './Icons'

const CHIPS = [
  { top: '6%', right: '4%', delay: '0s', name: 'Study Group', kind: 'group' },
  { top: '34%', left: '2%', delay: '1.1s', name: 'Hina', text: 'Ready when you are 🙌' },
  { top: '62%', right: '10%', delay: '2s', name: 'Ayesha', text: 'Still on for studying?' },
]

export default function Hero() {
  // deterministic bokeh field
  const bokeh = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => {
        const size = 5 + ((i * 13) % 34)
        return {
          width: size,
          height: size,
          left: `${(i * 37) % 100}%`,
          top: `${(i * 23) % 100}%`,
          opacity: 0.18 + ((i * 7) % 30) / 100,
          animationDuration: `${9 + (i % 7) * 2.5}s`,
          animationDelay: `${-(i % 9) * 1.4}s`,
        }
      }),
    []
  )

  return (
    <section className="hero container-wide" id="top">
      <div className="hero__card">
        <div className="hero__bg" />
        <div className="bokeh" aria-hidden="true">
          {bokeh.map((s, i) => (
            <i key={i} style={s} />
          ))}
        </div>

        <div className="hero__inner">
          <Reveal className="hero__copy">
            <h1 className="h1 hero__title">
              <span>Message</span>
              <span>privately</span>
            </h1>
            <p className="hero__sub">
              Simple, reliable, private messaging and calling for free*, available all over
              the world.
            </p>
            <div className="hero__cta">
              <SmartLink className="btn btn--light btn--lg" href={LINKS.download}>
                Download <IconDownload width="17" height="17" className="btn__icon" />
              </SmartLink>
              <a
                className="btn btn--glass btn--lg"
                href={LINKS.web}
                target="_blank"
                rel="noreferrer"
              >
                Try M2M Web
              </a>
            </div>
          </Reveal>

          <div className="hero__cards" aria-hidden="true">
            {CHIPS.map((c, i) =>
              c.kind === 'group' ? (
                <Reveal
                  key={i}
                  className="chip chip--group"
                  delay={200 + i * 140}
                  style={{ top: c.top, right: c.right, left: c.left, animationDelay: c.delay }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Avatar name={c.name} size={26} />
                    <span>
                      Study Group
                      <span className="chip__meta">6 on the call</span>
                    </span>
                    <IconVideo width="15" height="15" style={{ marginLeft: 'auto', color: 'var(--purple-700)' }} />
                  </div>
                  <span className="chip__join">
                    <span className="pulse-dot" /> Join
                  </span>
                </Reveal>
              ) : (
                <Reveal
                  key={i}
                  className="chip"
                  delay={200 + i * 140}
                  style={{ top: c.top, right: c.right, left: c.left, animationDelay: c.delay }}
                >
                  <Avatar name={c.name} size={28} className="chip__av" />
                  <span>
                    {c.text}
                    <span className="chip__meta">
                      {c.name} · now <IconCheckDouble width="9" height="9" color="#0aa2c0" />
                    </span>
                  </span>
                </Reveal>
              )
            )}
          </div>
        </div>
      </div>

      <p className="hero__note">*Data charges may apply. Contact your provider for details.</p>
    </section>
  )
}
