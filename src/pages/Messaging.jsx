import Reveal from '../components/Reveal'
import Accordion from '../components/Accordion'
import Carousel from '../components/Carousel'
import Faq from '../components/Faq'
import SmartLink from '../components/SmartLink'
import KeepGoing from '../components/sections/KeepGoing'
import MoreFeatures from '../components/sections/MoreFeatures'
import { LINKS } from '../config/links'
import { IconArrowUpRight, IconChevronRight, IconDownload } from '../components/Icons'
import {
  AlbumPhone,
  ChatListPhone,
  FilePhone,
  HdPhotoPhone,
  HeroChatPhone,
  StickerPhone,
} from '../components/messaging/MessagingMockups'

const ORGANIZE_ITEMS = [
  {
    title: 'Inbox filters',
    body: 'Stay organized and find your most important conversations with filters for All, Unread and Archived.',
    ctaLabel: 'Learn how',
    href: LINKS.helpCenter,
  },
  {
    title: 'Pinned messages',
    body: 'Pin the message everyone keeps scrolling back for  an address, a date, a link  right to the top of the chat.',
    ctaLabel: 'Learn how',
    href: LINKS.helpCenter,
  },
  {
    title: 'Message formatting',
    body: 'Make a point stand out with bold, italics, lists, quotes and inline code, straight from the keyboard.',
    ctaLabel: 'Learn how',
    href: LINKS.helpCenter,
  },
  {
    title: 'Message translations',
    body: 'Translate an incoming message into your language without leaving the chat  the translation happens on your device.',
    ctaLabel: 'Learn how',
    href: LINKS.helpCenter,
  },
]

const EXPRESS_ITEMS = [
  {
    title: 'Stickers and GIFs',
    body: 'Get creative with searchable and customizable stickers, avatars, and GIFs.',
  },
  {
    title: 'Reactions',
    body: 'Answer without adding another message  press and hold to drop a reaction on anything in the chat.',
  },
  {
    title: 'Voice notes',
    body: 'Hold to record, release to send. Play voice notes at double speed and pick up right where you left off.',
  },
]

const SHARE_CARDS = [
  {
    title: 'Send photos and videos',
    text: 'Capture and edit everyday moments, even if you are on a slow connection.',
    art: <AlbumPhone />,
  },
  {
    title: 'Make them HD',
    text: 'Send any video or photo in HD quality without losing the detail that matters.',
    art: <HdPhotoPhone />,
  },
  {
    title: 'Share large files',
    text: 'Send documents, audio and archives up to 50 MB directly inside your chats.',
    art: <FilePhone />,
  },
]

const DISCOVER = [
  {
    title: 'Privacy',
    text: 'See what M2M stores, why it needs it, and the controls you have.',
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
    title: 'Status',
    text: 'Post photos, videos and voice updates that disappear after 24 hours.',
    href: LINKS.status,
    seed: 6,
  },
]

const FAQS = [
  {
    q: 'How do I use inbox filters?',
    a: 'At the top of the Chats tab, tap All, Unread or Archived to narrow the list down to just those conversations. The filter resets the next time you open M2M.',
  },
  {
    q: 'How do I pin a message?',
    a: 'Press and hold any message, tap the menu and choose Pin. Pinned messages sit at the top of the chat until you unpin them.',
  },
  {
    q: 'How can I format my messages?',
    a: 'Wrap text in *asterisks* for bold, _underscores_ for italics and ```backticks``` for monospace. You can also select text and pick a format from the menu.',
  },
  {
    q: 'How do I translate a message?',
    a: 'Press and hold the message and choose Translate. Download your language pack once and translations work on your device, even offline.',
  },
  {
    q: 'How do I send videos and photos?',
    a: 'Tap the attachment icon in the chat, choose Gallery or Camera, pick your media and send. You can select several items and send them as one album.',
  },
  {
    q: 'How do I send large files?',
    a: 'Tap the attachment icon and choose Document. M2M supports files up to 50 MB, sent over an encrypted connection.',
  },
  {
    q: 'How do I send voice notes?',
    a: 'Press and hold the microphone icon and speak. Slide up to lock the recording so you can keep talking hands-free, then tap send.',
  },
  {
    q: 'How do I use stickers?',
    a: 'Open the sticker tray from the composer, search for a sticker or tap Create to turn any photo into your own.',
  },
  {
    q: 'How do I send message reactions?',
    a: 'Press and hold a message and pick an emoji from the reaction bar. Tap the reaction again to remove it.',
  },
  {
    q: 'How can I manage my media?',
    a: 'Open a chat, go to the contact info screen, and tap Media, links and docs to review or delete everything shared in that chat.',
  },
  {
    q: 'How can I manage my storage?',
    a: 'Go to Settings → Storage and data → Manage storage to see what is taking up space and clear large or forwarded files in bulk.',
  },
]

