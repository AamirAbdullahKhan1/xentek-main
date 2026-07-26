import { motion } from 'framer-motion';
import { Search, Wrench, FlaskConical, Rocket, RefreshCw } from 'lucide-react';

const stages = [
  { title: 'Research', Icon: Search, desc: 'Identify recurring industry challenges' },
  { title: 'Engineering', Icon: Wrench, desc: 'Architect scalable systems' },
  { title: 'Validation', Icon: FlaskConical, desc: 'Test with real-world scenarios' },
  { title: 'Launch', Icon: Rocket, desc: 'Ship polished, production-ready products' },
  { title: 'Continuous Improvement', Icon: RefreshCw, desc: 'Iterate from usage and feedback' },
];

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 md:py-12 bg-[#fffff] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold font-figtree tracking-[0.2em] uppercase text-[#109e9b] mb-3"
          >
            How we build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-6"
          >
            Our Growing Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-gray-500 font-poppins leading-relaxed text-[18px]"
          >
            XenTek develops software not only for clients — we also create our own technology
            solutions after identifying recurring industry challenges, turning shared pain points
            into platforms that scale.
          </motion.p>
        </div>

        {/* Desktop horizontal roadmap */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[2.75rem] left-[10%] right-[10%] h-px bg-gray-200" />
          <motion.div
            className="absolute top-[2.75rem] left-[10%] h-px bg-[#109e9b] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ width: '80%' }}
          />

          <div className="relative grid grid-cols-5 gap-4">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="w-15 h-15 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-5 relative z-10 group-hover:border-[#109e9b]/30 group-hover:shadow-md transition-all duration-300"
                >
                  <stage.Icon className="w-6 h-6 text-[#109e9b]" strokeWidth={1.75} />
                </motion.div>
                <h3 className="text-[15px] font-figtree font-bold text-xentek-dark mb-1.5 tracking-wide">
                  {stage.title}
                </h3>
                <p className="text-[13px] text-gray-500 font-poppins leading-relaxed px-1">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-0">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  <stage.Icon className="w-5 h-5 text-[#109e9b]" strokeWidth={1.75} />
                </div>
                {i < stages.length - 1 && (
                  <div className="w-px flex-1 min-h-[28px] bg-gray-200 my-1" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-[15px] font-figtree font-bold text-xentek-dark mb-1 tracking-wide">{stage.title}</h3>
                <p className="text-[13px] text-gray-500 font-poppins">{stage.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
