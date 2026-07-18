import React from 'react';
import { Quote, Star } from 'lucide-react';
import { ReviewItem } from '../types';

const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    text: "The best flat white in Auckland. The sourdough is always fresh, and the morning atmosphere is so peaceful. It’s become our daily ritual.",
    author: "Sarah M.",
    location: "Ponsonby, Auckland",
    rating: 5
  },
  {
    id: 'rev-2',
    text: "The attention to detail in the food and the quiet, sun-drenched atmosphere make this our absolute favorite weekend spot. Absolutely flawless.",
    author: "James T.",
    location: "Epsom, Auckland",
    rating: 5
  },
  {
    id: 'rev-3',
    text: "A truly premium brunch experience. The timber interior is beautiful, and the artisan eggs benedict are simply unmatched.",
    author: "Liam K.",
    location: "Mount Eden, Auckland",
    rating: 5
  }
];

export default function ReviewsSection() {
  return (
    <section 
      id="reviews" 
      className="scroll-mt-24 py-24 bg-[#E19184]/15 text-[#620607] transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-mono text-xs uppercase tracking-widest text-[#C63E4E] font-medium block mb-2">
            Local Voices
          </span>
          <h2 className="text-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#620607]">
            Guest Testimonials
          </h2>
          <div className="w-12 h-[1px] bg-[#E19184] mx-auto mt-6" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-[#F5F9E5] border border-[#E19184]/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-xs relative group transition-all duration-500 hover:border-[#C63E4E]/30"
            >
              {/* Top Accent Icon */}
              <div className="absolute top-6 right-8 text-[#E19184]/20 group-hover:text-[#C63E4E]/20 transition-colors duration-500">
                <Quote className="w-10 h-10 transform -scale-x-100" strokeWidth={1.0} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-[#C63E4E] text-[#C63E4E]" 
                    strokeWidth={0} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sans text-sm md:text-base text-[#620607]/90 leading-relaxed font-light italic mb-8 relative z-10">
                "{review.text}"
              </p>

              {/* Review Author */}
              <div className="border-t border-[#E19184]/15 pt-4">
                <h4 className="text-serif text-lg font-medium text-[#620607]">
                  {review.author}
                </h4>
                <p className="text-mono text-[11px] text-[#475B35] tracking-wider uppercase mt-1">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
