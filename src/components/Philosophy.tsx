import { motion } from 'motion/react';

const principles = [
  {
    number: "01",
    title: "Permanent Expression",
    description: "I don't just apply ink; I curate a lifelong artistic legacy that resonates with your personal narrative."
  },
  {
    number: "02",
    title: "Artistic Integrity",
    description: "Every piece is a unique dialogue between the artist and the soul, ensuring authenticity in every stroke."
  },
  {
    number: "03",
    title: "Private Laboratory",
    description: "A sanctuary for creativity where boundaries are pushed and new artistic dimensions are explored."
  },
  {
    number: "04",
    title: "Technical Mastery",
    description: "Combining traditional techniques with modern innovation to achieve unparalleled precision and detail."
  }
];

export default function Philosophy() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-blood-red">
            <div className="w-2 h-2 rounded-full bg-blood-red" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-serif-display">My Philosophy</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/5">
        {principles.map((principle, idx) => (
          <motion.div 
            key={idx}
            whileHover="hover"
            className="relative p-10 md:p-14 space-y-12 border-b border-r border-white/5 group overflow-hidden cursor-pointer"
          >
            {/* Hover Background - Fills the entire block */}
            <motion.div 
              variants={{
                hover: { scaleY: 1 }
              }}
              initial={{ scaleY: 0 }}
              style={{ originY: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-blood-red/5 z-0"
            />

            <div className="relative z-10 space-y-12 transition-all duration-500">
              <span className="text-5xl font-serif-display text-zinc-900 group-hover:text-blood-red/20 transition-colors duration-500">
                {principle.number}
              </span>
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-serif-display uppercase tracking-widest leading-tight text-white group-hover:text-blood-red transition-colors duration-500">
                  {principle.title}
                </h3>
                <p className="text-zinc-500 font-serif-display tracking-[0.2em] leading-relaxed text-[10px] uppercase transition-colors duration-500 group-hover:text-zinc-400">
                  {principle.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
