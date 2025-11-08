import { Search } from 'lucide-react';

export default function Navbar({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/50 border-b border-sky-100">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 shadow-inner" />
          <span className="font-semibold text-slate-800">Second Brain</span>
        </div>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search your links & PDFs..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-sky-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm"
          />
        </div>
      </div>
    </header>
  );
}
