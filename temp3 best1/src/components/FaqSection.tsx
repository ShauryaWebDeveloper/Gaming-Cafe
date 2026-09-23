import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS } from '../data/arenaData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#090514] border-t border-purple-950">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700/50 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-yellow-400" />
            Clear Answers
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-3">
            FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-300">QUESTIONS</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Everything you need to know before stepping into HIVE Arena in Shastri Nagar, Jammu.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#110926] border-yellow-400/60 shadow-lg shadow-purple-950/40' 
                    : 'bg-[#0e081f] border-purple-900/50 hover:border-purple-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`font-display font-bold text-sm sm:text-base ${isOpen ? 'text-yellow-300' : 'text-zinc-200'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${
                    isOpen ? 'bg-yellow-400 text-black rotate-180' : 'bg-purple-950 text-purple-300'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-purple-900/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
