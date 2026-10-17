import React, { useState } from 'react';
import { CaseStudy } from '../types';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showBlueprint, setShowBlueprint] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#160f0a]/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#fcf9f3] rounded-2xl shadow-2xl overflow-hidden border border-[#e5e2dc] my-6 max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="p-5 bg-[#2c241e] text-[#fcf9f3] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-[#fedeb2] uppercase tracking-[0.18em]">
                {project.location}
              </span>
              <span className="text-white/40">·</span>
              <span className="font-label-sm text-white/70">Completed {project.completedYear}</span>
            </div>
            <h3 className="font-headline-sm text-2xl text-white mt-0.5">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Visual Display or Blueprint View */}
          <div className="relative rounded-xl overflow-hidden bg-[#2c241e] aspect-[16/10] w-full shadow-md">
            {showBlueprint ? (
              <div className="w-full h-full bg-[#1b263b] p-6 flex flex-col justify-between text-cyan-200 font-mono text-xs select-none">
                <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2">
                  <span>AURA ARCHITECTURAL BLUEPRINT // SCHEMATIC LEVEL 04</span>
                  <span>SCALE: 1/4" = 1'0" · REV 03</span>
                </div>
                {/* Blueprint schematic vector mockup */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="w-[85%] h-[80%] border-2 border-dashed border-cyan-400/60 rounded flex items-center justify-center relative">
                    <div className="absolute top-2 left-4 text-[10px] text-cyan-300">
                      PRIMARY SALON [32' x 24'] — HONED TRAVERTINE HEARTH
                    </div>
                    <div className="w-1/2 h-full border-r border-cyan-400/40 p-3 flex flex-col justify-end">
                      <span className="text-[10px]">CULINARY GALLERY & DUAL ISLAND</span>
                    </div>
                    <div className="w-1/2 h-full p-3 flex flex-col justify-between">
                      <span className="text-[10px] text-right">MASTER SANCTUARY & SPA</span>
                      <span className="text-[10px] text-right">TERRACE PORTAL VIEW</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-cyan-500/30 pt-2 text-[10px]">
                  <span>ACOUSTIC RATING: STC 58</span>
                  <span>HVAC CONCEALED ARCHITECTURAL PLENUMS</span>
                </div>
              </div>
            ) : (
              <img
                src={project.gallery[selectedPhotoIndex] || project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            )}

            {/* Toggle Blueprint mode button */}
            <button
              onClick={() => setShowBlueprint(!showBlueprint)}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white font-label-sm text-xs flex items-center gap-1.5 hover:bg-black/90 transition-all cursor-pointer shadow"
            >
              <span className="material-symbols-outlined text-[16px]">
                {showBlueprint ? 'photo_camera' : 'architecture'}
              </span>
              <span>{showBlueprint ? 'View Photographs' : 'Inspect Blueprint'}</span>
            </button>
          </div>

          {/* Thumbnail Gallery Strip */}
          {!showBlueprint && project.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    selectedPhotoIndex === idx
                      ? 'border-[#725b38] scale-105 shadow-sm'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Key Project Architectural Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#f0eee8] rounded-xl">
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#7f756f] block">
                Aesthetic Style
              </span>
              <span className="font-title-sm text-sm text-[#160f0a]">{project.style}</span>
            </div>
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#7f756f] block">
                Scale
              </span>
              <span className="font-title-sm text-sm text-[#160f0a]">{project.scale}</span>
            </div>
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#7f756f] block">
                Investment Scope
              </span>
              <span className="font-title-sm text-sm text-[#160f0a]">{project.scope}</span>
            </div>
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#7f756f] block">
                Lead Architect
              </span>
              <span className="font-title-sm text-sm text-[#160f0a]">{project.architect}</span>
            </div>
          </div>

          {/* Narrative & Description */}
          <div className="space-y-3">
            <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
              Architectural Concept
            </span>
            <p className="font-body-md text-[#4d4540] leading-relaxed">{project.description}</p>
          </div>

          {/* Client Voice Quote */}
          {project.clientQuote && (
            <div className="p-4 rounded-xl bg-[#f6f3ed] border-l-2 border-[#725b38] flex flex-col gap-2">
              <p className="font-headline-sm text-base italic text-[#160f0a] leading-snug">
                "{project.clientQuote}"
              </p>
              <div className="text-xs text-[#725b38] font-medium">— {project.clientName}</div>
            </div>
          )}

          {/* Noble Materials Specified */}
          <div className="space-y-2">
            <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
              Noble Materials Specified
            </span>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((m, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#f0eee8] text-xs font-medium text-[#160f0a]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#e5e2dc] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-[#7f756f]">
              Want a similar spatial transformation for your property?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#160f0a] text-white font-title-sm text-xs tracking-wider uppercase hover:bg-[#2c241e] transition-colors cursor-pointer"
            >
              Discuss This Typology
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
