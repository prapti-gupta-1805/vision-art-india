import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3
              className="mb-4 text-3xl text-[#F59E0B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vision Art India
            </h3>

            {/* Since Badge */}
            <div className="mb-4 inline-block rounded-2xl border border-[#F59E0B] px-3 py-1 text-xs tracking-widest text-[#F59E0B]">
              Serving Since 2016
            </div>

            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Vision Art India is a trusted name in event and visual solutions,
              delivering high-quality experiences with precision and creativity.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/VISIONARTINDIA.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-neutral-700 text-neutral-400 transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/company/vision-art-india"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-neutral-700 text-neutral-400 transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Spacer Column (for balance / future links) */}
          <div className="hidden md:block" />

          {/* Contact */}
          <div>
            <h4
              className="text-white text-lg mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </h4>

            <ul className="space-y-2 text-neutral-500">
              <li>+91 98734 10004</li>
              <li>+91 98116 53000</li>
              <li>info@visionartindia.com</li>
              <li>Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 text-center">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Vision Art India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
