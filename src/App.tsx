import React, { useState, useEffect } from 'react';
import { Navbar } from './components/bolzoo/Navbar.tsx';
import { StepHeader } from './components/bolzoo/StepHeader.tsx';
import { Step1Template } from './components/bolzoo/Step1Template.tsx';
import { Step2Names } from './components/bolzoo/Step2Names.tsx';
import { Step3StyleMusic } from './components/bolzoo/Step3StyleMusic.tsx';
import { Step4Letter } from './components/bolzoo/Step4Letter.tsx';
import { Step5Share } from './components/bolzoo/Step5Share.tsx';
import { InvitationLiveView } from './components/bolzoo/InvitationLiveView.tsx';
import { SavedInvitationsModal } from './components/bolzoo/SavedInvitationsModal.tsx';
import { LiveMiniPreview } from './components/bolzoo/LiveMiniPreview.tsx';
import { InvitationData, InvitationPurpose } from './types/bolzoo.ts';
import { PURPOSES, MUSIC_TRACKS, COLOR_THEMES } from './data/bolzooData.ts';

const LOCAL_STORAGE_KEY = 'bolzoo_invitations_v1';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [maxReachedStep, setMaxReachedStep] = useState<number>(1);
  const [savedInvitations, setSavedInvitations] = useState<InvitationData[]>([]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);
  const [livePreviewInvite, setLivePreviewInvite] = useState<InvitationData | null>(null);

  // Active form data
  const [purpose, setPurpose] = useState<InvitationPurpose>('crush_date');
  const [crushName, setCrushName] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [colorTheme, setColorTheme] = useState<string>(COLOR_THEMES[0].id);
  const [musicType, setMusicType] = useState<'youtube' | 'preset'>('youtube');
  const [youtubeQuery, setYoutubeQuery] = useState<string>('Stephen Sanchez - Until I Found You');
  const [musicTrackId, setMusicTrackId] = useState<string>('lofi_love');
  const [musicTitle, setMusicTitle] = useState<string>(MUSIC_TRACKS[0].title);
  const [floatingEffect, setFloatingEffect] = useState<'hearts' | 'stars' | 'cherry_blossom' | 'teddy_bears'>('hearts');
  const [headline, setHeadline] = useState<string>(PURPOSES[0].defaultHeadline);
  const [message, setMessage] = useState<string>(PURPOSES[0].defaultMessage);
  
  // Recipient choosing date & activities toggle
  const [letRecipientChooseDate, setLetRecipientChooseDate] = useState<boolean>(true);
  const [suggestedDateDay, setSuggestedDateDay] = useState<string>('Энэ хагас сайнд');
  const [suggestedDateTime, setSuggestedDateTime] = useState<string>('18:00 цагт');
  const [selectedFoods, setSelectedFoods] = useState<string[]>(['ramen', 'boba']);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([
    'movie',
    'photobooth',
    'cafe',
    'walk',
    'bookstore',
  ]);
  const [activeInvitationId, setActiveInvitationId] = useState<string>('');

  // Load saved invitations and check URL hash on initial load
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSavedInvitations(parsed);
      }
    } catch {
      // Ignore local storage error
    }

    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#invite=')) {
        const id = hash.replace('#invite=', '');
        try {
          const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (stored) {
            const list: InvitationData[] = JSON.parse(stored);
            const found = list.find((item) => item.id === id);
            if (found) {
              setLivePreviewInvite(found);
              return;
            }
          }
        } catch {
          // ignore
        }
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleSelectPurpose = (newPurpose: InvitationPurpose) => {
    setPurpose(newPurpose);
    const found = PURPOSES.find((p) => p.id === newPurpose);
    if (found) {
      setHeadline(found.defaultHeadline);
      setMessage(found.defaultMessage);
    }
  };

  const handleNextStep = () => {
    const next = Math.min(5, currentStep + 1);
    setCurrentStep(next);
    if (next > maxReachedStep) {
      setMaxReachedStep(next);
    }

    if (next === 5) {
      saveCurrentInvitation();
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleToggleFood = (foodId: string) => {
    setSelectedFoods((prev) =>
      prev.includes(foodId) ? prev.filter((id) => id !== foodId) : [...prev, foodId]
    );
  };

  const handleToggleActivity = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId) ? prev.filter((id) => id !== activityId) : [...prev, activityId]
    );
  };

  const getCurrentInvitationObject = (): InvitationData => {
    const id = activeInvitationId || `date_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    return {
      id,
      purpose,
      crushName: crushName || 'Миний Crush',
      senderName: senderName || 'Нууц бишрэгч',
      nickname,
      colorTheme,
      musicType,
      youtubeQuery,
      musicTrackId,
      musicTitle: musicType === 'youtube' ? `YouTube: ${youtubeQuery}` : musicTitle,
      floatingEffect,
      headline,
      message,
      letRecipientChooseDate,
      suggestedDateDay,
      suggestedDateTime,
      dateDay: suggestedDateDay,
      dateTime: suggestedDateTime,
      selectedFoods,
      selectedActivities,
      createdAt: Date.now(),
    };
  };

  const saveCurrentInvitation = () => {
    const currentInv = getCurrentInvitationObject();
    setActiveInvitationId(currentInv.id);

    setSavedInvitations((prev) => {
      const filtered = prev.filter((i) => i.id !== currentInv.id);
      const updated = [currentInv, ...filtered];
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleStartNew = () => {
    setActiveInvitationId('');
    setCurrentStep(1);
    setMaxReachedStep(1);
    setCrushName('');
    setSenderName('');
    setNickname('');
    setPurpose('crush_date');
    setHeadline(PURPOSES[0].defaultHeadline);
    setMessage(PURPOSES[0].defaultMessage);
    setLivePreviewInvite(null);
    window.location.hash = '';
  };

  const handleDeleteInvitation = (id: string) => {
    const updated = savedInvitations.filter((i) => i.id !== id);
    setSavedInvitations(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // If in recipient live preview mode (e.g. clicked "Урилгыг үзэх" or opened via link)
  if (livePreviewInvite) {
    return (
      <InvitationLiveView
        invitation={livePreviewInvite}
        onBackToEdit={() => {
          setLivePreviewInvite(null);
          window.location.hash = '';
        }}
        onSaveResponse={(response) => {
          const updatedInvite: InvitationData = {
            ...livePreviewInvite,
            rsvpResponse: {
              ...response,
              respondedAt: Date.now(),
            },
          };
          setLivePreviewInvite(updatedInvite);
          setSavedInvitations((prev) => {
            const list = prev.map((item) => (item.id === updatedInvite.id ? updatedInvite : item));
            try {
              localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
            } catch {
              // ignore
            }
            return list;
          });
        }}
      />
    );
  }

  const currentTheme =
    COLOR_THEMES.find((t) => t.id === colorTheme) || COLOR_THEMES[0];

  return (
    <div className={`min-h-screen flex flex-col ${currentTheme.bgGradientClass} font-body selection:bg-[#FF85A2] selection:text-white transition-all duration-500`}>
      {/* 1. Header Navbar */}
      <Navbar
        onNewInvitation={handleStartNew}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        savedCount={savedInvitations.length}
      />

      {/* 2. Step Progress Bar */}
      <div className="max-w-4xl mx-auto w-full pt-4 sm:pt-6 px-4">
        <StepHeader
          currentStep={currentStep}
          maxReachedStep={maxReachedStep}
          onStepClick={(step) => setCurrentStep(step)}
        />
      </div>

      {/* 3. Main Wizard Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10">
        {currentStep === 1 && (
          <Step1Template
            selectedPurpose={purpose}
            onSelect={handleSelectPurpose}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 2 && (
          <Step2Names
            crushName={crushName}
            senderName={senderName}
            nickname={nickname}
            onChangeCrushName={setCrushName}
            onChangeSenderName={setSenderName}
            onChangeNickname={setNickname}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 3 && (
          <Step3StyleMusic
            colorTheme={colorTheme}
            musicType={musicType}
            youtubeQuery={youtubeQuery}
            musicTrackId={musicTrackId}
            floatingEffect={floatingEffect}
            onChangeColorTheme={setColorTheme}
            onChangeMusicType={setMusicType}
            onChangeYoutubeQuery={setYoutubeQuery}
            onChangePresetMusic={(trackId, trackTitle) => {
              setMusicTrackId(trackId);
              setMusicTitle(trackTitle);
            }}
            onChangeFloatingEffect={setFloatingEffect}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 4 && (
          <Step4Letter
            headline={headline}
            message={message}
            letRecipientChooseDate={letRecipientChooseDate}
            suggestedDateDay={suggestedDateDay}
            suggestedDateTime={suggestedDateTime}
            selectedFoods={selectedFoods}
            selectedActivities={selectedActivities}
            onChangeHeadline={setHeadline}
            onChangeMessage={setMessage}
            onChangeLetRecipientChooseDate={setLetRecipientChooseDate}
            onChangeSuggestedDateDay={setSuggestedDateDay}
            onChangeSuggestedDateTime={setSuggestedDateTime}
            onToggleFood={handleToggleFood}
            onToggleActivity={handleToggleActivity}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 5 && (
          <Step5Share
            invitation={getCurrentInvitationObject()}
            onPreviewLive={() => setLivePreviewInvite(getCurrentInvitationObject())}
            onStartNew={handleStartNew}
            onPrev={handlePrevStep}
          />
        )}
      </main>

      {/* 4. REAL-TIME CORNER LIVE MINI PREVIEW */}
      <LiveMiniPreview
        invitation={getCurrentInvitationObject()}
        onOpenFullPreview={() => setLivePreviewInvite(getCurrentInvitationObject())}
      />

      {/* 5. Soft Footer */}
      <footer className="w-full text-center py-6 text-xs text-[#8B7489] border-t border-[#F8D7E2]/60 mt-auto bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-rounded">
          <span>
            🌸 Bolzoo Date — Хайртай хүндээ илгээх 100% үнэгүй болзооны урилга
          </span>
          <div className="flex items-center gap-4 text-[#FF4D82] font-bold">
            <span>16+ Хамт хийх зүйлс 🎡</span>
            <span>·</span>
            <span>Хүлээн авагч өөрөө сонгодог 💌</span>
          </div>
        </div>
      </footer>

      {/* Saved Invitations Modal */}
      <SavedInvitationsModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        invitations={savedInvitations}
        onSelectInvite={(inv) => setLivePreviewInvite(inv)}
        onDeleteInvite={handleDeleteInvitation}
        onNew={handleStartNew}
      />
    </div>
  );
}
