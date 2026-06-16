import { motion } from 'framer-motion';
import { Target, Eye, Zap, Shield, Layout, Heart } from 'lucide-react';

export const MissionValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-xentek-dark text-white p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-teal-900 opacity-50">
              <Target size={180} />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 relative z-10 backdrop-blur-sm">
               <Target size={24} className="text-teal-200" />
            </div>
            <h3 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-teal-100 text-lg leading-relaxed relative z-10">
              To empower ambitious products with strictly scalable workflows, enabling 
              creators to build solid foundations in a dynamic digital ecosystem.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 p-12 rounded-3xl shadow-xl shadow-teal-900/5 relative overflow-hidden group hover:border-teal-200 transition-colors"
          >
            <div className="absolute -right-10 -top-10 text-gray-50 opacity-50 group-hover:text-teal-50 transition-colors">
              <Eye size={180} />
            </div>
            <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-8 relative z-10">
               <Eye size={24} className="text-gray-400 group-hover:text-teal-500 transition-colors" />
            </div>
            <h3 className="text-3xl font-bold text-xentek-dark mb-4 relative z-10">Our Vision</h3>
            <p className="text-gray-500 text-lg leading-relaxed relative z-10">
              To set the global standard for technical excellence, where every digital experience 
              is defined by clarity, reliability, and user-centric design.
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark mb-4">The Pillars of XenTek</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our values are the architectural steel within the code of every line we commit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Zap size={20} />, title: 'Practical Innovation', desc: 'Solving real-world problems with elegant, efficient solutions rather than chasing novelties.' },
            { icon: <Shield size={20} />, title: 'Unyielding Reliability', desc: 'Building systems designed to withstand the test of time and extreme performance demands.' },
            { icon: <Layout size={20} />, title: 'Thoughtful Design', desc: 'Believing that intuitive UX is fundamentally tied to robust technical architecture.' },
            { icon: <Heart size={20} />, title: 'Radical Integrity', desc: 'Transparent processes and honest communication form the bedrock of our client partnerships.' }
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{pillar.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
