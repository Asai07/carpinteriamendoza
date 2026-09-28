import { SPECIALTIES, SpecialtyItem } from '../../data/workshopData';
import { ScreenType } from '../Header';

interface ServiciosScreenProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onSelectSpecialty: (item: SpecialtyItem) => void;
  onOpenQuoteModal: () => void;
}

export default function ServiciosScreen({
  onNavigate,
  onSelectSpecialty,
  onOpenQuoteModal
}: ServiciosScreenProps) {
  const workflowSteps = [
    {
      step: '01',
      title: 'Boceto y Prototipado Dimensional',
      desc: 'Analizamos la luz, los recorridos y la ergonomía del espacio. Elaboramos planos a escala y renderizado 3D para definir cada arista y proporción.'
    },
    {
      step: '02',
      title: 'Selección de la Tabla en Aserradero',
      desc: 'Buscamos troncos singulares con secado controlado. Si lo deseas, puedes acompañarnos o recibir muestras de la tabla matriz antes de iniciar el aserrado.'
    },
    {
      step: '03',
      title: 'Labrado Manual & Ensambles de Oficio',
      desc: 'Cepillado a mano con garlopas para alinear la fibra y tallado minucioso de colas de milano y cajas de espiga sin tornillería oculta.'
    },
    {
      step: '04',
      title: 'Ensamble en Seco y Pruebas de Dilatación',
      desc: 'Montamos la pieza por completo en seco para verificar el ajuste al milímetro y dejar margen para las microcontracciones higrométricas estacionales.'
    },
    {
      step: '05',
      title: 'Nutrición Botánica y Pulido al Cuero',
      desc: 'Saturación en varias capas con aceite de tung puro, linaza cocida y cera virgen de abejas. Pulido manual que otorga un tacto sedoso e inimitable.'
    }
  ];

  return (
    <div className="bg-[#fcf9f3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[#895110] mb-3">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:underline text-[#50443e]"
            >
              Inicio
            </button>
            <span>/</span>
            <span className="font-semibold uppercase tracking-wider">Servicios & Disciplinas</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-2">
            Metodología del Taller
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#412311] leading-tight max-w-3xl">
            Soluciones integrales de carpintería y ebanistería para espacios singulares.
          </h1>
          <p className="text-sm sm:text-base text-[#50443e] font-light mt-3 max-w-2xl">
            Trabajamos con particulares, interioristas y estudios de arquitectura para materializar proyectos donde la madera maciza es el elemento conductor.
          </p>
        </div>

        {/* 4 Specialties Detailed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SPECIALTIES.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-8 rounded-xl bg-[#f0eee8] border border-[#d5c3bb] flex flex-col justify-between group hover:border-[#412311] transition-all duration-300"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                  <span className="w-12 h-12 rounded-lg bg-[#5a3825] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </span>
                  <span className="text-xs font-semibold text-[#895110] uppercase tracking-wider bg-white px-3 py-1 rounded border border-[#d5c3bb]">
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#412311] mb-3 group-hover:text-[#bd5338] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#50443e] font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold text-[#412311] uppercase tracking-wider">
                    Metodología de ejecución:
                  </h4>
                  <p className="text-xs text-[#50443e] font-light leading-relaxed">
                    {item.process}
                  </p>
                </div>

                <div className="p-3 bg-white rounded border border-[#d5c3bb] text-xs mb-6">
                  <span className="font-semibold text-[#412311] block mb-0.5">Materiales habituales:</span>
                  <span className="text-[#50443e] font-light">{item.materials}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#d5c3bb] flex items-center justify-between">
                <button
                  onClick={() => onSelectSpecialty(item)}
                  className="text-xs font-semibold text-[#412311] hover:text-[#bd5338] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver ficha técnica</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 rounded-lg bg-[#412311] hover:bg-[#5a3825] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
                >
                  Encargar proyecto
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Process Timeline */}
        <div className="bg-[#ebe8e2] p-8 lg:p-12 rounded-xl border border-[#d5c3bb] mb-16">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-1">
              Paso a Paso
            </span>
            <h2 className="font-serif text-3xl text-[#412311]">
              El Camino de una Pieza en el Taller
            </h2>
            <p className="text-sm text-[#50443e] font-light mt-2">
              Desde el primer contacto hasta la entrega en tu vivienda, cada fase está protocolizada para garantizar un resultado impoluto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="bg-[#fcf9f3] p-5 rounded-lg border border-[#d5c3bb] relative flex flex-col justify-between">
                <div>
                  <span className="font-serif text-2xl font-bold text-[#bd5338] block mb-2">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-[#412311] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#50443e] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architect Collab Banner */}
        <div className="p-8 rounded-xl bg-[#1e382b] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c7d9cc] font-semibold block mb-1">
              Colaboración Profesional
            </span>
            <h3 className="font-serif text-2xl text-white">
              ¿Eres arquitecto o diseñador de interiores?
            </h3>
            <p className="text-xs sm:text-sm text-[#d5ded8] font-light mt-1 max-w-xl">
              Ofrecemos servicio de asesoría técnica para uniones de forja, cálculo de dilataciones en paramentos y acceso prioritario a tablas de gran formato en secadero.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="whitespace-nowrap px-8 py-3 rounded-full bg-[#bd5338] hover:bg-[#a6452e] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            Canal para Profesionales
          </button>
        </div>
      </div>
    </div>
  );
}
