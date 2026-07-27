import { motion } from 'framer-motion';
import { Bot, LayoutDashboard, Compass } from 'lucide-react';

const focuses = [
  {
    title: 'AI Solutions',
    desc: 'Building intelligent assistants and automation platforms for modern businesses.',
    Icon: Bot,
    visual: (
      <svg viewBox="0 0 160 90" className="w-full h-auto" aria-hidden>
        <circle cx="80" cy="45" r="28" fill="none" stroke="#109e9b" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="80" cy="45" r="16" fill="none" stroke="#109e9b" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="80" cy="45" r="5" fill="#109e9b" fillOpacity="0.5" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const r = 28;
          const rad = (deg * Math.PI) / 180;
          const x = 80 + r * Math.cos(rad);
          const y = 45 + r * Math.sin(rad);
          return <circle key={deg} cx={x} cy={y} r="2.5" fill="#109e9b" fillOpacity="0.4" />;
        })}
      </svg>
    ),
  },
  {
    title: 'Business Platforms',
    desc: 'Creating scalable SaaS products designed to simplify complex operations.',
    Icon: LayoutDashboard,
    visual: (
      <svg viewBox="0 0 160 90" className="w-full h-auto" aria-hidden>
        <rect x="20" y="20" width="50" height="50" rx="6" fill="none" stroke="#109e9b" strokeOpacity="0.3" strokeDasharray="4 3" />
        <rect x="80" y="28" width="55" height="18" rx="4" fill="#109e9b" fillOpacity="0.08" stroke="#109e9b" strokeOpacity="0.25" />
        <rect x="80" y="54" width="35" height="18" rx="4" fill="#109e9b" fillOpacity="0.12" stroke="#109e9b" strokeOpacity="0.25" />
        <rect x="28" y="28" width="34" height="10" rx="2" fill="#109e9b" fillOpacity="0.2" />
        <rect x="28" y="44" width="24" height="10" rx="2" fill="#109e9b" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    title: 'Digital Innovation',
    desc: "Continuously exploring emerging technologies to solve tomorrow's problems.",
    Icon: Compass,
    visual: (
      <svg viewBox="0 0 160 90" className="w-full h-auto" aria-hidden>
        <path d="M30 70 L80 20 L130 70" fill="none" stroke="#109e9b" strokeOpacity="0.25" strokeWidth="1.25" />
        <path d="M50 70 L80 35 L110 70" fill="none" stroke="#109e9b" strokeOpacity="0.4" strokeWidth="1.25" />
        <circle cx="80" cy="45" r="8" fill="none" stroke="#109e9b" strokeOpacity="0.45" />
        <circle cx="80" cy="45" r="3" fill="#109e9b" fillOpacity="0.5" />
      </svg>
    ),
  },
];

export const FutureVision = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[14px] font-figtree font-bold tracking-[0.2em] uppercase text-[#109e9b] mb-3"
          >
            Where we're headed
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-figtree font-bold text-xentek-dark tracking-normal"
          >
            Future Vision
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {focuses.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-[#109e9b]/5 hover:border-[#109e9b]/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#109e9b]/[0.04] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.visual}
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#109e9b]/10 flex items-center justify-center mb-4">
                <item.Icon className="w-6 h-6 text-[#109e9b]" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold font-figtree text-xentek-dark tracking-normal mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-poppins leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
