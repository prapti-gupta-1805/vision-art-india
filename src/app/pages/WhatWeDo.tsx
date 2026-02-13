import { motion } from 'motion/react';
import { Sparkles, Users, Briefcase, Music, Lightbulb, Camera, Mic, Video } from 'lucide-react';

const services = [
  {
    title: 'Event Planning & Execution',
    description: 'Comprehensive event conceptualization, planning, and flawless execution from start to finish.',
    details: [
      'Concept Development',
      'Budget Management',
      'Vendor Coordination',
      'Timeline Planning',
      'On-site Execution',
    ],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1765277873753-63b431f3938e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHByb2R1Y3Rpb24lMjBiYWNrc3RhZ2UlMjBzZXR1cHxlbnwxfHx8fDE3NzA1Njg2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Weddings & Celebrations',
    description: 'Luxury wedding production that creates unforgettable moments while honoring tradition.',
    details: [
      'Traditional & Modern Ceremonies',
      'Venue Selection & Design',
      'Decor & Floral Arrangements',
      'Entertainment Coordination',
      'Guest Experience Management',
    ],
    icon: Users,
    image: 'https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzA0ODU3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Corporate Events',
    description: 'Professional conferences, product launches, galas, and brand experiences that inspire.',
    details: [
      'Conferences & Seminars',
      'Product Launches',
      'Award Ceremonies',
      'Team Building Events',
      'Brand Activations',
    ],
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZGlubmVyJTIwZXZlbnR8ZW58MXx8fHwxNzcwNDc5NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Entertainment & Stage Production',
    description: 'Live shows, concerts, and performances that captivate and engage audiences.',
    details: [
      'Live Concerts',
      'Cultural Performances',
      'Stage Design & Setup',
      'Artist Management',
      'Show Direction',
    ],
    icon: Music,
    image: 'https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcwNTY4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Visuals, Lighting & Sound',
    description: 'Technical excellence in AV production, lighting design, and immersive audio experiences.',
    details: [
      'Professional Lighting Design',
      'Sound Engineering',
      'LED Screens & Projections',
      'Special Effects',
      'Technical Direction',
    ],
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1764884487727-4757bd493cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwc2hvdyUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3MDU2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Photography & Videography',
    description: 'Professional photography and videography services to capture every precious moment.',
    details: [
      'Event Photography',
      'Cinematic Videography',
      'Drone Coverage',
      'Live Streaming',
      'Post-Production',
    ],
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1711506119180-e08899c7cdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBsaWdodHN8ZW58MXx8fHwxNzcwNTY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function WhatWeDo() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGV2ZW50JTIwdmVudWUlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA1Njg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="What We Do"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Comprehensive event solutions that transform visions into extraordinary experiences
          </motion.p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="w-10 h-10 text-amber-600" />
                  <h2 
                    className="text-4xl md:text-5xl text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h2>
                </div>
                
                <p 
                  className="text-neutral-300 text-lg mb-8 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                      <span 
                        className="text-neutral-400"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to Bring Your Vision to Life?
            </h2>
            <p 
              className="text-neutral-400 text-lg mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Let's discuss how we can make your next event extraordinary
            </p>
            <button 
              className="px-10 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
