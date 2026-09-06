import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ClientItem {
  id: number;
  name: string;
  image: string;
}

const CLIENT_ITEMS: ClientItem[] = [
  {
    id: 1,
    name: 'Unilever',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/unilever-vector-logo.png',
  },
  {
    id: 2,
    name: 'Olivia Cosmetics',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/21-removebg-preview.png',
  },
  {
    id: 3,
    name: "L'Or\u00E9al",
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/Loreal-logo.png',
  },
  {
    id: 4,
    name: 'Parley Cosmetics',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/cropped-Parley-Logo-v1-2.png',
  },
  {
    id: 5,
    name: 'Hilal Foods',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/hilal-foods-logo.png',
  },
  {
    id: 6,
    name: 'Forvil Cosmetics',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/10-removebg-preview.png',
  },
  {
    id: 7,
    name: 'Medora of London',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/27-removebg-preview.png',
  },
  {
    id: 8,
    name: 'Conatural',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/conatural_new_logo.png',
  },
  {
    id: 9,
    name: 'Bio-Cos International',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/39-removebg-preview.png',
  },
  {
    id: 10,
    name: 'Hemani Herbals',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/logo-1.png',
  },
  {
    id: 11,
    name: 'Saeed Ghani',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/34-removebg-preview.png',
  },
  {
    id: 12,
    name: 'Golden Pearl',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/t6.png',
  },
  {
    id: 13,
    name: 'Alupak',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/Alupak.png',
  },
  {
    id: 14,
    name: 'ALC Group',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/ALCLOGO.png',
  },
  {
    id: 15,
    name: 'United Tubes',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/United-Tubes-Logo.png',
  },
  {
    id: 16,
    name: 'Dawood Corporation',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/Dawood_Corporation_Logo.png',
  },
  {
    id: 17,
    name: 'Roomi',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/roomi-logo-1.png',
  },
  {
    id: 18,
    name: 'Swiss Image Partner',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/4-removebg-preview.png',
  },
];

export default function OurClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setVisibleCount(2);
      } else if (width < 768) {
        setVisibleCount(3);
      } else if (width < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = CLIENT_ITEMS.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 2500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, handleNext]);

  // Duplicate items for seamless infinite scroll
  const infiniteItems = [...CLIENT_ITEMS, ...CLIENT_ITEMS, ...CLIENT_ITEMS];
  const offset = currentIndex;

  return (
    <section
      id="clients-section"
      className="our-clients-sec py-12 md:py-16 bg-white overflow-hidden"
    >
      <div className="title text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] uppercase tracking-wide">
          Our Clients
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative">
        <div
          className="main-our-clients relative px-2 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Smooth sliding track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                transform: `translateX(-${offset * (100 / visibleCount)}%)`,
                willChange: 'transform',
              }}
            >
              {infiniteItems.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="clients-single-item shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="clients-img-main">
                    <a
                      href="#clients-section"
                      aria-label={`Client ${client.name}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="clients-img">
                        <img
                          src={client.image}
                          alt={client.name}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.opacity = '0.3';
                          }}
                        />
                      </span>

                      <span className="clients-hover-img">
                        <img
                          src={client.image}
                          alt={client.name}
                          loading="lazy"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous clients"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#234d77] text-white flex items-center justify-center shadow-md hover:bg-[#1a3d5e] transition-colors cursor-pointer z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next clients"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#234d77] text-white flex items-center justify-center shadow-md hover:bg-[#1a3d5e] transition-colors cursor-pointer z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
