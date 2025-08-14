import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Target } from 'lucide-react';

const StorySection: React.FC = () => {
  const highlights = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every pixel crafted with love'
    },
    {
      icon: Sparkles,
      title: 'Innovation First',
      description: 'Cutting-edge solutions'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Built for real people'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Results that matter'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="prose prose-lg prose-invert">
<p className="text-gray-300 text-lg leading-relaxed">
  <span className='text-sky-600 w-24 text-2xl'>CoreStack Studio</span> began with a single developer’s vision — to craft digital products that aren’t just functional,
  but meaningful. I wanted every line of code and every pixel to serve a purpose: solving real problems for real people.
</p>
<p className="text-gray-300 text-lg leading-relaxed">
  Since starting in 2024, I’ve delivered complete end-to-end web and mobile solutions for clients in multiple countries.
  From sleek UI/UX design to solid backend architecture, I ensure every project is built for performance,
  scalability, and user satisfaction.
</p>
<p className="text-gray-300 text-lg leading-relaxed">
  Today, Corestack Studio is on a mission to help businesses, startups, and creators bring their ideas to life —
  whether that’s through AI-powered automation, cross-platform mobile apps, or custom-built web platforms.
  This is just the beginning, and the best is yet to come.
</p>

              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <highlight.icon className="w-8 h-8 text-purple-400 mb-2" />
                    <h4 className="text-white font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img 
                  src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg" 
                  alt="Team collaboration"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-3xl group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-500"></div>
                
                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">No. of</div>
                    <div className="text-purple-100 text-sm">Happy Users</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-6 -left-6 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1 Year</div>
                    <div className="text-teal-100 text-sm">Of Innovation</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default StorySection;