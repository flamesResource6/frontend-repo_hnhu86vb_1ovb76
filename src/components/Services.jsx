import React from 'react'
import { Box, Ruler, PackageSearch, Scissors } from 'lucide-react'

const items = [
  {
    icon: Box,
    title: 'Custom Box Manufacturing',
    desc: 'Die-cut and regular slotted cartons tailored to your product dimensions and strength requirements.'
  },
  {
    icon: Ruler,
    title: 'Prototyping & Sampling',
    desc: 'Rapid prototypes with precise tolerances so you can test fit, compression, and stacking.'
  },
  {
    icon: Scissors,
    title: 'Printing & Finishing',
    desc: 'Single to full-color print, varnish, and specialty finishes that elevate your brand.'
  },
  {
    icon: PackageSearch,
    title: 'Packaging Engineering',
    desc: 'Optimization for shipping, sustainability, and cost — without compromising protection.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#f97316_0%,transparent_40%),radial-gradient(circle_at_80%_0%,#111827_0%,transparent_30%)] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Services</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">From concept to production, we craft corrugated solutions that fit perfectly and perform reliably.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
