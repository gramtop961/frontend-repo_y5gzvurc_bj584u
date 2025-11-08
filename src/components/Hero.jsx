import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-sky-800 drop-shadow-sm">
            Your Light‑Blue Second Brain
          </h1>
          <p className="mt-4 max-w-2xl text-sky-900/80 text-base sm:text-lg">
            Save YouTube links and PDFs in one serene space. Search, filter, and return to your knowledge when you need it.
          </p>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 border border-sky-100 shadow-sm">
              <span className="text-slate-600 text-sm">Tip: add a YouTube URL or drop a PDF below</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-transparent" />
    </section>
  );
}
