
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Check, Star, ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';

const PricingSection = memo(() => {
  const testimonialImages = [{
    url: "https://hyperpay.site/wp-content/uploads/2025/05/img_0363-2-scaled.png",
    alt: "Depoimento de cliente satisfeito"
  }, {
    url: "https://hyperpay.site/wp-content/uploads/2025/05/Captura-de-tela-2025-06-01-113803.png",
    alt: "Depoimento de cliente satisfeito"
  }, {
    url: "https://hyperpay.site/wp-content/uploads/2025/06/Captura-de-tela-2025-06-04-015014.png",
    alt: "Depoimento de cliente satisfeito"
  }, {
    url: "https://hyperpay.site/wp-content/uploads/2025/06/Captura-de-tela-2025-06-04-013805.png",
    alt: "Depoimento de cliente satisfeito"
  }];
  
  return (
    <section id="pricing" className="py-8 md:py-12 lg:py-20 px-4 relative overflow-hidden">
      {/* Background otimizado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black z-0"></div>
      
      {/* Efeitos de blur reduzidos para mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 md:w-64 lg:w-96 h-32 md:h-64 lg:h-96 bg-blue-600/3 md:bg-blue-600/5 rounded-full blur-2xl md:blur-3xl animate-float opacity-20 md:opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 md:w-48 lg:w-80 h-24 md:h-48 lg:h-80 bg-purple-600/3 md:bg-purple-600/5 rounded-full blur-2xl md:blur-3xl animate-float delay-1000 opacity-15 md:opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-24 md:w-48 lg:w-72 h-24 md:h-48 lg:h-72 bg-indigo-600/2 md:bg-indigo-600/3 rounded-full blur-2xl md:blur-3xl animate-float delay-2000 opacity-10 md:opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Testimonials Carousel otimizado */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="text-center mb-4 md:mb-6 lg:mb-8">
            <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-full mb-2 md:mb-3 lg:mb-4">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-blue-400 mr-1 md:mr-2 fill-current" />
              <span className="text-slate-200 font-medium text-xs md:text-sm">DEPOIMENTOS REAIS</span>
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 md:mb-2">
              Veja o que nossos clientes dizem
            </h3>
            <p className="text-slate-400 text-sm md:text-base lg:text-lg px-2 md:px-4">Depoimentos reais de quem já está aproveitando</p>
          </div>
          
          <div className="relative px-2 md:px-4 lg:px-0">
            <Carousel className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto" opts={{
              align: "start",
              loop: true
            }}>
              <CarouselContent className="-ml-1 md:-ml-2 lg:-ml-4">
                {testimonialImages.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-1 md:pl-2 lg:pl-4 basis-full sm:basis-1/1 md:basis-1/2">
                    <div className="p-1 md:p-2">
                      <div className="relative group">
                        <div className="relative bg-slate-800 border border-blue-500/30 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] md:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                          <LazyImage 
                            src={testimonial.url} 
                            alt={testimonial.alt} 
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white -left-1 md:-left-2 lg:-left-6 xl:-left-12 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
              <CarouselNext className="bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white -right-1 md:-right-2 lg:-right-6 xl:-right-12 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </Carousel>
          </div>
        </div>

        {/* Header Section otimizado */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Escolha seu{' '}
            <span className="text-blue-400">
              Plano
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto px-2">
            Acesso completo às melhores plataformas de streaming do mundo
          </p>
        </div>

        {/* Pricing Cards otimizados */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Plano Permanente */}
            <div className="relative" data-plano="permanente">
              <div className="bg-slate-900/80 backdrop-blur-sm md:backdrop-blur-md border border-blue-500/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] md:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                {/* Badge */}
                <div className="absolute top-3 md:top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
                    Melhor Valor
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-4 md:mb-6 mt-6 md:mt-8">
                  <span className="text-white text-lg md:text-xl font-bold">Plano Permanente</span>
                </div>

                {/* Preço otimizado */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-3">
                    <span className="text-slate-400 line-through text-lg md:text-xl font-medium">R$ 120</span>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">R$ 27</div>
                  </div>
                  <p className="text-slate-300 text-base md:text-lg font-medium mb-2">Acesso Vitalicio</p>
                  <div className="inline-block bg-green-900/50 border border-green-500/30 px-3 md:px-4 py-1 md:py-2 rounded-full">
                    <p className="text-green-400 text-xs md:text-sm font-semibold">Economia de R$ 93</p>
                  </div>
                </div>

                {/* Título do que recebe */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-white font-bold text-sm md:text-base lg:text-lg text-center">O QUE VOCÊ RECEBE NO PLANO PERMANENTE</h4>
                </div>

                {/* Features otimizadas */}
                <div className="space-y-2 md:space-y-3 lg:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Disney+, Netflix e Prime Video completos</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">+3 BÔNUS: HBO Max, Spotify Premium e Globoplay</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Multi-telas liberadas</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Qualidade 4K, dublado e legendado</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Suporte VIP via WhatsApp</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button onClick={() => window.open('https://hyperpay.site/checkout-white-6911/?add-to-cart=6911', '_blank')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)] md:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  Premium
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
            </div>

            {/* Plano Anual */}
            <div className="relative" data-plano="anual">
              <div className="bg-slate-900/80 backdrop-blur-sm md:backdrop-blur-md border border-blue-500/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] md:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                {/* Badge */}
                <div className="absolute top-3 md:top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-slate-700/80 border border-slate-600/50 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
                    Mais Popular
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-4 md:mb-6 mt-6 md:mt-8">
                  <span className="text-white text-lg md:text-xl font-bold">Plano Anual</span>
                </div>

                {/* Preço otimizado */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3">R$ 10</div>
                  <p className="text-slate-300 text-base md:text-lg font-medium mb-2">12 Meses de acesso premium</p>
                  <div className="inline-block bg-green-900/50 border border-green-500/30 px-3 md:px-4 py-1 md:py-2 rounded-full">
                    <p className="text-green-400 text-xs md:text-sm font-semibold">Economia de R$ 67</p>
                  </div>
                </div>

                {/* Features otimizadas */}
                <div className="space-y-2 md:space-y-3 lg:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">12 Meses de acesso premium</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Catálogo completo</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Suporte rápido</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button onClick={() => window.open('https://hyperpay.site/checkout-white-6906/?add-to-cart=6906', '_blank')} className="w-full bg-slate-700/80 hover:bg-slate-600 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)] md:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  Comprar Agora
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Section otimizada */}
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center bg-slate-800/80 backdrop-blur-sm md:backdrop-blur-md border border-slate-700/50 px-4 md:px-6 py-3 md:py-4 rounded-full max-w-full">
              <span className="text-slate-300 text-xs md:text-sm text-center">
                <span className="text-white font-semibold">Pagamento 100% seguro</span> • Garantia total • 
                <span className="text-white font-semibold ml-1 md:ml-2">Cancelamento fácil</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = 'PricingSection';

export default PricingSection;
