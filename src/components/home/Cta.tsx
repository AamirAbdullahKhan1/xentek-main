import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Cta = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-teal-100/40 to-teal-50/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-xentek-dark mb-10 tracking-tight"
        >
          Let's build something <br />
          <span className="italic text-xentek-accent font-serif">practical & impactful.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-xentek-dark text-white px-10 py-4 rounded-full font-medium hover:bg-xentek-accent transition-all duration-300 shadow-xl shadow-xentek-dark/10"
          >
            Start a Project
          </Link>
          <Link
            to="/contact"
            className="bg-white text-xentek-dark border border-gray-200 px-10 py-4 rounded-full font-medium hover:border-xentek-dark transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
