import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href = '#',
  onClick,
  className = '',
  label = 'Live Project',
}) => {
  const content = (
    <>
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 ml-1.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
    >
      {content}
    </a>
  );
};

export default LiveProjectButton;
