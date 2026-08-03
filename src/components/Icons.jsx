/* Minimal inline icon set  no external icon dependency. */

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconChevronDown = (p) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const IconChevronRight = (p) => (
  <svg {...base} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const IconHelp = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.4A2.5 2.5 0 0 1 14.5 10c0 1.7-2.5 2-2.5 3.6" />
    <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const IconCheck = (p) => (
  <svg {...base} strokeWidth="2.2" {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
)

export const IconText = (p) => (
  <svg {...base} {...p}>
    <path d="M5 6.5V5h14v1.5M12 5v14M9 19h6" />
  </svg>
)

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M15 3 21 9M14 4l6 6-4 1.5-1 4.5-6-6-4.5-1L4 4l10 0ZM9.5 14.5 4 20" />
  </svg>
)

export const IconArchive = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="4.5" rx="1.5" />
    <path d="M4.5 8.5V19a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V8.5M10 12h4" />
  </svg>
)

export const IconSticker = (p) => (
  <svg {...base} {...p}>
    <path d="M21 12a9 9 0 1 0-9 9c1.5 0 8-6.6 9-9Z" />
    <path d="M12.5 21c0-4 1-5.5 5-5.5M9 10h.01M15 10h.01M9.5 14a3.5 3.5 0 0 0 4 .6" />
  </svg>
)

export const IconEmoji = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01M8.5 14a4.5 4.5 0 0 0 7 0" />
  </svg>
)

export const IconGif = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="3" />
    <path d="M10 10.5A2 2 0 0 0 7 12v.6a2 2 0 0 0 3 1.7V12.6H9M12.8 9.6v4.8M15.6 14.4V9.6h2.6M15.6 12h2" />
  </svg>
)

export const IconTranslate = (p) => (
  <svg {...base} {...p}>
    <path d="M3 5.5h9M7.5 3.5v2M9.6 5.5c-.4 4-3 7-6.6 8.4M6 9.4c.8 2.2 2.6 3.9 4.8 4.6M12.5 20.5l4-9 4 9M14 17.5h5" />
  </svg>
)

export const IconFolder = (p) => (
  <svg {...base} {...p}>
    <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4l2 2.5h7A1.5 1.5 0 0 1 19 10v7.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 3 17.5v-10Z" />
  </svg>
)

export const IconUpdates = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 4.2a7.8 7.8 0 0 1 0 15.6M12 4.2a7.8 7.8 0 0 0 0 15.6" opacity=".55" />
    <path d="M12 2v2M12 20v2" />
  </svg>
)

export const IconChevronLeft = (p) => (
  <svg {...base} {...p}>
    <path d="m15 6-6 6 6 6" />
  </svg>
)

export const IconArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15m0 0-6-6m6 6-6 6" />
  </svg>
)

export const IconHandRaise = (p) => (
  <svg {...base} {...p}>
    <path d="M9 11V4.6a1.6 1.6 0 0 1 3.2 0V11m0-1.4a1.6 1.6 0 0 1 3.2 0V12m0-1a1.6 1.6 0 0 1 3.2 0v4.4A5.6 5.6 0 0 1 12.8 21h-1a5 5 0 0 1-4-2l-2.4-3.3a1.6 1.6 0 0 1 2.4-2L9 15" />
  </svg>
)

export const IconScreenShare = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
    <path d="M8.5 21h7M12 8v5m0-5-2 2m2-2 2 2" />
  </svg>
)

export const IconCalendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

export const IconSpeaker = (p) => (
  <svg {...base} {...p}>
    <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" />
    <path d="M15.5 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10" />
  </svg>
)

export const IconExpand = (p) => (
  <svg {...base} {...p}>
    <path d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5" />
  </svg>
)

export const IconUserPlus = (p) => (
  <svg {...base} {...p}>
    <path d="M15 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
    <circle cx="8.5" cy="7.5" r="3.5" />
    <path d="M19 8v6M22 11h-6" />
  </svg>
)

export const IconSwitchCamera = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h3l1.5-2.5h7L17 8h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 8Z" />
    <path d="M9.5 13.5a2.5 2.5 0 0 1 4.3-1.7M14.5 14.5a2.5 2.5 0 0 1-4.3 1.7" />
  </svg>
)

