import Reveal from '../Reveal'
import Carousel from '../Carousel'
import Portrait from '../Portrait'
import SmartLink from '../SmartLink'
import { IconArrowRight } from '../Icons'

/** Shared "Discover more M2M features" carousel. */
export default function MoreFeatures({
  title = (
    <>
      Discover more
      <br />
      M2M features
    </>
  ),
  body = 'Learn more about what else you can do on M2M — from private calls to secure group chats and everyday updates with Status.',
  items = [],
}) {
  return (
    <section className="section tint--soft">
      <div className="container split split--rail">
        <Reveal className="split__copy">
          <h2 className="h2">{title}</h2>
          <p className="lead">{body}</p>
        </Reveal>

        <Reveal className="split__media" delay={140} style={{ minWidth: 0 }}>
          <Carousel ariaLabel="More M2M features">
            {items.map((d) => (
              <SmartLink className="dcard" data-card key={d.title} href={d.href}>
                <Portrait seed={d.seed} className="dcard__photo" />
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <span className="link" style={{ marginTop: 12, display: 'inline-flex' }}>
                  Learn more <IconArrowRight width="14" height="14" />
                </span>
              </SmartLink>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}
