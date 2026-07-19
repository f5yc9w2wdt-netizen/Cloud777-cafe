import React, { useEffect, useState, useRef } from 'react';
import { 
  Coffee, 
  Leaf, 
  Sun, 
  Armchair, 
  MessageSquare, 
  Croissant, 
  Sparkles, 
  Heart, 
  Calendar, 
  Box,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AtmosphereItem } from '../types';

// Let's configure the 10 atmosphere elements
const ATMOSPHERES: AtmosphereItem[] = [
  {
    id: 'coffee-aroma',
    title: 'Freshly Brewed Coffee Aroma',
    description: 'The rich, warming scent of premium roasted beans fills the morning air.',
    iconName: 'Coffee',
    bgColor: '#475B35', // Garden Green
    textColor: '#F5F9E5', // Amnesiac White
    accentColor: '#E19184' // Coral Haze
  },
  {
    id: 'timber-interior',
    title: 'Warm Timber Interior',
    description: 'Handcrafted wooden finishes capture the soft morning glow.',
    iconName: 'Box',
    bgColor: '#F5F9E5', // Amnesiac White
    textColor: '#620607', // Vampire Hunter
    accentColor: '#C63E4E' // Calypso Berry
  },
  {
    id: 'natural-light',
    title: 'Morning Natural Light',
    description: 'Gentle sunlight filters through the floor-to-ceiling windows.',
    iconName: 'Sun',
    bgColor: '#E19184', // Coral Haze
    textColor: '#620607', // Vampire Hunter
    accentColor: '#F5F9E5' // Amnesiac White
  },
  {
    id: 'fresh-greenery',
    title: 'Fresh Greenery',
    description: 'Lush potted botanicals bring a touch of nature indoors.',
    iconName: 'Leaf',
    bgColor: '#C63E4E', // Calypso Berry
    textColor: '#F5F9E5', // Amnesiac White
    accentColor: '#E19184' // Coral Haze
  },
  {
    id: 'comfy-seating',
    title: 'Comfortable Seating',
    description: 'Deep, welcoming booths designed for lingering over conversations.',
    iconName: 'Armchair',
    bgColor: '#620607', // Vampire Hunter
    textColor: '#F5F9E5', // Amnesiac White
    accentColor: '#E19184' // Coral Haze
  },
  {
    id: 'conversations',
    title: 'Quiet Conversations',
    description: 'A peaceful hum of locals starting their day together.',
    iconName: 'MessageSquare',
    bgColor: '#475B35', // Garden Green
    textColor: '#F5F9E5', // Amnesiac White
    accentColor: '#E19184' // Coral Haze
  },
  {
    id: 'pastries',
    title: 'Fresh Pastries',
    description: 'Golden, flaky croissants baked fresh in our kitchen daily.',
    iconName: 'Croissant',
    bgColor: '#F5F9E5', // Amnesiac White
    textColor: '#620607', // Vampire Hunter
    accentColor: '#C63E4E' // Calypso Berry
  },
  {
    id: 'calm-brunch',
    title: 'Calm Brunch Atmosphere',
    description: 'A relaxed rhythm that invites you to slow down.',
    iconName: 'Sparkles',
    bgColor: '#E19184', // Coral Haze
    textColor: '#620607', // Vampire Hunter
    accentColor: '#F5F9E5' // Amnesiac White
  },
  {
    id: 'community',
    title: 'Local Community',
    description: 'The heart of Auckland’s morning routine for friends and neighbors.',
    iconName: 'Heart',
    bgColor: '#C63E4E', // Calypso Berry
    textColor: '#F5F9E5', // Amnesiac White
    accentColor: '#E19184' // Coral Haze
  },
  {
    id: 'weekend-mornings',
    title: 'Weekend Mornings',
    description: 'Slow, sun-drenched hours made for perfect relaxation.',
    iconName: 'Calendar',
    bgColor: '#620607', // Vampire Hunter
    textColor: '#F5F9E5', // Amnesiac White
    accentColor: '#E19184' // Coral Haze
  }
];

const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Coffee': return <Coffee className={className} strokeWidth={1.2} />;
    case 'Box': return <Box className={className} strokeWidth={1.2} />;
    case 'Sun': return <Sun className={className} strokeWidth={1.2} />;
    case 'Leaf': return <Leaf className={className} strokeWidth={1.2} />;
    case 'Armchair': return <Armchair className={className} strokeWidth={1.2} />;
    case 'MessageSquare': return <MessageSquare className={className} strokeWidth={1.2} />;
    case 'Croissant': return <Croissant className={className} strokeWidth={1.2} />;
    case 'Sparkles': return <Sparkles className={className} strokeWidth={1.2} />;
    case 'Heart': return <Heart className={className} strokeWidth={1.2} />;
    case 'Calendar': return <Calendar className={className} strokeWidth={1.2} />;
    default: return <Coffee className={className} strokeWidth={1.2} />;
  }
};

