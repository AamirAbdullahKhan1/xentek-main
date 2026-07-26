import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  FileText,
  Map,
  Code2,
  Rocket,
  HeartHandshake,
  Flag,
  CircleCheck,
} from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'Align on goals, constraints, and success metrics.',
    Icon: Phone,
  },
  {
    num: '02',
    title: 'Proposal',
    desc: 'Transparent scope, timeline, and investment breakdown.',
    Icon: FileText,
  },
  {
    num: '03',
    title: 'Planning',
    desc: 'Architecture, milestones, and delivery roadmap.',
    Icon: Map,
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Iterative builds with continuous visibility.',
    Icon: Code2,
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Hardened deploy, QA, and go-live support.',
    Icon: Rocket,
  },
  {
    num: '06',
    title: 'Support',
    desc: 'Monitoring, iteration, and long-term partnership.',
    Icon: HeartHandshake,
  },
];

const ProgressLine = ({ progress }: { progress: MotionValue<number> }) => (
  <div className="relative h-[3px] w-full rounded-full overflow-hidden bg-gray-200/80">
    <motion.div
      className="absolute inset-y-0 left-0 rounded-full origin-left"
      style={{
        scaleX: progress,
        background: 'linear-gradient(90deg, #052222, #18a087, #052222)',
      }}
    />
    <motion.div
      className="absolute inset-0"
      style={{ scaleX: progress, transformOrigin: 'left' }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  </div>
);

const TimelineCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = step.Icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative flex-1 min-w-0"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="group relative bg-white rounded-2xl border border-gray-100 p-5 text-center h-full shadow-sm hover:shadow-lg hover:shadow-teal-900/5 hover:border-teal-100 transition-all duration-300"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.15 + index * 0.12, type: 'spring', stiffness: 400 }}
            className="w-8 h-8 rounded-full bg-xentek-dark text-white text-xs font-bold flex items-center justify-center shadow-md shadow-teal-900/20 ring-4 ring-white"
          >
            {index + 1}
          </motion.div>
        </div>

        <div className="mt-4 mb-3 flex justify-center">
          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-teal-600" strokeWidth={1.75} />
          </div>
        </div>
        <h3 className="text-sm font-bold text-xentek-dark mb-1.5 tracking-tight">{step.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed font-poppins">{step.desc}</p>
      </motion.div>
    </motion.div>
  );
};

export const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 85%', 'end 40%'],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-teal-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-xentek-accent mb-4"
          >
            <Flag className="w-3.5 h-3.5" />
            Start → End
            <CircleCheck className="w-3.5 h-3.5" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-3"
          >
            Your Project Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-gray-500 font-poppins max-w-md mx-auto"
          >
            A clear path from first conversation to lasting partnership — scroll to watch it unfold.
          </motion.p>
        </div>

        {/* Start / End labels */}
        <div className="hidden md:flex justify-between items-center max-w-5xl mx-auto mb-2 px-2">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-teal-600"
          >
            Start
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-teal-600"
          >
            End
          </motion.span>
        </div>

        {/* Desktop workflow */}
        <div className="hidden md:block relative max-w-5xl mx-auto pt-8 pb-4">
          <div ref={lineRef} className="absolute top-[2.15rem] left-[8%] right-[8%] z-0">
            <ProgressLine progress={lineProgress} />
          </div>
          <div className="relative z-10 flex gap-3 lg:gap-4">
            {steps.map((step, i) => (
              <TimelineCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile vertical workflow */}
        <div className="md:hidden relative max-w-sm mx-auto mt-10">
          <div className="absolute left-[1.35rem] top-4 bottom-4 w-[2px] bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-xentek-dark to-xentek-accent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              style={{ height: '100%' }}
            />
          </div>
          <div className="space-y-5">
            {steps.map((step, i) => {
              const Icon = step.Icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex gap-4 pl-1"
                >
                  <div className="relative z-10 w-11 h-11 rounded-full bg-xentek-dark text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-md ring-4 ring-white">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-teal-600" />
                      <h3 className="font-bold text-xentek-dark text-sm">{step.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 font-poppins leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
