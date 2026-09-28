import { useState } from 'react';
import { CREATIONS, CreationItem } from '../data/workshopData';

// 1. Actualizamos las categorías a las que solicitaste
type FilterCategory = 'Todos' | 'Puertas' | 'Closets' | 'Cocinas' | 'Escritorios' | 'Comedores' | 'Muebles para TV' | 'Otros';

interface CreacionesGalleryProps {
  onSelectPiece: (piece: CreationItem) => void;
  onContactClick: () => void;
  limit?: number;
  showAllButton?: boolean;
  onShowAllClick?: () => void;
}

export default function CreacionesGallery({
  onSelectPiece,
  onContactClick,
  limit,
  showAllButton = false,
  onShowAllClick
}: CreacionesGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Todos');

  const categories: FilterCategory[] = [
    'Todos', 'Puertas', 'Closets', 'Cocinas', 'Escritorios', 'Comedores', 'Muebles para TV', 'Otros'
  ];

  let filteredCreations = activeFilter === 'Todos'
    ? CREATIONS
    : CREATIONS.filter(item => item.category === activeFilter);

  if (limit && limit > 0) {
    filteredCreations = filteredCreations.slice(0, limit);
  }

  return (
    <section className="relative py-16 sm:py-24 bg-[#fcf9f3] text-[#3a2618]" id="galeria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Encabezado */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#bd5338] block mb-4">
            Nuestro trabajo
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#3a2618] tracking-tight leading-[1.05] mb-6">
            El Taller en Imágenes
          </h2>
          <p className="text-[#5c4a3d] text-base font-medium leading-relaxed max-w-2xl">
            Explora el trabajo directo de nuestras manos.
          </p>
        </div>

        {/* Filtros de Categoría Minimalistas */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center items-center gap-2 sm:gap-3 mb-12 sm:mb-16 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] font-bold tracking-[0.25em] uppercase transition-all duration-500 cursor-pointer whitespace-nowrap shrink-0 ${activeFilter === category
                  ? 'bg-[#bd5338] text-white shadow-lg shadow-[#bd5338]/30 scale-105'
                  : 'bg-white border border-[#d5c3bb] text-[#5c4a3d] hover:border-[#bd5338] hover:text-[#bd5338]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grilla Fotográfica */}
        <div className="columns-1 md:columns-2 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {filteredCreations.map((item) => (
            <article
              key={item.id}
              className="break-inside-avoid relative group rounded-xl overflow-hidden bg-white border border-[#d5c3bb] hover:border-[#bd5338]/60 cursor-pointer transition-all duration-500 shadow-sm hover:shadow-md"
              onClick={() => onSelectPiece(item)}
            >
              {/* Imagen a pantalla completa dentro de su contenedor */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Overlay oscuro que aparece solo al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a2618]/95 via-[#3a2618]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {/* Etiqueta pequeña de la categoría */}
                  <span className="inline-block px-2.5 py-1 mb-2 rounded bg-[#bd5338] text-white text-[8px] uppercase tracking-widest font-bold shadow-sm">
                    {item.category}
                  </span>

                  {/* Nombre de la pieza */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#fcf9f3] font-bold leading-tight">
                    {item.title}
                  </h3>

                  {/* Icono sutil indicando que se puede expandir */}
                  <div className="mt-3 flex items-center gap-2 text-[#fcf9f3] text-[10px] uppercase tracking-[0.2em] font-bold">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    Ampliar foto
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón Ver Todo el Catálogo */}
        {showAllButton && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onShowAllClick}
              className="px-8 py-4 border border-[#bd5338] text-[#bd5338] hover:bg-[#bd5338] hover:text-white rounded-full font-bold text-[10px] tracking-[0.25em] uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              Ver todo el catálogo
            </button>
          </div>
        )}

        {/* Banner de Acción (Contacto) */}
        <div className="mt-16 sm:mt-24 relative overflow-hidden rounded-2xl bg-[#2a4536] border border-[#3b5948] p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b5948] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left max-w-2xl">
            <div className="w-16 h-16 rounded-full bg-[#1e3328] flex items-center justify-center border border-[#3b5948] shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-3xl text-[#fcf9f3]">handshake</span>
            </div>
            <div>
              <p className="text-[10px] text-[#a8c7b4] font-bold tracking-[0.25em] uppercase mb-3">
                ¿Te gusta nuestro trabajo?
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#fcf9f3] mb-4">
                Hagamos tu proyecto realidad
              </h3>
              <p className="text-[#eef2f0] text-sm sm:text-base font-medium leading-relaxed">
                Contáctanos para que nuestro taller empiece a dar forma a tus ideas. Nos adaptamos a tus necesidades y a tu espacio.
              </p>
            </div>
          </div>

          <button
            onClick={onContactClick}
            className="relative z-10 whitespace-nowrap inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#bd5338] hover:bg-[#a6452e] text-white font-bold text-[10px] tracking-[0.25em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}