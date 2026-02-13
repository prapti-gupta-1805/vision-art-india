import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Projects', path: '/projects' },
    { name: 'Equipment Rentals', path: '/equipment-rentals' },
    { name: 'Install', path: '/products' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink 
            to="/" 
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <span 
              className="text-2xl md:text-3xl text-amber-600"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vision Art India
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-neutral-300 hover:text-amber-600 transition-colors relative ${
                    isActive ? 'text-amber-600' : ''
                  }`
                }
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="px-6 py-2 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-b border-neutral-900 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-neutral-300 hover:text-amber-600 transition-colors py-2 ${
                      isActive ? 'text-amber-600' : ''
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
                className="block w-full px-6 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300 text-center"
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
