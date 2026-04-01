import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/WhatsApp Image 2026-01-13 at 12.14.33 PM (1).webp" 
          alt="Luxury Event" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Crafting Experiences.<br />Creating Memories.
          </h1>
          
          <p 
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Where Vision Meets Celebration
          </p>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore Our Work
          </motion.button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
