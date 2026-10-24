import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Layers, Box } from 'lucide-react';
import { ProjectItem } from '../../types/index.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#121214] border border-[#D7E2EA]/20 rounded-[36px] sm:rounded-[48px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA] my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
            <span className="text-sm font-black text-[#B600A8] tracking-widest uppercase">
              Project {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
              [{project.category}]
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            {project.title}
          </h3>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
            <div>
              <span className="text-xs text-white/50 uppercase tracking-wider block">Discipline</span>
              <span className="text-sm font-medium text-white flex items-center gap-1.5 mt-0.5">
                <Box className="w-3.5 h-3.5 text-[#B600A8]" />
                3D Art & CGI
              </span>
            </div>
            <div>
              <span className="text-xs text-white/50 uppercase tracking-wider block">Pipeline</span>
              <span className="text-sm font-medium text-white flex items-center gap-1.5 mt-0.5">
                <Layers className="w-3.5 h-3.5 text-[#B600A8]" />
                Blender · Cinema4D
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-xs text-white/50 uppercase tracking-wider block">Deliverables</span>
              <span className="text-sm font-medium text-white flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                4K Key Visuals & Renders
              </span>
            </div>
          </div>

          {/* Image Showcase Grid */}
          <div className="space-y-4 mb-8">
            <div className="rounded-[32px] overflow-hidden bg-black/40 border border-white/10">
              <img
                src={project.images.col2Tall}
                alt={`${project.title} primary render`}
                className="w-full h-auto max-h-[500px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-[28px] overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={project.images.col1Top}
                  alt={`${project.title} detail angle 1`}
                  className="w-full h-[240px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-[28px] overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={project.images.col1Bottom}
                  alt={`${project.title} detail angle 2`}
                  className="w-full h-[240px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <p className="text-xs text-white/60">
              Interested in similar 3D visuals for your brand?
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-full text-white font-medium uppercase tracking-widest text-xs cursor-pointer transition-transform hover:scale-105 active:scale-95"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
              >
                Inquire For This Style
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
