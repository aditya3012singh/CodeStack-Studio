import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Download, Users, Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

const FeaturedSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const featuredProject = projects[0];
  
  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Combine main image with additional images
  const allImages = [featuredProject.image, ...(featuredProject.images || [])];

  const achievements = [
    { icon: Users, value: '2K+', label: 'Active Users' },
    { icon: Star, value: '4.8', label: 'Rating' },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying || allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === allImages.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, allImages.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Flagship Projects</span>
          </h2>    
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl font-medium text-white/90 px-4 sm:px-0 max-w-4xl mx-auto leading-relaxed">
            Discover our suite of innovative apps designed to enhance productivity, creativity, and digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/60 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/40 rounded-full"></div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(featuredProject.link, '_blank')}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full text-white text-xs sm:text-sm font-medium hover:bg-white/30 transition-all duration-300 active:scale-95"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">View Live</span>
              <span className="xs:hidden">Live</span>
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8 xl:p-12">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  {featuredProject.title}
                </h3>
                
                {featuredProject.rating && featuredProject.rating > 0 && (
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-300 font-semibold text-sm sm:text-base">{featuredProject.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-300 text-sm sm:text-base">{featuredProject.reviews}</span>
                  </div>
                )}

                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  {featuredProject.description}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {featuredProject.tags.slice(0, 6).map((tag, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + idx * 0.1, duration: 0.6 }}
                      className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex-shrink-0"></div>
                      <span className="text-gray-200 font-medium text-sm sm:text-base">{tag}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg sm:rounded-xl border border-purple-500/20"
                  >
                    <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-lg sm:text-2xl font-bold text-white mb-1">{achievement.value}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{achievement.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image Slideshow with Parallax */}
            <motion.div 
              style={{ y: yImage }} 
              className="relative group order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Slideshow Container */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={allImages[currentImageIndex]}
                      alt={`${featuredProject.title} Preview ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full h-auto shadow-2xl border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-500"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 rounded-xl sm:rounded-2xl group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-500"></div>
                  
                  {/* Navigation Buttons */}
                  {allImages.length > 1 && (
                    <>
                      <motion.button
                        onClick={goToPreviousImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                      
                      <motion.button
                        onClick={goToNextImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {allImages.length > 1 && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 bg-black/70 rounded-full text-white text-xs sm:text-sm font-medium">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  )}
                </div>

                {/* Image Indicators */}
                {allImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                    {allImages.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToImage(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg'
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Floating elements - Hidden on mobile for cleaner look */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl hidden sm:flex"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl hidden sm:flex"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Download className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedSection;