import { motion } from 'motion/react';

const reviews = [
  {
    name: "Alexei Volkov",
    text: "The level of detail is beyond anything I've seen. Truly a master of the craft.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    text: "A seamless blend of art and anatomy. The studio atmosphere is incredibly professional.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    text: "Pancho's vision is unique. He doesn't just tattoo; he creates a legacy on your skin.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    text: "The most sophisticated studio experience. Every line is intentional.",
    rating: 5
  },
  {
    name: "David Chen",
    text: "Exceptional realism. The healing process was perfect and the result is breathtaking.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-16 bg-black/50 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex items-center gap-4 text-blood-red">
        <div className="w-2 h-2 rounded-full bg-blood-red" />
        <span className="text-[10px] uppercase tracking-[0.6em] font-serif-display">Testimonials</span>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap py-12"
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...reviews, ...reviews, ...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="inline-block w-[450px] mx-6 bg-zinc-900/20 p-10 border border-white/5 rounded-sm transition-all duration-500 hover:bg-zinc-900/40 hover:border-blood-red/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blood-red" />
                ))}
              </div>
              <p className="text-zinc-400 font-serif-display text-sm italic leading-relaxed whitespace-normal mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-4 h-px bg-blood-red" />
                <span className="text-white text-[10px] uppercase tracking-widest font-serif-display">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
