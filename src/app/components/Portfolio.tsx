import { motion } from 'motion/react';
import { useState } from 'react';

const portfolioItems = [
  {
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzA0ODU3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Royal Heritage Wedding',
  },
  {
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZGlubmVyJTIwZXZlbnR8ZW58MXx8fHwxNzcwNDc5NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Corporate Gala Evening',
  },
  {
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcwNTY4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Live Concert Production',
  },
  {
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1652492892191-487055a9b6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBjcm93ZCUyMGRhbmNpbmd8ZW58MXx8fHwxNzcwNTY4NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Grand Celebration',
  },
  {
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1764884487727-4757bd493cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwc2hvdyUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3MDU2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Stage Production',
  },
  {
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1769812343322-f4a6e73c8aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBkZWNvciUyMGZsb3dlcnN8ZW58MXx8fHwxNzcwNTY4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Elegant Decor Setup',
  },
];

const categories = ['All', 'Weddings', 'Corporate', 'Entertainment'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Work
          </h2>
          <p 
            className="text-neutral-400 text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A glimpse into our portfolio of extraordinary events
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-600 border-amber-600 text-white'
                  : 'bg-transparent border-neutral-700 text-neutral-400 hover:border-amber-600 hover:text-amber-600'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer h-80"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p 
                    className="text-amber-600 text-sm mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.category}
                  </p>
                  <h3 
                    className="text-white text-2xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
