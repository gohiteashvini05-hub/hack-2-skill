import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { MenuDrawer } from './components/MenuDrawer';
import { ClientPortalModal } from './components/ClientPortalModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectModal } from './components/ProjectModal';
import { SphereModal } from './components/SphereModal';
import { MaterialModal } from './components/MaterialModal';

import { HomeScreen } from './screens/HomeScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { ContactScreen } from './screens/ContactScreen';

import { TabType, LivingSphere, CaseStudy, MaterialItem, ConsultationSubmission } from './types';
import { LIVING_SPHERES } from './data/interiorData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [selectedSphere, setSelectedSphere] = useState<LivingSphere | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const [consultationPrefill, setConsultationPrefill] = useState<string>('');

  // Initial demo saved spaces and consultation appointments
  const [savedSpheres, setSavedSpheres] = useState<LivingSphere[]>(() => {
    try {
      const stored = localStorage.getItem('aura_saved_spheres');
      return stored ? JSON.parse(stored) : [LIVING_SPHERES[0]];
    } catch {
      return [LIVING_SPHERES[0]];
    }
  });

  const [consultations, setConsultations] = useState<ConsultationSubmission[]>(() => {
    try {
      const stored = localStorage.getItem('aura_consultations');
      return stored
        ? JSON.parse(stored)
        : [
            {
              id: 'aura-init-902',
              clientName: 'Julian Delacroix',
              clientEmail: 'julian@residence.com',
              propertyType: 'Urban Penthouse / Loft',
              aestheticTendency: 'Warm Minimalist',
              appointmentMode: 'atelier',
              consultationDate: '2025-11-18',
              consultationTime: '14:00 (2:00 PM EST)',
              createdAt: 'Nov 12, 2025',
              status: 'Confirmed',
            },
          ];
    } catch {
      return [];
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aura_saved_spheres', JSON.stringify(savedSpheres));
    } catch {
      // ignore
    }
  }, [savedSpheres]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_consultations', JSON.stringify(consultations));
    } catch {
      // ignore
    }
  }, [consultations]);

  const handleToggleSaveSphere = (sphere: LivingSphere) => {
    setSavedSpheres((prev) => {
      const exists = prev.some((s) => s.id === sphere.id);
      if (exists) {
        return prev.filter((s) => s.id !== sphere.id);
      } else {
        return [...prev, sphere];
      }
    });
  };

  const handleAddConsultation = (item: ConsultationSubmission) => {
    setConsultations((prev) => [item, ...prev]);
  };

  const handleOpenConsultationWithScope = (scopePrefill?: string) => {
    setConsultationPrefill(scopePrefill || '');
    setIsConsultationOpen(true);
  };

  return (
    <div className="bg-[#fcf9f3] min-h-screen text-[#1c1c18] flex flex-col antialiased selection:bg-[#fedeb2] selection:text-[#281800]">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenConsultation={() => handleOpenConsultationWithScope()}
        onOpenPortal={() => setIsPortalOpen(true)}
        onSelectTab={setCurrentTab}
        savedCount={savedSpheres.length}
      />

      {/* Main Container View */}
      <main className="flex-1 w-full pt-20">
        {currentTab === 'home' && (
          <HomeScreen
            onSelectTab={setCurrentTab}
            onSelectSphere={setSelectedSphere}
            onSelectProject={setSelectedProject}
            onSubmitConsultation={handleAddConsultation}
          />
        )}

        {currentTab === 'explore' && (
          <ExploreScreen
            onSelectSphere={setSelectedSphere}
            onSelectMaterial={setSelectedMaterial}
            onSaveSphere={handleToggleSaveSphere}
            savedIds={savedSpheres.map((s) => s.id)}
            onOpenConsultation={handleOpenConsultationWithScope}
          />
        )}

        {currentTab === 'services' && (
          <ServicesScreen onOpenConsultation={handleOpenConsultationWithScope} />
        )}

        {currentTab === 'projects' && (
          <ProjectsScreen
            onSelectProject={setSelectedProject}
            onOpenConsultation={() => handleOpenConsultationWithScope()}
          />
        )}

        {currentTab === 'contact' && (
          <ContactScreen onSubmitConsultation={handleAddConsultation} />
        )}
      </main>

      {/* Bottom Safe Area Tab Navigation */}
      <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Modals & Drawers */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectTab={setCurrentTab}
        onOpenConsultation={() => handleOpenConsultationWithScope()}
      />

      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        savedSpheres={savedSpheres}
        onRemoveSaved={(id) => setSavedSpheres((prev) => prev.filter((s) => s.id !== id))}
        consultations={consultations}
        onOpenConsultation={() => {
          setIsPortalOpen(false);
          handleOpenConsultationWithScope();
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          setConsultationPrefill('');
        }}
        onSubmitConsultation={handleAddConsultation}
        defaultSphereTitle={consultationPrefill}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => {
          setSelectedProject(null);
          handleOpenConsultationWithScope();
        }}
      />

      <SphereModal
        sphere={selectedSphere}
        onClose={() => setSelectedSphere(null)}
        onSave={handleToggleSaveSphere}
        isSaved={selectedSphere ? savedSpheres.some((s) => s.id === selectedSphere.id) : false}
        onOpenConsultation={(title) => {
          setSelectedSphere(null);
          handleOpenConsultationWithScope(title);
        }}
      />

      <MaterialModal
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        onRequestSample={() => {
          setIsPortalOpen(true);
        }}
      />
    </div>
  );
}
