import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Delivery = () => {
  const titleClass = "text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-serif font-normal leading-tight lg:leading-[1.2] text-[#2C1810]";
  
  const deliveryOptions = [
    { icon: faWhatsapp, titulo: "WhatsApp", desc: "Faça seu pedido direto pelo WhatsApp", info: "(48) 99114-3635", color: "#25D366", href: "https://wa.me/5548991143635" },
    { icon: faTruck, titulo: "iFood", desc: "Peça pelo app do iFood", info: "Delivery Rápido", color: "#EA1D2C", href: "https://www.ifood.com.br" },
    { icon: faShoppingBag, titulo: "Retirada", desc: "Faça seu pedido e retire no local", info: "Sem taxa de entrega", color: "#8B6F47", href: null }
  ];

  return (
    <section id="delivery" className="py-16 md:py-24 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-5 relative">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#8B6F47] text-sm font-semibold uppercase tracking-widest">Delivery & Retirada</span>
          <h2 className={titleClass}>Faça Seu Pedido</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto"></div>
          <p className="text-base text-[#6B5537] max-w-2xl mx-auto">Escolha a melhor forma de receber nossos pratos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {deliveryOptions.map(({ icon, titulo, desc, info, color, href }) => {
            const content = (
              <div className="text-center space-y-5 p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#8B6F47]/10 group">
                <div className="inline-flex w-20 h-20 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-500" style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)` }}>
                  <FontAwesomeIcon icon={icon} className="text-3xl group-hover:rotate-12 transition-transform duration-500" style={{ color }} />
                </div>
                <h3 className="text-xl font-serif text-[#2C1810] group-hover:text-[#8B6F47] transition-colors">{titulo}</h3>
                <p className="text-sm text-[#6B5537]">{desc}</p>
                <p className="text-base font-semibold" style={{ color }}>{info}</p>
              </div>
            );
            return href ? (
              <a key={titulo} href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
            ) : (
              <div key={titulo}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
