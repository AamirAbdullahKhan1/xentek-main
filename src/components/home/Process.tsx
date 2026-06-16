import { motion } from 'framer-motion';

export const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why XenTek */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Using a placeholder gradient since we don't have the real image */}
            <div className="aspect-[4/3] bg-xentek-dark w-full relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-xentek-dark to-teal-900 opacity-90" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="grid grid-cols-3 gap-4 p-8 w-full h-full opacity-30">
                    <div className="col-span-2 bg-white/10 rounded border border-white/20" />
                    <div className="col-span-1 bg-white/10 rounded border border-white/20" />
                    <div className="col-span-3 bg-white/10 rounded border border-white/20" />
                 </div>
               </div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark mb-6">Why XenTek</h2>
            <p className="text-gray-500 text-lg mb-10">
              We bridge the gap between abstract ideas and engineering reality with a
              focus on integrity and impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">Unwavering Integrity</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every process is transparent, controlled entirely by us.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">Practical Engineering</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We build what you need, not just what's trendy. Focusing on ROI.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">Reliable ROI</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Projects are built with mainte-nance and real value at the core.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">Flawless Specs</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  No templates. Every project is engineered from the ground up.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Technical Process */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark">Our Technical Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discover', desc: 'Requirements gathered by our technical unit to ensure alignment.' },
            { step: '02', title: 'Design', desc: 'UX/UI prototyping with a focus on optimal user interaction flow.' },
            { step: '03', title: 'Develop', desc: 'Clean, modular code development following industry best practices.' },
            { step: '04', title: 'Deliver', desc: 'Deployment, optimization, and dedicated ongoing support.' }
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 relative overflow-hidden group hover:border-teal-100 transition-colors"
            >
              <div className="text-6xl font-black text-gray-50 mb-4 group-hover:text-teal-50 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

