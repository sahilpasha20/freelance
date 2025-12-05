import React from 'react';
import { Section, SectionHeading, Button } from '../common/UI';
import { PACKAGES } from '../../constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-stone-50">
      <SectionHeading 
        title="Packages Designed Around You" 
        subtitle="Transparent options for every need. No hidden surprises."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PACKAGES.map((pkg, idx) => {
          const isMiddle = idx === 1;
          return (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                isMiddle 
                  ? 'bg-white border-gold-300 shadow-xl scale-105 z-10' 
                  : 'bg-white border-stone-100 shadow-sm'
              }`}
            >
              {isMiddle && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-stone-900">{pkg.name}</h3>
                <p className="text-sm text-stone-500 mt-2">{pkg.idealFor}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-stone-600 text-sm">
                    <Check size={16} className="text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={isMiddle ? 'primary' : 'outline'} 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
              >
                Enquire Pricing
              </Button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
