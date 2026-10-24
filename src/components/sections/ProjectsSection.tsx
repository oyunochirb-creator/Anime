import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/portfolioData.ts';
import { ProjectItem } from '../../types/index.ts';
import { FadeIn } from '../ui/FadeIn.tsx';
import { LiveProjectButton } from '../ui/LiveProjectButton.tsx';
import { Play, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenLiveProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
  onOpenLiveProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[88vh] flex items-start justify-center sticky top-20 sm:top-24 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 md:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {project.number}
            </span>

            {/* Category */}
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#B600A8] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10">
              [{project.category}]
            </span>

            {/* Project Name (Анимег сонирхох, Анименд дурлах, Анименд гүн дурлах) */}
            <div>
              <h3
                className="font-black uppercase tracking-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.3rem)' }}
              >
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs text-white/60 hidden sm:block mt-0.5">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Live Project Button (1-р анги үзэх) */}
          <div className="flex items-center gap-2">
            <LiveProjectButton
              onClick={() => onOpenLiveProject(project)}
              label={project.id === 'project-1' ? '1-р анги үзэх · Live Project' : 'Live Project'}
            />
          </div>
        </div>

        {/* Bottom Row: 2-column image grid of anime posters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 pt-4 md:pt-6 items-stretch">
          {/* Left Column (40% width -> md:col-span-5) with 2 stacked poster images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-6 justify-between">
            {/* Left Top image */}
            <div
              className="w-full rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-[#161618] border border-white/10 relative group cursor-pointer"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onOpenLiveProject(project)}
            >
              <img
                src={project.images.col1Top}
                alt={project.images.col1TopTitle || `${project.title} poster 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs sm:text-sm font-bold text-white drop-shadow">
                  {project.images.col1TopTitle || 'Постер 1'}
                </span>
              </div>
            </div>

            {/* Left Bottom image */}
            <div
              className="w-full rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-[#161618] border border-white/10 relative group cursor-pointer"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onOpenLiveProject(project)}
            >
              <img
                src={project.images.col1Bottom}
                alt={project.images.col1BottomTitle || `${project.title} poster 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs sm:text-sm font-bold text-white drop-shadow">
                  {project.images.col1BottomTitle || 'Постер 2'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (60% width -> md:col-span-7) with 1 tall hero anime poster */}
          <div
            className="md:col-span-7 w-full h-[300px] sm:h-[380px] md:h-auto min-h-full rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-[#161618] border border-white/10 relative group cursor-pointer"
            onClick={() => onOpenLiveProject(project)}
          >
            <img
              src={project.images.col2Tall}
              alt={project.images.col2TallTitle || `${project.title} main poster`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Overlay banner */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-[#B600A8] text-white">
                  Үндсэн Постер
                </span>
                {project.id === 'project-1' && (
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500 text-black flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 fill-black" />
                    Episode 1 Ready
                  </span>
                )}
              </div>
              <h4 className="text-lg sm:text-2xl font-black text-white">
                {project.images.col2TallTitle || project.title}
              </h4>
              <p className="text-xs text-white/70 line-clamp-1 mt-0.5">
                {project.featuredAnime.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = PROJECTS_DATA.length;

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      {/* Heading: Project */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24 flex flex-col items-center justify-center text-center">
        <FadeIn delay={0} y={40} duration={0.8}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#B600A8] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Анимегийн 3 Түвшин</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
          <p className="text-xs sm:text-base text-white/60 max-w-lg mt-3">
            Анимег анх сонирхохоос эхлээд сэтгэл зүрхээрээ гүн дурлах хүртэлх 3 шатны постер ба үзүүлбэрүүд.
          </p>
        </FadeIn>
      </div>

      {/* 3 Stacking Project Cards */}
      <div className="max-w-6xl mx-auto flex flex-col">
        {PROJECTS_DATA.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const range: [number, number] = [index / totalCards, 1];

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
              onOpenLiveProject={onOpenProjectModal}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
