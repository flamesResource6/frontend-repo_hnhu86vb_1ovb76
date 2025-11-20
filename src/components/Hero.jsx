import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[72vh] grid lg:grid-cols-2 items-center">
          <div className="py-24">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
              Corrugated Excellence
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Premium Corrugated Cardboard Solutions
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-xl">
              Durable, eco-friendly packaging engineered for protection and brand impact. Built to spec, delivered on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-orange-500 text-white font-medium shadow-lg shadow-orange-500/20 hover:brightness-110 transition">Explore Services</a>
              <a href="#benefits" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition">See Benefits</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
    </section>
  )
}
