import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, GitBranch, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Technical Discovery',
    description:
      'We deep dive into your requirements, existing infrastructure, and business goals to map out a clear, pragmatic technical direction. No fluff — just a solid plan.',
  },
  {
    icon: GitBranch,
    step: '02',
    title: 'Agile Iteration',
    description:
      'Development runs in transparent two-week sprints. You see real progress on our staging environment in real time and provide feedback that directly shapes the product.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch & Ongoing Support',
    description:
      'We don\'t just ship and leave. We manage deployment, monitor performance, and provide ongoing technical maintenance and scaling as your product grows.',
  },
];

export const Support = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Process */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                Our Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-xentek-dark leading-tight tracking-tight mb-16">
                How we support <br />
                <span className="italic text-xentek-accent font-serif">your mission.</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[22px] top-10 bottom-10 w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" />

              <div className="space-y-12">
                {steps.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                      className="flex gap-6 relative"
                    >
                      {/* Step indicator */}
                      <div className="w-11 h-11 rounded-full bg-xentek-dark flex items-center justify-center shrink-0 z-10 relative shadow-lg shadow-xentek-dark/20">
                        <Icon size={16} className="text-teal-400" />
                      </div>

                      <div className="pt-1.5">
                        <div className="text-[10px] font-bold text-gray-400 tracking-[0.25em] uppercase mb-1.5">
                          Step {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md font-poppins">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-xentek-dark p-10 shadow-2xl shadow-xentek-dark/30">
              {/* BG glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl" />

              <div className="relative">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Free Strategy Call
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                  Ready to engineer <br />your future?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-10 font-poppins">
                  Speak with our lead architects about your project requirements. You'll walk away with a
                  clear technical roadmap — no commitment required.
                </p>

                <Link
                  to="/contact"
                  className="group flex items-center justify-between w-full bg-white text-xentek-dark px-7 py-4 rounded-2xl font-bold text-sm hover:bg-teal-50 transition-colors duration-300 shadow-xl shadow-white/10 mb-6"
                >
                  Schedule Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                {/* Assurance row */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  Average response time under 24 hours
                </div>

                {/* Social proof */}
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  {[
                    { val: '100%', label: 'Custom code' },
                    { val: 'NDA', label: 'Protected' },
                    { val: '24/7', label: 'Support' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-lg font-bold text-white">{s.val}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
