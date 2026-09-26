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
    imageUrl: 'https://live.staticflickr.com/65535/55420840119_804dcfb1a4_b.jpg',
  },
];

// Security services data
const securityServices = [
  {
    id: 'S1',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    accentColor: 'bg-rose-500',
    title: 'Software Composition Analysis',
    tagline: "Know what's inside your software. Secure what it depends on.",
    description:
      "Modern applications rely heavily on open-source libraries and third-party dependencies. While these components accelerate development, outdated or vulnerable packages can introduce security risks. XenTek's Software Composition Analysis service helps businesses identify vulnerable dependencies, understand their potential impact, and make informed decisions about remediation.",
    features: [
      'Dependency Vulnerability Scanning: identify known vulnerabilities in open-source libraries and third-party packages',
      'CVE Analysis: examine reported vulnerabilities, their severity, affected versions, and available fixes',
      'Dependency Verification: analyse direct and transitive dependencies to understand where vulnerabilities originate',
      'Remediation Recommendations: identify suitable patched versions and recommend practical upgrade strategies',
      'Software Risk Reporting: deliver structured reports outlining identified vulnerabilities, their severity, and recommended actions',
    ],
    approach: [
      { label: 'Discover', desc: 'Scan the application dependencies using appropriate SCA tools' },
      { label: 'Analyse', desc: 'Verify findings, examine affected packages, and assess available vulnerability information' },
      { label: 'Prioritise', desc: 'Organise findings by severity and relevance to identify remediation priorities' },
      { label: 'Recommend', desc: 'Provide actionable recommendations, including suitable upgrade paths and remediation considerations' },
    ],
    outcome:
      "A clearer understanding of your application's dependency risks, supported by a structured vulnerability report and practical recommendations to help your development team address them.",
    ctaLabel: 'Explore SCA Services',
    ctaLabel2: 'Request an Assessment',
    disclaimer: null,
  },
  {
    id: 'S2',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    accentColor: 'bg-amber-500',
    title: 'Web Application Security Assessment',
    tagline: "Identify vulnerabilities. Strengthen your application's defences.",
    description:
      "A web application is more than its user interface. Its APIs, authentication mechanisms, server-side logic, and security configurations all play an important role in protecting business operations and user data. XenTek's Web Application Security Assessment helps businesses identify potential vulnerabilities in their web applications through structured security testing and analysis.",
    features: [
      'Vulnerability Assessment: identify common web application security weaknesses using automated tools and manual verification',
      'Authentication & Session Security: review authentication mechanisms, session handling, and related security controls',
      'API Security Assessment: evaluate API endpoints for common security issues, including inadequate authorization and input validation',
      'Input Validation Review: assess how applications handle user-supplied data and requests',
      'Security Configuration Review: identify potentially insecure application and server configurations within the agreed scope',
      'Security Reporting: document verified findings, their potential impact, and recommended remediation measures',
    ],
    approach: [
      { label: 'Scope', desc: 'Define the application components, testing boundaries, and assessment objectives with the client' },
      { label: 'Assess', desc: 'Examine the application using appropriate security testing tools and techniques' },
      { label: 'Validate', desc: 'Manually investigate relevant findings to distinguish verified vulnerabilities from false positives' },
      { label: 'Report', desc: 'Deliver a structured report containing findings, potential impacts, and remediation recommendations' },
    ],
    outcome:
      "A clearer picture of your application's security posture, with documented findings and practical guidance to help your development team address identified weaknesses.",
    ctaLabel: 'Request a Security Assessment',
    ctaLabel2: null,
    disclaimer: 'All assessments are conducted with explicit authorization and within an agreed testing scope.',
  },
];

// Service Image component
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
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50 rounded-3xl border-2 border-dashed ${borderColor}`}
    >
      <ImageOff size={32} className="text-gray-300" />
      <p className="text-xs text-gray-400 font-medium tracking-wide">Image coming soon</p>
    </div>
  );
};

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

        {/* Core engineering services */}
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
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={service.iconColor} size={20} />
                    </div>
                    <span className="text-[16px] font-bold text-gray-600 tracking-[0.3em] font-mono">{service.id}</span>
                  </div>

                  <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-3">{service.tagline}</p>

                  <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark mb-5 leading-tight tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-gray-500 mb-8 leading-relaxed text-base font-poppins">
                    {service.description}
                  </p>

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

        {/* Security Solutions Section Separator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-28 mb-20"
        >
          <div className="flex items-center gap-6 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
            <div className="flex items-center gap-3 bg-xentek-dark text-white px-5 py-2.5 rounded-full shadow-lg shadow-xentek-dark/20 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-xentek-accent">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs font-bold tracking-[0.22em] uppercase">Security Solutions</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-500 font-poppins text-sm md:text-base leading-relaxed">
              Purpose-built cyber security services to help you understand your risk exposure, validate your defences, and take confident, informed action.
            </p>
          </div>
        </motion.div>

        {/* Security services */}
        <div className="space-y-24 pb-4">
          {securityServices.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
              >
                {/* Text side */}
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${service.iconColor}`}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span className="text-[16px] font-bold text-gray-600 tracking-[0.3em] font-mono">{service.id}</span>
                  </div>

                  <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-3">{service.tagline}</p>

                  <h2 className="text-3xl md:text-4xl font-bold text-xentek-dark mb-5 leading-tight tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-gray-500 mb-8 leading-relaxed text-base font-poppins">
                    {service.description}
                  </p>

                  <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">What we offer</p>
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${service.accentColor} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-600 font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-xentek-dark border-b-2 border-xentek-dark pb-0.5 hover:text-xentek-accent hover:border-xentek-accent transition-colors duration-200 group"
                    >
                      {service.ctaLabel}
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    {service.ctaLabel2 && (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-xentek-accent transition-colors duration-200"
                      >
                        {service.ctaLabel2}
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>

                  {service.disclaimer && (
                    <p className="text-xs text-gray-400 font-poppins italic mt-2">{service.disclaimer}</p>
                  )}
                </div>

                {/* Approach + Outcome card */}
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-xl shadow-gray-100/60 overflow-hidden"
                  >
                    <div className="p-8 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-6">Our Approach</p>
                      <div className="space-y-4">
                        {service.approach.map((step, i) => (
                          <div key={step.label} className="flex items-start gap-4">
                            <div className={`w-7 h-7 rounded-full ${service.accentColor} flex items-center justify-center shrink-0 mt-0.5`}>
                              <span className="text-white text-[11px] font-bold">{i + 1}</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-xentek-dark">{step.label}</p>
                              <p className="text-xs text-gray-500 font-poppins leading-relaxed mt-0.5">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-3">The Outcome</p>
                      <p className="text-sm text-gray-600 font-poppins leading-relaxed">{service.outcome}</p>
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
