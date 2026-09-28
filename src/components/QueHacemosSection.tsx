import { SPECIALTIES, SpecialtyItem } from '../data/workshopData';

interface QueHacemosSectionProps {
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
  onStartCommission: (discipline: string) => void;
}

export default function QueHacemosSection({ onSelectSpecialty, onStartCommission }: QueHacemosSectionProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-[#fcf9f3]" id="que-hacemos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#e3000f] block mb-4">
            Taller en Monterrey, N.L.
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111111] tracking-tight leading-[1.05] mb-6">
            Lo Que Hacemos
          </h2>
          <p className="text-[#555555] text-base sm:text-lg font-medium leading-relaxed">
            Con más de 10 años de experiencia, nuestro equipo de carpinteros transforma madera de la más alta calidad en espacios funcionales para tu hogar. Fabricamos cocinas, clósets, puertas, escaleras y muebles a medida, combinando la durabilidad del trabajo bien hecho con acabados modernos.
          </p>
        </div>

        {/* Grilla cambiada de 4 a 2 columnas (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SPECIALTIES.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] bg-[#ffffff] border border-[#e5e5e5] shadow-sm hover:shadow-2xl hover:shadow-[#000000]/5 hover:-translate-y-1 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#fcf9f3] rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>

              {/* Contenido principal agrupado con flex-grow para evitar el hueco en medio */}
              <div className="relative z-10 flex-grow">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#111111] text-[#ffffff] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e3000f] group-hover:text-white transition-all duration-500 shadow-sm border border-[#333333] group-hover:border-transparent">
                    <span className="material-symbols-outlined text-2xl font-light">{item.icon}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e3000f] shrink-0 mt-2 opacity-80"></div>
                      <span className="text-sm text-[#555555] font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}