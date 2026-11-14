const bodyRegions = [
  'Head',
  'Chest',
  'Abdomen',
  'Left Arm',
  'Right Arm',
  'Left Leg',
  'Right Leg',
]

export default function HumanBodyMap({ selectedRegion, onSelect }) {
  const regionStyle = (region) => ({
    fill: selectedRegion === region ? '#22d3ee' : '#334155',
    stroke: selectedRegion === region ? '#67e8f9' : '#64748b',
    strokeWidth: selectedRegion === region ? 3 : 1.5,
    cursor: 'pointer',
    transition: 'fill 0.2s',
  })

  const regionEvents = (region) => ({
    onClick: () => onSelect(region),
    onKeyDown: (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onSelect(region)
      }
    },
    role: 'button',
    tabIndex: 0,
    'aria-label': `Select ${region}`,
  })

  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 300 530"
        className="h-[480px] w-full max-w-[290px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Interactive simplified human body diagram"
        role="group"
      >
        {/* Head */}
        <ellipse
          cx="150"
          cy="48"
          rx="30"
          ry="36"
          style={regionStyle('Head')}
          {...regionEvents('Head')}
        />

        {/* Neck */}
        <rect
          x="137"
          y="80"
          width="26"
          height="25"
          rx="7"
          fill="#475569"
          stroke="#64748b"
        />

        {/* Chest */}
        <rect
          x="105"
          y="105"
          width="90"
          height="100"
          rx="22"
          style={regionStyle('Chest')}
          {...regionEvents('Chest')}
        />

        {/* Abdomen */}
        <rect
          x="112"
          y="207"
          width="76"
          height="85"
          rx="14"
          style={regionStyle('Abdomen')}
          {...regionEvents('Abdomen')}
        />

        {/* Left Arm */}
        <path
          d="M105 118 L82 133 L55 235"
          fill="none"
          stroke={selectedRegion === 'Left Arm' ? '#22d3ee' : '#334155'}
          strokeWidth="25"
          strokeLinecap="round"
          style={{ cursor: 'pointer' }}
          {...regionEvents('Left Arm')}
        />

        {/* Right Arm */}
        <path
          d="M195 118 L218 133 L245 235"
          fill="none"
          stroke={selectedRegion === 'Right Arm' ? '#22d3ee' : '#334155'}
          strokeWidth="25"
          strokeLinecap="round"
          style={{ cursor: 'pointer' }}
          {...regionEvents('Right Arm')}
        />

        {/* Left Leg */}
        <path
          d="M132 294 L122 390 L112 480"
          fill="none"
          stroke={selectedRegion === 'Left Leg' ? '#22d3ee' : '#334155'}
          strokeWidth="32"
          strokeLinecap="round"
          style={{ cursor: 'pointer' }}
          {...regionEvents('Left Leg')}
        />

        {/* Right Leg */}
        <path
          d="M168 294 L178 390 L188 480"
          fill="none"
          stroke={selectedRegion === 'Right Leg' ? '#22d3ee' : '#334155'}
          strokeWidth="32"
          strokeLinecap="round"
          style={{ cursor: 'pointer' }}
          {...regionEvents('Right Leg')}
        />

        {/* Hands */}
        <circle cx="55" cy="247" r="12" fill="#475569" />
        <circle cx="245" cy="247" r="12" fill="#475569" />

        {/* Feet */}
        <ellipse cx="108" cy="493" rx="20" ry="10" fill="#475569" />
        <ellipse cx="192" cy="493" rx="20" ry="10" fill="#475569" />
      </svg>
    </div>
  )
}