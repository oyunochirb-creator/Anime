import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Tv, Sparkles, Film } from 'lucide-react';
import { ProjectItem } from '../../types/index.ts';

interface EpisodeViewerModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const EpisodeViewerModal: React.FC<EpisodeViewerModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  const isOnePieceEp1 = project.videoType === 'episode';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#111114] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[44px] p-5 sm:p-8 shadow-2xl z-10 text-[#D7E2EA] my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer z-30"
            aria-label="Хаах"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-2 pr-12">
            <span className="text-xs uppercase tracking-widest font-black px-3 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#ff77f3]">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-white/50 font-medium">
              №{project.number} Түвшин
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-white/70 max-w-2xl mb-6">
            {project.subtitle || project.description}
          </p>

          {/* Video Player Box */}
          <div className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/15 shadow-2xl relative mb-8 aspect-video">
            {project.videoEmbedUrl ? (
              <iframe
                src={project.videoEmbedUrl}
                title={`${project.title} - Video Stream`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-black/60">
                <Play className="w-16 h-16 text-[#B600A8] mb-3 animate-pulse" />
                <h4 className="text-lg font-bold text-white">
                  {isOnePieceEp1
                    ? 'One Piece — 1-р Анги: Намайг Луффи гэдэг! Далайн Дээрэмчдийн Хаан болох хүн!'
                    : `${project.title} Трейлер & Үзүүлбэр`}
                </h4>
                <p className="text-xs text-white/60 mt-1 max-w-md">
                  Видеон тоглуулагч бэлэн болж байна.
                </p>
              </div>
            )}
          </div>

          {/* Episode Info / Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-xs text-white/40 uppercase tracking-wider block">
                {isOnePieceEp1 ? 'Ангийн нэр' : 'Онцлох бүтээлүүд'}
              </span>
              <span className="text-sm font-bold text-white mt-1 block">
                {isOnePieceEp1
                  ? 'I’m Luffy! The Man Who’s Gonna Be King of the Pirates!'
                  : project.featuredAnime.join(', ')}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-xs text-white/40 uppercase tracking-wider block">
                Хэлбэр & Чанар
              </span>
              <span className="text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                <Tv className="w-4 h-4 text-emerald-400" />
                1080p HD · Албан Ёсны Стрим
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-xs text-white/40 uppercase tracking-wider block">
                Уран бүтээл
              </span>
              <span className="text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                <Film className="w-4 h-4 text-[#B600A8]" />
                {isOnePieceEp1 ? 'Toei Animation · Eiichiro Oda' : 'Masterpiece Studio Roster'}
              </span>
            </div>
          </div>

          {/* Posters Grid */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#B600A8]" />
              <h4 className="text-sm uppercase tracking-wider font-bold text-white">
                Энэхүү түвшний албан ёсны постерууд:
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 group relative">
                <img
                  src={project.images.col2Tall}
                  alt={project.images.col2TallTitle || 'Үндсэн Постер'}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-white">
                    {project.images.col2TallTitle || 'Үндсэн Постер'}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 group relative">
                <img
                  src={project.images.col1Top}
                  alt={project.images.col1TopTitle || 'Онцлох Постер 1'}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-white">
                    {project.images.col1TopTitle || 'Онцлох Постер 1'}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 group relative">
                <img
                  src={project.images.col1Bottom}
                  alt={project.images.col1BottomTitle || 'Онцлох Постер 2'}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-medium text-white">
                    {project.images.col1BottomTitle || 'Онцлох Постер 2'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <span className="text-xs text-white/50">
              {isOnePieceEp1
                ? 'Та One Piece 1-р ангийг шууд үзэж байна.'
                : `${project.title} - Сонгогдсон бүтээлүүдийн постер ба үзүүлбэр`}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
            >
              Хаах
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EpisodeViewerModal;
