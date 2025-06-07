
import React from 'react';
import { Play, Tv, Monitor, Smartphone } from 'lucide-react';

const SolutionSection = () => {
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-1 bg-blue-500/10 rounded-lg blur-lg opacity-60"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] px-6 py-3 rounded-lg shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Nossa solução completa
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group relative transform hover:scale-105 transition-all duration-300">
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-4 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-slate-800/70 border border-[#006e99]/30 flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">Catálogo Completo</h3>
              <p className="text-xs text-gray-300">
                Marvel, Pixar, Star Wars
              </p>
            </div>
          </div>

          <div className="group relative transform hover:scale-105 transition-all duration-300">
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-4 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-slate-800/70 border border-[#006e99]/30 flex items-center justify-center shadow-lg">
                <Tv className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">Multi-dispositivos</h3>
              <p className="text-xs text-gray-300">
                TV, celular, tablet
              </p>
            </div>
          </div>

          <div className="group relative transform hover:scale-105 transition-all duration-300">
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-4 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-slate-800/70 border border-[#006e99]/30 flex items-center justify-center shadow-lg">
                <Monitor className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">Multi-telas</h3>
              <p className="text-xs text-gray-300">
                Sem limite de pessoas
              </p>
            </div>
          </div>

          <div className="group relative transform hover:scale-105 transition-all duration-300">
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] p-4 rounded-lg hover:border-blue-400/60 transition-all duration-300 shadow-lg">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-slate-800/70 border border-[#006e99]/30 flex items-center justify-center shadow-lg">
                <Smartphone className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">Qualidade 4K</h3>
              <p className="text-xs text-gray-300">
                Dublado e legendado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
