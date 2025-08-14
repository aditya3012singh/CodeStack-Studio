import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap } from 'lucide-react';

const MissionSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower individuals and teams with intelligent, beautifully designed applications that seamlessly integrate into their daily lives and help them achieve their goals more efficiently.',
      gradient: 'from-purple-600/20 to-pink-600/20',
      borderGradient: 'from-purple-500/40 to-pink-500/40',
      iconColor: 'text-purple-400'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading studio that shapes the future of digital experiences, creating applications that anticipate user needs and adapt intelligently to enhance human potential.',
      gradient: 'from-blue-600/20 to-cyan-600/20',
      borderGradient: 'from-blue-500/40 to-cyan-500/40',
      iconColor: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Our Values',
      values: [
        'User-centric innovation',
        'Quality over quantity', 
        'Continuous improvement',
        'Ethical technology',
        'Collaborative spirit',
        'Inclusive design'
      ],
      gradient: 'from-teal-600/20 to-emerald-600/20',
      borderGradient: 'from-teal-500/40 to-emerald-500/40',
      iconColor: 'text-teal-400'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 relative overflow-hidden">
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
              What Drives Us Forward
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`
                  bg-gradient-to-br ${pillar.gradient} 
                  border border-transparent bg-clip-padding
                  backdrop-blur-sm rounded-3xl p-8 h-full
                  hover:shadow-2xl hover:shadow-purple-500/10
                  transition-all duration-500 group relative overflow-hidden
                `}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${pillar.gradient})`,
                  borderImage: `linear-gradient(135deg, ${pillar.borderGradient}) 1`
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>

                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4 + index * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="mb-6"
                >
                  <pillar.icon className={`w-16 h-16 ${pillar.iconColor}`} />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gray-100 transition-colors duration-300">
                  {pillar.title}
                </h3>

                {pillar.description ? (
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {pillar.description}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {pillar.values?.map((value, valueIndex) => (
                      <motion.li
                        key={valueIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.8 + valueIndex * 0.1, 
                          duration: 0.6 
                        }}
                        className="text-gray-300 flex items-center group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        {value}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MissionSection;