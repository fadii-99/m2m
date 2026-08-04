# M2M  public website

React (Vite) frontend for the M2M public/marketing page. Frontend only  no API
calls, no backend.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Pages

Routing is `react-router-dom` (`src/App.jsx`).

| Route | File | Status |
| --- | --- | --- |
| `/` | `src/pages/Home.jsx` | done |
| `/calling` | `src/pages/Calling.jsx` | done |
| `/messaging` | `src/pages/Messaging.jsx` | done |
| `/status` | `src/pages/Status.jsx` | done |
| `/about` | `src/pages/About.jsx` | done |
| `/privacy` | `src/pages/Privacy.jsx` | done  **placeholder legal copy, needs review** |
| `/contact` | `src/pages/Contact.jsx` | done |
| `/business`, `/security`, … |  | not built yet |

Unknown routes redirect to `/`. When a new page lands, add its path to the
`INTERNAL` set in `src/config/links.js` so links to it become client-side
`<Link>`s instead of full page loads, and add it to `FEATURES` in
`src/components/Navbar.jsx` to put it in the Features dropdown.

> Deploying: this is a SPA, so the server must fall back to `index.html` for
> unknown paths (nginx: `try_files $uri $uri/ /index.html;`). `npm run dev` and
> `npm run preview` already do this.

## Where things are

| Path | What it is |
| --- | --- |
| `src/config/links.js` | **All outbound URLs**, including the dummy Android/iOS store links |
| `src/styles/global.css` | Design tokens, layout, nav, hero, footer, responsive rules |
| `src/styles/mockups.css` | Home-page device mockups (phone, desktop window, chat/status UI) |
| `src/styles/calling.css` | Calling-page pieces: portraits, call screens, accordion, carousel, FAQ |
| `src/styles/messaging.css` | Messaging-page pieces: chat list, sticker tray, share cards |
| `src/styles/status.css` | Status-page pieces: story cards, avatar cloud, FAQ card variant |
| `src/styles/pages.css` | About / Privacy / Contact: value cards, prose, TOC, contact form |
| `src/components/` | Shared widgets (`Accordion`, `Carousel`, `Faq`, `Portrait`, `SmartLink`, …) |
| `src/components/sections/` | Blocks reused across pages (`KeepGoing`, `MoreFeatures`) |
| `src/components/mockups/` | Home-page screens (pure CSS/SVG  no image assets) |
| `src/components/calling/` | Calling-page screens |
| `src/components/messaging/` | Messaging-page screens |
| `src/components/status/` | Status-page story cards |

## Replacing the store URLs

Only one file needs editing  `src/config/links.js`:

```js
android: 'https://example.com/m2m/android',   // → Play Store URL
ios:     'https://example.com/m2m/ios',       // → App Store URL
```

Everything else (nav, footer, download band, hero) reads from that object.

## Colour theme

Taken from the Flutter app's `AppColors` (`mobile/lib/utils/constants.dart`):

| Token | Value | App source |
| --- | --- | --- |
| `--purple-700` | `#9B10A3` | `primaryColor` |
| `--purple-600` | `#B238B8` | `unselectedColor` |
| `--purple-500` | `#D500F9` | `floatingButtonColor` |
| `--purple-200` | `#F3E5F5` | `outgoingMessageColor` |
| `--purple-100` | `#EEE5EE` | `chatBackgroundColor` |

## Before going live

- `src/pages/Privacy.jsx` contains **placeholder legal copy** describing how the
  app is designed. It is not a reviewed privacy policy or terms of service 
  have a lawyer rewrite it and update `LAST_UPDATED` at the top of the file.
- The contact form has no backend; it opens the visitor's mail client via
  `mailto:`. Support addresses are dummies in `src/config/links.js`.

## Notes

- All device screenshots are recreated in HTML/CSS, so there are no binary image
  assets to swap and everything stays crisp at any resolution.
- Animations respect `prefers-reduced-motion`.
- Fully responsive: 1440 / 1024 / 900 / 560 / 390 breakpoints were checked.
