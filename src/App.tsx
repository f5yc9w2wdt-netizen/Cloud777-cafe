import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { AtmosphereItem } from './types';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import MenuSection from './components/MenuSection';
import ReviewsSection from './components/ReviewsSection';
import HoursLocationSection from './components/HoursLocationSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isSticky, setIsSticky] = useState<boolean>(false);

  // States to manage the butter-smooth text fading for the Morning Concept Left Panel
  const [activeAtmosphere, setActiveAtmosphere] = useState<AtmosphereItem | null>(null);
  const [displayAtmosphere, setDisplayAtmosphere] = useState<AtmosphereItem | null>(null);
  const [fadeOpacity, setFadeOpacity] = useState<number>(1);

  // Manage text cross-fading when active atmosphere changes
  useEffect(() => {
    if (activeAtmosphere) {
      if (!displayAtmosphere) {
        setDisplayAtmosphere(activeAtmosphere);
      } else if (activeAtmosphere.id !== displayAtmosphere.id) {
        // Fade out
        setFadeOpacity(0);
        const timer = setTimeout(() => {
          setDisplayAtmosphere(activeAtmosphere);
          // Fade in
          setFadeOpacity(1);
        }, 400); // 400ms matches specs perfectly (350-450ms)
        return () => clearTimeout(timer);
      }
    }
  }, [activeAtmosphere, displayAtmosphere]);

  // Robust Scroll tracking & Sticky Navbar activation
  useEffect(() => {
    const getElementAbsoluteTop = (el: HTMLElement | null): number => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      return rect.top + window.scrollY;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Determine if Navbar is sticky (when past the Hero title height)
      if (scrollY > 260) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Check sections and calculate viewport coverage
      const morningEl = document.getElementById('morning-concept');
      const menuEl = document.getElementById('menu');
      const reviewsEl = document.getElementById('reviews');
      const hoursEl = document.getElementById('hours-location');

      const morningTop = morningEl ? getElementAbsoluteTop(morningEl) : 800;
      const menuTop = menuEl ? getElementAbsoluteTop(menuEl) : 1800;
      const reviewsTop = reviewsEl ? getElementAbsoluteTop(reviewsEl) : 2800;
      const hoursTop = hoursEl ? getElementAbsoluteTop(hoursEl) : 3800;

      let currentActive = '';
      
      // We look at the section occupying the center-to-upper area of the viewport (45% threshold)
      const viewportCenter = scrollY + window.innerHeight * 0.45;

      if (viewportCenter < morningTop) {
        currentActive = '';
      } else if (viewportCenter >= morningTop && viewportCenter < menuTop) {
        currentActive = 'morning-concept';
      } else if (viewportCenter >= menuTop && viewportCenter < reviewsTop) {
        currentActive = 'menu';
      } else if (viewportCenter >= reviewsTop && viewportCenter < hoursTop) {
        currentActive = 'reviews';
      } else if (viewportCenter >= hoursTop) {
        currentActive = 'hours-location';
      }

      // If at the very top of page (Hero section), no nav button is active
      if (scrollY < 150) {
        setActiveSection('');
      } else {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;
      // Subtract header height if sticky
      const scrollOffset = isSticky ? offsetTop - 60 : offsetTop - 80;
      
      window.scrollTo({
        top: Math.max(0, scrollOffset),
        behavior: 'smooth'
      });
    }
  };

  // Theme styling for Morning Concept wrapper
  // We extract colors directly from the currently active atmosphere to dynamically shift background
  const morningBgStyle = displayAtmosphere ? displayAtmosphere.bgColor : '#F5F9E5';
  const morningTextStyle = displayAtmosphere ? displayAtmosphere.textColor : '#620607';
  const morningAccentStyle = displayAtmosphere ? displayAtmosphere.accentColor : '#C63E4E';

  return (
    <div className="min-h-screen bg-[#F5F9E5] text-[#620607] transition-colors duration-1000 ease-in-out">
      
      {/* ============================================================
          1. HERO SECTION
         ============================================================ */}
      <section 
        id="hero" 
        className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center bg-[#F5F9E5] text-[#620607] px-6 select-none overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center flex-1 py-12">
          {/* Main Hero H1 with custom staggered fades on load */}
          <motion.h1 
            id="hero-title"
            className="text-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#620607]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Cloud 777 Cafe
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.p 
            id="hero-subtitle"
            className="text-sans text-xs sm:text-sm md:text-base font-light tracking-widest uppercase text-[#C63E4E] mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          >
            Breakfast &bull; Brunch &bull; Coffee
          </motion.p>

          {/* Navigation Bar positioned comfortably below title */}
          <motion.div
            id="hero-nav-container"
            className="mt-12 sm:mt-16 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
          >
            <Navbar 
              activeSection={activeSection} 
              onNavigate={scrollToSection} 
              isSticky={isSticky} 
            />
          </motion.div>
        </div>

        {/* Scroll down indicator accent */}
        <motion.div 
          className="pb-8 opacity-60 hover:opacity-100 cursor-pointer flex flex-col items-center gap-1"
          onClick={() => scrollToSection('morning-concept')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <span className="text-mono text-[10px] uppercase tracking-widest text-[#C63E4E]">
            Scroll to begin
          </span>
          <ArrowDown className="w-4 h-4 text-[#C63E4E] animate-bounce" strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* ============================================================
          2. MORNING CONCEPT SECTION (Ambience Controller)
         ============================================================ */}
      <section 
        id="morning-concept" 
        className="relative scroll-mt-24 py-24 min-h-[85vh] flex flex-col justify-center overflow-hidden transition-all duration-1000 ease-in-out"
        style={{
          backgroundColor: morningBgStyle,
          color: morningTextStyle,
          transition: 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Cinematic ambient background gradient layer using strictly palette colors */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at 85% 50%, ${morningAccentStyle}15, transparent 55%), radial-gradient(circle at 15% 85%, ${morningBgStyle === '#620607' ? '#E19184' : morningAccentStyle}08, transparent 45%)`,
            transition: 'background 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* Ambient lighting soft glow circles using palette colors */}
        <div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none transition-all duration-1000 mix-blend-multiply opacity-25"
          style={{
            backgroundColor: morningAccentStyle,
            transition: 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-[-150px] w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none transition-all duration-1000 mix-blend-screen opacity-15"
          style={{
            backgroundColor: morningBgStyle === '#620607' ? '#E19184' : '#620607',
            transition: 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* LEFT SIDE PANEL (Static typography, Fading atmosphere descriptions) */}
          <div className="space-y-8 select-none max-w-lg md:pr-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <div 
                  className="h-[1px] w-12 transition-all duration-1000" 
                  style={{ 
                    backgroundColor: morningAccentStyle,
                    opacity: 0.7,
                    transition: 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                <span className="text-sans text-[10px] uppercase tracking-[0.2em] font-semibold opacity-80">
                  Auckland, NZ
                </span>
              </div>
              <h2 className="text-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Morning Concept
              </h2>
              <p className="text-serif text-lg md:text-xl italic font-light opacity-85">
                "Every morning has its own atmosphere."
              </p>
            </div>

            {/* Dynamic cross-fading area driven by active item */}
            <div 
              className="pt-8 space-y-4 transition-all duration-1000"
              style={{ 
                opacity: fadeOpacity,
                borderTop: `1px solid ${morningAccentStyle}25`,
                transition: 'opacity 350ms, border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="flex items-center gap-3">
                <span 
                  className="w-2.5 h-2.5 rounded-full animate-pulse transition-all duration-1000" 
                  style={{ 
                    backgroundColor: morningAccentStyle,
                    boxShadow: `0 0 12px ${morningAccentStyle}`,
                    transition: 'background-color 1000ms, box-shadow 1000ms'
                  }}
                />
                <span className="text-mono text-[11px] uppercase tracking-widest font-semibold">
                  Active Ambience
                </span>
              </div>
              
              <h3 className="text-serif text-2xl md:text-3xl font-light">
                {displayAtmosphere?.title}
              </h3>
              
              <p className="text-sans text-sm md:text-base font-light leading-relaxed opacity-90 max-w-md">
                {displayAtmosphere?.description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE PANEL (Oversized custom rotating circular gallery) */}
          {/* We define the inner div as "sunrise-rituals" so that scrolling over the carousel triggers "Sunrise Rituals" active nav state */}
          <div id="sunrise-rituals" className="scroll-mt-36 relative w-full h-full flex justify-center items-center">
            <Carousel onActiveChange={setActiveAtmosphere} />
          </div>

        </div>
      </section>

      {/* ============================================================
          3. MENU SECTION
         ============================================================ */}
      <MenuSection />

      {/* ============================================================
          4. REVIEWS SECTION
         ============================================================ */}
      <ReviewsSection />

      {/* ============================================================
          5. HOURS & LOCATION SECTION
         ============================================================ */}
      <HoursLocationSection />

      {/* ============================================================
          6. FOOTER SECTION
         ============================================================ */}
      <footer className="bg-[#620607] text-[#F5F9E5] border-t border-[#E19184]/15 py-12 select-none">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-serif text-lg font-light tracking-wide text-[#F5F9E5]">
              Cloud 777 Cafe
            </h4>
            <p className="text-sans text-xs text-[#E19184] font-light">
              Premium Breakfast, Brunch & Coffee &bull; Auckland, NZ
            </p>
          </div>
          <p className="text-mono text-[10px] text-[#F5F9E5]/60 tracking-wider">
            &copy; 2026 Cloud 777 Cafe. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
