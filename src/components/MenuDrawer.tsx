import React, { useState } from 'react';
import { TabType } from '../types';
import { LOGO_URL } from '../data/interiorData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabType) => void;
  onOpenConsultation: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenConsultation,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadLookbook = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  const navLinks: { tab: TabType; title: string; subtitle: string; icon: string }[] = [
    { tab: 'home', title: 'Atelier Overview', subtitle: 'Private Architecture & Curation', icon: 'roofing' },
    { tab: 'explore', title: 'Taxonomy of Spaces', subtitle: 'Living Spheres & Material Swatches', icon: 'explore' },
    { tab: 'services', title: 'Holistic Practice', subtitle: 'Curation, Capabilities & Estimator', icon: 'design_services' },
    { tab: 'projects', title: 'Architectural Case Studies', subtitle: 'Selected Works & Floorplans', icon: 'apartment' },
    { tab: 'contact', title: 'Initiate Dialogue', subtitle: 'Reserve Intimate Consultation', icon: 'calendar_today' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#160f0a]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 left-0 max-w-md w-full bg-[#fcf9f3] shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e5e2dc]">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Aura Logo" className="h-7 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-title-sm text-[#160f0a] font-serif">Aura Interiors</span>
              <span className="font-label-sm text-[#725b38] uppercase tracking-[0.16em]">Studio Practice</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Navigation"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#4d4540] hover:text-[#160f0a] hover:bg-[#f0eee8] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Studio Philosophy Kicker */}
        <div className="px-6 py-4 bg-[#f6f3ed] border-b border-[#e5e2dc]">
          <p className="font-headline-sm text-sm italic text-[#4d4540] leading-relaxed">
            "Elevating the human condition through bespoke spatial purity, noble materials, and enduring poise."
          </p>
        </div>

        {/* Navigation list */}
        <div className="p-6 flex flex-col gap-2">
          <span className="font-label-sm uppercase tracking-[0.2em] text-[#725b38] mb-1">
            Perspectives
          </span>
          {navLinks.map((item) => (
            <button
              key={item.tab}
              onClick={() => {
                onSelectTab(item.tab);
                onClose();
              }}
              className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#f0eee8] transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#ebe8e2] group-hover:bg-[#2c241e] group-hover:text-white flex items-center justify-center transition-colors text-[#160f0a]">
                  <span className="material-symbols-outlined text-[19px]">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-title-sm text-[#160f0a] group-hover:text-[#725b38] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-xs text-[#7f756f]">{item.subtitle}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-[#d0c4bd] group-hover:text-[#160f0a] group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </button>
          ))}
        </div>

        {/* Lookbook Download Feature */}
        <div className="mx-6 p-4 rounded-xl bg-[#2c241e] text-[#fcf9f3] flex flex-col gap-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fedeb2] text-[20px]">menu_book</span>
            <span className="font-title-sm text-white">Autumn 2025 Atelier Lookbook</span>
          </div>
          <p className="font-body-sm text-xs text-[#d2c4bb]">
            120-page hardcover monograph featuring private penthouses, material blueprints, and bespoke joinery details.
          </p>
          <button
            onClick={handleDownloadLookbook}
            className="mt-1 w-full py-2.5 px-4 rounded-full bg-[#fedeb2] text-[#281800] font-label-md uppercase tracking-wider font-semibold hover:bg-[#f2dfd3] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Download Digital Folio (PDF)</span>
          </button>
          {downloadSuccess && (
            <div className="text-xs text-[#fedeb2] text-center pt-1 animate-pulse">
              ✓ Digital Lookbook folio downloaded successfully.
            </div>
          )}
        </div>

        {/* Atelier Locations */}
        <div className="p-6 mt-auto border-t border-[#e5e2dc] flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
              Atelier Coordinates
            </span>
            <div className="text-xs text-[#4d4540] flex flex-col gap-1">
              <span className="font-medium text-[#160f0a]">Manhattan Atelier:</span>
              <span>184 Franklin Street, TriBeCa, New York, NY 10013</span>
              <span className="font-medium text-[#160f0a] mt-1">Beverly Hills Atelier:</span>
              <span>9684 Wilshire Boulevard, Beverly Hills, CA 90212</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full py-3 rounded-full bg-[#160f0a] text-white font-title-sm text-sm tracking-wide hover:bg-[#2c241e] transition-all cursor-pointer"
          >
            Schedule Consultation Dialogue
          </button>
        </div>
      </div>
    </div>
  );
};
