import { useState } from 'react'
import { IconChevronRight } from './Icons'

/**
 * `variant="list"`   plain rows separated by rules (calling / messaging pages)
 * `variant="cards"`  rounded cards with a round arrow button (status page)
 */
export default function Faq({ items, variant = 'list' }) {
  const [open, setOpen] = useState(-1)
  const cards = variant === 'cards'

  return (
    <div className={`faq${cards ? ' faq--cards' : ''}`}>
      {items.map((item, i) => {
        const isOpen = i === open
        return (
          <div key={item.q} className={`faq__row${isOpen ? ' is-open' : ''}`}>
            <button
              className="faq__head"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              {!cards && <IconChevronRight width="16" height="16" />}
              <span>{item.q}</span>
              {cards && (
                <span className="faq__go">
                  <IconChevronRight width="15" height="15" />
                </span>
              )}
            </button>
            {isOpen && <div className="faq__panel">{item.a}</div>}
          </div>
        )
      })}
    </div>
  )
}
