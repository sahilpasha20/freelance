import React from 'react';
import { motion } from 'framer-motion';
import { Users, Camera, MapPin, Heart } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    { icon: Users, label: '500+ Happy Clients' },
    { icon: Camera, label: '7+ Years Storytelling' },
    { icon: Heart, label: 'Weddings & Families' },
    { icon: MapPin, label: 'Across Bangalore' },
  ];

  return (
    <div id="stats" className="bg-white border-b border-stone-100 py-8 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center md:space-x-3 text-center md:text-left"
            >
              <div className="bg-stone-100 p-3 rounded-full text-stone-700 mb-2 md:mb-0">
                <stat.icon size={20} />
              </div>
              <span className="text-stone-700 font-medium text-sm md:text-base">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
