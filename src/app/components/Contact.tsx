import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS (replace with your public key)
emailjs.init('YOUR_PUBLIC_KEY');

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          to_email: 'info@visionartindia.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
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
                    +91 98734 10004
                  </p>
                  <p 
                    className="text-neutral-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    +91 98116 53000
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
                    info@visionartindia.com
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
                    Delhi, India
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
                  href="https://www.facebook.com/VISIONARTINDIA.in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:border-amber-600 hover:text-amber-600 text-neutral-400 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/vision-art-india" 
                  target="_blank"
                  rel="noopener noreferrer"
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
            {submitted && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-600 text-green-400 rounded">
                <p style={{ fontFamily: "'Inter', sans-serif" }}>
                  ✓ Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-600 text-red-400 rounded">
                <p style={{ fontFamily: "'Inter', sans-serif" }}>
                  {error}
                </p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-600 text-white py-4 hover:bg-amber-700 disabled:bg-amber-600/50 disabled:cursor-not-allowed transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
