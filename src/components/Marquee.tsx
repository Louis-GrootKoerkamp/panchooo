export default function Marquee() {
  const items = [
    "/ PERMANENT EXPRESSION",
    "/ BEYOND TATTOOS",
    "/ ARTISTIC LEGACY",
    "/ CURATED IDENTITIES",
    "/ PRIVATE LABORATORY",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#5e0f13] py-4 border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {items.map((item, idx) => (
              <span 
                key={idx} 
                className="text-white font-serif-display text-xs md:text-sm tracking-[0.4em] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