export const IconArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const IconArrowUp = (p) => (
  <svg {...base} {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export const IconDownload = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
  </svg>
)

export const IconLock = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="10" width="16" height="11" rx="2.5" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h-.9A2.6 2.6 0 0 0 3 6.1C3 14.3 9.7 21 17.9 21a2.6 2.6 0 0 0 2.6-2.6v-.9a1.3 1.3 0 0 0-.9-1.2l-3-1a1.3 1.3 0 0 0-1.4.4l-.9 1.1a13.6 13.6 0 0 1-5.1-5.1l1.1-.9a1.3 1.3 0 0 0 .4-1.4l-1-3a1.3 1.3 0 0 0-1.2-.9Z" />
  </svg>
)

export const IconVideo = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="6" width="13" height="12" rx="3" />
    <path d="m15.5 12 6-3.5v7l-6-3.5Z" />
  </svg>
)

export const IconChat = (p) => (
  <svg {...base} {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.3 9.3 0 0 1-3.3-.6L3 21l1.8-5.1A8.1 8.1 0 0 1 3.6 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8.4 8.4Z" />
  </svg>
)

export const IconUsers = (p) => (
  <svg {...base} {...p}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
    <circle cx="9" cy="7.5" r="3.5" />
    <path d="M22 20v-1.5a4 4 0 0 0-3-3.9M16.5 4.2a3.5 3.5 0 0 1 0 6.6" />
  </svg>
)

export const IconStatus = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1 1M17.4 17.4l1 1M18.4 5.6l-1 1M6.6 17.4l-1 1" />
  </svg>
)

export const IconBriefcase = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
    <path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7M2.5 12.5h19" />
  </svg>
)

export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.3 2.9 8.3 7 9.5 4.1-1.2 7-5.2 7-9.5V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const IconSearch = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

export const IconSend = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12 20 4l-8 16-2-6-6-2Z" />
  </svg>
)

export const IconMic = (p) => (
  <svg {...base} {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
  </svg>
)

export const IconMicOff = (p) => (
  <svg {...base} {...p}>
    <path d="M9 9v2a3 3 0 0 0 4.6 2.5M15 11V6a3 3 0 0 0-5.6-1.5" />
    <path d="M5.5 11.5A6.5 6.5 0 0 0 15 17.3M18.5 11.5c0 .7-.1 1.4-.3 2M12 18v3M4 4l16 16" />
  </svg>
)

export const IconCamera = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h3l1.5-2.5h7L17 8h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 8Z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </svg>
)

export const IconPhoneOff = (p) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h-.9A2.6 2.6 0 0 0 3 6.1C3 14.3 9.7 21 17.9 21a2.6 2.6 0 0 0 2.6-2.6v-.9a1.3 1.3 0 0 0-.9-1.2l-3-1a1.3 1.3 0 0 0-1.4.4l-.9 1.1a13.6 13.6 0 0 1-5.1-5.1l1.1-.9a1.3 1.3 0 0 0 .4-1.4l-1-3a1.3 1.3 0 0 0-1.2-.9Z" />
  </svg>
)

export const IconCheckDouble = (p) => (
  <svg {...base} strokeWidth="2.2" {...p}>
    <path d="m2 13 3.5 3.5L12 10" />
    <path d="m11 16 1 1 8.5-8.5" />
  </svg>
)

export const IconPlus = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const IconMore = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="5" r="1.2" fill="currentColor" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <circle cx="12" cy="19" r="1.2" fill="currentColor" />
  </svg>
)

export const IconWifi = (p) => (
  <svg {...base} strokeWidth="2" {...p}>
    <path d="M2 8.8a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16.2a5 5 0 0 1 6 0" />
    <circle cx="12" cy="19.5" r="0.8" fill="currentColor" />
  </svg>
)

export const IconBattery = (p) => (
  <svg {...base} strokeWidth="1.6" {...p}>
    <rect x="2" y="8" width="17" height="9" rx="2.5" />
    <path d="M21.5 11.5v2" />
    <rect x="4" y="10" width="12" height="5" rx="1" fill="currentColor" stroke="none" />
  </svg>
)

