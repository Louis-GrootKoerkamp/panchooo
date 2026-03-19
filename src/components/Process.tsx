import { motion } from 'motion/react';

const steps = [
  { id: "01", title: "Concept Analysis", desc: "User submits vision" },
  { id: "02", title: "Anatomical Mapping", desc: "Artist designs for specific body flow" },
  { id: "03", title: "Execution", desc: "The session" },
  { id: "04", title: "Maintenance", desc: "Post-deployment care" }
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 bg-deep-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 space-y-6">
          <div className="flex items-center gap-4 text-blood-red">
            <div className="w-2 h-2 rounded-full bg-blood-red" />
            <span className="text-[10px] uppercase tracking-[0.8em] font-serif-display text-zinc-500">The Protocol</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif-display text-silver-gradient uppercase tracking-tighter leading-none">The Onboarding</h2>
          <p className="text-zinc-700 uppercase tracking-[0.6em] text-[8px] font-serif-display">From vision to permanent legacy.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-[31px] left-0 w-full h-px bg-white/5 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="w-16 h-16 rounded-full bg-deep-black border border-white/10 flex items-center justify-center mb-10 group-hover:border-blood-red transition-all duration-700 relative">
                  <div className="absolute inset-0 rounded-full bg-blood-red/0 group-hover:bg-blood-red/5 transition-all duration-700" />
                  <span className="text-lg font-serif-display text-zinc-700 group-hover:text-blood-red transition-colors duration-500 relative z-10">{step.id}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-serif-display text-white uppercase tracking-widest group-hover:text-blood-red transition-colors duration-500">{step.title}</h3>
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] font-serif-display uppercase leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
