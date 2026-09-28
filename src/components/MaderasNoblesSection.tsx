import { WOOD_SPECIMENS } from '../data/workshopData';

// Eliminamos la interfaz de Props porque ya no necesitamos recibir la función 'onSelectWood'

export default function MaderasNoblesSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#ffffff]" id="maderas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#e3000f] block mb-4">
              Materiales de Calidad
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-[1.05] mb-6">
              Nuestros Materiales
            </h2>
            <p className="text-[#555555] text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              Trabajamos con maderas seleccionadas, secadas al horno y listas para durar toda la vida. Te asesoramos para elegir la mejor opción según el diseño y el uso que le darás a tu mueble.
            </p>
          </div>

          {/* Sello de confianza */}
          <div className="pb-2">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#ffffff] border border-[#eae2d8] shadow-sm">
              <span className="material-symbols-outlined text-[#e3000f] text-xl">workspace_premium</span>
              <span className="text-sm font-bold text-[#111111]">Selección de Primera</span>
            </div>
          </div>
        </div>

        {/* Contenedor Flex centrado */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {WOOD_SPECIMENS.map((wood) => (
            <div
              key={wood.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group rounded-2xl sm:rounded-[2rem] bg-[#ffffff] border border-[#eae2d8] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Contenedor de Imagen */}
              <div className="h-48 sm:h-64 overflow-hidden relative bg-[#ffffff]">
                <img
                  src={wood.image}
                  alt={`Acabado de ${wood.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Etiqueta flotante */}
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#ffffff]/90 backdrop-blur-md text-[9px] font-bold tracking-widest uppercase text-[#111111] shadow-sm">
                  {wood.tag}
                </span>
              </div>

              {/* Contenido principal */}
              <div className="p-5 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                  {wood.name}
                </h3>

                <p className="text-sm text-[#555555] font-medium leading-relaxed mb-8 flex-grow">
                  {wood.description}
                </p>

                {/* Uso ideal */}
                <div className="pt-5 border-t border-[#eae2d8]">
                  <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#e3000f] mb-2">
                    Ideal para:
                  </span>
                  <span className="text-sm text-[#111111] font-semibold block leading-relaxed">
                    {wood.idealFor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}