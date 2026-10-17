import React from 'react';
import { LivingSphere } from '../types';

interface SphereModalProps {
  sphere: LivingSphere | null;
  onClose: () => void;
  onSave: (sphere: LivingSphere) => void;
  isSaved: boolean;
  onOpenConsultation: (sphereTitle: string) => void;
}

export const SphereModal: React.FC<SphereModalProps> = ({
  sphere,
  onClose,
  onSave,
  isSaved,
  onOpenConsultation,
}) => {
  if (!sphere) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#160f0a]/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#fcf9f3] rounded-2xl shadow-2xl overflow-hidden border border-[#e5e2dc] my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 bg-[#2c241e] text-[#fcf9f3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#fedeb2] text-[#281800] text-xs font-semibold uppercase tracking-wider">
              {sphere.tag}
            </span>
            <span className="font-headline-sm text-xl text-white">{sphere.title}</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-sm">
            <img src={sphere.image} alt={sphere.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
              Spatial Philosophy & Details
            </span>
            <p className="font-body-md text-[#4d4540] leading-relaxed">{sphere.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#f0eee8] rounded-xl text-xs">
            <div>
              <span className="text-[#7f756f] block uppercase tracking-wider mb-0.5">Scale & Envelope</span>
              <span className="font-semibold text-[#160f0a]">{sphere.dimensions}</span>
            </div>
            <div>
              <span className="text-[#7f756f] block uppercase tracking-wider mb-0.5">Lighting Atmosphere</span>
              <span className="font-semibold text-[#160f0a]">{sphere.lightingSpec}</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
              Signature Material Composition
            </span>
            <div className="flex flex-wrap gap-2">
              {sphere.materials.map((mat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white border border-[#e5e2dc] text-xs font-medium text-[#160f0a]"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#e5e2dc] flex items-center justify-between gap-3">
            <button
              onClick={() => onSave(sphere)}
              className={`px-4 py-2.5 rounded-full border text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                isSaved
                  ? 'bg-[#fedeb2] text-[#281800] border-[#fedeb2]'
                  : 'bg-white text-[#160f0a] border-[#e5e2dc] hover:bg-[#f0eee8]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isSaved ? 'bookmark_added' : 'bookmark_border'}
              </span>
              <span>{isSaved ? 'Saved to Sanctuary' : 'Save to Folio'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation(sphere.title);
              }}
              className="px-5 py-2.5 rounded-full bg-[#160f0a] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#2c241e] transition-colors cursor-pointer"
            >
              Reserve Design Dialogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
