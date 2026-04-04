import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, ChevronRight, Grid2x2, ListFilter, Search, Star } from 'lucide-react';

type RentalCategory = {
  name: string;
  count: number;
  children?: { name: string; count: number }[];
};

type RentalProduct = {
  slug: string;
  name: string;
  image: string;
  category: string;
  rating: string;
  reviews: string;
  price: string;
  summary: string;
  availability: string;
};

const rentalCategories: RentalCategory[] = [
  { name: 'Batteries', count: 3 },
  { name: 'Camera Accessories', count: 12 },
  {
    name: 'Camera Rental',
    count: 18,
    children: [
      { name: 'Canon', count: 6 },
      { name: 'Sony', count: 8 },
      { name: 'Blackmagic', count: 4 },
    ],
  },
  { name: 'Lighting Rental', count: 14 },
  { name: 'Lenses Rental', count: 22 },
  { name: 'Microphones', count: 9 },
  { name: 'Mixers', count: 5 },
  { name: 'Monitors', count: 4 },
  { name: 'Tripods & Support', count: 11 },
];

const rentalProducts: RentalProduct[] = [
  {
    slug: 'sony-fx3-camera-rental',
    name: 'Sony FX3 Cinema Line Camera on Rent',
    image: '/images/WhatsApp Image 2026-01-13 at 12.14.33 PM.webp',
    category: 'Camera Rental',
    rating: '4.9',
    reviews: '17 reviews',
    price: '₹3,500 / day',
    summary: 'Compact full-frame cinema camera package with cage, batteries, and media for commercial shoots and interviews.',
    availability: 'Available for Delhi NCR pickup',
  },
  {
    slug: 'sony-a7siii-rental',
    name: 'Sony A7S III Camera Rental',
    image: '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM.webp',
    category: 'Camera Rental',
    rating: '4.8',
    reviews: '12 reviews',
    price: '₹2,800 / day',
    summary: 'Low-light friendly hybrid camera setup suited for wedding films, events, and fast-turnaround production work.',
    availability: 'Same-day dispatch possible',
  },
  {
    slug: 'canon-r5c-rental',
    name: 'Canon R5 C Camera Body Rental',
    image: '/images/WhatsApp Image 2026-01-13 at 12.14.34 PM (1).webp',
    category: 'Camera Rental',
    rating: '4.7',
    reviews: '8 reviews',
    price: '₹4,200 / day',
    summary: '8K-ready hybrid cinema body for premium branded content, interviews, and high-detail video production.',
    availability: 'Book 24 hours in advance',
  },
  {
    slug: 'nanlite-forza-rental',
    name: 'Nanlite Forza 500 Lighting Kit on Rent',
    image: '/images/WhatsApp Image 2026-01-13 at 12.16.24 PM.webp',
    category: 'Lighting Rental',
    rating: '4.8',
    reviews: '11 reviews',
    price: '₹2,200 / day',
    summary: 'Daylight COB fixture with stand, softbox, and power accessories for interviews, sets, and studio lighting.',
    availability: 'Operator support available',
  },
  {
    slug: 'aputure-600d-rental',
    name: 'Aputure 600D Pro Light Rental',
    image: '/images/WhatsApp Image 2026-01-13 at 12.19.47 PM.webp',
    category: 'Lighting Rental',
    rating: '5.0',
    reviews: '9 reviews',
    price: '₹3,000 / day',
    summary: 'High-output professional LED with weather-resistant ballast and cinematic punch for larger setups.',
    availability: 'Frequently booked for ad films',
  },
  {
    slug: 'wireless-mic-kit-rental',
    name: 'Wireless Microphone Kit Rental',
    image: '/images/WhatsApp Image 2026-01-13 at 12.19.48 PM.webp',
    category: 'Microphones',
    rating: '4.6',
    reviews: '14 reviews',
    price: '₹900 / day',
    summary: 'Dual-channel wireless audio set for interviews, presenters, and event coverage with clean dialogue capture.',
    availability: 'Ready with charging case',
  },
  {
    slug: 'cine-lens-set-rental',
    name: 'Cine Prime Lens Set on Rent',
    image: '/images/WhatsApp Image 2026-01-13 at 12.21.50 PM.webp',
    category: 'Lenses Rental',
    rating: '4.9',
    reviews: '6 reviews',
    price: '₹5,500 / day',
    summary: 'Matched cinema prime set for narrative shoots and commercials where controlled optics and consistency matter.',
    availability: 'Delivery by request',
  },
  {
    slug: 'field-monitor-rental',
    name: 'Director Field Monitor Rental',
    image: '/images/WhatsApp Image 2026-02-25 at 11.23.59 PM.webp',
    category: 'Monitors',
    rating: '4.7',
    reviews: '5 reviews',
    price: '₹1,200 / day',
    summary: 'Bright production monitor kit for focus checks, client view, and on-set framing confidence.',
    availability: 'Includes sunhood and cables',
  },
];

const popularTags = ['Camera rental', 'Lighting rental', 'Sony', 'Canon', 'Lenses', 'Studio gear'];

