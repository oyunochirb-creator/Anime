import React from 'react';
import { PURPOSES, PurposeOption } from '../../data/bolzooData.ts';
import { InvitationPurpose } from '../../types/bolzoo.ts';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

interface Step1TemplateProps {
  selectedPurpose: InvitationPurpose;
  onSelect: (purpose: InvitationPurpose) => void;
  onNext: () => void;
}

export const Step1Template: React.FC<Step1TemplateProps> = ({
  selectedPurpose,
  onSelect,
  onNext,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Intro hero banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-[#FF4D82] text-xs font-bold border border-pink-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Алхам 1: Загвараа сонгоорой</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#4A3E4E] font-rounded tracking-tight">
          Хэлэх үгээ <span className="text-[#FF6B9D]">онцгой</span> хүргэе 💌
        </h1>
        <p className="text-sm sm:text-base text-[#7B6A7C] max-w-xl mx-auto font-body">
          Crush-даа зориулсан хөөрхөн болзоо юу, эсвэл хайрттайгаа эвлэрэх чин сэтгэлийн захиа юу? Сонголтоо хийгээд эхлээрэй.
        </p>
      </div>

      {/* Purpose cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {PURPOSES.map((option: PurposeOption) => {
          const isSelected = option.id === selectedPurpose;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`text-left p-5 sm:p-6 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? 'border-[#FF6B9D] bg-white shadow-xl shadow-pink-200/50 scale-[1.01]'
                  : 'border-[#F8D7E2] bg-white/70 hover:bg-white hover:border-[#FFB3C6] shadow-sm'
              }`}
            >
              {/* Top tag & icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
                  {option.icon}
                </span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-extrabold ${
                    isSelected
                      ? 'bg-[#FF4D82] text-white shadow-sm'
                      : 'bg-pink-50 text-[#FF6B9D] border border-pink-100'
                  }`}
                >
                  {option.tag}
                </span>
              </div>

              {/* Title & description */}
              <h3 className="text-lg sm:text-xl font-black text-[#4A3E4E] font-rounded mb-2">
                {option.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#7B6A7C] leading-relaxed font-body">
                {option.description}
              </p>

              {/* Preview bubble */}
              <div className="mt-4 pt-3 border-t border-[#F8D7E2]/70 flex items-center justify-between text-xs text-[#8B7489]">
                <span className="truncate pr-2 font-handwriting text-base text-[#FF6B9D]">
                  &ldquo;{option.defaultHeadline}&rdquo;
                </span>
                <span className="text-[#A0C4FF] font-bold group-hover:translate-x-1 transition-transform shrink-0">
                  Сонгох →
                </span>
              </div>

              {/* Selected badge overlay */}
              {isSelected && (
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                  <div className="absolute transform rotate-45 bg-[#FF6B9D] text-white text-[9px] font-bold py-0.5 right-[-35px] top-[18px] w-[120px] text-center shadow-sm">
                    СОНГОСОН
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Next step button */}
      <div className="flex justify-center pt-4">
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2.5 px-8 sm:px-12 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white text-base sm:text-lg font-black font-rounded shadow-lg shadow-pink-200/80 hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Дараах: Нэрс оруулах</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Step1Template;
