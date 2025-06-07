
import React, { useState, useEffect, memo } from 'react';
import { Clock, AlertTriangle, Timer, Target } from 'lucide-react';

const UrgencySection = memo(() => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 44,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12 lg:py-20 px-4 relative overflow-hidden">
      {/* Background otimizado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-black z-0"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="relative mb-6 md:mb-8 lg:mb-12">
          <div className="bg-slate-900/80 backdrop-blur-sm md:backdrop-blur-md border border-blue-500/30 rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-10 shadow-lg md:shadow-2xl shadow-[0_0_10px_rgba(59,130,246,0.1)] md:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            
            {/* Header otimizado para mobile */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4 lg:mb-6">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 text-blue-400" />
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-black text-white text-center">
                OFERTA LIMITADA
              </h2>
              <Clock className="w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 text-blue-400" />
            </div>
            
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-relaxed px-1 md:px-2">
                Apenas hoje por este preço!
              </p>
              
              <p className="text-slate-400 text-sm md:text-base lg:text-lg font-medium px-1 md:px-2">
                Restam apenas algumas vagas disponíveis hoje!
              </p>

              {/* Countdown Timer otimizado */}
              <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-3 mb-4 md:mb-6 lg:mb-8">
                <Timer className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-blue-400" />
                <span className="text-white text-sm md:text-lg lg:text-xl font-bold">Tempo restante:</span>
              </div>

              <div className="flex justify-center gap-1 md:gap-2 lg:gap-6 mb-4 md:mb-6 lg:mb-8 px-1 md:px-2">
                <div className="bg-slate-800/80 backdrop-blur-sm md:backdrop-blur-md border border-blue-500/30 rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-3 lg:p-6 min-w-[50px] md:min-w-[70px] lg:min-w-[100px] shadow-md md:shadow-lg shadow-[0_0_5px_rgba(59,130,246,0.1)] md:shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-wider">Horas</div>
                </div>
                
                <div className="flex items-center text-slate-500 text-lg md:text-2xl lg:text-3xl font-black">:</div>
                
                <div className="bg-slate-800/80 backdrop-blur-sm md:backdrop-blur-md border border-blue-500/30 rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-3 lg:p-6 min-w-[50px] md:min-w-[70px] lg:min-w-[100px] shadow-md md:shadow-lg shadow-[0_0_5px_rgba(59,130,246,0.1)] md:shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-wider">Min</div>
                </div>
                
                <div className="flex items-center text-slate-500 text-lg md:text-2xl lg:text-3xl font-black">:</div>
                
                <div className="bg-slate-800/80 backdrop-blur-sm md:backdrop-blur-md border border-blue-500/30 rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-3 lg:p-6 min-w-[50px] md:min-w-[70px] lg:min-w-[100px] shadow-md md:shadow-lg shadow-[0_0_5px_rgba(59,130,246,0.1)] md:shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black text-white">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-wider">Seg</div>
                </div>
              </div>

              {/* Warning messages otimizadas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4 max-w-4xl mx-auto px-1 md:px-2">
                <div className="bg-slate-800/60 border border-blue-500/30 rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-3 lg:p-4 shadow-[0_0_5px_rgba(59,130,246,0.05)] md:shadow-[0_0_10px_rgba(59,130,246,0.05)]">
                  <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                    <Target className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
                    <p className="text-slate-300 font-medium text-xs md:text-sm lg:text-base">
                      Após esse tempo, volta para R$ 120
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800/60 border border-blue-500/30 rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-3 lg:p-4 shadow-[0_0_5px_rgba(59,130,246,0.05)] md:shadow-[0_0_10px_rgba(59,130,246,0.05)]">
                  <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
                    <p className="text-slate-300 font-medium text-xs md:text-sm lg:text-base">
                      Últimas vagas disponíveis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

UrgencySection.displayName = 'UrgencySection';

export default UrgencySection;
