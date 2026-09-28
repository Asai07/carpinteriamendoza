interface SobreElTallerSectionProps {
  onLearnMoreAboutUs: () => void;
}

export default function SobreElTallerSection({ onLearnMoreAboutUs }: SobreElTallerSectionProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-[#f0e6d2] text-[#3a2618]" id="sobre-el-taller">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Columna Izquierda: Imagen y Tarjeta de Confianza */}
          <div className="relative">
            {/* Imagen Principal Modernizada */}
            <div className="relative rounded-[2rem] overflow-hidden bg-[#fcf9f3] border border-[#d5c3bb] shadow-xl group">
              <img
                src="/cocina2.jpg"
                alt="Cocina terminada"
                className="w-full h-[340px] sm:h-[460px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#3a2618]/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Tarjeta Flotante con mensaje honesto */}
            <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-4 md:-right-8 w-[240px] sm:w-[280px] p-4 sm:p-6 rounded-2xl bg-[#2a4536] border border-[#3b5948] shadow-2xl hidden sm:block">
              <div className="w-10 h-10 rounded-full bg-[#1e3328] flex items-center justify-center mb-4 text-[#a8c7b4]">
                <span className="material-symbols-outlined text-xl">handshake</span>
              </div>
              <p className="font-serif text-lg text-[#fcf9f3] font-bold leading-tight mb-2">
                "Hacemos los muebles como si fueran para nuestra propia casa."
              </p>
              <p className="text-[10px] text-[#a8c7b4] uppercase font-bold tracking-[0.2em] mt-3">
                Carpintería Mendoza
              </p>
            </div>
          </div>

          {/* Columna Derecha: Textos Cercanos al Cliente */}
          <div>
            <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#bd5338] block mb-4">
              Tradición y Trabajo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3a2618] font-bold mb-6 leading-[1.1]">
              Manos expertas,<br />muebles hechos para durar.
            </h2>
            <p className="text-base text-[#5c4a3d] font-medium leading-relaxed mb-6">
              Con más de 10 años de experiencia en Monterrey, somos un taller donde el trabajo habla por sí solo. No damos rodeos: nos dedicamos a fabricar espacios bien hechos, usando materiales que aguantan el ritmo de tu hogar y entregando resultados que superan tus expectativas.
            </p>
            <p className="text-base text-[#5c4a3d] font-medium leading-relaxed mb-10">
              Sabemos que remodelar tu casa o encargar una cocina es una inversión importante. Por eso, desde el primer boceto hasta la instalación final, cuidamos cada detalle para que todo quede exactamente como te lo imaginaste.
            </p>

            {/* Los 3 Pilares del Taller (Aterrizados) */}
            <div className="space-y-6 pt-8 border-t border-[#d5c3bb]">

              <div className="flex items-start gap-4 group">
                <span className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#d5c3bb] text-[#2a4536] flex items-center justify-center shrink-0 group-hover:bg-[#bd5338] group-hover:border-[#bd5338] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </span>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#3a2618] mb-1">
                    Materiales de Primera Calidad
                  </h4>
                  <p className="text-sm text-[#5c4a3d] font-medium leading-relaxed">
                    Usamos maderas sólidas, enchapados resistentes y tableros de alto tráfico que soportan el uso diario y el clima de la ciudad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <span className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#d5c3bb] text-[#2a4536] flex items-center justify-center shrink-0 group-hover:bg-[#bd5338] group-hover:border-[#bd5338] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-xl">carpenter</span>
                </span>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#3a2618] mb-1">
                    Armado a Conciencia
                  </h4>
                  <p className="text-sm text-[#5c4a3d] font-medium leading-relaxed">
                    Nuestras puertas no se cuelgan y nuestros clósets no rechinan. Aplicamos técnicas de carpintería sólidas y usamos herrajes duraderos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <span className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#d5c3bb] text-[#2a4536] flex items-center justify-center shrink-0 group-hover:bg-[#bd5338] group-hover:border-[#bd5338] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-xl">forum</span>
                </span>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#3a2618] mb-1">
                    Trato Directo y sin Intermediarios
                  </h4>
                  <p className="text-sm text-[#5c4a3d] font-medium leading-relaxed">
                    Hablas directamente con quienes van a fabricar tu proyecto. Te escuchamos, te asesoramos y ajustamos el diseño a tu presupuesto.
                  </p>
                </div>
              </div>

            </div>

            {/* Botón de Acción Modernizado */}
            <div className="mt-12">
              <button
                onClick={onLearnMoreAboutUs}
                className="inline-flex items-center gap-4 group/btn cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-[#d5c3bb] flex items-center justify-center text-[#3a2618] group-hover:bg-[#bd5338] group-hover:border-[#bd5338] group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[20px] transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span>
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#3a2618] group-hover:text-[#bd5338] transition-colors duration-300">
                  Platica con nosotros sobre tu idea
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}