import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
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
  { number: '10+', label: 'Years Experience' },
  { number: '25+', label: 'Team Members' },
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
            Creating extraordinary experiences since 2016
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
<section className="bg-neutral-950 py-28 px-6 relative overflow-hidden">
  {/* subtle glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F59E0B]/10 blur-3xl"></div>
  </div>

  <div className="max-w-3xl mx-auto relative z-10 text-center">
    
    <h2 
      className="mb-10 text-5xl text-[#F59E0B] md:text-6xl"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      Our Story
    </h2>

    {/* optional top accent instead of side line */}
    <div className="mx-auto mb-10 h-[2px] w-16 bg-[#F59E0B]"></div>

    {/* highlighted line */}
    <p className="text-2xl text-white font-medium italic mb-8 leading-relaxed max-w-2xl mx-auto">
      Vision Art India was born from a simple belief: that every celebration deserves to be extraordinary.
    </p>

    {/* original text */}
    <div 
      className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <p>
        What started as a small team of passionate event enthusiasts has grown into one of India's most trusted names in event production and entertainment.
      </p>
      
      <p>
        Over the years, we've had the privilege of bringing countless visions to life—from intimate family celebrations to large-scale corporate events and spectacular entertainment productions. Each event has taught us something new, refined our craft, and strengthened our commitment to excellence.
      </p>
      
      <p>
        Today, we stand as a full-service event production company with a reputation built on creativity, reliability, and an unwavering dedication to creating memories that last a lifetime.
      </p>
    </div>

  </div>
</section>

      {/* Stats Section */}
      <section className="major-panel bg-black py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl rounded-[32px] border border-white/6 bg-white/[0.02] px-6 py-8 md:px-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="interactive-surface-subtle rounded-2xl border border-transparent px-4 py-6 text-center"
              >
                <div 
                  className="mb-3 text-5xl text-[#F59E0B] md:text-6xl"
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
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="major-panel bg-neutral-950 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
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
                className="interactive-surface group rounded-2xl border border-neutral-900 bg-black p-8 text-center transition-all duration-300 hover:border-[#F59E0B]/50"
              >
                <value.icon className="mx-auto mb-6 h-12 w-12 text-[#F59E0B] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
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
        </motion.div>
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
            <Link 
              to="/contact"
              className="interactive-button inline-block rounded-full bg-[#F59E0B] px-10 py-4 text-white transition-all duration-300 hover:bg-[#F59E0B]/90"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
