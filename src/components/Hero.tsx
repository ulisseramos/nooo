
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Tv, Shield, AlertTriangle } from 'lucide-react';

const Hero = memo(() => {
  const [acessosRestantes, setAcessosRestantes] = useState(8);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAcessosRestantes(prev => {
        if (prev > 3) {
          return prev - 1;
        }
        return prev;
      });
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Lazy load do script do vídeo apenas quando necessário
    const loadVideoScript = () => {
      if (!videoLoaded) {
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js";
        script.setAttribute("data-id", "684142198473340d73f5c1e5");
        script.async = true;
        script.onload = () => setVideoLoaded(true);
        document.head.appendChild(script);
        
        return () => {
          const existingScript = document.querySelector('script[data-id="684142198473340d73f5c1e5"]');
          if (existingScript) {
            document.head.removeChild(existingScript);
          }
        };
      }
    };

    // Delay para carregar o vídeo apenas após elementos críticos
    const timer = setTimeout(loadVideoScript, 1000);
    return () => clearTimeout(timer);
  }, [videoLoaded]);

  const scrollToOferta10Reais = useCallback(() => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      setTimeout(() => {
        const planoAnual = pricingSection.querySelector('[data-plano="anual"]');
        if (planoAnual) {
          planoAnual.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 800);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-8 overflow-hidden">
      {/* Background otimizado para mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-black z-0"></div>
      
      {/* Elementos flutuantes reduzidos para mobile */}
      <div className="absolute top-1/4 left-1/4 w-20 md:w-32 h-20 md:h-32 bg-white/3 md:bg-white/5 rounded-full blur-2xl md:blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 md:w-40 h-24 md:h-40 bg-gray-500/3 md:bg-gray-500/5 rounded-full blur-2xl md:blur-3xl animate-float delay-1000"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Contador de urgência otimizado */}
        <div className="inline-block mb-4 md:mb-6 animate-fade-in">
          <div className="relative">
            <div className="bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-blue-900/20 backdrop-blur-sm md:backdrop-blur-md text-slate-300 border border-[#006e99] shadow-[0_0_10px_rgba(0,110,153,0.2)] md:shadow-[0_0_15px_rgba(0,110,153,0.3)] px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium flex items-center">
              <div className="flex items-center">
                <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-slate-400" />
                <span className="text-slate-200">
                  <span className="hidden sm:inline">ÚLTIMOS </span>{acessosRestantes} ACESSOS<span className="hidden sm:inline"> DISPONÍVEIS</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Título otimizado para mobile */}
        <div className="mb-6 md:mb-8 animate-fade-in delay-300">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-3 md:mb-4 leading-tight">
              <span className="relative inline-block">
                <span className="text-white">
                  DISNEY+ PRO
                </span>
              </span>
              <br />
              <span className="text-slate-300 font-light text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                ACESSO PREMIUM
              </span>
            </h1>
            <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 bg-white/60"></div>
          </div>
        </div>

        {/* Container do vídeo com loading otimizado */}
        <div className="mb-6 md:mb-8 animate-fade-in delay-700 max-w-5xl mx-auto">
          <div className="relative">
            {!videoLoaded && (
              <div className="w-full aspect-video bg-slate-800/60 rounded-lg md:rounded-xl border border-[#006e99] shadow-[0_0_10px_rgba(0,110,153,0.2)] md:shadow-[0_0_15px_rgba(0,110,153,0.3)] flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-3"></div>
                  <span className="text-slate-400 text-sm md:text-base">Carregando vídeo...</span>
                </div>
              </div>
            )}
            <div 
              id="ifr_684142198473340d73f5c1e5_wrapper" 
              style={{margin: '0 auto', width: '100%', display: videoLoaded ? 'block' : 'none'}} 
              className="rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl border border-[#006e99] shadow-[0_0_10px_rgba(0,110,153,0.2)] md:shadow-[0_0_15px_rgba(0,110,153,0.3)]"
            >
              <div style={{padding: '75% 0 0 0', position: 'relative'}} id="ifr_684142198473340d73f5c1e5_aspect">
                <iframe 
                  frameBorder="0" 
                  allowFullScreen 
                  src="https://scripts.converteai.net/8d4d4a9d-385b-4da4-962d-620a9257afa1/players/684142198473340d73f5c1e5/embed.html" 
                  id="ifr_684142198473340d73f5c1e5" 
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                  referrerPolicy="origin"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preço otimizado para mobile */}
        <div className="mb-4 md:mb-6 animate-fade-in delay-900">
          <div className="relative inline-block">
            <span className="text-lg md:text-xl lg:text-2xl text-slate-400 font-normal block mb-2 md:mb-3">
              por apenas
            </span>
            <div className="relative">
              <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white font-black">
                R$10
              </span>
            </div>
          </div>
        </div>

        {/* Subtítulo otimizado */}
        <div className="mb-6 md:mb-8 animate-fade-in delay-1000">
          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto px-2 md:px-4 leading-relaxed">
            Não perca a chance de assistir tudo em qualidade máxima, sem travar, por um preço simbólico
          </p>
        </div>

        {/* Features otimizadas para mobile */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10 animate-fade-in delay-1100 px-2 md:px-4">
          <div className="bg-slate-800/60 backdrop-blur-sm md:backdrop-blur-md border border-[#006e99] shadow-[0_0_10px_rgba(0,110,153,0.2)] md:shadow-[0_0_15px_rgba(0,110,153,0.3)] px-3 md:px-4 py-2 md:py-3 rounded-lg text-white flex items-center shadow-lg">
            <Tv className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-slate-400" />
            <span className="text-xs md:text-sm font-medium">Multi-telas</span>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm md:backdrop-blur-md border border-[#006e99] shadow-[0_0_10px_rgba(0,110,153,0.2)] md:shadow-[0_0_15px_rgba(0,110,153,0.3)] px-3 md:px-4 py-2 md:py-3 rounded-lg text-white flex items-center shadow-lg">
            <Play className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-slate-400" />
            <span className="text-xs md:text-sm font-medium">Qualidade 4K</span>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm md:backdrop-blur-md border border-[#006e99] shadow-[0_0_10px_rgba(0,110,153,0.2)] md:shadow-[0_0_15px_rgba(0,110,153,0.3)] px-3 md:px-4 py-2 md:py-3 rounded-lg text-white flex items-center shadow-lg">
            <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-slate-400" />
            <span className="text-xs md:text-sm font-medium">Sem Anúncios</span>
          </div>
        </div>

        {/* CTA otimizado para mobile */}
        <div className="animate-scale-in delay-1200 px-2 md:px-4">
          <div className="relative inline-block">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-slate-200 font-bold text-base md:text-lg lg:text-xl px-8 md:px-12 py-4 md:py-6 lg:py-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg md:shadow-xl border border-[#006e99] shadow-[0_0_10px_rgba(0,110,153,0.2)] md:shadow-[0_0_15px_rgba(0,110,153,0.3)] w-full sm:w-auto"
              onClick={scrollToOferta10Reais}
            >
              <div className="flex items-center justify-center">
                <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                <span>ACESSAR AGORA</span>
              </div>
            </Button>
          </div>
        </div>

        <p className="text-xs md:text-sm lg:text-base text-slate-500 mt-3 md:mt-4 animate-fade-in delay-1400 font-normal px-2">
          🔒 Oferta limitada com garantia total • Acesso imediato
        </p>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
