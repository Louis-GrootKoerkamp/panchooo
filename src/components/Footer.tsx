import { motion } from "motion/react";
import { ArrowUp, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 md:px-12 bg-black border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-serif-display text-white mb-4 uppercase tracking-[0.2em]">Pancho Studio</h2>
            <p className="text-zinc-500 text-[11px] uppercase tracking-[0.5em] font-serif-display">Secure your legacy.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-8"
          >
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-red-600 transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:contact@panchostudio.com" 
              className="text-zinc-500 hover:text-red-600 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.9 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-900/50"
        >
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-serif-display">
            Limited availability. By appointment only.
          </p>
          <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em] font-serif-display">
            2024 © Pancho Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
