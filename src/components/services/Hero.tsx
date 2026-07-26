import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#052222 1px, transparent 1px), linear-gradient(90deg, #052222 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Accent glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-xs font-bold tracking-[0.2em] uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          Core Engineering Services
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-xentek-dark leading-[1.08] tracking-tight mb-8 max-w-4xl"
        >
          We don't just build.{' '}
          <span className="italic text-xentek-accent font-serif">We engineer.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-poppins"
        >
          XenTek bridges the gap between complex engineering and intuitive experiences —
          delivering production-grade software that actually moves your business forward.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-gray-100"
        >
          {[
            { value: '100%', label: 'Custom Built' },
            { value: '24h', label: 'Avg. Response Time' },
            { value: '10+', label: 'Active Projects' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold font-figtree text-xentek-dark tracking-tight mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium font-figtree tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
