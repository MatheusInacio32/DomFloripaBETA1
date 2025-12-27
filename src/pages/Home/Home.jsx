import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../components/Navbar';
import Cardapio from '../../components/Cardapio';
import Eventos from '../../components/Eventos';
import Mozer from '../../components/Mozer';
import Delivery from '../../components/Delivery';
import Localizacao from '../../components/Localizacao';
import Footer from '../../components/Footer';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bgPattern = { backgroundImage: `url('/img/malhafundobranco.png')`, backgroundRepeat: 'repeat', backgroundSize: 'auto' };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={bgPattern}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20"></div>
      </div>

      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section - Estilo Rancho da Canoa */}
      <section id="inicio" className="pt-24 sm:pt-28 md:pt-32 lg:pt-0">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* Imagem - Aparece primeiro no mobile */}
          <div className="order-1 lg:order-2 relative">
            {/* Borda decorativa marrom madeira */}
            <div className="absolute top-0 right-0 bottom-0 w-4 bg-[#5D4037] hidden lg:block shadow-inner"></div>
            <div className="absolute top-0 left-0 right-0 h-4 bg-[#5D4037] lg:hidden shadow-inner"></div>
            <img 
              src="/img/Fachada.png" 
              alt="Fachada Dom Floripa" 
              className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
            />
          </div>
          
          {/* Conteúdo */}
          <div className="order-2 lg:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-14 lg:py-20">
            {/* Título simétrico */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-serif font-normal text-[#2C1810] text-center lg:text-left mb-8">
              <span className="block leading-tight">No Dom, criamos uma</span>
              <span className="block leading-tight">experiência acolhedora</span>
              <span className="block leading-tight">com o carinho de uma</span>
              <span className="inline-block bg-[#5D4037] text-white px-4 py-2 mt-3 font-serif shadow-lg rounded">
                comida caseira!
              </span>
            </h1>
            
            {/* Botão CTA */}
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#cardapio" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Acessar nosso cardápio
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Barra decorativa marrom madeira */}
      <div className="h-3 bg-[#5D4037] w-full shadow-md"></div>

      {/* CTA Section - Fundo Marrom */}
      <section className="bg-gradient-to-br from-[#3D2817] via-[#4E342E] to-[#2C1810] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(/img/malhafundobranco.png)', backgroundRepeat: 'repeat'}}></div>
        <div className="max-w-[1000px] mx-auto px-6 text-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
            Sabor que acolhe, <span className="text-[#D4A574]">tempero que emociona</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Cada prato é preparado com ingredientes frescos e o carinho de receitas tradicionais que passam de geração em geração.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5548991143635" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              Fazer Reserva
            </a>
            <a href="#cardapio" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300">
              Ver Cardápio
            </a>
          </div>
        </div>
      </section>

      {/* Seção História */}
      <section id="historia" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FDF8F3] to-white"></div>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#2C1810] mb-4">
              Nossa História
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#6D4C41] to-transparent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[#6B5537] leading-relaxed">
                O <strong className="text-[#2C1810]">Dom Floripa</strong> nasceu da paixão por reunir pessoas ao redor de uma mesa farta, 
                onde cada prato conta uma história de tradição e carinho. Desde o início, nossa missão é proporcionar 
                não apenas refeições, mas experiências que aquecem o coração.
              </p>
              <p className="text-lg text-[#6B5537] leading-relaxed">
                Nossa conexão com a <strong className="text-[#2C1810]">arte</strong> está presente em cada detalhe: 
                na apresentação dos pratos, na decoração acolhedora do ambiente e na curadoria musical que embala 
                nossos clientes. Acreditamos que a gastronomia é uma forma de expressão artística, onde ingredientes 
                frescos se transformam em obras que encantam todos os sentidos.
              </p>
              <p className="text-lg text-[#6B5537] leading-relaxed">
                Localizado no coração de Florianópolis, o Dom é um refúgio para quem busca o sabor autêntico 
                da <strong className="text-[#2C1810]">comida caseira</strong>, preparada com ingredientes selecionados 
                e receitas que passam de geração em geração.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E89923]/20 to-[#8B6F47]/10 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/img/body.png" 
                  alt="Ambiente Dom Floripa" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA com Frase - Fundo Marrom */}
      <section className="bg-gradient-to-r from-[#4E342E] via-[#5D4037] to-[#4E342E] py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)'}}></div>
        <div className="max-w-[900px] mx-auto px-6 text-center relative">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-white italic leading-relaxed">
            "A melhor comida é aquela feita com amor, servida com carinho e compartilhada com quem amamos."
          </blockquote>
          <div className="w-16 h-1 bg-[#D4A574] mx-auto mt-6"></div>
        </div>
      </section>

      <Cardapio />

      <Eventos />

      <Mozer />

      <Delivery />
      
      {/* CTA Final com Fundo Marrom */}
      <section className="bg-gradient-to-br from-[#2C1810] via-[#3D2817] to-[#4E342E] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(/img/malhafundobranco.png)', backgroundRepeat: 'repeat'}}></div>
        <div className="max-w-[1000px] mx-auto px-6 text-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
            Venha nos visitar!
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8">
            Estamos esperando você para uma experiência gastronômica inesquecível
          </p>
          <a href="#localizacao" 
            className="inline-flex items-center justify-center gap-2 bg-[#D4A574] hover:bg-[#C49464] text-[#2C1810] px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Ver Localização
          </a>
        </div>
      </section>

      <Localizacao />
      <Footer />

      <a href="https://wa.me/5548991143635" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all z-50 animate-pulse-slow" aria-label="Contato WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
      </a>
    </div>
  );
};

export default Home;
