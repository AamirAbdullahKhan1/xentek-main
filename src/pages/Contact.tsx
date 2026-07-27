import { Hero } from '../components/contact/Hero';
import { ContactSection } from '../components/contact/ContactSection';
import { ProcessTimeline } from '../components/contact/ProcessTimeline';
import { QuickContact } from '../components/contact/QuickContact';
import { Faq } from '../components/contact/Faq';
import { BottomCta } from '../components/contact/BottomCta';

export const Contact = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <ContactSection />
      <ProcessTimeline />
      <QuickContact />
      <Faq />
      <BottomCta />
    </div>
  );
};
