import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn.tsx';
import { AnimatedText } from '../ui/AnimatedText.tsx';
import { ContactButton } from '../ui/ContactButton.tsx';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenAnime: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  onOpenAnime,
}) => {
  const bioText =
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Corner 3D Decorative Floating Images */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D geometric object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D composition group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Center content container */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Interactive Anime Pill Trigger on top of heading */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <button
            type="button"
            onClick={onOpenAnime}
            className="group mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-[#D7E2EA] transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8] animate-pulse" />
            <span>Дуртай 5 анимэ ба дүрүүд</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#B600A8]/30 text-white font-mono font-bold">
              TOP 5
            </span>
          </button>
        </FadeIn>

        {/* Heading: Clickable to also open anime modal */}
        <FadeIn delay={0.05} y={40} duration={0.8}>
          <h2
            onClick={onOpenAnime}
            title="Дараад дуртай 5 анимэг харах"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center cursor-pointer hover:opacity-90 transition-opacity"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing: Gap between heading and text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph: character-by-character scroll-driven */}
        <div className="max-w-[560px] mx-auto px-4">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Spacing: Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Buttons Row: Contact button + Top 5 Anime Button */}
        <FadeIn delay={0.2} y={20} duration={0.7} className="flex flex-col sm:flex-row items-center gap-4">
          <ContactButton onClick={onOpenContact} />
          
          <button
            type="button"
            onClick={onOpenAnime}
            className="inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-3.5 md:px-10 md:py-4 rounded-full border-2 border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Heart className="w-4 h-4 text-[#ec4899] fill-[#ec4899]" />
            <span>Дуртай Анимэнүүд</span>
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
