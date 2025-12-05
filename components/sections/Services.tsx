import React from 'react';
import { Section, SectionHeading } from '../common/UI';
import { SERVICES } from '../../constants';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-white">
      <SectionHeading 
        title="What We Capture" 
        subtitle="Professional photography services tailored to your life's biggest milestones."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => {
          // Dynamic Icon mapping
          const IconComponent = (Icons as any)[service.iconName] || Icons.Camera;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-stone-100"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-gold-600 mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                <IconComponent size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-4">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-stone-500 italic">Looking for something specific? We offer custom packages on request.</p>
      </div>
    </Section>
  );
};
