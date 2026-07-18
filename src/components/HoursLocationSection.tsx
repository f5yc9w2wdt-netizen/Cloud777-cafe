import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function HoursLocationSection() {
  return (
    <section 
      id="hours-location" 
      className="scroll-mt-24 py-24 bg-[#F5F9E5] text-[#620607] transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-mono text-xs uppercase tracking-widest text-[#475B35] font-medium block mb-2">
            Visit Us
          </span>
          <h2 className="text-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#620607]">
            Hours & Location
          </h2>
          <div className="w-12 h-[1px] bg-[#E19184] mx-auto mt-6" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch max-w-5xl mx-auto">
          
          {/* Details Card */}
          <div className="bg-[#620607] text-[#F5F9E5] rounded-3xl p-10 md:p-12 flex flex-col justify-between border border-[#E19184]/15 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C63E4E]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-12 relative z-10">
              
              {/* Location Detail */}
              <div className="flex gap-6 items-start">
                <div className="p-3 rounded-xl bg-[#F5F9E5]/10 border border-[#F5F9E5]/15 text-[#E19184]">
                  <MapPin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-serif text-xl font-medium tracking-wide">
                    Our Location
                  </h3>
                  <p className="text-sans text-sm md:text-base font-light text-[#F5F9E5]/80 leading-relaxed">
                    777 Ponsonby Road,<br />
                    Ponsonby, Auckland 1011<br />
                    New Zealand
                  </p>
                </div>
              </div>

              {/* Hours Detail */}
              <div className="flex gap-6 items-start">
                <div className="p-3 rounded-xl bg-[#F5F9E5]/10 border border-[#F5F9E5]/15 text-[#E19184]">
                  <Clock className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-serif text-xl font-medium tracking-wide">
                    Opening Hours
                  </h3>
                  <div className="text-sans text-sm md:text-base font-light text-[#F5F9E5]/80 space-y-1">
                    <div className="flex justify-between gap-12 border-b border-[#F5F9E5]/10 pb-1">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-[#E19184]">7:00 AM – 3:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-12 pt-1">
                      <span>Saturday – Sunday</span>
                      <span className="font-medium text-[#E19184]">8:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Detail */}
              <div className="flex gap-6 items-start">
                <div className="p-3 rounded-xl bg-[#F5F9E5]/10 border border-[#F5F9E5]/15 text-[#E19184]">
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-serif text-xl font-medium tracking-wide">
                    Contact & Bookings
                  </h3>
                  <p className="text-sans text-sm font-light text-[#F5F9E5]/80 leading-relaxed flex flex-col gap-1">
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 opacity-60" /> +64 9-777-0777
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 opacity-60" /> hello@cloud777cafe.co.nz
                    </span>
                  </p>
                </div>
              </div>

            </div>

            {/* Footer note */}
            <div className="mt-12 pt-6 border-t border-[#F5F9E5]/10 text-mono text-[10px] text-[#E19184] tracking-widest uppercase">
              No Bookings Required • Walk-ins Welcome
            </div>
          </div>

          {/* Minimalist Vector Auckland Map Mockup */}
          <div className="bg-[#475B35] rounded-3xl p-10 md:p-12 flex flex-col justify-between border border-[#E19184]/15 shadow-md text-[#F5F9E5] relative overflow-hidden">
            {/* Elegant abstract street pattern layout */}
            <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
              <svg width="100%" height="100%" className="text-[#F5F9E5]" stroke="currentColor" strokeWidth="1.5" fill="none">
                {/* Diagonal main roads */}
                <line x1="0" y1="20%" x2="100%" y2="80%" />
                <line x1="20%" y1="0" x2="80%" y2="100%" />
                <line x1="10%" y1="100%" x2="90%" y2="0" />
                
                {/* Grid side streets */}
                <line x1="0" y1="40%" x2="100%" y2="40%" />
                <line x1="0" y1="60%" x2="100%" y2="60%" />
                <line x1="30%" y1="0" x2="30%" y2="100%" />
                <line x1="70%" y1="0" x2="70%" y2="100%" />

                {/* Concentric neighborhood circles */}
                <circle cx="55%" cy="48%" r="40" />
                <circle cx="55%" cy="48%" r="100" />
                <circle cx="55%" cy="48%" r="180" />
              </svg>
            </div>

            {/* Map Pin Glow Accent */}
            <div className="absolute left-[55%] top-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="absolute w-12 h-12 rounded-full bg-[#C63E4E]/30 animate-ping" />
              <div className="absolute w-6 h-6 rounded-full bg-[#C63E4E] border border-2 border-[#F5F9E5] flex items-center justify-center shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5F9E5]" />
              </div>
            </div>

            <div className="relative z-10">
              <span className="text-mono text-xs uppercase tracking-widest text-[#E19184] font-medium block mb-2">
                Auckland Central
              </span>
              <h3 className="text-serif text-2xl font-light tracking-wide">
                Heart of Ponsonby
              </h3>
              <p className="text-sans text-xs text-[#F5F9E5]/70 font-light mt-2 max-w-xs">
                Convenient street parking available directly along Ponsonby Road and surrounding avenues.
              </p>
            </div>

            <div className="relative z-10 mt-20 md:mt-0 flex justify-between items-end border-t border-[#F5F9E5]/15 pt-6">
              <div>
                <span className="text-serif text-lg font-medium block">
                  Cloud 777 Cafe
                </span>
                <span className="text-sans text-xs text-[#E19184]">
                  Auckland’s premium brunch destination
                </span>
              </div>
              <a 
                href="https://maps.google.com/?q=777+Ponsonby+Road+Auckland" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#C63E4E] hover:bg-[#620607] text-[#F5F9E5] rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 border border-[#E19184]/25 shadow-xs"
              >
                Directions
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
