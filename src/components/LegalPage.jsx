import Reveal from './Reveal'
import { IconLock } from './Icons'
import { LEGAL } from '../config/legal'

/**
 * Shared shell for the legal pages: hero with the "last updated" pill, then a
 * sticky table of contents next to the long-form copy. Each entry in
 * `sections` must match an `<h3 id>` inside `children`.
 */
export default function LegalPage({ eyebrow, title, lead, sections, intro, children }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Reveal style={{ maxWidth: '48rem' }}>
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)' }}>
              {title}
            </h1>
            <p className="page-lead">{lead}</p>
            <p style={{ marginTop: 26 }}>
              <span className="updated">
                <IconLock width="14" height="14" /> Last updated {LEGAL.lastUpdated}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {intro}

      <section className="section-tight">
        <div className="container split split--sticky">
          <Reveal>
            <nav className="toc" aria-label="On this page">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}>
                  {s.label}
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal className="prose legal" delay={100}>
            {children}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
