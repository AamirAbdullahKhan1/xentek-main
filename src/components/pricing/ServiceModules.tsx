import { motion } from 'framer-motion';
import { Monitor, Smartphone, Workflow, Bot, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Accent = 'teal' | 'cyan' | 'emerald';

const modules: {
  icon: typeof Monitor;
  title: string;
  desc: string;
  features: string[];
  price: string;
  cta: string;
  span: string;
  accent: Accent;
  featured: boolean;
}[] = [
  {
    icon: Monitor,
    title: 'Website Development',
    desc: 'High-performance marketing sites and conversion-focused web experiences.',
    features: ['Headless architecture', 'SEO optimized', 'CMS ready'],
    price: '₹5,000',
    cta: 'Select Module',
    span: 'md:col-span-5',
    accent: 'teal',
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Applications',
    desc: 'Scalable product builds — dashboards, portals, and native-feeling apps engineered for growth.',
    features: ['React / Next.js', 'Real-time sync', 'Auth & RBAC'],
    price: '₹25,000',
    cta: 'Select Module',
    span: 'md:col-span-7',
    accent: 'cyan',
    featured: true,
  },
  {
    icon: Workflow,
    title: 'Business Systems & Automation',
    desc: 'Internal tools, APIs, and workflow automation that remove operational friction.',
    features: ['API design', 'Integrations', 'Cloud infra'],
    price: '₹15,000',
    cta: 'Select Module',
    span: 'md:col-span-6',
    accent: 'emerald',
    featured: false,
  },
  {
    icon: Bot,
    title: 'AI & Custom Engineering',
    desc: 'Bespoke intelligence layers and non-standard product builds.',
    features: ['AI / ML hooks', 'Custom tooling', 'Full ownership'],
    price: 'Custom',
    cta: 'Request Quote',
    span: 'md:col-span-6',
    accent: 'teal',
    featured: false,
  },
];

const accentMap: Record<
  Accent,
  { iconBg: string; iconColor: string; btn: string }
> = {
  teal: {
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    btn: 'bg-xentek-dark hover:bg-xentek-accent',
  },
  cyan: {
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    btn: 'bg-xentek-dark hover:bg-xentek-accent',
  },
  emerald: {
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    btn: 'bg-xentek-dark hover:bg-xentek-accent',
  },
};

export const ServiceModules = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-teal-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-xentek-accent mb-5"
          >
            Modular Engagement
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-xentek-dark tracking-tight mb-3"
          >
            Service Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-poppins max-w-xl"
          >
            Mix and match capabilities. Each module is scoped independently — combine what you need.
          </motion.p>
        </div>

        {/* Bento: 12-col — featured is wider, never taller */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            const colors = accentMap[mod.accent];
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative ${mod.span}`}
              >
                <div
                  className={`relative h-full flex flex-col rounded-2xl border p-6 md:p-7 overflow-hidden transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-teal-900/5 ${
                    mod.featured
                      ? 'border-xentek-dark/15 bg-gradient-to-br from-white via-white to-teal-50/50'
                      : 'bg-white border-gray-100 hover:border-teal-100'
                  }`}
                >
                  {mod.featured && (
                    <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${colors.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-5 h-5 ${colors.iconColor}`} strokeWidth={1.75} />
                    </div>
                    {mod.featured && (
                      <span className="text-[10px] font-bold font-figtree tracking-widest uppercase px-2.5 py-1 rounded-full bg-xentek-dark text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-xentek-dark tracking-tight mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-poppins leading-relaxed mb-4">
                    {mod.desc}
                  </p>

                  <ul
                    className={`mb-5 ${
                      mod.featured
                        ? 'flex flex-wrap gap-x-4 gap-y-2'
                        : 'space-y-2'
                    }`}
                  >
                    {mod.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-gray-600 font-poppins"
                      >
                        <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-teal-600" strokeWidth={2.5} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[13px] uppercase tracking-wider text-gray-500 font-figtree font-medium mb-0.5">
                        {mod.price === 'Custom' ? 'Pricing' : 'Starts from'}
                      </p>
                      <p className="text-xl font-bold text-xentek-dark font-figtree">{mod.price}</p>
                    </div>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-1.5 text-white text-sm font-figtree font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${colors.btn}`}
                    >
                      {mod.cta}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
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
