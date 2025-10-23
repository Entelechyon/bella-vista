'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface MenuProps {
  onViewFullMenu: () => void;
}

const menuItems = [
  {
    name: 'Burrata con Prosciutto di Parma',
    category: 'ANTIPASTI',
    description: 'Creamy burrata cheese paired with 18-month aged Prosciutto di Parma, served with grilled sourdough, wild rocket, and a drizzle of Ligurian extra virgin olive oil and aged balsamic from Modena.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Antipasto della Casa',
    category: 'ANTIPASTI',
    description: 'Our chef\'s selection of Italian cured meats, artisanal cheeses, marinated vegetables, Castelvetrano olives, and house-made focaccia. Perfect for sharing and discovering the flavours of Italy.',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Osso Buco alla Milanese',
    category: 'SECONDI',
    description: 'Slow-braised Victorian veal shank in white wine and aromatic vegetables, served with creamy saffron risotto and gremolata. A classic from Lombardy that melts in your mouth.',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Linguine alle Vongole',
    category: 'PRIMI',
    description: 'Fresh linguine tossed with local Spencer Gulf clams, white wine, garlic, parsley, and a touch of chili. Simple perfection that captures the essence of coastal Italian cooking.',
    price: '$36',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Tiramisu della Nonna',
    category: 'DOLCI',
    description: 'Our grandmother\'s recipe featuring layers of espresso-soaked savoiardi, mascarpone cream, and a dusting of premium cocoa. Made fresh daily and the perfect end to your Italian journey.',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Cannoli Siciliani',
    category: 'DOLCI',
    description: 'Crispy pastry shells filled with sweet ricotta cream, candied orange peel, and dark chocolate chips. Finished with crushed pistachios and a light dusting of powdered sugar.',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Menu({ onViewFullMenu }: MenuProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-white to-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-burgundy-800 mb-4">
            Menu Highlights
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover Our Culinary Treasures
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 leading-relaxed">
            Our menu is a love letter to Italy, featuring time-honored recipes passed down
            through generations alongside innovative creations that celebrate the marriage of
            Italian tradition and Australian excellence. Each dish is crafted with imported
            Italian specialties and the finest local ingredients, ensuring an authentic taste
            of Italy right here in Melbourne.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-burgundy-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-burgundy-800 font-serif">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-gold-600 ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={onViewFullMenu}
            className="px-8 py-4 bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
          >
            View Full Menu & Book Your Table
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Chat with our assistant to explore more dishes and dietary options
          </p>
        </motion.div>
      </div>
    </section>
  );
}
