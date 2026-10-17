import React, { useState } from 'react';
import { SERVICES } from '../data/interiorData';

interface ServicesScreenProps {
  onOpenConsultation: (scopeNotes?: string) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onOpenConsultation }) => {
  // Estimator State
  const [sqFt, setSqFt] = useState<number>(4500);
  const [typologyRate, setTypologyRate] = useState<number>(100); // base $/sqft for design & oversight
  const [finishMultiplier, setFinishMultiplier] = useState<number>(1.2); // finish grade
  const [activeServiceTab, setActiveServiceTab] = useState<string>(SERVICES[0].id);

  // Calculations
  const calculatedMillwork = Math.round(sqFt * 45 * finishMultiplier);
  const calculatedStone = Math.round(sqFt * 30 * finishMultiplier);
  const calculatedFFE = Math.round(sqFt * 50 * finishMultiplier);
  const calculatedArchitecturalGovernance = Math.round(sqFt * typologyRate);
  const totalEstimatedInvestment =
    calculatedMillwork + calculatedStone + calculatedFFE + calculatedArchitecturalGovernance;

  const currentService = SERVICES.find((s) => s.id === activeServiceTab) || SERVICES[0];

  const processPhases = [
    {
      num: '01',
      title: 'Intimate Dialogue & Spatial Audit',
      duration: 'Weeks 1 - 3',
      description:
        'A comprehensive audit of your daily private rituals, daylight orientations, and physical lifestyle patterns. We generate the foundational spatial thesis.',
    },
    {
      num: '02',
      title: 'Schematic Architecture & 3D Simulation',
      duration: 'Weeks 4 - 8',
      description:
        'Cinema-grade photorealistic renderings and circulation blueprints. Every door threshold, recessed cove, and millwork reveal is mapped down to the millimeter.',
    },
    {
      num: '03',
      title: 'Noble Material Procurement',
      duration: 'Weeks 9 - 14',
      description:
        'Direct provenance quarry selection in Tivoli and Verona. FSC European smoked oak logs are tagged in Bavaria for sequential bookmatched joinery.',
    },
    {
      num: '04',
      title: 'Precision Fabrication & Site Governance',
      duration: 'Months 4 - 9',
      description:
        'Master German-engineered joinery installation and artisanal slaked plaster application with continuous digital and on-site architect supervision.',
    },
    {
      num: '05',
      title: 'White-Glove Staging & Turnkey Handover',
      duration: 'Final Month',
      description:
        'Curated art installation, bespoke Italian textile pressing, atmospheric lighting tuning, and delivery of your private architectural archive box.',
    },
  ];

  return (
    <div className="flex flex-col w-full px-margin-sm pt-space-xs pb-24 max-w-4xl mx-auto gap-space-lg">
      {/* Page Title */}
      <div className="flex flex-col gap-1">
        <span className="font-label-md uppercase tracking-[0.2em] text-[#725b38]">
          Holistic Practice
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-[#160f0a]">
          Curation, Capabilities & Governance
        </h1>
        <p className="font-body-md text-[#4d4540]">
          End-to-end turnkey architectural delivery with open-book financial governance and uncompromising material mastery.
        </p>
      </div>

      {/* Services Interactive Showcase */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-margin-sm px-margin-sm">
          {SERVICES.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveServiceTab(srv.id)}
              className={`px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeServiceTab === srv.id
                  ? 'bg-[#160f0a] text-white shadow-sm'
                  : 'bg-[#f0eee8] text-[#4d4540] hover:bg-[#e5e2dc]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{srv.icon}</span>
              <span>{srv.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="p-6 rounded-2xl bg-white border border-[#e5e2dc] shadow-sm flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f0eee8] text-[#160f0a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">{currentService.icon}</span>
              </div>
              <div>
                <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
                  Capability Detail
                </span>
                <h3 className="font-headline-sm text-xl text-[#160f0a]">{currentService.title}</h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#fedeb2] text-[#281800] text-xs font-semibold">
              {currentService.typicalTimeline}
            </span>
          </div>

          <p className="font-body-md text-[#4d4540]">{currentService.description}</p>

          <div className="space-y-2">
            <span className="font-label-sm uppercase tracking-wider text-[#725b38]">
              Key Architectural Deliverables
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentService.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[#160f0a] p-2.5 rounded-lg bg-[#f6f3ed]"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#725b38]">check</span>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#f0eee8]">
            <span className="text-xs text-[#7f756f]">Applicable Scale: {currentService.scaleCoverage}</span>
            <button
              onClick={() => onOpenConsultation(`Inquiring regarding ${currentService.title}`)}
              className="px-5 py-2 rounded-full bg-[#160f0a] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#2c241e] cursor-pointer"
            >
              Discuss Service
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Architectural Investment Estimator */}
      <section className="p-6 rounded-2xl bg-[#f0eee8] border border-[#e5e2dc] shadow-sm flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#725b38] text-[20px]">calculate</span>
            <span className="font-label-sm uppercase tracking-[0.2em] text-[#725b38]">
              Transparent Financial Governance
            </span>
          </div>
          <h2 className="font-headline-sm text-2xl text-[#160f0a]">
            Interactive Architectural Scope & Investment Estimator
          </h2>
          <p className="font-body-sm text-[#4d4540]">
            Calculate transparent preliminary project ranges based on square footage, finish tier, and joinery requirements.
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-5">
          {/* Square footage slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="font-label-md uppercase tracking-wider text-[#4d4540]">
                Interior Square Footage
              </label>
              <span className="font-title-sm text-lg text-[#160f0a] font-mono">
                {sqFt.toLocaleString()} sq.ft
              </span>
            </div>
            <input
              type="range"
              min="1500"
              max="12000"
              step="250"
              value={sqFt}
              onChange={(e) => setSqFt(Number(e.target.value))}
              className="w-full accent-[#160f0a] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#7f756f]">
              <span>1,500 sq.ft (Urban Pied-à-terre)</span>
              <span>12,000+ sq.ft (Private Estate)</span>
            </div>
          </div>

          {/* Typology Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { label: 'Urban Penthouse / Loft', rate: 100 },
              { label: 'Private Coastal Estate', rate: 115 },
              { label: 'Architectural Gut Renovation', rate: 125 },
            ].map((t) => (
              <button
                key={t.label}
                onClick={() => setTypologyRate(t.rate)}
                className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                  typologyRate === t.rate
                    ? 'bg-[#160f0a] text-white border-[#160f0a]'
                    : 'bg-white text-[#4d4540] border-[#e5e2dc] hover:bg-[#ebe8e2]'
                }`}
              >
                <span className="block font-medium">{t.label}</span>
                <span className="text-[10px] opacity-80 mt-0.5 block">Full Blueprint & Oversight</span>
              </button>
            ))}
          </div>

          {/* Finish Grade */}
          <div className="flex flex-col gap-2">
            <label className="font-label-md uppercase tracking-wider text-[#4d4540]">
              Material & Joinery Grade
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Curated Artisan', mult: 1.0, sub: 'FSC Oak & Travertine' },
                { label: 'Monolithic Millwork', mult: 1.25, sub: 'Motorized Burl & Quartzite' },
                { label: 'Haute Heritage', mult: 1.5, sub: 'Rare Marble & Museum Bronze' },
              ].map((f) => (
                <button
                  key={f.label}
                  onClick={() => setFinishMultiplier(f.mult)}
                  className={`p-2.5 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                    finishMultiplier === f.mult
                      ? 'bg-[#2c241e] text-[#fedeb2] border-[#2c241e]'
                      : 'bg-white text-[#4d4540] border-[#e5e2dc] hover:bg-[#ebe8e2]'
                  }`}
                >
                  <span className="font-semibold block">{f.label}</span>
                  <span className="text-[10px] opacity-75 block mt-0.5">{f.sub}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Breakdown Display */}
        <div className="p-5 rounded-xl bg-white border border-[#e5e2dc] space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#f0eee8]">
            <span className="font-label-sm uppercase tracking-wider text-[#725b38]">
              Estimated Investment Scope
            </span>
            <span className="font-headline-sm text-2xl text-[#160f0a] font-serif">
              ${totalEstimatedInvestment.toLocaleString()}
            </span>
          </div>

          <div className="space-y-2 text-xs text-[#4d4540]">
            <div className="flex justify-between">
              <span>Architectural Direction, Permitting & Oversight:</span>
              <span className="font-medium text-[#160f0a] font-mono">
                ${calculatedArchitecturalGovernance.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Bespoke German Joinery & Cabinetry:</span>
              <span className="font-medium text-[#160f0a] font-mono">
                ${calculatedMillwork.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Noble Natural Quarry Stone & Travertines:</span>
              <span className="font-medium text-[#160f0a] font-mono">
                ${calculatedStone.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Curated FF&E, Lighting & White-Glove Staging:</span>
              <span className="font-medium text-[#160f0a] font-mono">
                ${calculatedFFE.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() =>
              onOpenConsultation(
                `Preliminary Scope: ${sqFt.toLocaleString()} sq.ft, Estimated Budget ~$${totalEstimatedInvestment.toLocaleString()}`
              )
            }
            className="w-full mt-2 py-3 rounded-full bg-[#160f0a] text-white font-title-sm text-xs tracking-wider uppercase hover:bg-[#2c241e] transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Reserve Feasibility Review with this Scope</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* 5-Phase Discipline Process Timeline */}
      <section className="flex flex-col gap-space-md pt-space-xs">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
            The Aura Methodology
          </span>
          <h2 className="font-headline-md text-2xl text-[#160f0a]">
            Our 5-Phase Execution Discipline
          </h2>
          <p className="font-body-sm text-[#4d4540]">
            Guaranteed milestone delivery backed by bonded craftsmanship contracts.
          </p>
        </div>

        <div className="space-y-3">
          {processPhases.map((phase) => (
            <div
              key={phase.num}
              className="p-4 rounded-xl bg-white border border-[#e5e2dc] shadow-xs flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#f0eee8] text-[#725b38] flex items-center justify-center font-serif text-lg font-bold shrink-0">
                {phase.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-title-sm text-sm text-[#160f0a]">{phase.title}</h4>
                  <span className="text-[11px] text-[#725b38] font-medium">{phase.duration}</span>
                </div>
                <p className="font-body-sm text-xs text-[#4d4540] mt-1 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
