import { motion } from 'motion/react';
import { Sparkles, Users, Briefcase, Music, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Fashion Week & Runway Shows',
    description: 'End-to-end conceptualization and flawless delivery of your vision',
    image: '/src/assets/WhatsApp Image 2026-01-13 at 12.14.33 PM (1).jpeg',
    icon: Sparkles,
  },
  {
    title: 'Weddings & Celebrations',
    description: 'Luxury wedding production that honors tradition while embracing elegance',
    image: 'https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzA0ODU3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Users,
  },
  {
    title: 'Corporate Events',
    description: 'Professional conferences, galas, and brand experiences that inspire',
    image: 'https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZGlubmVyJTIwZXZlbnR8ZW58MXx8fHwxNzcwNDc5NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Briefcase,
  },
  {
    title: 'Entertainment & Stage Production',
    description: 'Live shows, performances, and productions that captivate audiences',
    image: 'https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcwNTY4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Music,
  },
  {
    title: 'Visuals, Lighting & Sound',
    description: 'Technical excellence in AV, lighting design, and immersive experiences',
    image: 'https://images.unsplash.com/photo-1764884487727-4757bd493cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwc2hvdyUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3MDU2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Lightbulb,
  },
];

export function Services() {
  return (
    <section className="bg-neutral-900 py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Services
          </h2>
          <p 
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Comprehensive event solutions tailored to your unique vision
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-neutral-950 hover:transform hover:scale-[1.02] transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
              </div>

              {/* Service Content */}
              <div className="p-6 relative">
                <div className="flex items-start gap-4 mb-4">
                  <service.icon className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <h3 
                    className="text-2xl text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p 
                  className="text-neutral-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
