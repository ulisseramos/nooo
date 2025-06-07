import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Check, Clock, Headphones, Shield, CheckCircle, ArrowRight } from 'lucide-react';
const Footer = () => {
  return <footer className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA Final */}
        

        {/* Informações legais */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-3">
            © 2024 Disney+ Pro Access. Todos os direitos reservados.
          </p>
          <p>
            Este site não é afiliado à Disney. Oferecemos acesso através de métodos legais e seguros.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;