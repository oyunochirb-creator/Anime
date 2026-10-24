import React from 'react';
import { motion } from 'framer-motion';
import { Magnet } from '../ui/Magnet.tsx';
import { ContactButton } from '../ui/ContactButton.tsx';

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenAnime: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
  onOpenAnime,
}) => {
  const portraitUrl =
    'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Price', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'contact') {
      onOpenContact();
    } else if (id === 'about') {
      onNavigate('about');
      // Хэрэглэгчийн "about хэсэгт дарахад гарж ирэхээр" шаардлагын дагуу:
      setTimeout(() => {
        onOpenAnime();
      }, 400);
    } else {
      onNavigate(id);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between bg-[#0C0C0C] select-none"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </motion.nav>

      {/* 2. Massive Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center text-center px-2 z-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none pointer-events-none"
        >
          Hi, i&apos;m jack
        </motion.h1>
      </div>

      {/* 3. Hero Portrait with Magnet - Centered absolutely */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="flex justify-center items-end"
        >
          <img
            src={portraitUrl}
            alt="Jack - 3D Creator portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </Magnet>
      </motion.div>

      {/* 4. Bottom bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        {/* Left paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </motion.p>

        {/* Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onOpenContact} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
