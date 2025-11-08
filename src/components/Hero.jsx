import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-sky-800 drop-shadow-sm">
            Your Light‑Blue Second Brain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="mt-4 max-w-2xl text-sky-900/80 text-base sm:text-lg">
            Store YouTube links and PDFs in one serene place. Search, filter, and revisit your knowledge effortlessly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
            className="mt-6">
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 border border-sky-100 shadow-md">
              <span className="text-slate-600 text-sm">A calm space for your knowledge</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-transparent" />
    </section>
  );
}