export const IconSignal = (p) => (
  <svg {...base} strokeWidth="1.6" {...p}>
    <path d="M3 17v3M8.5 13v7M14 9v11M19.5 4v16" />
  </svg>
)

export const IconGlobe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 9h17M3.5 15h17M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
  </svg>
)

export const IconSparkle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.8 9 19 10.8 13.8 12.6 12 18l-1.8-5.4L5 10.8 10.2 9 12 3.5Z" />
  </svg>
)

export const IconApple = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
    <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.6-1.9-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.2-.8-1.7 0-3.2 1-4 2.5-1.7 2.9-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.7c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.3-3.9ZM14.3 5.3c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
  </svg>
)

/** The Google Play mark — four-colour triangle, as used on the real badge. */
export const IconGooglePlay = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...p}>
    <path
      fill="#00C3FF"
      d="M3.6 2.1c-.34.35-.53.9-.53 1.6v16.6c0 .7.19 1.25.53 1.6l.06.05 9.3-9.3v-.22l-9.3-9.3-.06.06z"
    />
    <path fill="#FFCE00" d="m16.55 15.72-3.09-3.09v-.22l3.1-3.09.07.04 3.66 2.08c1.05.6 1.05 1.57 0 2.16l-3.66 2.08-.08.04z" />
    <path fill="#FF3A44" d="M16.63 15.68 13.46 12.5 3.6 22.36c.35.36.92.41 1.56.05l11.47-6.73z" />
    <path fill="#00D26A" d="M16.63 9.32 5.16 2.59c-.64-.36-1.21-.31-1.56.05l9.86 9.86 3.17-3.18z" />
  </svg>
)

export const IconAndroid = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
    <path d="M17.6 9.5H6.4v9.1c0 .6.5 1.1 1.1 1.1h1.1v3a1.4 1.4 0 0 0 2.8 0v-3h1.2v3a1.4 1.4 0 0 0 2.8 0v-3h1.1c.6 0 1.1-.5 1.1-1.1V9.5ZM4.4 9.3A1.4 1.4 0 0 0 3 10.7v5.5a1.4 1.4 0 0 0 2.8 0v-5.5a1.4 1.4 0 0 0-1.4-1.4Zm15.2 0a1.4 1.4 0 0 0-1.4 1.4v5.5a1.4 1.4 0 0 0 2.8 0v-5.5a1.4 1.4 0 0 0-1.4-1.4ZM15.3 3l1-1.7a.3.3 0 0 0-.5-.3l-1 1.8A6.6 6.6 0 0 0 12 2.3c-1 0-2 .2-2.8.5l-1-1.8a.3.3 0 1 0-.5.3l1 1.7A5.3 5.3 0 0 0 6.4 8.2h11.2c-.2-2.2-1-4-2.3-5.2ZM9.4 5.9a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm5.2 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z" />
  </svg>
)

export const IconWindows = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
    <path d="M3 5.6 10.4 4.6v7.1H3V5.6Zm0 12.8 7.4 1v-7H3v6ZM11.4 4.4 21 3v8.7h-9.6V4.4Zm0 8.3H21V21l-9.6-1.3v-7Z" />
  </svg>
)

export const IconX = (p) => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...p}>
    <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5 21H1.9l7.3-8.3L2.4 3h6.3l4.4 5.8L17.5 3Zm-1.1 16.1h1.7L7.6 4.8H5.8l10.6 14.3Z" />
  </svg>
)

export const IconYoutube = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
)

export const IconInstagram = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const IconFacebook = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.7v8h3.2Z" />
  </svg>
)

export const IconTiktok = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
    <path d="M16.5 3h-2.8v12.1a2.4 2.4 0 1 1-2-2.4v-2.9a5.3 5.3 0 1 0 4.8 5.3V9.3a6.4 6.4 0 0 0 3.7 1.2V7.7a3.7 3.7 0 0 1-3.7-3.7V3Z" />
  </svg>
)
