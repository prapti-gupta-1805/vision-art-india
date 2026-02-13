export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 
              className="text-3xl text-amber-600 mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vision Art India
            </h3>
            <p 
              className="text-neutral-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Crafting experiences, creating memories
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-white text-lg mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-neutral-500 hover:text-amber-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-neutral-500 hover:text-amber-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-neutral-500 hover:text-amber-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-neutral-500 hover:text-amber-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-white text-lg mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-neutral-500">
              <li style={{ fontFamily: "'Inter', sans-serif" }}>
                +91 98765 43210
              </li>
              <li style={{ fontFamily: "'Inter', sans-serif" }}>
                hello@visionartindia.com
              </li>
              <li style={{ fontFamily: "'Inter', sans-serif" }}>
                Mumbai, Maharashtra
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 text-center">
          <p 
            className="text-neutral-600 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Vision Art India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
