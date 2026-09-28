import ContactoCotizacionSection from '../ContactoCotizacionSection';
import { ScreenType } from '../Header';

interface ContactoScreenProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onSuccessSubmit: (quoteData: any) => void;
}

export default function ContactoScreen({ onNavigate, onSuccessSubmit }: ContactoScreenProps) {
  return (
    <div className="bg-[#111111] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#e3000f] mb-3">
          <button
            onClick={() => onNavigate('inicio')}
            className="hover:underline text-[#aaaaaa]"
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
        <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#444444]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#e3000f] font-semibold block">
                Localización & Acceso
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#ffffff]">
                En el Corazón Artesano de Girona
              </h3>
              <p className="text-xs sm:text-sm text-[#aaaaaa] font-light leading-relaxed">
                Situados a tan solo 15 minutos del aeropuerto de Girona-Costa Brava y a 1 hora de Barcelona por la autopista AP-7. Disponemos de aparcamiento privado para clientes y muelle de carga adaptado para el transporte de grandes piezas en bruto.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://maps.google.com/?q=Cassà+de+la+Selva+Girona"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#151515] border border-[#444444] text-xs font-semibold text-[#ffffff] hover:bg-[#111111] transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-[#e3000f]">directions</span>
                  <span>Abrir en Google Maps</span>
                </a>
                <a
                  href="tel:+34972460219"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#151515] border border-[#444444] text-xs font-semibold text-[#ffffff] hover:bg-[#111111] transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-[#e3000f]">phone</span>
                  <span>Llamar al taller (+34 972 460 219)</span>
                </a>
              </div>
            </div>

            {/* Atelier Visual Map Box */}
            <div className="bg-[#151515] p-6 rounded-lg border border-[#444444] text-center shadow-2xs">
              <span className="w-12 h-12 rounded-full bg-[#e3000f] text-[#ffffff] flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl">pin_drop</span>
              </span>
              <h4 className="font-serif text-base font-semibold text-[#ffffff]">
                Nave de Banco & Secadero
              </h4>
              <p className="text-xs text-[#aaaaaa] font-light mt-1">
                Camí del Mas Vell, Nave 4<br />
                17244 Cassà de la Selva (Girona)
              </p>
              <div className="mt-4 pt-3 border-t border-[#444444] text-[11px] text-[#e3000f] font-medium">
                Cita previa recomendada
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
