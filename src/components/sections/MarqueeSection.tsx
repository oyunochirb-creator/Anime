import React, { useEffect, useRef, useState } from 'react';
import { MARQUEE_GIFS_ROW_1, MARQUEE_GIFS_ROW_2 } from '../../data/portfolioData.ts';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Row 1: Tripled for seamless scroll
  const row1Images = [...MARQUEE_GIFS_ROW_1, ...MARQUEE_GIFS_ROW_1, ...MARQUEE_GIFS_ROW_1];
  // Row 2: Tripled for seamless scroll
  const row2Images = [...MARQUEE_GIFS_ROW_2, ...MARQUEE_GIFS_ROW_2, ...MARQUEE_GIFS_ROW_2];

  // Moves RIGHT on scroll: translateX(offset - 200)
  const row1Transform = `translateX(${offset - 200}px)`;
  // Moves LEFT on scroll: translateX(-(offset - 200))
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: moves RIGHT */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
            transition: 'transform 0.05s linear',
          }}
        >
          {row1Images.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#161618] border border-white/5 shadow-lg"
            >
              <img
                src={src}
                alt="3D motion showcase artwork"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Row 2: moves LEFT */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
            transition: 'transform 0.05s linear',
          }}
        >
          {row2Images.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#161618] border border-white/5 shadow-lg"
            >
              <img
                src={src}
                alt="3D motion showcase artwork"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
