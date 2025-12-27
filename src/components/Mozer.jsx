import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMicrophone, faGuitar } from '@fortawesome/free-solid-svg-icons';

const Mozer = () => {
  return (
    <section id="mozer" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FDF8F3] to-white"></div>
      
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 relative">
        {/* Título da seção */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <span className="text-[#8B6F47] text-sm font-semibold uppercase tracking-widest">
            O Artista por trás do palco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-serif font-normal leading-tight text-[#2C1810]">
            Conheça o Mozer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto"></div>
        </div>

        {/* Grid: Texto à esquerda, Foto à direita */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Conteúdo de Texto - Esquerda */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Tags/Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-[#8B6F47]/10 text-[#8B6F47] px-4 py-2 rounded-full text-sm font-medium">
                <FontAwesomeIcon icon={faMicrophone} />
                Cantor
              </span>
              <span className="inline-flex items-center gap-2 bg-[#8B6F47]/10 text-[#8B6F47] px-4 py-2 rounded-full text-sm font-medium">
                <FontAwesomeIcon icon={faGuitar} />
                Instrumentista
              </span>
              <span className="inline-flex items-center gap-2 bg-[#D4A574]/20 text-[#6B5537] px-4 py-2 rounded-full text-sm font-medium">
                Empresário
              </span>
            </div>

            {/* Descrição principal */}
            <p className="text-lg text-[#6B5537] leading-relaxed text-center lg:text-left">
              <strong className="text-[#2C1810]">Sócio proprietário</strong> do{" "}
              <a 
                href="https://www.instagram.com/domfloriparestaurante" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8B6F47] hover:text-[#6B5537] transition-colors font-semibold"
              >
                @domfloriparestaurante
              </a>
            </p>

            {/* Citação em destaque */}
            <div className="relative bg-gradient-to-br from-[#3D2817] via-[#4E342E] to-[#2C1810] p-6 md:p-8 rounded-2xl border border-[#8B6F47]/30 shadow-xl">
              <div className="absolute -top-3 left-6 text-5xl text-[#D4A574]/50 font-serif">"</div>
              <blockquote className="text-base md:text-lg text-white/90 leading-relaxed italic pl-4">
                <span className="text-[#D4A574] font-semibold not-italic">"Sem a Música a vida seria um erro"</span> 
                <span className="text-sm text-white/60"> (Nietzsche)</span>
                <br /><br />
                Aqui no <strong className="not-italic text-white">"Dom Floripa Food & Arts"</strong> a música ao vivo 
                terá um lugar muito especial como uma das mais belas formas de expressão de arte. 
                O palco está ficando lindo... e, enquanto isso,{" "}
                <a 
                  href="https://www.instagram.com/mozerdeoliveira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D4A574] hover:text-[#E5B585] transition-colors font-semibold not-italic"
                >
                  @mozerdeoliveira
                </a>{" "}
                com todo seu talento e carisma, prepara repertório especial para que as noites aqui sejam inesquecíveis!
              </blockquote>
            </div>

            {/* Botão Instagram */}
            <div className="flex justify-center lg:justify-start pt-2">
              <a 
                href="https://www.instagram.com/mozerdeoliveira" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                Seguir @mozerdeoliveira
              </a>
            </div>
          </div>

          {/* Imagem - Direita */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Efeito decorativo atrás da imagem */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8B6F47]/20 to-[#D4A574]/10 rounded-3xl blur-2xl"></div>
            
            {/* Container da imagem */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src="/img/Mozer.png" 
                alt="Mozer de Oliveira - Cantor e Instrumentista" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Nome no hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-serif text-xl md:text-2xl text-center drop-shadow-lg">
                  Mozer de Oliveira
                </p>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#8B6F47]/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#D4A574]/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mozer;
