import { motion } from 'framer-motion';
import { Check, ImageIcon } from 'lucide-react';

/** Paste your SHE-AI product / phone mockup image URL here */
const SHE_AI_IMAGE_URL = 'https://live.staticflickr.com/65535/55420979337_ce1c3bff56_z.jpg';

const features = [
  'AI-powered intelligent assistant',
  "Women's health support",
  'Safety resources',
  'Wellness guidance',
  'Privacy-first experience',
];

export const SheAi = () => {
  return (
    <section id="she-ai" className="py-20 md:py-28 bg-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold tracking-wider uppercase border border-emerald-100"
          >
            <span className="w-1.5 h-1.5 font-figtree rounded-full bg-emerald-500" />
            Released
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[13px] text-gray-500 font-figtree font-medium tracking-wide"
          >
            AI · Women's Safety · Healthcare · Digital Wellbeing
          </motion.p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-xentek-dark tracking-tight mb-10"
        >
          Featured Solution —{' '}
          <span className="text-[#109e9b]">SHE-AI</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image / mockup container */}
            <div className="relative min-h-[420px] lg:min-h-[520px] flex items-center justify-center p-8 md:p-12 overflow-hidden bg-[#f4fbfb]">
              <div className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 40%, rgba(16,158,155,0.12), transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(244,114,182,0.06), transparent 50%)',
                }}
              />
              {/* Subtle network dots */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'radial-gradient(#109e9b 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />

              <div className="relative w-full max-w-[260px] mx-auto aspect-[9/19] rounded-[2rem] border border-gray-200/80 bg-white shadow-2xl shadow-[#109e9b]/10 overflow-hidden">
                {SHE_AI_IMAGE_URL ? (
                  <img
                    src={SHE_AI_IMAGE_URL}
                    alt="SHE-AI mobile application"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center bg-gradient-to-b from-white to-[#f0fafa]">
                    <div className="w-12 h-12 rounded-2xl bg-[#109e9b]/10 flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-[#109e9b]" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-gray-400 font-poppins leading-relaxed">
                      Add your SHE-AI mockup image via{' '}
                      <code className="text-[10px] text-[#109e9b]">SHE_AI_IMAGE_URL</code>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-xentek-dark tracking-wide mb-4">
                SHE-AI
              </h3>
              <p className="text-gray-500 font-figtree text-[15px] md:text-[18px] leading-relaxed mb-4">
                SHE-AI is an AI-powered digital companion built to empower women through intelligent
                assistance in health, safety, legal awareness, emotional support, and personal
                wellbeing.
              </p>
              <p className="text-gray-500 font-figtree text-[15px] md:text-[18px] leading-relaxed mb-8">
                Designed with privacy, accessibility, and inclusivity at its core, SHE-AI combines
                conversational AI with practical everyday features to deliver meaningful real-world
                impact.
              </p>

              <p className="text-[13px] font-figtree font-bold tracking-[0.15em] uppercase text-gray-500 mb-4">
                Key Features
              </p>
              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[15px] text-gray-600 font-poppins">
                    <span className="w-5 h-5 rounded-full bg-[#109e9b]/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#109e9b]" strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-[13px] font-figtree font-semibold text-[#109e9b] bg-[#109e9b]/10 px-3 py-1.5 rounded-full">
                  Completed Solution
                </span>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
