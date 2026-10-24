import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, Sword, Shirt, Shield, Gamepad2, Globe, Flame, Award } from 'lucide-react';
import { FAVORITE_ANIMES, AnimeFavorite } from '../../data/animeData.ts';

interface AnimeFavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnimeFavoritesModal: React.FC<AnimeFavoritesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedRank, setSelectedRank] = useState<number>(1);
  const selectedAnime: AnimeFavorite =
    FAVORITE_ANIMES.find((a) => a.rank === selectedRank) || FAVORITE_ANIMES[0];

  const getCharacterIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Sword className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Shirt className="w-5 h-5 text-pink-400" />;
      case 3:
        return <Shield className="w-5 h-5 text-teal-400" />;
      case 4:
        return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      case 5:
        return <Globe className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#111113] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[44px] p-5 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA] my-auto max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer z-30"
              aria-label="Хаах"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-6 sm:mb-8 pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#B600A8] font-bold mb-2">
                <Flame className="w-3.5 h-3.5 text-[#B600A8] fill-[#B600A8]" />
                <span>Албан Ёсны Дүрүүд ба Урлаг</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                Дуртай 5 Анимэ ба Хамгийн Iconic Дүрүүд
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xl">
                Zoro, Marin, Deku, Jirou, Alya нарын албан ёсны анимэ арт, сэтгэлд хоногшсон iconic төрх ба ишлэлүүд.
              </p>
            </div>

            {/* Top Selector Grid: 5 Animes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-8">
              {FAVORITE_ANIMES.map((anime) => {
                const isSelected = anime.rank === selectedRank;
                return (
                  <button
                    key={anime.rank}
                    onClick={() => setSelectedRank(anime.rank)}
                    className={`relative text-left p-2.5 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
                      isSelected
                        ? 'bg-white/15 border-white/40 shadow-xl scale-[1.03]'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2 relative z-10">
                      <span className="font-black text-xs sm:text-sm opacity-70">
                        №0{anime.rank}
                      </span>
                      {getCharacterIcon(anime.rank)}
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-white truncate w-full relative z-10">
                      {anime.title}
                    </div>
                    <div className="text-[11px] text-[#D7E2EA]/80 truncate mt-0.5 font-medium relative z-10">
                      {anime.favoriteCharacter}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Featured Active Anime Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white/[0.03] border border-white/10 rounded-[28px] sm:rounded-[36px] p-5 sm:p-8">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5"
                      style={{ background: selectedAnime.themeColor }}
                    >
                      <Award className="w-3.5 h-3.5" />
                      №{selectedAnime.rank} Байр
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white font-medium border border-white/10">
                      {selectedAnime.badgeTitle}
                    </span>
                    {selectedAnime.japaneseTitle && (
                      <span className="text-xs text-white/50 tracking-wider">
                        {selectedAnime.japaneseTitle}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mt-2">
                    {selectedAnime.title}
                  </h3>

                  {/* Character Highlight Box */}
                  <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold mb-1">
                      Хамгийн дуртай дүр:
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/10">
                        {getCharacterIcon(selectedAnime.rank)}
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-black text-white block">
                          {selectedAnime.favoriteCharacter}
                        </span>
                        <span className="text-xs text-white/60">
                          {selectedAnime.characterRole}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mt-4">
                    {selectedAnime.description}
                  </p>
                </div>

                {/* Quote block */}
                <div className="p-4 rounded-2xl border border-white/10 bg-black/50 relative overflow-hidden">
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#B600A8]" />
                    <span>Дүрийн сэтгэлд хоногшсон iconic ишлэл:</span>
                  </div>
                  <blockquote className="text-sm sm:text-base italic font-serif text-white/95 mt-1 leading-relaxed">
                    &ldquo;{selectedAnime.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Genre badges */}
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  <span className="text-xs text-white/40 uppercase tracking-wider mr-1">
                    Төрөл:
                  </span>
                  {selectedAnime.genre.map((g) => (
                    <span
                      key={g}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5 font-medium"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Iconic Character Visual Showcase */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div
                  className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/20 shadow-2xl group flex flex-col justify-between"
                  style={{
                    background: selectedAnime.accentGradient,
                    minHeight: '380px',
                  }}
                >
                  {/* Background Anime Banner */}
                  {selectedAnime.characterBanner && (
                    <img
                      src={selectedAnime.characterBanner}
                      alt={`${selectedAnime.title} banner`}
                      className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay pointer-events-none"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Top Bar with Number & Badge */}
                  <div className="relative z-10 p-5 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15">
                      Албан Ёсны Дүр
                    </span>
                    <span className="text-3xl font-black text-white/40 select-none">
                      0{selectedAnime.rank}
                    </span>
                  </div>

                  {/* Character Iconic Image (Centered with drop shadow) */}
                  <div className="relative z-10 flex items-center justify-center p-2 flex-1">
                    <img
                      src={selectedAnime.characterIconicImage}
                      alt={`${selectedAnime.favoriteCharacter} official anime art`}
                      className="max-h-[260px] sm:max-h-[300px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Bottom Character Info Banner */}
                  <div className="relative z-10 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <h4 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                      {selectedAnime.favoriteCharacter}
                    </h4>
                    <p className="text-xs text-white/80 font-medium mt-0.5">
                      {selectedAnime.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-white/50">
                Сонгогдсон: {selectedAnime.title} · {selectedAnime.favoriteCharacter}
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
      )}
    </AnimatePresence>
  );
};

export default AnimeFavoritesModal;
