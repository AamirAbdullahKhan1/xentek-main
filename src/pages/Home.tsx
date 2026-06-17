import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Process } from '../components/home/Process';
import { Work } from '../components/home/Work';
import { CommunityFaq } from '../components/home/CommunityFaq';
import { Cta } from '../components/home/Cta';

export const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Process />
      <Services />
      <Work />
      <CommunityFaq />
      <Cta />
    </div>
  );
};
