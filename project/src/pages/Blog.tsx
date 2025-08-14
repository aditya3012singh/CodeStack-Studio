import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag, Star, Sparkles } from 'lucide-react';

const Blog: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Productivity Apps: AI-Powered Personal Assistants',
      excerpt: 'Exploring how artificial intelligence is revolutionizing task management and personal productivity applications.',
      author: 'Alex Rodriguez',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Technology',
      tags: ['AI', 'Productivity', 'Future Tech'],
      image: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg',
      featured: true,
      gradient: 'from-purple-600 via-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'Building HabitFlow: Lessons in Gamification Design',
      excerpt: 'A deep dive into the design decisions and psychological principles behind our most successful habit tracking app.',
      author: 'Sarah Chen',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Design',
      tags: ['UX Design', 'Gamification', 'Product Development'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      gradient: 'from-pink-600 via-purple-600 to-indigo-600'
    },
    {
      id: 3,
      title: 'Flutter vs React Native: Our Multi-Platform Strategy',
      excerpt: 'Why we chose Flutter for our mobile apps and how it\'s enabling rapid development across platforms.',
      author: 'Marcus Johnson',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Development',
      tags: ['Flutter', 'Mobile Development', 'Cross-platform'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600'
    },
    {
      id: 4,
      title: 'User Feedback That Shaped Our Apps: A Year in Review',
      excerpt: 'How listening to our community led to breakthrough features and improved user experiences.',
      author: 'Emma Davis',
      date: '2025-01-01',
      readTime: '4 min read',
      category: 'Product',
      tags: ['User Research', 'Community', 'Product Strategy'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    },
    {
      id: 5,
      title: 'The Psychology Behind Successful Habit Formation',
      excerpt: 'Understanding the science that makes habit tracking apps effective and how we apply it in our design.',
      author: 'Dr. Lisa Park',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Psychology',
      tags: ['Behavioral Science', 'Habits', 'Wellness'],
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600'
    },
    {
      id: 6,
      title: 'Privacy-First App Development: Our Commitment',
      excerpt: 'How we\'re building apps that respect user privacy while delivering personalized experiences.',
      author: 'Alex Rodriguez',
      date: '2024-12-25',
      readTime: '5 min read',
      category: 'Privacy',
      tags: ['Privacy', 'Security', 'Ethics'],
      image: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg',
      gradient: 'from-slate-600 via-gray-600 to-zinc-600'
    }
  ];

  const categories = ['All', 'Technology', 'Design', 'Development', 'Product', 'Psychology', 'Privacy'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      rotateX: 5,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const SparkleIcon = ({ className }: { className?: string }) => (
    <motion.div
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      <Sparkles className="w-4 h-4" />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden custom-scrollbar">
      {/* Animated Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="floating-orb" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Hero Section */}
        <motion.div 
          className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          
          {/* Floating Sparkles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-purple-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-3 h-3" />
              </motion.div>
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="flex items-center justify-center gap-2 mb-6"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SparkleIcon className="text-purple-400" />
                <span className="text-purple-300 font-medium">Latest Updates & Insights</span>
                <SparkleIcon className="text-blue-400" />
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4, #8b5cf6, #a855f7)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Discover Innovation
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Stay updated with our latest developments, technical insights, and thought leadership 
                in app development and user experience design.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-16 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden group ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:text-white border border-slate-700 hover:border-purple-500/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Post */}
          <AnimatePresence>
            {featuredPost && selectedCategory === 'All' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="mb-20"
              >
                <motion.div
                  className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group"
                  whileHover="hover"
                  variants={cardHoverVariants}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <motion.div
                        className="flex items-center gap-3 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.span
                          className={`bg-gradient-to-r ${featuredPost.gradient} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className="w-4 h-4" />
                          Featured
                        </motion.span>
                        <span className="text-purple-300 font-semibold">{featuredPost.category}</span>
                      </motion.div>
                      
                      <motion.h2 
                        className="text-4xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {featuredPost.title}
                      </motion.h2>
                      
                      <motion.p 
                        className="text-gray-300 text-lg mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {featuredPost.excerpt}
                      </motion.p>
                      
                      <motion.div
                        className="flex items-center gap-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-2">
                          <User className="w-5 h-5 text-purple-400" />
                          <span className="text-gray-300 font-medium">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-cyan-400" />
                          <span className="text-gray-300">{featuredPost.readTime}</span>
                        </div>
                      </motion.div>

                      <motion.button
                        className={`bg-gradient-to-r ${featuredPost.gradient} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        Read Full Article
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </div>
                    
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                    >
                      <div className="relative overflow-hidden rounded-3xl">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-tr ${featuredPost.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      </div>
                      
                      {/* Floating Tags */}
                      <div className="absolute -top-4 -right-4 flex flex-wrap gap-2">
                        {featuredPost.tags.slice(0, 2).map((tag, index) => (
                          <motion.span
                            key={tag}
                            className="bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group cursor-pointer"
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <motion.div
                    className="h-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
                    variants={cardHoverVariants}
                    style={{ perspective: 1000 }}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60`} />
                      
                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <span className={`bg-gradient-to-r ${post.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                          {post.category}
                        </span>
                      </motion.div>
                    </div>
                    
                    <div className="p-8">
                      <motion.div
                        className="flex items-center gap-4 mb-4 text-sm text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </motion.div>
                      
                      <motion.h3
                        className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {post.title}
                      </motion.h3>
                      
                      <motion.p
                        className="text-gray-300 mb-6 line-clamp-3 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        {post.excerpt}
                      </motion.p>

                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            className="flex items-center gap-1 bg-slate-800/80 text-gray-300 px-3 py-1 rounded-xl text-xs font-medium hover:bg-slate-700/80 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300 text-sm font-medium">{post.author}</span>
                        </div>
                        
                        <motion.div
                          className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-12 mt-20 text-center overflow-hidden border border-purple-500/20"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5" />
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="flex items-center justify-center gap-2 mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h2 className="text-4xl font-bold text-white">Never Miss an Update</h2>
                <Sparkles className="w-6 h-6 text-blue-400" />
              </motion.div>
              
              <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Subscribe to our newsletter for the latest insights, app updates, and behind-the-scenes content from our development team.
              </p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;