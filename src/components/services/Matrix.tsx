import { motion } from 'framer-motion';

export const Matrix = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark mb-4">Strategic Service Matrix</h2>
          <p className="text-gray-500 text-sm tracking-wider uppercase">A framework for choosing your path to technical excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MVP Build */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-200 flex flex-col justify-between"
          >
            <div>
               <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold tracking-wider rounded uppercase mb-6">RAPID DEPLOYMENT</div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">MVP Build</h3>
               <p className="text-gray-500 text-sm leading-relaxed mb-12">
                 Perfect for early-stage startups needing market validation without compromising on architectural integrity.
               </p>
            </div>
            <div>
               <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Outcome</div>
               <div className="text-lg font-bold text-gray-900">Ready-to-launch product with core features.</div>
            </div>
          </motion.div>

          {/* Scale Pack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-xentek-dark rounded-3xl p-10 border border-teal-900 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-teal-900/20 transform md:-translate-y-4"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -z-10" />
            <div>
               <div className="inline-block px-3 py-1 bg-teal-900 border border-teal-700 text-teal-300 text-xs font-bold tracking-wider rounded uppercase mb-6">PERFORMANCE FOCUS</div>
               <h3 className="text-2xl font-bold text-white mb-4">Scale Pack</h3>
               <p className="text-teal-100/80 text-sm leading-relaxed mb-12">
                 For growing companies facing performance bottlenecks or preparing for significant traffic surges.
               </p>
            </div>
            <div>
               <div className="text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">Target</div>
               <div className="text-xl font-bold text-white">99.9% uptime and sub-100ms response times.</div>
            </div>
          </motion.div>

          {/* Design Sprint */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-10 border border-gray-200 flex flex-col justify-between"
          >
            <div>
               <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold tracking-wider rounded uppercase mb-6">UI/UX AUDIT</div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Sprint</h3>
               <p className="text-gray-500 text-sm leading-relaxed mb-12">
                 Established apps needing a modern refresh and alignment with contemporary user experience standards.
               </p>
            </div>
            <div>
               <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Outcome</div>
               <div className="text-lg font-bold text-gray-900">High-fidelity prototypes and design systems.</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

