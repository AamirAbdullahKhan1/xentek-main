import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-12 pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal-100/40 to-teal-50/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-xentek-dark leading-[1.1] mb-6 tracking-tight">
              Delivering Digital <br />
              <span className="italic text-xentek-accent font-serif">Mastery:</span> <br />
              Your Vision, <br />
              Our Expertise
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 font-poppins mb-8 max-w-2xl">
              Systems, applications, and custom engineering built with the exact precision of professional growth.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                className="bg-xentek-white text-black border-3 font-poppins px-8 py-3.5 rounded-full font-semibold tracking-wide hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all cursor-pointer duration-300 shadow-lg shadow-xentek-dark/10 flex items-center gap-2"
              >
                Start a Project
              </Link>
              <Link
                to="/services"
                className="bg-white text-xentek-dark font-poppins border-3 border-gray-200 px-8 py-3.5 rounded-full font-medium tracking-wide hover:border-xentek-dark transition-all duration-300 shadow-lg shadow-xentek-dark/10 flex items-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
