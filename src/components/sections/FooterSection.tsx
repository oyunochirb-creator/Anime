import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ContactButton } from '../ui/ContactButton.tsx';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-16 text-[#D7E2EA] relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-2xl font-black uppercase tracking-tight text-white">
            Ochko
          </span>
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 mt-1">
            3D Creator & Visual Designer
          </span>
          <p className="text-xs text-[#D7E2EA]/40 mt-3 max-w-sm">
            Crafting striking and unforgettable 3D models, renders, and motion graphics.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <ContactButton onClick={onOpenContact} />
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/5 cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/40">
        <span>© {new Date().getFullYear()} Ochko. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <span className="hover:text-white/80 transition-colors">Kanit Typography</span>
          <span>·</span>
          <span className="hover:text-white/80 transition-colors">3D Portfolio</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
