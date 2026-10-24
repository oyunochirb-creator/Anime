import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ExternalLink, Trash2, Calendar, Plus, Compass, Utensils, CheckCircle2 } from 'lucide-react';
import { InvitationData } from '../../types/bolzoo.ts';
import { ACTIVITY_OPTIONS, FOOD_OPTIONS } from '../../data/bolzooData.ts';

interface SavedInvitationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  invitations: InvitationData[];
  onSelectInvite: (invitation: InvitationData) => void;
  onDeleteInvite: (id: string) => void;
  onNew: () => void;
}

export const SavedInvitationsModal: React.FC<SavedInvitationsModalProps> = ({
  isOpen,
  onClose,
  invitations,
  onSelectInvite,
  onDeleteInvite,
  onNew,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-md border border-[#F8D7E2] rounded-[36px] p-6 sm:p-8 shadow-2xl z-10 text-[#4A3E4E] my-auto max-h-[85vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-pink-50 text-[#8B7489] hover:text-[#4A3E4E] transition-colors cursor-pointer"
              aria-label="Хаах"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#FF6B9D] font-bold font-rounded">
                Хадгалсан урилгууд
              </span>
              <h3 className="text-2xl font-black text-[#4A3E4E] font-rounded mt-1">
                Миний үүсгэсэн урилгууд 💌
              </h3>
              <p className="text-xs text-[#8B7489] mt-0.5">
                Хүлээн авагчийн өгсөн хариу болон сонгосон цаг, төлөвлөгөө энд шууд харагдана.
              </p>
            </div>

            {invitations.length === 0 ? (
              <div className="text-center py-10 space-y-3">
                <div className="text-4xl">💌</div>
                <p className="text-sm text-[#8B7489]">
                  Одоогоор урилга үүсгээгүй байна.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNew();
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B9D] to-[#A0C4FF] text-white text-xs font-bold font-rounded shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Анхны урилгаа үүсгэх</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {invitations.map((inv) => {
                  const hasResponse = inv.rsvpResponse?.accepted;
                  const pickedDate = inv.rsvpResponse?.pickedDate;
                  const pickedActivities = inv.rsvpResponse?.pickedActivities || [];

                  return (
                    <div
                      key={inv.id}
                      className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-50/60 to-blue-50/60 border border-[#F8D7E2] hover:border-[#FFB3C6] transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 fill-[#FF6B9D] text-[#FF6B9D] shrink-0" />
                            <h4 className="font-bold text-sm sm:text-base text-[#4A3E4E] font-rounded">
                              {inv.crushName}-д зориулсан урилга
                            </h4>
                            {hasResponse && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-extrabold flex items-center gap-1 border border-emerald-200">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Хариу өгсөн!</span>
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#8B7489] mt-0.5 font-medium">
                            &ldquo;{inv.headline}&rdquo;
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              onSelectInvite(inv);
                              onClose();
                            }}
                            className="px-3 py-1.5 rounded-xl bg-white hover:bg-pink-100 text-xs font-bold text-[#FF6B9D] border border-pink-200 transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <span>Үзэх</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>

                          <button
                            type="button"
                            onClick={() => onDeleteInvite(inv.id)}
                            className="p-2 rounded-xl text-[#8B7489] hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                            title="Устгах"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Recipient's Choice Highlight */}
                      {hasResponse && (
                        <div className="p-3 rounded-xl bg-white/90 border border-emerald-200 text-xs text-[#4A3E4E] space-y-1 font-body">
                          <div className="font-bold text-emerald-800 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                            <span>
                              Түүний сонгосон цаг: {pickedDate || 'Баталгаажсан'} {inv.rsvpResponse?.pickedTime}
                            </span>
                          </div>

                          {pickedActivities.length > 0 && (
                            <div className="text-[11px] text-[#5D4E60]">
                              <strong>Хамт хийх:</strong>{' '}
                              {pickedActivities
                                .map((aId) => ACTIVITY_OPTIONS.find((a) => a.id === aId)?.name)
                                .filter(Boolean)
                                .join(', ')}
                            </div>
                          )}

                          {inv.rsvpResponse?.customNote && (
                            <div className="italic text-pink-700 font-handwriting text-sm pt-0.5">
                              &ldquo;{inv.rsvpResponse.customNote}&rdquo;
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SavedInvitationsModal;
