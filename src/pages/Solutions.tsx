import { Hero } from '../components/solutions/Hero';
import { Ecosystem } from '../components/solutions/Ecosystem';
import { SheAi } from '../components/solutions/SheAi';
import { XenRetail } from '../components/solutions/XenRetail';
import { InnovationTimeline } from '../components/solutions/InnovationTimeline';
import { Philosophy } from '../components/solutions/Philosophy';
import { FutureVision } from '../components/solutions/FutureVision';
import { BottomCta } from '../components/solutions/BottomCta';

export const Solutions = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Ecosystem />
      <SheAi />
      <XenRetail />
      <InnovationTimeline />
      <Philosophy />
      <FutureVision />
      <BottomCta />
    </div>
  );
};
