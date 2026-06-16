import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Alpha Stream',
    description: 'A real-time data visualization platform for high frequency trading.',
    tags: ['SERVICE', 'DASHBOARD'],
    color: 'bg-teal-700'
  },
  {
    title: 'EduLogic Pro',
    description: 'Scaling a custom learning management system for 50k+ users.',
    tags: ['SERVICE', 'WEB APP'],
    color: 'bg-slate-700'
  },
  {
    title: 'Nexus Inventory',
    description: 'Automated inventory synchronization across global warehouses.',
    tags: ['SERVICE', 'BACKEND'],
    color: 'bg-gray-200'
  }
];

export const Work = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark mb-4">Featured Work</h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              Foundational code set for high-stakes industries.
            </p>
          </div>
          <Link to="/portfolio" className="mt-4 md:mt-0 text-sm font-medium text-xentek-accent hover:text-teal-700 flex items-center gap-1 group">
            View all cases <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative ${project.color} flex items-center justify-center p-8 shadow-sm group-hover:shadow-xl transition-all duration-500`}>
                {/* Abstract mockup representation */}
                <div className="w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transform group-hover:scale-105 transition-transform duration-500 flex flex-col">
                   <div className="h-6 border-b border-white/10 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                   </div>
                   <div className="flex-1 p-4 flex gap-4">
                      <div className="w-1/4 h-full bg-white/5 rounded" />
                      <div className="w-3/4 flex flex-col gap-4">
                         <div className="h-1/3 bg-white/10 rounded" />
                         <div className="h-2/3 bg-white/5 rounded" />
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-semibold tracking-wider bg-teal-50 text-teal-700 rounded border border-teal-100">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
