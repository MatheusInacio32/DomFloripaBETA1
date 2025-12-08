import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const menuItems = [
    { label: 'Início', href: 'inicio' },
    { label: 'Cardápio', href: 'cardapio' },
    { label: 'Eventos', href: 'eventos' },
    { label: 'Delivery', href: 'delivery' },
    { label: 'Localização', href: 'localizacao' }
  ];

  const socialLinks = [
    { icon: faWhatsapp, href: 'https://wa.me/5548991143635', color: 'hover:bg-[#25D366] hover:shadow-[#25D366]/50' },
    { icon: faInstagram, href: '#', color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D]' },
    { icon: faFacebook, href: '#', color: 'hover:bg-[#1877F2] hover:shadow-[#1877F2]/50' }
  ];

  const contactInfo = [
    { icon: faMapMarkerAlt, text: 'Av. Madre Benvenuta, 980\nSanta Mônica, Florianópolis - SC', href: 'https://maps.google.com/?q=Av.+Madre+Benvenuta+980+Florianopolis', multiline: true },
    { icon: faPhone, text: '(48) 99114-3635', href: 'tel:+5548991143635' },
    { icon: faEnvelope, text: 'contato@domfloripa.com.br', href: 'mailto:contato@domfloripa.com.br' }
  ];

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Gradiente de fundo multicamadas */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] via-[#3D2817] to-[#1a0f08]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,111,71,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,111,71,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)' }}></div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">
          
          {/* Logo e Redes Sociais */}
          <div className="space-y-6">
            <img src="/img/logobranca.png" alt="Dom Floripa" className="h-20 sm:h-24 hover:scale-105 transition-transform duration-300 drop-shadow-2xl" />
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-sm">
              Comida caseira com carinho e sabor inigualável no coração de Florianópolis.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                  className={`group w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                  <FontAwesomeIcon icon={social.icon} className="text-white text-lg group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl text-white relative inline-block pb-3">
              Links Rápidos
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-transparent"></span>
            </h3>
            <div className="flex flex-col gap-3">
              {menuItems.map(item => (
                <a key={item.label} href={`#${item.href}`} 
                  className="group text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                  <span className="w-0 h-px bg-[#8B6F47] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl text-white relative inline-block pb-3">
              Contato
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-transparent"></span>
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-white/90">
              {contactInfo.map((info, idx) => (
                <a key={idx} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex ${info.multiline ? 'items-start' : 'items-center'} gap-3 hover:text-white transition-colors group`}>
                  <FontAwesomeIcon icon={info.icon} className={`w-4 text-[#8B6F47] group-hover:scale-110 transition-transform ${info.multiline ? 'mt-1' : ''}`} />
                  <span className={info.multiline ? 'leading-relaxed whitespace-pre-line' : ''}>{info.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha divisória decorativa */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-[#8B6F47]/20 to-[#8B6F47]/10 px-4 rounded-full">
              <FontAwesomeIcon icon={faHeart} className="text-[#8B6F47] text-sm animate-pulse" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-4">
          <p className="text-sm sm:text-base text-white/70">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Dom Floripa</span>. Todos os direitos reservados.
          </p>
          <a 
            href="https://agenciastro.com.br/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#5b7bf5]/50 rounded-full px-4 py-2 transition-all duration-300 group"
          >
            <img 
              src="/astro-logo.png" 
              alt="Astro Tech Hub" 
              className="h-6 w-6 group-hover:scale-110 transition-transform" 
            />
            <span className="text-white/50 text-xs">Desenvolvido por</span>
            <span className="text-[#5b7bf5] font-semibold text-sm group-hover:text-[#7b9bf5] transition-colors">Astro Tech Hub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;