import { motion } from 'framer-motion';
import { HeartPulse, Store, Brain, Building2, Calendar } from 'lucide-react';

const milestones = [
  {
    year: '2023',
    title: 'Foundation Year',
    desc: 'Platform vision takes shape',
    Icon: Calendar,
  },
  {
    year: 'Now',
    title: 'SHE-AI',
    desc: 'Released — real-world impact',
    Icon: HeartPulse,
  },
  {
    year: 'Next',
    title: 'XenRetail OS',
    desc: 'Retail platform in development',
    Icon: Store,
  },
  {
    year: 'Ahead',
    title: 'Future AI Solutions',
    desc: 'Intelligent assistants & automation',
    Icon: Brain,
  },
  {
    year: 'Horizon',
    title: 'Enterprise Platforms',
    desc: 'Scalable systems for organizations',
    Icon: Building2,
  },
];

export const InnovationTimeline = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold font-figtree tracking-[0.2em] uppercase text-[#109e9b] mb-3"
          >
            Roadmap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-figtree tracking-normal text-xentek-dark"
          >
            Innovation Timeline
          </motion.h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-100" />
          <motion.div
            className="absolute top-8 left-0 h-px bg-[#109e9b] origin-left"
            style={{ width: '100%' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: 'easeInOut' }}
          />

          <div className="relative grid grid-cols-5 gap-3">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center pt-2"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer mb-4 relative z-10"
                >
                  <m.Icon className="w-7 h-7  text-[#109e9b]" strokeWidth={1.6} />
                </motion.div>
                <span className="text-[13px] font-bold font-figtree tracking-[0.2em] uppercase text-[#109e9b] mb-1.5">
                  {m.year}
                </span>
                <h3 className="text-[15px] tracking-wide font-bold font-figtree text-xentek-dark mb-1 tracking-tight">{m.title}</h3>
                <p className="text-[13px] text-gray-500 font-poppins leading-relaxed px-1">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-1 max-w-sm mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <m.Icon className="w-5 h-5 text-[#109e9b]" strokeWidth={1.6} />
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 min-h-8 bg-gray-300 my-1" />
                )}
              </div>
              <div className="pb-6 pt-1">
                <span className="text-[12px] font-figtree font-bold tracking-wider uppercase text-[#109e9b]">
                  {m.year}
                </span>
                <h3 className="text-[15px] font-figtree tracking-wide font-bold text-xentek-dark">{m.title}</h3>
                <p className="text-[13px] text-gray-500 font-poppins">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
