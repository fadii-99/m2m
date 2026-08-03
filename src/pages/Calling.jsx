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
  GroupGridPhone,
  HeroCallPhone,
  ScreenShareMock,
} from '../components/calling/CallingMockups'

const DEVICE_ITEMS = [
  {
    title: 'Connect across devices',
    body: 'Make calls on M2M with the device you want by downloading our apps or right from your web browser. Make calls from your iOS, Android, Mac, Windows and web devices.',
  },
  {
    title: 'Hear and see people clearly',
    body: 'M2M adapts to your connection, so calls stay sharp on slow networks. Noise suppression keeps the focus on the voices that matter.',
  },
  {
    title: 'Keep things private',
    body: 'Every voice and video call on M2M is end-to-end encrypted, so nobody outside the call can listen in  not even M2M.',
  },
  {
    title: 'Add video effects',
    body: 'Blur your background, apply a filter or turn your camera off entirely. Show up exactly how you want to.',
  },
]

const GROUP_ITEMS = [
  {
    title: 'Share your screen',
    body: 'Show the group call your phone, tablet or laptop screen in real time to keep everyone updated when you use the M2M app.',
  },
  {
    title: 'React on calls and raise hands',
    body: 'Send a quick reaction without interrupting, or raise your hand when you want the floor.',
  },
  {
    title: 'Call on bigger screens',
    body: 'Move a call to your Mac, Windows PC or the web and see more of the people you are talking to.',
  },
  {
    title: 'Schedule group calls',
    body: 'Create a call link ahead of time, share it in the chat and let everyone join when it starts.',
  },
  {
    title: 'Start calls silently',
    body: 'Ring the group without waking everyone up  people can join whenever they are ready.',
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
    q: 'How do I make a group voice call on M2M?',
    a: 'Open the group chat, tap the call icon and choose Voice call. Select the people you want to ring and tap the call button  up to 32 people can join.',
  },
  {
    q: 'How do I make a group video call on M2M?',
    a: 'From the Calls tab, tap New call, then Video call, and pick the participants. You can also start a video call directly from any group chat.',
  },
  {
    q: 'How do I use screen sharing on M2M?',
    a: 'While you are on a video call, tap the screen share icon in the call controls and confirm. Everyone on the call sees your screen until you stop sharing.',
  },
  {
    q: 'How do I schedule a call or create an event on M2M?',
    a: 'In a group chat, tap the attachment icon and choose Event. Set the date and time, and M2M creates a call link everyone in the group can join.',
  },
  {
    q: 'How do I use M2M on other devices?',
    a: 'Open M2M on your phone, go to Settings → Linked devices, and scan the code shown on M2M Web or the desktop app. You can link up to four devices.',
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
              M2M video and voice calls are free*, have no time limits, and are end-to-end
              encrypted. You can call one-on-one or in groups across iOS, Android and web,
              using your mobile, desktop or tablet devices internationally.
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
              are always end-to-end encrypted.
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

      {/* ---------- calling for groups ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__copy">
            <h2 className="h2">Calling for groups</h2>
            <p className="lead">
              Unlimited duration for your group calls. Get more done and have fun with your
              groups of up to 32 people.
            </p>
            <p style={{ marginTop: 26 }}>
              <SmartLink className="btn btn--lg" href={LINKS.download}>
                Download <IconDownload width="16" height="16" className="btn__icon" />
              </SmartLink>
            </p>
          </Reveal>
          <Reveal className="split__media media-frame" delay={140}>
            <GroupGridPhone />
          </Reveal>
        </div>
      </section>

      {/* ---------- group features (accordion) ---------- */}
      <section className="section tint">
        <div className="container split">
          <Reveal className="split__copy">
            <Accordion items={GROUP_ITEMS} />
          </Reveal>
          <Reveal className="split__media" delay={140}>
            <ScreenShareMock />
          </Reveal>
        </div>
      </section>

      {/* ---------- keep the conversation going ---------- */}
      <KeepGoing body="Stay connected anytime, anywhere on your preferred device by downloading our apps. Calling is available on iOS, Android, Mac, Windows and web." />

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
        body="Stay connected in even more ways using M2M. From private calls to secure group video calls, plus everyday updates with Status, and more."
        items={DISCOVER}
      />
    </main>
  )
}
