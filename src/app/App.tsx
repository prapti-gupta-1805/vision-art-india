import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WhatWeDo } from './pages/WhatWeDo';
import { Projects } from './pages/Projects';
import { EquipmentRentals } from './pages/EquipmentRentals';
import { Install } from './pages/Install';
import { AboutUs } from './pages/AboutUs';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/equipment-rentals" element={<EquipmentRentals />} />
            <Route path="/products" element={<Install />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
