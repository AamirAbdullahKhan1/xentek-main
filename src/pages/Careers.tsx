import { motion } from 'framer-motion';
import { Rocket, Briefcase, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Careers = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-xentek-dark relative overflow-hidden pt-2">
      {/* Background ambient light effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xentek-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-10"
        >
          <div className="p-5 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl">
            <Briefcase className="w-14 h-14 text-xentek-accent" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white font-figtree mb-6 tracking-tight"
        >
          Join Our <span className="text-xentek-accent">Team</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 font-figtree mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We're working hard behind the scenes to prepare our careers portal. Soon, you'll be able to explore exciting opportunities to build the future of technology and design with XenTek.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <Rocket className="w-5 h-5 text-xentek-accent" />
            <span className="text-gray-300 font-figtree font-medium tracking-wide">Portal Coming Soon</span>
          </div>
          
          <Link 
            to="/contact" 
            className="group flex items-center gap-3 px-8 py-4 bg-xentek-accent hover:bg-xentek-accent/90 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(24,160,135,0.3)] hover:shadow-[0_0_30px_rgba(24,160,135,0.5)] font-figtree font-medium tracking-wide"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Contact Us Meanwhile</span>
          </Link>
        </motion.div>
      </div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};