export default function Messaging() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="page-hero">
        <div className="container split">
          <Reveal className="split__copy">
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)' }}>
              Connect your
              <br />
              way
            </h1>
            <p className="lead">
              On M2M, conversations can be expressive, fun and entirely you. Your messages
              travel over encrypted connections and sync between your phone and the web, with
              no ads in your chats.
            </p>
            <p style={{ marginTop: 28 }}>
              <SmartLink className="btn btn--lg" href={LINKS.download}>
                Download <IconDownload width="16" height="16" className="btn__icon" />
              </SmartLink>
            </p>
          </Reveal>

          <Reveal className="split__media media-frame" delay={140}>
            <HeroChatPhone />
          </Reveal>
        </div>
      </section>

      {/* ---------- organize your messages ---------- */}
      <section className="section tint">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">Organize your messages</h2>
            <p>Keep your conversations organized, formatted, and translated.</p>
          </Reveal>

          <div className="split">
            <Reveal className="split__media media-frame">
              <ChatListPhone />
            </Reveal>
            <Reveal className="split__copy" delay={140}>
              <Accordion items={ORGANIZE_ITEMS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- share more than words ---------- */}
      <section className="section">
        <div className="container split split--rail">
          <Reveal className="split__copy">
            <h2 className="h2">
              Share more
              <br />
              than words
            </h2>
            <p className="lead">
              Send high quality photos, videos and large files directly in your chats.
            </p>
          </Reveal>

          <Reveal className="split__media" delay={140} style={{ minWidth: 0 }}>
            <Carousel ariaLabel="Ways to share on M2M">
              {SHARE_CARDS.map((c) => (
                <article className="pcard" data-card key={c.title}>
                  <div className="pcard__art pcard__art--phone">{c.art}</div>
                  <div className="pcard__body">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <SmartLink
                      className="link"
                      href={LINKS.helpCenter}
                      style={{ marginTop: 14, display: 'inline-flex' }}
                    >
                      Learn more <IconChevronRight width="14" height="14" />
                    </SmartLink>
                  </div>
                </article>
              ))}
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* ---------- express yourself ---------- */}
      <section className="section tint">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">Express yourself in your chats</h2>
            <p>
              For when you need more than just words, lean on M2M's variety of features to
              express yourself  stickers, GIFs, reactions, voice notes and more.
            </p>
          </Reveal>

          <div className="split">
            <Reveal className="split__media media-frame">
              <StickerPhone />
            </Reveal>
            <Reveal className="split__copy" delay={140}>
              <Accordion items={EXPRESS_ITEMS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- keep the conversation going ---------- */}
      <KeepGoing />

      {/* ---------- FAQs ---------- */}
      <section className="section-tight plain">
        <div className="container">
          <Reveal className="faq__top">
            <h2 className="h2">Need more help?</h2>
            <a className="link" href={LINKS.faqs} target="_blank" rel="noreferrer">
              See all FAQs <IconArrowUpRight width="14" height="14" />
            </a>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ---------- more features ---------- */}
      <MoreFeatures
        title="More features"
        body="Learn more about what else you can do on M2M."
        items={DISCOVER}
      />
    </main>
  )
}
