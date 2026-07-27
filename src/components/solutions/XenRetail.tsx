import { motion } from 'framer-motion';
import { Lock, Layers, BarChart3, Boxes } from 'lucide-react';

const BlueprintVisual = () => (
  <div className="relative w-full min-h-[380px] md:min-h-[460px] overflow-hidden rounded-2xl bg-[#f4f7f8] border border-gray-100">
    {/* Blueprint grid */}
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          'linear-gradient(#109e9b22 1px, transparent 1px), linear-gradient(90deg, #109e9b22 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />

    {/* Soft glow architecture */}
    <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#109e9b]/10 blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#109e9b]/8 blur-3xl" />

    {/* Blurred faux dashboard */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="absolute inset-6 md:inset-10 rounded-xl border border-[#109e9b]/15 bg-white/40 backdrop-blur-[2px] overflow-hidden"
      style={{ filter: 'blur(2.5px)' }}
    >
      <div className="h-9 border-b border-[#109e9b]/10 flex items-center gap-2 px-4">
        <div className="w-2 h-2 rounded-full bg-[#109e9b]/40" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="ml-4 h-2 w-24 rounded bg-[#109e9b]/20" />
      </div>
      <div className="p-4 grid grid-cols-3 gap-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-16 rounded-lg bg-[#109e9b]/[0.07] border border-[#109e9b]/10" />
        ))}
        <div className="col-span-2 h-28 rounded-lg bg-[#109e9b]/[0.05] border border-dashed border-[#109e9b]/25" />
        <div className="h-28 rounded-lg bg-white/50 border border-[#109e9b]/10" />
      </div>
    </motion.div>

    {/* Wireframe / architecture lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
      <motion.rect
        x="12%"
        y="18%"
        width="30%"
        height="22%"
        rx="8"
        fill="none"
        stroke="#109e9b"
        strokeOpacity="0.35"
        strokeDasharray="6 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />
      <motion.path
        d="M20 80 L80 40 L140 90"
        stroke="#109e9b"
        strokeOpacity="0.25"
        strokeWidth="1"
        fill="none"
        transform="translate(40, 60) scale(1.4)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
    </svg>

    {/* Locked modules */}
    {[
      { Icon: Lock, label: 'Inventory', top: '18%', left: '62%' },
      { Icon: BarChart3, label: 'Analytics', top: '48%', left: '70%' },
      { Icon: Boxes, label: 'Workflows', top: '68%', left: '52%' },
      { Icon: Layers, label: 'Modules', top: '28%', left: '12%' },
    ].map((m, i) => (
      <motion.div
        key={m.label}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.08 }}
        className="absolute flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 backdrop-blur border border-gray-100 shadow-sm"
        style={{ top: m.top, left: m.left }}
      >
        <m.Icon className="w-3.5 h-3.5 text-[#109e9b]" strokeWidth={1.75} />
        <span className="text-[11px] font-semibold text-gray-600">{m.label}</span>
        <Lock className="w-3 h-3 text-gray-300" />
      </motion.div>
    ))}

    <div className="absolute inset-x-0 bottom-6 flex justify-center z-10">
      <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-gray-100 text-xs font-semibold text-gray-500 tracking-wide shadow-sm">
        Currently Under Development
      </span>
    </div>
  </div>
);

export const XenRetail = () => {
  return (
    <section id="xenretail" className="py-20 md:py-28 bg-[#ffff] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-figtree font-bold tracking-wider uppercase border border-amber-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Coming Soon
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[13px] text-gray-500 font-medium font-figtree tracking-wide"
          >
            Retail Technology · SaaS · Business Intelligence
          </motion.p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-xentek-dark tracking-tight mb-10"
        >
          Featured Future Solution —{' '}
          <span className="text-[#109e9b]">XenRetail OS</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <BlueprintVisual />

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-xentek-dark tracking-tight mb-4">
              XenRetail OS
            </h3>
            <p className="text-gray-500 font-figtree text-[15px] md:text-[18px] leading-relaxed mb-4">
              XenRetail OS is a next-generation retail operating platform designed to help businesses
              streamline operations through intelligent automation, inventory management, AI-powered
              analytics, customer insights, and unified digital workflows.
            </p>
            <p className="text-gray-500 font-figtree text-[15px] md:text-[18px] leading-relaxed mb-8">
              Built to simplify everyday retail operations while providing actionable business
              intelligence for sustainable growth.
            </p>
            <button
              type="button"
              disabled
              title='Coming Soon!'
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-xentek-dark/90 text-white text-sm font-medium font-figtree cursor-not-allowed opacity-90"
            >
              <Lock className="w-3.5 h-3.5 opacity-70" />
              Launching Soon
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
