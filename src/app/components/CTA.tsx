import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGV2ZW50JTIwdmVudWUlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA1Njg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Event Venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-5xl md:text-7xl text-white mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let's Create Something Unforgettable
          </h2>
          
          <p 
            className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Every great event begins with a conversation. Share your vision with us, and let's bring it to life together.
          </p>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300 text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Plan Your Event
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}
