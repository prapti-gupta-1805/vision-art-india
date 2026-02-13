import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    title: 'Royal Palace Wedding',
    category: 'Weddings',
    location: 'Udaipur, Rajasthan',
    year: '2024',
    description: 'A grand 3-day wedding celebration featuring traditional ceremonies, immersive stage designs, and world-class entertainment.',
    image: 'https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzA0ODU3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Tech Summit 2024',
    category: 'Corporate',
    location: 'Mumbai, Maharashtra',
    year: '2024',
    description: 'A premier technology conference with interactive exhibitions, keynote presentations, and networking galas.',
    image: 'https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZGlubmVyJTIwZXZlbnR8ZW58MXx8fHwxNzcwNDc5NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Music Festival Live',
    category: 'Entertainment',
    location: 'Goa',
    year: '2024',
    description: 'Multi-stage music festival featuring international artists, state-of-the-art sound systems, and spectacular lighting.',
    image: 'https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcwNTY4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Anniversary Gala',
    category: 'Celebrations',
    location: 'Delhi NCR',
    year: '2023',
    description: 'An elegant 25th anniversary celebration with fine dining, live performances, and personalized experiences.',
    image: 'https://images.unsplash.com/photo-1769812343322-f4a6e73c8aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBkZWNvciUyMGZsb3dlcnN8ZW58MXx8fHwxNzcwNTY4NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Product Launch Extravaganza',
    category: 'Corporate',
    location: 'Bangalore',
    year: '2023',
    description: 'High-impact product launch featuring augmented reality experiences, influencer engagement, and media coverage.',
    image: 'https://images.unsplash.com/photo-1764884487727-4757bd493cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwc2hvdyUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3MDU2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Destination Wedding Paradise',
    category: 'Weddings',
    location: 'Jaipur, Rajasthan',
    year: '2023',
    description: 'A luxurious destination wedding with custom mandap designs, cultural performances, and curated guest experiences.',
    image: 'https://images.unsplash.com/photo-1711506119180-e08899c7cdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBsaWdodHN8ZW58MXx8fHwxNzcwNTY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const categories = ['All', 'Weddings', 'Corporate', 'Entertainment', 'Celebrations'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGV2ZW50JTIwdmVudWUlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA1Njg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Projects"
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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A showcase of extraordinary events we've brought to life
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-neutral-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-black overflow-hidden border border-neutral-900 hover:border-amber-600/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="text-amber-600 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.category}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span 
                      className="text-neutral-500 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3 
                    className="text-3xl text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {project.title}
                  </h3>

                  <p 
                    className="text-neutral-500 text-sm mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.location}
                  </p>

                  <p 
                    className="text-neutral-400 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
