import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-serif text-2xl mb-6">Rare Moments</h3>
            <p className="text-sm leading-relaxed mb-6">
              Capturing your rare moments with heart and artistry. Based in Bangalore, telling stories worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-gold-400 transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Investment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 flex-shrink-0 mt-0.5" />
                <span>Koramangala 4th Block,<br />Bangalore, Karnataka 560034</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>hello@raremoments.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h4 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">Stay Updated</h4>
             <p className="text-sm mb-4">Subscribe for seasonal offers and photography tips.</p>
             <div className="flex">
               <input type="email" placeholder="Your email" className="bg-stone-800 border-none text-white text-sm px-4 py-2 w-full focus:ring-1 focus:ring-gold-500 outline-none rounded-l-md" />
               <button className="bg-gold-500 text-stone-900 px-4 py-2 text-sm font-medium rounded-r-md hover:bg-gold-400 transition-colors">Join</button>
             </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Rare Moments Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
