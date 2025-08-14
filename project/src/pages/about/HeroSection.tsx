import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-purple-500/30 w-3 h-3' :
              i % 3 === 1 ? 'bg-blue-500/20 w-2 h-2' :
              'bg-teal-500/25 w-4 h-4'
            }`}
            animate={{
              x: [0, 150 + i * 10, 0],
              y: [0, -120 - i * 15, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + i * 7}%`
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, purple 0%, transparent 50%), radial-gradient(circle at 80% 20%, blue 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, purple 0%, transparent 50%), radial-gradient(circle at 20% 80%, blue 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, purple 0%, transparent 50%), radial-gradient(circle at 80% 20%, blue 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="text-3xl font-bold text-white"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                CS
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 25%, #06b6d4 50%, #10b981 75%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '300% 300%'
            }}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            CoreStack
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-300">
              Studio
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We forge the future of digital experiences through{' '}
            <motion.span 
              className="text-purple-400 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              innovative applications
            </motion.span>{' '}
            that enhance productivity, wellness, and human potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Journey
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-gray-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Apps
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default HeroSection;