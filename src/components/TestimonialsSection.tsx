
import React from 'react';
import { Star, Quote, User, MessageCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [{
    name: "Marília",
    location: "São Paulo",
    text: "Por 10 reais, consegui entreter meus filhos nas férias inteiras sem travar nada!",
    rating: 5
  }, {
    name: "João",
    location: "Fortaleza",
    text: "Tô assistindo toda a saga da Marvel com meu pai. Funciona de boa na TV!",
    rating: 5
  }, {
    name: "Fernanda",
    location: "RJ",
    text: "Não acreditei no começo, mas FUNCIONA MESMO. Recomendei pra minha irmã na hora!",
    rating: 5
  }];

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Veja o que nossos clientes dizem
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-600 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <User className="w-6 h-6 text-slate-400 mr-2" />
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
