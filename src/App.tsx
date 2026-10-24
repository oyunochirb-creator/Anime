import React, { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { MarqueeSection } from './components/sections/MarqueeSection.tsx';
import { AboutSection } from './components/sections/AboutSection.tsx';
import { ServicesSection } from './components/sections/ServicesSection.tsx';
import { ProjectsSection } from './components/sections/ProjectsSection.tsx';
import { FooterSection } from './components/sections/FooterSection.tsx';
import { ContactModal } from './components/ui/ContactModal.tsx';
import { AnimeFavoritesModal } from './components/ui/AnimeFavoritesModal.tsx';
import { EpisodeViewerModal } from './components/ui/EpisodeViewerModal.tsx';
import { ProjectItem } from './types/index.ts';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isAnimeOpen, setIsAnimeOpen] = useState<boolean>(false);
  const [selectedEpisodeProject, setSelectedEpisodeProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased relative selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
        onOpenAnime={() => setIsAnimeOpen(true)}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION - Opens Top 5 Anime with Iconic Characters */}
      <AboutSection
        onOpenContact={() => setIsContactOpen(true)}
        onOpenAnime={() => setIsAnimeOpen(true)}
      />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION - 3 Levels of Anime: Сонирхох (One Piece Ep 1), Дурлах, Гүн дурлах */}
      <ProjectsSection
        onOpenProjectModal={(project) => setSelectedEpisodeProject(project)}
      />

      {/* Footer Section */}
      <FooterSection onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Top 5 Anime Favorites with Iconic Character Art (Opens from About) */}
      <AnimeFavoritesModal
        isOpen={isAnimeOpen}
        onClose={() => setIsAnimeOpen(false)}
      />

      {/* Anime Episode & Posters Modal (One Piece Ep 1 / Anime Showcases) */}
      <EpisodeViewerModal
        project={selectedEpisodeProject}
        onClose={() => setSelectedEpisodeProject(null)}
      />
    </main>
  );
}
