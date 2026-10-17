import React, { useState } from 'react';
import {
  HERO_IMAGE,
  LIVING_SPHERES,
  SERVICES,
  CASE_STUDIES,
  TESTIMONIALS,
} from '../data/interiorData';
import { LivingSphere, CaseStudy, ConsultationSubmission, TabType } from '../types';

interface HomeScreenProps {
  onSelectTab: (tab: TabType) => void;
  onSelectSphere: (sphere: LivingSphere) => void;
  onSelectProject: (project: CaseStudy) => void;
  onSubmitConsultation: (consultation: ConsultationSubmission) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onSelectSphere,
  onSelectProject,
  onSubmitConsultation,
}) => {
  // Inline consultation form state matching the design
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Urban Penthouse / Loft');
  const [selectedStyle, setSelectedStyle] = useState('warm-minimal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccreditation, setActiveAccreditation] = useState<string | null>(null);

  const styleOptions = [
    { id: 'warm-minimal', label: 'Warm Minimalist' },
    { id: 'organic-modern', label: 'Organic Modern' },
    { id: 'classic-contemporary', label: 'Classic Contemporary' },
    { id: 'japandi', label: 'Japandi Serenity' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission: ConsultationSubmission = {
      id: `aura-${Date.now()}`,
      clientName: clientName || 'Julian Delacroix',
      clientEmail: clientEmail || 'julian@residence.com',
      propertyType: propertyType,
      aestheticTendency: styleOptions.find((s) => s.id === selectedStyle)?.label || 'Warm Minimalist',
      appointmentMode: 'atelier',
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
    }, 750);
  };

  return (
    <div className="flex flex-col w-full pb-20">
      {/* 1. Hero Section */}
      <section className="flex flex-col px-margin-sm pt-space-xs pb-space-lg gap-space-md max-w-4xl mx-auto w-full">
        {/* Credibility Micro-Pills */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveAccreditation(activeAccreditation === 'award' ? null : 'award')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 font-label-sm text-label-sm transition-all cursor-pointer ${
              activeAccreditation === 'award'
                ? 'bg-[#fedeb2] text-[#281800] ring-1 ring-[#725b38]'
                : 'bg-surface-container text-on-surface-variant hover:bg-[#ebe8e2]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px] text-[#725b38]">workspace_premium</span>
            <span>Award Winning Studio</span>
          </button>

          <button
            onClick={() => setActiveAccreditation(activeAccreditation === 'homes' ? null : 'homes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 font-label-sm text-label-sm transition-all cursor-pointer ${
              activeAccreditation === 'homes'
                ? 'bg-[#fedeb2] text-[#281800] ring-1 ring-[#725b38]'
                : 'bg-surface-container text-on-surface-variant hover:bg-[#ebe8e2]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px] text-[#725b38]">domain_verification</span>
            <span>150+ Bespoke Homes</span>
          </button>

          <button
            onClick={() => setActiveAccreditation(activeAccreditation === 'ad' ? null : 'ad')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 font-label-sm text-label-sm transition-all cursor-pointer ${
              activeAccreditation === 'ad'
                ? 'bg-[#fedeb2] text-[#281800] ring-1 ring-[#725b38]'
                : 'bg-surface-container text-on-surface-variant hover:bg-[#ebe8e2]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px] text-[#725b38]">auto_stories</span>
            <span>Architectural Digest Featured</span>
          </button>
        </div>

        {/* Dynamic Accolade Toast/Badge Note */}
        {activeAccreditation && (
          <div className="p-3 rounded-lg bg-[#f0eee8] text-xs text-[#4d4540] border border-[#e5e2dc] flex items-center justify-between animate-fadeIn">
            <span>
              {activeAccreditation === 'award' && 'Recipient of 2024 International Residential Design Excellence & AIA New York Honor.'}
              {activeAccreditation === 'homes' && 'Over 150 turnkey luxury estates crafted across Manhattan, the Hamptons, and Malibu.'}
              {activeAccreditation === 'ad' && 'Celebrated in Architectural Digest "The Leading 50 American Spatial Practices".'}
            </span>
            <button onClick={() => setActiveAccreditation(null)} className="text-[#725b38] ml-2 font-bold cursor-pointer">✕</button>
          </div>
        )}

        {/* Editorial Typography Title */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
            Private Architecture & Curation
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
            Transform Your Space Into Something Extraordinary.
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Thoughtfully designed interiors that reflect your lifestyle, personality, and vision.
          </p>
        </div>

        {/* Hero Showcase Card */}
        <div
          onClick={() => onSelectProject(CASE_STUDIES[0])}
          className="relative w-full rounded-xl overflow-hidden bg-surface-container shadow-md group cursor-pointer"
        >
          <div className="aspect-[4/5] md:aspect-[16/9] w-full relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A breathtaking luxury living room interior with warm ambient sunlight streaming through floor to ceiling sheer curtains. Natural oiled walnut wall paneling, low-slung bouclé textured curved sofa, and an organic raw-edge travertine coffee table."
              src={HERO_IMAGE}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-space-md flex flex-col gap-2 text-surface">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface/20 backdrop-blur-md font-label-sm text-label-sm text-surface tracking-wider uppercase">
                  TriBeCa Loft 04
                </span>
                <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary-fixed">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span> Curated Autumn 2024
                </span>
              </div>
              <p className="font-title-sm text-title-sm text-surface leading-snug">
                Travertine, smoked walnut, and quiet architectural precision.
              </p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col gap-2.5 pt-1">
          <button
            onClick={() => onSelectTab('explore')}
            className="w-full h-12 rounded-full bg-primary-container text-surface flex items-center justify-center font-title-sm text-title-sm font-medium tracking-wide shadow-md transition-transform active:scale-[0.98] hover:bg-primary cursor-pointer"
          >
            Explore Designs
          </button>
          <a
            href="#consultation"
            className="w-full h-12 rounded-full bg-surface-container text-primary flex items-center justify-center font-title-sm text-title-sm font-medium tracking-wide transition-all active:scale-[0.98] hover:bg-[#ebe8e2] cursor-pointer"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* 2. Featured Interior Designs Grid (Category Highlights) */}
      <section className="flex flex-col py-space-md px-margin-sm gap-space-md bg-surface-container-low w-full">
        <div className="max-w-4xl mx-auto w-full flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-secondary">
              Taxonomy of Spaces
            </span>
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile text-primary">
              Signature Living Spheres
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            06 Suites
          </span>
        </div>

        {/* Scrollable Ribbon Categories matching HTML */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex gap-space-sm overflow-x-auto pb-space-xs scrollbar-none snap-x snap-mandatory -mx-margin-sm px-margin-sm">
            {LIVING_SPHERES.map((sphere) => (
              <div
                key={sphere.id}
                className="w-[82vw] md:w-[380px] shrink-0 snap-center flex flex-col rounded-xl overflow-hidden bg-surface-container shadow-sm group"
              >
                <div className="aspect-[16/11] w-full relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={sphere.imageAlt}
                    src={sphere.image}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    {sphere.tag}
                  </span>
                </div>
                <div className="p-space-md flex flex-col gap-2 bg-surface-container-lowest flex-1 justify-between">
                  <div>
                    <h3 className="font-title-lg text-title-lg text-primary">{sphere.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {sphere.description}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectSphere(sphere)}
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider pt-2 group-hover:text-primary transition-colors cursor-pointer text-left"
                  >
                    <span>Explore Design</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Services Preview */}
      <section className="flex flex-col py-space-md px-margin-sm gap-space-md max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-secondary">
            Holistic Practice
          </span>
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile text-primary">
            Curation & Capabilities
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            From architectural conceptualization to bespoke art acquisition and white-glove staging.
          </p>
        </div>

        {/* Clean Minimalist Grid matching user HTML */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectTab('services')}
              className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">{srv.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-title-sm text-title-sm text-primary">{srv.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{srv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Projects (Editorial Showcase) */}
      <section className="flex flex-col py-space-md px-margin-sm gap-space-md bg-surface-container-low w-full">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-secondary">
            Selected Works
          </span>
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile text-primary">
            Architectural Case Studies
          </h2>
        </div>

        <div className="max-w-4xl mx-auto w-full space-y-4">
          {/* Editorial Project 1 */}
          <div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm group">
            <div className="aspect-[16/10] w-full relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Ultra-luxury TriBeCa penthouse interior"
                src={CASE_STUDIES[0].image}
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/75 backdrop-blur-md text-surface font-label-sm text-label-sm">
                Completed 2024
              </div>
            </div>
            <div className="p-space-md flex flex-col gap-space-sm">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  TriBeCa, New York
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  The Lumina Penthouse
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-2 py-space-xs bg-surface-container-low rounded-lg p-2.5">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Style</span>
                  <span className="font-title-sm text-title-sm text-primary">Warm Contemp.</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Scale</span>
                  <span className="font-title-sm text-title-sm text-primary">4,200 sq.ft</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Scope</span>
                  <span className="font-title-sm text-title-sm text-primary">$420,000</span>
                </div>
              </div>
              <button
                onClick={() => onSelectProject(CASE_STUDIES[0])}
                className="inline-flex items-center justify-between w-full pt-1 text-primary hover:text-secondary transition-colors cursor-pointer text-left"
              >
                <span className="font-title-sm text-title-sm font-semibold">View Project Archive</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Editorial Project 2 */}
          <div className="flex flex-col rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm group">
            <div className="aspect-[16/10] w-full relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Modern organic coastal estate in Malibu"
                src={CASE_STUDIES[1].image}
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/75 backdrop-blur-md text-surface font-label-sm text-label-sm">
                Completed 2024
              </div>
            </div>
            <div className="p-space-md flex flex-col gap-space-sm">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  Malibu, California
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Villa Solstice
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-2 py-space-xs bg-surface-container-low rounded-lg p-2.5">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Style</span>
                  <span className="font-title-sm text-title-sm text-primary">Organic Modern</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Scale</span>
                  <span className="font-title-sm text-title-sm text-primary">5,800 sq.ft</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Scope</span>
                  <span className="font-title-sm text-title-sm text-primary">$650,000</span>
                </div>
              </div>
              <button
                onClick={() => onSelectProject(CASE_STUDIES[1])}
                className="inline-flex items-center justify-between w-full pt-1 text-primary hover:text-secondary transition-colors cursor-pointer text-left"
              >
                <span className="font-title-sm text-title-sm font-semibold">View Project Archive</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Value Pillars) */}
      <section className="flex flex-col py-space-lg px-margin-sm gap-space-md max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-1 text-center items-center">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
            The Aura Standard
          </span>
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile text-primary">
            Uncompromising Discipline
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
            An architectural journey defined by absolute transparency and bespoke craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Pillar 1 */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">brush</span>
            </div>
            <h4 className="font-title-sm text-title-sm text-primary">Personalized Designs</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Every silhouette meticulously conceived for your private lifestyle habits.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">aspect_ratio</span>
            </div>
            <h4 className="font-title-sm text-title-sm text-primary">Space Optimization</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Harmonious circulation flow that yields stillness in open-plan areas.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">payments</span>
            </div>
            <h4 className="font-title-sm text-title-sm text-primary">Transparent Pricing</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Open-book financial governance with zero arbitrary distributor markups.
            </p>
          </div>
          {/* Pillar 4 */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">diamond</span>
            </div>
            <h4 className="font-title-sm text-title-sm text-primary">Quality Materials</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Sustainably quarried travertines, FSC-certified walnuts, pure linens.
            </p>
          </div>
          {/* Pillar 5 */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">architecture</span>
            </div>
            <h4 className="font-title-sm text-title-sm text-primary">Licensed Master Architects</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Over 25 combined decades of prestigious residential studio practice.
            </p>
          </div>
          {/* Pillar 6 */}
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
            <h4 className="font-title-sm text-title-sm text-primary">On-Time Delivery</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
              Milestone-bonded project execution with real-time digital oversight.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials */}
      <section className="flex flex-col py-space-md px-margin-sm gap-space-md bg-primary text-surface w-full">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-space-md">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed">
              Private Testimonials
            </span>
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile text-surface">
              Voices of Our Patrons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TESTIMONIALS.slice(0, 2).map((test) => (
              <div
                key={test.id}
                className="p-space-md rounded-xl bg-primary-container text-surface flex flex-col justify-between gap-space-sm shadow-md"
              >
                <div>
                  <div className="flex items-center gap-1 text-secondary-container mb-2">
                    {[...Array(test.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-headline-sm text-headline-sm italic font-normal text-surface leading-snug">
                    {test.quote}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-2">
                  <div className="w-10 h-10 rounded-full bg-secondary text-surface flex items-center justify-center font-title-sm text-title-sm font-semibold">
                    {test.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-surface">{test.author}</span>
                    <span className="font-label-sm text-label-sm text-on-primary-container">
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Consultation Inquiry Section */}
      <section
        id="consultation"
        className="flex flex-col py-space-lg px-margin-sm gap-space-md bg-surface-container-low w-full scroll-mt-20"
      >
        <div className="max-w-xl mx-auto w-full flex flex-col gap-1 text-center items-center">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
            Initiate Collaboration
          </span>
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile text-primary">
            Begin Your Sanctuary
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
            Reserve an intimate design dialogue with our principal creative directors.
          </p>
        </div>

        {/* Minimalist Intake Card */}
        <form
          onSubmit={handleFormSubmit}
          className="max-w-xl mx-auto w-full flex flex-col p-space-md rounded-2xl bg-surface-container-lowest shadow-sm gap-space-md"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant"
              htmlFor="clientName"
            >
              Full Legal Name
            </label>
            <input
              id="clientName"
              type="text"
              required
              placeholder="Julian Delacroix"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full h-12 px-space-sm rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container border border-transparent focus:border-secondary"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant"
              htmlFor="clientEmail"
            >
              Confidential Email
            </label>
            <input
              id="clientEmail"
              type="email"
              required
              placeholder="julian@residence.com"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="w-full h-12 px-space-sm rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container border border-transparent focus:border-secondary"
            />
          </div>

          {/* Property Type Dropdown */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant"
              htmlFor="propertyType"
            >
              Property Typology
            </label>
            <div className="relative">
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full h-12 px-space-sm pr-10 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container border border-transparent focus:border-secondary"
              >
                <option value="Urban Penthouse / Loft">Urban Penthouse / Loft</option>
                <option value="Private Coastal / Country Estate">Private Coastal / Country Estate</option>
                <option value="Flagship Boutique / Hospitality">Flagship Boutique / Hospitality</option>
                <option value="Architectural Gut Renovation">Architectural Gut Renovation</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* Preferred Style Chips */}
          <div className="flex flex-col gap-2">
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
              Design Aesthetic Tendency
            </span>
            <div className="flex flex-wrap gap-2">
              {styleOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedStyle(opt.id)}
                  className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    selectedStyle === opt.id
                      ? 'bg-primary text-surface shadow-sm'
                      : 'bg-surface-container text-on-surface hover:bg-[#ebe8e2]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit CTA Button */}
          {!isSubmitted ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-full bg-primary-container text-surface font-title-sm text-title-sm tracking-wide font-medium flex items-center justify-center gap-2 shadow-md hover:bg-primary transition-all active:scale-[0.98] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">
                    progress_activity
                  </span>
                  <span>Securing Consultation...</span>
                </>
              ) : (
                <>
                  <span>Schedule My Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </>
              )}
            </button>
          ) : (
            <div className="p-3.5 rounded-lg bg-secondary-container text-on-secondary-container font-body-sm text-body-sm text-center font-medium animate-fadeIn">
              Thank you. Our concierge will reach out within 24 hours.
            </div>
          )}
        </form>
      </section>

      {/* 8. Refined Footer */}
      <footer className="flex flex-col px-margin-sm py-space-lg gap-space-lg bg-surface-container-high text-on-surface w-full">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-space-lg">
          {/* Brand Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-display-mobile text-display-mobile text-primary font-serif">
                A
              </span>
              <div className="flex flex-col">
                <span className="font-title-sm text-title-sm font-semibold tracking-tight text-primary">
                  Aura Interiors
                </span>
                <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-secondary">
                  New York & Los Angeles
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
              Elevating the human condition through bespoke spatial purity, noble materials, and enduring poise.
            </p>
          </div>

          {/* Contact & Studio Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                Manhattan Atelier
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">
                184 Franklin Street, TriBeCa, New York, NY 10013
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                Concierge Inquiries
              </span>
              <a
                className="font-body-sm text-body-sm text-primary hover:text-secondary underline decoration-outline-variant underline-offset-4"
                href="mailto:concierge@aurainteriors.com"
              >
                concierge@aurainteriors.com
              </a>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                +1 (212) 840-2910
              </span>
            </div>
          </div>

          {/* Social Links & Distinctions */}
          <div className="flex flex-col gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-on-surface-variant">
              Follow Our Perspectives
            </span>
            <div className="flex items-center gap-3">
              <a
                className="px-3.5 py-1.5 rounded-full bg-surface text-primary font-label-sm text-label-sm hover:bg-secondary-container transition-colors"
                href="#perspectives"
                onClick={(e) => { e.preventDefault(); alert("Aura Perspectives Instagram @aurainteriors.studio"); }}
              >
                Instagram
              </a>
              <a
                className="px-3.5 py-1.5 rounded-full bg-surface text-primary font-label-sm text-label-sm hover:bg-secondary-container transition-colors"
                href="#perspectives"
                onClick={(e) => { e.preventDefault(); alert("Aura Curated Boards on Pinterest"); }}
              >
                Pinterest
              </a>
              <a
                className="px-3.5 py-1.5 rounded-full bg-surface text-primary font-label-sm text-label-sm hover:bg-secondary-container transition-colors"
                href="#perspectives"
                onClick={(e) => { e.preventDefault(); alert("Read Architectural Digest Editorial: 'Aura Interiors on Quiet Luxury'"); }}
              >
                Architectural Digest
              </a>
            </div>
          </div>

          {/* Legal Line */}
          <div className="flex flex-col pt-space-xs text-on-surface-variant font-label-sm text-label-sm gap-1 border-t border-[#dcdad4]">
            <span>© 2025 Aura Architectural Interiors Studio LLC. All rights reserved.</span>
            <span>Registered AIA Private Residential Practice.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
