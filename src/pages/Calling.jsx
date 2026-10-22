import Reveal from '../components/Reveal'
import Accordion from '../components/Accordion'
import Faq from '../components/Faq'
import SmartLink from '../components/SmartLink'
import KeepGoing from '../components/sections/KeepGoing'
import MoreFeatures from '../components/sections/MoreFeatures'
import { LINKS } from '../config/links'
import { IconArrowUpRight, IconDownload } from '../components/Icons'
import {
  DevicesTrio,
  DuoPhones,
  HeroCallPhone,
  ScreenShareMock,
} from '../components/calling/CallingMockups'

const DEVICE_ITEMS = [
  {
    title: 'Connect across devices',
    body: 'Make calls on M2M from the device you have to hand: download the Android or iPhone app, or call straight from your web browser.',
  },
  {
    title: 'Hear and see people clearly',
    body: 'M2M adapts to your connection, so calls stay sharp on slow networks. Noise suppression keeps the focus on the voices that matter.',
  },
  {
    title: 'Keep things private',
    body: 'Voice and video calls on M2M are encrypted in transit, and we never record or store what is said or shown.',
  },
  {
    title: 'Add video effects',
    body: 'Blur your background, apply a filter or turn your camera off entirely. Show up exactly how you want to.',
  },
]

const CALL_ITEMS = [
  {
    title: 'Share your screen',
    body: 'Show the person you are calling your phone screen in real time to keep them updated when you use the M2M app.',
  },
  {
    title: 'React on calls',
    body: 'Send a quick reaction without interrupting whoever is speaking.',
  },
  {
    title: 'Call on bigger screens',
    body: 'Move a call to M2M Web in your browser and see more of the person you are talking to.',
  },
  {
    title: 'Plan calls ahead',
    body: 'Agree on a time in the chat, then start the call with a single tap when it comes around.',
  },
  {
    title: 'Start calls silently',
    body: 'Ring without waking anyone up  the other person can pick up whenever they are ready.',
  },
]

const DISCOVER = [
  {
    title: 'Message privately',
    text: 'Fast, simple and secure messaging with the people who matter most.',
    href: LINKS.messaging,
    seed: 2,
  },
  
  {
    title: 'Share your Status',
    text: 'Post photos, videos and voice updates that disappear after 24 hours.',
    href: LINKS.status,
    seed: 4,
  },
]

const FAQS = [
  {
    q: 'How do I make a voice call on M2M?',
    a: 'Open the chat with the person you want to reach, tap the call icon and choose Voice call. You can also start a call from the Calls tab.',
  },
  {
    q: 'How do I make a video call on M2M?',
    a: 'From the Calls tab, tap New call, then Video call, and pick a contact. You can also start a video call directly from any chat.',
  },
  {
    q: 'How do I use screen sharing on M2M?',
    a: 'While you are on a video call, tap the screen share icon in the call controls and confirm. The other person sees your screen until you stop sharing.',
  },
  {
    q: 'How do I call someone back from my call history?',
    a: 'Open the Calls tab and tap any entry in the list to ring that person again, or tap the info icon to see when the call happened and how long it lasted.',
  },
  {
    q: 'How do I use M2M on other devices?',
    a: 'Open M2M on your phone, go to Settings → Linked devices, and scan the code shown on M2M Web. You can link up to four browsers.',
  },
]

export default function Calling() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="page-hero">
        <div className="container split">
          <Reveal className="split__copy">
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4rem)' }}>
              Connection is
              <br />a call away
            </h1>
            <p className="lead">
              M2M video and voice calls are free*, have no time limits, and are never
              recorded. You can call the people who matter across iOS, Android and web,
              from your phone or your web browser, internationally.
            </p>
            <p style={{ marginTop: 28 }}>
              <SmartLink className="btn btn--lg" href={LINKS.download}>
                Download <IconDownload width="16" height="16" className="btn__icon" />
              </SmartLink>
            </p>
          </Reveal>

          <Reveal className="split__media media-frame" delay={140}>
            <HeroCallPhone />
          </Reveal>
        </div>
        <div className="container">
          <p className="page-hero__note">
            *Data charges may apply. Contact your provider for details.
          </p>
        </div>
      </section>

      {/* ---------- call easily and privately ---------- */}
      <section className="section-tight">
        <div className="container split split--reverse">
          <Reveal className="split__copy">
            <h2 className="h2">
              Call easily and
              <br />
              privately
            </h2>
            <p className="lead">
              Catch up on voice or video calls with those who matter most. Your calls on M2M
              are encrypted in transit and never recorded.
            </p>
            <p style={{ marginTop: 26 }}>
              <SmartLink className="btn btn--lg" href={LINKS.download}>
                Download <IconDownload width="16" height="16" className="btn__icon" />
              </SmartLink>
            </p>
          </Reveal>

          <Reveal className="split__media media-frame" delay={140}>
            <DuoPhones />
          </Reveal>
        </div>
      </section>

      {/* ---------- connect across devices (accordion) ---------- */}
      <section className="section tint">
        <div className="container split">
          <Reveal className="split__copy">
            <Accordion items={DEVICE_ITEMS} />
          </Reveal>
          <Reveal className="split__media" delay={140}>
            <DevicesTrio />
          </Reveal>
        </div>
      </section>

      {/* ---------- more call features (accordion) ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__copy">
            <Accordion items={CALL_ITEMS} />
          </Reveal>
          <Reveal className="split__media" delay={140}>
            <ScreenShareMock />
          </Reveal>
        </div>
      </section>

      {/* ---------- keep the conversation going ---------- */}
      <KeepGoing body="Stay connected anytime, anywhere. Calling is available on Android, iPhone and M2M Web." />

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

      {/* ---------- discover more ---------- */}
      <MoreFeatures
        body="Stay connected in even more ways using M2M. From private calls to secure messaging, plus everyday updates with Status, and more."
        items={DISCOVER}
      />
    </main>
  )
}
