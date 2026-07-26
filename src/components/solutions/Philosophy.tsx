import { motion } from 'framer-motion';
import {
  MessagesSquare,
  Search,
  Code2,
  Package,
  Orbit,
} from 'lucide-react';

const flow = [
  { title: 'Client Challenges', Icon: MessagesSquare },
  { title: 'Research', Icon: Search },
  { title: 'Engineering', Icon: Code2 },
  { title: 'Product', Icon: Package },
  { title: 'Impact', Icon: Orbit },
];

export const Philosophy = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f7f8f9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-5"
          >
            Engineering Technology{' '}
            <span className="italic font-serif text-[#109e9b]">Beyond Client Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-gray-500 font-poppins leading-relaxed max-w-2xl mx-auto"
          >
            At XenTek, every solution begins with understanding real-world challenges. Many of our
            products originate from recurring problems observed while building custom solutions for
            businesses. By transforming those insights into scalable platforms, we create technology
            that benefits many instead of one.
          </motion.p>
        </div>

        {/* Animated flow */}
        <div className="hidden md:flex items-center justify-between gap-2 relative">
          <motion.div
            className="absolute top-1/2 left-[8%] right-[8%] h-px -translate-y-1/2 bg-gray-200"
            aria-hidden
          />
          <motion.div
            className="absolute top-1/2 left-[8%] h-px -translate-y-1/2 bg-[#109e9b] origin-left"
            style={{ width: '84%' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />

          {flow.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 260 }}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-md shadow-[#109e9b]/5 flex items-center justify-center mb-3"
              >
                <step.Icon className="w-6 h-6 text-[#109e9b]" strokeWidth={1.6} />
              </motion.div>
              <span className="text-xs font-bold text-xentek-dark tracking-tight px-1">
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile flow */}
        <div className="md:hidden flex flex-col items-center gap-0">
          {flow.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                <step.Icon className="w-5 h-5 text-[#109e9b]" strokeWidth={1.6} />
              </div>
              <span className="text-xs font-bold text-xentek-dark mt-2 mb-1">{step.title}</span>
              {i < flow.length - 1 && (
                <div className="w-px h-6 bg-[#109e9b]/30 my-1" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
