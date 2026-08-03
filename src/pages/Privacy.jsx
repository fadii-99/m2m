/**
 * PLACEHOLDER LEGAL COPY.
 *
 * The wording below describes how M2M is designed, in plain language. It is
 * not a reviewed privacy policy or terms of service  have a lawyer check and
 * rewrite these sections before this page goes live, and set LAST_UPDATED to
 * the date the reviewed text was published.
 */
import Reveal from '../components/Reveal'
import Faq from '../components/Faq'
import SmartLink from '../components/SmartLink'
import EncryptedMockup from '../components/mockups/EncryptedMockup'
import { LINKS } from '../config/links'
import { IconChevronRight, IconLock } from '../components/Icons'

const LAST_UPDATED = 'August 2026'

const SECTIONS = [
  { id: 'encryption', label: 'End-to-end encryption' },
  { id: 'collect', label: 'What we collect' },
  { id: 'never', label: 'What we never do' },
  { id: 'controls', label: 'Your controls' },
  { id: 'sharing', label: 'Sharing and legal requests' },
  { id: 'terms', label: 'Terms of use' },
  { id: 'changes', label: 'Changes to this policy' },
]

const FAQS = [
  {
    q: 'Can M2M read my messages?',
    a: 'No. Messages, calls and status updates are end-to-end encrypted, which means they are encrypted on your device and can only be decrypted on the device of the person you sent them to. We do not hold the keys.',
  },
  {
    q: 'Are my backups encrypted too?',
    a: 'Backups are encrypted before they leave your device. If you turn on an end-to-end encrypted backup, you also control the key  which means nobody can restore it without your password or recovery key, including us.',
  },
  {
    q: 'Do you sell my data or show me ads?',
    a: 'No. M2M does not sell personal data and does not run ads. There is no advertising profile built from your activity.',
  },
  {
    q: 'How do I delete my account and my data?',
    a: 'Go to Settings → Account → Delete my account. This removes your account, your message history from our servers, and your profile information. Messages already delivered to other people stay on their devices.',
  },
]

export default function Privacy() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="page-hero">
        <div className="container split">
          <Reveal className="split__copy">
            <div className="eyebrow">Privacy</div>
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)' }}>
              Your privacy
              <br />
              is built in
            </h1>
            <p className="page-lead">
              Not a setting you have to switch on. Every message, call and status update on M2M
              is end-to-end encrypted by default, so what you say stays between you and the
              people you say it to.
            </p>
            <p style={{ marginTop: 26 }}>
              <span className="updated">
                <IconLock width="14" height="14" /> Last updated {LAST_UPDATED}
              </span>
            </p>
          </Reveal>

          <Reveal className="split__media media-frame" delay={140}>
            <EncryptedMockup />
          </Reveal>
        </div>
      </section>

      {/* ---------- policy body ---------- */}
      <section className="section-tight">
        <div className="container split split--sticky">
          <Reveal>
            <nav className="toc" aria-label="On this page">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`}>
                  {s.label}
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal className="prose" delay={100}>
            <h3 id="encryption">End-to-end encryption</h3>
            <p>
              Your messages are scrambled on your device before they are sent, and can only be
              unscrambled on the device of the person receiving them. Nobody in between can read
              them  not the networks they travel over, and not M2M.
            </p>
            <p>This applies to everything you send through a chat:</p>
            <ul>
              <li>Text messages, photos, videos, documents and voice notes</li>
              <li>Voice and video calls, one-on-one and in groups</li>
              <li>Status updates and the replies people send to them</li>
              <li>Your profile photo and about text</li>
            </ul>

            <h3 id="collect">What we collect</h3>
            <p>
              We try to hold as little as possible. To run the service we need to know a small
              amount about your account:
            </p>
            <ul>
              <li>
                <strong>Your phone number</strong>  this is your account, and how people find
                you.
              </li>
              <li>
                <strong>Your profile</strong>  the name, photo and about text you choose to
                show.
              </li>
              <li>
                <strong>Basic delivery data</strong>  enough to route a message to the right
                device and confirm it arrived.
              </li>
              <li>
                <strong>Diagnostics</strong>  crash and performance reports that help us fix
                what breaks.
              </li>
            </ul>
            <p>
              Undelivered messages sit on our servers in encrypted form until the recipient's
              device picks them up, and are removed once they are delivered.
            </p>

            <h3 id="never">What we never do</h3>
            <ul>
              <li>We do not sell your personal data.</li>
              <li>We do not show ads or build an advertising profile from your activity.</li>
              <li>We do not keep a record of who you message or call.</li>
              <li>We do not read your messages, and we cannot  see above.</li>
            </ul>

            <h3 id="controls">Your controls</h3>
            <p>Privacy settings live in the app, and you can change them at any time.</p>
            <ul>
              <li>
                <strong>Choose your audience</strong>  decide exactly who sees each status
                update, your last seen, your profile photo and your about text.
              </li>
              <li>
                <strong>Disappearing messages</strong>  set new messages in a chat to delete
                themselves after a set time.
              </li>
              <li>
                <strong>Block and report</strong>  stop someone contacting you, and report a
                chat if you need to.
              </li>
              <li>
                <strong>Export or delete</strong>  request a copy of your account information,
                or delete your account and its data outright.
              </li>
            </ul>

            <h3 id="sharing">Sharing and legal requests</h3>
            <p>
              We share information with service providers who help us operate M2M  for example
              to deliver push notifications  and only what they need to do that job.
            </p>
            <p>
              We may also be required to respond to valid legal requests. Because your messages
              are end-to-end encrypted, we cannot hand over their contents; there is nothing
              readable for us to produce. What can be requested is limited to the account
              information described above.
            </p>

            <h3 id="terms">Terms of use</h3>
            <p>
              By using M2M you agree to use it lawfully and not to harm other people on the
              service. In short:
            </p>
            <ul>
              <li>You need to be old enough to use M2M where you live.</li>
              <li>
                Do not use M2M to send spam or malware, to harass or impersonate people, or to
                break the law.
              </li>
              <li>
                Do not try to reverse engineer, overload or interfere with the service or the
                people using it.
              </li>
              <li>
                We may suspend accounts that break these rules, and you can stop using M2M and
                delete your account at any time.
              </li>
            </ul>
            <p>
              M2M is provided as is. We work hard to keep it reliable, but we cannot promise it
              will be available without interruption.
            </p>

            <h3 id="changes">Changes to this policy</h3>
            <p>
              If we change how M2M handles your information, we will update this page and change
              the date at the top. If the change is significant, we will tell you in the app
              before it takes effect.
            </p>
            <p>
              Questions about any of this?{' '}
              <SmartLink className="link" href={LINKS.contact}>
                Get in touch <IconChevronRight width="14" height="14" />
              </SmartLink>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section className="section-tight tint">
        <div className="container">
          <Reveal className="faq__top">
            <h2 className="h2">Common questions</h2>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={FAQS} variant="cards" />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
