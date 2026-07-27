import { useState, useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MessageSquare, Cpu, Heart, Send } from 'lucide-react';

// ────────── Floating-label input ──────────
interface FloatingFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}
const FloatingField = ({ id, label, type = 'text', required, value, onChange }: FloatingFieldProps) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full rounded-xl border border-gray-200 bg-white px-4 pt-5 pb-2.5 text-sm font-poppins text-gray-800 outline-none transition-all duration-200 focus:border-[#109e9b] focus:ring-2 focus:ring-[#109e9b]/15 placeholder-transparent"
        placeholder={label}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 font-poppins transition-all duration-200 ${
          lifted ? 'top-2 text-[11px] text-[#109e9b] font-semibold' : 'top-1/2 -translate-y-1/2 text-sm text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

// ────────── Floating-label select ──────────
interface FloatingSelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}
const FloatingSelect = ({ id, label, options, value, onChange }: FloatingSelectProps) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pt-5 pb-2.5 text-sm font-poppins text-gray-800 outline-none transition-all duration-200 focus:border-[#109e9b] focus:ring-2 focus:ring-[#109e9b]/15"
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 font-poppins transition-all duration-200 ${
          lifted ? 'top-2 text-[11px] text-[#109e9b] font-semibold' : 'top-1/2 -translate-y-1/2 text-sm text-gray-400'
        }`}
      >
        {label}
      </label>
      {/* chevron */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

// ────────── Why-card data ──────────
const whyCards = [
  {
    icon: <MessageSquare className="h-5 w-5" strokeWidth={1.8} />,
    title: 'Transparent Communication',
    desc: 'Every project begins with understanding your goals — before writing a single line of code.',
  },
  {
    icon: <Cpu className="h-5 w-5" strokeWidth={1.8} />,
    title: 'Tailored Engineering',
    desc: 'No templates. Every solution is designed specifically for your requirements and context.',
  },
  {
    icon: <Heart className="h-5 w-5" strokeWidth={1.8} />,
    title: 'Long-Term Partnership',
    desc: "From planning to deployment and ongoing support, we're with you throughout the journey.",
  },
];

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const setField = (key: keyof typeof form) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: form.name,
          email: form.email,
          company: form.company || 'Not provided',
          projectType: form.projectType,
          budget: form.budget || 'Not provided',
          timeline: form.timeline || 'Not provided',
          message: form.description,
          subject: `New Project Inquiry from ${form.name}`,
          from_name: 'XenTek Contact Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg('Network error. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="contact-form" ref={ref} className="relative bg-[#f8fffe] py-20 lg:py-28">
      {/* Subtle divider top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#109e9b]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#109e9b]/20 bg-[#109e9b]/[0.07] px-4 py-1.5 text-xs font-bold font-figtree tracking-[0.16em] uppercase text-[#109e9b]">
            Project Inquiry
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-figtree text-gray-900">
            Tell Us About Your Vision
          </h2>
          <p className="mt-3 text-base text-gray-500 font-poppins max-w-xl mx-auto">
            Share your project details and we'll get back to you within 24 hours with a tailored response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">
          {/* ── Left: Form ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-10 shadow-lg shadow-gray-100/80"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center py-12 text-center gap-5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#109e9b]/10">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M8 18L15 25L28 11" stroke="#109e9b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-figtree text-gray-900">Inquiry Received!</h3>
                <p className="text-gray-500 font-poppins max-w-sm">
                  Thank you for reaching out. Our team will review your project and respond within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'',email:'',company:'',projectType:'',budget:'',timeline:'',description:'' }); }}
                  className="mt-2 rounded-full border border-gray-200 px-6 py-2.5 text-sm font-semibold font-figtree text-gray-700 transition hover:border-[#109e9b]/40 hover:text-[#109e9b]"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingField id="ct-name" label="Full Name *" required value={form.name} onChange={setField('name')} />
                  <FloatingField id="ct-email" label="Email Address *" type="email" required value={form.email} onChange={setField('email')} />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FloatingField id="ct-company" label="Company / Organization" value={form.company} onChange={setField('company')} />
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingSelect
                    id="ct-type"
                    label="Project Type *"
                    value={form.projectType}
                    onChange={setField('projectType')}
                    options={[
                      { value: 'website', label: 'Website' },
                      { value: 'webapp', label: 'Web Application' },
                      { value: 'mobile', label: 'Mobile App' },
                      { value: 'ai', label: 'AI Solution' },
                      { value: 'business', label: 'Business System' },
                      { value: 'custom', label: 'Custom Software' },
                      { value: 'other', label: 'Other' },
                    ]}
                  />
                  <FloatingSelect
                    id="ct-budget"
                    label="Estimated Budget"
                    value={form.budget}
                    onChange={setField('budget')}
                    options={[
                      { value: '<5k', label: 'Under ₹5,000' },
                      { value: '5k-15k', label: '₹5,000 - ₹15,000' },
                      { value: '15k-50k', label: '₹15,000 - ₹50,000' },
                      { value: '50k+', label: '₹50,000+' },
                      { value: 'unsure', label: 'Not Sure Yet' },
                    ]}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FloatingSelect
                    id="ct-timeline"
                    label="Project Timeline"
                    value={form.timeline}
                    onChange={setField('timeline')}
                    options={[
                      { value: '<1m', label: 'Less than 1 month' },
                      { value: '1-3m', label: '1 – 3 months' },
                      { value: '3-6m', label: '3 – 6 months' },
                      { value: '6m+', label: '6+ months' },
                      { value: 'flexible', label: 'Flexible' },
                    ]}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <textarea
                    id="ct-description"
                    rows={5}
                    value={form.description}
                    onChange={(e) => setField('description')(e.target.value)}
                    placeholder="Project Description — Share your vision, goals, and any specific requirements..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-poppins text-gray-800 outline-none resize-none transition-all duration-200 focus:border-[#109e9b] focus:ring-2 focus:ring-[#109e9b]/15 placeholder:text-gray-400"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  {errorMsg && (
                    <div className="mb-4 rounded-xl bg-red-50 p-3 text-center text-sm font-poppins text-red-600 border border-red-100">
                      {errorMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-xentek-dark px-8 py-4 text-white font-figtree font-semibold text-base cursor-pointer tracking-wide shadow-lg shadow-gray-900/15 transition-all duration-300 hover:bg-[#109e9b] hover:shadow-xl hover:shadow-[#109e9b]/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Let's Build It
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                      </>
                    )}
                  </button>
                </motion.div>

                <motion.p variants={itemVariants} className="text-center text-xs text-gray-400 font-poppins">
                  No spam. No commitment. We'll reach out to understand your needs first.
                </motion.p>
              </form>
            )}
          </motion.div>

          {/* ── Right: Why cards ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="rounded-3xl border border-[#109e9b]/15 bg-gradient-to-br from-[#109e9b]/[0.06] to-teal-50/40 p-7">
              <h3 className="text-xl font-bold font-figtree text-gray-900 mb-1">Why Contact XenTek?</h3>
              <p className="text-sm text-gray-500 font-poppins leading-relaxed">
                We don't just develop software. We collaborate, plan, and engineer digital solutions tailored to your vision.
              </p>
            </motion.div>

            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                custom={i}
                whileHover={{ y: -3, boxShadow: '0 12px 36px rgba(16,158,155,0.10)' }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#109e9b]/10 text-[#109e9b] transition-colors duration-300 group-hover:bg-[#109e9b] group-hover:text-white">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold font-figtree text-gray-900 mb-1">{card.title}</h4>
                    <p className="text-sm text-gray-500 font-poppins leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#109e9b]/20 to-transparent" />
    </section>
  );
};
