import { motion } from 'framer-motion';
import { Triangle, Globe, Sparkles } from 'lucide-react';

export const Evolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-xentek-dark mb-6 leading-tight">
              The Evolution of <br /> Precision
            </h2>
            <p className="text-gray-500 text-lg max-w-md">
              A chronological view of how we've defined and redefined technical performance over the years.
            </p>
          </div>
          <div className="mt-8 md:mt-0 text-7xl font-bold text-gray-200 tracking-tighter">
            EST. 2020
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-16">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 relative z-10"
            >
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-white">
                <div className="w-3 h-3 rounded-full bg-teal-300" />
              </div>
              <div className="flex-1 md:pl-8">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Phase 01 — 2020</div>
                <h3 className="text-2xl font-bold text-xentek-dark mb-4">The Genesis</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <p className="text-gray-500 leading-relaxed max-w-md flex-1">
                    XenTek was founded with one goal: to optimize technical debt. 
                    We started with three engineers dedicated to raw, backend-focused precision.
                  </p>
                  <div className="flex-1 bg-gray-100 rounded-xl aspect-video md:aspect-auto flex items-center justify-center border border-gray-200">
                    <Triangle className="text-gray-300" size={32} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row gap-8 relative z-10"
            >
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-white">
                <div className="w-3 h-3 rounded-full bg-teal-500" />
              </div>
              <div className="flex-1 md:pl-8">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Phase 02 — 2022</div>
                <h3 className="text-2xl font-bold text-xentek-dark mb-4">Global Scale</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <p className="text-gray-500 leading-relaxed max-w-md flex-1">
                    Shifted focus to B2B SaaS architecture, scaling teams globally. 
                    Our focus shifted to high-stakes infrastructure and zero-point latency systems.
                  </p>
                  <div className="flex-1 bg-gray-100 rounded-xl aspect-video md:aspect-auto flex items-center justify-center border border-gray-200">
                    <Globe className="text-gray-300" size={32} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row gap-8 relative z-10"
            >
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-white">
                <div className="w-3 h-3 rounded-full bg-xentek-dark" />
              </div>
              <div className="flex-1 md:pl-8">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Phase 03 — 2024</div>
                <h3 className="text-2xl font-bold text-xentek-dark mb-4">Intelligent Future</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <p className="text-gray-500 leading-relaxed max-w-md flex-1">
                    Today, we pioneer in technical precision, integrating advanced AI and automated QA to create 
                    unprecedented design synergy for the modern web.
                  </p>
                  <div className="flex-1 bg-gray-100 rounded-xl aspect-video md:aspect-auto flex items-center justify-center border border-gray-200">
                    <Sparkles className="text-gray-300" size={32} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

