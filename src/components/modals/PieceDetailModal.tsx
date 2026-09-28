import { CreationItem } from '../../data/workshopData';

interface PieceDetailModalProps {
  piece: CreationItem | null;
  onClose: () => void;
  onRequestPiece: (piece: CreationItem) => void;
}

export default function PieceDetailModal({ piece, onClose }: PieceDetailModalProps) {
  if (!piece) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="relative max-w-6xl max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 md:-top-5 md:-right-5 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Big Photo Only */}
        <img
          src={piece.image}
          alt={piece.title}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
