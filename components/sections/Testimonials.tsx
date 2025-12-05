import React from 'react';
import { Section, SectionHeading } from '../common/UI';
import { TESTIMONIALS } from '../../constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-white">
      <SectionHeading 
        title="Loved by Our Clients" 
        subtitle="Real stories from real people we've had the honor of photographing."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-stone-50 p-8 rounded-2xl relative shadow-sm border border-stone-100 flex flex-col h-full">
            <Quote className="text-gold-300 absolute top-6 right-6" size={40} />
            <div className="flex mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-gold-500 fill-current" />
              ))}
            </div>
            <p className="text-stone-600 mb-6 italic leading-relaxed flex-grow">"{t.quote}"</p>
            <div className="mt-auto">
              <p className="font-serif font-bold text-stone-900 text-lg">{t.name}</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider">{t.type}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
