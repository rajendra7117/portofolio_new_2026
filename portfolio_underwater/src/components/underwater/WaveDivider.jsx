function WaveDivider({ flip = false, className = '', variant = 'default' }) {
  const classes = ['wave-divider', flip ? 'flip' : '', variant === 'hero' ? 'wave-divider-hero' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} aria-hidden="true">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path
          className="wave-layer wave-back"
          d="M0,52 C170,68 270,26 420,48 C565,70 690,98 820,78 C954,58 1045,28 1158,34 C1280,40 1365,64 1440,54 L1440,180 L0,180 Z"
        />
        <path
          className="wave-layer wave-mid"
          d="M0,86 C150,110 260,78 390,90 C520,102 638,130 790,108 C930,88 1032,66 1160,82 C1282,97 1364,114 1440,104 L1440,180 L0,180 Z"
        />
        <path
          className="wave-layer wave-front"
          d="M0,114 C160,138 270,112 420,118 C570,124 690,154 835,136 C980,118 1104,108 1226,122 C1334,134 1398,136 1440,128 L1440,180 L0,180 Z"
        />
      </svg>
    </div>
  )
}

export default WaveDivider
