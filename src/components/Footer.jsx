import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Corruga. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="text-white/70 hover:text-white">Services</a>
            <a href="#benefits" className="text-white/70 hover:text-white">Benefits</a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
