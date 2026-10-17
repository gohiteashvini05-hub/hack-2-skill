import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/interiorData';
import { CaseStudy } from '../types';

interface ProjectsScreenProps {
  onSelectProject: (project: CaseStudy) => void;
  onOpenConsultation: () => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [selectedTypology, setSelectedTypology] = useState<string>('all');

  const typologies = [
    { id: 'all', label: 'All Typologies' },
    { id: 'Duplex Penthouse', label: 'Penthouses' },
    { id: 'Coastal Estate', label: 'Coastal Estates' },
    { id: 'Historic Country Estate', label: 'Historic Estates' },
  ];

  const filteredProjects =
    selectedTypology === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.typology === selectedTypology);

  return (
    <div className="flex flex-col w-full px-margin-sm pt-space-xs pb-24 max-w-4xl mx-auto gap-space-lg">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-label-md uppercase tracking-[0.2em] text-[#725b38]">
          Selected Works
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-[#160f0a]">
          Architectural Case Studies & Archive
        </h1>
        <p className="font-body-md text-[#4d4540]">
          Monographs of completed private residences across North America, defined by bespoke materiality and structural serenity.
        </p>
      </div>

      {/* Typology Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-margin-sm px-margin-sm">
        {typologies.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTypology(t.id)}
            className={`px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
              selectedTypology === t.id
                ? 'bg-[#160f0a] text-white shadow-sm'
                : 'bg-[#f0eee8] text-[#4d4540] hover:bg-[#e5e2dc]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Case Studies Cards */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-2xl overflow-hidden bg-white border border-[#e5e2dc] shadow-sm hover:shadow-md transition-all group"
          >
            <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#2c241e]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#160f0a] font-label-sm text-xs uppercase tracking-wider">
                {project.typology}
              </div>
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-label-sm text-xs">
                Completed {project.completedYear}
              </div>
            </div>

            <div className="p-space-md flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
                  {project.location}
                </span>
                <h3 className="font-headline-sm text-2xl text-[#160f0a] mt-0.5">{project.title}</h3>
              </div>

              {/* Specs Metric Strip */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-[#f0eee8] rounded-xl text-center">
                <div>
                  <span className="font-label-sm text-[11px] text-[#7f756f] block">Style</span>
                  <span className="font-title-sm text-sm text-[#160f0a]">{project.style}</span>
                </div>
                <div>
                  <span className="font-label-sm text-[11px] text-[#7f756f] block">Scale</span>
                  <span className="font-title-sm text-sm text-[#160f0a]">{project.scale}</span>
                </div>
                <div>
                  <span className="font-label-sm text-[11px] text-[#7f756f] block">Scope</span>
                  <span className="font-title-sm text-sm text-[#160f0a]">{project.scope}</span>
                </div>
              </div>

              <p className="font-body-sm text-[#4d4540] line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Architectural features chips */}
              <div className="flex flex-wrap gap-1.5">
                {project.features.map((feat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-full bg-[#f6f3ed] text-[11px] text-[#4d4540]"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-[#f0eee8] flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#725b38] hover:text-[#160f0a] transition-colors cursor-pointer"
                >
                  <span>View Project Archive & Blueprint</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <span className="text-xs text-[#7f756f]">Lead: {project.architect}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Portfolio Inquiries Banner */}
      <div className="p-6 rounded-2xl bg-[#2c241e] text-[#fcf9f3] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-label-sm uppercase tracking-widest text-[#fedeb2]">
            Confidential Inquiries
          </span>
          <h3 className="font-headline-sm text-xl text-white">
            Have a private residential brief to commission?
          </h3>
          <p className="text-xs text-[#d2c4bb]">
            We accept a maximum of 12 commissions annually to maintain unyielding studio oversight.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="px-6 py-3 rounded-full bg-[#fedeb2] text-[#281800] font-title-sm text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all whitespace-nowrap cursor-pointer"
        >
          Initiate Brief
        </button>
      </div>
    </div>
  );
};
