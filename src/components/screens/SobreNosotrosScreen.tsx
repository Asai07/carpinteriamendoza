import { ScreenType } from '../Header';

interface SobreNosotrosScreenProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onOpenQuoteModal: () => void;
}

export default function SobreNosotrosScreen({ onNavigate, onOpenQuoteModal }: SobreNosotrosScreenProps) {
  return (
    <div className="bg-[#fcf9f3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Breadcrumb & Section Eyebrow */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[#895110] mb-3">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:underline text-[#50443e]"
            >
              Inicio
            </button>
            <span>/</span>
            <span className="font-semibold uppercase tracking-wider">Sobre Nosotros</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-2">
            El Taller & El Oficio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#412311] leading-tight max-w-3xl">
            Dos décadas dedicadas a la honestidad de la madera y al ensamblaje sin atajos.
          </h1>
        </div>

        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#d5c3bb] shadow-md bg-[#f0eee8]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiFC0OWRxGND7IFEkD59DQbg2WnLesQGWijchcDmVN4pl_86tHbaR04eWdT_ppedYRKE2SS-3Mpaj2CYbkmx4WM2U3D83rMqj3UCYSgPuOUORLgeWdpo-lESXpvKBlpKxrVkIzThiVfz4Qbms8VIsYGDoGKZxStlXvl3JbY-0xHuo-zjraoUjt_P5hRM0t1ULWch0kjxxwoYJdo2wPy0sb1B1GQw4G7lBQQxBJ36WY_o77CdDBcB0g"
              alt="Banco de trabajo del taller artesanal"
              className="w-full h-[420px] sm:h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-2xl text-[#412311]">
              Un refugio para las herramientas manuales y el tiempo pausado.
            </h2>
            <p className="text-sm text-[#50443e] font-light leading-relaxed">
              En Woody no creemos en la producción seriada ni en los aglomerados disfrazados con melaminas sintéticas. Nacimos como un pequeño taller de ebanistería en las faldas de las Gavarres (Girona) con la convicción de que un mueble bien concebido debe durar más que la vida del artesano que lo talló.
            </p>
            <p className="text-sm text-[#50443e] font-light leading-relaxed">
              Trabajamos con garlopas de nogal, formones forjados a mano y sierras japonesas Dozuki que cortan a la tracción con precisión micrométrica. Cada unión mecánica absorbe el movimiento natural de dilatación que la madera experimenta a lo largo del año.
            </p>

            <div className="pt-4 border-t border-[#d5c3bb] flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#412311]">20+</span>
                <span className="block text-xs text-[#895110] font-medium">Años de oficio</span>
              </div>
              <div className="h-10 w-px bg-[#d5c3bb] hidden sm:block"></div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#412311]">850+</span>
                <span className="block text-xs text-[#895110] font-medium">Piezas singulares</span>
              </div>
              <div className="h-10 w-px bg-[#d5c3bb] hidden sm:block"></div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#412311]">100%</span>
                <span className="block text-xs text-[#895110] font-medium">Madera maciza FSC</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of the Atelier */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-1">
              Nuestros Principios Innegociables
            </span>
            <h2 className="font-serif text-3xl text-[#412311]">
              El Manifiesto de Banco
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-[#f0eee8] border border-[#d5c3bb]">
              <span className="w-10 h-10 rounded bg-[#fcf9f3] text-[#412311] flex items-center justify-center mb-4 border border-[#d5c3bb]">
                <span className="material-symbols-outlined text-xl">spa</span>
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#412311] mb-2">
                Curado Natural Lento
              </h3>
              <p className="text-xs text-[#50443e] font-light leading-relaxed">
                Cada tablón reposa entre 24 y 48 meses en secado al aire antes de entrar en nuestra cámara solar, garantizando un 8-10% de humedad residual sin tensiones internas.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#f0eee8] border border-[#d5c3bb]">
              <span className="w-10 h-10 rounded bg-[#fcf9f3] text-[#412311] flex items-center justify-center mb-4 border border-[#d5c3bb]">
                <span className="material-symbols-outlined text-xl">handyman</span>
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#412311] mb-2">
                Cero Tornillos Vistos
              </h3>
              <p className="text-xs text-[#50443e] font-light leading-relaxed">
                Uniones mecánicas de madera con madera: cola de milano pasante, espigas acuñadas con maderas de contraste y mariposas de estabilización estructural.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#f0eee8] border border-[#d5c3bb]">
              <span className="w-10 h-10 rounded bg-[#fcf9f3] text-[#412311] flex items-center justify-center mb-4 border border-[#d5c3bb]">
                <span className="material-symbols-outlined text-xl">eco</span>
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#412311] mb-2">
                Acabados Orgánicos Vivos
              </h3>
              <p className="text-xs text-[#50443e] font-light leading-relaxed">
                Rechazamos los barnices de poliuretano que sellan la madera como un plástico. Empleamos aceites de tung, linaza pura y ceras de abeja que nutren la veta viva.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#f0eee8] border border-[#d5c3bb]">
              <span className="w-10 h-10 rounded bg-[#fcf9f3] text-[#412311] flex items-center justify-center mb-4 border border-[#d5c3bb]">
                <span className="material-symbols-outlined text-xl">verified</span>
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#412311] mb-2">
                Trazabilidad Notariada
              </h3>
              <p className="text-xs text-[#50443e] font-light leading-relaxed">
                Cada pieza entregada incluye su ficha de nacimiento botánica: especie, coordenadas del bosque de procedencia, fecha de aserrado y artesano responsable.
              </p>
            </div>
          </div>
        </div>

        {/* Master Woodworkers */}
        <div className="bg-[#f0eee8] p-5 sm:p-8 lg:p-12 rounded-xl border border-[#d5c3bb] mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-1">
              Las Manos Detrás del Formón
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#412311]">
              Maestros Ebanistas y Diseñadores
            </h2>
            <p className="text-sm text-[#50443e] font-light mt-2">
              Un equipo multidisciplinar donde conviven ebanistas de tercera generación y arquitectos especializados en diseño de mobiliario.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border border-[#d5c3bb]">
              <div className="h-48 rounded overflow-hidden bg-[#f0eee8] mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK7Gvv7yzJUTz5eqR4QFKj6VYr3jGo4rgvGebzYe-K6hUMDjRPiv_0X1YYfsGOUjbVvU4L3aCg6eyeqfyPXBofL2nn-mqttLXPjwxjMt1lORQqd-4t8lGHy-chQHA-ArqVy96Io4ZYcd_zXK8xhE97m-S2hIBar_HBxkHWaCECFDkxyjAdskFsjHSMvRK2c1KhNPYJ-jZGCB4ezhZdb_mX57YqumSlWFJHcXoEqrXUpXDTPARBEFNg"
                  alt="Ramon Vidal, Maestro Ebanista"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#412311]">Ramon Vidal</h3>
              <span className="text-xs text-[#895110] font-medium block mb-2">Fundador & Maestro Ebanista</span>
              <p className="text-xs text-[#50443e] font-light">
                Formado en la escuela de oficios de Florencia. Especialista en tallado de ensambles japoneses y curvado al vapor.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-[#d5c3bb]">
              <div className="h-48 rounded overflow-hidden bg-[#f0eee8] mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFvtCqtym9IAwhfqs15Q5S7b0LHXfrrdx7oW0yu7q-yoYe3z3-LZqZ2c8A6lct9IUmIWYLu6xsLRc8aQoAjkO5AYSr3WW99PJSQ5MkjPg3Xb85e73KhPtsjp_oNyeXY2j4ZXB_Kad722yzWyGMPvTDKdoEB9wh-79Wq3hihtPOlzWJFGGVuI9ZoVdrELKey94DhzsZnONSjUK4BAFQMB0ffRU-byxVi4bJAlT4BQpx2uSncubDaC5U"
                  alt="Clara Font, Arquitecta de Interiores"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#412311]">Clara Font</h3>
              <span className="text-xs text-[#895110] font-medium block mb-2">Dirección de Proyectos y 3D</span>
              <p className="text-xs text-[#50443e] font-light">
                Coordina la integración de muebles con los proyectos de arquitectura residencial y el prototipado milimétrico.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-[#d5c3bb]">
              <div className="h-48 rounded overflow-hidden bg-[#f0eee8] mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIqZ6f0dqLK60astwWHXc8DlC-6unRw2Oc_yfsfENJfQ9zSjdwIeQ4jcHl7W3F_6nLKFC0k2EI11IAvtDhiMz4IeFZ_2xAOu4d6v3qx3wyOy4GF0bbFzCUXhyaXiFt46wmjuyDpcKG5h4Cs01krCwXCaqKYEqUg1WJnbp9j7crR9rlse6JXVX7uHvKFHlIxF1wGVFsH635h4VapFdo9pdmHavJz9r-PaOFHarqiO-q3J3DQ6Rq06ZS"
                  alt="Marc Rovira, Maestro de Banco"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#412311]">Marc Rovira</h3>
              <span className="text-xs text-[#895110] font-medium block mb-2">Maestro de Acabados & Cepillado</span>
              <p className="text-xs text-[#50443e] font-light">
                Encargado de la selección de tablas en el aserradero y la preparación de aceites botánicos biocompatibles.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-5 sm:p-8 rounded-xl bg-[#5a3825] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="font-serif text-2xl text-white">
              ¿Quieres visitar nuestro taller en Girona?
            </h3>
            <p className="text-xs sm:text-sm text-[#d5c3bb] font-light mt-1">
              Abrimos las puertas previa cita para que puedas tocar los tablones en bruto y ver piezas en pleno proceso de ensamblado.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="whitespace-nowrap px-8 py-3 rounded-full bg-[#bd5338] hover:bg-[#a6452e] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
          >
            Concertar Visita al Taller
          </button>
        </div>
      </div>
    </div>
  );
}
