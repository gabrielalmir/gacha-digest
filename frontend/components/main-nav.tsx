"use client"

import { CatIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-white">
              <CatIcon className="mr-2" />
              <span className="text-white font-bold text-xl">GACHA DIGEST</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-white hover:text-neon-yellow transition-colors">
              Features
            </Link>
            <Link href="/#preview" className="text-white hover:text-neon-yellow transition-colors">
              Preview
            </Link>
            <Link href="/#pricing" className="text-white hover:text-neon-yellow transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="#subscribe"
              className="hidden md:block bg-neon-yellow text-black px-4 py-2 font-bold hover:bg-yellow-300 transition-colors"
            >
              Subscribe Now
            </Link>
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-white hover:text-neon-yellow transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#preview"
                className="text-white hover:text-neon-yellow transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Preview
              </Link>
              <Link
                href="#pricing"
                className="text-white hover:text-neon-yellow transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#subscribe"
                className="bg-neon-yellow text-black px-4 py-2 font-bold hover:bg-yellow-300 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

