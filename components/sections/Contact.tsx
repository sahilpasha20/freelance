import React, { useState } from 'react';
import { Section, SectionHeading, Button } from '../common/UI';
import { MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', type: 'Wedding', date: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will get back to you shortly.");
    setFormData({ name: '', email: '', phone: '', type: 'Wedding', date: '', message: '' });
  };

  return (
    <Section id="contact" className="bg-white">
      <SectionHeading 
        title="Book Your Session" 
        subtitle="Tell us about your special day or idea – we’ll get back to you with availability."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Form */}
        <div className="bg-stone-50 p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
              <input 
                type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white transition-shadow"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white transition-shadow"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                <input 
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white transition-shadow"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Type of Shoot</label>
                <select 
                  name="type" value={formData.type} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white transition-shadow"
                >
                  <option value="Wedding">Wedding Photography</option>
                  <option value="Pre-Wedding">Pre-Wedding / Couple</option>
                  <option value="Maternity">Maternity</option>
                  <option value="Newborn">Newborn / Kids</option>
                  <option value="Family">Family Portrait</option>
                  <option value="Event">Event Coverage</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Date</label>
                <input 
                  type="date" name="date" value={formData.date} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Message / Details</label>
              <textarea 
                name="message" rows={4} value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none bg-white transition-shadow"
                placeholder="Tell us a bit more about your vision..."
              ></textarea>
            </div>

            <Button type="submit" className="w-full text-lg">Send Enquiry</Button>
            <p className="text-center text-xs text-stone-500 mt-4">We usually respond within 24 hours.</p>
          </form>
        </div>

        {/* Location Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-3xl font-serif text-stone-900 mb-6">Based in Bangalore</h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Our studio is located in the heart of Koramangala, but our stories take us everywhere. Whether it's a sunrise shoot at Nandi Hills or a grand wedding in Palace Grounds, we are ready to travel.
            </p>
            
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 flex items-start">
              <MapPin className="text-gold-600 mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Studio Address</h4>
                <p className="text-stone-600 text-sm mb-4">
                  #123, 4th Cross, 5th Main<br/>
                  Koramangala 4th Block<br/>
                  Bangalore, Karnataka 560034
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-600 font-medium text-sm hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="h-64 w-full bg-stone-200 rounded-2xl overflow-hidden relative">
            {/* Placeholder for Map */}
            <img 
               src="https://picsum.photos/seed/bangaloremap/800/400?grayscale" 
               alt="Map location" 
               className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button variant="secondary" size="sm" onClick={() => window.open('https://maps.google.com', '_blank')}>
                View Location
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
