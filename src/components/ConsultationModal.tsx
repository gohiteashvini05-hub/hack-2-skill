import React, { useState } from 'react';
import { ConsultationSubmission } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitConsultation: (consultation: ConsultationSubmission) => void;
  defaultSphereTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSubmitConsultation,
  defaultSphereTitle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Urban Penthouse / Loft',
    aestheticTendency: 'Warm Minimalist',
    approxSqFt: '4,000 - 6,000 sq.ft',
    appointmentMode: 'atelier' as 'atelier' | 'onsite' | 'virtual',
    preferredDate: '2025-11-14',
    preferredTime: '14:00 (2:00 PM EST)',
    notes: defaultSphereTitle ? `Interested in exploring design solutions inspired by ${defaultSphereTitle}.` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission: ConsultationSubmission = {
      id: `aura-${Date.now()}`,
      clientName: formData.name || 'Julian Delacroix',
      clientEmail: formData.email || 'julian@residence.com',
      clientPhone: formData.phone,
      propertyType: formData.propertyType,
      aestheticTendency: formData.aestheticTendency,
      approxSqFt: formData.approxSqFt,
      appointmentMode: formData.appointmentMode,
      consultationDate: formData.preferredDate,
      consultationTime: formData.preferredTime,
      notes: formData.notes,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'Confirmed',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSubmitConsultation(submission);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#160f0a]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#fcf9f3] rounded-2xl shadow-2xl overflow-hidden border border-[#e5e2dc] my-6">
        {/* Header */}
        <div className="p-6 bg-[#2c241e] text-[#fcf9f3] flex items-center justify-between">
          <div>
            <span className="font-label-sm uppercase tracking-[0.2em] text-[#fedeb2] block">
              Aura Concierge Desk
            </span>
            <h3 className="font-headline-sm text-2xl text-white">Reserve Private Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#fedeb2] text-[#281800] flex items-center justify-center shadow-md animate-bounce">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-headline-sm text-2xl text-[#160f0a]">Consultation Reserved</h4>
              <p className="font-body-md text-sm text-[#4d4540] max-w-md">
                Thank you, {formData.name || 'Valued Client'}. Our principal architectural director will review your spatial requirements and contact you within 24 hours.
              </p>
            </div>
            <div className="p-4 bg-[#f0eee8] rounded-xl text-left w-full text-xs text-[#4d4540] space-y-1">
              <div>
                <span className="text-[#7f756f]">Appointment Mode: </span>
                <span className="font-semibold text-[#160f0a] capitalize">{formData.appointmentMode} Dialogue</span>
              </div>
              <div>
                <span className="text-[#7f756f]">Preferred Window: </span>
                <span className="font-semibold text-[#160f0a]">{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
              <div>
                <span className="text-[#7f756f]">Property Typology: </span>
                <span className="font-semibold text-[#160f0a]">{formData.propertyType}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-2 px-8 py-3 rounded-full bg-[#160f0a] text-white font-title-sm text-sm tracking-wide uppercase hover:bg-[#2c241e] transition-colors cursor-pointer"
            >
              Return to Atelier
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                Full Legal Name
              </label>
              <input
                required
                type="text"
                placeholder="Julian Delacroix"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-12 px-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                  Confidential Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="julian@residence.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                  Direct Phone / Mobile
                </label>
                <input
                  type="tel"
                  placeholder="+1 (212) 555-0198"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                  Property Typology
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full h-12 px-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                >
                  <option value="Urban Penthouse / Loft">Urban Penthouse / Loft</option>
                  <option value="Private Coastal / Country Estate">Private Coastal / Country Estate</option>
                  <option value="Flagship Boutique / Hospitality">Flagship Boutique / Hospitality</option>
                  <option value="Architectural Gut Renovation">Architectural Gut Renovation</option>
                  <option value="Modular Kitchen & Millwork Suite">Modular Kitchen & Millwork Suite</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                  Approx. Square Footage
                </label>
                <select
                  value={formData.approxSqFt}
                  onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
                  className="w-full h-12 px-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                >
                  <option value="1,800 - 3,000 sq.ft">1,800 - 3,000 sq.ft</option>
                  <option value="3,000 - 5,000 sq.ft">3,000 - 5,000 sq.ft</option>
                  <option value="5,000 - 8,000 sq.ft">5,000 - 8,000 sq.ft</option>
                  <option value="8,000+ sq.ft (Private Estate)">8,000+ sq.ft (Private Estate)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                Design Aesthetic Tendency
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Warm Minimalist',
                  'Organic Modern',
                  'Classic Contemporary',
                  'Japandi Serenity',
                ].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setFormData({ ...formData, aestheticTendency: style })}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      formData.aestheticTendency === style
                        ? 'bg-[#160f0a] text-white shadow-sm'
                        : 'bg-[#f0eee8] text-[#1c1c18] hover:bg-[#e5e2dc]'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                Appointment Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'atelier', label: 'TriBeCa Atelier', icon: 'domain' },
                  { id: 'onsite', label: 'On-Site Walkthrough', icon: 'villa' },
                  { id: 'virtual', label: 'Virtual Dialogue', icon: 'videocam' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, appointmentMode: mode.id as any })}
                    className={`p-2.5 rounded-xl text-center flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                      formData.appointmentMode === mode.id
                        ? 'bg-[#2c241e] text-white border-[#2c241e]'
                        : 'bg-white text-[#4d4540] border-[#e5e2dc] hover:bg-[#f6f3ed]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{mode.icon}</span>
                    <span className="text-[11px] font-medium leading-tight">{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                  Target Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full h-12 px-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md uppercase tracking-wider text-[#4d4540]">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full h-12 px-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                >
                  <option value="10:00 (10:00 AM EST)">10:00 AM (Morning Salon)</option>
                  <option value="14:00 (2:00 PM EST)">2:00 PM (Afternoon Dialogue)</option>
                  <option value="17:00 (5:00 PM EST)">5:00 PM (Evening Aperitif & Review)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-full bg-[#160f0a] text-white font-title-sm text-sm tracking-wide font-medium flex items-center justify-center gap-2 shadow-md hover:bg-[#2c241e] transition-all cursor-pointer mt-4"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  <span>Securing Calendar Dialogue...</span>
                </>
              ) : (
                <>
                  <span>Confirm Consultation Request</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
