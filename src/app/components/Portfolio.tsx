import { motion } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// List of all images from the public/images folder (excluding logo and videos)
const portfolioImagesUnshuffled = [
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM (2).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.14.33 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (3).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM (2).jpeg',
  '/images/WhatsApp Image 2026-02-25 at 11.24.00 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.15.29 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.19.48 PM (1).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM (1).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (1).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.14.32 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM (3).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.19.47 PM.jpeg',
  '/images/WhatsApp Image 2026-02-25 at 11.23.59 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM (3).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (4).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.14.33 PM (1).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.19.48 PM (2).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.15.29 PM (2).jpeg',
  '/images/WhatsApp Image 2026-02-25 at 11.24.27 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.19.47 PM (1).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.19.48 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.15.29 PM (1).jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (2).jpeg',
  '/images/WhatsApp Image 2026-02-25 at 11.24.01 PM.jpeg',
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM.jpeg',
  '/images/WhatsApp Image 2026-02-25 at 11.20.28 PM.jpeg',
];

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function Portfolio() {
  const portfolioImages = useMemo(() => shuffleArray(portfolioImagesUnshuffled), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play slideshow
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000); // Resume auto-play after 8 seconds
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000); // Resume auto-play after 8 seconds
  };

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

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden rounded-lg group"
        >
          {/* Image Container */}
          <div className="relative w-full aspect-video md:aspect-auto md:h-96 lg:h-[500px]">
            {portfolioImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 z-20 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
            {currentIndex + 1} / {portfolioImages.length}
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 flex-wrap justify-center max-w-xs">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 8000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-600 w-8'
                    : 'bg-white/50 w-2 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
