import React from 'react';
import { ArrowLeft, ArrowRight, Heart, Calendar, Clock, Utensils, Compass, Sparkles, CheckSquare, Square } from 'lucide-react';
import { FOOD_OPTIONS, ACTIVITY_OPTIONS } from '../../data/bolzooData.ts';

interface Step4LetterProps {
  headline: string;
  message: string;
  letRecipientChooseDate: boolean;
  suggestedDateDay: string;
  suggestedDateTime: string;
  selectedFoods: string[];
  selectedActivities: string[];
  onChangeHeadline: (val: string) => void;
  onChangeMessage: (val: string) => void;
  onChangeLetRecipientChooseDate: (val: boolean) => void;
  onChangeSuggestedDateDay: (val: string) => void;
  onChangeSuggestedDateTime: (val: string) => void;
  onToggleFood: (id: string) => void;
  onToggleActivity: (id: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Step4Letter: React.FC<Step4LetterProps> = ({
  headline,
  message,
  letRecipientChooseDate,
  suggestedDateDay,
  suggestedDateTime,
  selectedFoods,
  selectedActivities,
  onChangeHeadline,
  onChangeMessage,
  onChangeLetRecipientChooseDate,
  onChangeSuggestedDateDay,
  onChangeSuggestedDateTime,
  onToggleFood,
  onToggleActivity,
  onPrev,
  onNext,
}) => {
  const readyTemplates = [
    'Хэзээ уулзахаа, хамт юу хийхийг хүсэж байгаагаа чи өөрөө сонгоорой. Чамтай байхад бүх зүйл сайхан! 💖',
    'Энэ хагас сайнд кино үзээд, оройн салхинд гар бариад алхах уу? Чиний дуртай амттангаар дайлна аа ☕',
    'Уучлаарай, чамайгаа гомдоохыг хүсээгүй юм шүү. Надад цаг гаргаж өөрийн дуртай зүйлсээ сонгооч 🥺',
    'Би чамтай хамт цагийг өнгөрүүлэхийг маш их хүсдэг. Санал болгосон сонголтуудаас дуртайгаа чагтлаарай ✨',
  ];

  const canProceed = headline.trim().length > 0 && message.trim().length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-[#FF4D82] text-xs font-bold border border-pink-200">
          <Heart className="w-3.5 h-3.5 fill-[#FF4D82]" />
          <span>Алхам 4: Зурвас & Хамт хийх зүйлс</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#4A3E4E] font-rounded tracking-tight">
          Захиагаа бичиж, <span className="text-[#FF6B9D]">сонголтуудаа</span> бэлдье ✨
        </h2>
        <p className="text-sm text-[#7B6A7C] font-body">
          Хүлээн авагч тань урилгыг нээгээд <strong>хэзээ уулзах болон юу хийхээ өөрөө сонгох</strong> болно!
        </p>
      </div>

      {/* 1. Headline & Message */}
      <div className="glass-panel p-6 sm:p-8 rounded-[32px] space-y-5">
        <div>
          <label className="block text-sm font-bold text-[#4A3E4E] mb-2 font-rounded">
            Урилгын гол гарчиг <span className="text-[#FF4D82]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Жишээ: Хамтдаа болзоонд явах уу? 🥰"
            value={headline}
            onChange={(e) => onChangeHeadline(e.target.value)}
            className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#F8D7E2] text-[#4A3E4E] text-base sm:text-lg focus:outline-none focus:border-[#FF6B9D] font-bold font-rounded"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-bold text-[#4A3E4E] font-rounded">
              Таны сэтгэлийн үгс <span className="text-[#FF4D82]">*</span>
            </label>
            <span className="text-xs text-[#8B7489]">Гар бичмэлээр хөөрхөн харагдана</span>
          </div>
          <textarea
            required
            rows={4}
            placeholder="Энд чин сэтгэлийн үгээ бичээрэй..."
            value={message}
            onChange={(e) => onChangeMessage(e.target.value)}
            className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#F8D7E2] text-[#4A3E4E] text-base focus:outline-none focus:border-[#FF6B9D] resize-none font-body leading-relaxed"
          />

          {/* Quick message templates */}
          <div className="mt-3">
            <span className="text-xs text-[#8B7489] block mb-2 font-medium">
              ✿ Бэлэн үгсээс шууд сонгох:
            </span>
            <div className="space-y-1.5">
              {readyTemplates.map((tmp, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onChangeMessage(tmp)}
                  className="w-full text-left p-2.5 rounded-xl bg-pink-50/70 hover:bg-pink-100 text-xs text-[#5D4E60] border border-pink-200/60 transition-colors truncate block cursor-pointer"
                >
                  &ldquo;{tmp}&rdquo;
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. RECIPIENT CHOOSES DATE TOGGLE */}
      <div className="glass-panel p-6 sm:p-8 rounded-[32px] space-y-4">
        <div className="flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-100 text-[#FF4D82] grid place-items-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#4A3E4E] font-rounded">
                Уулзах өдөр, цагийг хүлээн авагч өөрөө сонгох
              </h3>
              <p className="text-xs text-[#7B6A7C]">
                Crush чинь урилгыг зөвшөөрөөд өөрт тохирох өдөр, цагаа өөрөө чагтлан илгээнэ.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onChangeLetRecipientChooseDate(!letRecipientChooseDate)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
              letRecipientChooseDate
                ? 'bg-[#FF4D82] text-white shadow-sm'
                : 'bg-gray-100 text-[#6E5A6D]'
            }`}
          >
            {letRecipientChooseDate ? '✓ Идэвхтэй (Өөрөө сонгоно)' : 'Илгээгч товлох'}
          </button>
        </div>

        {!letRecipientChooseDate && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#F8D7E2] animate-in fade-in">
            <div>
              <label className="block text-xs font-bold text-[#6E5A6D] mb-1.5 font-rounded">
                Санал болгох өдөр
              </label>
              <input
                type="text"
                placeholder="Жишээ: Энэ Бямба гарагт"
                value={suggestedDateDay}
                onChange={(e) => onChangeSuggestedDateDay(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-[#F8D7E2] text-sm focus:outline-none focus:border-[#FF6B9D] font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#6E5A6D] mb-1.5 font-rounded">
                Санал болгох цаг
              </label>
              <input
                type="text"
                placeholder="Жишээ: 18:00 цагт"
                value={suggestedDateTime}
                onChange={(e) => onChangeSuggestedDateTime(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-[#F8D7E2] text-sm focus:outline-none focus:border-[#FF6B9D] font-bold"
              />
            </div>
          </div>
        )}
      </div>

      {/* 3. EXTENDED ACTIVITIES SELECTION (16 сонголттой) */}
      <div className="glass-panel p-6 sm:p-8 rounded-[32px] space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#A0C4FF]" />
            <h3 className="text-base sm:text-lg font-bold text-[#4A3E4E] font-rounded">
              Хамт хийх үйл ажиллагааны санаанууд (Хүлээн авагч сонгоно)
            </h3>
          </div>
          <span className="text-xs text-[#FF6B9D] font-extrabold px-2.5 py-0.5 rounded-full bg-pink-100">
            Нийт 16 сонголт
          </span>
        </div>
        <p className="text-xs text-[#7B6A7C]">
          Урилга нээгдэх үед хүлээн авагч эдгээрээс дуртайгаа чагталж танд хариу илгээнэ. Урьдчилан онцлохыг хүссэнээ сонгоорой:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
          {ACTIVITY_OPTIONS.map((act) => {
            const isSelected = selectedActivities.includes(act.id);
            return (
              <button
                key={act.id}
                type="button"
                onClick={() => onToggleActivity(act.id)}
                className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                  isSelected
                    ? 'border-[#A0C4FF] bg-blue-50/80 shadow-sm scale-[1.01]'
                    : 'border-[#F8D7E2] bg-white/70 hover:bg-white text-[#4A3E4E]'
                }`}
              >
                <span className="text-2xl shrink-0 mt-0.5">{act.emoji}</span>
                <div className="truncate flex-1">
                  <span className="text-xs font-bold font-rounded block truncate text-[#4A3E4E]">
                    {act.name}
                  </span>
                  {act.desc && (
                    <span className="text-[11px] text-[#8B7489] line-clamp-1">
                      {act.desc}
                    </span>
                  )}
                </div>
                <div className="shrink-0 mt-0.5">
                  {isSelected ? (
                    <CheckSquare className="w-4 h-4 text-[#38BDF8]" />
                  ) : (
                    <Square className="w-4 h-4 text-gray-300" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. FOODS SELECTION (8 сонголттой) */}
      <div className="glass-panel p-6 sm:p-8 rounded-[32px] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#FF6B9D]" />
            <h3 className="text-base sm:text-lg font-bold text-[#4A3E4E] font-rounded">
              Хамт идэх дуртай хоол, амттан
            </h3>
          </div>
          <span className="text-xs text-[#8B7489]">Сонгох боломжтой</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {FOOD_OPTIONS.map((f) => {
            const isSelected = selectedFoods.includes(f.id);
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => onToggleFood(f.id)}
                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#FF6B9D] bg-pink-50 text-[#FF4D82] font-bold shadow-sm'
                    : 'border-[#F8D7E2] bg-white/70 hover:bg-white text-[#5D4E60]'
                }`}
              >
                <span className="text-2xl block mb-1">{f.emoji}</span>
                <span className="text-xs font-rounded">{f.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
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
          <span>Линк авах & Үзэх</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Step4Letter;
