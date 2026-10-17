import React, { useState } from 'react';
import { LIVING_SPHERES, NOBLE_MATERIALS } from '../data/interiorData';
import { LivingSphere, MaterialItem } from '../types';

interface ExploreScreenProps {
  onSelectSphere: (sphere: LivingSphere) => void;
  onSelectMaterial: (material: MaterialItem) => void;
  onSaveSphere: (sphere: LivingSphere) => void;
  savedIds: string[];
  onOpenConsultation: (title?: string) => void;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
  onSelectSphere,
  onSelectMaterial,
  onSaveSphere,
  savedIds,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [ambientLighting, setAmbientLighting] = useState<'daylight' | 'dusk'>('dusk');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'All Spheres' },
    { id: 'living', label: 'Living' },
    { id: 'bedroom', label: 'Sanctuary' },
    { id: 'kitchen', label: 'Culinary' },
    { id: 'dining', label: 'Dining' },
    { id: 'urban', label: 'Urban' },
    { id: 'office', label: 'Executive' },
  ];

  const filteredSpheres =
    selectedCategory === 'all'
      ? LIVING_SPHERES
      : LIVING_SPHERES.filter((s) => s.category === selectedCategory);

  return (
    <div className="flex flex-col w-full px-margin-sm pt-space-xs pb-24 max-w-4xl mx-auto gap-space-lg">
      {/* Title & Introduction */}
      <div className="flex flex-col gap-1">
        <span className="font-label-md uppercase tracking-[0.2em] text-[#725b38]">
          Taxonomy of Spaces
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-[#160f0a]">
          Spatial Curation & Architectural Typologies
        </h1>
        <p className="font-body-md text-[#4d4540]">
          Explore living spheres categorized by human circulation, tactile materiality, and atmospheric calm.
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-margin-sm px-margin-sm">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#160f0a] text-white shadow-sm'
                : 'bg-[#f0eee8] text-[#4d4540] hover:bg-[#e5e2dc]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Interactive Before & After Renovation Comparison */}
      <div className="flex flex-col gap-2 rounded-2xl bg-[#f0eee8] p-4 border border-[#e5e2dc]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#725b38] text-[20px]">compare</span>
            <span className="font-title-sm text-sm text-[#160f0a]">
              Before & After: Raw Loft Shell vs Curated Sanctuary
            </span>
          </div>
          <span className="text-[11px] text-[#7f756f] hidden sm:inline">
            Drag slider to inspect architectural transformation
          </span>
        </div>

        {/* Comparison Viewer */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden select-none shadow-sm">
          {/* Base: After (Finished luxury space) */}
          <img
            src={LIVING_SPHERES[0].image}
            alt="After Aura Transformation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white text-[11px] font-medium uppercase tracking-wider">
            Aura Completed (2024)
          </div>

          {/* Overlay: Before (Raw unrefined space) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full bg-[#3d322a]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZndZAKBY_4FeI5skXxhsq7eYXF11rb6EUfrErihPRaUcy8P_6h5TkvXLpOK36LLyveaobsRRb27v_pZCPM4muiO3iblhcAFZrGJP0TcQ0cbKEQm77VysbvK4gXP01cr44egaD0X0lt2CloszmHq1LgF-NOJh2U-Jvaym7bDKERy4tAAqSg5uHPiOkM7hxsS-EIE2MuoedJxHBbXbmyW41XFaGLY_SnD42Kz6nLX8qSSmLdz_zfuM"
                alt="Before Renovation"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                style={{ width: '100%', maxWidth: 'none' }}
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white text-[11px] font-medium uppercase tracking-wider">
                Raw Concrete Shell
              </div>
            </div>
          </div>

          {/* Slider divider line & handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#160f0a] shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">code</span>
            </div>
          </div>

          {/* Hidden range input over the visual */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
            aria-label="Comparison slider"
          />
        </div>
      </div>

      {/* Ambient Lighting Atmosphere Filter */}
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e5e2dc] shadow-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#725b38] text-[20px]">
            {ambientLighting === 'dusk' ? 'bedtime' : 'wb_sunny'}
          </span>
          <span className="font-title-sm text-xs sm:text-sm text-[#160f0a]">
            Atmospheric Lighting Simulation
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#f0eee8] p-1 rounded-full">
          <button
            onClick={() => setAmbientLighting('daylight')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
              ambientLighting === 'daylight'
                ? 'bg-white text-[#160f0a] shadow-xs'
                : 'text-[#7f756f]'
            }`}
          >
            Daylight (4000K)
          </button>
          <button
            onClick={() => setAmbientLighting('dusk')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
              ambientLighting === 'dusk'
                ? 'bg-[#2c241e] text-[#fedeb2] shadow-xs'
                : 'text-[#7f756f]'
            }`}
          >
            Amber Dusk (2400K)
          </button>
        </div>
      </div>

      {/* Living Spheres Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {filteredSpheres.map((sphere) => {
          const isSaved = savedIds.includes(sphere.id);
          return (
            <div
              key={sphere.id}
              className="flex flex-col rounded-2xl overflow-hidden bg-white border border-[#e5e2dc] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#2c241e]">
                <img
                  src={sphere.image}
                  alt={sphere.imageAlt}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    ambientLighting === 'dusk'
                      ? 'filter sepia-[0.15] contrast-[1.05]'
                      : 'filter brightness-105'
                  }`}
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#160f0a] font-label-sm text-xs uppercase tracking-wider">
                  {sphere.tag}
                </div>
                <button
                  onClick={() => onSaveSphere(sphere)}
                  aria-label="Save to Sanctuary Folio"
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                    isSaved
                      ? 'bg-[#fedeb2] text-[#281800]'
                      : 'bg-black/50 text-white hover:bg-black/80'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isSaved ? 'bookmark_added' : 'bookmark_border'}
                  </span>
                </button>
              </div>

              <div className="p-space-md flex flex-col flex-1 justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-title-lg text-[#160f0a]">{sphere.title}</h3>
                  <p className="font-body-sm text-[#4d4540]">{sphere.description}</p>
                </div>

                <div className="pt-2 border-t border-[#f0eee8] flex flex-wrap gap-1.5">
                  {sphere.materials.slice(0, 3).map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-[#f6f3ed] text-[11px] text-[#4d4540]"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <button
                    onClick={() => onSelectSphere(sphere)}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#725b38] hover:text-[#160f0a] transition-colors cursor-pointer"
                  >
                    <span>Inspect Details</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => onOpenConsultation(sphere.title)}
                    className="text-xs text-[#160f0a] hover:underline font-medium cursor-pointer"
                  >
                    Discuss Typology
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Noble Material Swatch Gallery */}
      <section className="flex flex-col gap-space-md pt-space-md border-t border-[#e5e2dc]">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm uppercase tracking-widest text-[#725b38]">
            Tactile Materiality
          </span>
          <h2 className="font-headline-md text-xl md:text-2xl text-[#160f0a]">
            Curated Noble Material Swatches
          </h2>
          <p className="font-body-sm text-[#4d4540]">
            Touch-tested surfaces sourced exclusively from ethical Italian and German quarries.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {NOBLE_MATERIALS.map((mat) => (
            <button
              key={mat.id}
              onClick={() => onSelectMaterial(mat)}
              className="p-3 rounded-xl bg-white border border-[#e5e2dc] shadow-xs hover:shadow-md transition-all flex flex-col gap-2 text-left group cursor-pointer"
            >
              <div
                className="w-full aspect-square rounded-lg border border-black/10 shadow-inner group-hover:scale-105 transition-transform"
                style={{ backgroundColor: mat.colorHex }}
              />
              <div className="flex flex-col">
                <span className="font-title-sm text-xs text-[#160f0a] line-clamp-1">{mat.name}</span>
                <span className="text-[10px] text-[#7f756f]">{mat.origin}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
