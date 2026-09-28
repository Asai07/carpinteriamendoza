import ContactoCotizacionSection from '../ContactoCotizacionSection';
import { ScreenType } from '../Header';

interface ContactoScreenProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onSuccessSubmit: (quoteData: any) => void;
}

export default function ContactoScreen({ onNavigate, onSuccessSubmit }: ContactoScreenProps) {
  return (
    <div className="bg-[#fcf9f3] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#895110] mb-3">
          <button
            onClick={() => onNavigate('inicio')}
            className="hover:underline text-[#50443e]"
          >
            Inicio
          </button>
          <span>/</span>
          <span className="font-semibold uppercase tracking-wider">Contacto & Citas</span>
        </div>
      </div>

      {/* Embedded Quotation Section */}
      <ContactoCotizacionSection onSuccessSubmit={onSuccessSubmit} />

      {/* Workshop Location Map Representation & Access */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
        <div className="bg-[#ebe8e2] rounded-xl p-8 border border-[#d5c3bb]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block">
                Localización & Acceso
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#412311]">
                En el Corazón Artesano de Girona
              </h3>
              <p className="text-xs sm:text-sm text-[#50443e] font-light leading-relaxed">
                Situados a tan solo 15 minutos del aeropuerto de Girona-Costa Brava y a 1 hora de Barcelona por la autopista AP-7. Disponemos de aparcamiento privado para clientes y muelle de carga adaptado para el transporte de grandes piezas en bruto.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://maps.google.com/?q=Cassà+de+la+Selva+Girona"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-[#d5c3bb] text-xs font-semibold text-[#412311] hover:bg-[#fcf9f3] transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-[#bd5338]">directions</span>
                  <span>Abrir en Google Maps</span>
                </a>
                <a
                  href="tel:+34972460219"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-[#d5c3bb] text-xs font-semibold text-[#412311] hover:bg-[#fcf9f3] transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-[#895110]">phone</span>
                  <span>Llamar al taller (+34 972 460 219)</span>
                </a>
              </div>
            </div>

            {/* Atelier Visual Map Box */}
            <div className="bg-white p-6 rounded-lg border border-[#d5c3bb] text-center shadow-2xs">
              <span className="w-12 h-12 rounded-full bg-[#ffdcbf] text-[#2d1600] flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl">pin_drop</span>
              </span>
              <h4 className="font-serif text-base font-semibold text-[#412311]">
                Nave de Banco & Secadero
              </h4>
              <p className="text-xs text-[#50443e] font-light mt-1">
                Camí del Mas Vell, Nave 4<br />
                17244 Cassà de la Selva (Girona)
              </p>
              <div className="mt-4 pt-3 border-t border-[#d5c3bb] text-[11px] text-[#895110] font-medium">
                Cita previa recomendada
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
