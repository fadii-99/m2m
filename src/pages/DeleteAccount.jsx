/**
 * Account deletion page — the "Delete account URL" in Google Play Console.
 * It must let people request deletion without having the app installed, so it
 * offers the contact form and a pre-filled email next to the in-app steps.
 */
import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import SmartLink from '../components/SmartLink'
import { LINKS } from '../config/links'
import { LEGAL } from '../config/legal'
import { IconChevronRight, IconMail } from '../components/Icons'

const SECTIONS = [
  { id: 'in-app', label: 'Delete in the app' },
  { id: 'web', label: 'Request without the app' },
  { id: 'deleted', label: 'What gets deleted' },
  { id: 'kept', label: 'What may be kept' },
  { id: 'timeline', label: 'How long it takes' },
  { id: 'partial', label: 'Delete some data only' },
]

const MAIL_SUBJECT = 'Account deletion request'
const MAIL_BODY = [
  'Please delete my M2M account and its data.',
  '',
  'Phone number on the account (with country code): ',
  '',
].join('\n')

const mailto = `mailto:${LEGAL.supportEmail}?subject=${encodeURIComponent(
  MAIL_SUBJECT
)}&body=${encodeURIComponent(MAIL_BODY)}`

export default function DeleteAccount() {
  return (
    <LegalPage
      eyebrow="Account deletion"
      title="Delete your M2M account"
      lead="How to delete your M2M (MSG2MSG) account and the data linked to it — from the app, or from here if you no longer have the app."
      sections={SECTIONS}
    >
      <h3 id="in-app">Delete your account in the app</h3>
      <ol>
        <li>Open M2M on your phone.</li>
        <li>
          Tap the <strong>⋮ menu</strong> in the top corner, then <strong>Settings</strong>.
        </li>
        <li>
          Scroll down and tap <strong>Delete Account</strong>.
        </li>
        <li>
          We send a one-time code to your phone number. Enter it and tap{' '}
          <strong>DELETE</strong> to confirm.
        </li>
      </ol>
      <p>You are signed out on the phone and on every linked M2M Web session straight away.</p>

      <h3 id="web">Request deletion without the app</h3>
      <p>
        If you uninstalled M2M, lost your phone, or cannot sign in, send us a deletion request
        that includes the phone number on your account, with its country code:
      </p>
      <div className="legal-actions">
        <a className="btn" href={mailto}>
          <IconMail width="16" height="16" /> Email {LEGAL.supportEmail}
        </a>
        <Link
          className="btn btn--ghost"
          to={`${LINKS.contact}?topic=${encodeURIComponent(LEGAL.deletionTopic)}#message`}
        >
          Use the contact form <IconChevronRight width="14" height="14" />
        </Link>
      </div>
      <p>
        To protect your account, we will verify that the number belongs to you — for example
        by sending a code to it — before we delete anything. We never ask for the code by phone
        call.
      </p>

      <h3 id="deleted">What gets deleted</h3>
      <ul>
        <li>Your phone number, profile name, about text and profile photo</li>
        <li>Your chats, including the messages, photos, videos, voice messages and documents in them</li>
        <li>Your status updates and the list of who viewed them</li>
        <li>Contacts uploaded from your address book and your invitation records</li>
        <li>Your call history</li>
        <li>Device and push notification tokens, and linked M2M Web sessions</li>
      </ul>

      <h3 id="kept">What may be kept</h3>
      <ul>
        <li>
          <strong>Copies on other people’s phones.</strong> Messages and media you sent stay on
          the devices of the people who received them; we cannot delete those.
        </li>
        <li>
          <strong>Backups.</strong> Residual copies in our encrypted server backups are
          overwritten within {LEGAL.backupDays} days.
        </li>
        <li>
          <strong>Legal and safety records.</strong> If an account is under investigation for
          abuse, or we are legally required to preserve information, we keep only what is needed,
          for as long as it is needed.
        </li>
        <li>
          <strong>Your support emails</strong> to us, as a record of the request.
        </li>
      </ul>

      <h3 id="timeline">How long it takes</h3>
      <p>
        Deleting in the app deactivates your account immediately. Your data is then permanently
        erased from our active systems within {LEGAL.deletionDays} days. Requests made by email
        or the contact form are completed within {LEGAL.deletionDays} days of verifying your
        number. Deletion cannot be undone: if you sign up again with the same number, you start
        with a new, empty account.
      </p>

      <h3 id="partial">Delete some data without deleting your account</h3>
      <ul>
        <li>
          <strong>Messages:</strong> long-press a message and delete it for yourself, or for
          everyone if you sent it.
        </li>
        <li>
          <strong>Chats:</strong> delete a chat from your chat list to clear it for you.
        </li>
        <li>
          <strong>Profile:</strong> change or remove your name, about text and photo in
          Settings.
        </li>
        <li>
          <strong>Contacts:</strong> turn off contact access in your phone’s settings, and email
          us to remove contacts already uploaded.
        </li>
        <li>
          <strong>Linked devices:</strong> unlink M2M Web sessions from Linked devices.
        </li>
      </ul>
      <p>
        More detail is in our{' '}
        <SmartLink className="link" href={LINKS.privacy}>
          Privacy Policy
        </SmartLink>
        .
      </p>
    </LegalPage>
  )
}
