import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Share Your Vision',
    desc: 'Submit your project idea through our inquiry form. No need for a polished brief — a rough idea is perfectly fine.',
    color: '#109e9b',
  },
  {
    number: '02',
    title: 'Discovery Meeting',
    desc: "We'll schedule a call to discuss your goals, requirements, and expectations in depth.",
    color: '#0d8a87',
  },
  {
    number: '03',
    title: 'Proposal & Roadmap',
    desc: 'Receive a tailored development plan, detailed timeline, and transparent quotation.',
    color: '#0b7875',
  },
  {
    number: '04',
    title: 'Development Begins',
    desc: 'Your project moves into design and engineering with regular updates and collaborative checkpoints.',
    color: '#097062',
  },
  {
    number: '05',
    title: 'Final Review & Handoff',
    desc: 'We walk through the complete project together, gather your feedback, and officially launch your product.',
    color: '#076050',
  },
];

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  isLast: boolean;
}

const StepCard = ({ step, index, isLast }: StepCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative flex gap-6 sm:gap-8">
      {/* ── Vertical connector ── */}
      <div className="flex flex-col items-center gap-0">
        {/* Number circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white font-bold font-figtree text-lg shadow-lg z-10"
          style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`, boxShadow: `0 8px 24px ${step.color}30` }}
        >
          {step.number}
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 opacity-0"
            style={{ borderColor: step.color }}
            animate={inView ? { opacity: [0, 0.5, 0], scale: [1, 1.3, 1.3] } : {}}
            transition={{ delay: index * 0.18 + 0.4, duration: 1.2, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Connector line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.18 + 0.3, duration: 0.55, ease: 'easeOut' }}
            className="mt-2 w-0.5 flex-1 min-h-[60px] rounded-full origin-top"
            style={{ background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1]?.color ?? step.color}55)` }}
          />
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.18 + 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ x: 4 }}
        className="group mb-10 flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#109e9b]/25 hover:shadow-md hover:shadow-[#109e9b]/8 cursor-default"
      >
        <div>
          <h3 className="font-bold font-figtree text-gray-900 text-lg mb-1">{step.title}</h3>
          <p className="text-sm text-gray-500 font-poppins leading-relaxed">{step.desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

export const ProcessTimeline = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — heading */}
          <div ref={headRef} className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#109e9b]/20 bg-[#109e9b]/[0.07] px-4 py-1.5 text-xs font-bold font-figtree tracking-[0.16em] uppercase text-[#109e9b] mb-5"
            >
              Our Process
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl font-bold font-figtree text-gray-900 leading-tight mb-5"
            >
              What Happens{' '}
              <span style={{ color: '#109e9b' }}>Next?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="text-base text-gray-500 font-poppins leading-relaxed max-w-md"
            >
              After you reach out, here's exactly what to expect — a clear, structured journey from first contact to launch day.
            </motion.p>

            {/* Decorative teal box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.55 }}
              className="mt-8 rounded-2xl border border-[#109e9b]/15 bg-gradient-to-br from-[#109e9b]/[0.06] to-teal-50/40 p-6"
            >
              <p className="text-sm font-poppins text-gray-600 leading-relaxed italic">
                "XenTek doesn't just take orders — we partner with you to understand your vision,
                challenge assumptions, and engineer solutions that truly deliver results."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-[#109e9b]/20 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.5L6 8.875L2.91 10.5L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#109e9b" />
                  </svg>
                </div>
                <span className="text-xs font-semibold font-figtree text-[#109e9b]">XenTek Engineering Philosophy</span>
              </div>
            </motion.div>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
