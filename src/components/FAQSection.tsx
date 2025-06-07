
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Funciona na Smart TV?",
      answer: "Sim, perfeitamente."
    },
    {
      question: "Posso dividir com outras pessoas?",
      answer: "Sim! Multi-telas liberadas."
    },
    {
      question: "Tem conteúdo dublado e em 4K?",
      answer: "Sim, com qualidade máxima."
    },
    {
      question: "E se não funcionar?",
      answer: "Reembolso garantido em até 30 dias."
    }
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12 animate-fade-in flex items-center justify-center gap-3">
          <HelpCircle className="w-10 h-10 text-disney-gold" />
          <span className="text-disney-gold">DÚVIDAS FREQUENTES</span>
        </h2>

        <div className="bg-glass-gradient backdrop-blur-md border border-white/20 p-6 rounded-3xl animate-scale-in">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/10 rounded-xl border border-white/20 px-4"
              >
                <AccordionTrigger className="text-white text-left text-lg font-semibold hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
