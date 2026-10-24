import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Music, Palette, Play, Sparkles, Search, Youtube, ExternalLink, Check } from 'lucide-react';
import { COLOR_THEMES, POPULAR_YOUTUBE_SONGS, MUSIC_TRACKS } from '../../data/bolzooData.ts';

interface Step3StyleMusicProps {
  colorTheme: string;
  musicType: 'youtube' | 'preset';
  youtubeQuery: string;
  musicTrackId: string;
  floatingEffect: 'hearts' | 'stars' | 'cherry_blossom' | 'teddy_bears';
  onChangeColorTheme: (themeId: string) => void;
  onChangeMusicType: (type: 'youtube' | 'preset') => void;
  onChangeYoutubeQuery: (query: string) => void;
  onChangePresetMusic: (trackId: string, trackTitle: string) => void;
  onChangeFloatingEffect: (effect: 'hearts' | 'stars' | 'cherry_blossom' | 'teddy_bears') => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Step3StyleMusic: React.FC<Step3StyleMusicProps> = ({
  colorTheme,
  musicType,
  youtubeQuery,
  musicTrackId,
  floatingEffect,
  onChangeColorTheme,
  onChangeMusicType,
  onChangeYoutubeQuery,
  onChangePresetMusic,
  onChangeFloatingEffect,
  onPrev,
  onNext,
}) => {
  const [searchWord, setSearchWord] = useState<string>(youtubeQuery || 'Until I Found You - Stephen Sanchez');
  const [previewYoutube, setPreviewYoutube] = useState<boolean>(false);

  const handleApplyYoutube = (songName: string) => {
    setSearchWord(songName);
    onChangeMusicType('youtube');
    onChangeYoutubeQuery(songName);
    setPreviewYoutube(true);
  };

  const effects = [
    { id: 'hearts' as const, label: 'Хөвөх зүрхнүүд', emoji: '💖' },
    { id: 'cherry_blossom' as const, label: 'Сарнайн дэлбээ', emoji: '🌸' },
    { id: 'stars' as const, label: 'Гялалзах одод', emoji: '✨' },
    { id: 'teddy_bears' as const, label: 'Бамбарууш', emoji: '🧸' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#4A90E2] text-xs font-bold border border-blue-200">
          <Palette className="w-3.5 h-3.5" />
          <span>Алхам 3: Уур амьсгал & YouTube Хөгжим</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#4A3E4E] font-rounded tracking-tight">
          Дээрээс доош <span className="text-[#FF6B9D]">уусах өнгө</span> & YouTube дуу 🎧
        </h2>
        <p className="text-sm text-[#7B6A7C] font-body">
          Өнгөний уусгалтыг дээрээс доош чиглэлтэй сонгож, YouTube-ээс дуртай дуугаа хайж тохируулаарай.
        </p>
      </div>

      {/* 1. TOP-TO-BOTTOM GRADIENT SELECTION (Дээрээс доош уусгалт) */}
      <div className="glass-panel p-6 sm:p-7 rounded-[32px] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#FF6B9D]" />
            <h3 className="text-base sm:text-lg font-bold text-[#4A3E4E] font-rounded">
              Өнгөний уусгалт (Дээрээс доош чиглэлтэй ⬇️)
            </h3>
          </div>
          <span className="text-xs text-[#FF4D82] font-extrabold px-2.5 py-0.5 rounded-full bg-pink-100 border border-pink-200">
            Top-to-Bottom
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {COLOR_THEMES.map((theme) => {
            const isSelected = colorTheme === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onChangeColorTheme(theme.id)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'border-[#FF6B9D] bg-white shadow-md shadow-pink-200/60 scale-[1.01]'
                    : 'border-[#F8D7E2] bg-white/70 hover:bg-white hover:border-[#FFB3C6]'
                }`}
              >
                {/* Visual Top-to-Bottom Bar */}
                <div
                  className={`w-12 h-14 rounded-xl shadow-inner ${theme.preview} shrink-0 border border-white flex flex-col justify-between items-center py-1 text-[10px] text-black/40 font-bold`}
                >
                  <span>▲</span>
                  <span>▼</span>
                </div>

                <div className="truncate flex-1">
                  <div className="font-bold text-sm text-[#4A3E4E] font-rounded truncate">
                    {theme.name}
                  </div>
                  <span className="text-xs text-[#8B7489] block mt-0.5">
                    {isSelected ? '✓ Сонгогдсон уусгалт' : 'Сонгох'}
                  </span>
                </div>

                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-[#FF6B9D] text-white grid place-items-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. YOUTUBE MUSIC SEARCH & PRESET (YouTube-ээс дуу тавих) */}
      <div className="glass-panel p-6 sm:p-7 rounded-[32px] space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 grid place-items-center">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#4A3E4E] font-rounded">
                YouTube-ээс дуу хайж тавих 🎵
              </h3>
              <p className="text-xs text-[#8B7489]">
                Хүссэн дуучныхаа нэр эсвэл дууны нэрээр хайж тохируулна.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onChangeMusicType('youtube')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                musicType === 'youtube'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-white text-[#6E5A6D] border border-gray-200'
              }`}
            >
              YouTube дуу
            </button>
            <button
              type="button"
              onClick={() => onChangeMusicType('preset')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                musicType === 'preset'
                  ? 'bg-[#FF6B9D] text-white shadow-sm'
                  : 'bg-white text-[#6E5A6D] border border-gray-200'
              }`}
            >
              Бэлэн Lofi ая
            </button>
          </div>
        </div>

        {musicType === 'youtube' ? (
          /* YouTube Search Section */
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Жишээ: Stephen Sanchez - Until I Found You, Golden Hour..."
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border-2 border-red-200 text-[#4A3E4E] text-sm focus:outline-none focus:border-red-500 font-bold"
                />
                <Search className="w-5 h-5 text-red-400 absolute left-3.5 top-3.5" />
              </div>

              <button
                type="button"
                onClick={() => handleApplyYoutube(searchWord)}
                className="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold font-rounded shadow-md shadow-red-200 active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <Youtube className="w-4 h-4" />
                <span>Энэ дууг сонгох</span>
              </button>
            </div>

            {/* Popular Song Suggestions */}
            <div>
              <span className="text-xs text-[#8B7489] font-bold block mb-2 font-rounded">
                ✿ Түгээмэл дуунуудаас шууд сонгох:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {POPULAR_YOUTUBE_SONGS.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplyYoutube(s.name)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      youtubeQuery === s.name
                        ? 'bg-red-50 border-red-300 text-red-700 font-bold'
                        : 'bg-white/70 hover:bg-white border-[#F8D7E2] text-[#4A3E4E]'
                    }`}
                  >
                    <span className="truncate pr-2 font-medium">{s.name}</span>
                    <span className="text-[10px] text-red-500 shrink-0 font-rounded">{s.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live YouTube Player Preview */}
            {youtubeQuery && (
              <div className="p-4 rounded-2xl bg-black/5 border border-red-200/80 space-y-2 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600 flex items-center gap-1.5 font-rounded">
                    <Check className="w-4 h-4" />
                    <span>Сонгогдсон: {youtubeQuery}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setPreviewYoutube(!previewYoutube)}
                    className="text-xs text-[#8B7489] hover:text-black underline cursor-pointer"
                  >
                    {previewYoutube ? 'Тоглуулагч нуух' : 'Тоглуулагч харах'}
                  </button>
                </div>

                {previewYoutube && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                    <iframe
                      src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
                        youtubeQuery
                      )}&autoplay=0`}
                      title="YouTube Music Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="w-full h-full border-0"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Preset Lofi Tracks */
          <div className="space-y-2.5">
            {MUSIC_TRACKS.map((track) => {
              const isSelected = musicTrackId === track.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => onChangePresetMusic(track.id, track.title)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#FF6B9D] bg-pink-50 text-[#FF4D82] font-bold shadow-sm'
                      : 'border-[#F8D7E2] bg-white/70 hover:bg-white text-[#4A3E4E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-pink-100 text-[#FF6B9D] grid place-items-center text-sm">
                      <Music className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-sm block font-rounded">{track.title}</span>
                      <span className="text-xs text-[#8B7489] font-normal">{track.desc}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#FF4D82]" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. Floating Sticker / Emoji Effect */}
      <div className="glass-panel p-6 sm:p-7 rounded-[32px] space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FF6B9D]" />
          <h3 className="text-base sm:text-lg font-bold text-[#4A3E4E] font-rounded">
            Хөвөгч хөөрхөн эффект
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {effects.map((eff) => (
            <button
              key={eff.id}
              type="button"
              onClick={() => onChangeFloatingEffect(eff.id)}
              className={`p-3.5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                floatingEffect === eff.id
                  ? 'border-[#FF6B9D] bg-pink-50 text-[#FF4D82] shadow-sm font-bold'
                  : 'border-[#F8D7E2] bg-white/70 hover:bg-white text-[#6E5A6D]'
              }`}
            >
              <div className="text-2xl mb-1">{eff.emoji}</div>
              <div className="text-xs font-rounded">{eff.label}</div>
            </button>
          ))}
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
          onClick={onNext}
          className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white text-sm sm:text-base font-black font-rounded shadow-lg shadow-pink-200/80 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Дараах: Зурвас бичих</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Step3StyleMusic;
