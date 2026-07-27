import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly will XenTek respond?',
    answer:
      "We typically respond to all inquiries within 24 hours on business days. For urgent matters, feel free to reach out directly via email and we'll prioritise your request.",
  },
  {
    question: 'Do I need complete project requirements?',
    answer:
      "Not at all. Many of our most successful projects started with just a rough idea. Our discovery process is specifically designed to help you clarify and define your requirements collaboratively.",
  },
  {
    question: 'Can I request a consultation before deciding?',
    answer:
      "Absolutely. We offer a free initial consultation — no commitment required. This gives us a chance to understand your vision and lets you evaluate whether XenTek is the right fit.",
  },
  {
    question: 'Do you work with startups?',
    answer:
      "Yes, we love working with startups. We understand budget constraints and can tailor our engagement model to suit early-stage companies, from MVP development to scalable architecture planning.",
  },
  {
    question: 'Can existing systems be upgraded or modernised?',
    answer:
      "Yes. We have extensive experience with legacy system modernisation, API integrations, and platform migrations. We'll assess your current system and recommend the most pragmatic path forward.",
  },
];

interface FaqItemProps {
  item: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ item, index, isOpen, onToggle }: FaqItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-[#109e9b]/25 bg-[#109e9b]/[0.03] shadow-md shadow-[#109e9b]/8'
          : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold font-figtree transition-colors duration-200 ${
            isOpen ? 'text-[#109e9b]' : 'text-gray-900'
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center cursor-pointer justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? 'border-[#109e9b]/30 bg-[#109e9b] text-white'
              : 'border-gray-200 bg-white text-gray-500 hover:border-[#109e9b]/25 hover:text-[#109e9b]'
          }`}
        >
          {isOpen ? <Minus className="h-3.5 w-3.5" strokeWidth={2.5} /> : <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-5 text-sm text-gray-500 font-poppins leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#109e9b]/20 bg-[#109e9b]/[0.07] px-4 py-1.5 text-xs font-bold font-figtree tracking-[0.16em] uppercase text-[#109e9b] mb-5"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-bold font-figtree text-gray-900"
          >
            Common Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-3 text-base text-gray-500 font-poppins max-w-md mx-auto"
          >
            Everything you need to know before taking the first step.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              item={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
