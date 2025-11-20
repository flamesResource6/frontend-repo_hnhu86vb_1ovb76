import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(600px_600px_at_10%_10%,rgba(249,115,22,0.12),transparent),radial-gradient(800px_800px_at_90%_0%,rgba(17,24,39,0.6),transparent)]" />

      <Navbar />
      <Hero />
      <Services />
      <Benefits />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Ready to build better packaging?</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Tell us about your product, timeline, and budget. We’ll prototype a corrugated solution that fits like a glove.</p>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium shadow-lg shadow-orange-500/20 hover:brightness-110 transition">Request a Quote</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
