'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-burgundy-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
                alt="Italian restaurant ambiance"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              Bella Vista Italian Restaurant was born from a dream shared by the Rossi family
              in 2018. After three generations of running a beloved trattoria in the hills of
              Tuscany, Maria and Giuseppe Rossi brought their family&apos;s culinary legacy to
              Melbourne&apos;s vibrant dining scene.
            </p>
            <p>
              What started as a desire to share authentic Italian flavours with their new
              community has blossomed into a warm gathering place where traditional recipes
              meet contemporary Australian ingredients.
            </p>
            <p>
              At Bella Vista, we believe that great food brings people together. Our warm,
              inviting atmosphere reflects the Italian concept of <em className="font-serif italic">&apos;convivialità&apos;</em> – the
              joy of sharing good food, good wine, and good company.
            </p>
          </motion.div>
        </div>

        {/* Chef Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-2 relative h-[400px] md:h-auto overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80"
                alt="Chef Marco Rossi"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-burgundy-800 mb-2">
                Our Chef
              </h3>
              <p className="text-xl text-gold-600 font-semibold mb-6">
                Executive Chef Marco Rossi
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Executive Chef Marco Rossi, Maria and Giuseppe&apos;s son, trained at the
                  prestigious Alma Culinary School in Parma before honing his craft in
                  renowned kitchens across Rome and Florence.
                </p>
                <p>
                  His philosophy is simple: respect the ingredients, honour the traditions,
                  and create moments of joy around the table. Marco&apos;s menu celebrates the
                  diversity of Italian cuisine, from the robust flavours of the south to the
                  delicate sophistication of northern Italy, all while incorporating the
                  exceptional produce that Victoria has to offer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
