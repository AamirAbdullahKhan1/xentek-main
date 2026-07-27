import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

/* ─── animated connection lines in background ─── */
const AnimatedLine = ({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) => {
  const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="#109e9b"
      strokeWidth="1"
      strokeOpacity="0.25"
      strokeLinecap="round"
      strokeDasharray={len}
      strokeDashoffset={len}
      animate={{ strokeDashoffset: [len, 0, len] }}
      transition={{ duration: 3.5, delay, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
    />
  );
};

const NetworkBackground = () => {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return null;

  const nodes = [
    { cx: 60, cy: 80 }, { cx: 200, cy: 40 }, { cx: 340, cy: 110 }, { cx: 480, cy: 55 },
    { cx: 600, cy: 90 }, { cx: 120, cy: 170 }, { cx: 280, cy: 200 }, { cx: 440, cy: 160 }, { cx: 550, cy: 200 },
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [0, 5], [1, 6], [2, 7], [3, 4], [4, 8],
  ] as [number, number][];

  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full opacity-40"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 640 240"
    >
      {edges.map(([a, b], i) => (
        <AnimatedLine
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          delay={i * 0.4}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy} r="3.5"
          fill="#109e9b"
          fillOpacity="0.5"
          animate={{ r: [3.5, 5, 3.5] }}
          transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
};

export const BottomCta = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#052222] via-[#073a3a] to-[#052222]" />

      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,158,155,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,158,155,1) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Animated network */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <NetworkBackground />
      </div>

      {/* Teal glows */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-[#109e9b]/20 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#109e9b]/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#109e9b]/30 bg-[#109e9b]/15 px-4 py-1.5 text-xs font-bold font-figtree tracking-[0.16em] uppercase text-[#109e9b] mb-8"
        >
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
          Ready to Start?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold font-figtree text-white leading-[1.12] tracking-tight mb-6"
        >
          Your Vision Deserves{' '}
          <span
            className="relative"
            style={{
              background: 'linear-gradient(135deg, #109e9b, #40d9d5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Exceptional Engineering.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="text-lg text-white/65 font-poppins leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Every successful digital product begins with a conversation.
          Let's transform your ideas into impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/contact"
            onClick={(e) => { e.preventDefault(); scrollToForm(); }}
            className="group flex items-center gap-2.5 rounded-full bg-[#109e9b] px-8 py-3.5 text-white font-figtree font-semibold text-base tracking-wide shadow-xl shadow-[#109e9b]/30 transition-all duration-300 hover:bg-[#0d8a87] hover:shadow-2xl hover:shadow-[#109e9b]/40 hover:-translate-y-0.5"
          >
            Book a Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </Link>

        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-xs text-white/35 font-poppins"
        >
          No commitment required · Free initial consultation · Response within 24 hours
        </motion.p>
      </div>
    </section>
  );
};
