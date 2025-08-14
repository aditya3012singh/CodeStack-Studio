import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingElements = [
    { icon: Code, delay: 0.5, x: 100, y: -50 },
    { icon: Layers, delay: 0.8, x: -80, y: 80 },
    { icon: Zap, delay: 1.1, x: 120, y: 100 }
  ];

  return (
    <section className="min-h-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map(({ icon: Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-500/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: [0, x, 0],
              y: [0, y, 0]
            }}
            transition={{
              opacity: { delay, duration: 0.6 },
              scale: { delay, duration: 0.6 },
              x: { delay: delay + 1, duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { delay: delay + 1, duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              left: `${20 + index * 25}%`,
              top: `${30 + index * 20}%`
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building the{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Core
              </motion.span>{' '}
              of Your Digital Success
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We craft exceptional web and mobile applications that drive growth, 
              enhance user experience, and transform your digital presence into a 
              competitive advantage.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                className="border-2 border-slate-600 hover:border-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Logo Animation */}
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                rotateY: [0, 360],
                rotateX: [0, 15, 0, -15, 0]
              }}
              transition={{ 
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <svg 
                width="300" 
                height="300" 
                viewBox="0 0 300 300" 
                className="drop-shadow-2xl"
              >
                {/* Stack of cubes with depth */}
                <motion.g
                  initial={{ scale: 0, rotateZ: -45 }}
                  animate={{ scale: 1, rotateZ: 0 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                  {/* Bottom cube */}
                  <motion.rect
                    x="50"
                    y="180"
                    width="80"
                    height="80"
                    rx="8"
                    fill="url(#gradient1)"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 180, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Middle cube */}
                  <motion.rect
                    x="110"
                    y="120"
                    width="80"
                    height="80"
                    rx="8"
                    fill="url(#gradient2)"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 120, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Top cube */}
                  <motion.rect
                    x="170"
                    y="60"
                    width="80"
                    height="80"
                    rx="8"
                    fill="url(#gradient3)"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 60, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                  />
                </motion.g>

                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;