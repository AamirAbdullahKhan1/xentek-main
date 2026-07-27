import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../assets/xentek-logo.png';

const navLinks = [
  {
    name: 'Services',
    path: '/services',
    hint: 'Engineering & development',
  },
  {
    name: 'Pricing',
    path: '/pricing',
    hint: 'Transparent, tailored quotes',
  },
  {
    name: 'Solutions',
    path: '/solutions',
    hint: 'Products we build',
  },
  {
    name: 'Contact',
    path: '/contact',
    hint: 'Start a conversation',
  },
];

const panelVariants: Variants = {
  closed: {
    clipPath: 'circle(0% at calc(100% - 2.75rem) 2.75rem)',
    opacity: 0,
  },
  open: {
    clipPath: 'circle(150% at calc(100% - 2.75rem) 2.75rem)',
    opacity: 1,
    transition: {
      clipPath: { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const },
      opacity: { duration: 0.2 },
    },
  },
  exit: {
    clipPath: 'circle(0% at calc(100% - 2.75rem) 2.75rem)',
    opacity: 0,
    transition: {
      clipPath: { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const },
      opacity: { duration: 0.25, delay: 0.15 },
    },
  },
};

const contentVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { delay: 0.18, duration: 0.35 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const linkVariants: Variants = {
  closed: { opacity: 0, y: 28, filter: 'blur(6px)' },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.22 + i * 0.07,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
    className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#109e9b]/30 hover:shadow-md hover:shadow-[#109e9b]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#109e9b]/40"
  >
    <motion.span
      className="absolute inset-0 rounded-2xl border border-[#109e9b]/0"
      animate={
        isOpen
          ? { borderColor: 'rgba(16,158,155,0.25)', scale: 1.06 }
          : { borderColor: 'rgba(16,158,155,0)', scale: 1 }
      }
      transition={{ duration: 0.3 }}
    />
    <div className="relative h-[15px] w-[20px]">
      <motion.span
        className="absolute left-0 h-[2px] w-full rounded-full bg-xentek-dark origin-center"
        animate={
          isOpen
            ? { top: '50%', rotate: 45, y: '-50%', width: '100%' }
            : { top: 0, rotate: 0, y: 0, width: '100%' }
        }
        transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
      />
      <motion.span
        className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-xentek-dark origin-left"
        animate={
          isOpen
            ? { opacity: 0, scaleX: 0, x: 8 }
            : { opacity: 1, scaleX: 1, x: 0, width: '70%' }
        }
        transition={{ duration: 0.22 }}
      />
      <motion.span
        className="absolute left-0 h-[2px] rounded-full bg-xentek-dark origin-center"
        animate={
          isOpen
            ? { bottom: '50%', rotate: -45, y: '50%', width: '100%' }
            : { bottom: 0, rotate: 0, y: 0, width: '100%' }
        }
        transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
      />
    </div>
  </button>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={closeMenu}>
                <img src={logo} alt="XenTek Logo" className="h-12 w-auto" />
                <span className="text-[28px] font-semibold font-figtree text-xentek-dark tracking-wide">
                  Xen<span className="text-xentek-accent font-figtree tracking-wide">Tek</span>
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-semibold tracking-wider font-nunitoSans transition-colors duration-200 hover:text-gray-600 relative ${
                    location.pathname === link.path ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-xentek-accent"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="bg-xentek-dark text-white font-figtree px-6 py-2.5 rounded-full text-base font-medium tracking-wide hover:bg-gray-800 transition-colors cursor-pointer duration-300"
              >
                Start a Project
              </Link>
            </div>

            <div className="flex items-center cursor-pointer md:hidden">
              <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-[60] flex flex-col bg-white md:hidden overflow-hidden"
          >
            {/* Background layers */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(#052222 1px, transparent 1px), linear-gradient(90deg, #052222 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#109e9b]/12 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-100/60 blur-3xl" />

            {/* Animated accent line */}
            <motion.div
              className="pointer-events-none absolute top-0 left-0 h-1 bg-gradient-to-r from-[#109e9b] via-xentek-accent to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            <motion.div
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="relative flex flex-1 flex-col"
            >
              {/* Menu header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5">
                  <img src={logo} alt="" className="h-9 w-auto" aria-hidden />
                  <span className="text-lg font-semibold font-figtree text-xentek-dark">
                    Xen<span className="text-xentek-accent">Tek</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-100 bg-white/80 text-gray-400 backdrop-blur-sm transition-colors hover:border-[#109e9b]/30 hover:text-xentek-dark"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M1 1L13 13M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Intro chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.4 }}
                className="mx-6 mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#109e9b]/15 bg-[#109e9b]/[0.06] px-3.5 py-1.5"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#109e9b]" strokeWidth={2} />
                <span className="text-[12px] font-figtree font-bold tracking-[0.18em] uppercase text-[#109e9b]">
                  Explore XenTek
                </span>
              </motion.div>

              {/* Navigation links */}
              <nav className="flex-1 px-5 py-4">
                <ul className="space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.li
                        key={link.path}
                        custom={i}
                        variants={linkVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          to={link.path}
                          onClick={closeMenu}
                          className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-5 py-5 transition-all duration-300 active:scale-[0.98] ${
                            isActive
                              ? 'border-[#109e9b]/25 bg-[#109e9b]/[0.06] shadow-sm shadow-[#109e9b]/10'
                              : 'border-transparent bg-transparent hover:border-gray-100 hover:bg-gray-50/80'
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="mobile-nav-glow"
                              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#109e9b]/[0.08] to-transparent"
                              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                            />
                          )}

                          <span
                            className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold tabular-nums transition-colors duration-300 ${
                              isActive
                                ? 'bg-[#109e9b] text-white shadow-md shadow-[#109e9b]/25'
                                : 'bg-white text-gray-600 border border-gray-400 group-hover:bg-[#109e9b]/10 group-hover:text-[#109e9b]'
                            }`}
                          >
                            0{i + 1}
                          </span>

                          <div className="relative z-10 min-w-0 flex-1">
                            <span
                              className={`block text-xl font-bold font-figtree tracking-tight transition-colors ${
                                isActive ? 'text-xentek-dark' : 'text-gray-700 group-hover:text-xentek-dark'
                              }`}
                            >
                              {link.name}
                            </span>
                            <span className="mt-0.5 block truncate text-xs font-poppins text-gray-400">
                              {link.hint}
                            </span>
                          </div>

                          <motion.span
                            className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isActive
                                ? 'border-[#109e9b]/30 bg-white text-[#109e9b]'
                                : 'border-gray-100 bg-white text-gray-500 group-hover:border-[#109e9b]/20 group-hover:text-[#109e9b]'
                            }`}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                          </motion.span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="border-t border-gray-100 px-6 py-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48, duration: 0.45 }}
                >
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="group flex w-full items-center justify-between gap-3 rounded-2xl bg-xentek-dark px-5 py-4 text-white shadow-xl shadow-xentek-dark/15 transition-all duration-300 hover:bg-[#109e9b] active:scale-[0.98]"
                  >
                    <span className="text-left">
                      <span className="block text-base font-semibold font-figtree">Start a Project</span>
                      <span className="block text-[11px] text-white/60 font-poppins">
                        Let's build something exceptional
                      </span>
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-white/20">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
