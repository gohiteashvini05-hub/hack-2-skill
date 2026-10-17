import React, { useState } from 'react';
import { ConsultationSubmission } from '../types';

interface ContactScreenProps {
  onSubmitConsultation: (consultation: ConsultationSubmission) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onSubmitConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'New York, NY',
    propertyType: 'Urban Penthouse / Loft',
    approxSqFt: '4,200 sq.ft',
    aestheticTendency: 'Warm Minimalist',
    timeline: 'Within 3 - 6 Months',
    appointmentMode: 'atelier' as 'atelier' | 'onsite' | 'virtual',
    preferredDate: '2025-11-20',
    preferredTime: '14:00 (2:00 PM EST)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<ConsultationSubmission | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
      setSubmittedBooking(submission);
      onSubmitConsultation(submission);
    }, 750);
  };

  const faqs = [
    {
      q: 'What is the typical minimum project scope for an Aura commission?',
      a: 'We generally focus on whole-residence transformations or extensive architectural renovations starting at 2,000 sq.ft and $250,000 in comprehensive interior scope.',
    },
    {
      q: 'How does Aura manage procurement and pricing transparency?',
      a: 'We operate strictly under an open-book governance model. Sourcing invoices from Italian quarries, German joineries, and French textile mills are passed through directly without arbitrary markups.',
    },
    {
      q: 'Can Aura coordinate with our existing general contractor and structural engineers?',
      a: 'Yes. Our licensed AIA master architects collaborate seamlessly with client-appointed construction teams or deploy our pre-vetted master builders.',
    },
  ];

  return (
    <div className="flex flex-col w-full px-margin-sm pt-space-xs pb-24 max-w-4xl mx-auto gap-space-lg">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <span className="font-label-md uppercase tracking-[0.2em] text-[#725b38]">
          Initiate Collaboration
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-[#160f0a]">
          Private Concierge & Consultation Dialogue
        </h1>
        <p className="font-body-md text-[#4d4540]">
          Reserve a confidential spatial dialogue with Principal Julian Delacroix, AIA, or visit our atelier salons.
        </p>
      </div>

      {/* Main Intake Form Card */}
      <div className="rounded-2xl bg-white border border-[#e5e2dc] shadow-sm overflow-hidden">
        <div className="p-6 bg-[#2c241e] text-[#fcf9f3]">
          <span className="font-label-sm uppercase tracking-widest text-[#fedeb2] block">
            Exclusive Atelier Intake
          </span>
          <h2 className="font-headline-sm text-2xl text-white mt-1">Begin Your Sanctuary Dialogue</h2>
        </div>

        {submittedBooking ? (
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#fedeb2] text-[#281800] flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">task_alt</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm text-2xl text-[#160f0a]">
                Consultation Securely Booked
              </h3>
              <p className="text-xs text-[#725b38] font-mono">
                Booking Reference #{submittedBooking.id.slice(-6).toUpperCase()}
              </p>
            </div>
            <p className="font-body-md text-sm text-[#4d4540] max-w-md">
              A formal calendar reservation and initial spatial questionnaire have been sent to{' '}
              <span className="font-semibold text-[#160f0a]">{submittedBooking.clientEmail}</span>.
              Our concierge will telephone you directly to confirm access instructions.
            </p>
            <div className="p-4 bg-[#f0eee8] rounded-xl text-left w-full text-xs space-y-1.5 max-w-md">
              <div className="flex justify-between">
                <span className="text-[#7f756f]">Appointed Date:</span>
                <span className="font-semibold text-[#160f0a]">{submittedBooking.consultationDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7f756f]">Time Window:</span>
                <span className="font-semibold text-[#160f0a]">{submittedBooking.consultationTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7f756f]">Location Mode:</span>
                <span className="font-semibold text-[#160f0a] capitalize">
                  {submittedBooking.appointmentMode} Session
                </span>
              </div>
            </div>
            <button
              onClick={() => setSubmittedBooking(null)}
              className="mt-2 px-6 py-2.5 rounded-full border border-[#160f0a] text-xs font-semibold uppercase tracking-wider text-[#160f0a] hover:bg-[#f0eee8] transition-colors cursor-pointer"
            >
              Book Another Dialogue
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Julian Delacroix"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-3.5 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                  Confidential Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="julian@residence.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-3.5 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                  Property Location (City / State / Country)
                </label>
                <input
                  type="text"
                  placeholder="TriBeCa, New York, NY"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full h-12 px-3.5 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                  Property Typology
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full h-12 px-3.5 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                >
                  <option value="Urban Penthouse / Loft">Urban Penthouse / Loft</option>
                  <option value="Private Coastal / Country Estate">Private Coastal / Country Estate</option>
                  <option value="Flagship Boutique / Hospitality">Flagship Boutique / Hospitality</option>
                  <option value="Architectural Gut Renovation">Architectural Gut Renovation</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                  Approx. Scale
                </label>
                <input
                  type="text"
                  placeholder="e.g. 4,500 sq.ft"
                  value={formData.approxSqFt}
                  onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
                  className="w-full h-12 px-3.5 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                  Target Commencement
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full h-12 px-3.5 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
                >
                  <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                  <option value="Within 3 - 6 Months">Within 3 - 6 Months</option>
                  <option value="Future Development (6 - 12 Months)">Future Development (6 - 12 Months)</option>
                </select>
              </div>
            </div>

            {/* Aesthetic Tendency */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
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

            {/* Appointment Mode */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                Preferred Dialogue Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'atelier', label: 'TriBeCa Atelier Salon', icon: 'domain' },
                  { id: 'onsite', label: 'On-Site Residence', icon: 'villa' },
                  { id: 'virtual', label: 'Virtual Architectural', icon: 'videocam' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, appointmentMode: mode.id as any })}
                    className={`p-3 rounded-xl text-center flex flex-col items-center gap-1 border transition-all cursor-pointer ${
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

            {/* Notes */}
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-xs uppercase tracking-wider text-[#4d4540]">
                Additional Spatial Requirements (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Details regarding your preferred floorplan, acoustic preferences, or heritage preservation guidelines..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#f6f3ed] text-[#160f0a] text-sm focus:outline-none focus:bg-[#f0eee8] border border-[#e5e2dc]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-full bg-[#160f0a] text-white font-title-sm text-sm tracking-wide uppercase hover:bg-[#2c241e] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">
                    progress_activity
                  </span>
                  <span>Securing Dialogue...</span>
                </>
              ) : (
                <>
                  <span>Schedule Private Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Atelier Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* New York */}
        <div className="p-6 rounded-2xl bg-white border border-[#e5e2dc] shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#725b38]">location_on</span>
            <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
              East Coast Headquarters
            </span>
          </div>
          <h3 className="font-headline-sm text-xl text-[#160f0a]">Manhattan Atelier</h3>
          <p className="font-body-sm text-xs text-[#4d4540] leading-relaxed">
            184 Franklin Street, TriBeCa, New York, NY 10013
            <br />
            Private salon open Monday – Friday by appointment only.
          </p>
          <div className="pt-2 border-t border-[#f0eee8] text-xs text-[#160f0a]">
            Direct: +1 (212) 840-2910
          </div>
        </div>

        {/* Los Angeles */}
        <div className="p-6 rounded-2xl bg-white border border-[#e5e2dc] shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#725b38]">location_on</span>
            <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
              West Coast Atelier
            </span>
          </div>
          <h3 className="font-headline-sm text-xl text-[#160f0a]">Beverly Hills Atelier</h3>
          <p className="font-body-sm text-xs text-[#4d4540] leading-relaxed">
            9684 Wilshire Boulevard, Beverly Hills, CA 90212
            <br />
            Private garden studio overlooking the hills.
          </p>
          <div className="pt-2 border-t border-[#f0eee8] text-xs text-[#160f0a]">
            Direct: +1 (310) 942-8812
          </div>
        </div>
      </div>

      {/* Frequently Answered Questions */}
      <div className="flex flex-col gap-3 pt-space-xs">
        <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
          Dialogue FAQ
        </span>
        <h2 className="font-headline-md text-xl md:text-2xl text-[#160f0a]">
          Commissioning An Aura Residence
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-[#e5e2dc] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between font-title-sm text-sm text-[#160f0a] hover:bg-[#f6f3ed] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="material-symbols-outlined text-[20px] text-[#725b38]">
                  {expandedFaq === idx ? 'remove' : 'add'}
                </span>
              </button>
              {expandedFaq === idx && (
                <div className="px-4 pb-4 font-body-sm text-xs text-[#4d4540] leading-relaxed border-t border-[#f0eee8] pt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
