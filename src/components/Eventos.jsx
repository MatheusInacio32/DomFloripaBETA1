import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBeer, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Eventos = () => {
  const titleClass = "text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-serif font-normal leading-tight lg:leading-[1.2] text-[#2C1810]";
  
  const eventos = [
    { icon: faMusic, titulo: "Sexta e Sábado à Noite", desc: "Das 19h às 23h30 com música ao vivo, chopp gelado e petiscos deliciosos!" },
    { icon: faBeer, titulo: "Feijoada aos Sábados", desc: "Das 12h às 15h30 com show ao vivo e caipirinha em dobro. Imperdível!" },
    { icon: faCalendarAlt, titulo: "Ambiente Acolhedor", desc: "Espaço perfeito para reunir amigos e família em um clima descontraído." }
  ];

  return (
    <section id="eventos" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-[#8B6F47]/5 to-white/60"></div>
      <div className="max-w-[1400px] mx-auto px-5 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className={titleClass}>Eventos e Música</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto"></div>
          <p className="text-base text-[#6B5537] max-w-2xl mx-auto">Momentos especiais com música ao vivo e muito sabor</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {eventos.map(({ icon, titulo, desc }) => (
            <div key={titulo} className="text-center space-y-5 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#8B6F47]/10 group">
              <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-[#8B6F47]/15 to-[#8B6F47]/5 items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={icon} className="text-[#8B6F47] text-3xl group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-serif text-[#2C1810] group-hover:text-[#8B6F47] transition-colors">{titulo}</h3>
              <p className="text-sm text-[#6B5537] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventos;
