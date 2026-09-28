import { WOOD_SPECIMENS } from '../data/workshopData';

// Eliminamos la interfaz de Props porque ya no necesitamos recibir la función 'onSelectWood'

export default function MaderasNoblesSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#fcf9f3]" id="maderas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#bd5338] block mb-4">
              Materiales de Calidad
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3a2618] tracking-tight leading-[1.05] mb-6">
              Nuestros Materiales
            </h2>
            <p className="text-[#5c4a3d] text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              Trabajamos con maderas seleccionadas, secadas al horno y listas para durar toda la vida. Te asesoramos para elegir la mejor opción según el diseño y el uso que le darás a tu mueble.
            </p>
          </div>

          {/* Sello de confianza */}
          <div className="pb-2">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#3a2618]/5 shadow-sm">
              <span className="material-symbols-outlined text-[#bd5338] text-xl">workspace_premium</span>
              <span className="text-sm font-bold text-[#3a2618]">Selección de Primera</span>
            </div>
          </div>
        </div>

        {/* Contenedor Flex centrado */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {WOOD_SPECIMENS.map((wood) => (
            <div
              key={wood.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group rounded-2xl sm:rounded-[2rem] bg-white border border-[#3a2618]/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Contenedor de Imagen */}
              <div className="h-48 sm:h-64 overflow-hidden relative bg-[#f0e6d2]">
                <img
                  src={wood.image}
                  alt={`Acabado de ${wood.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2618]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Etiqueta flotante */}
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-bold tracking-widest uppercase text-[#3a2618] shadow-sm">
                  {wood.tag}
                </span>
              </div>

              {/* Contenido principal */}
              <div className="p-5 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-bold text-[#3a2618] mb-3">
                  {wood.name}
                </h3>

                <p className="text-sm text-[#5c4a3d] font-medium leading-relaxed mb-8 flex-grow">
                  {wood.description}
                </p>

                {/* Uso ideal */}
                <div className="pt-5 border-t border-[#3a2618]/5">
                  <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#bd5338] mb-2">
                    Ideal para:
                  </span>
                  <span className="text-sm text-[#3a2618] font-semibold block leading-relaxed">
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