import React from 'react';
import { MaterialItem } from '../types';

interface MaterialModalProps {
  material: MaterialItem | null;
  onClose: () => void;
  onRequestSample: () => void;
}

export const MaterialModal: React.FC<MaterialModalProps> = ({
  material,
  onClose,
  onRequestSample,
}) => {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#160f0a]/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#fcf9f3] rounded-2xl shadow-2xl overflow-hidden border border-[#e5e2dc] my-6">
        {/* Header */}
        <div className="p-5 bg-[#2c241e] text-[#fcf9f3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full border border-white/30 shadow-inner"
              style={{ backgroundColor: material.colorHex }}
            />
            <div>
              <span className="font-label-sm text-[#fedeb2] uppercase tracking-[0.16em] block">
                Provenance: {material.origin}
              </span>
              <h3 className="font-headline-sm text-xl text-white">{material.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="font-body-md text-[#4d4540] text-sm leading-relaxed">
            {material.description}
          </p>

          <div className="space-y-3 p-4 bg-[#f0eee8] rounded-xl text-xs">
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#7f756f] block mb-0.5">
                Tactile Sensation
              </span>
              <span className="font-medium text-[#160f0a]">{material.tactileFeel}</span>
            </div>
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#7f756f] block mb-0.5">
                Acoustic Absorption
              </span>
              <span className="font-medium text-[#160f0a]">{material.acousticRating}</span>
            </div>
            <div>
              <span className="font-label-sm uppercase tracking-wider text-[#7f756f] block mb-0.5">
                Recommended Architectural Application
              </span>
              <span className="font-medium text-[#160f0a]">{material.recommendedUse}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-[#e5e2dc] text-xs font-medium text-[#4d4540] hover:bg-white cursor-pointer"
            >
              Back to Palette
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestSample();
              }}
              className="px-5 py-2.5 rounded-full bg-[#160f0a] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#2c241e] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">inventory_2</span>
              <span>Request Physical Sample</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
