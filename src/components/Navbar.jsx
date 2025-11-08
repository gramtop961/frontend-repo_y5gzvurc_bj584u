import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/50 border-b border-sky-100">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 shadow-inner animate-pulse" />
          <span className="font-semibold text-slate-800">Second Brain</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-sky-700">Features</a>
          <a href="#cta" className="hover:text-sky-700">Get Started</a>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
          <Rocket size={16} /> Launch
        </button>
      </div>
    </header>
  );
}
