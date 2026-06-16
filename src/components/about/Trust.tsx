import { motion } from 'framer-motion';
import { Database, TrendingUp, Globe, Layers } from 'lucide-react';

export const Trust = () => {
  return (
    <section className="py-24 bg-[#f4f6f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark">Engineering Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Dominance</h3>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Our engineers specialize in robust backend architecture and resilient frontend 
                systems designed for modern high-growth environments.
              </p>
            </div>
            <div className="mt-12 flex justify-end">
              <Database size={120} className="text-gray-100" />
            </div>
          </motion.div>

          {/* Retention Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-xentek-dark rounded-3xl p-10 text-white relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20">
               <TrendingUp size={80} />
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">85%</div>
              <h3 className="text-xl font-bold mb-2">Client Retention</h3>
            </div>
            <p className="text-teal-100 text-sm mt-8">
              A testament to the quality and reliability of our code.
            </p>
          </motion.div>

          {/* Global Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-teal-50 rounded-3xl p-10 relative overflow-hidden"
          >
             <div className="absolute -bottom-10 -right-10 text-teal-200/50">
               <Globe size={160} />
             </div>
             <h3 className="text-xl font-bold text-teal-900 mb-3 relative z-10">Global Infrastructure</h3>
             <p className="text-teal-700/80 text-sm relative z-10 max-w-[200px]">
               Deployments that scale up to cross-continental levels effortlessly.
             </p>
          </motion.div>

          {/* Ecosystem Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100 flex items-center justify-between"
          >
             <div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Ecosystem</h3>
               <p className="text-gray-500 max-w-sm leading-relaxed">
                 The intersecting absolute precision and solid systems, ensuring long term success.
               </p>
             </div>
             <div className="hidden sm:flex flex-col gap-2">
                <div className="w-16 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Layers className="text-gray-400" />
                </div>
                <div className="w-16 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <Database className="text-teal-500" />
                </div>
                <div className="w-16 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Globe className="text-gray-400" />
                </div>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
