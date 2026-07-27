import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Clock, MapPin } from 'lucide-react';

// Inline SVG brand icons
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const quickCards = [
  {
    icon: <Mail className="h-5 w-5" strokeWidth={1.8} />,
    title: 'Email Us',
    primary: 'officialxentek@gmail.com',
    sub: 'For all project inquiries',
    href: 'mailto:officialxentek@gmail.com',
    color: '#109e9b',
  },
  {
    icon: <Clock className="h-5 w-5" strokeWidth={1.8} />,
    title: 'Business Hours',
    primary: 'Mon - Fri, 9 AM - 6 PM',
    sub: 'Indian Standard Time (IST)',
    href: null,
    color: '#0d8a87',
  },
  {
    icon: <LinkedInIcon />,
    title: 'LinkedIn',
    primary: 'XenTek Official',
    sub: 'Connect professionally',
    href: 'https://www.linkedin.com/company/xentek-in/',
    color: '#0b7875',
  },
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    primary: '@_.xentek._',
    sub: 'Follow our journey',
    href: 'https://www.instagram.com/_.xentek._/',
    color: '#097062',
  },
  {
    icon: <MapPin className="h-5 w-5" strokeWidth={1.8} />,
    title: 'Office Location',
    primary: 'Chennai, Tamil Nadu, India',
    sub: 'Physical office — coming soon',
    href: null,
    color: '#076050',
  },
];

type QuickCard = (typeof quickCards)[number];

const renderCardContent = (card: QuickCard) => (
  <>
    <div
      className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white"
      style={{
        background: `${card.color}12`,
        color: card.color,
      }}
    >
      {card.icon}
    </div>

    <div>
      <p className="text-xs text-gray-400 font-poppins mb-1">{card.title}</p>
      <p className="font-semibold font-figtree text-gray-800 text-sm leading-snug transition-colors duration-300">
        {card.primary}
      </p>
      <p className="text-xs text-gray-400 font-poppins mt-0.5">{card.sub}</p>
    </div>

    {card.href && (
      <div
        className="mt-auto flex h-7 w-7 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `${card.color}15`, color: card.color }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 9.5L9.5 2.5M9.5 2.5H3.5M9.5 2.5V8.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )}
  </>
);

export const QuickContact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative bg-[#f8fffe] py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#109e9b]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#109e9b]/20 bg-[#109e9b]/[0.07] px-4 py-1.5 text-xs font-bold font-figtree tracking-[0.16em] uppercase text-[#109e9b]">
            Quick Contact
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-figtree text-gray-900">
            Other Ways to{' '}
            <span style={{ color: '#109e9b' }}>Reach Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {quickCards.map((card, i) => {
            const sharedProps = {
              initial: { opacity: 0, y: 28 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
              whileHover: { y: -5, boxShadow: `0 16px 40px ${card.color}18` },
              className: `group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#109e9b]/25 no-underline ${
                card.href ? 'cursor-pointer' : 'cursor-default'
              }`,
            };

            if (card.href) {
              const isExternal = card.href.startsWith('http');
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...sharedProps}
                >
                  {renderCardContent(card)}
                </motion.a>
              );
            }

            return (
              <motion.div key={card.title} {...sharedProps}>
                {renderCardContent(card)}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#109e9b]/20 to-transparent" />
    </section>
  );
};
