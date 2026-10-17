import React, { useState } from 'react';
import { LivingSphere, ConsultationSubmission } from '../types';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedSpheres: LivingSphere[];
  onRemoveSaved: (id: string) => void;
  consultations: ConsultationSubmission[];
  onOpenConsultation: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  savedSpheres,
  onRemoveSaved,
  consultations,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'saved' | 'appointments' | 'swatch'>('saved');
  const [swatchOrdered, setSwatchOrdered] = useState(false);
  const [swatchForm, setSwatchForm] = useState({
    name: 'Julian Delacroix',
    address: '450 Washington Street, Apt 11B, New York, NY 10013',
    selectedStone: 'Travertine Romano & Patagonia Quartzite',
    selectedWood: 'Smoked European Walnut',
  });

  if (!isOpen) return null;

  const handleOrderSwatch = (e: React.FormEvent) => {
    e.preventDefault();
    setSwatchOrdered(true);
    setTimeout(() => {
      setSwatchOrdered(false);
    }, 5000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#160f0a]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#fcf9f3] rounded-2xl shadow-2xl overflow-hidden border border-[#e5e2dc] my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#2c241e] text-[#fcf9f3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#725b38] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-xl text-white">Client Sanctuary Portal</h3>
              <p className="font-label-sm text-[#fedeb2] uppercase tracking-wider">
                Private Residential Account · Aura Concierge
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-[#e5e2dc] bg-[#f6f3ed] px-6">
          <button
            onClick={() => setActiveTab('saved')}
            className={`py-3 px-4 font-title-sm text-sm border-b-2 cursor-pointer transition-colors ${
              activeTab === 'saved'
                ? 'border-[#160f0a] text-[#160f0a] font-semibold'
                : 'border-transparent text-[#7f756f] hover:text-[#160f0a]'
            }`}
          >
            Curated Spaces ({savedSpheres.length})
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`py-3 px-4 font-title-sm text-sm border-b-2 cursor-pointer transition-colors ${
              activeTab === 'appointments'
                ? 'border-[#160f0a] text-[#160f0a] font-semibold'
                : 'border-transparent text-[#7f756f] hover:text-[#160f0a]'
            }`}
          >
            Consultations ({consultations.length})
          </button>
          <button
            onClick={() => setActiveTab('swatch')}
            className={`py-3 px-4 font-title-sm text-sm border-b-2 cursor-pointer transition-colors ${
              activeTab === 'swatch'
                ? 'border-[#160f0a] text-[#160f0a] font-semibold'
                : 'border-transparent text-[#7f756f] hover:text-[#160f0a]'
            }`}
          >
            Noble Material Box
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'saved' && (
            <div>
              {savedSpheres.length === 0 ? (
                <div className="text-center py-12 px-4 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#725b38] mb-3">
                    <span className="material-symbols-outlined text-[28px]">bookmark_border</span>
                  </div>
                  <h4 className="font-title-sm text-[#160f0a]">No spaces saved yet</h4>
                  <p className="font-body-sm text-xs text-[#7f756f] max-w-sm mt-1">
                    Explore our Signature Living Spheres and bookmark the spatial typologies that resonate with your vision.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedSpheres.map((sphere) => (
                    <div
                      key={sphere.id}
                      className="rounded-xl overflow-hidden bg-white border border-[#e5e2dc] shadow-sm flex flex-col"
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <img
                          src={sphere.image}
                          alt={sphere.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-[10px] font-semibold uppercase tracking-wider text-[#160f0a]">
                          {sphere.tag}
                        </span>
                      </div>
                      <div className="p-3.5 flex flex-col flex-1 justify-between">
                        <div>
                          <h5 className="font-title-sm text-sm text-[#160f0a]">{sphere.title}</h5>
                          <p className="font-body-sm text-xs text-[#7f756f] line-clamp-2 mt-0.5">
                            {sphere.description}
                          </p>
                        </div>
                        <div className="pt-3 mt-2 border-t border-[#f0eee8] flex items-center justify-between">
                          <button
                            onClick={() => onRemoveSaved(sphere.id)}
                            className="text-xs text-[#ba1a1a] hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[14px]">delete</span>
                            Remove
                          </button>
                          <span className="text-[11px] text-[#725b38] font-medium">Saved to Folio</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="space-y-4">
              {consultations.length === 0 ? (
                <div className="text-center py-10 px-4 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#f0eee8] flex items-center justify-center text-[#725b38] mb-3">
                    <span className="material-symbols-outlined text-[28px]">calendar_month</span>
                  </div>
                  <h4 className="font-title-sm text-[#160f0a]">No pending consultations</h4>
                  <p className="font-body-sm text-xs text-[#7f756f] max-w-sm mt-1">
                    Begin an architectural dialogue with our lead creative directors to tailor your private residence.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation();
                    }}
                    className="mt-4 px-5 py-2.5 rounded-full bg-[#160f0a] text-white font-title-sm text-xs tracking-wider uppercase hover:bg-[#2c241e] transition-colors cursor-pointer"
                  >
                    Initiate Consultation Dialogue
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {consultations.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 rounded-xl bg-white border border-[#e5e2dc] shadow-sm flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm uppercase tracking-wider text-[#725b38]">
                          Ref #{c.id.slice(-6).toUpperCase()}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#fedeb2] text-[#281800] text-[11px] font-semibold">
                          {c.status}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-sm text-base text-[#160f0a]">{c.clientName}</span>
                        <span className="text-xs text-[#7f756f]">{c.clientEmail}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-[#f0eee8] my-1">
                        <div>
                          <span className="text-[#7f756f] block">Typology</span>
                          <span className="font-medium text-[#160f0a]">{c.propertyType}</span>
                        </div>
                        <div>
                          <span className="text-[#7f756f] block">Aesthetic Tendency</span>
                          <span className="font-medium text-[#160f0a]">{c.aestheticTendency}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#4d4540]">
                        Our private client concierge will reach out to schedule your intimate session with Principal Julian Delacroix, AIA.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'swatch' && (
            <form onSubmit={handleOrderSwatch} className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f6f3ed] border border-[#e5e2dc] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#725b38] text-[24px]">inventory_2</span>
                <div>
                  <h4 className="font-title-sm text-sm text-[#160f0a]">Bespoke Tactile Material Casket</h4>
                  <p className="font-body-sm text-xs text-[#7f756f] mt-0.5">
                    Receive hand-quarried Italian travertine cuts, German smoked walnut blocks, Belgian linen cards, and raw slaked lime plaster swatches presented in a linen box.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="font-label-sm text-xs uppercase tracking-wider text-[#7f756f] block mb-1">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    required
                    value={swatchForm.name}
                    onChange={(e) => setSwatchForm({ ...swatchForm, name: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg bg-white border border-[#e5e2dc] text-sm text-[#160f0a] focus:outline-none focus:border-[#725b38]"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-xs uppercase tracking-wider text-[#7f756f] block mb-1">
                    Private Residence Shipping Address
                  </label>
                  <input
                    type="text"
                    required
                    value={swatchForm.address}
                    onChange={(e) => setSwatchForm({ ...swatchForm, address: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg bg-white border border-[#e5e2dc] text-sm text-[#160f0a] focus:outline-none focus:border-[#725b38]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-label-sm text-xs uppercase tracking-wider text-[#7f756f] block mb-1">
                      Natural Stone Swatch
                    </label>
                    <select
                      value={swatchForm.selectedStone}
                      onChange={(e) => setSwatchForm({ ...swatchForm, selectedStone: e.target.value })}
                      className="w-full h-11 px-3 rounded-lg bg-white border border-[#e5e2dc] text-sm text-[#160f0a] focus:outline-none focus:border-[#725b38]"
                    >
                      <option>Travertine Romano & Patagonia Quartzite</option>
                      <option>Honed French Limestone</option>
                      <option>Calacatta Viola Marble</option>
                      <option>Belgian Honed Bluestone</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-label-sm text-xs uppercase tracking-wider text-[#7f756f] block mb-1">
                      Architectural Wood Timber
                    </label>
                    <select
                      value={swatchForm.selectedWood}
                      onChange={(e) => setSwatchForm({ ...swatchForm, selectedWood: e.target.value })}
                      className="w-full h-11 px-3 rounded-lg bg-white border border-[#e5e2dc] text-sm text-[#160f0a] focus:outline-none focus:border-[#725b38]"
                    >
                      <option>Smoked European Walnut</option>
                      <option>Bleached Western Red Cedar</option>
                      <option>California Burl Walnut</option>
                      <option>Fumed French Oak Parquet</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-[#160f0a] text-white font-title-sm text-sm tracking-wide uppercase hover:bg-[#2c241e] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                <span>Dispatch Complimentary Swatch Box</span>
              </button>

              {swatchOrdered && (
                <div className="p-3 bg-[#fedeb2] text-[#281800] rounded-lg text-xs text-center font-medium">
                  ✓ Material casket dispatched via courier. Tracking will be transmitted to your private email.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
