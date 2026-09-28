import { useState } from 'react';
import { BLOG_POSTS } from '../../data/workshopData';
import { ScreenType } from '../Header';

interface BlogScreenProps {
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onOpenDossier: () => void;
}

export default function BlogScreen({ onNavigate, onOpenDossier }: BlogScreenProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = BLOG_POSTS.find(p => p.id === selectedPostId);

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
            <span className="font-semibold uppercase tracking-wider">Blog & Cuaderno de Virutas</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#895110] font-semibold block mb-2">
            Cuaderno de Banco
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#412311] leading-tight max-w-3xl">
            Reflexiones sobre el grano, la física del secado y el oficio de la garlopa.
          </h1>
        </div>

        {/* Selected Article Full View */}
        {selectedPost ? (
          <div className="bg-white p-8 lg:p-12 rounded-xl border border-[#d5c3bb] shadow-sm mb-16 max-w-4xl mx-auto animate-fadeIn">
            <button
              onClick={() => setSelectedPostId(null)}
              className="inline-flex items-center gap-1 text-xs text-[#895110] hover:text-[#412311] font-semibold uppercase tracking-wider mb-6 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>Volver a todos los artículos</span>
            </button>

            <div className="flex items-center gap-3 text-xs text-[#895110] mb-3">
              <span className="font-semibold">{selectedPost.category}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#412311] mb-2 leading-tight">
              {selectedPost.title}
            </h2>
            <p className="text-base text-[#895110] font-medium mb-8">
              {selectedPost.subtitle}
            </p>

            <div className="prose prose-stone max-w-none text-sm text-[#50443e] font-light leading-relaxed space-y-4 border-t border-[#d5c3bb] pt-6">
              <p>
                {selectedPost.excerpt}
              </p>
              <p>
                Cuando un árbol es talado, sus células retienen una cantidad masiva de agua libre y agua de saturación. Si un ebanista se apresura a trabajar esa madera antes de que alcance el equilibrio con la humedad ambiental relativa (habitualmente entre el 45% y el 55%), las fuerzas higrométricas ejercerán una torsión implacable.
              </p>
              <blockquote className="p-4 bg-[#f0eee8] rounded-lg border-l-4 border-[#895110] italic text-[#412311] my-6 font-serif">
                “La madera viva nunca muere; simplemente baila con la humedad de la habitación. Si conoces el paso del baile, la mesa no crujirá jamás.”
              </blockquote>
              <p>
                En nuestro taller calibramos semanalmente cada pila de tablones mediante higrómetros de aguja de precisión suiza. No permitimos que ninguna tabla de roble o nogal pase al banco de trabajo hasta marcar un rango estable entre el 8% y el 10%. Esa paciencia de meses es la que hace posible garantizar nuestros ensambles durante décadas.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d5c3bb] flex items-center justify-between">
              <span className="text-xs text-[#50443e]">Escrito por el Maestro Ebanista en Cassà de la Selva</span>
              <button
                onClick={() => setSelectedPostId(null)}
                className="px-4 py-2 rounded bg-[#f0eee8] hover:bg-[#ebe8e2] text-xs font-semibold text-[#412311] transition-colors"
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        ) : (
          /* Articles Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPostId(post.id)}
                className="bg-white p-6 sm:p-8 rounded-xl border border-[#d5c3bb] hover:border-[#412311] hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#895110] font-semibold uppercase tracking-wider mb-3">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#412311] group-hover:text-[#bd5338] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#895110] font-medium mb-4">
                    {post.subtitle}
                  </p>

                  <p className="text-xs text-[#50443e] font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d5c3bb] flex items-center justify-between text-xs text-[#412311] font-semibold group-hover:text-[#bd5338]">
                  <span>Leer ensayo completo</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Dossier Banner */}
        <div className="p-5 sm:p-8 rounded-xl bg-[#f0eee8] border border-[#d5c3bb] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-[#ffdcbf] text-[#2d1600] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </span>
            <div>
              <h4 className="font-serif text-xl text-[#412311]">
                ¿Quieres profundizar en el oficio tradicional?
              </h4>
              <p className="text-xs sm:text-sm text-[#50443e] font-light mt-0.5">
                Nuestro dossier incluye capítulos técnicos con esquemas de corte en cuartos, secado solar y recetas de acabados.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenDossier}
            className="px-6 py-3 rounded-lg bg-[#412311] hover:bg-[#5a3825] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            Descargar Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
