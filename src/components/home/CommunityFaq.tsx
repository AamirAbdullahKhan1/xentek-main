import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but a typical web application takes between 8 to 12 weeks from discovery to deployment."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide comprehensive post-launch support and maintenance plans to ensure your product remains secure, updated, and performant."
  },
  {
    question: "Can you work with existing legacy code?",
    answer: "Absolutely. Our engineers are experienced in auditing, refactoring, and modernizing legacy codebases without disrupting active services."
  }
];

export const CommunityFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Community Banner */}
        <div className="bg-xentek-dark rounded-3xl p-10 md:p-16 mb-32 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-teal-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">XenTek Community</h2>
            <p className="text-teal-100 text-lg mb-8 max-w-md">
              An energetic ecosystem for students and builders. Join workshops, access
              technical resources, and collaborate on open source projects.
            </p>
            <button className="bg-white text-xentek-dark px-8 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors">
              Join the Community
            </button>
          </div>

          <div className="md:w-1/2 flex gap-6 justify-end">
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-8 text-center min-w-[140px]">
              <div className="text-4xl font-bold text-white mb-1">5k+</div>
              <div className="text-teal-200 text-xs font-semibold tracking-wider uppercase">Active<br/>Builders</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-8 text-center min-w-[140px]">
              <div className="text-4xl font-bold text-white mb-1">20+</div>
              <div className="text-teal-200 text-xs font-semibold tracking-wider uppercase">Monthly<br/>Events</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-teal-200 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-gray-400">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
