import Spline from '@splinetool/react-spline';
import { Bot, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Sparkles className="h-4 w-4 text-blue-300" />
          <span className="text-xs font-medium text-blue-100/80">IA en acción • Demos reales</span>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Chatbot operativo en Telegram y Web
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100/80">
          Un sitio minimalista, profesional y tecnológico que presenta dos demos funcionales como evidencia clara del rendimiento del sistema de IA.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#demos" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
            <Bot className="h-5 w-5" /> Ver demos
          </a>
          <a href="#acerca" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-blue-100 transition hover:bg-white/10">
            ¿Qué incluye?
          </a>
        </div>
      </div>
    </section>
  );
}
