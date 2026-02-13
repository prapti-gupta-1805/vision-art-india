import { motion } from 'motion/react';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue perfection in every detail, ensuring world-class execution',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for creating memorable experiences drives everything we do',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients, treating every event as a partnership',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Constantly evolving with technology and creative storytelling',
  },
];

const stats = [
  { number: '500+', label: 'Events Delivered' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Team Members' },
  { number: '100%', label: 'Client Satisfaction' },
];

export function AboutUs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1652492892191-487055a9b6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBjcm93ZCUyMGRhbmNpbmd8ZW58MXx8fHwxNzcwNTY4NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Creating extraordinary experiences since 2009
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl md:text-5xl text-amber-600 mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Story
              </h2>
              
              <div 
                className="space-y-6 text-neutral-300 text-lg leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <p>
                  Vision Art India was born from a simple belief: that every celebration deserves 
                  to be extraordinary. What started as a small team of passionate event enthusiasts 
                  has grown into one of India's most trusted names in event production and entertainment.
                </p>
                
                <p>
                  Over the years, we've had the privilege of bringing countless visions to life—from 
                  intimate family celebrations to large-scale corporate events and spectacular entertainment 
                  productions. Each event has taught us something new, refined our craft, and strengthened 
                  our commitment to excellence.
                </p>
                
                <p>
                  Today, we stand as a full-service event production company with a reputation built on 
                  creativity, reliability, and an unwavering dedication to creating memories that last 
                  a lifetime.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1711506119180-e08899c7cdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBsaWdodHN8ZW58MXx8fHwxNzcwNTY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="text-5xl md:text-6xl text-amber-600 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-neutral-400 text-lg"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-5xl md:text-6xl text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Values
            </h2>
            <p 
              className="text-neutral-400 text-lg max-w-3xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The principles that guide every event we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black border border-neutral-900 p-8 text-center hover:border-amber-600/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 
                  className="text-2xl text-white mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-neutral-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              className="text-5xl md:text-6xl text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Team
            </h2>
            <p 
              className="text-neutral-400 text-lg max-w-3xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A diverse team of event planners, designers, technicians, and creative professionals 
              united by a shared passion for excellence. From concept to execution, we work together 
              to ensure every detail is perfect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGV2ZW50JTIwdmVudWUlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA1Njg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
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
              Let's Work Together
            </h2>
            <p 
              className="text-neutral-400 text-lg mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join our family of satisfied clients and let us create something extraordinary for you
            </p>
            <button 
              className="px-10 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
