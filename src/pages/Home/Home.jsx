import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../components/Navbar';
import Cardapio from '../../components/Cardapio';
import Eventos from '../../components/Eventos';
import Delivery from '../../components/Delivery';
import Localizacao from '../../components/Localizacao';
import Footer from '../../components/Footer';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bgPattern = { backgroundImage: `url('/img/malhafundobranco.png')`, backgroundRepeat: 'repeat', backgroundSize: 'auto' };
  const titleClass = "text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-serif font-normal leading-tight lg:leading-[1.2] text-[#2C1810]";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={bgPattern}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20"></div>
      </div>

      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section id="inicio" className="max-w-[1350px] mx-auto px-5 py-12 md:py-20">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 items-start lg:items-center">
          <div className="space-y-9 text-center lg:text-left lg:pt-2 animate-fade-in">
            <h1 className={titleClass}>
              No Dom, criamos uma experiência acolhedora com o carinho de uma{" "}
              <span className="bg-gradient-to-r from-[#3D2817] to-[#5A3D28] text-white px-4 py-2 inline-block font-serif rounded-lg shadow-lg transform hover:scale-105 transition-transform">comida caseira!</span>
            </h1>
            <p className="text-base md:text-lg text-[#6B5537] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sabores autênticos que aquecem o coração e alimentam a alma. Venha sentir o aconchego do Dom!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="https://wa.me/5548991143635" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white px-7 py-4 rounded-full text-sm font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 group-hover:scale-110 transition-transform" />Pedir WhatsApp
              </a>
              <a href="#cardapio" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3D2817] to-[#5A3D28] text-white px-7 py-4 rounded-full text-sm font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <FontAwesomeIcon icon={faUtensils} className="w-4 h-4 group-hover:scale-110 transition-transform" />Ver Cardápio
              </a>
            </div>
          </div>
          <div className="relative lg:pl-28 animate-slide-in-right">
            {/* Elemento decorativo de fundo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8B6F47]/10 to-[#3D2817]/10 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2817]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src="/img/body.png" alt="Comida caseira deliciosa - Dom Floripa" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 lg:mt-16">
          <a href="#cardapio" className="text-[#2C1810] hover:text-[#8B6F47] transition-colors transform hover:scale-110 duration-300">
            <FontAwesomeIcon icon={faChevronDown} className="w-8 h-8 animate-bounce" />
          </a>
        </div>
      </section>

      <Cardapio />
      <Eventos />
      <Delivery />
      <Localizacao />
      <Footer />

      <a href="https://wa.me/5548991143635" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all z-50 animate-pulse-slow" aria-label="Contato WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
      </a>
    </div>
  );
};

export default Home;
