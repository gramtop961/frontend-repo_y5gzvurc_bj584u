import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-50 to-white text-slate-800">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-6xl px-4 pb-24 -mt-24 relative z-10">
        <div className="backdrop-blur-xl bg-white/70 border border-sky-100 rounded-2xl shadow-lg p-6 md:p-10">
          <Features />
          <CTA />
        </div>
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        Made with a serene light‑blue vibe
      </footer>
    </div>
  );
}

export default App;
