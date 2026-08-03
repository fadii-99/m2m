/** Flat illustration for the download hero — laptop, paper plane, pin, ticks. */
export default function DownloadArt() {
  return (
    <svg className="dl-art" viewBox="0 0 480 400" role="img" aria-label="M2M on a laptop">
      <defs>
        <linearGradient id="dl-lid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B01AF0" />
          <stop offset="100%" stopColor="#8A0E92" />
        </linearGradient>
      </defs>

      {/* laptop */}
      <g>
        <rect x="118" y="96" width="286" height="196" rx="20" fill="url(#dl-lid)" />
        <rect x="134" y="112" width="254" height="150" rx="10" fill="#FBF5FB" />

        {/* sidebar */}
        <rect x="134" y="112" width="74" height="150" rx="10" fill="#fff" />
        <rect x="134" y="150" width="74" height="112" fill="#fff" />
        <g fill="#E9D5EE">
          <rect x="146" y="128" width="50" height="7" rx="3.5" />
          <rect x="146" y="150" width="50" height="7" rx="3.5" />
          <rect x="146" y="172" width="38" height="7" rx="3.5" />
          <rect x="146" y="194" width="50" height="7" rx="3.5" />
          <rect x="146" y="216" width="30" height="7" rx="3.5" />
        </g>
        <line x1="208" y1="112" x2="208" y2="262" stroke="#EADCEE" strokeWidth="2" />

        {/* incoming bubble */}
        <rect x="224" y="130" width="118" height="40" rx="12" fill="#fff" stroke="#E4D0E9" strokeWidth="2" />
        <g fill="#E9D5EE">
          <rect x="236" y="142" width="84" height="6" rx="3" />
          <rect x="236" y="154" width="58" height="6" rx="3" />
        </g>

        {/* outgoing bubble */}
        <rect x="256" y="186" width="118" height="46" rx="12" fill="#D500F9" />
        <g fill="#fff" opacity=".85">
          <rect x="270" y="200" width="84" height="6" rx="3" />
          <rect x="270" y="213" width="60" height="6" rx="3" />
        </g>

        {/* base */}
        <path d="M92 292h338l22 26H70z" fill="url(#dl-lid)" />
        <rect x="196" y="298" width="90" height="8" rx="4" fill="#fff" opacity=".45" />
      </g>

      {/* pin */}
      <g className="dl-art__float">
        <rect
          x="352"
          y="52"
          width="56"
          height="56"
          rx="12"
          fill="#D500F9"
          transform="rotate(18 380 80)"
        />
        <path
          d="M380 108v34"
          stroke="#9B10A3"
          strokeWidth="7"
          strokeLinecap="round"
          transform="rotate(18 380 80)"
        />
      </g>

      {/* paper plane */}
      <g className="dl-art__float dl-art__float--b" transform="translate(396 150) rotate(-12)">
        <path
          d="M0 26 64 0 44 66 30 44Z"
          fill="#fff"
          stroke="#9B10A3"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M0 26 30 44 64 0"
          fill="none"
          stroke="#9B10A3"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>

      {/* delivered ticks */}
      <g
        className="dl-art__float dl-art__float--c"
        fill="none"
        stroke="#00B8D4"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="dl-art__draw" d="M20 236l20 20 40-48" />
        <path className="dl-art__draw" d="M52 256l20 20 40-48" style={{ animationDelay: '.3s' }} />
      </g>

      {/* small sparkles */}
      <g fill="#B238B8" opacity=".55">
        <circle className="dl-art__float dl-art__float--b" cx="96" cy="118" r="7" />
        <circle className="dl-art__float dl-art__float--c" cx="432" cy="300" r="9" />
        <circle className="dl-art__float" cx="60" cy="308" r="5" />
      </g>
    </svg>
  )
}
