import { motion } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// List of all images from the public/images folder (excluding logo and videos)
const portfolioImagesUnshuffled = [
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM (2).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.14.33 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (3).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM (2).webp',
  '/images/WhatsApp Image 2026-02-25 at 11.24.00 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.15.29 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.19.48 PM (1).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM (1).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (1).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.14.32 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM (3).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.19.47 PM.webp',
  '/images/WhatsApp Image 2026-02-25 at 11.23.59 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM (3).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (4).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.14.33 PM (1).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.15.29 PM (2).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.19.47 PM (1).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.19.48 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.15.29 PM (1).webp',
  '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM (2).webp',
  '/images/WhatsApp Image 2026-02-25 at 11.24.01 PM.webp',
  '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM.webp',
  '/images/WhatsApp Image 2026-02-25 at 11.20.28 PM.webp',
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
    <section className="major-panel bg-black py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
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
          className="interactive-surface group relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10"
        >
          {/* Image Container */}
          <div className="relative w-full aspect-video">
            {portfolioImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={goToPrevious}
            className="interactive-button absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#F59E0B] p-3 text-white opacity-0 transition-all duration-300 hover:bg-[#F59E0B]/90 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={goToNext}
            className="interactive-button absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#F59E0B] p-3 text-white opacity-0 transition-all duration-300 hover:bg-[#F59E0B]/90 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 z-20 rounded-xl bg-black/60 px-4 py-2 text-sm font-medium text-white">
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
                className={`interactive-button h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#F59E0B] w-8'
                    : 'bg-white/50 w-2 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
