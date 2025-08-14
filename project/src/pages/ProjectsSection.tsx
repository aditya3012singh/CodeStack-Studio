import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Grid, List, SlidersHorizontal, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Explore my latest work including mobile apps, web applications, and development tools
          </p>
        </motion.div>

        {/* Enhanced Search & Filter Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-2xl"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search apps, websites, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl sm:rounded-2xl py-3 sm:py-4 pl-10 sm:pl-12 pr-4 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
              />
            </div>

            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* View Mode Toggle - Hidden on mobile for space */}
              <div className="hidden sm:flex bg-slate-800/50 rounded-xl sm:rounded-2xl p-1 border border-slate-600/50">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>

              {/* Mobile Controls Row */}
              <div className="flex items-center gap-3 sm:flex-1">
                {/* Filter Toggle */}
  

                {/* Sort */}


                {/* Results Count - Mobile */}
                <div className="flex sm:hidden items-center gap-2 px-3 py-2.5 bg-slate-800/30 rounded-xl border border-slate-700/30">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-xs font-medium">
                    {filteredProjects.length}
                  </span>
                </div>
              </div>

              {/* Results Count - Desktop */}
              <div className="hidden lg:flex items-center gap-2 px-4 py-3 bg-slate-800/30 rounded-2xl border border-slate-700/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                </span>
              </div>
            </div>
          </div>

          {/* Expandable Filters */}
          <motion.div
            initial={false}
            animate={{ 
              height: showFilters ? 'auto' : 0,
              opacity: showFilters ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {showFilters && (
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-700/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3">Category</label>
                    <select className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg sm:rounded-xl px-3 py-2 text-white text-sm sm:text-base">
                      <option>All Categories</option>
                      <option>Mobile Apps</option>
                      <option>Web Apps</option>
                      <option>Websites</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3">Technology</label>
                    <select className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg sm:rounded-xl px-3 py-2 text-white text-sm sm:text-base">
                      <option>All Technologies</option>
                      <option>React</option>
                      <option>Flutter</option>
                      <option>Node.js</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3">Status</label>
                    <select className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg sm:rounded-xl px-3 py-2 text-white text-sm sm:text-base">
                      <option>All Status</option>
                      <option>Live</option>
                      <option>In Development</option>
                      <option>Coming Soon</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={{ 
            visible: { 
              transition: { 
                staggerChildren: viewMode === 'grid' ? 0.1 : 0.05 
              } 
            } 
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              : "space-y-4 sm:space-y-6"
          }
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
            >
              <ProjectCard project={project} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold rounded-xl sm:rounded-2xl border border-slate-600 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 text-sm sm:text-base"
            >
              Load More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;