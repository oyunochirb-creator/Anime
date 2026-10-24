import React from 'react';
import { Heart, Sparkles, PlusCircle, Bookmark } from 'lucide-react';

interface NavbarProps {
  onNewInvitation: () => void;
  onOpenSaved: () => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNewInvitation,
  onOpenSaved,
  savedCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-[#F8D7E2] px-4 sm:px-8 py-3.5 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={onNewInvitation}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF6B9D] to-[#A0C4FF] flex items-center justify-center text-white shadow-md shadow-pink-200 group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#4A3E4E] font-rounded">
                Bolzoo<span className="text-[#FF6B9D]">Date</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-[#FF4D82] font-extrabold border border-pink-200 hidden sm:inline-block">
                100% Үнэгүй
              </span>
            </div>
            <span className="text-[11px] text-[#8B7489] font-medium hidden sm:block">
              Болзооны урилга, эвлэрлийн захиа 💌
            </span>
          </div>
        </button>

        {/* Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSaved}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-white hover:bg-[#FFF0F5] border border-[#F8D7E2] text-xs sm:text-sm font-bold text-[#6E5A6D] transition-colors cursor-pointer shadow-sm"
          >
            <Bookmark className="w-4 h-4 text-[#FF6B9D]" />
            <span>Урилгууд</span>
            {savedCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#FF6B9D] text-white text-[11px] font-bold grid place-items-center">
                {savedCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onNewInvitation}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] hover:opacity-95 text-xs sm:text-sm font-bold text-white shadow-md shadow-pink-200 transition-transform active:scale-95 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Шинээр хийх</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
