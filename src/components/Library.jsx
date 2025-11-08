import { ExternalLink, Trash2, Youtube, FileText } from 'lucide-react';

function YouTubeCard({ item, onRemove }) {
  return (
    <div className="group rounded-xl border border-sky-100 bg-white/80 shadow-sm overflow-hidden">
      {item.thumbnail && (
        <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sky-600 text-xs font-medium">
            <Youtube size={16} /> YouTube
          </div>
          <a href={item.url} target="_blank" rel="noreferrer" className="block mt-1 font-semibold text-slate-800 truncate">
            {item.title}
          </a>
          <p className="text-xs text-slate-500 mt-1">Saved {new Date(item.createdAt).toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-sky-600 text-white hover:bg-sky-700">
            <ExternalLink size={14} /> Open
          </a>
          <button onClick={() => onRemove(item.id)} className="opacity-80 hover:opacity-100 text-slate-500 hover:text-red-600">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PDFCard({ item, onRemove }) {
  return (
    <div className="group rounded-xl border border-sky-100 bg-white/80 shadow-sm overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center text-sky-700">
        <FileText size={32} />
      </div>
      <div className="p-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sky-600 text-xs font-medium">
            <FileText size={16} /> PDF
          </div>
          <a href={item.url} target="_blank" rel="noreferrer" className="block mt-1 font-semibold text-slate-800 truncate">
            {item.title}
          </a>
          <p className="text-xs text-slate-500 mt-1">Saved {new Date(item.createdAt).toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-sky-600 text-white hover:bg-sky-700">
            <ExternalLink size={14} /> Open
          </a>
          <button onClick={() => onRemove(item.id)} className="opacity-80 hover:opacity-100 text-slate-500 hover:text-red-600">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Library({ items, onRemove }) {
  if (!items.length) {
    return (
      <div className="mt-8 rounded-xl border border-sky-100 bg-sky-50/60 p-8 text-center text-slate-600">
        Your library is empty. Add a YouTube link or drop a PDF to begin.
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        item.type === 'youtube' ? (
          <YouTubeCard key={item.id} item={item} onRemove={onRemove} />
        ) : (
          <PDFCard key={item.id} item={item} onRemove={onRemove} />
        )
      ))}
    </div>
  );
}
