import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

