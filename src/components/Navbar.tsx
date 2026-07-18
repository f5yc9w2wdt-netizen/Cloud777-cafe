import React from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isSticky: boolean;
}

export default function Navbar({ activeSection, onNavigate, isSticky }: NavbarProps) {
  const navItems = [
    { id: 'morning-concept', label: 'Morning Concept' },
    { id: 'sunrise-rituals', label: 'Sunrise Rituals' },
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'hours-location', label: 'Hours & Location' }
  ];

  return (
    <nav
      id="main-navigation"
      className={`w-full transition-all duration-500 ease-in-out z-50 ${
        isSticky
          ? 'fixed top-0 left-0 bg-[#F5F9E5]/95 backdrop-blur-sm border-b border-[#E19184]/20 py-3 shadow-xs'
          : 'relative py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <ul className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-4 md:gap-6 bg-white/40 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-[#E19184]/25 shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="list-none">
                <button
                  id={`nav-btn-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-[11px] font-sans tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer outline-none focus:outline-hidden ${
                    isActive
                      ? 'bg-[#C63E4E] text-white shadow-xs font-medium'
                      : 'text-[#620607] bg-transparent hover:text-[#C63E4E] opacity-70 hover:opacity-100 font-medium'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
