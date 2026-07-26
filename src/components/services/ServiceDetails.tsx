import { motion } from 'framer-motion';
import { Monitor, Smartphone, Server, Cpu, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    icon: Monitor,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    accentColor: 'bg-teal-500',
    title: 'Website Design & Development',
    tagline: 'Convert visitors into customers.',
    description:
      'We craft high-performance, responsive websites that go beyond aesthetics — every layout, interaction, and pixel is engineered for measurable business impact. Built to load fast, rank well, and convert.',
    features: [
      'Responsive architecture for all devices',
      'SEO-optimized semantic markup',
      'Conversion-focused UX patterns',
      'CMS integration & custom builds',
    ],
    visual: 'website',
  },
  {
    id: '02',
    icon: Smartphone,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    accentColor: 'bg-indigo-500',
    title: 'Application Development',
    tagline: 'Complex problems, elegant solutions.',
    description:
      'Custom web applications and dashboards built with modern, scalable frameworks. Whether it\'s a customer portal, internal tool, or SaaS product — we prioritize speed, security, and frictionless user journeys.',
    features: [
      'React, Next.js & Vue.js ecosystems',
      'Real-time data & WebSocket integration',
      'Progressive Web App (PWA) support',
      'Role-based access & auth systems',
    ],
    visual: 'app',
  },
  {
    id: '03',
    icon: Server,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    accentColor: 'bg-orange-500',
    title: 'Backend Systems & APIs',
    tagline: 'The engine behind the curtain.',
    description:
      'Robust, distributed backend architectures designed for performance and resilience. We design APIs, microservices, and cloud infrastructure that scales gracefully with your user growth.',
    features: [
      'REST & GraphQL API design',
      'Microservices & event-driven arch',
      'Database design (SQL & NoSQL)',
      '99.99% uptime infrastructure',
    ],
    visual: 'backend',
  },
  {
    id: '04',
    icon: Cpu,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    accentColor: 'bg-purple-500',
    title: 'AI & Custom Solutions',
    tagline: 'Bespoke intelligence for your workflow.',
    description:
      'From AI-powered automation to fully custom product builds — we thrive on non-standard problems. No templates, no compromises. Just pure engineering capability applied directly to your unique challenge.',
    features: [
      'AI/ML model integration',
      'Intelligent workflow automation',
      'Custom tooling & internal systems',
      'End-to-end product architecture',
    ],
    visual: 'ai',
  },
];

