import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]"/>
      </div>

      {/* Hero with Spline */}
      <Hero />

      {/* Content wrapper */}
      <main className="relative">
        {/* Markdown-like section title */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 text-left">
            <p className="text-xs font-mono text-blue-300/70"># demos</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">Demostraciones del sistema</h2>
            <p className="mt-1 text-sm text-blue-100/70">Evidencia visual y funcional de la IA en dos canales principales.</p>
          </div>
        </div>

        {/* Videos */}
        <VideoSection />

        {/* About / bullets */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-4 text-left">
            <p className="text-xs font-mono text-blue-300/70"># acerca</p>
          </div>
        </div>
        <About />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/60 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-blue-200/60">
          <p>Proyecto de presentación — enfoque minimalista, profesional y tecnológico.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
