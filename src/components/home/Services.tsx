import { motion } from 'framer-motion';
import { ArrowRight, Globe, Layers, Smartphone, Bot, Target, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCubes, faGears, faHeadset } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    num: "01",
    title: "Website Solutions",
    description: "Professional, responsive websites designed to establish a strong online presence and seamlessly showcase your business.",
    icon: <Globe className="text-gray-600 w-16 h-16" />,
    className: "md:col-span-4 bg-gradient-to-br from-gray-50/80 to-gray-100/30 border border-gray-100",
    titleClass: "text-gray-900",
    descClass: "text-gray-700",
    numClass: "text-gray-400",
    hasLink: true,
  },
  {
    num: "02",
    title: "Web Apps",
    description: "Custom, scalable web applications tailored to streamline your workflow and enhance customer experience.",
    icon: <Layers className="text-white w-6 h-6" />,
    className: "md:col-span-2 bg-xentek-dark text-white shadow-xl shadow-teal-900/10",
    titleClass: "text-white",
    descClass: "text-gray-200",
    numClass: "text-white/40",
    bottomTag: "FULL-STACK",
    bottomIcon: <FontAwesomeIcon icon={faCubes} className="text-white w-6 h-6" />,
    iconBox: "bg-white/10",
  },
  {
    num: "03",
    title: "Mobile Apps",
    description: "High-performance, cross-platform mobile applications built for both Android and iOS environments.",
    icon: <Smartphone className="text-teal-600 w-6 h-6" />,
    className: "md:col-span-2 bg-white border border-gray-100",
    titleClass: "text-gray-900",
    descClass: "text-gray-700",
    numClass: "text-gray-400",
    bottomTag: "CROSS-PLATFORM",
    bottomIcon: <FontAwesomeIcon icon={faXmark} className="text-gray-600 w-4 h-4" />,
    iconBox: "bg-teal-50",
  },
  {
    num: "04",
    title: "AI & Automation",
    description: "Smart, AI-powered automation systems designed to reduce repetitive tasks and elevate interactions.",
    icon: <Bot className="text-teal-600 w-6 h-6" />,
    className: "md:col-span-2 bg-white border border-gray-100",
    titleClass: "text-gray-900",
    descClass: "text-gray-700",
    numClass: "text-gray-400",
    bottomTag: "WORKFLOW OPTIMIZATION",
    bottomIcon: <FontAwesomeIcon icon={faGears} className="text-gray-600 w-5 h-5" />,
    iconBox: "bg-teal-50",
  },
  {
    num: "05",
    title: "Consulting",
    description: "Expert guidance and strategic roadmapping to transform your initial idea into a solid technical architecture.",
    icon: <Target className="text-teal-600 w-6 h-6" />,
    className: "md:col-span-2 bg-white border border-gray-100",
    titleClass: "text-gray-900",
    descClass: "text-gray-700",
    numClass: "text-gray-400",
    bottomTag: "CUSTOMIZATION",
    bottomIcon: <FontAwesomeIcon icon={faHeadset} className="text-gray-600 w-5 h-5" />,
    iconBox: "bg-teal-50",
  },
];

