import React from 'react';
import { Section } from '../common/UI';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/photographer/800/1000" 
              alt="Photographer at work" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg max-w-xs hidden md:block">
            <p className="font-serif italic text-xl text-stone-800">"Photography is the pause button of life."</p>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">Who We Are</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">Capturing the unscripted beauty of life.</h3>
          
          <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
            <p>
              We believe the most beautiful photographs are born from real emotions. At Rare Moments Photography, we specialize in capturing candid smiles, unspoken glances, and memories that feel like home. 
            </p>
            <p>
              From intimate maternity shoots to grand weddings in Bangalore, every session is crafted with patience, care, and artistry. We don't just take pictures; we preserve feelings.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {['Candid Approach', 'Patient & Caring', 'Detail Oriented', 'Client Centric'].map((item) => (
              <div key={item} className="flex items-center text-stone-800 font-medium">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
