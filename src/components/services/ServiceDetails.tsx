import { motion } from 'framer-motion';
import { Monitor, Smartphone, Server, Cpu, ArrowRight, Check, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    icon: Monitor,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    accentColor: 'bg-teal-500',
    borderColor: 'border-teal-100',
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
    // ↓ Paste your 16:9 image URL here
    imageUrl: 'https://live.staticflickr.com/65535/55419332862_7e4f444c9c_b.jpg',
  },
  {
    id: '02',
    icon: Smartphone,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    accentColor: 'bg-indigo-500',
    borderColor: 'border-indigo-100',
    title: 'Web & Mobile Application',
    tagline: 'Complex problems, elegant solutions.',
    description:
      "Custom web applications and dashboards built with modern, scalable frameworks. Whether it's a customer portal, internal tool, or SaaS product — we prioritize speed, security, and frictionless user journeys.",
    features: [
      'React, Next.js & Vue.js ecosystems',
      'Real-time data & WebSocket integration',
      'Progressive Web App (PWA) support',
      'Role-based access & auth systems',
    ],
    // ↓ Paste your 16:9 image URL here
    imageUrl: 'https://live.staticflickr.com/65535/55420309111_de2e66c51e_b.jpg',
  },
  {
    id: '03',
    icon: Server,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    accentColor: 'bg-orange-500',
    borderColor: 'border-orange-100',
    title: 'Business Systems & Automation',
    tagline: 'The engine behind the curtain.',
    description:
      'Robust, distributed backend architectures designed for performance and resilience. We design APIs, microservices, and cloud infrastructure that scales gracefully with your user growth.',
    features: [
      'REST & GraphQL API design',
      'Microservices & event-driven arch',
      'Database design (SQL & NoSQL)',
      '99.99% uptime infrastructure',
    ],
    // ↓ Paste your 16:9 image URL here
    imageUrl: 'https://live.staticflickr.com/65535/55420617191_4eb90cb6aa_b.jpg',
  },
  {
    id: '04',
    icon: Cpu,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    accentColor: 'bg-purple-500',
    borderColor: 'border-purple-100',
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
    // ↓ Paste your 16:9 image URL here
    imageUrl: 'https://live.staticflickr.com/65535/55420840119_804dcfb1a4_b.jpg',
  },
];

// ─── Service Image Visual ────────────────────────────────────────────────────
interface ServiceImageProps {
  imageUrl: string;
  title: string;
  borderColor: string;
}

const ServiceImage = ({ imageUrl, title, borderColor }: ServiceImageProps) => {
  if (imageUrl) {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <img
          src={imageUrl}
          alt={`${title} visual`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle bottom gradient overlay for depth */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    );
  }

  // Placeholder shown when no imageUrl is provided yet
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50 rounded-3xl border-2 border-dashed ${borderColor}`}
    >
      <ImageOff size={32} className="text-gray-300" />
      <p className="text-xs text-gray-400 font-medium tracking-wide">Image coming soon</p>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────

export const ServiceDetails = () => {
  return (
    <section className="py-4 pb-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-[18px] font-bold text-gray-400 tracking-[0.25em] uppercase">What we do</span>
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* ── Text side ── */}
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  {/* Service number + icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={service.iconColor} size={20} />
                    </div>
                    <span className="text-[16px] font-bold text-gray-600 tracking-[0.3em] font-mono">{service.id}</span>
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

                {/* ── Image side ── */}
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-gray-200/80"
                    style={{ aspectRatio: '16 / 9' }}
                  >
                    <ServiceImage
                      imageUrl={service.imageUrl}
                      title={service.title}
                      borderColor={service.borderColor}
                    />
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
