import { Hero } from '../components/services/Hero';
import { ServiceDetails } from '../components/services/ServiceDetails';
import { Matrix } from '../components/services/Matrix';
import { Support } from '../components/services/Support';

export const Services = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <ServiceDetails />
      <Matrix />
      <Support />
    </div>
  );
};
