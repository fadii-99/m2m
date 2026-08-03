import { useState } from 'react'
import Reveal from '../components/Reveal'
import SmartLink from '../components/SmartLink'
import { LINKS } from '../config/links'
import {
  IconArrowUpRight,
  IconBriefcase,
  IconCheck,
  IconChevronRight,
  IconHelp,
  IconMail,
  IconShield,
} from '../components/Icons'

const CHANNELS = [
  {
    Icon: IconHelp,
    title: 'Help Center',
    body: 'Step-by-step answers for the things people ask most  setup, backups, groups and privacy settings.',
    action: 'Browse the Help Center',
    href: LINKS.helpCenter,
    external: true,
  },
  {
    Icon: IconMail,
    title: 'Support',
    body: 'Something not working the way it should? Send us the details and we will take a look.',
    action: LINKS.supportEmail,
    href: `mailto:${LINKS.supportEmail}`,
  },
  {
    Icon: IconBriefcase,
    title: 'Business and partnerships',
    body: 'Bringing M2M to your customers, or want to work together? Start here.',
    action: LINKS.businessEmail,
    href: `mailto:${LINKS.businessEmail}`,
  },
  {
    Icon: IconShield,
    title: 'Report a security issue',
    body: 'Found a vulnerability? Tell us privately and we will get back to you quickly.',
    action: LINKS.securityEmail,
    href: `mailto:${LINKS.securityEmail}`,
  },
]

const TOPICS = [
  'A problem with the app',
  'Account or login',
  'Privacy question',
  'Business enquiry',
  'Press enquiry',
  'Something else',
]

const EMAIL_FOR_TOPIC = {
  'Business enquiry': LINKS.businessEmail,
  'Press enquiry': LINKS.pressEmail,
}

const EMPTY = { name: '', email: '', topic: TOPICS[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((v) => ({ ...v, [key]: undefined }))
    setSent(false)
  }

  const submit = (e) => {
    e.preventDefault()

    const next = {}
    if (!form.name.trim()) next.name = 'Tell us your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'Enter a valid email address'
    if (form.message.trim().length < 10) next.message = 'Add a few more details (10+ characters)'

    setErrors(next)
    if (Object.keys(next).length) return

    // Frontend-only site: hand the message to the visitor's mail client rather
    // than pretending it was submitted to a server that does not exist.
    const to = EMAIL_FOR_TOPIC[form.topic] || LINKS.supportEmail
    const subject = `[${form.topic}] from ${form.name.trim()}`
    const body = `${form.message.trim()}\n\n\n${form.name.trim()}\n${form.email.trim()}`

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <Reveal style={{ maxWidth: '46rem' }}>
            <div className="eyebrow">Contact us</div>
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)' }}>
              Get in touch
            </h1>
            <p className="page-lead">
              Whether something is broken, you have a question about privacy, or you want to
              work with us  here is how to reach the right people.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- channels ---------- */}
      <section className="section-tight">
        <div className="container channels">
          {CHANNELS.map(({ Icon, title, body, action, href, external }, i) => (
            <Reveal
              key={title}
              className="channel"
              as="a"
              href={href}
              delay={i * 90}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="channel__icon">
                <Icon width="19" height="19" />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="channel__go">
                {action}
                {external ? (
                  <IconArrowUpRight width="14" height="14" />
                ) : (
                  <IconChevronRight width="14" height="14" />
                )}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- form ---------- */}
      <section className="section-tight tint">
        <div className="container split split--rail">
          <Reveal className="split__copy">
            <h2 className="h2">Send us a message</h2>
            <p className="lead">
              Fill this in and we will route it to the right team. The more detail you can give
              us  your device, what you were doing, what happened  the faster we can help.
            </p>
            <p className="lead" style={{ marginTop: 16 }}>
              Looking for how M2M handles your data?{' '}
              <SmartLink className="link" href={LINKS.privacy}>
                Read the privacy page <IconChevronRight width="14" height="14" />
              </SmartLink>
            </p>
          </Reveal>

          <Reveal delay={120} style={{ minWidth: 0 }}>
            <form className="form" onSubmit={submit} noValidate>
              <div className="form__row">
                <div className={`field${errors.name ? ' field--error' : ''}`}>
                  <label htmlFor="c-name">Your name</label>
                  <input
                    id="c-name"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Ayesha Khan"
                    autoComplete="name"
                  />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </div>

                <div className={`field${errors.email ? ' field--error' : ''}`}>
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="c-topic">What is this about?</label>
                <select id="c-topic" value={form.topic} onChange={set('topic')}>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className={`field${errors.message ? ' field--error' : ''}`}>
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us what happened…"
                />
                {errors.message && <span className="field__error">{errors.message}</span>}
              </div>

              <button className="btn btn--lg" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                Send message
              </button>

              <p className="form__note">
                This opens the message in your own email app  nothing is sent from this page.
              </p>

              {sent && (
                <div className="form__sent" role="status">
                  <IconCheck width="17" height="17" />
                  <span>
                    Your email app should have opened with the message ready to go. If nothing
                    happened, write to{' '}
                    <a
                      className="link"
                      href={`mailto:${EMAIL_FOR_TOPIC[form.topic] || LINKS.supportEmail}`}
                    >
                      {EMAIL_FOR_TOPIC[form.topic] || LINKS.supportEmail}
                    </a>{' '}
                    directly.
                  </span>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
