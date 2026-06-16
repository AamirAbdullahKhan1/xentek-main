import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Support = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-xentek-dark mb-12">How we support your <br /> mission.</h2>
            
            <div className="space-y-10">
               {[
                  { step: '1', title: 'Technical Discovery', desc: 'We deep dive into your requirements, existing code, and business goals to map out a pragmatic direction.' },
                  { step: '2', title: 'Agile Iteration', desc: 'Development happens in transparent two-week sprints. You see the progress in real-time on our staging environment.' },
                  { step: '3', title: 'Launch & Support', desc: 'We don\'t just ship and leave. We manage deployment and provide ongoing technical maintenance and scaling.' }
               ].map((item, i) => (
                  <motion.div 
                     key={item.step}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex gap-6 relative"
                  >
                     {i !== 2 && (
                        <div className="absolute left-[23px] top-12 bottom-[-40px] w-px bg-gray-200" />
                     )}
                     <div className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-bold text-gray-400 shrink-0 z-10 relative">
                        {item.step}
                     </div>
                     <div className="pt-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* CTA Card */}
             <div className="bg-white rounded-[40px] p-12 shadow-2xl shadow-teal-900/10 border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-white -z-10" />
                
                <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-xs font-bold tracking-wider rounded-full uppercase mb-8">FREE STRATEGY CALL</div>
                
                <h3 className="text-4xl font-bold text-xentek-dark mb-6">Ready to engineer your future?</h3>
                <p className="text-gray-500 mb-10 text-sm">
                   Speak with our lead architects about your project requirements and get a technical roadmap.
                </p>
                
                <Link to="/contact" className="block w-full bg-xentek-dark text-white px-8 py-4 rounded-full font-medium hover:bg-teal-900 transition-colors mb-6 shadow-xl shadow-xentek-dark/10">
                   Schedule Consultation
                </Link>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                   <div className="w-2 h-2 rounded-full bg-green-500" />
                   Average response time: &lt; 24 hours
                </div>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
