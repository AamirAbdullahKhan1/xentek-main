import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const BottomCta = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl bg-xentek-light/60 border border-gray-100 px-8 py-12 md:px-16 md:py-14 text-center shadow-sm overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-50 rounded-full blur-3xl pointer-events-none" />

          <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-4">
            Let's Build Something{' '}
            <span className="italic text-xentek-accent font-serif">Exceptional</span>
          </h2>
          <p className="relative text-gray-500 font-poppins max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us what you're building. We'll respond with a clear path, timeline, and investment —
            no fluff, no guesswork.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="bg-xentek-dark text-white px-8 py-3.5 rounded-full font-medium font-poppins text-sm hover:bg-xentek-accent transition-all duration-300 shadow-lg shadow-xentek-dark/10"
            >
              Start Project Request
            </Link>
            <Link
              to="/contact"
              className="bg-white text-xentek-dark border border-gray-200 px-8 py-3.5 rounded-full font-medium font-poppins text-sm hover:border-xentek-dark transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
