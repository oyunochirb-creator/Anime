import React from 'react';
import { Check } from 'lucide-react';

interface StepHeaderProps {
  currentStep: number;
  onStepClick: (step: number) => void;
  maxReachedStep: number;
}

export const StepHeader: React.FC<StepHeaderProps> = ({
  currentStep,
  onStepClick,
  maxReachedStep,
}) => {
  const steps = [
    { num: 1, label: 'Загвар' },
    { num: 2, label: 'Нэрс' },
    { num: 3, label: 'Өнгө, дуу' },
    { num: 4, label: 'Зурвас' },
    { num: 5, label: 'Линк авах' },
  ];

  return (
    <div className="w-full overflow-x-auto py-3 px-2 flex justify-start sm:justify-center no-scrollbar">
      <nav
        aria-label="Урилга үүсгэх алхмууд"
        className="flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-[#F8D7E2] shadow-sm shrink-0"
      >
        {steps.map((s) => {
          const isActive = s.num === currentStep;
          const isDone = s.num < currentStep;
          const isAccessible = s.num <= maxReachedStep;

          return (
            <button
              key={s.num}
              type="button"
              disabled={!isAccessible}
              onClick={() => onStepClick(s.num)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-all font-rounded text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white shadow-md shadow-pink-200/60'
                  : isDone
                  ? 'bg-pink-50 text-[#FF4D82] hover:bg-pink-100'
                  : 'text-[#8B7489] opacity-70 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-40'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full text-xs grid place-items-center font-black ${
                  isActive
                    ? 'bg-white text-[#FF4D82]'
                    : isDone
                    ? 'bg-[#FF4D82] text-white'
                    : 'bg-white border border-[#F8D7E2] text-[#6E5A6D]'
                }`}
              >
                {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : s.num}
              </span>
              <span>{s.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default StepHeader;
