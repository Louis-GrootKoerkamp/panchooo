import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-4 text-blood-red">
              <div className="w-2 h-2 rounded-full bg-blood-red" />
              <span className="text-[10px] uppercase tracking-[0.8em] font-serif-display text-zinc-500">The Artist</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-serif-display text-white leading-none uppercase tracking-tighter">
              Alex <span className="text-blood-red italic">Pancho</span>
            </h2>
          </div>
          
          <div className="space-y-12 text-zinc-500 font-serif-display tracking-[0.2em] leading-relaxed text-xs md:text-sm uppercase max-w-3xl mx-auto">
            <p className="transition-colors duration-500 hover:text-zinc-300">
              I believe in the power of purposeful art to solve the challenge of identity. 
              Every line and shade is crafted with intent, creating permanent expressions 
              that connect and drive impact.
            </p>
            <div className="w-12 h-px bg-white/5 mx-auto" />
            <p className="transition-colors duration-500 hover:text-zinc-300">
              Running my studio alone allows me to maintain a direct, personal connection with every client. 
              For me, ink isn’t just a visual; it’s an influential tool that helps you 
              achieve lasting artistic success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
