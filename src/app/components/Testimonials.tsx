import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Vision Art India transformed our wedding into a fairytale. Every detail was perfect, and the execution was flawless.",
    author: "Priya & Rohan Mehta",
    event: "Destination Wedding, Udaipur",
  },
  {
    quote: "The professionalism and creativity they brought to our corporate event exceeded all expectations. Truly world-class.",
    author: "Rajesh Kumar",
    event: "Annual Conference, Mumbai",
  },
  {
    quote: "They don't just plan events – they craft experiences that stay with you forever. Our celebration was magical.",
    author: "Ananya Singh",
    event: "25th Anniversary Celebration",
  },
];

export function Testimonials() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32 px-6">
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
            className="text-5xl md:text-6xl text-amber-600 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Client Stories
          </h2>
          <p 
            className="text-neutral-400 text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Trusted by those who celebrate life's most important moments
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-neutral-900 p-8 relative border border-neutral-800 hover:border-amber-600/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-amber-600 mb-6 opacity-50" />
              
              <p 
                className="text-neutral-300 text-lg mb-6 leading-relaxed italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-neutral-800 pt-4">
                <p 
                  className="text-white mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {testimonial.author}
                </p>
                <p 
                  className="text-neutral-500 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
