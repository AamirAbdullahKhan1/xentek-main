import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/50 text-teal-800 text-sm font-semibold mb-6 uppercase tracking-wider">
          Core Engineering Services
        </div>
        
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-xentek-dark leading-[1.1] mb-6 tracking-tight"
          >
            Digital services built <br /> around real-world needs.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 mb-8 max-w-2xl"
          >
            We bridge the gap between complex engineering and intuitive user experiences. 
            XenTek provides technical solutions to solve business-level challenges through custom 
            software development.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

