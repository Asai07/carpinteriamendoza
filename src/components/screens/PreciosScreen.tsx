import { useState, useMemo } from 'react';
import { ScreenType } from '../Header';

interface PreciosScreenProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onSendConfigToQuote: (config: {
    pieceName: string;
    wood: string;
    dimensions: string;
    finish: string;
    joinery: string;
    estimatedPrice: string;
  }) => void;
}

interface PieceTypeOption {
  id: string;
  name: string;
  basePrice: number;
  defaultLength: number;
  defaultWidth: number;
  defaultThickness: number;
  category: string;
  leadWeeks: string;
}

const PIECE_OPTIONS: PieceTypeOption[] = [
  { id: 'mesa-live-edge', name: 'Mesa de Comedor Live Edge', basePrice: 3800, defaultLength: 260, defaultWidth: 100, defaultThickness: 5, category: 'Mesas', leadWeeks: '6 a 8 semanas' },
  { id: 'mesa-rectilinea', name: 'Mesa Rectilínea Minimalista', basePrice: 2900, defaultLength: 220, defaultWidth: 95, defaultThickness: 4, category: 'Mesas', leadWeeks: '5 a 7 semanas' },
  { id: 'aparador-inglete', name: 'Aparador en Inglete Continuo', basePrice: 3200, defaultLength: 200, defaultWidth: 48, defaultThickness: 3, category: 'Almacenaje', leadWeeks: '6 a 7 semanas' },
  { id: 'consola-suspendida', name: 'Consola Escultórica Suspendida', basePrice: 1950, defaultLength: 150, defaultWidth: 38, defaultThickness: 4, category: 'Piezas Únicas', leadWeeks: '4 a 5 semanas' },
  { id: 'silla-curvada', name: 'Silla de Autor en Madera Curvada', basePrice: 850, defaultLength: 55, defaultWidth: 55, defaultThickness: 3, category: 'Asientos', leadWeeks: '3 a 4 semanas' },
  { id: 'estanteria-forja', name: 'Sistema Modular Madera & Forja', basePrice: 4200, defaultLength: 300, defaultWidth: 40, defaultThickness: 4.5, category: 'Estructural', leadWeeks: '6 a 8 semanas' },
];

const WOOD_OPTIONS = [
  { name: 'Nogal Americano', multiplier: 1.35, desc: 'Tono chocolate profundo y veteado ondulado sedoso.' },
  { name: 'Roble Europeo', multiplier: 1.18, desc: 'Dureza formidable con espejuelos y tono paja cálido.' },
  { name: 'Fresno Olivo', multiplier: 1.10, desc: 'Elasticidad y veteado claro jaspeado contrastado.' },
  { name: 'Castaño del Norte', multiplier: 1.00, desc: 'Poro abierto, gran calidez y resistencia natural.' },
  { name: 'Olivo Centenario', multiplier: 1.65, desc: 'Vetiformes sinuosos y abigarrados de enorme densidad.' }
];

const FINISH_OPTIONS = [
  { name: 'Aceite de Tung Puro & Cera de Abeja', extra: 0, desc: 'Acabado tradicional que nutre el poro en profundidad.' },
  { name: 'Jabonado Nórdico Calizo', extra: 140, desc: 'Aspecto mate blanqueado que mantiene la claridad de la madera.' },
  { name: 'Shou Sugi Ban (Quemado tradicional al fuego)', extra: 260, desc: 'Tratamiento ancestral japonés de carbonización y cepillado.' },
  { name: 'Pulido Sedoso al Cuero & Aceite de Nuez', extra: 180, desc: 'Tacto extra sedoso ideal para tapas de mesa y consolas.' }
];

const JOINERY_OPTIONS = [
  { name: 'Ensambles de Caja y Espiga Tradicional', extra: 0 },
  { name: 'Colas de Milano Pasantes Vistas a Mano', extra: 180 },
  { name: 'Mariposas de Ébano de Gabón Estructurales', extra: 240 }
];

