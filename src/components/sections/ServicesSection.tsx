import React from 'react';
import { SERVICES_DATA } from '../../data/portfolioData.ts';
import { FadeIn } from '../ui/FadeIn.tsx';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: Services */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items in vertical list */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              duration={0.7}
              y={30}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                {/* Left Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 select-none tracking-tight"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center gap-2 md:gap-3 flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
