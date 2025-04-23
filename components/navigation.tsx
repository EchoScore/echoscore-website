"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/developer"
            className={`text-[#00bfff] hover:opacity-80 transition-opacity lowercase tracking-wide ${
              pathname === "/developer" ? "font-medium" : "font-normal"
            }`}
          >
            dev
          </Link>
        </li>
        <li>
          <Link
            href="/investor"
            className={`text-[#00bfff] hover:opacity-80 transition-opacity lowercase tracking-wide ${
              pathname === "/investor" ? "font-medium" : "font-normal"
            }`}
          >
            invest
          </Link>
        </li>
      </ul>
    </nav>
  )
}
