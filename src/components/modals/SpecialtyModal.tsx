import { SpecialtyItem } from '../../data/workshopData';

interface SpecialtyModalProps {
  specialty: SpecialtyItem | null;
  onClose: () => void;
  onCommission: (title: string) => void;
}

export default function SpecialtyModal({ specialty, onClose, onCommission }: SpecialtyModalProps) {
  if (!specialty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#fcf9f3] rounded-xl border border-[#d5c3bb] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f0eee8] hover:bg-[#412311] hover:text-white text-[#412311] border border-[#d5c3bb] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-lg bg-[#5a3825] text-white flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-3xl">{specialty.icon}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block">
              Disciplina Especializada
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#412311]">
              {specialty.title}
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#50443e] font-light leading-relaxed mb-6">
          {specialty.description}
        </p>

        <div className="space-y-4 mb-8">
          <div className="p-4 bg-[#f0eee8] rounded-lg border border-[#d5c3bb]">
            <h4 className="font-serif text-sm font-semibold text-[#412311] mb-1">
              Metodología de Banco y Ejecución:
            </h4>
            <p className="text-xs text-[#50443e] font-light leading-relaxed">
              {specialty.process}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-white rounded border border-[#d5c3bb]">
              <strong className="text-[#412311] font-semibold block mb-0.5">Maderas y Materiales:</strong>
              <p className="text-[#50443e] font-light">{specialty.materials}</p>
            </div>
            <div className="p-3 bg-white rounded border border-[#d5c3bb]">
              <strong className="text-[#412311] font-semibold block mb-0.5">Plazo de Taller Típico:</strong>
              <p className="text-[#50443e] font-light">{specialty.timeframe}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#d5c3bb]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#f0eee8] text-[#50443e] text-xs font-semibold uppercase tracking-wider hover:bg-[#ebe8e2] transition-colors cursor-pointer"
          >
            Volver
          </button>
          <button
            onClick={() => {
              onCommission(specialty.title);
              onClose();
            }}
            className="px-6 py-2.5 rounded-lg bg-[#bd5338] hover:bg-[#a6452e] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <span>Iniciar encargo de {specialty.title}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
