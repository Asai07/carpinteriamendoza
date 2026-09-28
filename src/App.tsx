import { useState, useEffect } from 'react';
import Header, { ScreenType } from './components/Header';
import HeroSection from './components/HeroSection';
import CreacionesGallery from './components/CreacionesGallery';
import QueHacemosSection from './components/QueHacemosSection';
import SobreElTallerSection from './components/SobreElTallerSection';
import MaderasNoblesSection from './components/MaderasNoblesSection';
import ContactoCotizacionSection from './components/ContactoCotizacionSection';
import Footer from './components/Footer';

// Modals
import PieceDetailModal from './components/modals/PieceDetailModal';
import DossierModal from './components/modals/DossierModal';
import WoodInspectorModal from './components/modals/WoodInspectorModal';
import SpecialtyModal from './components/modals/SpecialtyModal';
import QuoteSuccessModal from './components/modals/QuoteSuccessModal';

// Dedicated Screens
import SobreNosotrosScreen from './components/screens/SobreNosotrosScreen';
import PreciosScreen from './components/screens/PreciosScreen';
import ServiciosScreen from './components/screens/ServiciosScreen';
import TiendaScreen from './components/screens/TiendaScreen';
import BlogScreen from './components/screens/BlogScreen';
import ContactoScreen from './components/screens/ContactoScreen';
import GaleriaScreen from './components/screens/GaleriaScreen';

// Data Types
import { CreationItem, WoodSpecimen, SpecialtyItem } from './data/workshopData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('inicio');

  // Modals state
  const [selectedPiece, setSelectedPiece] = useState<CreationItem | null>(null);
  const [selectedWood, setSelectedWood] = useState<WoodSpecimen | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [submittedQuote, setSubmittedQuote] = useState<any>(null);

  // Form prefill values
  const [quoteWood, setQuoteWood] = useState<string>('Nogal Americano');
  const [quoteProject, setQuoteProject] = useState<string>('Mesa de comedor o salón');

  // Scroll to anchor if requested
  const handleNavigate = (screen: ScreenType, anchorId?: string) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (anchorId) {
      setTimeout(() => {
        const elem = document.getElementById(anchorId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenQuoteModal = () => {
    handleNavigate('inicio', 'contacto');
  };

  const handleRequestPiece = (piece: CreationItem) => {
    setQuoteProject(piece.category === 'Comedores' ? 'Mesa de comedor o salón' : 'Mueble a medida');
    setQuoteWood(piece.wood);
    handleNavigate('inicio', 'contacto');
  };

  const handleChooseWoodForProject = (woodName: string) => {
    setQuoteWood(woodName);
    handleNavigate('inicio', 'contacto');
  };

  const handleStartCommission = (discipline: string) => {
    setQuoteProject(discipline);
    handleNavigate('inicio', 'contacto');
  };

  const handleSendConfigToQuote = (config: {
    pieceName: string;
    wood: string;
    dimensions: string;
    finish: string;
    joinery: string;
    estimatedPrice: string;
  }) => {
    setQuoteProject(config.pieceName);
    setQuoteWood(config.wood);
    handleNavigate('inicio', 'contacto');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f3] text-[#1c1c18] font-sans selection:bg-[#412311] selection:text-white">
      {/* Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Body per Screen */}
      <main className="flex-1">
        {currentScreen === 'inicio' && (
          <>
            {/* Hero Section matching the image */}
            <HeroSection
              onLearnMoreClick={() => {
                const elem = document.getElementById('sobre-el-taller');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              onExploreClick={() => {
                const elem = document.getElementById('galeria');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Creaciones Gallery matching the image */}
            <CreacionesGallery
              limit={8}
              showAllButton={true}
              onShowAllClick={() => handleNavigate('galeria')}
              onSelectPiece={(piece) => setSelectedPiece(piece)}
              onContactClick={handleOpenQuoteModal}
            />

            {/* Disciplinas del Taller / Qué Hacemos */}
            <QueHacemosSection
              onSelectSpecialty={(specialty) => setSelectedSpecialty(specialty)}
              onStartCommission={handleStartCommission}
            />

            {/* Sobre el Taller / Nuestra Filosofía */}
            <SobreElTallerSection
              onLearnMoreAboutUs={() => handleNavigate('inicio', 'contacto')}
            />

            {/* Maderas Nobles del Taller */}
            <MaderasNoblesSection />

            {/* Contacto & Solicitud de Cotización */}
            <ContactoCotizacionSection
              initialWood={quoteWood}
              initialProject={quoteProject}
              onSuccessSubmit={(data) => setSubmittedQuote(data)}
            />
          </>
        )}

        {currentScreen === 'sobre-nosotros' && (
          <SobreNosotrosScreen
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentScreen === 'galeria' && (
          <GaleriaScreen
            onNavigate={handleNavigate}
            onSelectPiece={(piece) => setSelectedPiece(piece)}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentScreen === 'precios' && (
          <PreciosScreen
            onNavigate={handleNavigate}
            onSendConfigToQuote={handleSendConfigToQuote}
          />
        )}

        {currentScreen === 'servicios' && (
          <ServiciosScreen
            onNavigate={handleNavigate}
            onSelectSpecialty={(item) => setSelectedSpecialty(item)}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentScreen === 'tienda' && (
          <TiendaScreen
            onNavigate={handleNavigate}
            onSelectPiece={(piece) => setSelectedPiece(piece)}
            onRequestPiece={handleRequestPiece}
          />
        )}

        {currentScreen === 'blog' && (
          <BlogScreen
            onNavigate={handleNavigate}
            onOpenDossier={() => setIsDossierOpen(true)}
          />
        )}

        {currentScreen === 'contacto' && (
          <ContactoScreen
            onNavigate={handleNavigate}
            onSuccessSubmit={(data) => setSubmittedQuote(data)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      {/* Modals */}
      <PieceDetailModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onRequestPiece={handleRequestPiece}
      />

      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      <WoodInspectorModal
        wood={selectedWood}
        onClose={() => setSelectedWood(null)}
        onChooseWoodForProject={handleChooseWoodForProject}
      />

      <SpecialtyModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
        onCommission={handleStartCommission}
      />

      <QuoteSuccessModal
        data={submittedQuote}
        onClose={() => setSubmittedQuote(null)}
      />
    </div>
  );
}
