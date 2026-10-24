import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '3D Modeling & Anime Showcase',
    message: '',
  });

  const targetEmail = 'oyunochirb@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Open native email client directly to oyunochirb@gmail.com with prefilled message
    const subject = encodeURIComponent(`[Хамтран ажиллах хүсэлт] ${formData.name} - ${formData.projectType}`);
    const body = encodeURIComponent(
      `Нэр: ${formData.name}\nИмэйл: ${formData.email}\nТөрөл: ${formData.projectType}\n\nМессеж:\n${formData.message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#141416] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Хаах"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                Холбоо барих
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                Ochko-той холбогдох
              </h3>
              <p className="text-sm text-white/60 mt-1">
                Хамтран ажиллах, 3D төсөл эсвэл санал хүсэлтээ шууд имэйлээр илгээнэ үү.
              </p>
            </div>

            {/* Direct Email Link Box */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-6 gap-3">
              <a
                href={`mailto:${targetEmail}`}
                className="flex items-center gap-2.5 truncate hover:text-white transition-colors group"
                title="Шууд мэйл илгээх"
              >
                <div className="p-2 rounded-xl bg-[#B600A8]/20 text-[#B600A8] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-white/40 uppercase tracking-wider block">
                    Албан ёсны имэйл
                  </span>
                  <span className="text-sm sm:text-base font-mono font-medium text-white group-hover:underline truncate block">
                    {targetEmail}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`mailto:${targetEmail}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-[#B600A8] hover:bg-[#a00094] text-white transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Шууд илгээх</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Хууллаа</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Хуулах</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3" />
                <h4 className="text-xl font-bold text-white">Имэйл үүслээ!</h4>
                <p className="text-sm text-white/70 mt-1 max-w-xs">
                  Таны мессеж {targetEmail} хаяг руу илгээгдэхээр нээгдлээ.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Таны нэр
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Жишээ: Бат"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Таны имэйл
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="user@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                    Сэдэв / Төрөл
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1d1d21] border border-white/10 text-white text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                  >
                    <option value="3D Modeling & Design">3D Моделчлол & Дизайн</option>
                    <option value="Anime Project Collaboration">Анимэ Төсөл / Хамтын ажиллагаа</option>
                    <option value="Rendering & Visuals">Рэндэр & График</option>
                    <option value="General Inquiry">Бусад санал хүсэлт</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                    Мессеж
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Төслийн дэлгэрэнгүй, санал хүсэлтээ бичнэ үү..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 12px rgba(181, 1, 167, 0.35)',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Имэйл илгээх (oyunochirb@gmail.com)</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
