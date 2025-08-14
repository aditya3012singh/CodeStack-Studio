import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, Users, Award, Globe, Zap } from 'lucide-react';

const TimelineSection: React.FC = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Started Freelance Journey',
      description: 'Began working as an independent full-stack web and Flutter developer, delivering end-to-end solutions for clients.',
      icon: Rocket,
      color: 'from-violet-500 to-purple-500',
      achievements: [
        'First international client',
        'Web + Flutter project delivery',
        'Built personal portfolio'
      ]
    },
    {
      year: '2024',
      title: 'Global Client Projects',
      description: 'Successfully completed diverse projects for clients across multiple countries, handling everything from UI/UX to backend deployment.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Clients from 8+ countries',
        'Cross-platform expertise',
        '100% positive feedback'
      ]
    },
    {
      year: '2025',
      title: 'Expanded Tech Stack',
      description: 'Mastered modern frameworks and tools like Next.js, Node.js, Prisma, PostgreSQL, Firebase, and advanced Flutter for multi-platform delivery.',
      icon: Award,
      color: 'from-pink-500 to-rose-500',
      achievements: [
        'Full-stack & mobile mastery',
        'Advanced backend architecture',
        'High-performance deployments'
      ]
    },
    {
      year: '2025',
      title: 'Advanced Development & AI Features',
      description: 'Integrated advanced features and AI-driven automation in client projects, boosting performance and user experience.',
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
      achievements: [
        'AI-powered modules in apps',
        '250K+ combined user reach',
        'Recognized for innovation'
      ]
    },
    {
      year: '2026',
      title: 'Scaling Client Base',
      description: 'Worked on bigger projects, collaborated with agencies, and built long-term partnerships for continuous growth.',
      icon: Users,
      color: 'from-indigo-500 to-sky-500',
      achievements: [
        'Bigger projects & partnerships',
        'Ongoing contracts',
        'Trusted by industry leaders'
      ]
    },
    {
      year: '2026',
      title: 'Building a Brand & SaaS Product',
      description: 'Expanding into a personal brand with premium digital solutions, mentoring new developers, and launching own SaaS product.',
      icon: Star,
      color: 'from-amber-500 to-orange-500',
      achievements: [
        'Launch of first SaaS product',
        'Mentored 10+ junior devs',
        'Established brand identity'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              From a small team with big dreams to a recognized force in digital innovation
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </motion.div>

          <div className="relative">
            {/* Desktop Timeline line - centered */}
            <motion.div 
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-teal-500 h-full rounded-full shadow-lg shadow-purple-500/30"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />
            
            {/* Mobile Timeline line - left aligned */}
            <motion.div 
              className="lg:hidden absolute left-6 sm:left-8 top-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-teal-500 h-full rounded-full shadow-lg shadow-purple-500/30"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />
            
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className={`flex items-center ${
                    // Desktop: alternate sides, Mobile: all left-aligned
                    'lg:' + (index % 2 === 0 ? 'flex-row-reverse' : '')
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="lg:hidden w-full pl-16 sm:pl-20">
                    <motion.div 
                      className="bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:border-slate-600/50 transition-all duration-500 group relative overflow-hidden"
                      whileHover={{ 
                        y: -4, 
                        scale: 1.01,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                    >
                      {/* Background gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <motion.div 
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6, type: "spring" }}
                        >
                          <milestone.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                            {milestone.year}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {milestone.description}
                      </p>

                      {/* Achievement badges */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {milestone.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.6 + achIndex * 0.1,
                              duration: 0.4
                            }}
                            className="px-2 sm:px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs sm:text-sm border border-slate-600/30 hover:bg-slate-600/50 transition-colors duration-300"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                    <motion.div 
                      className="bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-500 group relative overflow-hidden"
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                    >
                      {/* Background gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <motion.div 
                          className={`w-14 h-14 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6, type: "spring" }}
                        >
                          <milestone.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className={`text-3xl font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent mb-2`}>
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {milestone.description}
                      </p>

                      {/* Achievement badges */}
                      <div className="flex flex-wrap gap-2">
                        {milestone.achievements.map((achievement, achIndex) => (
                          <motion.span
                            key={achIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.6 + achIndex * 0.1,
                              duration: 0.4
                            }}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/30 hover:bg-slate-600/50 transition-colors duration-300"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dots */}
                  {/* Mobile dot - left aligned */}
                  <motion.div 
                    className={`lg:hidden absolute left-4 sm:left-6 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${milestone.color} rounded-full border-3 sm:border-4 border-slate-950 z-10 shadow-lg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.2 + 0.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
                    }}
                  />
                  
                  {/* Desktop dot - centered */}
                  <motion.div 
                    className={`hidden lg:block w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-slate-950 z-10 shadow-lg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.2 + 0.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.5,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
                    }}
                  />
                  
                  <div className="hidden lg:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TimelineSection;