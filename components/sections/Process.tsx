import React from 'react';
import { Section, SectionHeading } from '../common/UI';
import { MessageSquare, Calendar, Camera, Heart } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    { icon: MessageSquare, title: "Share Your Story", desc: "Fill the form or call us to tell us about your big day." },
    { icon: Calendar, title: "Plan the Shoot", desc: "We discuss concepts, outfits, and the perfect location." },
    { icon: Camera, title: "Capture Moments", desc: "Relax and be yourself while we weave our magic." },
    { icon: Heart, title: "Relive Forever", desc: "Receive beautifully edited photos to cherish for a lifetime." },
  ];

  return (
    <Section className="bg-white">
      <SectionHeading title="How It Works" />
      
      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-stone-100 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-6 shadow-sm">
                <step.icon size={32} />
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-2">{step.title}</h4>
              <p className="text-sm text-stone-500 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
