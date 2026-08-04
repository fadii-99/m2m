import { LINKS } from '../config/links'
import { IconApple, IconGooglePlay } from './Icons'

/**
 * App-store badges, laid out the way the official ones are: mark on the left,
 * a small lead-in line above a larger store name.
 *
 * variant="solid"   — black badge, for light backgrounds
 * variant="outline" — transparent with a hairline border, for dark backgrounds
 */
export function PlayBadge({ variant = 'solid' }) {
  return (
    <a
      className={`store store--${variant}`}
      href={LINKS.android}
      target="_blank"
      rel="noreferrer"
      aria-label="Get M2M on Google Play"
    >
      <IconGooglePlay />
      <span className="store__text">
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </a>
  )
}

export function AppStoreBadge({ variant = 'solid' }) {
  return (
    <a
      className={`store store--${variant}`}
      href={LINKS.ios}
      target="_blank"
      rel="noreferrer"
      aria-label="Download M2M on the App Store"
    >
      <IconApple width="23" height="23" />
      <span className="store__text">
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </a>
  )
}

/** Google Play + App Store side by side — the common pairing. */
export default function StoreBadges({ variant = 'solid', className = '' }) {
  return (
    <div className={`store-row${className ? ` ${className}` : ''}`}>
      <PlayBadge variant={variant} />
      <AppStoreBadge variant={variant} />
    </div>
  )
}
