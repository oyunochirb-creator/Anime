import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';

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
    projectType: '3D Modeling',
    message: '',
  });

  const email = 'jack@3dcreator.studio';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
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
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                Get In Touch
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                Let&apos;s build together
              </h3>
              <p className="text-sm text-white/60 mt-1">
                Have a 3D modeling, render, or motion project in mind? Drop a message.
              </p>
            </div>

            {/* Quick copy bar */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 mb-6">
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-white/70 shrink-0" />
                <span className="text-xs sm:text-sm font-mono truncate text-white/90">
                  {email}
                </span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3" />
                <h4 className="text-xl font-bold text-white">Message Received!</h4>
                <p className="text-sm text-white/70 mt-1 max-w-xs">
                  Thanks for reaching out. Jack will review your project and get back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Turner"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1d1d21] border border-white/10 text-white text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                  >
                    <option value="3D Modeling">3D Modeling & Assets</option>
                    <option value="Rendering">Photorealistic Rendering</option>
                    <option value="Motion Design">Motion Design & Animation</option>
                    <option value="Branding">Branding & Visual Identity</option>
                    <option value="Web Design">Web Design & Experience</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell Jack about the project timeline, scope, and vision..."
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
                    <span>Send Inquiry</span>
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
