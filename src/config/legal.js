/**
 * Facts shared by the legal pages (/privacy, /terms, /delete-account,
 * /community-guidelines). Change a value here and every page picks it up.
 *
 * Fill in `operator`, `address` and `governingLaw` before submitting the app
 * to the stores — the pages fall back to neutral wording while they are empty.
 * Bump `lastUpdated` whenever the wording of any legal page changes.
 */
import { LINKS } from './links'

export const LEGAL = {
  lastUpdated: '21 October 2026',

  // Registered name of the business that runs M2M, e.g. "Example Pvt Ltd".
  operator: '',
  // Postal address shown in the contact section of the privacy policy.
  address: '',
  // Country (or state) whose law governs the Terms, e.g. "Pakistan".
  governingLaw: '',

  minAge: 13,

  // How long after a deletion request the account data is permanently erased,
  // and how long residual copies can survive in backups after that.
  deletionDays: 30,
  backupDays: 90,
  // Contact-form topic that deletion requests are filed under. Must be one of
  // ContactMessage.TOPIC_CHOICES in backend/website/models.py.
  deletionTopic: 'Account or login',

  supportEmail: LINKS.supportEmail,
  privacyEmail: LINKS.supportEmail,
  safetyEmail: LINKS.supportEmail,

  site: 'https://msg2msg.com',
  webApp: LINKS.web,
}

/** "M2M" on its own, or "Example Pvt Ltd (“M2M”)" once the operator is set. */
export const operatorName = LEGAL.operator ? `${LEGAL.operator} (“M2M”)` : 'M2M'
