import React from 'react';
import { LOGO_URL } from '../data/interiorData';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onOpenMenu: () => void;
  onOpenConsultation: () => void;
  onOpenPortal: () => void;
  onSelectTab: (tab: TabType) => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenConsultation,
  onOpenPortal,
  onSelectTab,
  savedCount,
}) => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#fcf9f3]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-[#e5e2dc]/60 transition-all">
      <div className="h-20 px-margin-sm max-w-7xl mx-auto flex items-center justify-between gap-space-xs">
        {/* Left: Menu trigger & Studio Branding */}
        <div className="flex items-center gap-space-sm">
          <button
            onClick={onOpenMenu}
            aria-label="Open Studio Navigation Menu"
            className="w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-[#1c1c18] transition-colors hover:text-[#725b38] hover:bg-[#f0eee8] active:scale-95"
          >
            <span className="material-symbols-outlined text-[26px]">menu</span>
          </button>

          <button
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-space-xs text-left group focus:outline-none"
          >
            <img
              alt="Aura Interiors Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
              onError={(e) => {
                // Fallback icon if logo takes time
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm tracking-tight text-[#160f0a] leading-none group-hover:text-[#725b38] transition-colors">
                Aura
              </span>
              <span className="font-label-sm text-label-sm tracking-[0.18em] uppercase text-[#725b38] font-medium leading-tight">
                Interiors
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4d4540]">
          <button
            onClick={() => onSelectTab('home')}
            className="hover:text-[#160f0a] transition-colors py-1 cursor-pointer"
          >
            Atelier
          </button>
          <button
            onClick={() => onSelectTab('explore')}
            className="hover:text-[#160f0a] transition-colors py-1 cursor-pointer"
          >
            Taxonomy of Spaces
          </button>
          <button
            onClick={() => onSelectTab('services')}
            className="hover:text-[#160f0a] transition-colors py-1 cursor-pointer"
          >
            Capabilities
          </button>
          <button
            onClick={() => onSelectTab('projects')}
            className="hover:text-[#160f0a] transition-colors py-1 cursor-pointer"
          >
            Case Studies
          </button>
          <button
            onClick={() => onSelectTab('contact')}
            className="hover:text-[#160f0a] transition-colors py-1 cursor-pointer"
          >
            Concierge
          </button>
        </nav>

        {/* Right: Book Consultation & Profile */}
        <div className="flex items-center gap-space-xs">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#2c241e] text-[#fcf9f3] font-label-md text-label-md tracking-wider uppercase transition-all hover:bg-[#160f0a] hover:shadow-[0_4px_12px_rgba(44,36,30,0.25)] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Book Consultation
          </button>

          <button
            onClick={onOpenPortal}
            aria-label="Client Sanctuary Portal"
            className="relative w-9 h-9 rounded-full bg-[#160f0a] hover:bg-[#2c241e] flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[#ffffff] text-[18px]">person</span>
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#725b38] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
