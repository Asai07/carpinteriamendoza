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
    <div className="bg-[#111111] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[#e3000f] mb-3">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:underline text-[#aaaaaa]"
            >
              Inicio
            </button>
            <span>/</span>
            <span className="font-semibold uppercase tracking-wider">Blog & Cuaderno de Virutas</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#e3000f] font-semibold block mb-2">
            Cuaderno de Banco
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#ffffff] leading-tight max-w-3xl">
            Reflexiones sobre el grano, la física del secado y el oficio de la garlopa.
          </h1>
        </div>

        {/* Selected Article Full View */}
        {selectedPost ? (
          <div className="bg-[#151515] p-8 lg:p-12 rounded-xl border border-[#444444] shadow-sm mb-16 max-w-4xl mx-auto animate-fadeIn">
            <button
              onClick={() => setSelectedPostId(null)}
              className="inline-flex items-center gap-1 text-xs text-[#e3000f] hover:text-[#ffffff] font-semibold uppercase tracking-wider mb-6 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>Volver a todos los artículos</span>
            </button>

            <div className="flex items-center gap-3 text-xs text-[#e3000f] mb-3">
              <span className="font-semibold">{selectedPost.category}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#ffffff] mb-2 leading-tight">
              {selectedPost.title}
            </h2>
            <p className="text-base text-[#e3000f] font-medium mb-8">
              {selectedPost.subtitle}
            </p>

            <div className="prose prose-stone max-w-none text-sm text-[#aaaaaa] font-light leading-relaxed space-y-4 border-t border-[#444444] pt-6">
              <p>
                {selectedPost.excerpt}
              </p>
              <p>
                Cuando un árbol es talado, sus células retienen una cantidad masiva de agua libre y agua de saturación. Si un ebanista se apresura a trabajar esa madera antes de que alcance el equilibrio con la humedad ambiental relativa (habitualmente entre el 45% y el 55%), las fuerzas higrométricas ejercerán una torsión implacable.
              </p>
              <blockquote className="p-4 bg-[#1c1c1c] rounded-lg border-l-4 border-[#e3000f] italic text-[#ffffff] my-6 font-serif">
                “La madera viva nunca muere; simplemente baila con la humedad de la habitación. Si conoces el paso del baile, la mesa no crujirá jamás.”
              </blockquote>
              <p>
                En nuestro taller calibramos semanalmente cada pila de tablones mediante higrómetros de aguja de precisión suiza. No permitimos que ninguna tabla de roble o nogal pase al banco de trabajo hasta marcar un rango estable entre el 8% y el 10%. Esa paciencia de meses es la que hace posible garantizar nuestros ensambles durante décadas.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#444444] flex items-center justify-between">
              <span className="text-xs text-[#aaaaaa]">Escrito por el Maestro Ebanista en Cassà de la Selva</span>
              <button
                onClick={() => setSelectedPostId(null)}
                className="px-4 py-2 rounded bg-[#1c1c1c] hover:bg-[#1a1a1a] text-xs font-semibold text-[#ffffff] transition-colors"
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
                className="bg-[#151515] p-6 sm:p-8 rounded-xl border border-[#444444] hover:border-[#333333] hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#e3000f] font-semibold uppercase tracking-wider mb-3">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#ffffff] group-hover:text-[#e3000f] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#e3000f] font-medium mb-4">
                    {post.subtitle}
                  </p>

                  <p className="text-xs text-[#aaaaaa] font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#444444] flex items-center justify-between text-xs text-[#ffffff] font-semibold group-hover:text-[#e3000f]">
                  <span>Leer ensayo completo</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Dossier Banner */}
        <div className="p-5 sm:p-8 rounded-xl bg-[#1c1c1c] border border-[#444444] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-[#e3000f] text-[#ffffff] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </span>
            <div>
              <h4 className="font-serif text-xl text-[#ffffff]">
                ¿Quieres profundizar en el oficio tradicional?
              </h4>
              <p className="text-xs sm:text-sm text-[#aaaaaa] font-light mt-0.5">
                Nuestro dossier incluye capítulos técnicos con esquemas de corte en cuartos, secado solar y recetas de acabados.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenDossier}
            className="px-6 py-3 rounded-lg bg-[#111111] hover:bg-[#222222] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            Descargar Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
