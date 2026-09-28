import { useState, useMemo } from 'react';
import { CREATIONS, CreationItem } from '../../data/workshopData';
import { ScreenType } from '../Header';

interface TiendaScreenProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onSelectPiece: (piece: CreationItem) => void;
  onRequestPiece: (piece: CreationItem) => void;
}

export default function TiendaScreen({ onNavigate, onSelectPiece, onRequestPiece }: TiendaScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWood, setSelectedWood] = useState('Todas');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const woodsList = ['Todas', 'Nogal Americano', 'Roble Europeo', 'Fresno Olivo', 'Castaño Rústico Seleccionado', 'Teca Recuperada & Hierro'];
  const categoriesList = ['Todas', 'Mesas y Comedores', 'Mobiliario a Medida', 'Cocinas y Almacenaje', 'Piezas Escultóricas'];

  const filteredItems = useMemo(() => {
    return CREATIONS.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.wood.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesWood = selectedWood === 'Todas' || item.wood === selectedWood;
      const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;

      return matchesSearch && matchesWood && matchesCategory;
    });
  }, [searchQuery, selectedWood, selectedCategory]);

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
            <span className="font-semibold uppercase tracking-wider">Tienda & Catálogo de Obras</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-2">
            Showroom & Encargos Singulares
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#412311] leading-tight max-w-3xl">
            Catálogo de Piezas de Autor y Proyectos Realizados
          </h1>
          <p className="text-sm sm:text-base text-[#50443e] font-light mt-3 max-w-2xl">
            Cada pieza se fabrica bajo pedido respetando las medidas de tu estancia o puede adquirirse como prototipo único disponible en nuestro showroom.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#f0eee8] p-4 sm:p-6 rounded-xl border border-[#d5c3bb] mb-12 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div>
              <label className="block text-xs font-semibold text-[#412311] uppercase tracking-wider mb-1">
                Buscar por nombre o detalle
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ej. Nogal, Live Edge, Aparador..."
                  className="w-full bg-white border border-[#d5c3bb] rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#412311]"
                />
                <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-base text-[#895110]">
                  search
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-semibold text-[#412311] uppercase tracking-wider mb-1">
                Categoría de Mobiliario
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-[#d5c3bb] rounded-lg p-2 text-xs text-[#412311] focus:outline-none focus:ring-1 focus:ring-[#412311]"
              >
                {categoriesList.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Wood Filter */}
            <div>
              <label className="block text-xs font-semibold text-[#412311] uppercase tracking-wider mb-1">
                Especie de Madera
              </label>
              <select
                value={selectedWood}
                onChange={(e) => setSelectedWood(e.target.value)}
                className="w-full bg-white border border-[#d5c3bb] rounded-lg p-2 text-xs text-[#412311] focus:outline-none focus:ring-1 focus:ring-[#412311]"
              >
                {woodsList.map(w => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#50443e] pt-2 border-t border-[#d5c3bb]/60">
            <span>Mostrando {filteredItems.length} piezas encontradas</span>
            {(searchQuery || selectedWood !== 'Todas' || selectedCategory !== 'Todas') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedWood('Todas');
                  setSelectedCategory('Todas');
                }}
                className="text-[#bd5338] hover:underline font-semibold"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Pieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((piece) => (
            <div
              key={piece.id}
              className="rounded-lg bg-white border border-[#d5c3bb] overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className="h-64 bg-[#f0eee8] overflow-hidden relative cursor-pointer"
                  onClick={() => onSelectPiece(piece)}
                >
                  <img
                    src={piece.image}
                    alt={piece.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-white/90 text-[#412311] text-[10px] uppercase font-bold border border-[#d5c3bb]">
                      {piece.wood}
                    </span>
                    {piece.tag && (
                      <span className="px-2 py-0.5 rounded bg-[#d4e8cf] text-[#101f0f] text-[10px] uppercase font-bold">
                        {piece.tag}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3
                      onClick={() => onSelectPiece(piece)}
                      className="font-serif text-xl font-semibold text-[#412311] group-hover:text-[#bd5338] transition-colors cursor-pointer"
                    >
                      {piece.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#895110] block mb-2">
                    {piece.dimensions}
                  </span>
                  <p className="text-xs text-[#50443e] font-light leading-relaxed mb-4">
                    {piece.description}
                  </p>

                  <div className="space-y-1.5 text-[11px] text-[#50443e] border-t border-[#d5c3bb] pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#412311]">Plazo:</span>
                      <span>{piece.leadTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#412311]">Estimación:</span>
                      <span className="font-bold text-[#412311]">{piece.estimatedPrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => onSelectPiece(piece)}
                  className="flex-1 py-2.5 rounded bg-[#f0eee8] hover:bg-[#ebe8e2] text-[#412311] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Ver Ficha
                </button>
                <button
                  onClick={() => onRequestPiece(piece)}
                  className="flex-1 py-2.5 rounded bg-[#412311] hover:bg-[#5a3825] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
                >
                  Encargar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom piece banner */}
        <div className="p-5 sm:p-8 rounded-xl bg-[#5a3825] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white">
              ¿No encuentras las dimensiones exactas para tu hogar?
            </h3>
            <p className="text-xs sm:text-sm text-[#d5c3bb] font-light mt-1">
              Fabricamos cualquier diseño ajustado a los centímetros de tu salón, comedor o biblioteca.
            </p>
          </div>
          <button
            onClick={() => onNavigate('precios')}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#bd5338] hover:bg-[#a6452e] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Abrir Simulador de Medidas
          </button>
        </div>
      </div>
    </div>
  );
}
