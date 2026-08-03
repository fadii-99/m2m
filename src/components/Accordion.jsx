import { useState } from 'react'
import SmartLink from './SmartLink'
import { IconDownload, IconPlus } from './Icons'

/**
 * The "Connect across devices / Hear and see people clearly / …" list.
 * One row open at a time; the open row reveals body copy + a Download link.
 */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = i === open
        return (
          <div key={item.title} className={`acc__row${isOpen ? ' is-open' : ''}`}>
            <button
              className="acc__head"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="acc__icon">
                <IconPlus width="17" height="17" />
              </span>
            </button>

            <div className="acc__panel" hidden={!isOpen}>
              <p>{item.body}</p>
              {item.cta !== false && (
                <SmartLink className="link" href={item.href || '#download'}>
                  {item.ctaLabel || 'Download'}{' '}
                  <IconDownload width="14" height="14" />
                </SmartLink>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
