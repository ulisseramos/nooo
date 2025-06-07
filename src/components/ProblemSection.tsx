
import React from 'react';
import { MonitorX, PlayCircle, ImageOff, VolumeX, UserX, CheckCircle, Wifi, Zap, Shield, UserCheck, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const problemas = [{
    icon: MonitorX,
    text: "Links somem",
    color: "from-gray-500/10 to-gray-600/20"
  }, {
    icon: PlayCircle,
    text: "Vídeos travam",
    color: "from-gray-500/10 to-gray-600/20"
  }, {
    icon: ImageOff,
    text: "Qualidade ruim",
    color: "from-gray-500/10 to-gray-600/20"
  }, {
    icon: VolumeX,
    text: "Propagandas",
    color: "from-gray-500/10 to-gray-600/20"
  }];

  const solucoes = [{
    icon: CheckCircle,
    text: "Premium",
    color: "from-gray-500/10 to-gray-600/20"
  }, {
    icon: Wifi,
    text: "Acesso total",
    color: "from-gray-500/10 to-gray-600/20"
  }, {
    icon: Zap,
    text: "Suporte ágil",
    color: "from-gray-500/10 to-gray-600/20"
  }, {
    icon: Shield,
    text: "Seguro",
    color: "from-gray-500/10 to-gray-600/20"
  }];

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
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Problemas */}
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-1 bg-blue-500/10 rounded-lg blur-lg opacity-60"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] px-6 py-3 rounded-lg shadow-xl">
              <h2 className="text-lg md:text-xl font-black text-white flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blue-400" />
                <span>CANSADO DE SITES PIRATAS?</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {problemas.map((problema, index) => {
            const IconComponent = problema.icon;
            return (
              <div 
                key={index} 
                className="group relative transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-3 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-slate-800/70 border border-[#006e99]/30 shadow-lg">
                      <IconComponent className="w-4 h-4 text-slate-300" />
                    </div>
                    <p className="text-white font-semibold text-sm leading-tight flex-1 min-w-0 break-words">{problema.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soluções */}
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-1 bg-blue-500/10 rounded-lg blur-lg opacity-60"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] px-6 py-3 rounded-lg shadow-xl">
              <h2 className="text-lg md:text-xl font-black text-white">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>COM O</span>
                  <span className="text-blue-300 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    DISNEY+ PRO
                  </span>
                </div>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {solucoes.map((solucao, index) => {
            const IconComponent = solucao.icon;
            return (
              <div 
                key={index} 
                className="group relative transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-3 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/70 border border-[#006e99]/30 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-4 h-4 text-slate-300" />
                    </div>
                    <p className="text-white font-semibold text-sm leading-tight flex-1 min-w-0 break-words">{solucao.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
