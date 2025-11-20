import React from 'react'
import { Leaf, ShieldCheck, Truck, Recycle } from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Strength & Protection',
    desc: 'Engineered with the right flute and board grade for superior compression and edge crush performance.'
  },
  {
    icon: Leaf,
    title: 'Sustainable by Design',
    desc: 'Sourced from responsibly managed forests, with high post-consumer content and fully recyclable.'
  },
  {
    icon: Truck,
    title: 'Optimized Logistics',
    desc: 'Flat-packed, lightweight, and stack-efficient to reduce freight costs and warehouse footprint.'
  },
  {
    icon: Recycle,
    title: 'Circular Lifecycle',
    desc: 'Reused and recycled within established fiber recovery streams to minimize waste.'
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,#f97316_0%,transparent_30%)] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Benefits</h2>
          <p className="mt-2 text-gray-300 max-w-2xl">Why brands choose corrugated cardboard for reliable protection and sustainable packaging.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition">
              <div className="w-11 h-11 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
