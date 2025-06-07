
import React from 'react';
import { Check, Star, Tv, Shield, Users, TrendingUp, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { text: "Acesso total ao Disney+ Premium", highlight: true },
    { text: "Marvel, Pixar, Star Wars e National Geographic", highlight: false },
    { text: "Qualidade 4K Ultra HD", highlight: false },
    { text: "Multi-telas liberadas", highlight: true },
    { text: "Zero anúncios", highlight: false },
    { text: "Suporte 24h garantido", highlight: true }
  ];

  const stats = [
    { number: "+15k", text: "clientes", icon: Users },
    { number: "4.9", text: "estrelas", icon: Star },
    { number: "99%", text: "aprovação", icon: TrendingUp }
  ];

  return (
    <section className="py-8 px-4 relative overflow-hidden">
      {/* Background seguindo o padrão da página */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black z-0"></div>
      
      {/* Efeitos de blur como na página principal */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-blue-600/5 rounded-full blur-3xl animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-48 md:w-80 h-48 md:h-80 bg-purple-600/5 rounded-full blur-3xl animate-float delay-1000 opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-48 md:w-72 h-48 md:h-72 bg-indigo-600/3 rounded-full blur-3xl animate-float delay-2000 opacity-15"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-1 bg-blue-500/10 rounded-lg blur-lg opacity-60"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] px-6 py-3 rounded-lg shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                O QUE VOCÊ VAI RECEBER
              </h2>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Experiência premium completa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-4 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className={`${benefit.highlight 
                    ? 'w-8 h-8 bg-slate-800/70 border border-[#006e99]/30' 
                    : 'w-8 h-8 bg-slate-800/70 border border-[#006e99]/30'} 
                    rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Check className={`w-4 h-4 ${benefit.highlight ? 'text-blue-400' : 'text-slate-400'}`} />
                  </div>
                  <p className={`${benefit.highlight 
                    ? 'text-sm font-semibold text-white' 
                    : 'text-sm text-slate-300'}`}>
                    {benefit.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-300">
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-4 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/70 border border-[#006e99]/30 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  <div className="text-lg font-bold text-white">{stat.number}</div>
                  <p className="text-xs text-slate-400">{stat.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="relative inline-block">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] px-6 py-3 rounded-lg shadow-lg">
              <p className="text-white text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-slate-400" />
                Suporte VIP via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
