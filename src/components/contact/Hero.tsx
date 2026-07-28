import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 pb-20 lg:pt-20 lg:pb-28">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#052222 1px, transparent 1px), linear-gradient(90deg, #052222 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Teal glow blob */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-[#109e9b]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-50/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#109e9b]/20 bg-[#109e9b]/[0.07] px-4 py-1.5 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#109e9b]" strokeWidth={2} />
              <span className="text-xs font-bold font-figtree tracking-[0.16em] uppercase text-[#109e9b]">
                Start Your Journey
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.8rem] sm:text-5xl lg:text-[3.6rem] font-bold font-figtree text-gray-900 leading-[1.1] tracking-tight mb-6"
            >
              Let's Build Something{' '}
              <span
                className="relative italic font-serif"
                style={{ color: '#109e9b' }}
              >
                Together.
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full origin-left"
                  style={{ background: 'linear-gradient(90deg, #109e9b, #109e9b55)' }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="text-lg text-gray-500 font-poppins leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Whether you're starting with a simple idea or planning a complex digital solution,
              XenTek is here to guide you from concept to completion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="group relative inline-flex w-fit max-w-full cursor-pointer shrink-0 items-center justify-center gap-2.5 rounded-full bg-xentek-dark px-8 py-3.5 text-white font-figtree font-semibold text-base tracking-wide shadow-lg shadow-gray-900/15 transition-all duration-300 hover:bg-[#109e9b] hover:shadow-xl hover:shadow-[#109e9b]/25 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
