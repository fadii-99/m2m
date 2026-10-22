import LegalPage from '../components/LegalPage'
import SmartLink from '../components/SmartLink'
import { LINKS } from '../config/links'
import { LEGAL } from '../config/legal'

const SECTIONS = [
  { id: 'spirit', label: 'The short version' },
  { id: 'safety', label: 'Keep people safe' },
  { id: 'respect', label: 'Respect people' },
  { id: 'honest', label: 'Be honest' },
  { id: 'legal', label: 'Stay legal' },
  { id: 'platform', label: 'Protect the service' },
  { id: 'report', label: 'How to report' },
  { id: 'enforcement', label: 'What we do' },
  { id: 'appeal', label: 'Appeals' },
]

const REPORT_SUBJECT = 'Report: '
const REPORT_BODY = [
  'Phone number of the account I am reporting (with country code): ',
  'What happened: ',
  'Date and time: ',
  '',
  '(Attach screenshots if you can.)',
].join('\n')

const reportMailto = `mailto:${LEGAL.safetyEmail}?subject=${encodeURIComponent(
  REPORT_SUBJECT
)}&body=${encodeURIComponent(REPORT_BODY)}`

export default function CommunityGuidelines() {
  return (
    <LegalPage
      eyebrow="Community Guidelines"
      title="Community Guidelines"
      lead="M2M is for keeping in touch with people you know. These guidelines apply to everything shared on M2M — messages, media, voice messages, status updates, profile names and photos, and calls."
      sections={SECTIONS}
    >
      <h3 id="spirit">The short version</h3>
      <p>
        Treat people the way you would want to be treated, only message people who want to hear
        from you, and do not use M2M to break the law or hurt anyone. These guidelines are part
        of our{' '}
        <SmartLink className="link" href={LINKS.terms}>
          Terms of Service
        </SmartLink>
        .
      </p>

      <h3 id="safety">Keep people safe</h3>
      <ul>
        <li>
          <strong>Zero tolerance for child sexual abuse and exploitation.</strong> Never share,
          request or link to sexual content involving anyone under 18, or try to groom a minor.
          We disable these accounts and report them to the authorities.
        </li>
        <li>
          No threats of violence, encouragement of self-harm, or content that promotes terrorism
          or violent extremism.
        </li>
        <li>No content that depicts or celebrates serious real-world violence or cruelty.</li>
        <li>
          If someone is in immediate danger, contact your local emergency services first — M2M
          cannot call them for you.
        </li>
      </ul>

      <h3 id="respect">Respect people</h3>
      <ul>
        <li>No harassment, bullying, stalking, intimidation or repeated unwanted contact.</li>
        <li>
          No hate speech: do not attack people based on race, ethnicity, religion, caste,
          nationality, disability, sex, gender identity, sexual orientation or similar
          characteristics.
        </li>
        <li>
          Do not share someone’s intimate images, private information (such as their address,
          ID documents or financial details) or recordings of them without their consent.
        </li>
        <li>
          Sexual content is only for adults who have agreed to receive it. Never send it
          unsolicited, and never put it in your profile photo or a status update.
        </li>
      </ul>

      <h3 id="honest">Be honest</h3>
      <ul>
        <li>Do not impersonate another person, business or official body.</li>
        <li>
          No scams, phishing, fake giveaways, investment fraud or requests for one-time codes.
          M2M will never message you to ask for your login code.
        </li>
        <li>
          Do not spread content designed to mislead people in ways that could cause real harm,
          such as false health or emergency information.
        </li>
      </ul>

      <h3 id="legal">Stay legal</h3>
      <ul>
        <li>
          Do not buy, sell or promote illegal drugs, weapons, stolen goods or data, counterfeit
          items, or other illegal goods and services.
        </li>
        <li>Do not share content that infringes someone else’s copyright or trademark.</li>
        <li>Follow the laws that apply where you are and where the people you message are.</li>
      </ul>

      <h3 id="platform">Protect the service</h3>
      <ul>
        <li>
          No spam: no bulk, automated or unsolicited messages, and no adding people you do not
          know just to message them.
        </li>
        <li>No malware, harmful links, or attempts to hack accounts or the service.</li>
        <li>
          Do not create accounts with automated tools or numbers you are not authorised to use.
        </li>
      </ul>

      <h3 id="report">How to report</h3>
      <p>
        If someone breaks these guidelines, email{' '}
        <a className="link" href={reportMailto}>
          {LEGAL.safetyEmail}
        </a>{' '}
        with:
      </p>
      <ul>
        <li>The phone number of the account you are reporting, with its country code</li>
        <li>What happened and roughly when</li>
        <li>Screenshots of the messages, media or status update, if you can</li>
      </ul>
      <p>
        Reports are confidential: we do not tell the reported person who reported them. In the
        meantime you can delete the chat and stop replying. We aim to review reports within 48
        hours, and sooner for anything involving a child’s safety.
      </p>

      <h3 id="enforcement">What we do</h3>
      <p>
        When we review a report we may look at the reported content and related account
        information. Depending on how serious the breach is, we may remove content, warn the
        account, limit features, or suspend or permanently disable the account. We report child
        sexual abuse material and credible threats to life to the appropriate authorities.
      </p>

      <h3 id="appeal">Appeals</h3>
      <p>
        If your account was restricted and you think we got it wrong, email{' '}
        <a className="link" href={`mailto:${LEGAL.supportEmail}`}>
          {LEGAL.supportEmail}
        </a>{' '}
        from any address with the phone number on your account and why you think the decision
        should change. A person will review it.
      </p>
    </LegalPage>
  )
}
