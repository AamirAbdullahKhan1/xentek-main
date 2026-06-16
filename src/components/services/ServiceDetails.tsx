import { motion } from 'framer-motion';
import { Monitor, Smartphone, Server, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceDetails = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-32">
          
          {/* Service 1: Website Design & Dev */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="w-12 h-12 bg-xentek-dark rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-900/10">
                   <Monitor className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-xentek-dark mb-4">Website Design & Development</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                   Beyond aesthetics, we build high-performance business sites and landing pages 
                   that act as conversion engines. Every layout is responsive, ensuring maximum 
                   reach across all devices.
                </p>
                <div className="space-y-3">
                   {['Responsive & Engaging Architecture', 'SEO-Optimized Semantic Code', 'Conversion UX Optimization'].map(item => (
                      <div key={item} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
                         <div className="w-2 h-2 rounded-full bg-teal-500" />
                         <span className="text-sm font-medium text-gray-700">{item}</span>
                      </div>
                   ))}
                </div>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
             >
                <div className="aspect-[4/3] bg-teal-50 rounded-3xl border border-teal-100 p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
                   {/* Abstract dashboard graphic */}
                   <div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col p-4">
                      <div className="h-4 border-b border-gray-100 mb-4 flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-gray-200" />
                         <div className="w-2 h-2 rounded-full bg-gray-200" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 h-full">
                         <div className="col-span-1 border-r border-gray-50" />
                         <div className="col-span-2 space-y-4">
                            <div className="h-24 bg-gray-50 rounded" />
                            <div className="h-24 bg-gray-50 rounded" />
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Service 2: Application Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative"
             >
                <div className="aspect-[4/3] bg-xentek-dark rounded-3xl border border-teal-900 p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
                   {/* Abstract app graphic */}
                   <div className="w-full h-full bg-gray-900 rounded-xl shadow-sm border border-gray-800 flex flex-col p-4">
                      <div className="flex gap-4 h-1/2 mb-4">
                         <div className="flex-1 bg-white/5 rounded-lg border border-white/10" />
                         <div className="flex-1 bg-teal-500/10 rounded-lg border border-teal-500/20" />
                      </div>
                      <div className="h-1/2 bg-white/5 rounded-lg border border-white/10" />
                   </div>
                </div>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
             >
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-900/10">
                   <Smartphone className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-xentek-dark mb-4">Application Development</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                   Custom web apps and management dashboards built with scalable frameworks. 
                   We prioritize speed, security, and a frictionless user journey for your 
                   internal teams and external customers.
                </p>
                <div className="space-y-3">
                   {['React & Vue.js Ecosystems', 'Real-time Data Visualization', 'Progressive Web Apps (PWA)'].map(item => (
                      <div key={item} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
                         <div className="w-2 h-2 rounded-full bg-teal-500" />
                         <span className="text-sm font-medium text-gray-700">{item}</span>
                      </div>
                   ))}
                </div>
             </motion.div>
          </div>

          {/* Service 3: Backend Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                   <Server className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-xentek-dark mb-4">Backend Systems</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                   The engines under the hood. We design robust APIs, distributed database 
                   architectures, and cloud-native infrastructure that grows with your business needs.
                </p>
                <div className="bg-[#1f2028] p-6 rounded-xl border border-[#2e303a] font-mono text-sm text-gray-300">
                   <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                   </div>
                   <div className="text-purple-400">GET /api/v1/system/status</div>
                   <div className="text-blue-300">{`{`}</div>
                   <div className="pl-4">
                      <span className="text-teal-300">"uptime"</span>: <span className="text-green-300">"99.99%"</span>,<br />
                      <span className="text-teal-300">"latency"</span>: <span className="text-green-300">"12ms"</span>,<br />
                      <span className="text-teal-300">"nodes"</span>: <span className="text-orange-300">64</span>,<br />
                      <span className="text-teal-300">"status"</span>: <span className="text-green-300">"optimized"</span>
                   </div>
                   <div className="text-blue-300">{`}`}</div>
                </div>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
             >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-teal-900 rounded-3xl border border-teal-800 p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
                   {/* Abstract node network graphic */}
                   <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                         <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" className="text-teal-400" strokeWidth="0.5" />
                         <path d="M20,80 Q40,40 60,70 T100,60" fill="none" stroke="currentColor" className="text-teal-400" strokeWidth="0.5" />
                         <circle cx="10" cy="50" r="1.5" className="fill-teal-300" />
                         <circle cx="50" cy="50" r="2" className="fill-teal-300" />
                         <circle cx="90" cy="50" r="1.5" className="fill-teal-300" />
                         <circle cx="20" cy="80" r="1.5" className="fill-teal-300" />
                         <circle cx="60" cy="70" r="2" className="fill-teal-300" />
                      </svg>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Service 4: Custom Solutions */}
          <div className="bg-white rounded-3xl p-12 border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
             <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                   <div className="w-8 h-8 mx-auto border-2 border-teal-200 rounded-full mb-3" />
                   <div className="text-xs font-bold text-gray-500 tracking-wider">CREATION</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                   <div className="w-8 h-8 mx-auto border-2 border-teal-400 rounded-full mb-3" />
                   <div className="text-xs font-bold text-gray-500 tracking-wider">PROTOTYPES</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                   <div className="w-8 h-8 mx-auto border-2 border-teal-600 rounded-full mb-3" />
                   <div className="text-xs font-bold text-gray-500 tracking-wider">ENGINEERING</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                   <div className="w-8 h-8 mx-auto border-2 border-teal-800 rounded-full mb-3" />
                   <div className="text-xs font-bold text-gray-500 tracking-wider">DEPLOYMENT</div>
                </div>
             </div>
             
             <div className="flex-1">
                <div className="w-12 h-12 bg-[#8c5230] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                   <ShieldCheck className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-xentek-dark mb-4">Custom Solutions</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                   Have a unique vision? We specialize in bespoke product builds, creating specific 
                   tools tailored to non-traditional problems. No templates, no compromises - just 
                   pure engineering ability.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-xentek-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-900 transition-colors">
                   Request Custom Quote <ArrowRight size={16} />
                </Link>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

