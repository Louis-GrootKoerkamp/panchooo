import { cn } from "../../lib/utils";

export default function ImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section className="w-full flex flex-col items-center justify-start py-16 bg-deep-black min-h-[80vh]">
      <div className="max-w-4xl text-center px-4 mb-16">
        <h1 className="text-4xl md:text-7xl font-serif-display text-silver-gradient uppercase tracking-widest leading-tight">
          The Archive
        </h1>
        <p className="text-zinc-500 mt-6 uppercase tracking-[0.4em] text-xs font-serif-display max-w-2xl mx-auto">
          A visual collection of our most recent works – each piece crafted
          with intention, emotion, and style.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 h-auto md:h-[600px] w-full max-w-7xl mt-10 px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={cn(
              "relative group flex-grow transition-all w-full md:w-32 rounded-sm overflow-hidden h-[300px] md:h-full duration-700 hover:md:w-[600px] border border-white/5 cursor-pointer",
              "grayscale hover:grayscale-0"
            )}
          >
            <img
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src={src}
              alt={`archive-piece-${idx}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-white font-serif-display text-xs tracking-[0.3em] uppercase">Piece 0{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center space-y-8">
        <a 
          href="https://www.instagram.com/adpancho_tattoostudio/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all font-serif-display text-[10px] uppercase tracking-[0.4em]"
        >
          Explore Full Archive on Instagram
        </a>
        <p className="text-zinc-600 font-serif-display text-[10px] uppercase tracking-[0.5em]">
          Not tattoos. Permanent expression.
        </p>
      </div>
    </section>
  );
}
