import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl md:text-6xl text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Get In Touch
            </h2>
            
            <p 
              className="text-neutral-400 text-lg mb-12"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ready to start planning your exceptional event? Reach out to us and let's discuss your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p 
                    className="text-white text-lg mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Phone
                  </p>
                  <p 
                    className="text-neutral-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    +91 98765 43210
                  </p>
                  <p 
                    className="text-neutral-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    +91 98765 43211
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p 
                    className="text-white text-lg mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Email
                  </p>
                  <p 
                    className="text-neutral-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    hello@visionartindia.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p 
                    className="text-white text-lg mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Office
                  </p>
                  <p 
                    className="text-neutral-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Mumbai, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <p 
                className="text-white text-lg mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Follow Us
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:border-amber-600 hover:text-amber-600 text-neutral-400 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:border-amber-600 hover:text-amber-600 text-neutral-400 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:border-amber-600 hover:text-amber-600 text-neutral-400 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-950 p-8 md:p-10 border border-neutral-800"
          >
            <form className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-black border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-white mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-black border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 hover:bg-amber-700 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
