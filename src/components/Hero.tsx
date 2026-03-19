import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1920&auto=format&fit=crop" 
          alt="Tattoo Studio Atmosphere" 
          className="w-full h-full object-cover grayscale brightness-[0.3] contrast-[1.1] scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="max-w-6xl space-y-12 z-10"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 text-blood-red mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-blood-red animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.8em] font-serif-display">Private Laboratory</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-display text-white leading-[0.85] uppercase tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Not Tattoos.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-silver-gradient italic"
            >
              Permanent
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Expression.
            </motion.span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-zinc-500 max-w-2xl mx-auto text-xs md:text-sm uppercase tracking-[0.5em] font-serif-display leading-relaxed"
        >
          Curating artistic legacy and permanent identities in the heart of Utrecht.
        </motion.p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(188,17,17,0.1)_0%,transparent_70%)]" />
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-600">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blood-red to-transparent" />
      </motion.div>
    </section>
  );
}
