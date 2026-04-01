// import { motion } from 'motion/react';
// import { Lightbulb, Volume2, Camera, Mic, Monitor, Radio } from 'lucide-react';

// const equipmentCategories = [
//   {
//     category: 'Lighting Equipment',
//     icon: Lightbulb,
//     items: [
//       { name: 'Moving Head Lights', specs: 'Professional stage lighting with DMX control' },
//       { name: 'LED Par Lights', specs: 'RGBW color mixing, wireless DMX' },
//       { name: 'Beam Lights', specs: 'High-intensity beam effects' },
//       { name: 'Uplights', specs: 'Wireless battery-powered uplighting' },
//       { name: 'Follow Spots', specs: 'Manual and automated follow spotlights' },
//       { name: 'Laser Systems', specs: 'Full-color laser projection systems' },
//     ],
//   },
//   {
//     category: 'Audio Equipment',
//     icon: Volume2,
//     items: [
//       { name: 'Line Array Systems', specs: 'Professional concert-grade PA systems' },
//       { name: 'Subwoofers', specs: 'High-power bass reinforcement' },
//       { name: 'Wireless Microphones', specs: 'Handheld, lapel, and headset options' },
//       { name: 'Mixing Consoles', specs: 'Digital audio mixing desks' },
//       { name: 'Monitor Systems', specs: 'Stage monitoring and foldback' },
//       { name: 'Audio Processors', specs: 'DSP and effects processing' },
//     ],
//   },
//   {
//     category: 'Video & LED',
//     icon: Monitor,
//     items: [
//       { name: 'LED Video Walls', specs: 'Indoor/outdoor P3.9, P4.8 LED panels' },
//       { name: 'Projectors', specs: '10K-20K lumens high-brightness projectors' },
//       { name: 'LED Screens', specs: 'Various sizes and resolutions' },
//       { name: 'Video Processors', specs: 'Seamless switching and scaling' },
//       { name: 'Camera Systems', specs: 'Multi-camera live production setups' },
//       { name: 'Live Streaming', specs: 'Professional streaming equipment' },
//     ],
//   },
//   {
//     category: 'Stage & Rigging',
//     icon: Radio,
//     items: [
//       { name: 'Stage Platforms', specs: 'Modular staging systems, various heights' },
//       { name: 'Truss Systems', specs: 'Aluminum truss in multiple configurations' },
//       { name: 'Rigging Equipment', specs: 'Chain hoists, motors, and safety gear' },
//       { name: 'Backdrops', specs: 'Custom printed and fabric backdrops' },
//       { name: 'Pipe & Drape', specs: 'Adjustable backdrop systems' },
//       { name: 'Dance Floors', specs: 'LED and traditional dance floors' },
//     ],
//   },
//   {
//     category: 'Special Effects',
//     icon: Camera,
//     items: [
//       { name: 'Fog Machines', specs: 'Low-lying and atmospheric fog' },
//       { name: 'Confetti Cannons', specs: 'Manual and automated confetti systems' },
//       { name: 'CO2 Jets', specs: 'High-pressure CO2 effect jets' },
//       { name: 'Pyrotechnics', specs: 'Licensed pyrotechnic effects' },
//       { name: 'Bubble Machines', specs: 'Professional bubble generation' },
//       { name: 'Snow Machines', specs: 'Artificial snow effects' },
//     ],
//   },
//   {
//     category: 'Production Accessories',
//     icon: Mic,
//     items: [
//       { name: 'Power Distribution', specs: 'Distro boxes and power management' },
//       { name: 'Cables & Adapters', specs: 'All audio, video, and power cables' },
//       { name: 'Stands & Clamps', specs: 'Mic stands, speaker stands, lighting clamps' },
//       { name: 'Cases & Transport', specs: 'Road cases and equipment transport' },
//       { name: 'Control Systems', specs: 'Lighting consoles and controllers' },
//       { name: 'Walkie Talkies', specs: 'Professional communication systems' },
//     ],
//   },
// ];

// export function EquipmentRentals() {
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1764884487727-4757bd493cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwc2hvdyUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3MDU2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080"
//             alt="Equipment Rentals"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>
//         <div className="relative z-10 text-center px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-7xl text-white mb-6"
//             style={{ fontFamily: "'Cormorant Garamond', serif" }}
//           >
//             Equipment Rentals
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl text-neutral-300 max-w-3xl mx-auto"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             Professional-grade equipment for events of any scale
//           </motion.p>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="bg-black py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <p 
//               className="text-neutral-300 text-lg leading-relaxed"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Whether you're planning a concert, corporate event, wedding, or private celebration, 
//               our extensive inventory of professional audio, lighting, video, and staging equipment 
//               ensures your event achieves technical perfection. All equipment is maintained to the 
//               highest standards and comes with optional technical support.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Equipment Categories */}
//       <section className="bg-neutral-950 py-24 px-6">
//         <div className="max-w-7xl mx-auto space-y-16">
//           {equipmentCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-black border border-neutral-900 p-8 md:p-12"
//             >
//               {/* Category Header */}
//               <div className="flex items-center gap-4 mb-8 pb-6 border-b border-neutral-800">
//                 <category.icon className="w-10 h-10 text-amber-600" />
//                 <h2 
//                   className="text-3xl md:text-4xl text-white"
//                   style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                 >
//                   {category.category}
//                 </h2>
//               </div>

//               {/* Equipment Items */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {category.items.map((item, idx) => (
//                   <div 
//                     key={idx}
//                     className="border-l-2 border-amber-600 pl-6 py-2"
//                   >
//                     <h3 
//                       className="text-xl text-white mb-2"
//                       style={{ fontFamily: "'Inter', sans-serif" }}
//                     >
//                       {item.name}
//                     </h3>
//                     <p 
//                       className="text-neutral-500 text-sm"
//                       style={{ fontFamily: "'Inter', sans-serif" }}
//                     >
//                       {item.specs}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="bg-black py-24 px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 
//               className="text-4xl md:text-5xl text-white mb-6"
//               style={{ fontFamily: "'Cormorant Garamond', serif" }}
//             >
//               Rental Services Included
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Equipment Delivery',
//                 description: 'Professional delivery, setup, and pickup at your venue',
//               },
//               {
//                 title: 'Technical Support',
//                 description: 'On-site technicians and 24/7 technical assistance',
//               },
//               {
//                 title: 'Maintenance & Backup',
//                 description: 'Regular equipment maintenance and backup units on standby',
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-neutral-950 border border-neutral-800 p-8 text-center hover:border-amber-600/50 transition-all duration-300"
//               >
//                 <h3 
//                   className="text-2xl text-white mb-4"
//                   style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                 >
//                   {service.title}
//                 </h3>
//                 <p 
//                   className="text-neutral-400"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {service.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-neutral-950 py-24 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 
//               className="text-4xl md:text-5xl text-white mb-6"
//               style={{ fontFamily: "'Cormorant Garamond', serif" }}
//             >
//               Get a Custom Quote
//             </h2>
//             <p 
//               className="text-neutral-400 text-lg mb-10"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Contact us with your event requirements and we'll provide a detailed rental quote
//             </p>
//             <button 
//               className="px-10 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Request Quote
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

export function EquipmentRentals() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <h1 
        className="text-5xl md:text-6xl text-white text-center"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Page Coming Soon!
      </h1>
    </div>
  );
}
