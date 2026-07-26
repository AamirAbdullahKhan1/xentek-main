import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do you provide a quote?',
    answer:
      'After a short discovery call, we map scope, complexity, and timeline into a clear written proposal — with phased options when it helps you start faster.',
  },
  {
    question: 'Do you offer fixed-price projects?',
    answer:
      'Yes. Well-defined scopes can be delivered at a fixed price. Exploratory or evolving work can use milestone-based or retainer models for flexibility.',
  },
  {
    question: 'What is the typical project duration?',
    answer:
      'Marketing sites often ship in 2–6 weeks. Product MVPs typically take 8–14 weeks. Enterprise systems vary — we set milestones so value lands early.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Absolutely. We offer post-launch support retainers covering monitoring, updates, security patches, and iterative improvements.',
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-xentek-dark text-center tracking-tight mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`rounded-2xl border bg-white overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-teal-200 shadow-sm' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className="font-semibold text-xentek-dark font-poppins">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400 shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed font-poppins border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
