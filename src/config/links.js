/**
 * All outbound URLs live here.
 * Replace the dummy values below with the real store / product URLs later.
 */
export const LINKS = {
  // --- App stores (DUMMY  replace when the apps are published) ---
  android: 'https://example.com/m2m/android',
  ios: 'https://example.com/m2m/ios',
  mac: 'https://example.com/m2m/mac',
  windows: 'https://example.com/m2m/windows',
  web: 'https://web.msg2msg.com',

  // --- Internal routes (React Router) ---
  home: '/',
  calling: '/calling',
  messaging: '/messaging',
  status: '/status',
  about: '/about',
  privacy: '/privacy',
  contact: '/contact',
  download: '/download',
  business: '/business',
  security: '/security',

  // --- Product pages ---
  login: 'https://web.msg2msg.com',
  features: '#features',
  blog: 'https://example.com/m2m/blog',
  helpCenter: 'https://example.com/m2m/help',
  faqs: 'https://example.com/m2m/help/faqs',
  forBusiness: 'https://example.com/m2m/business',
  careers: 'https://example.com/m2m/careers',
  brand: 'https://example.com/m2m/brand-center',
  advisories: 'https://example.com/m2m/security-advisories',

  // --- Support inboxes (DUMMY  swap for the real addresses) ---
  supportEmail: 'support@msg2msg.com',
  businessEmail: 'business@msg2msg.com',
  pressEmail: 'press@msg2msg.com',
  securityEmail: 'security@msg2msg.com',

  // --- Social ---
  x: 'https://example.com/m2m/x',
  youtube: 'https://example.com/m2m/youtube',
  instagram: 'https://example.com/m2m/instagram',
  facebook: 'https://example.com/m2m/facebook',
  tiktok: 'https://example.com/m2m/tiktok',
}

/**
 * Routes that are actually built (rendered with <Link> instead of <a>).
 * Add each new page here as it lands  /messaging, /status, /security, …
 */
export const INTERNAL = new Set([
  LINKS.home,
  LINKS.calling,
  LINKS.messaging,
  LINKS.status,
  LINKS.about,
  LINKS.privacy,
  LINKS.contact,
  LINKS.download,
])
