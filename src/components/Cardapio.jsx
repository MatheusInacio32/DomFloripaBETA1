import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBurger, faBowlFood, faFire, faBeer } from '@fortawesome/free-solid-svg-icons';

const Cardapio = () => {
  const titleClass = "text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-serif font-normal leading-tight lg:leading-[1.2] text-[#2C1810]";
  const cardClass = "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#8B6F47]/5";
  const iconBgClass = "w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47]/10 to-[#8B6F47]/20 flex items-center justify-center";
  
  const pratos = [
    { icon: faBurger, titulo: "Hambúrguer na Brasa", desc: "Feito na brasa, com receita exclusiva e sabor inigualável. Suculento e artesanal!", badge: "Especialidade", badgeIcon: faFire, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop" },
    { icon: faBowlFood, titulo: "Feijoada Completa", desc: "Todo sábado das 12h às 15h30! Feijoada deliciosa com show ao vivo e caipirinha em dobro.", badge: "Sábados", badgeIcon: faBeer, img: "https://images.unsplash.com/photo-1623855244462-a3d8e8c10717?w=600&h=400&fit=crop" },
    { icon: faUtensils, titulo: "Comida Caseira", desc: "Pratos feitos com o tempero especial que só comida caseira tem. Aquele sabor de casa!", badge: "Tradicional", badgeIcon: faUtensils, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop" }
  ];

  return (
    <section id="cardapio" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-5 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className={titleClass}>Nossos Pratos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto"></div>
          <p className="text-base text-[#6B5537] max-w-2xl mx-auto">Sabores únicos preparados com carinho e ingredientes selecionados</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pratos.map(({ icon, titulo, desc, badge, badgeIcon, img }) => (
            <div key={titulo} className={cardClass}>
              <div className="aspect-[4/3] overflow-hidden relative group">
                <img src={img} alt={titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className={iconBgClass}>
                    <FontAwesomeIcon icon={icon} className="text-[#8B6F47] text-lg" />
                  </div>
                  <span className="flex items-center gap-1.5 bg-gradient-to-r from-[#8B6F47]/15 to-[#8B6F47]/10 text-[#8B6F47] px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                    <FontAwesomeIcon icon={badgeIcon} className="w-3 h-3" />{badge}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-[#2C1810] group-hover:text-[#8B6F47] transition-colors">{titulo}</h3>
                <p className="text-sm text-[#6B5537] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardapio;
