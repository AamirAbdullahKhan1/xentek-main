import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import type { MotionValue, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Search, Compass, Code2, Rocket, ShieldCheck, Layers, Zap, CheckCircle2 } from 'lucide-react';
import clientGuideImg from '../../assets/XenTek Client Guide.png';

/* ─────────────────────────────────────────────
   Process step data
───────────────────────────────────────────── */
const steps = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Deep-dive requirements gathering & alignment to ensure every technical detail matches your vision.',
    Icon: Search,
    accent: '#3b82f6',       // blue-500
    accentLight: '#eff6ff',  // blue-50
    accentMid: '#bfdbfe',    // blue-200
  },
  {
    step: '02',
    title: 'Design',
    desc: 'UX/UI prototyping & system architecture that prioritizes modularity and user-centric logic.',
    Icon: Compass,
    accent: '#8b5cf6',
    accentLight: '#f5f3ff',
    accentMid: '#ddd6fe',
  },
  {
    step: '03',
    title: 'Develop',
    desc: 'Modular, scalable custom code generation utilizing modern engineering practices and clean architecture.',
    Icon: Code2,
    accent: '#14b8a6',
    accentLight: '#f0fdfa',
    accentMid: '#99f6e4',
  },
  {
    step: '04',
    title: 'Deliver',
    desc: 'Deployment, optimization & ongoing support to ensure your product performs at its absolute peak.',
    Icon: Rocket,
    accent: '#10b981',
    accentLight: '#ecfdf5',
    accentMid: '#a7f3d0',
  },
];

/* ─────────────────────────────────────────────
   Animated Gradient Line (Desktop)
   Loops blue→white→blue from left to right
───────────────────────────────────────────── */
const AnimatedLine = ({ progress }: { progress: MotionValue<number> }) => {
  // scaleX grows as user scrolls into the section
  return (
    <div className="relative h-[3px] w-full rounded-full overflow-visible">
      {/* Track */}
      <div className="absolute inset-0 bg-gray-100 rounded-full" />

      {/* Scroll-reveal overlay */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          scaleX: progress,
          transformOrigin: 'left',
          background: 'linear-gradient(90deg, #3b82f6, #18a087, #3b82f6)',
        }}
      />

      {/* Looping shimmer – runs independently of scroll */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          scaleX: progress,
          transformOrigin: 'left',
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Vertical animated line segment (Mobile)
───────────────────────────────────────────── */
const MobileConnector = ({ isVisible }: { isVisible: boolean }) => (
  <div className="relative w-[3px] h-16 mx-auto my-1 rounded-full overflow-hidden bg-gray-100">
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        background: 'linear-gradient(180deg, #3b82f6, #18a087)',
      }}
      initial={{ scaleY: 0, transformOrigin: 'top' }}
      animate={{ scaleY: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
    {/* shimmer */}
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
        backgroundSize: '100% 200%',
      }}
      animate={{ backgroundPosition: ['0% 200%', '0% -200%'] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

/* ─────────────────────────────────────────────
   Single Step Card
───────────────────────────────────────────── */
const StepCard = ({
  item,
  index,
  isMobile = false,
}: {
  item: (typeof steps)[0];
  index: number;
  isMobile?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const variants: Variants = {
    hidden: isMobile
      ? { opacity: 0, x: -40 }
      : { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay: isMobile ? index * 0.15 : index * 0.18,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative group cursor-pointer"
      style={{ flex: isMobile ? undefined : '1 1 0' }}
    >
      {/* Glow background on hover */}
      <motion.div
        className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
        style={{ background: `radial-gradient(ellipse at center, ${item.accentMid}60, transparent 70%)` }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center h-full overflow-hidden"
        style={{
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
        }}
      >
        {/* Inner border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `inset 0 0 0 1.5px ${item.accent}40` }}
        />

        {/* Step badge */}
        <div className="relative mb-5 flex justify-center">
          <motion.div
            className="relative w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: item.accentLight, border: `1.5px solid ${item.accentMid}` }}
            whileHover={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.5 }}
          >
            <item.Icon className="w-7 h-7" style={{ color: item.accent }} strokeWidth={1.8} />

            {/* Step number pill */}
            <div
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow"
              style={{ background: item.accent }}
            >
              {item.step}
            </div>
          </motion.div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">{item.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>

        {/* Bottom accent bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 80%', 'center 50%'],
  });

  // Map scroll progress to line reveal
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Mobile visibility tracker
  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileInView = useInView(mobileRef, { once: true, margin: '-40px' });

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Why XenTek Header ────────────────────── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-xentek-dark mb-6 tracking-tight">
              Why Xen<span className="text-xentek-accent">Tek</span>?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto rounded-full mb-8" />
          </motion.div>
        </div>

        {/* ── Why XenTek Grid ──────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

          {/* Client Guide Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
            className="relative w-full flex items-center justify-center p-2 sm:p-6"
          >
            <motion.div
              animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            transition={{ duration: 0.8, type: 'spring', bounce: 0.2, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold text-xentek-dark mb-6 leading-tight">
              Engineering with <br />
              <span className="text-transparent italic font-serif bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                Purpose &amp; Precision
              </span>
            </h3>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              We bridge the gap between abstract ideas and engineering reality.
              Our focus is unwavering: delivering scalable, secure, and highly
              performant solutions that drive measurable business impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { Icon: ShieldCheck, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100/50', title: 'Unwavering Integrity', desc: 'Every process is transparent, secure, and controlled entirely by our expert team.' },
                { Icon: Layers, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100/50', title: 'Practical Engineering', desc: 'We build what you actually need to scale, avoiding unnecessary trends and bloated code.' },
                { Icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100/50', title: 'Reliable ROI', desc: 'Projects architected with long-term maintenance and tangible business value at the core.' },
                { Icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100/50', title: 'Flawless Specs', desc: 'Zero templates. Every single project is custom-engineered from the ground up.' },
              ].map(({ Icon, color, bg, border, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -5 }}
                  className="group p-4 -m-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border ${border}`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Our Technical Process Header ─────────── */}
        <div className="mt-40 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-xentek-dark mb-4">
              Our Technical Process
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A systematic, transparent approach from concept to deployment, engineered for excellence.
            </p>
          </motion.div>
        </div>

        {/* ── DESKTOP Layout (lg+) ─────────────────── */}
        <div ref={sectionRef} className="hidden lg:block relative max-w-5xl mx-auto pb-10">

          {/* Connecting line — vertically centered on the icon badges, behind them */}
          <div ref={lineRef} className="absolute z-0" style={{ top: '2.1rem', left: 'calc(12.5% + 2.5rem)', right: 'calc(12.5% + 2.5rem)' }}>
            <AnimatedLine progress={lineProgress} />
          </div>

          {/* Cards row */}
          <div className="relative z-10 flex gap-6">
            {steps.map((item, i) => (
              <StepCard key={item.step} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ── MOBILE Layout (<lg) ──────────────────── */}
        <div ref={mobileRef} className="lg:hidden flex flex-col items-center max-w-sm mx-auto pb-10">
          {steps.map((item, i) => (
            <div key={item.step} className="w-full">
              <StepCard item={item} index={i} isMobile />
              {i < steps.length - 1 && (
                <MobileConnector isVisible={mobileInView} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
