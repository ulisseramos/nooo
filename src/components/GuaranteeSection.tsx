
import React from 'react';
import { Shield, CheckCircle, Clock, Headphones } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          <span className="text-blue-400">100% Garantido</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-semibold text-white mb-2">Seguro</h3>
            <p className="text-gray-300 text-sm">Métodos 100% seguros e confiáveis</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-lg font-semibold text-white mb-2">Garantia</h3>
            <p className="text-gray-300 text-sm">30 dias de garantia total</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-semibold text-white mb-2">Rápido</h3>
            <p className="text-gray-300 text-sm">Acesso em até 5 minutos</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center">
            <Headphones className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white mb-2">Suporte</h3>
            <p className="text-gray-300 text-sm">Atendimento 24h por dia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
