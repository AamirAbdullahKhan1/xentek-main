import { motion } from 'framer-motion';

const team = [
  {
    name: 'Marcus Chen',
    role: 'CEO & FOUNDER',
    desc: 'A systems architect who believes that software should be elegant, scalable, and relentlessly optimized.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'HEAD OF ENGINEERING',
    desc: 'Leads development teams with a strict focus on sustainable architecture and secure networking.',
  },
  {
    name: 'David Ye',
    role: 'LEAD UX DESIGN',
    desc: 'Brings aesthetic precision to code, turning complex data into intuitive, human-centered interfaces.',
  }
];

export const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">OUR PEOPLE</div>
          <h2 className="text-3xl md:text-5xl font-bold text-xentek-dark mb-6">The Builders Mindset</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We are a collective of makers and strategists. We live for code and strive relentlessly towards absolute mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-gray-100 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                   <span className="text-gray-400 font-medium">Portrait</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <div className="text-xs font-bold text-teal-600 tracking-wider uppercase mb-3">{member.role}</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <button className="px-8 py-3 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors">
              Join the Team
           </button>
        </div>

      </div>
    </section>
  );
};
