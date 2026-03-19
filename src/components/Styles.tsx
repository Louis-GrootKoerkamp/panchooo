import { motion } from 'motion/react';
import { Camera, Zap, Ghost } from 'lucide-react';

const styles = [
  {
    title: "Realism",
    description: "Photographic precision, immortalized.",
    icon: <Camera className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Abstract",
    description: "Defining the space between thought and form.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Surrealism",
    description: "Dreams etched into reality.",
    icon: <Ghost className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Styles() {
  return (
    <section className="py-32 px-6 md:px-12 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 space-y-6">
          <div className="flex items-center gap-4 text-blood-red">
            <div className="w-2 h-2 rounded-full bg-blood-red" />
            <span className="text-[10px] uppercase tracking-[0.8em] font-serif-display text-zinc-500">The Disciplines</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif-display text-silver-gradient uppercase tracking-tighter leading-none text-left">The Mastery</h2>
          <p className="text-zinc-700 uppercase tracking-[0.6em] text-[8px] font-serif-display">Mastery across the spectrum of permanent art.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {styles.map((style, index) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[600px] overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100">
                <img 
                  src={style.image} 
                  alt={style.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="relative z-10 h-full p-12 flex flex-col justify-end">
                <div className="text-blood-red mb-8 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                  {style.icon}
                </div>
                <h3 className="text-3xl font-serif-display text-white mb-4 uppercase tracking-widest group-hover:text-blood-red transition-colors duration-500">{style.title}</h3>
                <p className="text-zinc-500 text-[10px] leading-relaxed max-w-[220px] font-serif-display uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-zinc-300">
                  {style.description}
                </p>
                
                <div className="mt-10 w-0 group-hover:w-full h-px bg-blood-red transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
