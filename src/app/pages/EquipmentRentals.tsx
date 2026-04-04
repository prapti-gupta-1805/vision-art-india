import { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { BadgeCheck, ChevronRight, Headphones, Lightbulb, MonitorSpeaker, SlidersHorizontal, Wrench } from 'lucide-react';

type RentalProduct = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  shortDescription: string;
  summary: string;
  idealFor: string;
  priceLabel: string;
  setupLabel: string;
  ratingLabel: string;
  features: string[];
  support: string[];
};

const rentalProducts: RentalProduct[] = [
  {
    slug: 'led-video-wall-package',
    name: 'LED Video Wall Package',
    brand: 'Vision Art Pro',
    category: 'Display Systems',
    image: '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM.webp',
    shortDescription: 'Modular LED wall setup for stage backdrops, launches, and conference screens.',
    summary:
      'A clean, high-brightness display package designed for indoor brand events, weddings, live performances, and stage presentations.',
    idealFor: 'Product launches, wedding stages, award nights, corporate conferences',
    priceLabel: 'Custom quote by event size',
    setupLabel: 'Installation available in 24-48 hours',
    ratingLabel: 'Popular for launch backdrops',
    features: ['Modular cabinet layout', 'Processor and signal routing included', 'Indoor event brightness tuning'],
    support: ['Delivery and pickup coordination', 'On-site wall assembly', 'Operator support available'],
  },
  {
    slug: 'concert-sound-rig',
    name: 'Concert Sound Rig',
    brand: 'Vision Art Audio',
    category: 'Audio',
    image: '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM.webp',
    shortDescription: 'Full-range PA package with console, microphones, monitors, and tuning support.',
    summary:
      'Built for clear speech and high-energy music playback, this package works well for medium to large-format events that need reliable front-of-house coverage.',
    idealFor: 'Live shows, sangeet nights, corporate events, public gatherings',
    priceLabel: 'Rental pricing on request',
    setupLabel: 'Soundcheck and tuning included',
    ratingLabel: 'Booked often for live performances',
    features: ['Line-array style coverage options', 'Wireless and wired microphone support', 'FOH console and monitor sends'],
    support: ['System setup and soundcheck', 'Live engineer on request', 'Backup signal accessories'],
  },
  {
    slug: 'moving-head-lighting-kit',
    name: 'Moving Head Lighting Kit',
    brand: 'Vision Art Lights',
    category: 'Lighting',
    image: '/images/WhatsApp Image 2026-01-13 at 12.19.48 PM.webp',
    shortDescription: 'Stage lighting package with moving heads, pars, haze, and DMX control.',
    summary:
      'A flexible lighting bundle that adds color, movement, and depth to performances and ceremonial moments without overcomplicating setup.',
    idealFor: 'Fashion shows, receptions, concerts, cultural programs',
    priceLabel: 'Flexible by fixture count',
    setupLabel: 'Programming support available',
    ratingLabel: 'Great for dynamic stage looks',
    features: ['Beam and wash combinations', 'Scene-based programming', 'Truss-ready mounting support'],
    support: ['Fixture patching and aiming', 'Programming assistance', 'Power and cable planning'],
  },
  {
    slug: 'stage-and-truss-setup',
    name: 'Stage and Truss Setup',
    brand: 'Vision Art Structures',
    category: 'Installation',
    image: '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM.webp',
    shortDescription: 'Platform, riser, and truss package for stable event builds and scenic installs.',
    summary:
      'Designed for practical event execution, this package covers the structural side of the show with neat stage decks, truss spans, and safe installation flow.',
    idealFor: 'Runway shows, press meets, ceremonies, exhibition builds',
    priceLabel: 'Site-based estimate',
    setupLabel: 'Crew and load-in planning included',
    ratingLabel: 'Reliable for fast venue turnarounds',
    features: ['Modular stage deck sizing', 'Front fascia finishing', 'Rigging-compatible truss sections'],
    support: ['Installation crew included', 'Venue layout coordination', 'Load-in and strike planning'],
  },
];

const categoryIcons = {
  Audio: Headphones,
  Lighting: Lightbulb,
  Installation: Wrench,
  'Display Systems': MonitorSpeaker,
} satisfies Record<string, typeof MonitorSpeaker>;

