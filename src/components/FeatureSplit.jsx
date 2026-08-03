import Reveal from './Reveal'
import SmartLink from './SmartLink'
import { IconChevronRight } from './Icons'

/**
 * The repeating "copy on one side, device on the other" block that makes up
 * most of the page.
 */
export default function FeatureSplit({
  id,
  eyebrow,
  title,
  highlight,
  body,
  linkLabel = 'Learn more',
  linkHref = '#',
  media,
  reverse = false,
  dark = false,
  tight = false,
}) {
  return (
    <section
      id={id}
      className={`${tight ? 'section-tight' : 'section'}${dark ? ' on-dark' : ''}`}
    >
      <div className={`container split${reverse ? ' split--reverse' : ''}`}>
        <Reveal className="split__copy">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2 className="h2 feature__title">
            {title} {highlight && <span>{highlight}</span>}
          </h2>
          <p className="lead">{body}</p>
          {linkLabel && (
            <p style={{ marginTop: 26 }}>
              <SmartLink className="link" href={linkHref}>
                {linkLabel} <IconChevronRight width="15" height="15" />
              </SmartLink>
            </p>
          )}
        </Reveal>

        <Reveal className="split__media media-frame" delay={140}>
          {media}
        </Reveal>
      </div>
    </section>
  )
}
