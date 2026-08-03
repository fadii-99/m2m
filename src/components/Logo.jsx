export default function Logo({ invert = false, showWord = true }) {
  return (
    <a href="#top" className={`logo${invert ? ' logo--invert' : ''}`} aria-label="M2M home">
      <svg className="logo__mark" viewBox="0 0 512 512" aria-hidden="true">
        <defs>
          <linearGradient id="m2m-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D500F9" />
            <stop offset="100%" stopColor="#9B10A3" />
          </linearGradient>
        </defs>
        <rect width="512" height="512" rx="120" fill="url(#m2m-mark)" />
        <path
          fill="#fff"
          d="M198 122h116a108 108 0 0 1 0 216h-70l-78 62v-62h-2a108 108 0 0 1 0-216h34z"
        />
        <path
          fill="#9B10A3"
          d="M212 168c-10 6-16 18-14 30 4 30 22 56 46 72 12 8 26 12 40 12 10 0 20-6 24-16 2-6 0-12-4-16l-20-16c-5-4-12-3-16 2l-6 8c-14-8-25-19-32-33l9-6c5-4 6-11 2-16l-16-20c-4-5-11-6-16-3z"
        />
      </svg>
      {showWord && <span>M2M</span>}
    </a>
  )
}
