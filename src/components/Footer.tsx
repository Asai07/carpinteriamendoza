import { ScreenType } from './Header';

interface FooterProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onOpenDossier?: () => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff] pt-16 sm:pt-24 pb-8 border-t border-[#eae2d8] text-[#111111] overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-16 mb-14 sm:mb-20 relative z-10">

          {/* Columna Izquierda: Información de la Marca */}
          <div className="max-w-md">
            <span className="text-[#e3000f] text-[9px] font-bold tracking-[0.3em] uppercase mb-6 block">
              Taller de Carpintería
            </span>
            <p className="text-2xl sm:text-3xl font-serif font-medium text-[#111111] leading-[1.2] mb-10">
              Transformamos madera de primera calidad en espacios hechos para durar.
            </p>

            {/* Botón de WhatsApp funcional y moderno */}
            <a
              href="https://wa.me/528113228528"
              className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#555555] hover:text-[#25D366] transition-colors duration-300"
              title="WhatsApp Directo"
            >
              <div className="w-12 h-12 rounded-full bg-[#ffffff] border border-[#eae2d8] text-[#e3000f] shadow-sm flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white group-hover:shadow-md transition-all duration-300">
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:scale-110">
                  chat
                </span>
              </div>
              <span>Escríbenos directo</span>
            </a>
          </div>

          {/* Columna Derecha: Navegación y Contacto agrupados */}
          <div className="flex flex-wrap gap-12 sm:gap-20">
            {/* Navegación */}
            <div>
              <h4 className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#e3000f] mb-8">
                Navegación
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Inicio', id: 'inicio' },
                  { name: 'Galería', id: 'inicio', anchor: 'galeria' },
                  { name: 'Servicios', id: 'servicios' }
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onNavigate(item.id as ScreenType, item.anchor)}
                      className="text-sm font-medium text-[#555555] hover:text-[#e3000f] transition-colors relative group py-1 cursor-pointer"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e3000f] transition-all duration-500 ease-out group-hover:w-full"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto Directo */}
            <div>
              <h4 className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#e3000f] mb-8">
                Contacto
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group cursor-default">
                  <span className="material-symbols-outlined text-[18px] text-[#e3000f] group-hover:-translate-y-1 transition-transform duration-300">location_on</span>
                  <span className="text-sm font-medium text-[#555555]">Av. Plutarco Elias Calles #333 Col. Unión Modelo, GPE. N.L.</span>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <span className="material-symbols-outlined text-[18px] text-[#e3000f] group-hover:rotate-12 transition-transform duration-300">call</span>
                  <span className="text-sm font-medium text-[#555555]">+52 81 1322 8528</span>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <span className="material-symbols-outlined text-[18px] text-[#e3000f] group-hover:scale-110 transition-transform duration-300">mail</span>
                  <span className="text-sm font-medium text-[#555555]">carpinteriamendoza_david@hotmail.com</span>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <span className="material-symbols-outlined text-[18px] text-[#e3000f] group-hover:animate-pulse transition-transform duration-300">schedule</span>
                  <span className="text-sm font-medium text-[#555555]">Lun - Vie: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Marca Gigante (Sello de Autoridad Visual) */}
        <div className="w-full flex justify-center items-center py-6 relative z-0 border-t border-[#eae2d8]">
          <h2 className="text-[15vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] font-serif font-bold text-[#111111] leading-none tracking-tighter select-none opacity-[0.03] text-center">
            Carpintería Mendoza
          </h2>
        </div>

        {/* Barra Inferior (Copyright y CTA) */}
        <div className="pt-6 border-t border-[#eae2d8] flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-[9px] font-bold tracking-[0.2em] text-[#555555] uppercase text-center md:text-left">
            © {currentYear} Carpintería Mendoza.
          </p>

          <button
            onClick={() => onNavigate('contacto')}
            className="group flex items-center gap-4 px-6 py-3 rounded-full bg-[#ffffff] hover:bg-[#e3000f] border border-[#eae2d8] hover:border-[#e3000f] shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
          >
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#111111] group-hover:text-white transition-colors">
              Solicitar Cotización
            </span>
            <span className="material-symbols-outlined text-[16px] text-[#e3000f] group-hover:text-white transform -rotate-45 group-hover:rotate-0 group-hover:translate-x-1 transition-all duration-500">
              arrow_forward
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}