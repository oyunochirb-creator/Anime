import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, ChevronDown, ChevronUp, Maximize2, Music, Heart, Calendar } from 'lucide-react';
import { InvitationData } from '../../types/bolzoo.ts';
import { COLOR_THEMES, FOOD_OPTIONS, ACTIVITY_OPTIONS } from '../../data/bolzooData.ts';

interface LiveMiniPreviewProps {
  invitation: InvitationData;
  onOpenFullPreview: () => void;
}

export const LiveMiniPreview: React.FC<LiveMiniPreviewProps> = ({
  invitation,
  onOpenFullPreview,
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const selectedTheme =
    COLOR_THEMES.find((t) => t.id === invitation.colorTheme) || COLOR_THEMES[0];

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[320px] w-full hidden sm:block select-none">
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-pink-200 shadow-2xl overflow-hidden font-body text-[#4A3E4E]"
      >
        {/* Header bar */}
        <div className="px-4 py-2.5 bg-gradient-to-r from-pink-100 via-white to-blue-100 border-b border-pink-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-[#FF4D82] font-rounded flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>Шууд харагдац</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onOpenFullPreview}
              className="p-1 rounded-lg hover:bg-pink-200/50 text-[#FF6B9D] transition-colors cursor-pointer"
              title="Бүтэн дэлгэцээр турших"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 rounded-lg hover:bg-pink-200/50 text-[#8B7489] transition-colors cursor-pointer"
              title={isMinimized ? 'Дэлгэх' : 'Хураах'}
            >
              {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Content Body */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-3.5 space-y-3"
            >
              {/* Mini Card Preview with active Top-to-Bottom gradient */}
              <div
                className={`p-4 rounded-2xl ${selectedTheme.bgGradientClass} border border-pink-200/80 shadow-inner text-center space-y-2 relative overflow-hidden transition-all duration-300`}
              >
                {/* Envelope Seal Icon */}
                <div className="w-8 h-8 mx-auto rounded-xl bg-white/90 grid place-items-center text-base shadow-sm">
                  💌
                </div>

                {/* Names */}
                <div>
                  <span className="text-[10px] text-[#8B7489] block font-medium">
                    {invitation.nickname ? invitation.nickname : (invitation.crushName || 'Хүлээн авагч')} 🌸
                  </span>
                  <div className="text-xs font-black text-[#4A3E4E] font-rounded line-clamp-2 leading-tight">
                    {invitation.headline || 'Хамтдаа болзоонд явах уу? ✨'}
                  </div>
                </div>

                {/* Message snippet */}
                <div className="p-2 rounded-xl bg-white/80 border border-pink-100 text-[11px] font-handwriting text-[#5D4E60] line-clamp-2 leading-snug">
                  &ldquo;{invitation.message || 'Чин сэтгэлийн захиа...'}&rdquo;
                </div>

                {/* Footer of mini card */}
                <div className="pt-1 flex items-center justify-between text-[10px] text-[#6E5A6D]">
                  <span className="font-bold truncate">Илгээгч: {invitation.senderName || 'Та'}</span>
                  {invitation.dateDay && (
                    <span className="text-[#FF4D82] font-extrabold truncate ml-1">
                      {invitation.dateDay}
                    </span>
                  )}
                </div>
              </div>

              {/* Music & Theme status */}
              <div className="p-2 rounded-xl bg-pink-50/60 border border-pink-200/60 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 truncate">
                  <Music className="w-3.5 h-3.5 text-[#FF6B9D] shrink-0" />
                  <span className="truncate text-[#5D4E60] font-medium">
                    {invitation.musicType === 'youtube' && invitation.youtubeQuery
                      ? `YouTube: ${invitation.youtubeQuery}`
                      : invitation.musicTitle}
                  </span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-[#FF4D82] font-bold border border-pink-200 shrink-0">
                  Vibe
                </span>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={onOpenFullPreview}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white text-xs font-black font-rounded shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Урилгыг бүтнээр турших</span>
                <span>↗</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LiveMiniPreview;
