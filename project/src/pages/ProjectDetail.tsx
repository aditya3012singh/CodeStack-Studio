import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Download, ExternalLink, Play, Shield, Zap, Users, Check } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center font-bold text-2xl">
                  {project.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
                  {project.rating > 0 && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-medium text-lg">{project.rating}</span>
                      </div>
                      <span className="text-white/60">•</span>
                      <span className="text-white text-lg">{project.reviews} reviews</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-white/90 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {project.status === 'Released' ? (
                  <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                    <Download className="w-5 h-5" />
                    Download Now
                  </button>
                ) : project.status === 'Early Access' ? (
                  <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                    <Users className="w-5 h-5" />
                    Join Beta
                  </button>
                ) : (
                  <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                    <ExternalLink className="w-5 h-5" />
                    Get Notified
                  </button>
                )}
                
                <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transition-all duration-200">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src={project.screenshots[0]}
                alt={project.title}
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className={`absolute top-8 right-8 px-4 py-2 rounded-full font-medium ${
            project.status === 'Released' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
            project.status === 'Early Access' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
            'bg-orange-500/20 text-orange-300 border border-orange-500/30'
          }`}>
            {project.status}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About {project.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.title} represents our commitment to creating applications that genuinely enhance users' lives. 
                Through careful design and thoughtful implementation, we've crafted an experience that adapts to your 
                unique needs and helps you achieve your goals more efficiently.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Built with cutting-edge technology and user-centric design principles, this {project.type.toLowerCase()} 
                combines powerful functionality with an intuitive interface that makes complex tasks feel effortless.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-800 border border-slate-700 rounded-xl">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Privacy First</h3>
                  <p className="text-gray-400 text-sm">Your data stays secure and private</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-800 border border-slate-700 rounded-xl">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Lightning Fast</h3>
                  <p className="text-gray-400 text-sm">Optimized for performance and speed</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-800 border border-slate-700 rounded-xl">
                <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Community Driven</h3>
                  <p className="text-gray-400 text-sm">Built with user feedback and insights</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-start gap-3 p-6 bg-slate-800 border border-slate-700 rounded-xl"
              >
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Screenshots */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300 rounded-2xl"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Early Access Program */}
        {project.status !== 'Released' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-2xl p-8 mb-20"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {project.status === 'Early Access' ? 'Join Early Access Program' : 'Coming Soon'}
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                {project.status === 'Early Access' 
                  ? 'Get exclusive access to beta features and help shape the future of this app. Join our community of early adopters.'
                  : 'Be the first to know when this app launches. Sign up for updates and get early access when available.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105">
                  {project.status === 'Early Access' ? 'Join Beta' : 'Get Notified'}
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* Stats */}
        {project.rating > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{project.rating}★</div>
                <div className="text-gray-300">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{project.reviews}</div>
                <div className="text-gray-300">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">{project.downloads}</div>
                <div className="text-gray-300">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4.9★</div>
                <div className="text-gray-300">User Experience</div>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;