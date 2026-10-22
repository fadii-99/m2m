/**
 * Privacy Policy. Written against what the Android/iOS app, M2M Web and the
 * backend actually do — if a data flow changes (new SDK, new permission, new
 * retention rule), update the matching section here and LEGAL.lastUpdated.
 */
import Reveal from '../components/Reveal'
import LegalPage from '../components/LegalPage'
import SmartLink from '../components/SmartLink'
import { LINKS } from '../config/links'
import { LEGAL, operatorName } from '../config/legal'
import { IconChat, IconShield, IconStatus, IconUsers } from '../components/Icons'

const SECTIONS = [
  { id: 'scope', label: 'Who we are' },
  { id: 'account', label: 'Account and profile' },
  { id: 'content', label: 'Messages and media' },
  { id: 'contacts', label: 'Your contacts' },
  { id: 'status', label: 'Status updates' },
  { id: 'calls', label: 'Voice and video calls' },
  { id: 'automatic', label: 'Device and usage data' },
  { id: 'permissions', label: 'App permissions' },
  { id: 'use', label: 'How we use information' },
  { id: 'sharing', label: 'Who we share it with' },
  { id: 'retention', label: 'How long we keep it' },
  { id: 'security', label: 'Security' },
  { id: 'rights', label: 'Your choices and rights' },
  { id: 'children', label: 'Children' },
  { id: 'transfers', label: 'International transfers' },
  { id: 'website', label: 'This website' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact us' },
]

const GLANCE = [
  {
    Icon: IconUsers,
    title: 'Phone number account',
    body: 'You sign in with your phone number and a one-time code. Name, about and photo are up to you.',
  },
  {
    Icon: IconChat,
    title: 'Stored to sync',
    body: 'Messages and media are kept on our servers so they reach the other person and sync to M2M Web.',
  },
  {
    Icon: IconStatus,
    title: 'Status lasts 24 hours',
    body: 'Status updates expire after a day and their photos and videos are deleted from our storage.',
  },
  {
    Icon: IconShield,
    title: 'No ads, no data sales',
    body: 'M2M has no advertising or analytics SDKs, and we do not sell or rent your information.',
  },
]

const PERMISSIONS = [
  ['Contacts', 'To show which of your contacts use M2M and let you start chats with them.'],
  ['Camera', 'To take photos and videos to send, and for video calls.'],
  ['Microphone', 'For voice and video calls and to record voice messages.'],
  [
    'Photos, videos, audio and files',
    'To attach media and documents you choose, and to save received media to your device.',
  ],
  ['Notifications', 'To alert you to new messages and incoming calls.'],
  [
    'Full-screen alerts, display over other apps, foreground service',
    'To show an incoming call screen and keep an active call running while you use other apps.',
  ],
]

const RETENTION = [
  ['Account and profile', 'Until you delete your account.'],
  [
    'Messages and media',
    'Until the sender deletes the message for everyone, or the account is deleted.',
  ],
  ['Status updates', '24 hours, after which the photo or video is deleted from our storage.'],
  ['Uploaded contacts and invite records', 'Until you delete your account or ask us to remove them.'],
  ['Call records (who, when, how long)', 'Until your account is deleted. Call audio and video are never stored.'],
  ['One-time login codes', 'Valid for 10 minutes; kept only as a used/expired record afterwards.'],
  ['Web linking codes (QR)', 'Valid for 5 minutes.'],
  ['Push notification tokens', 'Until you sign out, the token changes, or your account is deleted.'],
  ['Website contact form messages', 'As long as needed to answer you and keep a record of the request.'],
]

function Table({ head, rows }) {
  return (
    <div className="legal-table" role="region" aria-label={head[0]} tabIndex={0}>
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <th scope="row">{a}</th>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const glance = (
  <section className="section-tight tint">
    <div className="container">
      <Reveal className="faq__top">
        <h2 className="h2">At a glance</h2>
      </Reveal>
      <div className="vgrid">
        {GLANCE.map(({ Icon, title, body }, i) => (
          <Reveal key={title} className="vcard" delay={i * 90}>
            <span className="vcard__icon">
              <Icon width="20" height="20" />
            </span>
            <h3>{title}</h3>
            <p>{body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      lead="What information M2M collects when you use the app, M2M Web and this website, why we need it, who processes it, how long we keep it, and the choices you have."
      sections={SECTIONS}
      intro={glance}
    >
      <h3 id="scope">Who we are</h3>
      <p>
        M2M (also called MSG2MSG) is a messaging app for text, photos, videos, voice messages,
        documents, status updates and one-to-one voice and video calls. It is operated by{' '}
        {operatorName} (“we”, “us”). This policy covers the M2M apps for Android and iOS, M2M
        Web at {LEGAL.webApp.replace('https://', '')}, and the website at{' '}
        {LEGAL.site.replace('https://', '')}.
      </p>
      <p>
        By using M2M you agree to our{' '}
        <SmartLink className="link" href={LINKS.terms}>
          Terms of Service
        </SmartLink>
        , which include this policy.
      </p>

      <h3 id="account">Account and profile</h3>
      <ul>
        <li>
          <strong>Phone number and country code.</strong> Your phone number is your account. We
          use it to send you a one-time verification code by SMS and to let people who have your
          number find you.
        </li>
        <li>
          <strong>Profile name, about text and profile photo.</strong> These are optional, and you
          can change or remove them in Settings at any time. They are visible to other M2M users
          you chat with and to users who have your number saved in their contacts.
        </li>
      </ul>
      <p>We do not ask for your email address, date of birth or a password to use the app.</p>

      <h3 id="content">Messages and media</h3>
      <p>
        When you send a message, we store it on our servers so it can be delivered to the other
        person, synced to your other devices (including M2M Web) and shown in your chat history.
        This includes:
      </p>
      <ul>
        <li>Text messages, including edits, replies and forwards</li>
        <li>Photos, videos, voice messages and documents, with their file name, type and size</li>
        <li>Reactions, and when each message was sent, delivered and read</li>
      </ul>
      <p>
        <strong>M2M messages are not end-to-end encrypted.</strong> They are encrypted while
        travelling between your device and our servers (HTTPS/TLS), and are stored on our
        servers in a form our systems can process. Access is restricted to the systems that run
        the service and to authorised staff who need it to operate M2M, investigate a report or
        meet a legal obligation. We do not read your messages for advertising or profiling.
      </p>
      <p>
        A copy of your chats and received media is also kept on your device so the app can open
        quickly and work offline.
      </p>

      <h3 id="contacts">Your contacts</h3>
      <p>
        If you allow M2M to access your contacts, the app reads the phone numbers and names in
        your address book, converts the numbers to international format and uploads them to our
        servers. We use them only to show you which of your contacts use M2M and to let you
        start chats or invite people. This includes numbers of people who do not use M2M.
      </p>
      <p>
        We keep this list linked to your account so contact matching stays up to date. When you
        invite a contact, we also record their number, the name you saved and the time of the
        invitation. We do not contact the people in your address book for marketing, and we do
        not sell or share your contact list.
      </p>
      <p>
        Contact access is optional. You can deny or withdraw it in your phone’s settings; you
        can still chat with people by phone number. To have uploaded contacts removed from our
        servers, email{' '}
        <a className="link" href={`mailto:${LEGAL.privacyEmail}`}>
          {LEGAL.privacyEmail}
        </a>{' '}
        or delete your account.
      </p>

      <h3 id="status">Status updates</h3>
      <p>
        A status is a text, photo or video update that your contacts can see. You choose its
        audience: all your contacts, all contacts except people you pick, or only people you pick.
        We record who has viewed each status so you can see the list.
      </p>
      <p>
        Statuses expire 24 hours after they are posted. The photo or video is then deleted from
        our storage, usually within the hour.
      </p>

      <h3 id="calls">Voice and video calls</h3>
      <p>
        Calls are one-to-one and run on the Amazon Chime SDK, a real-time communications service
        from Amazon Web Services. Audio and video are streamed live between the people on the
        call through Amazon’s media servers and are encrypted in transit.{' '}
        <strong>We do not record or store the audio or video of calls.</strong>
      </p>
      <p>
        We keep a record of each call — who called whom, voice or video, when it started and
        ended, its duration and whether it was answered or missed — to show your call history and
        deliver call notifications.
      </p>

      <h3 id="automatic">Device and usage data</h3>
      <ul>
        <li>
          <strong>Device details:</strong> a device identifier, platform (Android or iOS), app
          version and push notification tokens (Firebase Cloud Messaging, and Apple VoIP push on
          iPhone) so messages and calls reach the right device.
        </li>
        <li>
          <strong>Linked devices:</strong> when you link M2M Web by scanning a QR code, we store a
          label for that browser (for example “Chrome on Windows”) so you can see and unlink it.
        </li>
        <li>
          <strong>Activity status:</strong> whether you are online, typing, or when you were last
          active, which people you chat with can see.
        </li>
        <li>
          <strong>Server logs:</strong> IP address, request times and error information, used to
          keep the service running and secure.
        </li>
      </ul>
      <p>
        M2M does not use analytics, advertising or crash-reporting SDKs, and does not collect
        your location.
      </p>

      <h3 id="permissions">App permissions</h3>
      <p>
        The app asks for each permission when you first use the feature that needs it. You can
        say no, and you can change your choice later in your phone’s settings; only the related
        feature stops working.
      </p>
      <Table head={['Permission', 'Why M2M uses it']} rows={PERMISSIONS} />

      <h3 id="use">How we use information</h3>
      <ul>
        <li>To create your account and verify your phone number</li>
        <li>To deliver messages, media, status updates and calls, and sync them across devices</li>
        <li>To send notifications about new messages and incoming or missed calls</li>
        <li>To show you which contacts use M2M</li>
        <li>To prevent spam, fraud and abuse, enforce our Terms and keep M2M secure</li>
        <li>To answer support requests and reports</li>
        <li>To comply with the law</li>
      </ul>
      <p>
        We do not use your information for advertising, and we do not build marketing profiles.
        Where data protection law requires a legal basis, we rely on performing our contract with
        you (running the service), your consent (contacts, camera, microphone and other
        permissions, which you can withdraw), our legitimate interests in keeping M2M safe and
        working, and legal obligations.
      </p>

      <h3 id="sharing">Who we share it with</h3>
      <p>We share information only with these parties, and only what each one needs:</p>
      <ul>
        <li>
          <strong>Other M2M users</strong> receive the messages, media and statuses you send them,
          and can see your profile and activity status.
        </li>
        <li>
          <strong>Amazon Web Services</strong> hosts our servers, database and media storage, and
          carries voice and video calls (Amazon Chime SDK).
        </li>
        <li>
          <strong>Google Firebase Cloud Messaging</strong> delivers push notifications. A
          notification contains the sender’s name and a short preview of the message (up to 100
          characters for text messages), or a label such as “Photo” or “Voice message”.
        </li>
        <li>
          <strong>Apple Push Notification service</strong> delivers incoming-call notifications
          on iPhone.
        </li>
        <li>
          <strong>An SMS provider</strong> delivers your one-time verification code to your phone
          number.
        </li>
        <li>
          <strong>Authorities</strong>, when we receive a valid legal request or must act to
          protect someone’s safety. We disclose only what the request requires.
        </li>
        <li>
          <strong>A successor business</strong>, if M2M is merged, acquired or sold, under this
          policy.
        </li>
      </ul>
      <p>We do not sell, rent or trade personal information.</p>

      <h3 id="retention">How long we keep it</h3>
      <Table head={['Information', 'Kept for']} rows={RETENTION} />
      <p>
        When you delete a message <em>for everyone</em> (available to the sender), its text and
        attachment are removed from the message on our servers. Deleting a message or a chat{' '}
        <em>for me</em> hides it from you only; the other person keeps their copy.
      </p>
      <p>
        When you delete your account, your account is deactivated immediately and your personal
        data is erased within {LEGAL.deletionDays} days, as described on the{' '}
        <SmartLink className="link" href={LINKS.deleteAccount}>
          account deletion page
        </SmartLink>
        . Copies already delivered to other people’s devices stay on those devices.
      </p>

      <h3 id="security">Security</h3>
      <ul>
        <li>All traffic between the app, M2M Web and our servers uses HTTPS/TLS or secure WebSockets.</li>
        <li>Login uses one-time codes and short-lived access tokens; there are no passwords to leak.</li>
        <li>Sign-in tokens are kept in your phone’s secure, encrypted storage.</li>
        <li>Media files are served through temporary, signed links.</li>
        <li>You can see and unlink every device signed in to M2M Web from the app.</li>
      </ul>
      <p>
        No system is completely secure, and because messages are not end-to-end encrypted, please
        avoid sending information such as passwords or card numbers over M2M.
      </p>

      <h3 id="rights">Your choices and rights</h3>
      <ul>
        <li>
          <strong>Correct your profile:</strong> edit your name, about text and photo in
          Settings.
        </li>
        <li>
          <strong>Control your content:</strong> delete messages, delete chats, and choose who
          sees each status.
        </li>
        <li>
          <strong>Control permissions:</strong> allow or deny contacts, camera, microphone, media
          and notifications at any time.
        </li>
        <li>
          <strong>Manage devices:</strong> unlink M2M Web sessions from Linked devices.
        </li>
        <li>
          <strong>Delete your account:</strong> in the app or on the{' '}
          <SmartLink className="link" href={LINKS.deleteAccount}>
            account deletion page
          </SmartLink>
          .
        </li>
        <li>
          <strong>Access, copy, correction, deletion or objection:</strong> email{' '}
          <a className="link" href={`mailto:${LEGAL.privacyEmail}`}>
            {LEGAL.privacyEmail}
          </a>{' '}
          from any address and include the phone number on your account. We will verify that the
          number is yours and reply within 30 days.
        </li>
      </ul>
      <p>
        Depending on where you live, you may also have the right to complain to your local data
        protection authority.
      </p>

      <h3 id="children">Children</h3>
      <p>
        M2M is not intended for children. You must be at least {LEGAL.minAge} years old, or the
        older minimum age required where you live, to use it. If we learn that an account belongs
        to someone under that age, we will delete it. Parents or guardians can contact us at{' '}
        <a className="link" href={`mailto:${LEGAL.privacyEmail}`}>
          {LEGAL.privacyEmail}
        </a>
        .
      </p>

      <h3 id="transfers">International transfers</h3>
      <p>
        Our servers and service providers may be located outside your country. When information
        is transferred across borders, we rely on our providers’ contractual and security
        commitments to protect it in line with this policy.
      </p>

      <h3 id="website">This website</h3>
      <p>
        {LEGAL.site.replace('https://', '')} does not use cookies, analytics or advertising
        trackers. Pages load fonts from Google Fonts, so your browser shares your IP address with
        Google when it fetches them. If you use the contact form, we store your name, email
        address, topic and message, along with your IP address and browser type to prevent spam,
        and use them only to reply to you.
      </p>

      <h3 id="changes">Changes to this policy</h3>
      <p>
        If we change how M2M handles your information, we will update this page and the date at
        the top. If a change is significant, we will also tell you in the app before it takes
        effect.
      </p>

      <h3 id="contact">Contact us</h3>
      <p>
        Questions or requests about privacy:{' '}
        <a className="link" href={`mailto:${LEGAL.privacyEmail}`}>
          {LEGAL.privacyEmail}
        </a>
        {LEGAL.address && <>, or write to {operatorName}, {LEGAL.address}</>}. You can also use
        our{' '}
        <SmartLink className="link" href={LINKS.contact}>
          contact form
        </SmartLink>
        .
      </p>
    </LegalPage>
  )
}
