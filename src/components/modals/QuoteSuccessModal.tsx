interface QuoteSuccessModalProps {
  data: {
    fullName: string;
    email: string;
    projectType: string;
    wood: string;
    dimensions: string;
    details: string;
    fileName?: string;
    quoteId: string;
  } | null;
  onClose: () => void;
}

export default function QuoteSuccessModal({ data, onClose }: QuoteSuccessModalProps) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#fcf9f3] rounded-xl border border-[#d5c3bb] shadow-2xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4e8cf] text-[#1e382b] flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">verified</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block">
            Solicitud Registrada en el Taller
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#412311] mt-1">
            Presupuesto #{data.quoteId}
          </h3>
          <p className="text-xs sm:text-sm text-[#50443e] font-light mt-1">
            Gracias {data.fullName}, hemos recibido la información de tu proyecto.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-[#f0eee8] rounded-lg p-5 border border-[#d5c3bb] space-y-2.5 text-xs text-[#50443e] mb-6">
          <div className="flex justify-between pb-2 border-b border-[#d5c3bb]">
            <span className="font-semibold text-[#412311]">Proyecto:</span>
            <span className="text-right text-[#412311]">{data.projectType}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#d5c3bb]">
            <span className="font-semibold text-[#412311]">Madera elegida:</span>
            <span className="text-right text-[#412311]">{data.wood}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#d5c3bb]">
            <span className="font-semibold text-[#412311]">Dimensiones estimadas:</span>
            <span className="text-right text-[#412311]">{data.dimensions}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#d5c3bb]">
            <span className="font-semibold text-[#412311]">Contacto:</span>
            <span className="text-right text-[#412311]">{data.email}</span>
          </div>
          {data.fileName && (
            <div className="flex justify-between">
              <span className="font-semibold text-[#412311]">Archivo adjunto:</span>
              <span className="text-right text-[#895110] font-medium truncate max-w-[200px]">{data.fileName}</span>
            </div>
          )}
        </div>

        <div className="p-3.5 bg-white rounded border border-[#d5c3bb] text-xs text-[#50443e] font-light leading-relaxed mb-6">
          <strong className="text-[#412311] font-semibold block mb-0.5">Próximos Pasos:</strong>
          Un maestro ebanista revisará los requerimientos estructurales y la disponibilidad de madera en secadero. Nos pondremos en contacto contigo en menos de 24 horas con una primera propuesta técnica o invitación para visitar la exposición.
        </div>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#412311] hover:bg-[#5a3825] text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            Entendido, volver a la web
          </button>
        </div>
      </div>
    </div>
  );
}
