import { Hero } from '../components/pricing/Hero';
import { Philosophy } from '../components/pricing/Philosophy';
import { ServiceModules } from '../components/pricing/ServiceModules';
import { CostFactors } from '../components/pricing/CostFactors';
import { Compare } from '../components/pricing/Compare';
import { Timeline } from '../components/pricing/Timeline';
import { Faq } from '../components/pricing/Faq';
import { BottomCta } from '../components/pricing/BottomCta';

export const Pricing = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Philosophy />
      <ServiceModules />
      <CostFactors />
      <Compare />
      <Timeline />
      <Faq />
      <BottomCta />
    </div>
  );
};
