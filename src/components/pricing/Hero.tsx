import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 bg-white overflow-hidden">
      {/* Base grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#052222 1px, transparent 1px), linear-gradient(90deg, #052222 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
        }}
      />

      {/* Tilted secondary grid for depth */}
      <div
        className="absolute -inset-x-20 top-8 bottom-[-20%] opacity-[0.028] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#052222 1px, transparent 1px), linear-gradient(90deg, #052222 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          transform: 'perspective(900px) rotateX(12deg) rotateZ(-4deg) scale(1.15)',
          transformOrigin: 'center top',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
        }}
      />

      {/* Soft glow accents */}
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-20 w-[360px] h-[360px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-500 text-[11px] font-bold tracking-[0.18em] uppercase mb-6 shadow-sm"
        >
          Our approach to cost estimation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-xentek-dark leading-[1.1] tracking-tight mb-5"
        >
          Transparent Pricing.{' '}
          <span className="italic text-xentek-accent block font-serif">Tailored Engineering.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-poppins mb-8"
        >
          Every project is unique. Our pricing is based on your specific requirements,
          complexity, and scale — not one-size-fits-all packages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="bg-xentek-dark text-white px-8 py-3.5 rounded-full font-medium font-poppins text-sm hover:bg-xentek-accent transition-all duration-300 shadow-lg shadow-xentek-dark/10"
          >
            Start Your Project
          </Link>
          <Link
            to="/contact"
            className="bg-white text-xentek-dark border border-gray-200 px-8 py-3.5 rounded-full font-medium font-poppins text-sm hover:border-xentek-dark transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
