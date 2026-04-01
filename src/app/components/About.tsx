import { motion } from 'motion/react';

export function About() {
  return (
    <section className="major-panel bg-neutral-950 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-6 text-4xl text-[#F59E0B] md:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vision Art India
            </h2>
            
            <div 
              className="space-y-6 text-neutral-300 text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p>
              With over 10 years of experience in the audio-visual industry, Vision Art India is a trusted partner for event professionals looking for reliability, innovation, and flawless execution.
              </p>
              <p>
              Our team is passionate about creating memorable experiences through technology, and we pride ourselves on being a one-stop solution for all your event technical needs.
              </p>
              <p>
              We are committed to investing in the best AV equipment, tools, and training so we can continue to offer the highest standards of service.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="interactive-surface group relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGV2ZW50JTIwdmVudWUlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA1Njg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Event Production"
              className="h-full w-full rounded-2xl object-cover shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
