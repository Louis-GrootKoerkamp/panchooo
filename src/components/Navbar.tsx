import { motion, useScroll, useTransform } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.8)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300"
    >
      <div className="text-white font-serif-display uppercase tracking-[0.4em] text-xs">
        Pancho <span className="text-blood-red italic">Studio</span>
      </div>
      <div className="flex items-center gap-8">
        <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all duration-300">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">Menu</span>
          <div className="flex flex-col gap-1.5">
            <div className="w-8 h-px bg-white transition-all duration-300 group-hover:w-6" />
            <div className="w-5 h-px bg-white self-end transition-all duration-300 group-hover:w-8" />
          </div>
        </button>
      </div>
    </motion.nav>
  );
}
