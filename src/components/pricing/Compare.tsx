import { motion } from 'framer-motion';
import { X, Check, Diamond } from 'lucide-react';

const traditional = [
  'Generic Templates',
  'Bloated Features',
  'Limited Scalability',
  'Vendor Lock-in',
  'Opaque Pricing',
];

const xentek = [
  'Bespoke Engineering',
  'Optimized Performance',
  'Built to Scale',
  'Total IP Ownership',
  'Transparent Quotes',
];

export const Compare = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-3"
          >
            Why Invest in Custom Software?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-gray-500 font-poppins"
          >
            Off-the-shelf shortcuts vs. engineering that compounds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl bg-white border border-gray-100 p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-8 tracking-tight">
              Traditional Approach
            </h3>
            <ul className="space-y-4">
              {traditional.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="flex items-center gap-3 text-gray-500 font-poppins"
                >
                  <span className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-red-400" strokeWidth={2.5} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* XenTek */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl bg-xentek-dark p-8 md:p-10 shadow-xl shadow-teal-900/20 overflow-hidden"
          >
            <Diamond
              className="absolute -bottom-6 -right-6 w-36 h-36 text-white/[0.04] rotate-12 pointer-events-none"
              strokeWidth={1}
            />
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="relative text-xl font-bold text-white mb-8 tracking-tight">
              XenTek Precision
            </h3>
            <ul className="relative space-y-4">
              {xentek.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-center gap-3 text-teal-50 font-poppins"
                >
                  <span className="w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-teal-300" strokeWidth={2.5} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
