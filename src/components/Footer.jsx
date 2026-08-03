import Logo from './Logo'
import SmartLink from './SmartLink'
import { LANGUAGES, LINKS } from '../config/links'
import {
  IconChevronDown,
  IconDownload,
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconX,
  IconYoutube,
} from './Icons'

const COLUMNS = [
  {
    title: 'What we do',
    links: [
      { label: 'Features', href: LINKS.features },
      { label: 'Blog', href: LINKS.blog },
      { label: 'Security', href: LINKS.security },
      { label: 'For Business', href: LINKS.forBusiness },
    ],
  },
  {
    title: 'Who we are',
    links: [
      { label: 'About us', href: LINKS.about },
      { label: 'Careers', href: LINKS.careers },
      { label: 'Brand Center', href: LINKS.brand },
      { label: 'Privacy', href: LINKS.privacy },
    ],
  },
  {
    title: 'Use M2M',
    links: [
      { label: 'Android', href: LINKS.android },
      { label: 'iPhone', href: LINKS.ios },
      { label: 'Mac/PC', href: LINKS.mac },
      { label: 'M2M Web', href: LINKS.web },
    ],
  },
  {
    title: 'Need help?',
    links: [
      { label: 'Contact Us', href: LINKS.contact },
      { label: 'Help Center', href: LINKS.helpCenter },
      { label: 'Apps', href: LINKS.download },
      { label: 'Security Advisories', href: LINKS.advisories },
    ],
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
              Private messaging, voice and video calls for everyone — everywhere.
            </p>
            <a className="btn" href={LINKS.download} style={{ marginTop: 20 }}>
              Download <IconDownload width="15" height="15" className="btn__icon" />
            </a>
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
            <a href={LINKS.terms}>Terms &amp; Privacy Policy</a>
            <a href={LINKS.sitemap}>Sitemap</a>
          </span>

          <div className="socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>

          <div className="lang">
            <select defaultValue="English" aria-label="Language">
              {LANGUAGES.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
            <IconChevronDown width="14" height="14" />
          </div>
        </div>
      </div>
    </footer>
  )
}
