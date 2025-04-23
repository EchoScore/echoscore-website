interface EchoScoreIconProps {
  percentage?: number
  size?: number
  className?: string
}

export function EchoScoreIcon({ percentage = 80, size = 120, className = "" }: EchoScoreIconProps) {
  // Calculate the stroke-dasharray and stroke-dashoffset for the progress circle
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120">
        {/* Background circle */}
        <circle cx="60" cy="60" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="10" />

        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#0087C7"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />

        {/* Text in the middle */}
        <text x="60" y="65" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#0087C7">
          {percentage}%
        </text>
      </svg>
    </div>
  )
}
