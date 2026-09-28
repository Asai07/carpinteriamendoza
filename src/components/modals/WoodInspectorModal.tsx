import { WoodSpecimen } from '../../data/workshopData';

interface WoodInspectorModalProps {
  wood: WoodSpecimen | null;
  onClose: () => void;
  onChooseWoodForProject: (woodName: string) => void;
}

export default function WoodInspectorModal({ wood, onClose, onChooseWoodForProject }: WoodInspectorModalProps) {
  if (!wood) return null;

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
          <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#d5c3bb] shrink-0">
            <img
              src={wood.image}
              alt={wood.alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#5a3825] text-white text-[10px] font-bold uppercase tracking-wider">
                {wood.tag}
              </span>
              <span className="text-xs text-[#895110] italic">
                {wood.scientificName}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#412311] mt-0.5">
              {wood.name}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#50443e] font-light leading-relaxed mb-6">
          {wood.description}
        </p>

        {/* Technical Data Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 bg-[#f0eee8] p-4 rounded-lg border border-[#d5c3bb]">
          <div>
            <span className="text-[11px] text-[#895110] font-semibold block uppercase">Densidad</span>
            <span className="text-sm font-bold text-[#412311]">{wood.density}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#895110] font-semibold block uppercase">Dureza Janka</span>
            <span className="text-sm font-bold text-[#412311]">{wood.jankaHardness}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#895110] font-semibold block uppercase">Curado Solar</span>
            <span className="text-sm font-bold text-[#412311]">{wood.dryingTime}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#895110] font-semibold block uppercase">Humedad Taller</span>
            <span className="text-sm font-bold text-[#412311]">8% — 10%</span>
          </div>
        </div>

        {/* Origin and Finish */}
        <div className="space-y-3 text-xs text-[#50443e] mb-6">
          <div className="p-3 bg-white rounded border border-[#d5c3bb]">
            <strong className="text-[#412311] font-semibold block mb-0.5">Origen Sostenible:</strong>
            <p className="font-light">{wood.origin}</p>
          </div>
          <div className="p-3 bg-white rounded border border-[#d5c3bb]">
            <strong className="text-[#412311] font-semibold block mb-0.5">Tratamiento & Acabado Recomendado:</strong>
            <p className="font-light">{wood.finishRecommendation}</p>
          </div>
          <div className="p-3 bg-white rounded border border-[#d5c3bb]">
            <strong className="text-[#412311] font-semibold block mb-0.5">Uso Idóneo:</strong>
            <p className="font-light">{wood.idealFor}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#d5c3bb]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#f0eee8] text-[#50443e] text-xs font-semibold uppercase tracking-wider hover:bg-[#ebe8e2] transition-colors cursor-pointer"
          >
            Volver
          </button>
          <button
            onClick={() => {
              onChooseWoodForProject(wood.name);
              onClose();
            }}
            className="px-6 py-2.5 rounded-lg bg-[#412311] hover:bg-[#5a3825] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <span>Cotizar pieza en {wood.name}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
