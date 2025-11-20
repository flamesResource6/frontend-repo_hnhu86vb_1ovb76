import React from 'react'
import { Menu, Package } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">Corruga</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-white/80 hover:text-white transition">Services</a>
          <a href="#benefits" className="text-sm text-white/80 hover:text-white transition">Benefits</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 text-white/80 hover:text-white">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
