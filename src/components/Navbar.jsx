import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const bgPattern = { backgroundImage: `url('/img/malhafundobranco.png')`, backgroundRepeat: 'repeat', backgroundSize: 'auto' };
  const menuItems = [
    { label: 'Início', href: 'inicio' },
    { label: 'Cardápio', href: 'cardapio' },
    { label: 'Eventos', href: 'eventos' },
    { label: 'Delivery', href: 'delivery' },
    { label: 'Localização', href: 'localizacao' }
  ];

  return (
    <>
      <header className="fixed lg:sticky top-0 left-0 right-0 z-50 shadow-lg border-b border-[#8B6F47]/10 bg-[#FAF7F2]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4" style={{ maxWidth: '1350px' }}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#inicio" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img 
                src="/img/logo.png" 
                alt="Dom Floripa" 
                className="h-14 sm:h-16 md:h-20 lg:h-20 xl:h-20 w-auto object-contain" 
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {menuItems.map(item => (
                <a 
                  key={item.label} 
                  href={`#${item.href}`} 
                  className="group relative text-[#2C1810] font-semibold text-xl xl:text-2xl 2xl:text-3xl hover:text-[#8B6F47] transition-all duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#6B5537] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#8B6F47]/10 to-[#8B6F47]/5 text-[#2C1810] hover:from-[#8B6F47]/20 hover:to-[#8B6F47]/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Menu"
            >
              <FontAwesomeIcon 
                icon={mobileMenuOpen ? faTimes : faBars} 
                className="text-xl sm:text-2xl transition-transform duration-300" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Mobile Menu Panel */}
          <nav 
            className="lg:hidden fixed top-[85px] sm:top-[95px] md:top-[105px] right-0 w-full max-w-sm h-auto z-50 bg-white/95 backdrop-blur-xl shadow-2xl rounded-bl-3xl border-l border-b border-[#8B6F47]/20 animate-slide-in-right"
            style={bgPattern}
          >
            <div className="p-8 space-y-2">
              {menuItems.map((item, index) => (
                <a 
                  key={item.label} 
                  href={`#${item.href}`} 
                  className="group flex items-center gap-4 text-[#2C1810] font-semibold text-xl sm:text-2xl hover:text-[#8B6F47] transition-all duration-300 hover:translate-x-2 py-4 px-4 rounded-xl hover:bg-[#8B6F47]/5"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="border-t border-[#8B6F47]/10 p-6 bg-gradient-to-br from-[#8B6F47]/5 to-transparent">
              <a 
                href="https://wa.me/5548991143635" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Fazer Pedido
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
