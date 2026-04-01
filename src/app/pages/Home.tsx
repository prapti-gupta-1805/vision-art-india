import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
