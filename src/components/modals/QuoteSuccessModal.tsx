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
      <div className="relative w-full max-w-xl bg-[#111111] rounded-xl border border-[#444444] shadow-2xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#222222] text-[#ffffff] flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">verified</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#e3000f] font-semibold block">
            Solicitud Registrada en el Taller
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#ffffff] mt-1">
            Presupuesto #{data.quoteId}
          </h3>
          <p className="text-xs sm:text-sm text-[#aaaaaa] font-light mt-1">
            Gracias {data.fullName}, hemos recibido la información de tu proyecto.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-[#1c1c1c] rounded-lg p-5 border border-[#444444] space-y-2.5 text-xs text-[#aaaaaa] mb-6">
          <div className="flex justify-between pb-2 border-b border-[#444444]">
            <span className="font-semibold text-[#ffffff]">Proyecto:</span>
            <span className="text-right text-[#ffffff]">{data.projectType}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#444444]">
            <span className="font-semibold text-[#ffffff]">Madera elegida:</span>
            <span className="text-right text-[#ffffff]">{data.wood}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#444444]">
            <span className="font-semibold text-[#ffffff]">Dimensiones estimadas:</span>
            <span className="text-right text-[#ffffff]">{data.dimensions}</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#444444]">
            <span className="font-semibold text-[#ffffff]">Contacto:</span>
            <span className="text-right text-[#ffffff]">{data.email}</span>
          </div>
          {data.fileName && (
            <div className="flex justify-between">
              <span className="font-semibold text-[#ffffff]">Archivo adjunto:</span>
              <span className="text-right text-[#e3000f] font-medium truncate max-w-[200px]">{data.fileName}</span>
            </div>
          )}
        </div>

        <div className="p-3.5 bg-[#151515] rounded border border-[#444444] text-xs text-[#aaaaaa] font-light leading-relaxed mb-6">
          <strong className="text-[#ffffff] font-semibold block mb-0.5">Próximos Pasos:</strong>
          Un maestro ebanista revisará los requerimientos estructurales y la disponibilidad de madera en secadero. Nos pondremos en contacto contigo en menos de 24 horas con una primera propuesta técnica o invitación para visitar la exposición.
        </div>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#111111] hover:bg-[#222222] text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            Entendido, volver a la web
          </button>
        </div>
      </div>
    </div>
  );
}