interface CarouselProps {
  onActiveChange: (active: AtmosphereItem) => void;
}

export default function Carousel({ onActiveChange }: CarouselProps) {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeIndexRef = useRef<number>(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Refs to allow smooth requestAnimationFrame interpolation
  const targetRotationRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);
  const isInteractingRef = useRef<boolean>(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handler to pause auto-rotation when user interacts
  const registerInteraction = () => {
    isInteractingRef.current = true;
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      // Align target to avoid a sudden jump when continuous mode resumes
      targetRotationRef.current = currentRotationRef.current;
    }, 7000); // 7 seconds pause
  };

  // Click a specific card: rotate the shortest path to align it to the active position (180 degrees)
  const handleItemClick = (idx: number) => {
    registerInteraction();
    const itemAngleOffset = idx * 36;
    const targetBase = itemAngleOffset - 180;

    // Normalize difference to find the shortest angular path
    const current = targetRotationRef.current;
    let diff = targetBase - current;
    diff = ((diff + 180) % 360);
    if (diff < 0) diff += 360;
    diff -= 180;

    targetRotationRef.current = current + diff;
  };

  // Next and Prev handlers
  const handleNext = () => {
    registerInteraction();
    // Rotate counter-clockwise (brings next items into view)
    targetRotationRef.current += 36;
  };

  const handlePrev = () => {
    registerInteraction();
    // Rotate clockwise
    targetRotationRef.current -= 36;
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  // Smooth frame loop interpolator
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!isInteractingRef.current) {
        // Continuous, slightly faster idle rotation for a more alive feel
        targetRotationRef.current += 0.055;
      }

      // Butter-smooth ease-out interpolation
      const diff = targetRotationRef.current - currentRotationRef.current;
      currentRotationRef.current += diff * 0.06;

      // Ensure rotation is bounded nicely for rendering
      const renderedRotation = ((currentRotationRef.current % 360) + 360) % 360;
      setRotation(renderedRotation);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Compute active item based on physical screen position closest to 180 degrees (the leftmost area)
  useEffect(() => {
    let minDistance = 360;
    let currentActiveIdx = 0;

    ATMOSPHERES.forEach((item, idx) => {
      const itemAngleOffset = idx * 36;
      // Angular coordinate on screen
      const currentAngle = (((itemAngleOffset - rotation) % 360) + 360) % 360;
      // Distance from the active 180 degrees viewport angle
      let dist = Math.abs(currentAngle - 180);
      if (dist > 180) dist = 360 - dist;

      if (dist < minDistance) {
        minDistance = dist;
        currentActiveIdx = idx;
      }
    });

    if (currentActiveIdx !== activeIndexRef.current) {
      activeIndexRef.current = currentActiveIdx;
      setActiveIndex(currentActiveIdx);
      onActiveChange(ATMOSPHERES[currentActiveIdx]);
    }
  }, [rotation, onActiveChange]);

  // Dynamic active color mapping helper to smoothly style accents from the uploaded palette
  const getActiveColors = () => {
    const activeItem = ATMOSPHERES[activeIndex];
    if (!activeItem) return { bg: '#F5F9E5', text: '#620607', accent: '#C63E4E' };

    return {
      bg: activeItem.bgColor,
      text: activeItem.textColor,
      accent: activeItem.accentColor
    };
  };

  const colors = getActiveColors();

  return (
    <div className="carousel-ring relative w-full h-[400px] sm:h-[500px] md:h-[650px] flex items-center justify-center overflow-visible select-none">
      <style>{`
        .carousel-ring {
          --item-size: 85px;
          --item-half-size: 42.5px;
          --item-radius: min(72vw, 425px);
          --ring-size: min(150vw, 950px);
          --ring-right: calc(-1 * min(90vw, 550px));
        }
        @media (min-width: 640px) {
          .carousel-ring {
            --item-size: 105px;
            --item-half-size: 52.5px;
            --item-radius: min(68vw, 425px);
            --ring-size: min(140vw, 950px);
            --ring-right: calc(-1 * min(82vw, 550px));
          }
        }
        @media (min-width: 768px) {
          .carousel-ring {
            --item-size: 125px;
            --item-half-size: 62.5px;
            --item-radius: min(62vw, 425px);
            --ring-size: 950px;
            --ring-right: -550px;
          }
        }
      `}</style>
      
      {/* Giant Rotating Circle Container: cropped deeply off-screen */}
      <div 
        className="absolute rounded-full flex items-center justify-center transition-all duration-1000"
        style={{
          width: 'var(--ring-size)',
          height: 'var(--ring-size)',
          transform: isMobile 
            ? `rotate3d(0, 0, 1, -${rotation}deg)` 
            : `rotate(-${rotation}deg)`,
          right: 'var(--ring-right)',
          border: `1px solid ${colors.accent}20`,
          transition: 'border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Inner track styling */}
        <div 
          className="absolute inset-12 rounded-full border border-dashed transition-all duration-1000" 
          style={{ 
            borderColor: `${colors.accent}15`,
            transition: 'border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* Center Aesthetic Disk (mostly empty to preserve negative space) */}
        <div 
          className="absolute w-28 h-28 rounded-full flex items-center justify-center transition-all duration-1000"
          style={{ 
            backgroundColor: `${colors.accent}05`, 
            border: `1px solid ${colors.accent}15`,
            transition: isMobile
              ? 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
              : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div 
            className="w-16 h-16 rounded-full border border-dashed animate-spin-slow transition-all duration-1000" 
            style={{ 
              borderColor: `${colors.accent}30`,
              transition: 'border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </div>

        {/* Circularly Distributed Cards */}
        {ATMOSPHERES.map((item, idx) => {
          const itemAngleOffset = idx * 36;
          const isActive = activeIndex === idx;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(idx)}
              className="absolute focus:outline-hidden cursor-pointer"
              style={{
                transform: isMobile
                  ? `rotate(${itemAngleOffset}deg) translate3d(calc(var(--item-radius) - var(--item-half-size)), 0px, 0px) rotate(-${itemAngleOffset}deg) rotate(${rotation}deg)`
                  : `rotate(${itemAngleOffset}deg) translate(calc(var(--item-radius) - var(--item-half-size))) rotate(-${itemAngleOffset}deg) rotate(${rotation}deg)`,
                width: 'var(--item-size)',
                height: 'var(--item-size)',
                transition: isMobile ? 'none' : 'transform 300ms ease-out',
              }}
            >
              <div 
                className="w-full h-full rounded-2xl p-2 sm:p-4 flex flex-col items-center justify-center text-center shadow-xs"
                style={{
                  backgroundColor: isActive ? '#F5F9E5' : `${item.bgColor}22`,
                  color: isActive ? '#620607' : `${item.textColor}a0`,
                  border: `1px solid ${isActive ? colors.accent : `${item.accentColor}25`}`,
                  transform: isMobile
                    ? (isActive ? 'scale3d(1.12, 1.12, 1)' : 'scale3d(1, 1, 1)')
                    : (isActive ? 'scale(1.12)' : 'scale(1)'),
                  boxShadow: isActive ? `0 12px 24px -6px ${colors.accent}30` : 'none',
                  transition: isMobile
                    ? 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), color 1000ms cubic-bezier(0.4, 0, 0.2, 1), border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1000ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
                    : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {renderIcon(item.iconName, `w-6 h-6 sm:w-7 sm:h-7 mb-1 sm:mb-2 transition-all duration-1000 ${isActive ? 'scale-110' : 'opacity-70'}`)}
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-sans tracking-wider leading-tight font-medium uppercase">
                  {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Exquisite Minimalist Overlay controls to rotate backward/forward */}
      <div 
        className="absolute left-0 bottom-4 lg:bottom-16 z-30 flex items-center gap-3 p-2 rounded-full border transition-all duration-1000 shadow-sm"
        style={{
          backgroundColor: `${colors.bg}e0`,
          borderColor: `${colors.accent}25`,
          backdropFilter: 'blur(8px)',
          transition: isMobile
            ? 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
            : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <button 
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-1000 cursor-pointer"
          style={{
            backgroundColor: colors.bg,
            color: colors.text,
            borderColor: `${colors.accent}30`,
            transition: isMobile
              ? 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), color 1000ms cubic-bezier(0.4, 0, 0.2, 1), border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
              : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          title="Previous Ambience (Rotate backward)"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <div 
          className="text-mono text-[9px] tracking-widest uppercase px-1 transition-all duration-1000"
          style={{ 
            color: colors.text,
            opacity: 0.75,
            transition: 'color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          Explore
        </div>
        <button 
          onClick={handleNext}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-1000 cursor-pointer"
          style={{
            backgroundColor: colors.bg,
            color: colors.text,
            borderColor: `${colors.accent}30`,
            transition: isMobile
              ? 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), color 1000ms cubic-bezier(0.4, 0, 0.2, 1), border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
              : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          title="Next Ambience (Rotate forward)"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>

    </div>
  );
}

