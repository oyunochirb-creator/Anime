import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Volume2, VolumeX, Sparkles, Check, ArrowLeft, Calendar, Utensils, Compass, Youtube, CheckSquare, Square, Send, Clock } from 'lucide-react';
import { InvitationData } from '../../types/bolzoo.ts';
import { COLOR_THEMES, MUSIC_TRACKS, FOOD_OPTIONS, ACTIVITY_OPTIONS, PRESET_DATE_OPTIONS } from '../../data/bolzooData.ts';

interface InvitationLiveViewProps {
  invitation: InvitationData;
  onBackToEdit?: () => void;
  onSaveResponse?: (response: {
    accepted: boolean;
    pickedDate?: string;
    pickedTime?: string;
    pickedActivities?: string[];
    pickedFoods?: string[];
    customNote?: string;
  }) => void;
}

export const InvitationLiveView: React.FC<InvitationLiveViewProps> = ({
  invitation,
  onBackToEdit,
  onSaveResponse,
}) => {
  const [isOpenEnvelope, setIsOpenEnvelope] = useState<boolean>(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [isAccepted, setIsAccepted] = useState<boolean>(
    invitation.rsvpResponse?.accepted ?? false
  );
  const [isFinalSubmitted, setIsFinalSubmitted] = useState<boolean>(
    Boolean(invitation.rsvpResponse?.pickedDate || invitation.rsvpResponse?.pickedActivities?.length)
  );

  // Recipient's interactive choices
  const [chosenDate, setChosenDate] = useState<string>(
    invitation.rsvpResponse?.pickedDate || PRESET_DATE_OPTIONS[1].label
  );
  const [chosenTime, setChosenTime] = useState<string>(
    invitation.rsvpResponse?.pickedTime || PRESET_DATE_OPTIONS[1].time
  );
  const [chosenActivities, setChosenActivities] = useState<string[]>(
    invitation.rsvpResponse?.pickedActivities || (invitation.selectedActivities.length > 0 ? invitation.selectedActivities.slice(0, 3) : ['movie', 'photobooth', 'cafe'])
  );
  const [chosenFoods, setChosenFoods] = useState<string[]>(
    invitation.rsvpResponse?.pickedFoods || (invitation.selectedFoods.length > 0 ? invitation.selectedFoods.slice(0, 2) : ['ramen', 'boba'])
  );
  const [recipientNote, setRecipientNote] = useState<string>(
    invitation.rsvpResponse?.customNote || ''
  );

  // Runaway No Button logic
  const [noButtonPosition, setNoButtonPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const theme =
    COLOR_THEMES.find((t) => t.id === invitation.colorTheme) || COLOR_THEMES[0];
  const track =
    MUSIC_TRACKS.find((m) => m.id === invitation.musicTrackId) || MUSIC_TRACKS[0];

  const isYoutube = invitation.musicType === 'youtube' && Boolean(invitation.youtubeQuery);

  useEffect(() => {
    if (isOpenEnvelope && !isYoutube && track.audioUrl) {
      const audio = new Audio(track.audioUrl);
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().then(() => setIsPlayingMusic(true)).catch(() => setIsPlayingMusic(false));
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isOpenEnvelope, isYoutube, track.audioUrl]);

  const toggleMusic = () => {
    if (isYoutube) {
      setIsPlayingMusic(!isPlayingMusic);
      return;
    }

    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => setIsPlayingMusic(true)).catch(() => {});
    }
  };

  const handleNoHoverOrClick = () => {
    setNoCount((prev) => prev + 1);
    const randomX = (Math.random() - 0.5) * 260;
    const randomY = (Math.random() - 0.5) * 160;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleInitialAccept = () => {
    setIsAccepted(true);
  };

  const toggleActivityChoice = (id: string) => {
    setChosenActivities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFoodChoice = (id: string) => {
    setChosenFoods((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFinalSubmit = () => {
    setIsFinalSubmitted(true);
    if (onSaveResponse) {
      onSaveResponse({
        accepted: true,
        pickedDate: chosenDate,
        pickedTime: chosenTime,
        pickedActivities: chosenActivities,
        pickedFoods: chosenFoods,
        customNote: recipientNote,
      });
    }
  };

  return (
    <div className={`min-h-screen w-full ${theme.bgGradientClass} relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 font-body text-[#4A3E4E]`}>
      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <span className="absolute top-[8%] left-[6%] text-3xl opacity-35 animate-float-slow">💖</span>
        <span className="absolute top-[18%] right-[10%] text-4xl opacity-35 animate-float-slow" style={{ animationDelay: '1.5s' }}>🌸</span>
        <span className="absolute bottom-[12%] left-[10%] text-3xl opacity-35 animate-float-slow" style={{ animationDelay: '2.5s' }}>✨</span>
        <span className="absolute bottom-[18%] right-[6%] text-4xl opacity-35 animate-float-slow" style={{ animationDelay: '0.8s' }}>💌</span>
        <span className="absolute top-[48%] left-[3%] text-2xl opacity-25 animate-float-slow">🧸</span>
        <span className="absolute top-[42%] right-[3%] text-2xl opacity-25 animate-float-slow">🍓</span>
      </div>

      {/* Hidden YouTube audio background */}
      {isOpenEnvelope && isYoutube && (
        <div className="fixed bottom-2 left-2 z-50 opacity-90 transition-opacity">
          <div className="px-3 py-1.5 rounded-xl bg-white/95 border border-red-200 shadow-md flex items-center gap-2 text-xs">
            <Youtube className="w-4 h-4 text-red-600" />
            <span className="font-bold text-[#4A3E4E] truncate max-w-[180px]">
              {invitation.youtubeQuery}
            </span>
          </div>
          <iframe
            className="w-0 h-0 opacity-0 pointer-events-none"
            src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
              invitation.youtubeQuery
            )}&autoplay=1&loop=1`}
            title="YouTube Background Music"
            allow="autoplay"
          />
        </div>
      )}

      {/* Top Floating Controls */}
      <div className="fixed top-4 left-4 right-4 z-40 flex items-center justify-between max-w-4xl mx-auto pointer-events-auto">
        {onBackToEdit && (
          <button
            type="button"
            onClick={onBackToEdit}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#F8D7E2] text-xs sm:text-sm font-bold text-[#6E5A6D] hover:bg-white shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Засах хуудас руу буцах</span>
          </button>
        )}

        {isOpenEnvelope && (
          <button
            type="button"
            onClick={toggleMusic}
            className="ml-auto flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#F8D7E2] text-xs font-bold text-[#FF4D82] shadow-sm hover:bg-white cursor-pointer"
          >
            {isPlayingMusic || isYoutube ? (
              <>
                <Volume2 className="w-4 h-4 animate-pulse text-[#FF6B9D]" />
                <span className="hidden sm:inline">
                  {isYoutube ? 'YouTube эгшиглэж байна' : 'Хөгжим тоглож байна'}
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#8B7489]" />
                <span className="hidden sm:inline">Хөгжим нээх</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Main Interactive Screen */}
      <div className="relative z-20 w-full max-w-2xl mx-auto my-auto">
        <AnimatePresence mode="wait">
          {!isOpenEnvelope ? (
            /* Closed Envelope Screen */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 sm:p-12 rounded-[40px] text-center space-y-6 shadow-2xl relative overflow-hidden max-w-xl mx-auto"
            >
              <div
                className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#FF6B9D] to-[#A0C4FF] grid place-items-center text-5xl shadow-xl shadow-pink-200 animate-bounce cursor-pointer"
                onClick={() => setIsOpenEnvelope(true)}
              >
                💌
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#FF6B9D] font-extrabold px-3 py-1 rounded-full bg-pink-100 border border-pink-200">
                  Онцгой урилга
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-[#4A3E4E] font-rounded mt-3">
                  {invitation.nickname || invitation.crushName}-д зориулав 🌸
                </h1>
                <p className="text-sm text-[#7B6A7C] mt-2 font-body">
                  Чамд <strong>{invitation.senderName}</strong>-с чин сэтгэлийн захидал ирлээ.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpenEnvelope(true)}
                  className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white text-base sm:text-lg font-black font-rounded shadow-xl shadow-pink-200/80 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Дугтуйг нээж үзэх 💖</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* Open Letter Content */
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-10 rounded-[36px] sm:rounded-[44px] shadow-2xl relative space-y-6"
            >
              {/* Header inside letter */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F8D7E2]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF6B9D] animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B9D] font-rounded">
                    Bolzoo Date
                  </span>
                </div>
                <span className="text-xs text-[#8B7489] font-medium">
                  {new Date(invitation.createdAt).toLocaleDateString('mn-MN')}
                </span>
              </div>

              {/* Salutation & Headline */}
              <div>
                <span className="text-sm font-bold text-[#8B7489] font-rounded block">
                  Сайн уу, {invitation.nickname ? `${invitation.nickname} (${invitation.crushName})` : invitation.crushName} минь,
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#4A3E4E] font-rounded mt-1 tracking-tight leading-snug">
                  {invitation.headline}
                </h2>
              </div>

              {/* Heartfelt Letter Body */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/75 border border-[#F8D7E2] shadow-inner">
                <p className="text-lg sm:text-xl font-handwriting text-[#3D3141] leading-relaxed whitespace-pre-line">
                  {invitation.message}
                </p>
                <div className="text-right mt-4 font-handwriting text-lg sm:text-xl font-bold text-[#FF6B9D]">
                  Хайрласан: {invitation.senderName} 💖
                </div>
              </div>

              {/* INTERACTIVE RSVP FLOW */}
              {!isAccepted ? (
                /* Step 1: Initial Question: Хамт болзоонд явах уу? */
                <div className="pt-4 border-t border-[#F8D7E2] text-center space-y-4">
                  <h3 className="text-lg sm:text-xl font-black text-[#4A3E4E] font-rounded">
                    Хамтдаа болзоонд явах уу? 🥰
                  </h3>

                  <div className="relative min-h-[70px] flex items-center justify-center gap-4 sm:gap-6">
                    {/* YES BUTTON */}
                    <button
                      type="button"
                      onClick={handleInitialAccept}
                      className="px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#FF4D82] text-white text-base sm:text-lg font-black font-rounded shadow-lg shadow-pink-300 hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Check className="w-5 h-5 stroke-[3]" />
                      <span>Тэгье! Зөвшөөрч байна 🥰</span>
                    </button>

                    {/* RUNAWAY NO BUTTON */}
                    <motion.button
                      type="button"
                      animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      onMouseEnter={handleNoHoverOrClick}
                      onClick={handleNoHoverOrClick}
                      className="px-5 py-3 rounded-2xl bg-white border border-[#F8D7E2] text-xs sm:text-sm font-bold text-[#8B7489] hover:bg-pink-50 transition-colors shadow-sm whitespace-nowrap cursor-pointer select-none"
                    >
                      <span>Үгүй ээ 🙈</span>
                      {noCount > 0 && <span className="text-[10px] ml-1">({noCount})</span>}
                    </motion.button>
                  </div>

                  {noCount >= 3 && (
                    <p className="text-xs text-[#FF6B9D] font-rounded animate-in fade-in">
                      🙈 &ldquo;Үгүй&rdquo; товч зугтаагаад байна! Тэгэхээр зөвшөөрөх л үлдлээ дээ 😉
                    </p>
                  )}
                </div>
              ) : isFinalSubmitted ? (
                /* Step 3: Final Confirmed Celebration View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-100 via-rose-50 to-blue-100 border border-pink-300 shadow-md text-center space-y-4"
                >
                  <div className="text-4xl animate-bounce">🎉💖🥳</div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#FF4D82] font-rounded">
                    YAYYY! Болзооны тов амжилттай баталгаажлаа!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A3E4E] font-body max-w-md mx-auto">
                    {invitation.senderName} таны сонгосон цаг болон хийх зүйлсийг хараад маш их баярлах болно!
                  </p>

                  {/* Summary of what recipient picked */}
                  <div className="p-4 rounded-2xl bg-white/90 border border-pink-200 text-left text-xs sm:text-sm space-y-2 font-rounded">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FF4D82]" />
                      <span><strong>Уулзах хугацаа:</strong> {chosenDate} ({chosenTime})</span>
                    </div>

                    {chosenActivities.length > 0 && (
                      <div className="flex items-start gap-2">
                        <Compass className="w-4 h-4 text-[#A0C4FF] shrink-0 mt-0.5" />
                        <div>
                          <strong>Хамт хийх зүйлс:</strong>{' '}
                          {chosenActivities
                            .map((aId) => ACTIVITY_OPTIONS.find((a) => a.id === aId)?.name)
                            .filter(Boolean)
                            .join(', ')}
                        </div>
                      </div>
                    )}

                    {chosenFoods.length > 0 && (
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-[#FF6B9D] shrink-0 mt-0.5" />
                        <div>
                          <strong>Хамт идэх хоол:</strong>{' '}
                          {chosenFoods
                            .map((fId) => FOOD_OPTIONS.find((f) => f.id === fId)?.name)
                            .filter(Boolean)
                            .join(', ')}
                        </div>
                      </div>
                    )}

                    {recipientNote && (
                      <div className="p-2.5 rounded-xl bg-pink-50 border border-pink-200 font-handwriting text-base text-[#4A3E4E]">
                        Таны хариу зурвас: &ldquo;{recipientNote}&rdquo;
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                /* Step 2: RECIPIENT CHOOSES TIME & ACTIVITIES & FOOD */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 pt-4 border-t border-[#F8D7E2]"
                >
                  <div className="text-center space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#FF6B9D] font-extrabold px-3 py-1 rounded-full bg-pink-100">
                      Хүлээн авагчийн сонголт
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#4A3E4E] font-rounded">
                      Хэзээ уулзаж, юу хийхээ өөрөө сонгоорой! 🌸
                    </h3>
                    <p className="text-xs text-[#7B6A7C]">
                      {invitation.senderName} таны сонголтыг хүлээж байна.
                    </p>
                  </div>

                  {/* 1. Pick Date & Time */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#F8D7E2] space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#4A3E4E] font-rounded">
                      <Calendar className="w-4 h-4 text-[#FF4D82]" />
                      <span>1. Хэзээ уулзах вэ? (Өдөр & Цагаа сонгох)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PRESET_DATE_OPTIONS.map((opt, idx) => {
                        const isSelected = chosenDate === opt.label && chosenTime === opt.time;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setChosenDate(opt.label);
                              setChosenTime(opt.time);
                            }}
                            className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'border-[#FF4D82] bg-pink-50 font-bold text-[#FF4D82] shadow-sm'
                                : 'border-[#F8D7E2] bg-white text-[#4A3E4E] hover:bg-pink-50/50'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <span className="text-[11px] opacity-75">{opt.time}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom Date Input if desired */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <input
                        type="text"
                        placeholder="Өөр өдөр бичих..."
                        value={chosenDate}
                        onChange={(e) => setChosenDate(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-white border border-[#F8D7E2] text-xs font-bold"
                      />
                      <input
                        type="text"
                        placeholder="Өөр цаг бичих..."
                        value={chosenTime}
                        onChange={(e) => setChosenTime(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-white border border-[#F8D7E2] text-xs font-bold"
                      />
                    </div>
                  </div>

                  {/* 2. Pick Activities (16 Choices!) */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#F8D7E2] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#4A3E4E] font-rounded">
                        <Compass className="w-4 h-4 text-[#A0C4FF]" />
                        <span>2. Хамтдаа юу хийх вэ? (Дуртайгаа сонгох)</span>
                      </div>
                      <span className="text-[11px] text-[#FF6B9D] font-bold">Олон сонгож болно</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-1">
                      {ACTIVITY_OPTIONS.map((act) => {
                        const isPicked = chosenActivities.includes(act.id);
                        return (
                          <button
                            key={act.id}
                            type="button"
                            onClick={() => toggleActivityChoice(act.id)}
                            className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between gap-2 ${
                              isPicked
                                ? 'border-[#38BDF8] bg-sky-50 font-bold text-[#0284C7] shadow-sm'
                                : 'border-[#F8D7E2] bg-white text-[#4A3E4E] hover:bg-sky-50/40'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="text-lg">{act.emoji}</span>
                              <span className="truncate font-rounded">{act.name}</span>
                            </div>
                            {isPicked ? (
                              <CheckSquare className="w-4 h-4 text-[#0284C7] shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-gray-300 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Pick Foods (8 Choices) */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#F8D7E2] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#4A3E4E] font-rounded">
                        <Utensils className="w-4 h-4 text-[#FF6B9D]" />
                        <span>3. Хамт юу идэх вэ?</span>
                      </div>
                      <span className="text-[11px] text-[#8B7489]">Сонгох</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {FOOD_OPTIONS.map((f) => {
                        const isPicked = chosenFoods.includes(f.id);
                        return (
                          <button
                            key={f.id}
                            type="button"
                            onClick={() => toggleFoodChoice(f.id)}
                            className={`p-2.5 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                              isPicked
                                ? 'border-[#FF6B9D] bg-pink-50 font-bold text-[#FF4D82] shadow-sm'
                                : 'border-[#F8D7E2] bg-white text-[#4A3E4E]'
                            }`}
                          >
                            <span className="text-xl block mb-0.5">{f.emoji}</span>
                            <span className="text-[11px] font-rounded truncate block">{f.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Optional Note from Recipient */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3E4E] mb-1 font-rounded">
                      {invitation.senderName}-д илгээх хариу үг (Заавал биш):
                    </label>
                    <input
                      type="text"
                      placeholder="Жишээ: Тэгье ээ, тэсэн ядан хүлээж байя! 🥰"
                      value={recipientNote}
                      onChange={(e) => setRecipientNote(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#F8D7E2] text-xs font-bold focus:outline-none focus:border-[#FF6B9D]"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleFinalSubmit}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white text-base font-black font-rounded shadow-xl shadow-pink-200/80 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Сонголтоо баталгаажуулж илгээх 💌</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InvitationLiveView;
