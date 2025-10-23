'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HoursLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hours = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday - Thursday', time: '5:00 PM - 10:00 PM' },
    { day: 'Friday - Saturday', time: '5:00 PM - 11:00 PM' },
    { day: 'Sunday', time: '5:00 PM - 9:00 PM' },
  ];

  return (
    <section className="section-padding bg-cream-100" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-burgundy-800 mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-burgundy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-burgundy-800 mb-6 text-center">
              Opening Hours
            </h3>
            <div className="space-y-4">
              {hours.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-3 last:border-0">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">{item.day}</span>
                    <span className={`text-sm ${item.time === 'Closed' ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-burgundy-800 mb-6 text-center">
              Address
            </h3>
            <div className="text-center space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                123 Chapel Street<br />
                Windsor VIC 3181<br />
                Melbourne, Australia
              </p>
              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=123+Chapel+Street+Windsor+VIC+3181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-burgundy-600 hover:text-burgundy-700 font-semibold transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  Get Directions
                </a>
              </div>
              <div className="pt-2 text-sm text-gray-500">
                Street parking and paid lot nearby
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-burgundy-800 mb-6 text-center">
              Contact Us
            </h3>
            <div className="space-y-6 text-center">
              <div>
                <p className="text-sm text-gray-500 mb-2">Phone</p>
                <a
                  href="tel:+61395551234"
                  className="text-lg text-burgundy-600 hover:text-burgundy-700 font-semibold transition-colors"
                >
                  (03) 9555-1234
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Email</p>
                <a
                  href="mailto:info@bellavista.com.au"
                  className="text-lg text-burgundy-600 hover:text-burgundy-700 font-semibold transition-colors break-all"
                >
                  info@bellavista.com.au
                </a>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  For private dining inquiries<br />
                  (groups of 12+), please call or email
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