const WebsiteVisual = () => (
  <div className="w-full h-full bg-white rounded-2xl shadow-inner border border-gray-100 flex flex-col overflow-hidden">
    <div className="h-8 border-b border-gray-100 bg-gray-50 flex items-center gap-1.5 px-3 shrink-0">
      <div className="w-2 h-2 rounded-full bg-red-300" />
      <div className="w-2 h-2 rounded-full bg-yellow-300" />
      <div className="w-2 h-2 rounded-full bg-green-300" />
      <div className="ml-3 flex-1 h-4 bg-gray-100 rounded" />
    </div>
    <div className="flex flex-1 min-h-0 overflow-hidden">
      <div className="w-24 border-r border-gray-50 p-3 flex flex-col gap-2 shrink-0">
        {[70, 50, 60, 45].map((w, i) => (
          <div key={i} className="h-2 bg-gray-100 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="flex-1 p-3 flex flex-col gap-3">
        <div className="h-20 bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-lg" />
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-14 bg-gray-50 rounded-lg border border-gray-100" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AppVisual = () => (
  <div className="w-full h-full bg-xentek-dark rounded-2xl p-4 flex flex-col gap-3">
    <div className="flex gap-2">
      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3">
        <div className="h-2 w-1/2 bg-teal-500/40 rounded mb-2" />
        <div className="h-5 bg-white/10 rounded" />
        <div className="mt-2 text-[10px] font-bold text-teal-400 tracking-widest">+24.5%</div>
      </div>
      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3">
        <div className="h-2 w-2/3 bg-indigo-400/40 rounded mb-2" />
        <div className="h-5 bg-white/10 rounded" />
        <div className="mt-2 text-[10px] font-bold text-indigo-400 tracking-widest">LIVE</div>
      </div>
    </div>
    <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col gap-2">
      {[40, 70, 55, 80, 50].map((h, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-1.5 bg-teal-500/30 rounded-full" style={{ width: `${h}%` }} />
        </div>
      ))}
    </div>
  </div>
);

const BackendVisual = () => (
  <div className="w-full h-full bg-[#0d1117] rounded-2xl p-4 font-mono text-xs overflow-hidden">
    <div className="flex items-center gap-1.5 mb-3">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <span className="ml-2 text-gray-500 text-[10px]">api.xentek.in</span>
    </div>
    <div className="space-y-1.5">
      <div><span className="text-gray-500">$</span> <span className="text-green-400">GET</span> <span className="text-blue-300">/api/v1/status</span></div>
      <div className="pl-3 space-y-1 text-[10px]">
        <div><span className="text-teal-300">"uptime"</span><span className="text-gray-500">:</span> <span className="text-yellow-300">"99.99%"</span></div>
        <div><span className="text-teal-300">"latency"</span><span className="text-gray-500">:</span> <span className="text-yellow-300">"12ms"</span></div>
        <div><span className="text-teal-300">"nodes"</span><span className="text-gray-500">:</span> <span className="text-orange-300">64</span></div>
        <div><span className="text-teal-300">"status"</span><span className="text-gray-500">:</span> <span className="text-green-300">"healthy"</span></div>
      </div>
      <div className="mt-3"><span className="text-gray-500">$</span> <span className="text-purple-400">POST</span> <span className="text-blue-300">/api/v1/deploy</span></div>
      <div className="pl-3 text-[10px] text-green-400">✓ Deployed in 1.2s</div>
    </div>
  </div>
);

const AiVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-950 to-indigo-950 rounded-2xl p-4 flex flex-col gap-3">
    <div className="flex gap-2 items-center mb-1">
      <div className="w-6 h-6 rounded-full bg-purple-500/40 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-purple-300" />
      </div>
      <span className="text-[10px] font-bold text-purple-300 tracking-widest uppercase">AI Engine</span>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
      <div className="text-[10px] text-gray-400 mb-2">Input</div>
      <div className="h-2 bg-white/10 rounded w-3/4 mb-1.5" />
      <div className="h-2 bg-white/10 rounded w-1/2" />
    </div>
    <div className="flex items-center gap-2 px-2">
      <div className="flex-1 h-px bg-white/10" />
      <div className="text-[9px] text-purple-400 font-bold tracking-wider">PROCESSING</div>
      <div className="flex-1 h-px bg-white/10" />
    </div>
    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3">
      <div className="text-[10px] text-purple-300 mb-2">Output</div>
      <div className="h-2 bg-purple-300/20 rounded w-full mb-1.5" />
      <div className="h-2 bg-purple-300/20 rounded w-4/5 mb-1.5" />
      <div className="h-2 bg-purple-300/20 rounded w-2/3" />
    </div>
  </div>
);

const visuals: Record<string, React.ReactNode> = {
  website: <WebsiteVisual />,
  app: <AppVisual />,
  backend: <BackendVisual />,
  ai: <AiVisual />,
};

export const ServiceDetails = () => {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs font-bold text-gray-400 tracking-[0.25em] uppercase">What we do</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                {/* Text side */}
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  {/* Service number + icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-11 h-11 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={service.iconColor} size={20} />
                    </div>
                    <span className="text-xs font-bold text-gray-300 tracking-[0.3em] font-mono">{service.id}</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-3">{service.tagline}</p>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark mb-5 leading-tight tracking-tight">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 mb-8 leading-relaxed text-base font-poppins">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full ${service.accentColor} flex items-center justify-center shrink-0`}>
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-xentek-dark border-b-2 border-xentek-dark pb-0.5 hover:text-xentek-accent hover:border-xentek-accent transition-colors duration-200 group"
                  >
                    Discuss your project
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                {/* Visual side */}
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/80"
                  >
                    <div
                      className={`absolute inset-0 rounded-3xl border-2 ${
                        service.visual === 'backend' || service.visual === 'ai'
                          ? 'border-gray-800'
                          : 'border-gray-100'
                      }`}
                    />
                    <div className={`absolute inset-0 ${
                      service.visual === 'website' ? 'bg-gray-50' :
                      service.visual === 'app' ? 'bg-xentek-dark' :
                      service.visual === 'backend' ? 'bg-[#0d1117]' :
                      'bg-gradient-to-br from-purple-950 to-indigo-950'
                    } p-5`}>
                      {visuals[service.visual]}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
