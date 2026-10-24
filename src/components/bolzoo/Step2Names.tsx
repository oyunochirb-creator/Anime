import React from 'react';
import { ArrowLeft, ArrowRight, UserCheck, Heart, Sparkles } from 'lucide-react';

interface Step2NamesProps {
  crushName: string;
  senderName: string;
  nickname: string;
  onChangeCrushName: (val: string) => void;
  onChangeSenderName: (val: string) => void;
  onChangeNickname: (val: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Step2Names: React.FC<Step2NamesProps> = ({
  crushName,
  senderName,
  nickname,
  onChangeCrushName,
  onChangeSenderName,
  onChangeNickname,
  onPrev,
  onNext,
}) => {
  const quickNicknames = [
    'Хөөрхнөө 🌸',
    'Туулайхан 🐰',
    'Нархан ☀️',
    'Бамбарууш 🧸',
    'Миний сахиусан тэнгэр 👼',
    'Шоколадхан 🍫',
  ];

  const canProceed = crushName.trim().length > 0 && senderName.trim().length > 0;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-[#FF4D82] text-xs font-bold border border-pink-200">
          <Heart className="w-3.5 h-3.5 fill-[#FF4D82]" />
          <span>Алхам 2: Нэрсээ бичээрэй</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#4A3E4E] font-rounded tracking-tight">
          Урилгыг хэнд зориулах вэ? 💕
        </h2>
        <p className="text-sm text-[#7B6A7C] font-body">
          Түүний нэр болон өөрийн нэрээ оруулаарай.
        </p>
      </div>

      {/* Inputs Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-[32px] space-y-6">
        {/* Crush name */}
        <div>
          <label className="block text-sm font-bold text-[#4A3E4E] mb-2 font-rounded">
            Хүлээн авагчийн нэр (Crush эсвэл Хайрт) <span className="text-[#FF4D82]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Жишээ: Анударь, Тэмүүлэн..."
              value={crushName}
              onChange={(e) => onChangeCrushName(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#F8D7E2] text-[#4A3E4E] placeholder-[#B5A3B3] text-base focus:outline-none focus:border-[#FF6B9D] focus:ring-4 focus:ring-pink-100 transition-all font-body font-bold"
            />
            <span className="absolute right-4 top-3.5 text-xl">✨</span>
          </div>
        </div>

        {/* Sender name */}
        <div>
          <label className="block text-sm font-bold text-[#4A3E4E] mb-2 font-rounded">
            Таны нэр (Илгээгч) <span className="text-[#FF4D82]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Жишээ: Түүний нууц бишрэгч, Очхүү..."
              value={senderName}
              onChange={(e) => onChangeSenderName(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#F8D7E2] text-[#4A3E4E] placeholder-[#B5A3B3] text-base focus:outline-none focus:border-[#A0C4FF] focus:ring-4 focus:ring-blue-100 transition-all font-body font-bold"
            />
            <span className="absolute right-4 top-3.5 text-xl">💌</span>
          </div>
        </div>

        {/* Optional cute nickname */}
        <div>
          <label className="block text-sm font-bold text-[#4A3E4E] mb-2 font-rounded">
            Өхөөрдсөн тусгай нэр (Заавал биш)
          </label>
          <input
            type="text"
            placeholder="Жишээ: Миний туулайхан 🐰..."
            value={nickname}
            onChange={(e) => onChangeNickname(e.target.value)}
            className="w-full px-5 py-3 rounded-2xl bg-white/70 border border-[#F8D7E2] text-[#4A3E4E] placeholder-[#B5A3B3] text-sm focus:outline-none focus:border-[#FF6B9D] transition-all font-body"
          />

          {/* Quick buttons */}
          <div className="flex items-center gap-1.5 flex-wrap mt-2.5">
            <span className="text-xs text-[#8B7489] mr-1">Шууд сонгох:</span>
            {quickNicknames.map((nick) => (
              <button
                key={nick}
                type="button"
                onClick={() => onChangeNickname(nick)}
                className="text-xs px-2.5 py-1 rounded-full bg-pink-50 hover:bg-pink-100 text-[#FF6B9D] border border-pink-200/80 transition-colors cursor-pointer"
              >
                {nick}
              </button>
            ))}
          </div>
        </div>

        {/* Live preview banner */}
        {crushName && senderName && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-white to-blue-50 border border-pink-200 text-center animate-in fade-in">
            <span className="text-xs uppercase tracking-wider text-[#FF6B9D] font-bold block mb-1">
              Урилгын хаяглалт:
            </span>
            <div className="text-base sm:text-lg font-black text-[#4A3E4E] font-rounded">
              {nickname ? `${nickname} (${crushName})` : crushName} 💖 {senderName}-с
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#F8D7E2] text-[#6E5A6D] text-sm font-bold hover:bg-pink-50 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Буцах</span>
        </button>

        <button
          type="button"
          disabled={!canProceed}
          onClick={onNext}
          className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white text-sm sm:text-base font-black font-rounded shadow-lg shadow-pink-200/80 hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <span>Дараах: Өнгө, дуу</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Step2Names;
