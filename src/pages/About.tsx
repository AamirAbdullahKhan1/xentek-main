import { Hero } from '../components/about/Hero';
import { Evolution } from '../components/about/Evolution';
import { MissionValues } from '../components/about/MissionValues';
import { Trust } from '../components/about/Trust';
import { Team } from '../components/about/Team';


export const About = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Evolution />
      <MissionValues />
      <Trust />
      <Team />
      {/* We can use a customized CTA or the same one. The design image 2 shows a similar CTA at the end. */}
      <div className="bg-xentek-dark py-24 text-center">
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's build the <span className="italic font-serif text-teal-300">next</span> together.
         </h2>
         <p className="text-teal-100 max-w-lg mx-auto mb-10">
            Join a global network of innovators who are pushing the boundaries of what's possible in digital architecture.
         </p>
         <div className="flex justify-center gap-4">
            <button className="bg-white text-xentek-dark px-8 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors">
               Join the Community
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
               Get in Touch
            </button>
         </div>
      </div>
    </div>
  );
};
