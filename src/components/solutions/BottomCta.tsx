import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, HeartPulse, Store, Sparkles } from 'lucide-react';

const floatingIcons = [
  { Icon: HeartPulse, x: '12%', y: '22%', delay: 0 },
  { Icon: Store, x: '82%', y: '18%', delay: 0.4 },
  { Icon: Package, x: '18%', y: '72%', delay: 0.8 },
  { Icon: Sparkles, x: '78%', y: '68%', delay: 1.2 },
];

export const BottomCta = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f7f8f9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl bg-white border border-gray-100 px-8 py-14 md:px-16 md:py-16 text-center overflow-hidden shadow-sm"
        >
          {/* Blueprint bg */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#109e9b 1px, transparent 1px), linear-gradient(90deg, #109e9b 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Animated connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M80 80 C200 120, 300 60, 400 200 S600 320, 720 100"
              fill="none"
              stroke="#109e9b"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.path
              d="M100 320 C250 280, 350 340, 500 200 S650 80, 740 280"
              fill="none"
              stroke="#109e9b"
              strokeWidth="1"
              strokeOpacity="0.5"
              strokeDasharray="3 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, delay: 0.2 }}
            />
          </svg>

          {floatingIcons.map((item) => (
            <motion.div
              key={item.x + item.y}
              className="absolute hidden md:flex w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm items-center justify-center"
              style={{ left: item.x, top: item.y }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                delay: item.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <item.Icon className="w-4 h-4 text-[#109e9b]" strokeWidth={1.75} />
            </motion.div>
          ))}

          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-5">
              Building the Future,{' '}
              <span className="italic font-serif text-[#109e9b]">One Solution at a Time.</span>
            </h2>
            <p className="text-gray-500 font-poppins max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you're looking for custom software or exploring our own technology solutions,
              XenTek is committed to engineering digital experiences that create meaningful impact.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="bg-xentek-dark text-white px-8 py-3.5 rounded-full font-medium font-poppins text-sm hover:bg-[#109e9b] transition-all duration-300 shadow-lg shadow-xentek-dark/10"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="bg-white text-xentek-dark border border-gray-200 px-8 py-3.5 rounded-full font-medium font-poppins text-sm hover:border-xentek-dark transition-all duration-300"
              >
                Contact XenTek
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