export function EquipmentRentals() {
  const { slug } = useParams<{ slug?: string }>();
  const selectedProduct = rentalProducts.find((product) => product.slug === slug) ?? null;

  return (
    <div className="bg-black pt-20 text-white">
      <section className="border-b border-neutral-900 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-[13px] text-neutral-500 md:px-6">
          <div className="flex flex-wrap items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link to="/" className="transition-colors hover:text-[#F59E0B]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Rental Inventory</span>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-900 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_32%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.32em] text-[#F59E0B]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Professional Production Gear
              </p>
              <h1
                className="mt-3 text-4xl leading-none text-white md:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Rental Inventory
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                Browse our camera, lighting, audio, and support inventory built for shoots, events, and branded production.
              </p>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-3 md:flex-row">
              <label className="relative block flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <input
                  aria-label="Search rental gear"
                  placeholder="Search products..."
                  className="h-12 w-full rounded-none border border-neutral-800 bg-neutral-950 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 focus:border-[#F59E0B] focus:outline-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </label>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center border border-[#F59E0B] bg-[#F59E0B] px-6 text-sm font-medium text-black transition-colors hover:bg-[#d88907] hover:border-[#d88907]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs uppercase tracking-[0.18em] text-neutral-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <div className="border border-neutral-900 bg-neutral-950">
              <div className="border-b border-neutral-900 px-5 py-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <ListFilter className="h-4 w-4" />
                  Product Categories
                </p>
              </div>

              <div className="px-5 py-2">
                {rentalCategories.map((category) => (
                  <div key={category.name} className="border-b border-neutral-900 py-3 last:border-b-0">
                    <div className="flex items-center justify-between gap-3 text-sm text-neutral-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span className="flex items-center gap-2">
                        {category.children ? <ChevronDown className="h-4 w-4 text-neutral-500" /> : null}
                        {category.name}
                      </span>
                      <span className="text-neutral-500">({category.count})</span>
                    </div>

                    {category.children ? (
                      <div className="ml-6 mt-3 space-y-2 text-sm text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {category.children.map((child) => (
                          <div key={child.name} className="flex items-center justify-between gap-3">
                            <span>{child.name}</span>
                            <span>({child.count})</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#3a2b12] bg-[linear-gradient(180deg,rgba(245,158,11,0.1),rgba(245,158,11,0.03))] p-5">
              <h2 className="text-lg text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Need custom packaging?
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                We can bundle camera, lenses, lighting, operators, and transport for single-day or long-format productions.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center border border-[#F59E0B] px-4 py-3 text-sm font-medium text-[#F59E0B] transition-colors hover:bg-[#F59E0B] hover:text-black"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Talk to Team
              </Link>
            </div>
          </aside>

          <div>
            {selectedProduct ? (
              <div className="mb-6 border border-[#5a3c0e] bg-[linear-gradient(180deg,rgba(245,158,11,0.14),rgba(245,158,11,0.04))] p-5">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-28 w-full border border-[#5a3c0e] object-cover lg:w-44"
                  />
                  <div className="flex-1">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F59E0B]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Selected Product
                    </p>
                    <h2
                      className="mt-2 text-[32px] leading-8 text-white"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {selectedProduct.name}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProduct.summary}
                    </p>
                  </div>
                  <div className="min-w-40">
                    <p className="text-lg font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProduct.price}
                    </p>
                    <p className="mt-1 text-sm text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProduct.availability}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex w-full items-center justify-center border border-[#F59E0B] bg-[#F59E0B] px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-[#d88907] hover:border-[#d88907]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="flex flex-col gap-4 border border-neutral-900 bg-neutral-950 px-5 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                Showing 1-8 of 98 results
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#F59E0B] bg-[#F59E0B] text-black"
                  aria-label="Grid view"
                >
                  <Grid2x2 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center border border-neutral-800 bg-black px-4 text-sm text-neutral-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Default sorting
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rentalProducts.map((product, index) => (
                <motion.article
                  key={product.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className="group border border-neutral-900 bg-neutral-950"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute left-4 top-4 bg-black/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B] ring-1 ring-[#F59E0B]/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {product.category}
                    </span>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="flex items-center gap-2 text-sm text-[#F59E0B]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                      <span className="text-neutral-600">|</span>
                      <span className="text-neutral-500">{product.reviews}</span>
                    </div>

                    <div>
                      <h3
                        className="text-[28px] leading-8 text-white transition-colors group-hover:text-[#F59E0B]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {product.summary}
                      </p>
                    </div>

                    <div className="border-t border-neutral-900 pt-4">
                      <p className="text-lg font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {product.price}
                      </p>
                      <p className="mt-1 text-sm text-neutral-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {product.availability}
                      </p>
                    </div>

                    <div className="flex gap-3 pt-1">
                      <Link
                        to={`/equipment-rentals/${product.slug}`}
                        className="inline-flex flex-1 items-center justify-center border border-[#F59E0B] bg-[#F59E0B] px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-[#d88907] hover:border-[#d88907]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center border border-neutral-800 bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-3">
          <div className="border border-neutral-900 bg-neutral-950 p-6">
            <h2 className="text-[30px] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Rental Terms
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              Government ID, booking confirmation, and a refundable security amount may be required depending on gear category.
            </p>
          </div>
          <div className="border border-neutral-900 bg-neutral-950 p-6">
            <h2 className="text-[30px] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Delivery Support
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              Pickup from Delhi NCR is fastest, and our team can also arrange transport, setup, and operator support when needed.
            </p>
          </div>
          <div className="border border-neutral-900 bg-neutral-950 p-6">
            <h2 className="text-[30px] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Need Help Choosing?
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              Tell us your shoot date, venue, and output requirements and we’ll recommend the right package instead of overselling gear.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
