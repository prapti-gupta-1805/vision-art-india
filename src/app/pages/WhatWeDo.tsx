import { motion } from 'motion/react';
import { Sparkles, Users, Briefcase, Music, Lightbulb, Camera } from 'lucide-react';
import { Portfolio } from '../components/Portfolio';

const services = [
  {
    title: 'Fashion Week & Runway Shows',
    description: 'Complete runway production including stage design, model coordination, choreography, lighting, and show execution',
    details: [
      'Runway & Stage Design',
      'Model & Designer Coordination',
      'Show Choreography & Rehearsals',
      'Backstage & Line-up Management',
      'Lighting & Visual Direction',
    ],
    icon: Sparkles,
    image: '/images/WhatsApp Image 2026-01-13 at 12.14.33 PM (1).jpeg',
  },
  {
    title: 'Weddings & Celebrations',
    description: 'Bespoke wedding and celebration experiences with curated décor, lighting, entertainment, and seamless event management.',
    details: [
      'Venue Styling & Decor Design',
      'Traditional & Modern Ceremonies',
      'Entertainment Coordination',
      'Guest Experience Planning',
      'End-to-End Celebration Management',
    ],
    icon: Users,
    image: '/images/WhatsApp Image 2026-02-25 at 11.24.00 PM.jpeg',
  },
  {
    title: 'Corporate Events',
    description: 'Strategic corporate event solutions including conferences, award nights, brand showcases, and executive experiences.',
    details: [
      'Conferences & Seminars',
      'Product Launches',
      'Award Ceremonies',
      'Brand Activations',
      'Executive Event Management',
    ],
    icon: Briefcase,
    image: '/images/WhatsApp Image 2026-02-25 at 11.20.28 PM.jpeg',
  },
  {
    title: 'Entertainment & Stage Production',
    description: 'Full-scale stage production for concerts, cultural shows, and live performances with creative and technical direction.',
    details: [
      'Concert & Live Show Production',
      'Stage Design & Fabrication',
      'Artist & Talent Management',
      'Technical Show Direction',
      'Live Performance Execution',
    ],
    icon: Music,
    image: '/images/image.png',
  },
  {
    title: 'Visuals, Lighting & Sound',
    description: 'Advanced AV solutions, architectural lighting, LED visuals, and sound engineering that transform event environments.',
    details: [
      'Architectural Lighting Design',
      'LED Walls & Projection Mapping',
      'Sound Engineering',
      'Special Effects Integration',
      'Technical Production Management',
    ],
    icon: Lightbulb,
    image: '/images/WhatsApp Image 2026-01-13 at 12.19.47 PM.jpeg',
  },
  {
    title: 'Flagship Events & Product Launches',
    description: 'High-impact launches and flagship events designed to showcase products, engage media, and elevate brand presence.',
    details: [
      'Launch Event Concept & Design',
      'Brand Experience Environments',
      'Media & Guest Engagement',
      'Immersive Installations',
      'End-to-End Production Delivery',
    ],
    icon: Camera,
    image: '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM (1).jpeg',
  },
];

export function WhatWeDo() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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

      {/* Portfolio Slideshow */}
      <Portfolio />

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
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
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
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="w-10 h-10 text-amber-600" />
                  <h2 
                    className="text-4xl md:text-5xl text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                      <span className="text-neutral-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
