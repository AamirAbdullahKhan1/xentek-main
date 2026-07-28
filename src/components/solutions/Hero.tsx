import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Code2, Package, Sparkles } from 'lucide-react';

const floatingCards = [
  { label: 'Ideas', Icon: Lightbulb, x: '8%', y: '12%', delay: 0 },
  { label: 'Engineering', Icon: Code2, x: '62%', y: '8%', delay: 0.15 },
  { label: 'Products', Icon: Package, x: '5%', y: '64%', delay: 0.3 },
  { label: 'Impact', Icon: Sparkles, x: '68%', y: '55%', delay: 0.45 },
];

const HeroIllustration = () => (
  <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
    {/* Soft health/AI wash — kept subtle */}
    <div className="absolute inset-8 rounded-[2rem] bg-[#109e9b]/[0.04] blur-2xl" />

    {/* Network SVG */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 320"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M80 70 C140 70, 160 90, 200 140 C240 190, 260 200, 320 200"
        stroke="#109e9b"
        strokeWidth="1.25"
        strokeOpacity="0.35"
        strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.path
        d="M90 200 C140 180, 170 120, 210 100 C250 80, 280 90, 310 70"
        stroke="#109e9b"
        strokeWidth="1.25"
        strokeOpacity="0.25"
        strokeDasharray="3 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.2, ease: 'easeInOut' }}
      />
      
      {[
        [80, 70],
        [310, 70],
        [90, 200],
        [320, 200],
        [200, 140],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="4"
          fill="#109e9b"
          fillOpacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
        />
      ))}
    </svg>

    {floatingCards.map((card) => (
      <motion.div
        key={card.label}
        className="absolute"
        style={{ left: card.x, top: card.y }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + card.delay, duration: 0.55 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + card.delay * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-lg shadow-[#109e9b]/10"
        >
          <span className="w-8 h-8 rounded-xl bg-[#109e9b]/10 flex items-center justify-center">
            <card.Icon className="w-4 h-4 text-[#109e9b]" strokeWidth={1.75} />
          </span>
          <span className="text-xs font-figtree font-semibold text-xentek-dark tracking-wide pr-1">
            {card.label}
          </span>
        </motion.div>
      </motion.div>
    ))}

    {/* Center glass node */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-28 h-22 rounded-3xl bg-white/70 backdrop-blur-xl  border border-[#109e9b]/15 shadow-xl shadow-[#109e9b]/10 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-xentek-dark tracking-normal font-figtree">
          Xen<span className="text-[#109e9b] font-figtree">Tek</span>
        </span>
        <span className="text-[10px] text-gray-600 mt-1 tracking-wider uppercase font-figtree">
          Ecosystem
        </span>
      </div>
    </motion.div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-24 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#052222 1px, transparent 1px), linear-gradient(90deg, #052222 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        }}
      />
      <div className="absolute top-20 right-0 w-[480px] h-[480px] bg-[#109e9b]/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-xentek-dark leading-[1.1] tracking-tight mb-6"
            >
              Building Solutions That{' '}
              <span className="italic font-serif text-[#109e9b]">Solve Real Problems.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="text-base md:text-lg text-gray-500 font-poppins leading-relaxed max-w-xl mb-8"
            >
              Beyond custom software development, XenTek engineers intelligent digital solutions
              designed to simplify operations, solve real-world challenges, and shape the future of
              modern businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#ecosystem"
                className="bg-xentek-dark text-white px-7 py-3.5 rounded-full font-medium font-poppins text-sm hover:bg-[#109e9b] transition-all duration-300 shadow-lg shadow-xentek-dark/10"
              >
                Explore Solutions
              </a>
              <Link
                to="/contact"
                className="bg-white text-xentek-dark border-2 border-gray-200 px-7 py-3.5 rounded-full font-medium font-poppins text-sm hover:border-xentek-dark transition-all duration-400"
              >
                Contact XenTek
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
