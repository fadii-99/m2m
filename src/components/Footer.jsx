import Logo from './Logo'
import SmartLink from './SmartLink'
import StoreBadges from './StoreBadges'
import { LINKS } from '../config/links'
import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconX,
  IconYoutube,
} from './Icons'

/**
 * "What we do" mirrors the Features dropdown in the navbar  keep the two in
 * sync when a feature page lands (see FEATURES in Navbar.jsx).
 */
const COLUMNS = [
  {
    title: 'What we do',
    links: [
      { label: 'Messaging', href: LINKS.messaging },
      { label: 'Voice & video calls', href: LINKS.calling },
      { label: 'Status', href: LINKS.status },
    ],
  },
  {
    title: 'Who we are',
    links: [
      { label: 'About us', href: LINKS.about },
      { label: 'Privacy', href: LINKS.privacy },
    ],
  },
  {
    title: 'Need help?',
    links: [{ label: 'Contact Us', href: LINKS.contact }],
  },
]

const SOCIALS = [
  { label: 'X', href: LINKS.x, Icon: IconX },
  { label: 'YouTube', href: LINKS.youtube, Icon: IconYoutube },
  { label: 'Instagram', href: LINKS.instagram, Icon: IconInstagram },
  { label: 'Facebook', href: LINKS.facebook, Icon: IconFacebook },
  { label: 'TikTok', href: LINKS.tiktok, Icon: IconTiktok },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo invert />
            <p
              style={{
                marginTop: 16,
                maxWidth: '28ch',
                fontSize: 14.5,
                color: 'rgba(255,255,255,.7)',
              }}
            >
              Private messaging, voice and video calls for everyone  everywhere.
            </p>
            <StoreBadges variant="outline" className="footer__stores" />
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <SmartLink href={l.href}>{l.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} M2M</span>
          <span className="footer__legal">
            <SmartLink href={LINKS.privacy}>Terms &amp; Privacy Policy</SmartLink>
          </span>

          <div className="socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
