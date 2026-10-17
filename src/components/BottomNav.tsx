import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const navItems: { tab: TabType; label: string; icon: string }[] = [
    { tab: 'home', label: 'Home', icon: 'roofing' },
    { tab: 'explore', label: 'Explore', icon: 'explore' },
    { tab: 'services', label: 'Services', icon: 'design_services' },
    { tab: 'projects', label: 'Projects', icon: 'apartment' },
    { tab: 'contact', label: 'Contact', icon: 'mail' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#fcf9f3]/92 backdrop-blur-xl border-t border-[#e5e2dc]/80 shadow-[0_-2px_14px_rgba(44,36,30,0.06)]">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-space-xs">
        {navItems.map((item) => {
          const isActive = currentTab === item.tab;
          return (
            <button
              key={item.tab}
              onClick={() => {
                onSelectTab(item.tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-[#160f0a] font-semibold scale-105'
                  : 'text-[#4d4540] hover:text-[#160f0a] font-normal'
              }`}
            >
              <div className="relative">
                <span
                  className="material-symbols-outlined text-[22px] transition-transform"
                  style={{
                    fontVariationSettings: isActive ? "'FILL' 1, 'wght' 500" : "'FILL' 0, 'wght' 400",
                  }}
                >
                  {item.icon}
                </span>
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#725b38]" />
                )}
              </div>
              <span className="font-label-sm text-label-sm tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
