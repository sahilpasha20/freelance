import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../common/UI';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const scrollToNext = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-[120%] -mt-10 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://picsum.photos/seed/weddinghero/1920/1200?grayscale')",
            filter: "brightness(0.85)"
          }}
        />
      </motion.div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/90 uppercase tracking-[0.2em] text-sm md:text-base mb-4"
        >
          Bangalore · Photography Studio
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
        >
          Rare Moments, <br/> <span className="italic text-gold-200">Captured Forever</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
        >
          Premium photography studio in Bangalore, turning your once-in-a-lifetime moments into timeless stories.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            variant="white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
            className="w-full sm:w-auto"
          >
            Book a Photoshoot
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth'})}
            className="border-white text-white hover:bg-white hover:text-stone-900 w-full sm:w-auto"
          >
            View Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer animate-bounce text-white/70 hover:text-white"
        onClick={scrollToNext}
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};