export default function PreciosScreen({ onNavigate, onSendConfigToQuote }: PreciosScreenProps) {
  const [selectedPieceId, setSelectedPieceId] = useState<string>('mesa-live-edge');
  const [selectedWood, setSelectedWood] = useState<string>('Nogal Americano');
  const [selectedFinish, setSelectedFinish] = useState<string>('Aceite de Tung Puro & Cera de Abeja');
  const [selectedJoinery, setSelectedJoinery] = useState<string>('Mariposas de Ébano de Gabón Estructurales');
  
  const currentPiece = PIECE_OPTIONS.find(p => p.id === selectedPieceId) || PIECE_OPTIONS[0];

  const [length, setLength] = useState<number>(currentPiece.defaultLength);
  const [width, setWidth] = useState<number>(currentPiece.defaultWidth);

  // Update defaults when piece changes
  const handlePieceSelect = (piece: PieceTypeOption) => {
    setSelectedPieceId(piece.id);
    setLength(piece.defaultLength);
    setWidth(piece.defaultWidth);
  };

  const calculation = useMemo(() => {
    const woodObj = WOOD_OPTIONS.find(w => w.name === selectedWood) || WOOD_OPTIONS[0];
    const finishObj = FINISH_OPTIONS.find(f => f.name === selectedFinish) || FINISH_OPTIONS[0];
    const joineryObj = JOINERY_OPTIONS.find(j => j.name === selectedJoinery) || JOINERY_OPTIONS[0];

    // Dimension scaling factor relative to default area
    const defaultArea = currentPiece.defaultLength * currentPiece.defaultWidth;
    const currentArea = length * width;
    const dimensionRatio = currentArea / defaultArea;

    const baseCost = currentPiece.basePrice * dimensionRatio * woodObj.multiplier;
    const totalEstimate = Math.round(baseCost + finishObj.extra + joineryObj.extra);
    
    // Spread range +/- 8%
    const minPrice = Math.round(totalEstimate * 0.94);
    const maxPrice = Math.round(totalEstimate * 1.06);

    const hoursEstimated = Math.round((totalEstimate / 75));

    return {
      totalEstimate,
      minPrice,
      maxPrice,
      hoursEstimated,
      leadWeeks: currentPiece.leadWeeks
    };
  }, [currentPiece, selectedWood, selectedFinish, selectedJoinery, length, width]);

  const handleTransferToQuote = () => {
    onSendConfigToQuote({
      pieceName: currentPiece.name,
      wood: selectedWood,
      dimensions: `${length} × ${width} cm (Grosor: ${currentPiece.defaultThickness} cm)`,
      finish: selectedFinish,
      joinery: selectedJoinery,
      estimatedPrice: `${calculation.minPrice.toLocaleString('es-ES')} € — ${calculation.maxPrice.toLocaleString('es-ES')} €`
    });
  };

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
            <span className="font-semibold uppercase tracking-wider">Precios & Tarifas</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-2">
            Transparencia de Oficio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#412311] leading-tight max-w-3xl">
            Simulador de Tarifas & Configuración a Medida
          </h1>
          <p className="text-sm sm:text-base text-[#50443e] font-light mt-3 max-w-2xl">
            Nuestros precios reflejan con honestidad las horas dedicadas en banco, el volumen de madera noble estacionada y los ensambles tallados a mano.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Column Left */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Piece Type */}
            <div className="bg-[#f0eee8] p-6 rounded-xl border border-[#d5c3bb]">
              <span className="text-xs font-bold text-[#895110] uppercase tracking-wider block mb-3">
                1. Selecciona la tipología de pieza
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PIECE_OPTIONS.map((piece) => (
                  <button
                    key={piece.id}
                    onClick={() => handlePieceSelect(piece)}
                    className={`p-3 text-left rounded-lg border text-xs transition-all ${
                      selectedPieceId === piece.id
                        ? 'bg-[#412311] text-white border-[#412311] shadow-sm'
                        : 'bg-white text-[#412311] border-[#d5c3bb] hover:border-[#895110]'
                    }`}
                  >
                    <span className="font-semibold block text-sm">{piece.name}</span>
                    <span className="text-[11px] opacity-80">{piece.category} · Medida ref: {piece.defaultLength}×{piece.defaultWidth} cm</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions */}
            <div className="bg-[#f0eee8] p-6 rounded-xl border border-[#d5c3bb]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-1">
                <span className="text-xs font-bold text-[#895110] uppercase tracking-wider">
                  2. Ajusta las dimensiones deseadas
                </span>
                <span className="text-xs text-[#50443e] font-light">
                  {length} cm × {width} cm (Grosor aprox: {currentPiece.defaultThickness} cm)
                </span>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs text-[#412311] font-semibold mb-1">
                    <span>Largo de la pieza:</span>
                    <span className="text-[#895110] font-bold">{length} cm</span>
                  </div>
                  <input
                    type="range"
                    min={Math.round(currentPiece.defaultLength * 0.6)}
                    max={Math.round(currentPiece.defaultLength * 1.6)}
                    step="5"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-[#412311] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#50443e]">
                    <span>Min: {Math.round(currentPiece.defaultLength * 0.6)} cm</span>
                    <span>Max: {Math.round(currentPiece.defaultLength * 1.6)} cm</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#412311] font-semibold mb-1">
                    <span>Ancho / Fondo:</span>
                    <span className="text-[#895110] font-bold">{width} cm</span>
                  </div>
                  <input
                    type="range"
                    min={Math.round(currentPiece.defaultWidth * 0.6)}
                    max={Math.round(currentPiece.defaultWidth * 1.5)}
                    step="5"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-[#412311] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#50443e]">
                    <span>Min: {Math.round(currentPiece.defaultWidth * 0.6)} cm</span>
                    <span>Max: {Math.round(currentPiece.defaultWidth * 1.5)} cm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Wood Species */}
            <div className="bg-[#f0eee8] p-6 rounded-xl border border-[#d5c3bb]">
              <span className="text-xs font-bold text-[#895110] uppercase tracking-wider block mb-3">
                3. Especie de madera noble
              </span>
              <div className="space-y-2">
                {WOOD_OPTIONS.map((wood) => (
                  <label
                    key={wood.name}
                    className={`flex items-start gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                      selectedWood === wood.name
                        ? 'bg-white border-[#412311] shadow-2xs'
                        : 'bg-white/60 border-[#d5c3bb] hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="wood_radio"
                      checked={selectedWood === wood.name}
                      onChange={() => setSelectedWood(wood.name)}
                      className="mt-0.5 accent-[#412311]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-[#412311] text-sm">{wood.name}</span>
                        <span className="text-[11px] text-[#895110] font-medium">
                          {wood.multiplier > 1.0 ? `+${Math.round((wood.multiplier - 1) * 100)}%` : 'Base estándar'}
                        </span>
                      </div>
                      <p className="text-[#50443e] font-light mt-0.5">{wood.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 4: Finish & Joinery */}
            <div className="bg-[#f0eee8] p-6 rounded-xl border border-[#d5c3bb]">
              <span className="text-xs font-bold text-[#895110] uppercase tracking-wider block mb-3">
                4. Acabado botánico & uniones estructurales
              </span>
              
              <div className="mb-4">
                <label className="block text-xs text-[#412311] font-semibold mb-1">
                  Tratamiento de acabado superficial:
                </label>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full bg-white border border-[#d5c3bb] rounded-lg p-2.5 text-xs text-[#412311] focus:outline-none focus:ring-1 focus:ring-[#412311]"
                >
                  {FINISH_OPTIONS.map((f) => (
                    <option key={f.name} value={f.name}>
                      {f.name} {f.extra > 0 ? `(+${f.extra} €)` : '(Sin coste añadido)'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#412311] font-semibold mb-1">
                  Detalle de ensamble destacado:
                </label>
                <select
                  value={selectedJoinery}
                  onChange={(e) => setSelectedJoinery(e.target.value)}
                  className="w-full bg-white border border-[#d5c3bb] rounded-lg p-2.5 text-xs text-[#412311] focus:outline-none focus:ring-1 focus:ring-[#412311]"
                >
                  {JOINERY_OPTIONS.map((j) => (
                    <option key={j.name} value={j.name}>
                      {j.name} {j.extra > 0 ? `(+${j.extra} €)` : '(Estándar)'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Sticky Estimation Receipt Right */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-[#fcf9f3] p-5 sm:p-6 md:p-8 rounded-xl border border-[#d5c3bb] shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-[#d5c3bb]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#895110] font-semibold block">
                  Presupuesto Orientativo
                </span>
                <h3 className="font-serif text-2xl text-[#412311]">
                  Resumen de Configuración
                </h3>
              </div>
              <span className="w-9 h-9 rounded-full bg-[#d4e8cf] text-[#1e382b] flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">calculate</span>
              </span>
            </div>

            {/* Spec breakdown */}
            <div className="py-4 space-y-2.5 text-xs text-[#50443e] border-b border-[#d5c3bb]">
              <div className="flex justify-between">
                <span className="font-medium">Pieza:</span>
                <span className="font-semibold text-[#412311]">{currentPiece.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Dimensiones:</span>
                <span className="font-semibold text-[#412311]">{length} × {width} cm</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Madera:</span>
                <span className="font-semibold text-[#412311]">{selectedWood}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Acabado:</span>
                <span className="font-semibold text-[#412311] text-right truncate max-w-[140px] sm:max-w-[190px]">{selectedFinish}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Ensamble:</span>
                <span className="font-semibold text-[#412311] text-right truncate max-w-[140px] sm:max-w-[190px]">{selectedJoinery}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-medium">Horas de banco estimadas:</span>
                <span className="font-semibold text-[#895110]">{calculation.hoursEstimated} horas artesanales</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Plazo de curado y entrega:</span>
                <span className="font-semibold text-[#412311]">{calculation.leadWeeks}</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="py-6 text-center">
              <span className="text-xs text-[#895110] font-semibold uppercase tracking-wider block mb-1">
                Rango Estimado en Taller
              </span>
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#412311] tracking-tight">
                {calculation.minPrice.toLocaleString('es-ES')} € — {calculation.maxPrice.toLocaleString('es-ES')} €
              </div>
              <span className="text-[11px] text-[#50443e] block mt-1 font-light">
                *IVA incluido. Incluye transporte especializado e instalación en planta peninsular.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleTransferToQuote}
                className="w-full py-3.5 px-6 rounded-lg bg-[#bd5338] hover:bg-[#a6452e] text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <span>Solicitar Presupuesto Formal</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <button
                onClick={() => onNavigate('inicio', 'contacto')}
                className="w-full py-2.5 px-4 rounded-lg bg-[#f0eee8] text-[#50443e] hover:text-[#412311] font-medium text-xs tracking-wider uppercase transition-colors"
              >
                Consultar dudas con un ebanista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
