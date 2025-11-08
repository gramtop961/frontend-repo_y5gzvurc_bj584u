import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-100 via-sky-50 to-white p-6 md:p-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 md:h-60 md:w-60 rounded-full bg-sky-200/40 blur-3xl" />
        <h2 className="text-2xl md:text-3xl font-bold text-sky-900">Start building your Second Brain</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">Save links and PDFs, keep them organized, and enjoy a calm, light‑blue interface. It’s your knowledge, beautifully arranged.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 shadow">Get Started</button>
          <button className="px-4 py-2 rounded-lg border border-sky-200 bg-white text-sky-700 hover:bg-sky-50">Learn More</button>
        </div>
      </motion.div>
    </section>
  );
}
