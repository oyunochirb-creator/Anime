import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Share2, Sparkles, Heart, Eye, ArrowLeft, QrCode } from 'lucide-react';
import { InvitationData } from '../../types/bolzoo.ts';

interface Step5ShareProps {
  invitation: InvitationData;
  onPreviewLive: () => void;
  onStartNew: () => void;
  onPrev: () => void;
}

export const Step5Share: React.FC<Step5ShareProps> = ({
  invitation,
  onPreviewLive,
  onStartNew,
  onPrev,
}) => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  // Generate shareable URL with hash / query
  const shareUrl = `${window.location.origin}${window.location.pathname}#invite=${invitation.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = `Чамд зориулсан онцгой урилга ирлээ 💌: ${shareUrl}`;

  const shareMessenger = () => {
    window.open(`fb-messenger://share/?link=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Top Congratulation Banner */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF6B9D] to-[#A0C4FF] grid place-items-center text-white text-3xl mx-auto shadow-lg shadow-pink-200 animate-bounce">
          💌
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ҮНЭ ТӨЛБӨРГҮЙ БЭЛЭН БОЛЛОО</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#4A3E4E] font-rounded tracking-tight">
          Урилгын линк бэлэн боллоо! ✨
        </h2>
        <p className="text-sm text-[#7B6A7C] font-body">
          Доорх линкийг хуулж аваад Crush эсвэл хайртай хүндээ Messenger, Instagram, эсвэл чатаар илгээгээрэй.
        </p>
      </div>

      {/* Share Link Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-[32px] space-y-6">
        {/* Copy Bar */}
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#FF6B9D] mb-2 font-rounded">
            Нууц урилгын линк:
          </label>
          <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
            <div className="flex-1 p-3.5 rounded-2xl bg-white border-2 border-[#F8D7E2] text-xs sm:text-sm font-mono text-[#5D4E60] truncate select-all flex items-center">
              {shareUrl}
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#FF4D82] text-white text-sm font-bold font-rounded shadow-md shadow-pink-200 hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Хуулагдлаа!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Линк хуулах</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Preview Button (Recipient view test) */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-pink-50 via-white to-blue-50 border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm sm:text-base text-[#4A3E4E] font-rounded flex items-center justify-center sm:justify-start gap-1.5">
              <Eye className="w-4 h-4 text-[#FF6B9D]" />
              <span>Түүнд хэрхэн харагдахыг шалгах уу?</span>
            </h4>
            <p className="text-xs text-[#7B6A7C] mt-0.5 font-body">
              Нээгдэх дугтуй, хөгжим, &ldquo;Тийм / Үгүй&rdquo; товчлуурыг өөрөө туршиж үзээрэй.
            </p>
          </div>

          <button
            type="button"
            onClick={onPreviewLive}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-pink-50 text-[#FF6B9D] border-2 border-[#FF6B9D] text-xs sm:text-sm font-black font-rounded shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Урилгыг үзэх</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Social Shares */}
        <div>
          <span className="text-xs font-bold text-[#8B7489] uppercase tracking-wider block mb-3 font-rounded">
            Шууд хуваалцах:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white hover:bg-pink-50 border border-[#F8D7E2] text-xs font-bold text-[#4A3E4E] transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#FF6B9D]" />
              <span>Instagram / Story</span>
            </button>

            <button
              type="button"
              onClick={shareWhatsApp}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white hover:bg-emerald-50 border border-[#F8D7E2] text-xs font-bold text-[#4A3E4E] transition-colors cursor-pointer"
            >
              <span className="text-sm">💬</span>
              <span>WhatsApp / Chat</span>
            </button>

            <button
              type="button"
              onClick={() => setShowQr(!showQr)}
              className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white hover:bg-blue-50 border border-[#F8D7E2] text-xs font-bold text-[#4A3E4E] transition-colors cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-[#A0C4FF]" />
              <span>QR Код {showQr ? 'нуух' : 'харах'}</span>
            </button>
          </div>
        </div>

        {/* QR Code display */}
        {showQr && (
          <div className="p-4 rounded-2xl bg-white border border-[#F8D7E2] text-center animate-in fade-in space-y-2">
            <div className="w-36 h-36 mx-auto bg-pink-50 p-2 rounded-xl flex items-center justify-center border border-pink-200">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  shareUrl
                )}`}
                alt="Bolzoo invitation QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-[#8B7489]">
              Камераараа уншуулан урилгаа нээнэ.
            </p>
          </div>
        )}

        {/* Card Summary */}
        <div className="p-4 rounded-2xl bg-[#FFF9FB] border border-[#F8D7E2] text-xs text-[#6E5A6D] space-y-1">
          <div className="font-bold text-[#4A3E4E] flex items-center gap-1.5 font-rounded text-sm">
            <Heart className="w-3.5 h-3.5 fill-[#FF6B9D] text-[#FF6B9D]" />
            <span>{invitation.crushName}-д зориулсан урилга</span>
          </div>
          <div>Илгээгч: <strong>{invitation.senderName}</strong></div>
          <div>Гарчиг: <em>&ldquo;{invitation.headline}&rdquo;</em></div>
          {invitation.dateDay && <div>Цаг хугацаа: {invitation.dateDay} {invitation.dateTime}</div>}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#F8D7E2] text-[#6E5A6D] text-sm font-bold hover:bg-pink-50 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Өөрчлөх</span>
        </button>

        <button
          type="button"
          onClick={onStartNew}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#FF6B9D] text-[#FF6B9D] text-sm font-bold hover:bg-pink-50 transition-colors cursor-pointer"
        >
          <span>Дахиад өөр урилга хийх</span>
        </button>
      </div>
    </div>
  );
};

export default Step5Share;
