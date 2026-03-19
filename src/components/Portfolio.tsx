import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["All", "Blackwork", "Realism", "Surrealism"];

const items = [
  { id: 1, category: "Blackwork", image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80&w=800" },
  { id: 2, category: "Realism", image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "Surrealism", image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Blackwork", image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "Realism", image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Surrealism", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? items : items.filter(i => i.category === filter);

  return (
    <section className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-serif-display text-silver-gradient uppercase tracking-tighter leading-none">The Archive</h2>
            <p className="text-zinc-700 uppercase tracking-[0.6em] text-[8px] font-serif-display">A digital gallery of the elite.</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-[8px] uppercase tracking-[0.4em] transition-all border font-serif-display ${
                  filter === cat ? 'bg-white text-black border-white' : 'text-zinc-600 border-white/5 hover:border-white/20 hover:text-zinc-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[3/4] overflow-hidden bg-zinc-900/20 border border-white/5"
              >
                <img 
                  src={item.image} 
                  alt={`Portfolio ${item.id}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-blood-red block">Project {item.id}</span>
                    <span className="text-2xl font-serif-display text-white uppercase tracking-widest">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
