import { MessageSquare, Globe } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="demos" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Demos principales</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100/70">Dos experiencias, un mismo cerebro de IA. Interacción en tiempo real tanto en Telegram como en interfaz web.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Telegram Demo */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10">
          <div className="flex items-center gap-2 px-1 pb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-white">Chatbot en Telegram</h3>
              <p className="text-xs text-blue-200/70">Interacción directa desde la app</p>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/50">
            {/* Reemplaza los src por tus URLs de video */}
            <video className="h-full w-full" src="/videos/telegram-demo.mp4" controls playsInline />
          </div>
          <p className="mt-3 text-sm text-blue-100/70">
            Demostración funcional del bot conversando con usuarios en tiempo real, manejando contexto y respuestas.
          </p>
        </div>

        {/* Web Streamlit Demo */}
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10">
          <div className="flex items-center gap-2 px-1 pb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-white">Chatbot en Web (Streamlit)</h3>
              <p className="text-xs text-blue-200/70">UI limpia, rápida, con paneles</p>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/50">
            <video className="h-full w-full" src="/videos/streamlit-demo.mp4" controls playsInline />
          </div>
          <p className="mt-3 text-sm text-blue-100/70">
            Respuestas ágiles, diseño minimalista y paneles informativos para visualizar el flujo de la conversación.
          </p>
        </div>
      </div>
    </section>
  );
}
