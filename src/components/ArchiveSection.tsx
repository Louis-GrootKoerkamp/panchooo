import { motion } from 'motion/react';

const projects = [
  {
    title: "TitanX",
    category: "Realism, US",
    description: "A deep dive into hyper-realistic portraiture, capturing the essence of human emotion through intricate needlework and high-contrast shading.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop",
    number: "54"
  },
  {
    title: "Metapic",
    category: "Surrealism, SE",
    description: "Exploring the boundaries between dream and reality, this series features distorted perspectives and vibrant color palettes that challenge the viewer's perception.",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop",
    number: "49"
  },
  {
    title: "Alpha Ledger",
    category: "Geometric, UK",
    description: "Precision-engineered geometric patterns that harmonize with the human anatomy, creating a seamless flow between art and body.",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop",
    number: "16"
  }
];

export default function ArchiveSection() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-48">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-blood-red">
          <div className="w-2 h-2 rounded-full bg-blood-red" />
          <span className="text-[10px] uppercase tracking-[0.6em] font-serif-display">Featured Works</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif-display text-white leading-tight uppercase max-w-4xl">
          We create solutions but most importantly we identify <span className="text-blood-red italic">problems</span>.
        </h2>
      </div>

      <div className="space-y-48">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Project Info */}
            <div className="flex-1 space-y-12">
              <header className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-serif-display">{project.category}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-serif-display text-white uppercase group cursor-pointer">
                  <span className="relative inline-block">
                    {project.title}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blood-red transition-all duration-500 group-hover:w-full" />
                  </span>
                </h3>
                <p className="text-zinc-400 font-serif-display tracking-widest leading-relaxed text-sm max-w-lg">
                  {project.description}
                </p>
              </header>

              <div className="flex justify-between items-end">
                <div className="flex gap-4">
                  {["Realism", "Color", "Ink"].map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-serif-display">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-6xl md:text-8xl font-serif-display text-zinc-900 leading-none">{project.number}</span>
              </div>
            </div>

            {/* Project Image */}
            <div className="flex-1 w-full group overflow-hidden rounded-sm border border-white/5">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src={project.image} 
                alt={project.title} 
                className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-24">
        <button className="group relative px-12 py-6 bg-white text-black font-bold overflow-hidden transition-all duration-500 btn-hover-expand hover:text-white">
          <span className="relative z-10 font-serif-display tracking-[0.3em] uppercase text-xs">View Full Archive</span>
        </button>
      </div>
    </section>
  );
}
