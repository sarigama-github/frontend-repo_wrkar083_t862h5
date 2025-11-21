import { CheckCircle2 } from 'lucide-react';

const items = [
  'Diseño minimalista y profesional',
  'Estructura por secciones con títulos tipo markdown',
  'Íconos claros y consistentes',
  'Foco absoluto en las demos como evidencia del sistema',
];

export default function About() {
  return (
    <section id="acerca" className="mx-auto max-w-6xl px-6 pb-24">
      <h2 className="text-2xl font-semibold text-white">Acerca del sitio</h2>
      <p className="mt-2 max-w-2xl text-blue-100/70">
        Este sitio está diseñado para comunicar de forma directa y elegante el funcionamiento de un chatbot de IA en dos entornos clave: Telegram y una interfaz web construida con Streamlit.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-300" />
            <span className="text-blue-100/80">{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
