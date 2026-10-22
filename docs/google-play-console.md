# Google Play Console: M2M (MSG2MSG)

What to enter in each Play Console section, based on what the app, M2M Web and the
backend actually do as of 21 October 2026. Package: `com.msg2msg.app`, targetSdk 36.

If the app's data handling changes, update this file **and** the matching page on the
website (`src/pages/Privacy.jsx`, then `lastUpdated` in `src/config/legal.js`).

---

## 0. Fix these before submitting

These are in the Flutter app or the Django backend. They were left unchanged on purpose
(website-only change), but the store listing and the website pages depend on them.

| # | Problem | Where | Why it blocks |
|---|---|---|---|
| 1 | **The OTP is always `000000`.** `_send_otp_sms()` sends nothing, and `RequestOTP` hard-codes the code, so anyone can sign in to any phone number. | `backend/users/views.py:47`, `:155` | A critical security hole. Wire up the SMS provider (Twilio settings exist but aren't used) and generate random codes. For the reviewer, allow-list a single test number (see §4). |
| 2 | **"Delete account" only deactivates the account.** `soft_delete()` keeps the phone number, name, photo, contacts, messages, statuses and call records. Requesting an OTP for that number later **reactivates the old account with all of its data**. | `backend/users/models.py` `soft_delete`; `backend/users/views.py` `RequestOTP` | Google requires real deletion. The website promises erasure within 30 days and a fresh account on re-signup. Add a purge job (hard-delete the user, cascade, and delete media files from S3) that runs within 30 days, and stop reactivating deleted accounts. Until then, purge by hand within 30 days. |
| 3 | **No in-app block or report.** | app + backend | Play's User Generated Content policy (statuses, profile photos, messages) expects in-app reporting and blocking. For now the website offers email reporting only. Build **Block** and **Report** on chat and profile screens, then update the Community Guidelines page. |
| 4 | **The Privacy Policy isn't reachable in the app.** The "Privacy Policy" and "Terms of Service" text on the welcome screen can't be tapped, and Settings has no link. | `mobile/lib/views/welcome_screen.dart:51-58` | Google requires the policy to be accessible inside the app. Link to `https://msg2msg.com/privacy` and `https://msg2msg.com/terms` from the welcome screen and from Settings. |
| 5 | **No prominent disclosure for contact upload.** The app uploads every number and name in the address book. | `mobile/lib/services/api_service.dart:400-428` | User Data policy: before the permission prompt, show an in-app screen saying contacts (names and numbers) are uploaded to find friends, and get an explicit "Allow". |
| 6 | **Unused permissions are declared.** `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION` (Android) and Location and Face ID strings (iOS) are never used. | `AndroidManifest.xml:49-50`, `ios/Runner/Info.plist` | Remove them. Otherwise reviewers expect location in Data safety. |
| 7 | **Broad media permissions.** `READ_MEDIA_IMAGES` and `READ_MEDIA_VIDEO` are declared. | `AndroidManifest.xml:34-40` | Google's Photo & Video Permissions policy wants messaging apps to use the system photo picker. `image_picker` already uses it on Android 13+. Remove these permissions, or be ready to file the declaration (likely rejected for a chat app). |
| 8 | **False E2EE claim on M2M Web.** The web login screen says "Your personal messages are end-to-end encrypted". Messages are stored readable on the server. | `mobile/lib/web/web_login_screen.dart:240` | Misleading claims break Play's Deceptive Behavior policy and contradict the privacy policy. Reword it, for example to "Your messages are sent over encrypted connections". |
| 9 | **The in-app delete subtitle overstates.** The subtitle says "Delete account and all data permanently". | `mobile/lib/views/settings_screen.dart:727` | Only true once #2 is fixed. |
| 10 | **Placeholder contacts and company details.** `support@msg2msg.com` is marked as a dummy, and the company name, address and governing law are empty. | `website/src/config/links.js`, `website/src/config/legal.js` | Play needs a working support email. Create the mailbox and fill in `operator`, `address` and `governingLaw` (the pages use neutral wording until then). |

---

## 1. URLs

| Play Console field | URL |
|---|---|
| Privacy policy | `https://msg2msg.com/privacy` |
| Delete account URL (Data safety → Data deletion) | `https://msg2msg.com/delete-account` |
| Website | `https://msg2msg.com` |
| Terms of Service (store listing / in-app) | `https://msg2msg.com/terms` |
| Community Guidelines | `https://msg2msg.com/community-guidelines` |
| Support / contact | `https://msg2msg.com/contact` |
| Support email | `support@msg2msg.com` (must be a working inbox) |

Aliases also resolve: `/privacy-policy`, `/terms-and-conditions`, `/terms-of-service`,
`/account-deletion`, `/guidelines`.

---

## 2. Data safety form

**Overview questions**

| Question | Answer |
|---|---|
| Does your app collect or share any of the required user data types? | Yes |
| Is all user data encrypted in transit? | Yes (HTTPS/TLS and WSS; Chime media is encrypted) |
| Do you provide a way for users to request that their data is deleted? | Yes: in-app (Settings → Delete Account) and the URL above |
| Data shared with third parties? | **No** for every type. AWS, Firebase, APNs and the SMS provider are service providers, and messages a user sends to another user are user-initiated transfers. Neither counts as "sharing". |

**Data types**: everything below is *Collected*, *Not shared*, and *not processed ephemerally* unless noted.

| Category → type | Collected | Required / optional | Purposes |
|---|---|---|---|
| Personal info → **Name** | Yes | Optional | App functionality, Account management |
| Personal info → **Phone number** | Yes | Required | App functionality, Account management, Fraud prevention, security & compliance |
| Personal info → Email address | No (only on the website contact form, which isn't part of the app) | – | – |
| Personal info → **Other info** (about text) | Yes | Optional | App functionality |
| Photos and videos → **Photos**, **Videos** | Yes | Optional | App functionality |
| Audio → **Voice or sound recordings** | Yes (voice messages; live call audio is processed ephemerally and not stored) | Optional | App functionality |
| Files and docs | Yes | Optional | App functionality |
| Messages → **Other in-app messages** | Yes | Required | App functionality |
| Contacts | Yes (names and numbers uploaded) | Optional | App functionality |
| App activity → **Other user-generated content** (status updates) | Yes | Optional | App functionality |
| Device or other IDs | Yes (device ID, FCM token) | Required | App functionality (push delivery) |
| Location, Financial info, Health & fitness, Web browsing, App info & performance, Calendar, Emails/SMS | **No** | – | – |

Don't tick Analytics, Advertising or marketing, or Personalization for any type. The app
has no analytics, ads or crash-reporting SDKs.

Independent security review: No. Families policy commitment: not applicable (not aimed at children).

---

## 3. Permissions and declarations

| Permission | Declaration needed | What to write |
|---|---|---|
| `USE_FULL_SCREEN_INTENT` | Yes (Android 14+ full-screen intent) | Core functionality: **Calling**. "Shows the incoming voice/video call screen when the phone is locked." |
| `FOREGROUND_SERVICE_MICROPHONE` | Yes (foreground service types) | Type: microphone. "Keeps an ongoing voice or video call active and audible when the user leaves the app or turns off the screen." Upload a short video: start a call → press Home → call continues, with the notification shown. |
| `READ_CONTACTS` | No form, but needs the prominent disclosure from §0 #5 | – |
| `READ_MEDIA_IMAGES` / `READ_MEDIA_VIDEO` | Photo & video permissions form, if kept | See §0 #7. Removing them is recommended. |
| `CAMERA`, `RECORD_AUDIO`, `POST_NOTIFICATIONS`, `SYSTEM_ALERT_WINDOW` | No form | Justified in the privacy policy's permission table. |
| Location | – | Remove (unused). |

---

## 4. App access

Choose **"All or some functionality is restricted"** and give reviewers:

- Phone number: a dedicated test number (for example a Twilio number, or one you allow-list in the backend)
- OTP: a fixed code that works **only for that number**
- Steps: open the app → Agree and continue → enter the number → enter the code → set a name.
  To test calls and messages, give a second test number, or keep a test account online that
  reviewers can message.

Don't submit while every number accepts `000000` (§0 #1).

---

## 5. Other declarations

| Section | Answer |
|---|---|
| Ads | **No**, the app doesn't contain ads |
| Content rating (IARC) | Category: Communication / social. Users can interact and exchange content: **Yes**. Shares the user's location with others: No. Digital purchases: No. Unfiltered web browsing: No. Violence/sexual/gambling content made by you: None. Expect a "Users Interact" descriptor. |
| Target audience | 13–15, 16–17 and 18+ (matches the 13+ minimum in the Terms). Not designed for children. If you'd rather avoid teen-safety scrutiny, choose 18+ only and raise `minAge` in `src/config/legal.js` to 18. |
| News app | No |
| Government app | No |
| Financial features | None |
| Health | None |
| Account creation | Yes, phone number + OTP. In-app deletion: Yes. |
| In-app purchases / subscriptions | None, so no refund policy is needed |

---

## 6. Store listing notes

- The Android launcher label is `m2m` (`AndroidManifest.xml`) and the iOS display name is `M2m`.
  Use one name everywhere (for example "M2M Messenger"), matching the store title.
- The description must not claim end-to-end encryption, and it should state the real 50 MB file limit.
- The website's Google Play and App Store buttons still point to `example.com` placeholders
  (`website/src/config/links.js`). Replace them once the listing is live.
