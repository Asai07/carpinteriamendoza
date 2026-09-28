interface HeroSectionProps {
  onLearnMoreClick: () => void;
  onExploreClick: () => void;
}

export default function HeroSection({ onLearnMoreClick, onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative bg-[#151515] overflow-hidden border-b border-[#444444]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Text & Secondary Imagery */}
        <div className="lg:col-span-6 flex flex-col justify-center p-6 sm:p-10 lg:pl-16 xl:pl-32 lg:pr-16 lg:py-10 items-end">
          <div className="max-w-xl w-full">
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#e3000f] block mb-4">
              Taller de Carpintería
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-[#ffffff] tracking-tight leading-[1.05] mb-6">
              Carpintería<br />Mendoza
            </h1>
            <p className="text-[#cccccc] text-base sm:text-lg max-w-lg mb-8 leading-relaxed font-medium">
              Muebles para todo tipo de espacio, hechos a medida y diseñados para garantizar su durabilidad. Somos especialistas en cocinas, clósets, puertas y proyectos integrales.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#e3000f] hover:bg-[#b3000c] active:scale-95 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
              >
                Saber Más
              </button>
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#444444] hover:border-[#333333] text-[#ffffff] font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Ver galería
              </button>
            </div>

            {/* 2 Miniature Workshop Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md pt-2">
            <div className="rounded-lg overflow-hidden bg-[#1c1c1c] border border-[#444444] shadow-sm aspect-[4/3] group relative">
              <img
                src="/cocina.png"
                alt="Cocina"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="rounded-lg overflow-hidden bg-[#eaddcf] border border-[#444444] shadow-sm aspect-[4/3] group relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIqZ6f0dqLK60astwWHXc8DlC-6unRw2Oc_yfsfENJfQ9zSjdwIeQ4jcHl7W3F_6nLKFC0k2EI11IAvtDhiMz4IeFZ_2xAOu4d6v3qx3wyOy4GF0bbFzCUXhyaXiFt46wmjuyDpcKG5h4Cs01krCwXCaqKYEqUg1WJnbp9j7crR9rlse6JXVX7uHvKFHlIxF1wGVFsH635h4VapFdo9pdmHavJz9r-PaOFHarqiO-q3J3DQ6Rq06ZS"
                alt="Artesano trabajando madera con cepillo manual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          </div>
        </div>

        {/* Right Column: Hero Master Image */}
        <div className="lg:col-span-6 relative h-[280px] sm:h-[400px] lg:h-auto min-h-[280px]">
          <img
            src="/veta2.png"
            alt="Veta de madera"
            className="w-full h-full object-cover"
          />

          {/* Floating Dark Green Card in bottom left */}
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:left-12 md:bottom-12 bg-[#111111] text-[#f5f5f5] p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl max-w-[200px] sm:max-w-xs md:max-w-sm border border-[#e3000f]">
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5] mb-2">
              Arte en cada veta
            </h3>
            <p className="text-xs sm:text-sm text-[#e3000f] font-semibold tracking-widest uppercase">
              Pasión & Oficio
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
