"use client"

import { useEffect, useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 200, height = 80, className = "" }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`relative inline-block ${className} animate-float`} style={{ width: width, height: height }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 252 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <g>
          {/* Logo mark */}
          <g>
            {/* Lightning bolt shape (moved to appear behind the circle) */}
            <polygon
              fill="#0087c7"
              points="119.02 52.37 112.79 62.4 117.86 62.4 118.6 67.47 126.32 54.69 132.96 67.47 134.44 61.87 139.93 63.14 131.87 49.57 119.02 52.37"
            />

            {/* Lightning bolt outline */}
            <polygon
              fill="none"
              stroke="#2c296a"
              strokeWidth="0.75"
              strokeMiterlimit="10"
              points="119.02 52.37 112.79 62.4 117.86 62.4 118.6 67.47 126.32 54.69 132.96 67.47 134.44 61.87 139.93 63.14 131.87 49.57 119.02 52.37"
            />

            {/* Cloud shape */}
            <path
              fill="#0087c7"
              d="M132.77,54.12s6.02,1.48,5.91-5.17c0,0-.53-2.22,1.06-3.27,0,0,3.48-2.16.53-7.1,0,0-2.01-.51-2.01-3.88,0,0-.53-4.86-5.49-4.22,0,0-1.58.32-3.06-1.37,0,0-2.64-3.27-7.18-.42,0,0-1.37,2.43-3.17,1.69,0,0-4.96,.42-4.96,4.86,0,0,.42,3.06-1.48,3.8,0,0-3.91,3.48,0,6.44,0,0,2.32,1.06,1.48,3.7,0,0-.21,5.56,4.44,5.1,0,0,3.06-.56,4.54,1.66,0,0,3.7,3.91,6.13,0,0,0,1.06-2.53,3.27-1.8Z"
            />

            {/* Cloud shape outline */}
            <path
              fill="none"
              stroke="#2c296a"
              strokeWidth="0.75"
              strokeMiterlimit="10"
              d="M132.77,54.12s6.02,1.48,5.91-5.17c0,0-.53-2.22,1.06-3.27,0,0,3.48-2.16.53-7.1,0,0-2.01-.51-2.01-3.88,0,0-.53-4.86-5.49-4.22,0,0-1.58.32-3.06-1.37,0,0-2.64-3.27-7.18-.42,0,0-1.37,2.43-3.17,1.69,0,0-4.96,.42-4.96,4.86,0,0,.42,3.06-1.48,3.8,0,0-3.91,3.48,0,6.44,0,0,2.32,1.06,1.48,3.7,0,0-.21,5.56,4.44,5.1,0,0,3.06-.56,4.54,1.66,0,0,3.7,3.91,6.13,0,0,0,1.06-2.53,3.27-1.8Z"
            />

            {/* Circle */}
            <circle fill="#0087c7" cx="126.63" cy="42.55" r="8.77" transform="translate(-5.18 20.83) rotate(-9.22)" />

            {/* Circle outline */}
            <circle
              fill="none"
              stroke="#2c296a"
              strokeWidth="0.75"
              strokeMiterlimit="10"
              cx="126.63"
              cy="42.55"
              r="8.77"
              transform="translate(-5.18 20.83) rotate(-9.22)"
            />

            {/* Checkmark */}
            <polyline
              fill="none"
              stroke="#2c296a"
              strokeWidth="0.75"
              strokeMiterlimit="10"
              points="123.11 44.09 126.32 46.41 132.06 38.61"
            />

            {/* Eyebrow lines */}
            <g>
              <path
                fill="none"
                stroke="#2c296a"
                strokeWidth="0.5"
                strokeMiterlimit="10"
                d="M123.72,39.74s2.6-1.18,4.96,0"
              />
              <path
                fill="none"
                stroke="#2c296a"
                strokeWidth="0.5"
                strokeMiterlimit="10"
                d="M123.18,38.49s3.29-1.49,6.28,0"
              />
              <path
                fill="none"
                stroke="#2c296a"
                strokeWidth="0.5"
                strokeMiterlimit="10"
                d="M124.26,40.96s2.06-.59,3.93,0"
              />
            </g>
          </g>

          {/* Text elements */}
          <text
            transform="translate(75.51 84.27)"
            fill="#f7f7f9"
            fontSize="18.61px"
            fontFamily="Helvetica-Bold, Helvetica"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              cho
            </tspan>
            <tspan
              x="33.08"
              y="0"
              fontFamily="RoxboroughCF-DemiBold, 'Roxborough CF'"
              fontWeight="300"
              letterSpacing="0em"
            >
              Score.ai
            </tspan>
          </text>

          <text
            transform="translate(76.62 92.39)"
            fill="#2c296a"
            fontFamily="RoxboroughCF-DemiBold, 'Roxborough CF'"
            fontWeight="300"
            fontSize="6.95px"
          >
            <tspan x="0" y="0">
              Social Media, Measured Right.
            </tspan>
          </text>

          {/* Decorative lines */}
          <path
            fill="none"
            stroke="#f9fafd"
            strokeWidth="2.5"
            strokeMiterlimit="10"
            d="M62.47,79.54s5.39-3.71,11.35-2.97"
          />
          <path
            fill="none"
            stroke="#f9fafd"
            strokeWidth="2.5"
            strokeMiterlimit="10"
            d="M59.9,74.73s6.82-4.7,14.36-3.76"
          />
          <path
            fill="none"
            stroke="#f9fafd"
            strokeWidth="2.5"
            strokeMiterlimit="10"
            d="M65.05,84.29s4.44-2.31,9-2.35"
          />

          {/* Additional decorative elements */}
          <path fill="#0087c7" d="M176.42,72.64s.59-.94.68-1.9c0,0,.5-.31,1.34.43l-2.03,1.47Z" />

          <g opacity="0.2">
            <circle fill="#f7f7f9" cx="71.57" cy="89.85" r="2.96" />
            <path fill="#0087c7" d="M70.55,89.54s.2-1.56.97-2.69c0,0-.27-.79-1.85-.74l.89,3.43Z" />
          </g>

          <g opacity="0.2">
            <path
              fill="none"
              stroke="#f9f9fd"
              strokeWidth="0.25"
              strokeMiterlimit="10"
              d="M177.78,69.56s1.02.43,1.46,1.35"
            />
            <path
              fill="none"
              stroke="#f9f9fd"
              strokeWidth="0.25"
              strokeMiterlimit="10"
              d="M178.23,68.75s1.29.54,1.85,1.71"
            />
            <path
              fill="none"
              stroke="#f9f9fd"
              strokeWidth="0.25"
              strokeMiterlimit="10"
              d="M177.34,70.36s.74.42,1.16,1.07"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}