const securityServices = [
  {
    num: "S1",
    title: "Software Composition Analysis",
    description: "Identify vulnerable open-source dependencies and third-party packages before they become a liability. Structured scanning, CVE analysis, and actionable remediation recommendations.",
    icon: <ShieldCheck className="text-rose-600 w-6 h-6" />,
    className: "md:col-span-3 bg-white border border-gray-100",
    titleClass: "text-gray-900",
    descClass: "text-gray-700",
    numClass: "text-gray-400",
    bottomTag: "DEPENDENCY SECURITY",
    bottomIconEl: <ShieldCheck className="text-rose-400 w-5 h-5" />,
    iconBox: "bg-rose-50",
  },
  {
    num: "S2",
    title: "Web Application Security Assessment",
    description: "Structured security testing of your web applications — covering authentication, APIs, input validation, and configuration. Verified findings with practical remediation guidance.",
    icon: <ShieldAlert className="text-amber-600 w-6 h-6" />,
    className: "md:col-span-3 bg-white border border-gray-100",
    titleClass: "text-gray-900",
    descClass: "text-gray-700",
    numClass: "text-gray-400",
    bottomTag: "APP SECURITY TESTING",
    bottomIconEl: <ShieldAlert className="text-amber-400 w-5 h-5" />,
    iconBox: "bg-amber-50",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-xs font-bold tracking-[0.2em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-xentek-accent" />
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-xentek-dark tracking-tight leading-[1.1]">
              Engineering <span className="italic text-xentek-accent font-serif">Utility</span> <br />
              &amp; Digital Elegance
            </h2>
          </div>

          <div className="max-w-md lg:pl-8 lg:border-l-2 border-gray-200 lg:pb-2">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-poppins">
              We specialize in turning complex requirements into high-performance digital tools, focusing on the intersection of technical precision and editorial-grade design.
            </p>
          </div>
        </div>

        {/* Core Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`rounded-[2rem] border-2 cursor-pointer border-gray-200 p-8 lg:p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500 ${service.className}`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className={`text-5xl lg:text-6xl font-serif font-medium ${service.numClass}`}>
                    {service.num}
                  </span>
                  {service.iconBox ? (
                    <div className={`p-4 rounded-2xl ${service.iconBox}`}>
                      {service.icon}
                    </div>
                  ) : (
                    <div className="pt-2">
                      {service.icon}
                    </div>
                  )}
                </div>

                <h3 className={`text-2xl lg:text-3xl font-bold mb-4 tracking-tight ${service.titleClass}`}>
                  {service.title}
                </h3>
                <p className={`text-sm lg:text-base leading-relaxed max-w-sm font-poppins ${service.descClass}`}>
                  {service.description}
                </p>
              </div>

              <div className="mt-10 flex items-end justify-between">
                {service.hasLink && (
                  <Link to="/services" className="inline-flex items-center gap-2 text-xentek-accent font-bold text-sm hover:text-teal-700 transition-colors">
                    Explore Services <ArrowRight size={16} />
                  </Link>
                )}

                {service.bottomTag && (
                  <div className={`w-full pt-6 border-t flex justify-between items-center ${service.className.includes('bg-xentek-dark') ? 'border-white/10' : 'border-gray-100'}`}>
                    <span className={`text-xs font-bold tracking-widest flex items-center gap-2 ${service.className.includes('bg-xentek-dark') ? 'text-white/70' : 'text-gray-500'}`}>
                      {service.bottomTag}
                    </span>
                    {service.bottomIcon}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Solutions separator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-14 mb-8 flex items-center gap-5"
        >
          <div className="h-px flex-1 bg-gray-100" />
          <div className="flex items-center gap-2.5 bg-xentek-dark text-white px-4 py-2 rounded-full shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-xentek-accent">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Security Solutions</span>
          </div>
          <div className="h-px flex-1 bg-gray-100" />
        </motion.div>

        {/* Security Services Bento Grid — 6-col, each card spans 3 */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {securityServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`rounded-[2rem] border-2 cursor-pointer border-gray-200 p-8 lg:p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500 ${service.className}`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className={`text-5xl lg:text-6xl font-serif font-medium ${service.numClass}`}>
                    {service.num}
                  </span>
                  <div className={`p-4 rounded-2xl ${service.iconBox}`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className={`text-2xl lg:text-3xl font-bold mb-4 tracking-tight ${service.titleClass}`}>
                  {service.title}
                </h3>
                <p className={`text-sm lg:text-base leading-relaxed max-w-sm font-poppins ${service.descClass}`}>
                  {service.description}
                </p>
              </div>

              <div className="mt-10">
                <div className="w-full pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-gray-500">
                    {service.bottomTag}
                  </span>
                  {service.bottomIconEl}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
