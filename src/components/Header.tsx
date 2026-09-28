import { useState, useEffect } from 'react';

export type ScreenType = 'inicio' | 'sobre-nosotros' | 'galeria' | 'precios' | 'servicios' | 'tienda' | 'blog' | 'contacto';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType, anchorId?: string) => void;
  onOpenQuoteModal: () => void;
}

export default function Header({ currentScreen, onNavigate, onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (screen: ScreenType, anchorId?: string) => {
    onNavigate(screen, anchorId);
    setMobileMenuOpen(false);
  };

  const navItemClass = (screen: ScreenType) => {
    const isActive = currentScreen === screen;
    return `relative text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 py-2 group ${
      isActive ? 'text-[#e3000f]' : 'text-[#cccccc] hover:text-[#ffffff]'
    }`;
  };

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-[#151515]/90 backdrop-blur-md border-b border-[#333333] py-3 shadow-sm' 
          : 'bg-[#111111] py-5'
      }`}
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex flex-col items-start group focus:outline-none"
        >
          <span className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tighter text-[#ffffff] leading-none mb-1 group-hover:opacity-70 transition-opacity duration-500">
            Carpintería Mendoza
          </span>
          <span className="text-[8px] tracking-[0.35em] uppercase text-[#888888] font-semibold">
            Taller de Carpintería
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
          <button onClick={() => handleNavClick('inicio')} className={navItemClass('inicio')}>
            Inicio
            <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#e3000f] transform origin-left transition-transform duration-500 ease-out ${currentScreen === 'inicio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </button>
          
          <button onClick={() => handleNavClick('inicio', 'galeria')} className="relative text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 py-2 group text-[#cccccc] hover:text-[#ffffff]">
            Galería
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#e3000f] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </button>

          <button onClick={() => handleNavClick('servicios')} className={navItemClass('servicios')}>
            Servicios
            <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#e3000f] transform origin-left transition-transform duration-500 ease-out ${currentScreen === 'servicios' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </button>

          <button onClick={() => handleNavClick('inicio', 'maderas')} className="relative text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 py-2 group text-[#cccccc] hover:text-[#ffffff]">
            Materiales
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#e3000f] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </button>
        </nav>

        {/* Primary Action Button & Mobile Toggle */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleNavClick('inicio', 'contacto')}
            className="hidden md:inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#333333] bg-transparent text-[#ffffff] hover:bg-[#0a0a0a] hover:text-[#f5f5f5] hover:border-[#333333] font-bold text-[9px] tracking-[0.25em] uppercase transition-all duration-500"
          >
            Contacto
          </button>

          {/* Custom Minimalist Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#ffffff] focus:outline-none z-50 relative"
            aria-label="Menú"
          >
            <div className="flex flex-col justify-center items-end gap-[5px] w-6 h-6">
              <span className={`h-[1px] bg-current transition-all duration-500 ease-out ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-500 ease-out ${mobileMenuOpen ? 'opacity-0 w-0' : 'w-4'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-500 ease-out ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Awwwards Style */}
      <div 
        className={`fixed inset-0 bg-[#151515] z-40 transition-all duration-700 ease-in-out flex flex-col justify-center px-6 sm:px-10 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className={`flex flex-col space-y-6 transform transition-transform duration-700 delay-100 ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-12'}`}>
          <button
            onClick={() => handleNavClick('inicio')}
            className="text-left font-serif text-4xl sm:text-5xl text-[#ffffff] hover:text-[#e3000f] transition-colors duration-500"
          >
            Inicio
          </button>

          <button
            onClick={() => handleNavClick('inicio', 'galeria')}
            className="text-left font-serif text-4xl sm:text-5xl text-[#ffffff] hover:text-[#e3000f] transition-colors duration-500"
          >
            Galería
          </button>
          <button
            onClick={() => handleNavClick('servicios')}
            className="text-left font-serif text-4xl sm:text-5xl text-[#ffffff] hover:text-[#e3000f] transition-colors duration-500"
          >
            Servicios
          </button>
          <button
            onClick={() => handleNavClick('inicio', 'maderas')}
            className="text-left font-serif text-4xl sm:text-5xl text-[#ffffff] hover:text-[#e3000f] transition-colors duration-500"
          >
            Materiales
          </button>
          
          <div className="pt-8 mt-8 border-t border-[#333333]">
            <button
              onClick={() => handleNavClick('inicio', 'contacto')}
              className="inline-flex px-8 py-4 rounded-full bg-[#0a0a0a] text-[#f5f5f5] font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
