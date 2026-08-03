import { useEffect, useState } from 'react'
import Logo from './Logo'
import SmartLink from './SmartLink'
import { LINKS } from '../config/links'
import {
  IconArrowUpRight,
  IconChat,
  IconChevronDown,
  IconDownload,
  IconPhone,
  IconStatus,
} from './Icons'

/**
 * Features dropdown items — intentionally empty for now.
 * The Messaging / Calling / Status / … pages get built in the next step;
 * add them here as `{ label, href, Icon, desc }` and the dropdown panel
 * starts rendering on its own.
 */
const FEATURES = [
  { label: 'Messaging', href: LINKS.messaging, Icon: IconChat, desc: 'Fast, private chats' },
  { label: 'Voice & video calls', href: LINKS.calling, Icon: IconPhone, desc: 'Free calls, anywhere' },
  { label: 'Status', href: LINKS.status, Icon: IconStatus, desc: 'Share your moments' },
]

/** Top-level links next to the Features dropdown. */
const NAV = [{ label: 'Apps', href: LINKS.download }]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled || open ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Logo />

          <nav className="nav__menu" aria-label="Main">
            <div className="nav__dd">
              <button className="nav__link" aria-expanded="false">
                Features <IconChevronDown width="15" height="15" />
              </button>
              {FEATURES.length > 0 && (
                <div className="nav__dd-panel">
                  {FEATURES.map(({ label, href, Icon, desc }) => (
                    <SmartLink key={label} className="nav__dd-item" href={href}>
                      {Icon && <Icon width="19" height="19" />}
                      <span>
                        {label}
                        {desc && (
                          <small
                            style={{
                              display: 'block',
                              fontSize: 12,
                              color: 'var(--text-muted)',
                              fontWeight: 400,
                            }}
                          >
                            {desc}
                          </small>
                        )}
                      </span>
                    </SmartLink>
                  ))}
                </div>
              )}
            </div>

            {NAV.map(({ label, href, external }) => (
              <a
                key={label}
                className="nav__link"
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {label}
                {external && <IconArrowUpRight width="13" height="13" />}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--ghost" href={LINKS.login} target="_blank" rel="noreferrer">
              Log in <IconArrowUpRight width="14" height="14" className="btn__icon" />
            </a>
            <a className="btn" href={LINKS.download}>
              Download <IconDownload width="15" height="15" className="btn__icon" />
            </a>
            <button
              className="nav__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className={`burger${open ? ' is-open' : ''}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {FEATURES.map(({ label, href }) => (
          <SmartLink key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </SmartLink>
        ))}
        {NAV.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {label}
            {external && <IconArrowUpRight width="16" height="16" />}
          </a>
        ))}
        <div className="drawer__cta">
          <a className="btn btn--lg" href={LINKS.download} onClick={() => setOpen(false)}>
            Download M2M <IconDownload width="16" height="16" className="btn__icon" />
          </a>
          <a className="btn btn--ghost btn--lg" href={LINKS.login} target="_blank" rel="noreferrer">
            Log in to M2M Web
          </a>
        </div>
      </div>
    </>
  )
}
