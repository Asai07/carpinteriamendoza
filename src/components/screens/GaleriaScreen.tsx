import CreacionesGallery from '../CreacionesGallery';
import { ScreenType } from '../Header';
import { CreationItem } from '../../data/workshopData';

interface GaleriaScreenProps {
  onNavigate: (screen: ScreenType, anchor?: string) => void;
  onSelectPiece: (piece: CreationItem) => void;
  onOpenQuoteModal: () => void;
}

export default function GaleriaScreen({ onNavigate, onSelectPiece, onOpenQuoteModal }: GaleriaScreenProps) {
  return (
    <div className="pt-24 bg-[#fcf9f3] min-h-screen">
      <CreacionesGallery 
        onSelectPiece={onSelectPiece} 
        onContactClick={onOpenQuoteModal} 
      />
    </div>
  );
}
