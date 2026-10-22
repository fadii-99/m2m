import LegalPage from '../components/LegalPage'
import SmartLink from '../components/SmartLink'
import { LINKS } from '../config/links'
import { LEGAL, operatorName } from '../config/legal'

const SECTIONS = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'eligibility', label: 'Who can use M2M' },
  { id: 'account', label: 'Your account' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'content', label: 'Your content' },
  { id: 'reports', label: 'Reports and enforcement' },
  { id: 'service', label: 'The service' },
  { id: 'fees', label: 'Fees' },
  { id: 'ip', label: 'Our rights' },
  { id: 'third-party', label: 'Third-party services' },
  { id: 'termination', label: 'Ending these terms' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'indemnity', label: 'Indemnity' },
  { id: 'law', label: 'Governing law' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
]

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Terms of Service"
      lead="The rules for using M2M — the app, M2M Web and this website. Please read them; by using M2M you agree to them."
      sections={SECTIONS}
    >
      <h3 id="agreement">Agreement</h3>
      <p>
        These Terms of Service (“Terms”) are an agreement between you and {operatorName} (“we”,
        “us”). They apply to the M2M (MSG2MSG) apps for Android and iOS, M2M Web and{' '}
        {LEGAL.site.replace('https://', '')} (together, the “Service”). Our{' '}
        <SmartLink className="link" href={LINKS.privacy}>
          Privacy Policy
        </SmartLink>{' '}
        and{' '}
        <SmartLink className="link" href={LINKS.communityGuidelines}>
          Community Guidelines
        </SmartLink>{' '}
        are part of these Terms. If you do not agree, do not use the Service.
      </p>

      <h3 id="eligibility">Who can use M2M</h3>
      <ul>
        <li>
          You must be at least {LEGAL.minAge} years old, or the older minimum age required to use
          the Service without parental consent where you live.
        </li>
        <li>You must not be barred from using the Service under applicable law.</li>
        <li>
          If you use M2M on behalf of an organisation, you confirm you are allowed to accept
          these Terms for it.
        </li>
      </ul>

      <h3 id="account">Your account</h3>
      <ul>
        <li>
          You register with a mobile number that you own or are authorised to use, and verify it
          with a one-time code. Do not share your codes with anyone.
        </li>
        <li>
          Keep your phone and any device linked to M2M Web secure. You are responsible for
          activity on your account, and you can unlink web sessions from the app at any time.
        </li>
        <li>
          If you change or give up your phone number, delete your account first or update it, as
          the next owner of the number could otherwise register it.
        </li>
        <li>Profile information you provide must not impersonate anyone or mislead people.</li>
      </ul>

      <h3 id="acceptable-use">Acceptable use</h3>
      <p>You must use M2M lawfully and respectfully. You must not use M2M to:</p>
      <ul>
        <li>
          Share content that sexually exploits or endangers children. We report such content to
          the appropriate authorities.
        </li>
        <li>
          Harass, threaten, bully, stalk or intimidate anyone, or promote violence, terrorism or
          hatred against people based on protected characteristics.
        </li>
        <li>
          Share someone’s private or intimate images or personal information without their
          consent.
        </li>
        <li>
          Send spam, bulk or automated messages, chain messages, scams, phishing or fraudulent
          offers.
        </li>
        <li>Impersonate a person or organisation, or misrepresent your identity.</li>
        <li>
          Sell or promote illegal goods or services, including drugs, weapons or stolen data.
        </li>
        <li>Infringe anyone’s copyright, trademark, privacy or other rights.</li>
        <li>
          Distribute malware, or access, probe, scrape, reverse engineer, overload or disrupt the
          Service, its servers or other users’ accounts, or create accounts by automated means.
        </li>
      </ul>
      <p>
        The{' '}
        <SmartLink className="link" href={LINKS.communityGuidelines}>
          Community Guidelines
        </SmartLink>{' '}
        explain these rules in more detail.
      </p>

      <h3 id="content">Your content</h3>
      <p>
        You own the messages, photos, videos, voice messages, documents, status updates and
        profile information you send or post (“your content”), and you are responsible for it.
      </p>
      <p>
        To run the Service, you give us a worldwide, non-exclusive, royalty-free licence to
        store, copy, process, transmit and display your content only as needed to deliver it to
        the people you choose, sync it to your devices, operate and secure the Service, and
        enforce these Terms. This licence ends when your content is deleted from our servers,
        except for copies other people have already received.
      </p>
      <p>
        Messages are not end-to-end encrypted. See the{' '}
        <SmartLink className="link" href={LINKS.privacy}>
          Privacy Policy
        </SmartLink>{' '}
        for how content is stored and protected.
      </p>

      <h3 id="reports">Reports and enforcement</h3>
      <p>
        You can report a user, message or status that breaks these Terms by emailing{' '}
        <a className="link" href={`mailto:${LEGAL.safetyEmail}`}>
          {LEGAL.safetyEmail}
        </a>
        , as described in the Community Guidelines. When we review a report, we may look at the
        reported content and related account information.
      </p>
      <p>
        If we find a breach, we may remove content, warn you, restrict features, or suspend or
        permanently disable your account, and we may report illegal activity to the authorities.
        If you believe we made a mistake, write to us and we will review it.
      </p>

      <h3 id="service">The service</h3>
      <ul>
        <li>
          M2M needs an internet connection. Your mobile operator’s data, SMS and roaming charges
          apply.
        </li>
        <li>
          M2M is not a replacement for a phone line and does not support calls to emergency
          services. Use your phone’s regular dialler in an emergency.
        </li>
        <li>
          We keep improving M2M and may add, change or remove features. We may also need to set
          limits, such as maximum file sizes.
        </li>
        <li>
          You may need to update the app to keep using the Service.
        </li>
      </ul>

      <h3 id="fees">Fees</h3>
      <p>
        M2M is currently free to use and has no ads or in-app purchases. If we introduce paid
        features, we will tell you the price and terms first, and you will not be charged unless
        you agree.
      </p>

      <h3 id="ip">Our rights</h3>
      <p>
        The M2M name, logo, app, software and website are owned by us or our licensors. We give
        you a personal, revocable, non-transferable licence to use the app as allowed by these
        Terms. You may not copy, modify, sell or create derivative works of the Service, or use
        our name or logo without permission.
      </p>

      <h3 id="third-party">Third-party services</h3>
      <p>
        The Service relies on third-party providers, including Amazon Web Services and Google
        Firebase, and you download the app from Google Play or the App Store, whose own terms
        also apply to you. We are not responsible for third-party websites or content that
        people share as links in chats.
      </p>

      <h3 id="termination">Ending these terms</h3>
      <p>
        You can stop using M2M and delete your account at any time — see{' '}
        <SmartLink className="link" href={LINKS.deleteAccount}>
          how to delete your account
        </SmartLink>
        . We may suspend or end your access if you breach these Terms, if required by law, or if
        we stop offering the Service, giving notice where reasonable. Sections that by their
        nature should survive (such as content licences already granted for delivered messages,
        disclaimers, limitation of liability and governing law) continue to apply.
      </p>

      <h3 id="disclaimers">Disclaimers</h3>
      <p>
        We work hard to keep M2M reliable and secure, but the Service is provided “as is” and “as
        available”. To the extent the law allows, we do not promise that it will be
        uninterrupted, error-free, or that every message or call will be delivered, and we
        disclaim implied warranties of merchantability, fitness for a particular purpose and
        non-infringement. Nothing in these Terms limits rights you have as a consumer that cannot
        be excluded by law.
      </p>

      <h3 id="liability">Limitation of liability</h3>
      <p>
        To the extent the law allows, we are not liable for indirect, incidental, special,
        consequential or punitive damages, or for lost data, profits or goodwill, arising from
        your use of the Service or content sent by other users. Our total liability for any claim
        relating to the Service is limited to the greater of the amount you paid us in the past
        12 months or USD 100. This does not limit liability for death or personal injury caused
        by negligence, for fraud, or any other liability that cannot be limited by law.
      </p>

      <h3 id="indemnity">Indemnity</h3>
      <p>
        If someone brings a claim against us because of your content or your breach of these
        Terms, you agree to cover our reasonable losses and costs, to the extent the law allows.
      </p>

      <h3 id="law">Governing law</h3>
      <p>
        {LEGAL.governingLaw
          ? `These Terms are governed by the laws of ${LEGAL.governingLaw}, and disputes will be resolved by its courts, unless the mandatory consumer law of your country gives you the right to bring a claim where you live.`
          : 'These Terms are governed by the laws of the country where the operator of M2M is established, unless the mandatory consumer law of your country gives you the right to bring a claim where you live.'}{' '}
        Before starting any formal dispute, please contact us so we can try to resolve it.
      </p>

      <h3 id="changes">Changes to these Terms</h3>
      <p>
        We may update these Terms. We will change the date at the top of this page and, for
        significant changes, tell you in the app before they take effect. If you keep using M2M
        after that, you accept the updated Terms; if you do not agree, you can delete your
        account.
      </p>

      <h3 id="contact">Contact</h3>
      <p>
        Questions about these Terms:{' '}
        <a className="link" href={`mailto:${LEGAL.supportEmail}`}>
          {LEGAL.supportEmail}
        </a>
        {LEGAL.address && <>, or {operatorName}, {LEGAL.address}</>}.
      </p>
    </LegalPage>
  )
}