export function EquipmentRentals() {
  const { slug } = useParams<{ slug?: string }>();
  const expandedRef = useRef<HTMLElement | null>(null);
  const resultsCount = rentalProducts.length;

  const selectedProduct = useMemo(
    () => rentalProducts.find((product) => product.slug === slug) ?? null,
    [slug],
  );

  useEffect(() => {
    if (!slug || !selectedProduct || !expandedRef.current) {
      return;
    }

    expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selectedProduct, slug]);

  return (
    <div className="bg-black pt-20 text-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-sm text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              <SlidersHorizontal className="h-4 w-4 text-amber-400" />
              Filter by
            </div>
            <div className="mt-5 space-y-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Category</p>
                <div className="mt-3 space-y-2 text-sm text-neutral-300">
                  {Object.keys(categoryIcons).map((category) => (
                    <div key={category} className="rounded-xl border border-neutral-800 px-3 py-2">
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Support</p>
                <div className="mt-3 space-y-2 text-sm text-neutral-300">
                  <div className="rounded-xl border border-neutral-800 px-3 py-2">Installation included</div>
                  <div className="rounded-xl border border-neutral-800 px-3 py-2">On-site operator available</div>
                  <div className="rounded-xl border border-neutral-800 px-3 py-2">Custom quote</div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-5">
              <p className="text-sm text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                {resultsCount} results for <span className="text-white">rent & installation</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                {['LED walls', 'Audio rigs', 'Stage builds', 'Lighting kits'].map((chip) => (
                  <span key={chip} className="rounded-full border border-neutral-700 px-3 py-2 text-xs text-neutral-300">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {selectedProduct ? (
              <div className="flex justify-end">
                <Link
                  to="/equipment-rentals"
                  className="inline-flex items-center gap-2 text-sm text-amber-300 transition-colors hover:text-amber-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Collapse expanded product
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ) : null}

            {rentalProducts.map((product, index) => {
            const Icon = categoryIcons[product.category];
            const isActive = product.slug === slug;

            return (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`overflow-hidden rounded-[1.75rem] border bg-white text-neutral-950 shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-all duration-300 ${
                  isActive ? 'border-amber-400 ring-1 ring-amber-300/60' : 'border-neutral-200'
                }`}
              >
                <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)_220px]">
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100 md:aspect-auto md:h-full">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="space-y-4 p-5 md:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {product.brand}
                        </p>
                        <h3 className="mt-2 text-2xl leading-tight text-[#0f1111]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm text-sky-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {product.ratingLabel}
                        </p>
                      </div>
                      <span className="rounded-full bg-amber-50 p-2 text-amber-600">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-neutral-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {product.shortDescription}
                    </p>

                    <ul className="space-y-2 text-sm text-neutral-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Best for: {product.idealFor}
                    </p>
                  </div>

                  <div className="border-t border-neutral-200 bg-[#f7f8f8] p-5 md:border-t-0 md:border-l">
                    <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <div>
                        <p className="text-lg font-semibold text-[#0f1111]">{product.priceLabel}</p>
                        <p className="mt-1 text-sm text-emerald-700">{product.setupLabel}</p>
                      </div>
                      <p className="text-sm leading-6 text-neutral-600">
                        Slug link: `/equipment-rentals/{product.slug}`
                      </p>
                      <Link
                        to={isActive ? '/equipment-rentals' : `/equipment-rentals/${product.slug}`}
                        className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-neutral-950 text-white hover:bg-neutral-800'
                            : 'bg-[#ffd814] text-[#0f1111] hover:bg-[#f7ca00]'
                        }`}
                      >
                        {isActive ? 'Hide Details' : 'View Details'}
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-[#0f1111] transition-colors hover:bg-neutral-50"
                      >
                        Ask for Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
            })}
          </div>
        </div>
      </section>

      {selectedProduct ? (
        <section ref={expandedRef} className="border-t border-neutral-800 bg-[#131921]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-white text-[#0f1111]"
            >
              <div className="aspect-[16/8] overflow-hidden border-b border-neutral-200">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-6 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-700">
                    {selectedProduct.category}
                  </span>
                  <span className="text-sm text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Shareable URL: `/equipment-rentals/{selectedProduct.slug}`
                  </span>
                </div>

                <div>
                  <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {selectedProduct.name}
                  </h2>
                  <p className="mt-2 text-sm text-sky-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {selectedProduct.ratingLabel}
                  </p>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {selectedProduct.summary}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Best For
                    </p>
                    <p className="mt-3 text-base leading-7 text-neutral-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProduct.idealFor}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Installation Support
                    </p>
                    <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProduct.support.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="h-fit rounded-[1.75rem] border border-neutral-800 bg-white p-6 text-[#0f1111] lg:sticky lg:top-28"
            >
              <h3 className="text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Quick Actions
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                Use the slug link to send this exact package state to the team or move straight into quotation.
              </p>
              <ul className="mt-6 space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                {selectedProduct.features.map((feature) => (
                  <li key={feature} className="flex gap-3 rounded-[1.25rem] border border-neutral-200 bg-neutral-50 p-4 text-neutral-700">
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[1.5rem] border border-neutral-200 bg-[#f7f8f8] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Pricing & Setup
                </p>
                <p className="mt-3 text-lg font-semibold text-[#0f1111]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {selectedProduct.priceLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {selectedProduct.setupLabel}
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Share the slug or ask for a venue-specific installation quote.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full justify-center rounded-full bg-[#ffd814] px-5 py-3 text-sm font-medium text-[#0f1111] transition-colors hover:bg-[#f7ca00]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Request Quote
                </Link>
              </div>
            </motion.aside>
          </div>
        </section>
      ) : null}
    </div>
  );
}
