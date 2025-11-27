import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const Localizacao = () => {
  const titleClass = "text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-serif font-normal leading-tight lg:leading-[1.2] text-[#2C1810]";
  const iconBgClass = "w-12 h-12 rounded-full bg-[#8B6F47]/10 flex items-center justify-center";
  
  const contatos = [
    { icon: faMapMarkerAlt, titulo: "Endereço", info: "Av. Madre Benvenuta, 980\nSanta Mônica, Florianópolis - SC" },
    { icon: faPhone, titulo: "Telefone", info: "(48) 99114-3635", link: "tel:+5548991143635" },
    { icon: faClock, titulo: "Horário de Funcionamento", info: "Seg-Sex: 11h30 - 14h30\nSexta e Sábado: 19h - 23h30\nSábado: 12h - 15h30 (Feijoada)" }
  ];

  return (
    <section id="localizacao" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-[#8B6F47]/5 to-white/60"></div>
      <div className="max-w-[1400px] mx-auto px-5 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className={titleClass}>Onde Estamos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto"></div>
          <p className="text-base text-[#6B5537] max-w-2xl mx-auto">Venha nos visitar e aproveite nosso ambiente acolhedor</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.4815445!2d-48.51847!3d-27.59812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzUzLjIiUyA0OMKwMzEnMDYuNSJX!5e0!3m2!1sen!2sbr!4v1629825698374!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização Dom Floripa"
            ></iframe>
          </div>
          <div className="space-y-6">
            {contatos.map(({ icon, titulo, info, link }) => (
              <div key={titulo} className="flex gap-5 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#8B6F47]/10 group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B6F47]/15 to-[#8B6F47]/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <FontAwesomeIcon icon={icon} className="text-[#8B6F47] text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-[#2C1810] mb-2 group-hover:text-[#8B6F47] transition-colors">{titulo}</h3>
                  {link ? (
                    <a href={link} className="text-sm text-[#8B6F47] hover:text-[#6B5537] font-medium">{info}</a>
                  ) : (
                    <p className="text-sm text-[#6B5537] whitespace-pre-line leading-relaxed">{info}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
