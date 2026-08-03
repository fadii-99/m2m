import PhoneFrame from './PhoneFrame'
import { IconChevronRight, IconSearch } from '../Icons'

const CATEGORIES = ['All', 'Grocery', 'Bakery', 'Fresh', 'Offers']

const PRODUCTS = [
  { emoji: '🥑', name: 'Avocado — 500g', price: 'Rs 480', tag: 'Add' },
  { emoji: '🍯', name: 'Raw Honey Jar', price: 'Rs 1,250', tag: 'Add' },
  { emoji: '🧁', name: 'Vanilla Cupcakes', price: 'Rs 690', tag: 'Add' },
  { emoji: '☕', name: 'Arabica Beans 1kg', price: 'Rs 2,100', tag: 'Add' },
  { emoji: '🫒', name: 'Olive Oil — 750ml', price: 'Rs 1,890', tag: 'Add' },
  { emoji: '🧀', name: 'Aged Cheddar Block', price: 'Rs 1,450', tag: 'Add' },
]

/** Business catalog screen — used by the "Transform your business" section. */
export default function BusinessMockup() {
  return (
    <PhoneFrame size="lg" lightStatus className="float-slow">
      <div className="catalog">
        <div className="catalog__hero">
          <div className="catalog__badge">
            SaMart Shop
            <div style={{ fontSize: 8, fontWeight: 500, opacity: 0.9 }}>
              Verified business · Replies in ~5m
            </div>
          </div>
        </div>

        <div style={{ padding: '8px 10px 0' }}>
          <div className="searchbar">
            <IconSearch width="11" height="11" />
            <span>Search this catalog</span>
          </div>
        </div>

        <div className="chips-row">
          {CATEGORIES.map((c, i) => (
            <span key={c} className={`chip-sm${i === 0 ? ' is-active' : ''}`}>
              {c}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 10px 0',
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          Top deals
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              fontSize: 8.5,
              color: 'var(--purple-700)',
            }}
          >
            See all <IconChevronRight width="9" height="9" />
          </span>
        </div>

        <div className="products">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="product">
              <span className="product__img">{p.emoji}</span>
              <span>
                <span className="product__name">{p.name}</span>
                <span className="product__price">{p.price}</span>
              </span>
              <span className="product__cta">{p.tag}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', padding: '0 10px 12px' }}>
          <div
            style={{
              background: 'var(--purple-700)',
              color: '#fff',
              borderRadius: 999,
              padding: '8px 0',
              textAlign: 'center',
              fontSize: 10,
              fontWeight: 700,
              boxShadow: '0 8px 18px -10px rgba(155,16,163,.9)',
            }}
          >
            Message business
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}
