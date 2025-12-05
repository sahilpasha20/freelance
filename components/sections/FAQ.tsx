import React, { useState } from 'react';
import { Section, SectionHeading } from '../common/UI';
import { FAQS } from '../../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section className="bg-stone-50">
      <SectionHeading title="Frequently Asked Questions" />
      
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
            <button 
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span className="font-medium text-stone-800 text-lg">{faq.question}</span>
              <span className="text-stone-400">
                {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-stone-600 leading-relaxed"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};
