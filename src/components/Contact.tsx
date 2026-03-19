import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4 text-blood-red">
            <div className="w-2 h-2 rounded-full bg-blood-red" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-serif-display text-zinc-500">Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif-display text-white leading-tight uppercase tracking-tighter">
            Start your <br />
            <span className="text-blood-red italic">legacy</span>
          </h2>
          
          <div className="space-y-12 text-zinc-500 font-serif-display tracking-widest leading-relaxed text-sm max-w-md">
            <p className="text-zinc-400">
              Every masterpiece begins with a conversation. Share your vision with us, and let's create something that transcends time.
            </p>
            <div className="pt-8 space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[8px] text-zinc-700 uppercase tracking-[0.4em]">Studio Location</span>
                <a 
                  href="https://www.google.com/maps?sca_esv=ae95eeef493796b7&biw=1512&bih=857&sxsrf=ANbL-n6aUGZizl73t7S510t7lGxaqy91Rw:1773915634073&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiF0FEIFBBTkNITyBUQVRUT08gYXJ0aXN0MgYQABgWGB4yCBAAGKIEGIkFMggQABiABBiiBDIIEAAYgAQYogRI3BZQ9AxYphZwAngAkAEAmAF_oAGvBaoBAzQuM7gBA8gBAPgBAZgCCKACggXCAgoQABiwAxjWBBhHwgIKECMYgAQYJxiKBcICCxAAGIAEGJECGIoFwgIFEAAY7wXCAgsQABiABBiGAxiKBZgDAIgGAZAGB5IHAzQuNKAHpR2yBwMyLjS4B_wEwgcFMC41LjPIBxOACAA&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KbE4dsuFb8ZHMRbI_fdMWIf7&daddr=Breedstraat+2,+3512+TW+Utrecht,+Netherlands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blood-red transition-all duration-500 text-lg md:text-xl underline underline-offset-8 decoration-white/10 hover:decoration-blood-red"
                >
                  Breedstraat 2, Utrecht
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[8px] text-zinc-700 uppercase tracking-[0.4em]">Direct Line</span>
                <a href="mailto:studio@adpancho.com" className="text-white hover:text-blood-red transition-all duration-500 text-lg md:text-xl underline underline-offset-8 decoration-white/10 hover:decoration-blood-red">
                  studio@adpancho.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 bg-deep-black/50 backdrop-blur-sm z-20"
              >
                <div className="w-16 h-16 rounded-full border border-blood-red flex items-center justify-center">
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bc1111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-serif-display uppercase tracking-widest text-white">Vision Received</h3>
                <p className="text-zinc-500 font-serif-display tracking-widest text-xs uppercase">I will reach out to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-white/5 py-6 text-white font-serif-display tracking-widest text-sm focus:outline-none focus:border-blood-red transition-all duration-500 peer placeholder-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <label className="absolute left-0 top-6 text-[10px] uppercase tracking-widest text-zinc-700 transition-all duration-500 peer-placeholder-shown:text-xs peer-placeholder-shown:top-6 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blood-red pointer-events-none">
                      Full Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/5 py-6 text-white font-serif-display tracking-widest text-sm focus:outline-none focus:border-blood-red transition-all duration-500 peer placeholder-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label className="absolute left-0 top-6 text-[10px] uppercase tracking-widest text-zinc-700 transition-all duration-500 peer-placeholder-shown:text-xs peer-placeholder-shown:top-6 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blood-red pointer-events-none">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    required
                    rows={4}
                    placeholder="Your Vision"
                    className="w-full bg-transparent border-b border-white/5 py-6 text-white font-serif-display tracking-widest text-sm focus:outline-none focus:border-blood-red transition-all duration-500 peer placeholder-transparent resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <label className="absolute left-0 top-6 text-[10px] uppercase tracking-widest text-zinc-700 transition-all duration-500 peer-placeholder-shown:text-xs peer-placeholder-shown:top-6 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-blood-red pointer-events-none">
                    Your Vision
                  </label>
                </div>

                <button 
                  type="submit"
                  className="group relative w-full py-8 bg-blood-red text-white font-bold overflow-hidden transition-all duration-500 btn-hover-expand hover:text-black"
                >
                  <span className="relative z-10 font-serif-display tracking-[0.5em] uppercase text-[10px]">Send Request</span>
                  <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:right-16">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
