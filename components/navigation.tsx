"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 z-50 p-6 w-full flex justify-end">
      {/* Mobile menu button */}
      <button className="md:hidden z-50 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0087C7] bg-opacity-95 flex items-center justify-center z-40">
          <ul className="flex flex-col items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-white text-xl hover:opacity-80 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/developer"
                className={`text-white text-xl hover:opacity-80 transition-opacity lowercase tracking-wide ${
                  pathname === "/developer" ? "font-medium" : "font-normal"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                dev
              </Link>
            </li>
            <li>
              <Link
                href="/investor"
                className={`text-white text-xl hover:opacity-80 transition-opacity lowercase tracking-wide ${
                  pathname === "/investor" ? "font-medium" : "font-normal"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                invest
              </Link>
            </li>
            <li>
              <Link
                href="/waitlist"
                className="text-white text-xl hover:opacity-80 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Waitlist
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center gap-6">
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
