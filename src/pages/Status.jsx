import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import Faq from '../components/Faq'
import Avatar from '../components/Avatar'
import SmartLink from '../components/SmartLink'
import MoreFeatures from '../components/sections/MoreFeatures'
import { LINKS } from '../config/links'
import { IconArrowUpRight, IconDownload } from '../components/Icons'
import {
  EditorArt,
  EverydayStatusCard,
  GalleryArt,
  HeroStatusCard,
  MentionStatusCard,
  PrivacyStatusCard,
} from '../components/status/StatusMockups'

/* scattered story-ring avatars around the "go beyond words" statement */
const CLOUD = [
  { name: 'Ayesha', size: 40, left: '3%', top: '4%', d: '0s' },
  { name: 'Bilal', size: 34, left: '17%', top: '48%', d: '1.1s' },
  { name: 'Hina', size: 44, left: '31%', top: '0%', d: '2s' },
  { name: 'Adil', size: 32, left: '48%', top: '58%', d: '0.6s' },
  { name: 'Sana R', size: 42, left: '63%', top: '10%', d: '1.6s' },
  { name: 'Zoya', size: 34, left: '79%', top: '52%', d: '0.3s' },
  { name: 'Rehan', size: 38, left: '91%', top: '8%', d: '2.4s' },
]

const MOMENT_CARDS = [
  {
    title: 'Tell a story with text, photos or video',
    text: 'Share your favourite holiday snaps, show off your latest kitchen creation, or capture what is happening in the moment.',
    art: <GalleryArt />,
  },
  {
    title: 'Make it your own',
    text: 'Add stickers, GIFs and overlay text, and make every status a personal one.',
    art: <EditorArt />,
  },
  {
    title: 'Keep it for 24 hours',
    text: 'Every status disappears from view after a day  unless you save it to your own updates.',
    art: <GalleryArt />,
  },
]

const DISCOVER = [
  {
    title: 'Privacy',
    text: 'Your personal messages stay between you and the people you send them to.',
    href: LINKS.security,
    seed: 1,
  },
  {
    title: 'Calling',
    text: 'Free voice and video calls with no time limits, one-on-one or in groups.',
    href: LINKS.calling,
    seed: 3,
  },
  {
    title: 'Messaging',
    text: 'Fast, simple and secure messaging with the people who matter most.',
    href: LINKS.messaging,
    seed: 6,
  },
]

const FAQS = [
  {
    q: 'What is M2M Status and how to use it?',
    a: 'Status lets you share photos, videos, voice notes and text that disappear after 24 hours. Open the Updates tab, tap the camera or pencil icon, create your update and choose who can see it.',
  },
  {
    q: 'About Status privacy',
    a: 'You decide the audience for every status: all your contacts, your contacts except a few, or only a chosen list. Your choice is remembered for the next update until you change it.',
  },
  {
    q: 'How to delete a status',
    a: 'Open the Updates tab, tap your own status, then tap the menu and choose Delete. It is removed for everyone straight away, even if it has already been viewed.',
  },
  {
    q: 'How to use status mentions',
    a: 'Add a mention sticker to your status to tag the people in it. They get a notification and can re-share your update to their own status.',
  },
]

export default function Status() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="page-hero">
        <div className="container split">
          <Reveal className="split__copy">
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)' }}>
              Stay in touch
              <br />
              with Status
            </h1>
            <p className="lead">
              Share photos, videos, voice notes, and text with your people on M2M Status.
              Personalize them by adding stickers, GIFs, and more. They'll disappear from view
              after 24 hours.
            </p>
            <p style={{ marginTop: 28 }}>
              <SmartLink className="btn btn--lg" href={LINKS.download}>
                Download <IconDownload width="16" height="16" className="btn__icon" />
              </SmartLink>
            </p>
          </Reveal>

          <Reveal className="split__media media-frame" delay={140}>
            <HeroStatusCard />
          </Reveal>
        </div>
      </section>

      {/* ---------- go beyond words ---------- */}
      <section className="section-tight">
        <div className="container">
          <div className="cloud" aria-hidden="true">
            {CLOUD.map((a, i) => (
              <Reveal
                key={a.name}
                delay={i * 90}
                style={{ left: a.left, top: a.top }}
                className="ring-avatar-wrap"
              >
                <span className="ring-avatar" style={{ animationDelay: a.d }}>
                  <Avatar name={a.name} size={a.size} />
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="greet__title" style={{ maxWidth: '30ch' }}>
              Go beyond words to share your everyday with the ones closest to you. You're always
              in control of who sees what you share, be as candid and real as you want.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ---------- share your everyday ---------- */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__copy">
            <h2 className="h2">Share your everyday</h2>
            <p className="lead">
              With stickers, avatars, GIFs and overlay text, you have all the creative options at
              your fingertips to express yourself, get creative, and share the real you.
            </p>
          </Reveal>
          <Reveal className="split__media media-frame" delay={140}>
            <EverydayStatusCard />
          </Reveal>
        </div>
      </section>

      {/* ---------- connect with friends and family ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__copy">
            <h2 className="h2">
              Connect with
              <br />
              friends and family
            </h2>
            <p className="lead">
              Keep everyone you love in the loop and mention them in your status when you have
              something you want them to see. They can like it and reply to it to start a
              conversation.
            </p>
          </Reveal>
          <Reveal className="split__media media-frame" delay={140}>
            <MentionStatusCard />
          </Reveal>
        </div>
      </section>

      {/* ---------- stay in control ---------- */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__copy">
            <h2 className="h2">Stay in control</h2>
            <p className="lead">
              Your status is yours to share. When you post, you decide who can see it, so you can
              share your behind-the-scenes with extra peace of mind.
            </p>
          </Reveal>
          <Reveal className="split__media media-frame" delay={140}>
            <PrivacyStatusCard />
          </Reveal>
        </div>
      </section>

      {/* ---------- share the moment (carousel) ---------- */}
      <section className="section tint">
        <div className="container split split--rail">
          <Reveal className="split__copy">
            <h2 className="h2">
              Share the
              <br />
              moment with
              <br />
              Status
            </h2>
            <p className="lead">
              Let friends and family know what's on your mind and make it your own with features
              that let you make something unique and expressive every time.
            </p>
          </Reveal>

          <Reveal className="split__media" delay={140} style={{ minWidth: 0 }}>
            <Carousel ariaLabel="Ways to use Status">
              {MOMENT_CARDS.map((c) => (
                <article className="pcard pcard--dark" data-card key={c.title}>
                  <div className="pcard__art pcard__art--flush">{c.art}</div>
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

      {/* ---------- FAQs ---------- */}
      <section className="section-tight">
        <div className="container">
          <Reveal className="faq__top">
            <h2 className="h2">Need more help?</h2>
            <a className="link" href={LINKS.faqs} target="_blank" rel="noreferrer">
              See all FAQs <IconArrowUpRight width="14" height="14" />
            </a>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={FAQS} variant="cards" />
          </Reveal>
        </div>
      </section>

      {/* ---------- discover more ---------- */}
      <MoreFeatures
        title={
          <>
            Discover
            <br />
            more features
          </>
        }
        body="Learn more about what else you can do on M2M."
        items={DISCOVER}
      />
    </main>
  )
}
