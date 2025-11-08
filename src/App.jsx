import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AddItemForm from './components/AddItemForm.jsx';
import Library from './components/Library.jsx';

function App() {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('secondbrain_items');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem('secondbrain_items', JSON.stringify(items));
    } catch {}
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((it) => (typeFilter === 'all' ? true : it.type === typeFilter))
      .filter((it) => (q ? (it.title?.toLowerCase().includes(q) || it.url?.toLowerCase().includes(q)) : true))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [items, query, typeFilter]);

  const addYouTube = (url) => {
    const idMatch = url.match(/(?:v=|youtu.be\/)([\w-]{11})/);
    const videoId = idMatch ? idMatch[1] : null;
    const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : undefined;
    const titleFromUrl = url.replace(/^https?:\/\//, '');
    const item = {
      id: crypto.randomUUID(),
      type: 'youtube',
      title: `YouTube • ${titleFromUrl}`,
      url,
      thumbnail,
      createdAt: new Date().toISOString(),
    };
    setItems((prev) => [item, ...prev]);
  };

  const addPDF = async (file) => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    const item = {
      id: crypto.randomUUID(),
      type: 'pdf',
      title: file.name,
      url: objectUrl,
      createdAt: new Date().toISOString(),
      size: file.size,
    };
    setItems((prev) => [item, ...prev]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-50 to-white text-slate-800">
      <Navbar query={query} onQueryChange={setQuery} />
      <Hero />
      <main className="mx-auto max-w-6xl px-4 pb-24 -mt-24 relative z-10">
        <div className="backdrop-blur-xl bg-white/70 border border-sky-100 rounded-2xl shadow-lg p-6 md:p-8">
          <AddItemForm onAddYouTube={addYouTube} onAddPDF={addPDF} typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
          <Library items={filtered} onRemove={removeItem} />
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">
        Built as your serene light‑blue Second Brain
      </footer>
    </div>
  );
}

export default App;
