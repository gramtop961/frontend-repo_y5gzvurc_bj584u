import { motion } from 'framer-motion';
import { Youtube, FileText, Search, Shield } from 'lucide-react';

const featureItems = [
  {
    icon: Youtube,
    title: 'Save YouTube Links',
    desc: 'Capture videos in a click and come back to them anytime.',
  },
  {
    icon: FileText,
    title: 'Store PDFs',
    desc: 'Keep documents close with a calm, organized view.',
  },
  {
    icon: Search,
    title: 'Fast Search',
    desc: 'Find what you saved in seconds with simple search.',
  },
  {
    icon: Shield,
    title: 'Private by Default',
    desc: 'Your data stays yours. Local-first, with sync options later.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureItems.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="rounded-2xl border border-sky-100 bg-gradient-to-b from-white to-sky-50/60 p-5 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
              <f.icon size={18} />
            </div>
            <h3 className="font-semibold text-slate-800">{f.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
