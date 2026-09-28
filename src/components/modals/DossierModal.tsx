import { useState } from 'react';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectFromDossier?: (woodName: string) => void;
}

export default function DossierModal({ isOpen, onClose }: DossierModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [activePage, setActivePage] = useState(1);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      // Simulate real download by generating a text blob and downloading it as Dossier-Woody-2024.pdf
      const element = document.createElement('a');
      const file = new Blob([
        'Taller Ebanistería Woody — Dossier Oficial 2024\n' +
        'Muebles de Autor y Carpintería Arquitectónica\n' +
        'Cassà de la Selva, Girona\n\n' +
        'ÍNDICE GENERAL:\n' +
        '1. Filosofía del Oficio y Banco Tradicional\n' +
        '2. Muestrario Botánico y Humedad Óptima al 8%\n' +
        '3. Colección de Mesas Live Edge en Nogal Americano\n' +
        '4. Aparadores en Inglete Continuo y Colas de Milano\n' +
        '5. Cocinas Integrales con Piedra Campaspero\n' +
        '6. Ebanistería Arquitectónica y Puertas Pivotantes\n' +
        '7. Fichas Técnicas, Mantenimiento y Cuidados'
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'Dossier-Woody-Ebanisteria-2024.pdf';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  const pages = [
    {
      page: 1,
      title: 'Portada & Filosofía',
      content: 'Presentación del taller, historia de los maestros artesanos y manifiesto del respeto por la veta viva.'
    },
    {
      page: 2,
      title: 'Catálogo de Ensambles Tradicionales',
      content: 'Ilustraciones técnicas de la cola de milano oculta, caja y espiga pasante y mariposas estructurales de ébano.'
    },
    {
      page: 3,
      title: 'Colección Residencial 2024',
      content: '42 proyectos ejecutados en residencias de la Costa Brava, Barcelona, Madrid y los Pirineos.'
    },
    {
      page: 4,
      title: 'Acabados Botánicos & Fichas de Mantenimiento',
      content: 'Guía de cuidados para superficies con aceites de tung, linaza pura y ceras de abeja orgánicas.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#111111] rounded-xl border border-[#444444] shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1c1c1c] hover:bg-[#111111] hover:text-white text-[#ffffff] border border-[#444444] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-[#e3000f] text-[#ffffff] flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">menu_book</span>
          </span>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#e3000f] font-semibold block">
              Publicación Editorial
            </span>
            <h3 className="font-serif text-2xl text-[#ffffff]">
              Dossier de Arquitectura & Ebanistería 2024
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#aaaaaa] font-light leading-relaxed mb-6">
          Un volumen de más de 80 páginas impreso en papel offset de 150g, ahora disponible en formato digital con planos constructivos, desglose botánico y reportajes fotográficos a gran formato.
        </p>

        {/* Page Preview Selector */}
        <div className="bg-[#1c1c1c] p-4 rounded-lg border border-[#444444] mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-[#ffffff] mb-2">
            <span>Vista previa de capítulos:</span>
            <span className="text-[#e3000f]">Sección {activePage} de {pages.length}</span>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-3">
            {pages.map((p) => (
              <button
                key={p.page}
                onClick={() => setActivePage(p.page)}
                className={`py-1.5 px-2 rounded text-xs font-medium transition-colors ${
                  activePage === p.page
                    ? 'bg-[#111111] text-white'
                    : 'bg-[#151515] text-[#aaaaaa] hover:bg-[#1a1a1a]'
                }`}
              >
                Pág. {p.page * 20}
              </button>
            ))}
          </div>

          <div className="p-3 bg-[#151515] rounded border border-[#444444]">
            <h5 className="font-serif text-sm font-semibold text-[#ffffff]">
              {pages[activePage - 1].title}
            </h5>
            <p className="text-xs text-[#aaaaaa] font-light mt-1">
              {pages[activePage - 1].content}
            </p>
          </div>
        </div>

        {/* Download Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#444444]">
          <span className="text-xs text-[#aaaaaa] flex items-center gap-1.5 font-light">
            <span className="material-symbols-outlined text-sm text-[#e3000f]">verified</span>
            <span>Edición digital en alta resolución (PDF, 28 MB)</span>
          </span>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#e3000f] hover:bg-[#b3000c] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            {downloading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-[#333333] border-t-transparent rounded-full animate-spin"></span>
                <span>Generando PDF...</span>
              </>
            ) : downloaded ? (
              <>
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>¡Dossier Descargado!</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Descargar Dossier Completo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
