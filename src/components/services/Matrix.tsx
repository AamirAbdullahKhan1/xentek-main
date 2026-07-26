import { motion } from 'framer-motion';
import { Zap, TrendingUp, Palette } from 'lucide-react';

const tracks = [
  {
    icon: Zap,
    tag: 'RAPID DEPLOYMENT',
    tagColor: 'text-teal-700 bg-teal-50 border-teal-200',
    title: 'MVP Build',
    description:
      'For early-stage startups that need to validate a market hypothesis fast — without compromising on architectural integrity or future scalability.',
    outcome: 'Ready-to-launch product with core features.',
    highlight: false,
  },
  {
    icon: TrendingUp,
    tag: 'PERFORMANCE FOCUS',
    tagColor: 'text-teal-300 bg-teal-900/50 border-teal-700',
    title: 'Scale Pack',
    description:
      'For growing companies hitting performance ceilings or preparing for significant user-growth milestones. We design for the traffic you\'re about to have.',
    outcome: '99.9% uptime and sub-100ms response times.',
    highlight: true,
  },
  {
    icon: Palette,
    tag: 'UI/UX AUDIT',
    tagColor: 'text-gray-600 bg-gray-100 border-gray-200',
    title: 'Design Sprint',
    description:
      'Established products that need a modern visual refresh or an alignment to contemporary user experience standards and accessibility requirements.',
    outcome: 'High-fidelity prototypes and complete design systems.',
    highlight: false,
  },
];

export const Matrix = () => {
  return (
    <section className="py-28 bg-xentek-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            Service Tracks
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Choose your path to excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-gray-400 text-base max-w-xl mx-auto font-poppins"
          >
            Every project is different. We've structured our services into three focused tracks so you can engage us at exactly the right level.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  track.highlight
                    ? 'bg-teal-500/10 border-2 border-teal-500/40 md:-translate-y-5 shadow-2xl shadow-teal-500/10'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {track.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-teal-500 rounded-full text-xs font-bold text-white tracking-widest uppercase shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${
                  track.highlight ? 'bg-teal-500/20' : 'bg-white/10'
                }`}>
                  <Icon size={18} className={track.highlight ? 'text-teal-400' : 'text-gray-400'} />
                </div>

                {/* Tag */}
                <div className={`inline-flex self-start font-figtree px-3 py-1 rounded-md text-[10px] font-bold tracking-[0.2em] uppercase border mb-5 ${track.tagColor}`}>
                  {track.tag}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{track.title}</h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-8 font-poppins ${track.highlight ? 'text-teal-100/70' : 'text-gray-400'}`}>
                  {track.description}
                </p>

                {/* Outcome */}
                <div className={`mt-auto pt-6 border-t ${track.highlight ? 'border-teal-500/20' : 'border-white/10'}`}>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 ${track.highlight ? 'text-teal-400' : 'text-gray-500'}">
                    <span className={track.highlight ? 'text-teal-400 font-figtree' : 'text-gray-300 font-figtree'}>Outcome</span>
                  </div>
                  <div className={`text-sm font-semibold ${track.highlight ? 'text-white font-poppins' : 'text-gray-300 font-poppins'}`}>
                    {track.outcome}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
