import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Puzzle,
  Link2,
  Palette,
  Target,
  Gauge,
  Rocket,
  LifeBuoy,
} from 'lucide-react';

const factors = [
  {
    id: 'features',
    icon: Puzzle,
    label: 'Features',
    title: 'Feature Depth',
    impact: 'High',
    desc: 'Core flows, edge cases, and admin surfaces drive the majority of engineering hours. More polished UX and edge-case coverage increases investment.',
    weight: 30,
  },
  {
    id: 'integrations',
    icon: Link2,
    label: 'Integrations',
    title: 'Third-Party Integrations',
    impact: 'Medium',
    desc: 'Payments, CRMs, analytics, and legacy systems each add mapping, auth, and failure-handling work. Clean APIs keep this efficient.',
    weight: 15,
  },
  {
    id: 'design',
    icon: Palette,
    label: 'Design',
    title: 'Design & Experience',
    impact: 'Medium',
    desc: 'Custom design systems, motion, and accessibility audits raise quality — and cost — versus template-driven UIs.',
    weight: 15,
  },
  {
    id: 'scope',
    icon: Target,
    label: 'Scope',
    title: 'Project Scope',
    impact: 'Medium',
    desc: 'The defining lever. Clear boundaries, phased milestones, and prioritized backlogs keep quotes accurate and timelines predictable.',
    weight: 20,
  },
  {
    id: 'scale',
    icon: Gauge,
    label: 'Scale',
    title: 'Scale & Performance',
    impact: 'Minimal',
    desc: 'Concurrency targets, caching, and infra choices matter when you expect growth. Building for day-one traffic is cheaper than retrofitting later.',
    weight: 10,
  },
  {
    id: 'deployment',
    icon: Rocket,
    label: 'Deployment',
    title: 'Deployment & Ops',
    impact: 'Minimal',
    desc: 'CI/CD, environments, observability, and rollback strategy protect launches. Production-grade pipelines are an investment in sleep.',
    weight: 5,
  },
  {
    id: 'support',
    icon: LifeBuoy,
    label: 'Support',
    title: 'Ongoing Support',
    impact: 'Minimal',
    desc: 'Post-launch maintenance, monitoring, and iteration keep the product healthy. We scope retainers to match your risk tolerance.',
    weight: 5,
  },
];

export const CostFactors = () => {
  const [active, setActive] = useState(factors[3].id);
  const current = factors.find((f) => f.id === active) ?? factors[3];
  const ActiveIcon = current.icon;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #052222 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-3"
          >
            What Determines Project Cost?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-gray-500 font-poppins max-w-lg mx-auto"
          >
            Hover or tap a factor to see how it shapes your investment.
          </motion.p>
        </div>

        {/* Interactive orbit / node strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          {/* Connecting path */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-px -translate-y-1/2">
            <svg className="w-full h-8 -mt-4 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 8">
              <motion.path
                d="M0 4 Q 16.6 0, 33.3 4 T 66.6 4 T 100 4"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              <motion.path
                d="M0 4 Q 16.6 0, 33.3 4 T 66.6 4 T 100 4"
                fill="none"
                stroke="#18a087"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.2 }}
              />
            </svg>
          </div>

          <div className="relative flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-0 md:justify-between">
            {factors.map((factor, i) => {
              const Icon = factor.icon;
              const isActive = active === factor.id;
              const isCenter = factor.id === 'scope';
              return (
                <motion.button
                  key={factor.id}
                  type="button"
                  onClick={() => setActive(factor.id)}
                  onMouseEnter={() => setActive(factor.id)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative flex flex-col items-center gap-2 group focus:outline-none"
                  aria-pressed={isActive}
                >
                  <div
                    className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-xentek-dark border-xentek-dark text-white shadow-lg shadow-teal-900/25'
                        : 'bg-white border-gray-200 text-gray-500 group-hover:border-teal-300'
                    } ${isCenter && !isActive ? 'w-16 h-16 md:w-[4.5rem] md:h-[4.5rem]' : 'w-14 h-14'}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="cost-ring"
                        className="absolute -inset-1 rounded-full border border-teal-400/40"
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                      />
                    )}
                    <Icon className={`${isCenter ? 'w-6 h-6' : 'w-5 h-5'}`} strokeWidth={1.75} />
                  </div>
                  <span
                    className={`text-[11px] md:text-[13px] font-semibold font-figtree tracking-wide transition-colors ${
                      isActive ? 'text-xentek-dark' : 'text-gray-400'
                    }`}
                  >
                    {factor.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-gray-100 bg-gray-50/80 backdrop-blur p-6 md:p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4 md:w-56 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white border border-teal-100 flex items-center justify-center shadow-sm">
                  <ActiveIcon className="w-6 h-6 text-xentek-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-xentek-dark tracking-tight">{current.title}</h3>
                  <span className="inline-flex mt-1 text-[12px] font-bold font-figtree uppercase tracking-wider text-xentek-accent bg-teal-50 px-2 py-0.5 rounded-full">
                    Impact: {current.impact}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-gray-600 font-poppins text-sm md:text-base leading-relaxed mb-5">
                  {current.desc}
                </p>
                <div>
                  <div className="flex justify-between  font-figtree text-[12px] text-gray-500 mb-1.5 font-medium">
                    <span>Cost influence</span>
                    <span>{current.weight}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white border border-gray-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-xentek-dark to-xentek-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${current.weight}%` }}
                      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
