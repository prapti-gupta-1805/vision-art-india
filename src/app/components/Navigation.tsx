import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [hasScrolledMobile, setHasScrolledMobile] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Rent & Installation', path: '/equipment-rentals' },
    { name: 'About Us', path: '/about-us' },
  ];

  useEffect(() => {
    const syncMobileNav = () => {
      const isMobileViewport = window.innerWidth < 1280;
      setHasScrolledMobile(isMobileViewport && window.scrollY > 72);

      if (!isMobileViewport) {
        setOpen(false);
      }
    };

    syncMobileNav();
    window.addEventListener('scroll', syncMobileNav, { passive: true });
    window.addEventListener('resize', syncMobileNav);

    return () => {
      window.removeEventListener('scroll', syncMobileNav);
      window.removeEventListener('resize', syncMobileNav);
    };
  }, []);

  const mobileMenuButton = (
    <button
      onClick={() => setOpen(!open)}
      className="interactive-button rounded-full p-2 text-white"
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 xl:fixed xl:bg-black/80 xl:backdrop-blur-md xl:border-b xl:border-neutral-900">
      <div className={`max-w-7xl mx-auto px-6 py-4 transition-opacity duration-300 ${hasScrolledMobile ? 'pointer-events-none opacity-0 xl:pointer-events-auto xl:opacity-100' : 'opacity-100'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink 
            to="/" 
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <img 
              src="/images/logo.webp" 
              alt="Vision Art India" 
              className="h-8 md:h-10 w-auto"
            />
            <span 
              className="text-2xl text-[#F59E0B] md:text-3xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vision Art India
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="ml-auto hidden flex-1 items-center justify-end gap-8 xl:flex">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#F59E0B] ${
                    isActive ? 'text-[#F59E0B]' : ''
                  }`
                }
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="interactive-button rounded-full bg-[#F59E0B] px-6 py-2 text-white transition-all duration-300 hover:bg-[#F59E0B]/90"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            {mobileMenuButton}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {hasScrolledMobile && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.9 }}
            transition={{ duration: 0.24 }}
            className="fixed top-4 right-4 xl:hidden"
          >
            {mobileMenuButton}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden border-neutral-900 bg-black xl:hidden ${
              hasScrolledMobile
                ? 'fixed top-20 right-4 left-4 rounded-3xl border shadow-[0_24px_60px_rgba(0,0,0,0.32)]'
                : 'border-b'
            }`}
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-neutral-300 transition-colors hover:text-[#F59E0B] ${
                      isActive ? 'text-[#F59E0B]' : ''
                    }`
                  }
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="interactive-button block w-full rounded-full bg-[#F59E0B] px-6 py-3 text-center text-white transition-all duration-300 hover:bg-[#F59E0B]/90"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
