import { useRef, useState } from 'react';
import { Plus, Youtube, FileText, Filter } from 'lucide-react';

export default function AddItemForm({ onAddYouTube, onAddPDF, typeFilter, setTypeFilter }) {
  const [ytUrl, setYtUrl] = useState('');
  const fileRef = useRef(null);

  const submitYt = (e) => {
    e.preventDefault();
    if (!ytUrl.trim()) return;
    onAddYouTube(ytUrl.trim());
    setYtUrl('');
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/pdf') {
      onAddPDF(file);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={submitYt} className="w-full flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sky-500">
            <Youtube size={18} />
          </div>
          <input
            type="url"
            value={ytUrl}
            onChange={(e) => setYtUrl(e.target.value)}
            placeholder="Paste a YouTube link and press Enter"
            className="w-full pl-9 pr-3 py-3 rounded-lg border border-sky-100 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-800 transition-colors">
          <Plus size={18} /> Add Link
        </button>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-slate-500" />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-3 rounded-lg border border-sky-100 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-300">
            <option value="all">All</option>
            <option value="youtube">YouTube</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
      </form>

      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="rounded-xl border-2 border-dashed border-sky-200 bg-sky-50/60 px-4 py-6 text-center">
        <div className="flex items-center justify-center gap-2 text-sky-700">
          <FileText size={18} />
          <span className="font-medium">Drop a PDF here</span>
        </div>
        <p className="text-xs text-slate-500 mt-1">or</p>
        <button
          onClick={() => fileRef.current?.click()}
          className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border border-sky-100 text-slate-700 hover:bg-sky-50">
          <FileText size={16} /> Choose PDF
        </button>
        <input ref={fileRef} type="file" accept="application/pdf" onChange={(e) => onAddPDF(e.target.files?.[0])} className="hidden" />
      </div>
    </div>
  );
}
