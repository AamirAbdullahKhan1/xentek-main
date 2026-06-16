import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-[#f4f6f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 text-teal-800 text-sm font-semibold mb-6">
          CORE VALUES
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-xentek-dark leading-[1.1] mb-6 tracking-tight">
              Engineering the next digital <br />
              <span className="italic text-xentek-accent font-serif">frontier.</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-8 max-w-lg">
              We bridge the gap between abstract architectures and high-performance technical execution. 
              Founded on the principle of pragmatic clarity, we build tools that empower the world's most 
              ambitious teams.
            </p>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-xentek-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-xentek-accent transition-all duration-300 shadow-lg shadow-xentek-dark/10"
            >
              Our Roadmap <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-xentek-dark border border-gray-100">
               {/* Image placeholder */}
               <div className="absolute inset-0 bg-gradient-to-tr from-xentek-dark to-teal-900 opacity-90" />
               <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full border border-white/20 rounded-xl relative flex items-center justify-center">
                    <span className="text-white/20 text-3xl font-bold tracking-widest">XenTek Team</span>
                  </div>
               </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl shadow-teal-900/10 border border-gray-100 z-10"
            >
               <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Performance SLA</div>
               <div className="text-4xl font-bold text-xentek-dark mb-1">99.8%</div>
               <div className="text-sm text-gray-500">unwavering uptime, <br/> 3 years straight.</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
