import { motion } from 'motion/react';
import { Building2, Lightbulb, Monitor, Volume2, Shield, Wrench } from 'lucide-react';

const installationServices = [
  {
    title: 'Permanent AV Installations',
    description: 'Complete audio-visual system design and installation for venues, auditoriums, and conference centers.',
    icon: Monitor,
    features: [
      'Sound system design and installation',
      'Video projection and display systems',
      'Control room setup',
      'Acoustic treatment',
      'System integration',
    ],
    image: 'https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZGlubmVyJTIwZXZlbnR8ZW58MXx8fHwxNzcwNDc5NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Architectural Lighting',
    description: 'Professional lighting installation for buildings, venues, and landscapes.',
    icon: Lightbulb,
    features: [
      'LED lighting systems',
      'DMX control systems',
      'Architectural accent lighting',
      'Energy-efficient solutions',
      'Smart lighting integration',
    ],
    image: 'https://images.unsplash.com/photo-1764884487727-4757bd493cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwc2hvdyUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3MDU2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Venue Audio Solutions',
    description: 'Permanent sound system installations for clubs, restaurants, and entertainment venues.',
    icon: Volume2,
    features: [
      'Speaker system installation',
      'Mixer and amplifier setup',
      'Zone audio control',
      'Background music systems',
      'Live performance setups',
    ],
    image: 'https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcwNTY4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Corporate Installations',
    description: 'Boardroom, meeting room, and office AV system installations.',
    icon: Building2,
    features: [
      'Video conferencing systems',
      'Presentation equipment',
      'Digital signage',
      'Conference room audio',
      'Wireless presentation',
    ],
    image: 'https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGV2ZW50JTIwdmVudWUlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA1Njg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We meet with you to understand your requirements, venue, and objectives.',
  },
  {
    number: '02',
    title: 'Site Survey',
    description: 'Detailed assessment of your space, acoustics, and technical requirements.',
  },
  {
    number: '03',
    title: 'Design & Planning',
    description: 'Custom system design with equipment specifications and layout plans.',
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Professional installation by certified technicians with minimal disruption.',
  },
  {
    number: '05',
    title: 'Testing & Training',
    description: 'Comprehensive testing and user training on all installed systems.',
  },
  {
    number: '06',
    title: 'Support & Maintenance',
    description: 'Ongoing technical support and maintenance plans available.',
  },
];

export function Install() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1765277873753-63b431f3938e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHByb2R1Y3Rpb24lMjBiYWNrc3RhZ2UlMjBzZXR1cHxlbnwxfHx8fDE3NzA1Njg2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Installation Services"
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
            Installation Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Permanent AV, lighting, and sound installations for venues and businesses
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p 
              className="text-neutral-300 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Transform your venue with professional-grade permanent installations. Our team of 
              certified technicians designs and installs custom audio-visual, lighting, and sound 
              systems tailored to your space and requirements.
            </p>
            <p 
              className="text-neutral-300 text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              From corporate boardrooms to entertainment venues, we deliver turnkey solutions 
              with ongoing support and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {installationServices.map((service, index) => (
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
                <div className="relative h-[400px] overflow-hidden">
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
                    className="text-4xl text-white"
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
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full" />
                      <span 
                        className="text-neutral-400"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Installation Process */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
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
              Our Process
            </h2>
            <p 
              className="text-neutral-400 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A streamlined approach to professional installations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 p-8"
              >
                <div 
                  className="text-6xl text-amber-600/20 mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {step.number}
                </div>
                <h3 
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-neutral-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-950 py-24 px-6">
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
              Ready to Upgrade Your Venue?
            </h2>
            <p 
              className="text-neutral-400 text-lg mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Schedule a consultation to discuss your installation requirements
            </p>
            <button 
              className="px-10 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
