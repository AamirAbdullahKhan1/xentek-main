import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Code2, Zap, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import clientGuideImg from '../../assets/XenTek Client Guide.png';

export const Process = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 75%", "center center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why XenTek Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black font-bold text-xentek-dark mb-6 tracking-tight">Why Xen<span className='text-xentek-accent'>Tek</span>?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>

        {/* Why XenTek Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Client Guide Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="relative w-full flex items-center justify-center p-2 sm:p-6"
          >
            {/* Decorative background blob */}
            <motion.div 
              animate={{ 
                rotate: [0, 3, -3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-teal-100/60 to-emerald-50/60 rounded-[3rem] -z-10 blur-xl"
            />
            
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img 
                src={clientGuideImg} 
                alt="XenTek Client Guide"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold text-xentek-dark mb-6 leading-tight">
              Engineering with <br/>
              <span className="text-transparent italic font-serif bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                Purpose & Precision
              </span>
            </h3>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              We bridge the gap between abstract ideas and engineering reality. 
              Our focus is unwavering: delivering scalable, secure, and highly 
              performant solutions that drive measurable business impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -5 }} className="group p-4 -m-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-teal-100/50">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Unwavering Integrity</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every process is transparent, secure, and controlled entirely by our expert team.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="group p-4 -m-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100/50">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Practical Engineering</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We build what you actually need to scale, avoiding unnecessary trends and bloated code.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="group p-4 -m-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-purple-100/50">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Reliable ROI</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Projects architected with long-term maintenance and tangible business value at the core.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="group p-4 -m-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-emerald-100/50">
                  <Code2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Flawless Specs</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Zero templates. Every single project is custom-engineered from the ground up.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Our Technical Process */}
        <div className="mt-40 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-xentek-dark mb-4">Our Technical Process</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A systematic, transparent approach from concept to deployment.
            </p>
          </motion.div>
        </div>

        <div ref={processRef} className="relative max-w-6xl mx-auto pb-5">
          {/* Animated Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[12%] w-[76%] h-[2px] bg-gray-100 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600"
              style={{
                width: "100%",
                scaleX: pathLength,
                transformOrigin: "left"
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer relative z-10">
            {[
              { step: '01', title: 'Discover', desc: 'Deep-dive requirements gathering & alignment.', icon: <ArrowRight className="w-5 h-5"/>, color: 'text-blue-500', bg: 'bg-blue-50' },
              { step: '02', title: 'Design', desc: 'UX/UI prototyping & system architecture.', icon: <ArrowRight className="w-5 h-5"/>, color: 'text-purple-500', bg: 'bg-purple-50' },
              { step: '03', title: 'Develop', desc: 'Modular, scalable custom code generation.', icon: <ArrowRight className="w-5 h-5"/>, color: 'text-teal-500', bg: 'bg-teal-50' },
              { step: '04', title: 'Deliver', desc: 'Deployment, optimization & ongoing support.', icon: <CheckCircle2 className="w-5 h-5"/>, color: 'text-emerald-500', bg: 'bg-emerald-50' }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                className="relative group"
              >
                {/* Step indicator */}
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <span className={`text-xl font-black ${item.color}`}>
                    {item.step}
                  </span>
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 rounded-2xl ${item.bg} opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300 scale-110 blur-md`} />
                </div>

                {/* Content Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center relative z-10 group-hover:-translate-y-1 hover:border-teal-100">
                  <div className={`w-10 h-10 mx-auto rounded-full ${item.bg} flex items-center justify-center mb-4 ${item.color}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Mobile connecting line */}
                {i < 3 && (
                  <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-teal-200 to-transparent mx-auto my-2 opacity-50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


