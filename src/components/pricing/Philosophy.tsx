import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Layers, Cpu, Clock, TrendingUp } from 'lucide-react';

const principles = [
  {
    icon: Layers,
    title: 'Project Scope',
    desc: 'The breadth of features, integrations, and deliverables that define your product surface.',
    accent: '#0d9488',
    glow: 'rgba(13, 148, 136, 0.15)',
  },
  {
    icon: Cpu,
    title: 'Technical Complexity',
    desc: 'Architecture depth, performance targets, and engineering challenges unique to your stack.',
    accent: '#0891b2',
    glow: 'rgba(8, 145, 178, 0.15)',
  },
  {
    icon: Clock,
    title: 'Timeline',
    desc: 'How quickly you need to ship — accelerated delivery requires focused, dedicated capacity.',
    accent: '#059669',
    glow: 'rgba(5, 150, 105, 0.15)',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Value',
    desc: 'Scalability, maintainability, and ownership designed to compound ROI over years, not months.',
    accent: '#0f766e',
    glow: 'rgba(15, 118, 110, 0.15)',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const Philosophy = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-3"
          >
            Our Pricing Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-gray-500 font-poppins text-base md:text-lg"
          >
            Engineering value, not just code.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={card}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group relative"
              >
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ background: item.glow }}
                />
                <div className="relative h-full bg-white rounded-2xl border border-gray-100 p-7 overflow-hidden shadow-sm group-hover:shadow-xl group-hover:shadow-teal-900/5 group-hover:border-teal-100 transition-all duration-400">
                  {/* Top shimmer line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  />

                  <div className="relative mb-5">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100 bg-xentek-light group-hover:scale-110 transition-transform duration-400"
                      style={{ boxShadow: `inset 0 0 0 0 ${item.accent}` }}
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.45 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.accent }} strokeWidth={1.75} />
                    </motion.div>
                    <span className="absolute top-1 -right-1 text-[14px] font-bold text-gray-500 font-figtree tracking-wider">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-xentek-dark mb-2 tracking-tight group-hover:text-xentek transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-poppins">{item.desc}</p>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
